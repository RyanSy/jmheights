import type { Metadata } from 'next'

// Route:  /reviews/
// Status: placeholder — no content linked yet
export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Reviews',
}

export default function ReviewsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg">
        <h1>Reviews</h1>
        <p>Content coming soon.</p>
      </article>
    </main>
  )
}
