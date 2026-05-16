#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# generate-pages.sh
#
# Pipeline for each route that has a Google Doc URL:
#   1. Download the Google Doc as a .docx file
#   2. Convert .docx → .md  (via pandoc)
#   3. Save .md to  ./content/{route-path}.md
#   4. Write        ./app/{route-path}/page.tsx  (reads the .md at build time)
#
# Routes with no Google Doc but an existing directory get a placeholder page.tsx.
# Routes with no Google Doc AND no existing directory are skipped — they are
# served by a dynamic [param] route (e.g. service-areas/town/[town]/page.tsx).
#
# Usage:
#   chmod +x generate-pages.sh
#   ./generate-pages.sh [STRUCTURE_FILE] [APP_DIR] [CONTENT_DIR]
#
# Defaults:
#   STRUCTURE_FILE = ./site-structure.md
#   APP_DIR        = ./app
#   CONTENT_DIR    = ./content
#
# Requirements: bash ≥4, curl, pandoc
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

# ── Config ────────────────────────────────────────────────────────────────────
STRUCTURE_FILE="${1:-./site-structure.md}"
APP_DIR="${2:-./app}"
CONTENT_DIR="${3:-./content}"
REQUEST_DELAY=0.8  # seconds between Google requests — be polite
CURL_TIMEOUT=30    # seconds per download

# Strip trailing slashes
APP_DIR="${APP_DIR%/}"
CONTENT_DIR="${CONTENT_DIR%/}"

# ── Colors ────────────────────────────────────────────────────────────────────
if [[ -t 1 ]]; then
  GREEN='\033[0;32m'; YELLOW='\033[1;33m'
  RED='\033[0;31m';   BLUE='\033[0;34m'; DIM='\033[2m'; NC='\033[0m'
else
  GREEN=''; YELLOW=''; RED=''; BLUE=''; DIM=''; NC=''
fi

ok()   { echo -e "  ${GREEN}✓${NC}  $*"; }
warn() { echo -e "  ${YELLOW}⚠${NC}  $*"; }
err()  { echo -e "  ${RED}✗${NC}  $*"; }
step() { echo -e "\n${BLUE}▶${NC} $*"; }
dim()  { echo -e "  ${DIM}$*${NC}"; }

# ── Helpers ───────────────────────────────────────────────────────────────────

# /plumbing/water-heaters/repair/ → PlumbingWaterHeatersRepair
route_to_component() {
  echo "$1" \
    | sed 's|^/||; s|/$||' \
    | tr '/' '-' \
    | sed 's/-\([a-zA-Z]\)/\U\1/g' \
    | sed 's/^\([a-z]\)/\U\1/' \
    | tr -d '-'
}

# /plumbing/water-heaters/repair/ → ./content/plumbing/water-heaters/repair.md
route_to_md_path() {
  local stripped="${1%/}"   # drop trailing slash
  stripped="${stripped#/}"  # drop leading slash
  echo "${CONTENT_DIR}/${stripped}.md"
}

# /plumbing/water-heaters/repair/ → content/plumbing/water-heaters/repair.md
route_to_content_import() {
  local stripped="${1%/}"
  stripped="${stripped#/}"
  echo "content/${stripped}.md"
}

# Extract first Markdown H1 (# Title) or first non-empty line as title
extract_md_title() {
  local md_file="$1"
  local h1
  h1=$(grep -m1 '^# ' "$md_file" 2>/dev/null | sed 's/^# //' | tr -d '\r' || true)
  if [[ -n "$h1" ]]; then echo "$h1"; return; fi
  grep -m1 '[[:alnum:]]' "$md_file" 2>/dev/null \
    | tr -d '\r' \
    | sed 's/^[#[:space:]]*//' \
    | cut -c1-120 \
    || echo ""
}

# Escape for a TypeScript single-quoted string
ts_escape() {
  echo "$1" | sed "s/\\\\/\\\\\\\\/g; s/'/\\\\'/g"
}

