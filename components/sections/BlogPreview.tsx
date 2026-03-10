import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group bg-white border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold tracking-wider uppercase">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime} min read
          </span>
        </div>

        <h3
          className="font-display text-xl font-700 text-[#0B1D3A] uppercase tracking-wide leading-tight mb-3 group-hover:text-orange-600 transition-colors"
          style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
        >
          {post.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:text-orange-500 transition-colors group/link"
        >
          Read Article
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
                Knowledge Base
              </span>
            </div>
            <h2
              className="font-display text-5xl md:text-6xl font-900 text-[#0B1D3A] uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}
            >
              From Our Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-orange-500 font-semibold text-sm transition-colors group flex-shrink-0"
          >
            View all articles
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
