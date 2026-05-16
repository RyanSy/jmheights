import type { Metadata } from 'next'

// Route:  /financing/
// Status: placeholder — no content linked yet
export const metadata: Metadata = {
  title: 'Financing',
  description: 'Financing',
}

export default function FinancingPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg">
        <h1>Financing</h1>
        <p>Content coming soon.</p>
      </article>
    </main>
  )
}