# ── Write page.tsx ────────────────────────────────────────────────────────────
write_page() {
  local out_file="$1"
  local component="$2"
  local route="$3"
  local doc_url="${4:-}"
  local title="$5"
  local content_rel="$6"   # e.g. content/plumbing/water-heaters/repair.md
  local has_content="$7"   # "true" | "false"

  local safe_title
  safe_title=$(ts_escape "$title")

  if [[ "$has_content" == "true" ]]; then
    cat > "$out_file" << ENDOFFILE
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Source doc:  ${doc_url}
// Content file: ${content_rel}
const MD_PATH = path.join(process.cwd(), '${content_rel}')

export async function generateMetadata(): Promise<Metadata> {
  const raw = fs.readFileSync(MD_PATH, 'utf-8')
  const h1 = raw.match(/^#\s+(.+)$/m)?.[1] ?? '${safe_title}'
  return {
    title: h1,
    description: h1,
  }
}

export default function ${component}Page() {
  const content = fs.readFileSync(MD_PATH, 'utf-8')

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg prose-headings:font-bold prose-a:text-blue-600">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </main>
  )
}
ENDOFFILE

  else
    cat > "$out_file" << ENDOFFILE
import type { Metadata } from 'next'

// Route:  ${route}
// Status: placeholder — no content linked yet
export const metadata: Metadata = {
  title: '${safe_title}',
  description: '${safe_title}',
}

export default function ${component}Page() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg">
        <h1>${safe_title}</h1>
        <p>Content coming soon.</p>
      </article>
    </main>
  )
}
ENDOFFILE
  fi
}

# ── Preflight ─────────────────────────────────────────────────────────────────
[[ ! -f "$STRUCTURE_FILE" ]] && { err "Not found: $STRUCTURE_FILE"; exit 1; }

for cmd in curl pandoc; do
  command -v "$cmd" &>/dev/null || {
    err "Required tool missing: $cmd"
    [[ "$cmd" == "pandoc" ]] && echo "       Install: https://pandoc.org/installing.html"
    exit 1
  }
done

mkdir -p "$CONTENT_DIR"

echo -e "\n${BLUE}JM Heights — Page Generator${NC}"
echo    "  Structure : $STRUCTURE_FILE"
echo    "  App dir   : $APP_DIR"
echo    "  Content   : $CONTENT_DIR"
echo    "  Pandoc    : $(pandoc --version | head -1)"

# ── Parse structure file ──────────────────────────────────────────────────────
step "Parsing $STRUCTURE_FILE..."

routes=()
doc_urls=()
declare -A seen_routes

