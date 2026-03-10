import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, Share2, Phone } from "lucide-react";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | JM Heights Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const otherRelated = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2 - related.length);

  const relatedPosts = [...related, ...otherRelated].slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1D3A] pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-custom relative pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold tracking-wider uppercase">
              {post.category}
            </span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-900 text-white uppercase tracking-tight leading-[0.9] mb-6 max-w-4xl"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 text-xs font-bold">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <div className="w-full aspect-[21/9] bg-gray-200 overflow-hidden max-h-[480px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="blog-content prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-3">
                <Tag size={16} className="text-gray-400" />
                {[post.category, "Roofing", "JM Heights"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* CTA Card */}
              <div className="bg-[#0B1D3A] p-6">
                <div className="h-1 w-10 bg-orange-500 mb-4" />
                <h3
                  className="font-display text-2xl font-700 text-white uppercase tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
                >
                  Get a Free Inspection
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  Have questions about your roof? Our experts will assess it honestly — no pressure, no upselling.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-wider uppercase text-sm transition-colors"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
                >
                  Schedule Now — It's Free
                </Link>
                <a
                  href="tel:+15551234567"
                  className="mt-3 flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Phone size={13} />
                  Or call (555) 123-4567
                </a>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h4
                    className="font-display text-xl font-700 text-[#0B1D3A] uppercase tracking-wide mb-4 pb-3 border-b border-gray-100"
                    style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
                  >
                    Related Articles
                  </h4>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-gray-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors leading-snug line-clamp-2">
                            {related.title}
                          </h5>
                          <span className="text-gray-400 text-xs flex items-center gap-1 mt-1">
                            <Clock size={10} /> {related.readTime} min
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
