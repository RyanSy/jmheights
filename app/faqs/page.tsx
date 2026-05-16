import type { Metadata } from 'next'

// Route:  /faqs/
// Status: placeholder — no content linked yet
export const metadata: Metadata = {
  title: 'Faqs',
  description: 'Faqs',
}

export default function FaqsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg">
        <h1>Faqs</h1>
        <p>Content coming soon.</p>
      </article>
    </main>
  )
}