while IFS= read -r line; do
  route=$(echo "$line" \
    | grep -oP '\(/[a-z0-9][a-z0-9/ -]*?\)' \
    | head -1 \
    | tr -d '()' \
    || true)

  [[ -z "$route" ]] && continue

  route=$(echo "$route" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
  [[ "$route" != /* ]] && route="/$route"
  [[ "$route" != */ ]] && route="$route/"

  [[ -n "${seen_routes[$route]+_}" ]] && continue
  seen_routes["$route"]=1

  doc_url=$(echo "$line" \
    | grep -oP 'https://docs\.google\.com/document/d/[A-Za-z0-9_-]+' \
    | head -1 \
    || true)

  routes+=("$route")
  doc_urls+=("$doc_url")
done < "$STRUCTURE_FILE"

echo "  Found ${#routes[@]} unique routes."

# ── Temp files ────────────────────────────────────────────────────────────────
tmp_docx=$(mktemp /tmp/gdoc_XXXXXX.docx)
tmp_md=$(mktemp /tmp/gdoc_XXXXXX.md)
trap 'rm -f "$tmp_docx" "$tmp_md"' EXIT

# ── Process routes ────────────────────────────────────────────────────────────
created=0; placeholders=0; fetch_errors=0; dynamic_skips=0
total=${#routes[@]}

for i in "${!routes[@]}"; do
  route="${routes[$i]}"
  doc_url="${doc_urls[$i]}"
  num=$((i + 1))

  step "[$num/$total] $route"

  component=$(route_to_component "$route")
  [[ -z "$component" ]] && component="Home"

  route_rel="${route#/}"
  app_page_dir="${APP_DIR}/${route_rel}"
  app_page_file="${app_page_dir}page.tsx"
  md_file=$(route_to_md_path "$route")
  content_rel=$(route_to_content_import "$route")

  dir_exists=false
  [[ -d "$app_page_dir" ]] && dir_exists=true

  # No doc + no existing dir → served by dynamic [param] route
  if [[ -z "$doc_url" ]] && [[ "$dir_exists" == false ]]; then
    warn "No doc + no existing dir → dynamic route, skipping"
    ((dynamic_skips++)) || true
    continue
  fi

  mkdir -p "$app_page_dir"
  mkdir -p "$(dirname "$md_file")"

  # ── Download DOCX → convert to .md ─────────────────────────────────────────
  md_ready=false
  title="$component"

  if [[ -n "$doc_url" ]]; then
    doc_id=$(echo "$doc_url" \
      | grep -oP '(?<=/d/)[A-Za-z0-9_-]+' \
      | head -1 \
      || true)

    if [[ -n "$doc_id" ]]; then
      docx_url="https://docs.google.com/document/d/${doc_id}/export?format=docx"
      dim "Downloading → $docx_url"

      http_code=$(
        curl -sL \
          --max-time "$CURL_TIMEOUT" \
          --max-redirs 5 \
          -o "$tmp_docx" \
          -w "%{http_code}" \
          "$docx_url" 2>/dev/null
      ) || http_code="000"

      if [[ "$http_code" == "200" ]] && [[ -s "$tmp_docx" ]]; then
        dim "Converting DOCX → Markdown..."

        if pandoc \
            --from=docx \
            --to=gfm \
            --wrap=none \
            --strip-comments \
            "$tmp_docx" \
            -o "$tmp_md" 2>/dev/null; then

          cp "$tmp_md" "$md_file"
          md_ready=true

          fetched_title=$(extract_md_title "$md_file")
          [[ -n "$fetched_title" ]] && title="$fetched_title"

          ok "Saved  $md_file  ($(wc -c < "$md_file" | tr -d ' ') bytes)"
          dim "Title: \"$title\""
        else
          warn "pandoc conversion failed; writing placeholder"
          ((fetch_errors++)) || true
        fi
      else
        warn "HTTP $http_code downloading DOCX; writing placeholder"
        ((fetch_errors++)) || true
      fi

      sleep "$REQUEST_DELAY"
    else
      warn "Could not parse doc ID from URL"
    fi
  else
    warn "No Google Doc linked — writing placeholder"
  fi

  # ── Write page.tsx ──────────────────────────────────────────────────────────
  if [[ "$md_ready" == true ]]; then
    write_page "$app_page_file" "$component" "$route" "$doc_url" "$title" "$content_rel" "true"
    ok "Wrote  $app_page_file"
    ((created++)) || true
  else
    write_page "$app_page_file" "$component" "$route" "$doc_url" "$title" "$content_rel" "false"
    warn "Wrote  $app_page_file  (placeholder)"
    ((placeholders++)) || true
  fi
done

# ── Summary ───────────────────────────────────────────────────────────────────
echo ""
echo "──────────────────────────────────────────────"
echo -e "  ${GREEN}Pages with content:${NC}      $created"
echo -e "  ${YELLOW}Placeholder pages:${NC}       $placeholders"
echo -e "  ${RED}Download/convert errors:${NC}  $fetch_errors"
echo    "  Dynamic route skips:     $dynamic_skips"
echo    "  Total routes parsed:     ${#routes[@]}"
echo "──────────────────────────────────────────────"
echo ""
echo -e "  Markdown files  →  ${BLUE}${CONTENT_DIR}/${NC}"
echo -e "  Page files      →  ${BLUE}${APP_DIR}/${NC}"
echo ""
echo "  Install peer deps if not already:"
echo "    npm install react-markdown remark-gfm"
echo ""
