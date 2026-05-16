import type { Metadata } from 'next'

// Route:  /coupons/
// Status: placeholder — no content linked yet
export const metadata: Metadata = {
  title: 'Coupons',
  description: 'Coupons',
}

export default function CouponsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg">
        <h1>Coupons</h1>
        <p>Content coming soon.</p>
      </article>
    </main>
  )
}
