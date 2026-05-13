# JM Heights — Next.js Website

A full-stack Next.js website built for JM Heights, featuring:

- 🎨 **Sleek design** — blue, orange & white color scheme with bold industrial aesthetic
- 📬 **Contact form** — Resend API integration with multiple anti-spam layers
- ⭐ **Google Reviews** — Live reviews via Google Business Profile API with fallback content
- 📝 **Blog** — Full blog with listing, detail pages, and 5 sample posts included
- 🖼️ **Gallery** — Filterable photo & video gallery with lightbox viewer
- 🗺️ **Sitemap** — Auto-generated `sitemap.xml` + `robots.txt`
- ☁️ **Cloudflare Pages** ready — configured for edge deployment

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:

| Variable | Description | Where to get it |
|---|---|---|
| `RESEND_API_KEY` | For sending contact form emails | [resend.com](https://resend.com) |
| `CONTACT_EMAIL_TO` | Where to send form submissions | Your email |
| `CONTACT_EMAIL_FROM` | Sender address (must be verified domain) | Resend dashboard |
| `GOOGLE_OAUTH_CLIENT_ID` | OAuth 2.0 client ID | Google Cloud Console → APIs & Services → Credentials |
| `GOOGLE_OAUTH_CLIENT_SECRET` | OAuth 2.0 client secret | Same credential |
| `GOOGLE_OAUTH_REFRESH_TOKEN` | Long-lived refresh token | One-time local auth flow (see setup below) |
| `GOOGLE_BUSINESS_ACCOUNT_ID` | Your GBP account resource name | e.g. `accounts/123456789` |
| `GOOGLE_BUSINESS_LOCATION_ID` | Your GBP location resource name | e.g. `locations/987654321` |
| `NEXT_PUBLIC_SITE_URL` | Your production URL | e.g. `https://jmheights.com` |

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization

### Business Information

Update your business details in these files:

| File | What to change |
|---|---|
| `components/Navbar.tsx` | Phone number, logo text |
| `components/Footer.tsx` | Phone, email, address, social links, hours |
| `components/sections/CTASection.tsx` | Phone number |
| `components/sections/ContactSection.tsx` | Contact details |
| `app/layout.tsx` | SEO metadata, keywords |

### Services

Edit `data/services.ts` to update your service offerings, descriptions, and features.

### Gallery

Edit `data/gallery-items.ts` to add your project photos and videos:

```ts
{
  id: "unique-id",
  type: "image",           // or "video"
  src: "/images/gallery/my-project.jpg",  // or Unsplash URL
  alt: "Description for accessibility",
  category: "roofing",    // roofing | gutters | siding | painting
  title: "Project Name",
  description: "Brief description",
  // For videos:
  videoId: "YOUTUBE_VIDEO_ID",
  thumbnail: "/images/gallery/video-thumb.jpg",
}
```

Upload images to `public/images/gallery/`.

### Blog Posts

Add new blog posts in `data/blog-posts.ts`:

```ts
{
  slug: "your-post-url-slug",
  title: "Your Post Title",
  excerpt: "Brief description for listing pages...",
  content: `<p>Your HTML content here...</p>`,
  date: "2025-01-15",
  author: "Author Name",
  category: "Roofing Tips",
  image: "https://your-image-url.com/image.jpg",
  readTime: 5,
}
```

---

## Deployment to Cloudflare Pages

### Option A: GitHub Integration (Recommended)

1. Push this project to a GitHub repository
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create application
3. Connect your GitHub repository
4. Set build configuration:
   - **Framework preset**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages`
   - **Build output directory**: `.vercel/output/static`
   - **Node.js version**: `18` or higher
5. Add environment variables in Settings → Environment Variables
6. Deploy!

### Option B: CLI Deploy

```bash
# Build for Cloudflare Pages
npm run pages:build

# Deploy (requires Wrangler login)
npx wrangler login
npm run deploy
```

### Environment Variables in Cloudflare

Add these in **Cloudflare Dashboard → Pages → Your Project → Settings → Environment Variables**:

- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- `CONTACT_EMAIL_FROM`
- `GOOGLE_OAUTH_CLIENT_ID`
- `GOOGLE_OAUTH_CLIENT_SECRET`
- `GOOGLE_OAUTH_REFRESH_TOKEN`
- `GOOGLE_BUSINESS_ACCOUNT_ID`
- `GOOGLE_BUSINESS_LOCATION_ID`
- `NEXT_PUBLIC_SITE_URL`

---

## Google Reviews Setup

The reviews route uses the **Google Business Profile API** authenticated with OAuth 2.0. This avoids service account key files entirely — instead you store a long-lived refresh token as an env var and the route exchanges it for a short-lived access token at runtime.

### 1. Create a Google Cloud Project

Go to [Google Cloud Console](https://console.cloud.google.com) and create or select a project.

### 2. Enable the APIs

In **APIs & Services → Library**, search for and enable:

- **My Business Account Management API**
- **My Business Business Information API**

### 3. Configure the OAuth Consent Screen

Go to **APIs & Services → OAuth consent screen**:

1. Choose **External** (unless your org uses Google Workspace and you want Internal)
2. Fill in the required fields (app name, support email)
3. Add the scope: `https://www.googleapis.com/auth/business.manage`
4. Add your own Google account as a **test user** (required while the app is in Testing status)
5. Save

You do not need to publish the app. Keeping it in **Testing** status is fine — refresh tokens for test users do not expire.

### 4. Create an OAuth 2.0 Client ID

Go to **APIs & Services → Credentials → Create Credentials → OAuth client ID**:

1. Application type: **Web application**
2. Add `http://localhost` and `http://localhost:3000` to **Authorised redirect URIs**
3. Save — copy the **Client ID** and **Client Secret** to your `.env.local`

### 5. Get a Refresh Token (one-time local flow)

Run this in your terminal, replacing the placeholder with your real client ID:

```bash
open "https://accounts.google.com/o/oauth2/v2/auth?\
client_id=YOUR_CLIENT_ID\
&redirect_uri=http://localhost\
&response_type=code\
&scope=https://www.googleapis.com/auth/business.manage\
&access_type=offline\
&prompt=consent"
```

1. Sign in with the Google account that manages the Business Profile
2. Grant the requested permissions
3. Google will redirect to `http://localhost/?code=AUTHORIZATION_CODE&...` — the page won't load, but copy the `code` value from the URL
4. Exchange it for tokens:

```bash
curl -X POST https://oauth2.googleapis.com/token \
  -d client_id=YOUR_CLIENT_ID \
  -d client_secret=YOUR_CLIENT_SECRET \
  -d code=AUTHORIZATION_CODE \
  -d redirect_uri=http://localhost \
  -d grant_type=authorization_code
```

The response includes a `refresh_token`. Copy it to `GOOGLE_OAUTH_REFRESH_TOKEN` in your `.env.local`. You only need to do this once.

> **Why does the refresh token not expire?** Tokens for apps in **Testing** status and tokens granted by the owning Google account are long-lived. If you later publish the app and users revoke access or the token is unused for 6 months, you would repeat this step.

### 6. Find Your Account and Location IDs

With a valid access token in hand (use the `access_token` from the curl response above), list your resources:

```bash
# List accounts
curl -H "Authorization: Bearer ACCESS_TOKEN" \
  https://mybusinessaccountmanagement.googleapis.com/v1/accounts

# List locations for an account
curl -H "Authorization: Bearer ACCESS_TOKEN" \
  "https://mybusinessbusinessinformation.googleapis.com/v1/accounts/ACCOUNT_ID/locations?readMask=name"
```

The IDs you need look like:
- `accounts/123456789` → `GOOGLE_BUSINESS_ACCOUNT_ID`
- `locations/987654321` → `GOOGLE_BUSINESS_LOCATION_ID`

### 7. Final `.env.local` Values

```env
GOOGLE_OAUTH_CLIENT_ID=123456789-abc.apps.googleusercontent.com
GOOGLE_OAUTH_CLIENT_SECRET=GOCSPX-...
GOOGLE_OAUTH_REFRESH_TOKEN=1//0g...
GOOGLE_BUSINESS_ACCOUNT_ID=accounts/123456789
GOOGLE_BUSINESS_LOCATION_ID=locations/987654321
```

Reviews are fetched on demand and cached at the CDN edge for 1 hour. If the API is not configured, the site shows 6 example reviews instead.

---

## Resend Email Setup

1. Create account at [resend.com](https://resend.com)
2. Add and verify your sending domain
3. Create an API key
4. Set `CONTACT_EMAIL_FROM` to an address at your verified domain
5. Set `CONTACT_EMAIL_TO` to where you want to receive submissions

---

## Anti-Spam Features

The contact form includes:

1. **Honeypot field** — Hidden field invisible to humans; bots fill it and get silently blocked
2. **Time-based check** — Form must be visible for 3+ seconds before submission
3. **Math CAPTCHA** — Simple arithmetic question (regenerates on each load)
4. **Server-side rate limiting** — Max 5 submissions per IP per hour
5. **Input sanitization** — All inputs cleaned server-side

---

## Project Structure

```
jmheights/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Home/landing page
│   ├── globals.css          # Global styles, CSS variables
│   ├── sitemap.ts           # Auto-generated sitemap.xml
│   ├── robots.ts            # robots.txt
│   ├── blog/
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/page.tsx  # Blog post detail
│   ├── gallery/
│   │   └── page.tsx         # Photo & video gallery
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── api/
│       ├── contact/route.ts # Contact form (edge)
│       └── reviews/route.ts # Google Business Profile reviews (edge)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── BlogPreview.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── ContactForm.tsx
├── data/
│   ├── blog-posts.ts        # All blog content
│   ├── gallery-items.ts     # Gallery photos/videos
│   └── services.ts          # Services data
├── types/
│   └── index.ts             # TypeScript types
├── wrangler.toml            # Cloudflare config
├── next.config.mjs
├── tailwind.config.ts
└── .env.example
```