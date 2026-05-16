import type { Metadata } from 'next'

// Route:  /about/team/
// Status: placeholder — no content linked yet
export const metadata: Metadata = {
  title: 'AboutTeam',
  description: 'AboutTeam',
}

export default function AboutTeamPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg">
        <h1>AboutTeam</h1>
        <p>Content coming soon.</p>
      </article>
    </main>
  )
}
