import type { Metadata } from 'next'

// Route:  /about/licenses/
// Status: placeholder — no content linked yet
export const metadata: Metadata = {
  title: 'AboutLicenses',
  description: 'AboutLicenses',
}

export default function AboutLicensesPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg">
        <h1>AboutLicenses</h1>
        <p>Content coming soon.</p>
      </article>
    </main>
  )
}
