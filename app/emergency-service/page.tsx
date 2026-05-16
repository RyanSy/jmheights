import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Source doc:  https://docs.google.com/document/d/17DfGHtZYH8LXiD_XLaKfJ8yI2r01iU-h-rhPlNodNHc
// Content file: content/emergency-service.md
const MD_PATH = path.join(process.cwd(), 'content/emergency-service.md')

export async function generateMetadata(): Promise<Metadata> {
  const raw = fs.readFileSync(MD_PATH, 'utf-8')
  const h1 = raw.match(/^#\s+(.+)$/m)?.[1] ?? '**H1**'
  return {
    title: h1,
    description: h1,
  }
}

export default function EmergencyServicePage() {
  const content = fs.readFileSync(MD_PATH, 'utf-8')

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg prose-headings:font-bold prose-a:text-blue-600">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </main>
  )
}
