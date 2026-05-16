import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Source doc:  https://docs.google.com/document/d/1uOxEYMQ23RSIXFUq2yJJBD8aZSJEo2KgpXcRJF7zg_Y
// Content file: content/commercial.md
const MD_PATH = path.join(process.cwd(), 'content/commercial.md')

export async function generateMetadata(): Promise<Metadata> {
  const raw = fs.readFileSync(MD_PATH, 'utf-8')
  const h1 = raw.match(/^#\s+(.+)$/m)?.[1] ?? '**JM Heights /commercial/ Production Content**'
  return {
    title: h1,
    description: h1,
  }
}

export default function CommercialPage() {
  const content = fs.readFileSync(MD_PATH, 'utf-8')

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg prose-headings:font-bold prose-a:text-blue-600">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </main>
  )
}
