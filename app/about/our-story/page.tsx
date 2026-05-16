import type { Metadata } from 'next'

// Route:  /about/our-story/
// Status: placeholder — no content linked yet
export const metadata: Metadata = {
  title: 'AboutOurStory',
  description: 'AboutOurStory',
}

export default function AboutOurStoryPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg">
        <h1>AboutOurStory</h1>
        <p>Content coming soon.</p>
      </article>
    </main>
  )
}
