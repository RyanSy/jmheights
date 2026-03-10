import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Roofing Blog & Tips | JM Heights",
  description:
    "Expert advice on roofing, gutters, siding, and home exterior maintenance. Tips from experienced contractors who've seen it all.",
};

const categories = ["All", "Roofing Tips", "Maintenance", "Buyer's Guide", "Gutters", "Insurance"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1D3A] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />
        <div className="container-custom relative">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
              Knowledge Base
            </span>
          </div>
          <h1
            className="font-display text-6xl md:text-7xl font-900 text-white uppercase tracking-tight leading-[0.9] mb-4"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}
          >
            Roofing <span className="text-orange-500">Tips</span> & Guides
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Expert advice from contractors who've worked on thousands of homes. Free knowledge to help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase cursor-pointer transition-all ${
                  cat === "All"
                    ? "bg-orange-500 text-white"
                    : "bg-white border border-gray-200 text-gray-500 hover:border-orange-400 hover:text-orange-500"
                }`}
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts[0] && (
            <Link href={`/blog/${blogPosts[0].slug}`} className="block mb-10 group">
              <article className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden bg-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold tracking-wider uppercase">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Featured</span>
                  </div>
                  <h2
                    className="font-display text-3xl md:text-4xl font-800 text-[#0B1D3A] uppercase tracking-tight leading-tight mb-4 group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 800 }}
                  >
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(blogPosts[0].date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {blogPosts[0].readTime} min read
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm group-hover:text-orange-500 transition-colors">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[10px] font-bold tracking-wider uppercase border border-orange-100">
                        {post.category}
                      </span>
                    </div>
                    <h2
                      className="font-display text-xl font-700 text-[#0B1D3A] uppercase tracking-wide leading-tight mb-3 group-hover:text-orange-600 transition-colors"
                      style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock size={11} /> {post.readTime} min
                      </span>
                      <span className="text-blue-700 text-xs font-semibold group-hover:text-orange-500 transition-colors flex items-center gap-1">
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
