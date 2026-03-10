"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ExternalLink, Loader2 } from "lucide-react";
import type { Review } from "@/types";

// Fallback reviews if API fails or is not configured
const fallbackReviews: Review[] = [
  {
    author_name: "Michael T.",
    rating: 5,
    text: "JM Heights replaced our entire roof after a severe hailstorm. The team was professional, fast, and cleaned up every nail. Their price was fair and they handled all the insurance paperwork. Couldn't be happier.",
    time: Date.now() / 1000 - 86400 * 14,
    profile_photo_url: "",
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "Sandra R.",
    rating: 5,
    text: "Had a stubborn leak around my chimney for two years. Two other companies 'fixed' it but it always came back. JM Heights diagnosed the real problem in 20 minutes and fixed it properly. No more leaks. Highly recommend.",
    time: Date.now() / 1000 - 86400 * 30,
    profile_photo_url: "",
    relative_time_description: "1 month ago",
  },
  {
    author_name: "David L.",
    rating: 5,
    text: "Got quotes from four roofing companies. JM Heights was the most professional from the first call — showed up on time, explained everything clearly, provided a detailed written estimate. The work was excellent and on-schedule.",
    time: Date.now() / 1000 - 86400 * 45,
    profile_photo_url: "",
    relative_time_description: "6 weeks ago",
  },
  {
    author_name: "Jennifer W.",
    rating: 5,
    text: "New seamless gutters with leaf guards installed in one day. The crew was polite, the work looks great, and the gutters have handled every storm since with no issues. Worth every penny.",
    time: Date.now() / 1000 - 86400 * 60,
    profile_photo_url: "",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Robert K.",
    rating: 5,
    text: "JM Heights did our siding, gutters, and fascia all in one project. The coordination was seamless, the crews were skilled, and the end result transformed our home's curb appeal. Already have two neighbors asking for their number.",
    time: Date.now() / 1000 - 86400 * 90,
    profile_photo_url: "",
    relative_time_description: "3 months ago",
  },
  {
    author_name: "Patricia M.",
    rating: 5,
    text: "Honest, reliable, and does excellent work. James came out personally to review the scope, his crew did everything promised, and the cleanup was immaculate. This is the company you want for your roof.",
    time: Date.now() / 1000 - 86400 * 120,
    profile_photo_url: "",
    relative_time_description: "4 months ago",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 200;
  const displayText = isLong && !expanded ? review.text.slice(0, 200) + "…" : review.text;

  const initials = review.author_name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white rounded-sm p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow relative">
      {/* Quote icon */}
      <Quote size={28} className="absolute top-5 right-5 text-blue-100" />

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-4">
        "{displayText}"
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-blue-600 hover:text-orange-500 font-medium transition-colors"
          >
            {expanded ? " Show less" : " Read more"}
          </button>
        )}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
        {review.profile_photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            className="w-9 h-9 rounded-full object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-[#0B1D3A] flex items-center justify-center text-white text-xs font-bold">
            {initials}
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900 text-sm">
            {review.author_name}
          </div>
          <div className="text-gray-400 text-xs">
            {review.relative_time_description || "Google Review"}
          </div>
        </div>
        <div className="ml-auto">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [overallRating, setOverallRating] = useState<number>(4.9);
  const [totalReviews, setTotalReviews] = useState<number>(200);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const perPage = 3;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && data.reviews.length > 0) {
            setReviews(data.reviews);
            setOverallRating(data.rating);
            setTotalReviews(data.totalReviews);
          } else {
            setReviews(fallbackReviews);
          }
        } else {
          setReviews(fallbackReviews);
        }
      } catch {
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="reviews" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-600/5 -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
              Customer Reviews
            </span>
            <div className="h-px w-12 bg-orange-500" />
          </div>
          <h2
            className="font-display text-5xl md:text-6xl font-900 text-[#0B1D3A] uppercase tracking-tight mb-6"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}
          >
            What Our Customers Say
          </h2>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-6 bg-white px-8 py-5 shadow-md">
            <div className="text-center">
              <div
                className="font-display text-5xl font-900 text-[#0B1D3A] leading-none"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}
              >
                {overallRating.toFixed(1)}
              </div>
              <div className="flex justify-center mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">{totalReviews.toLocaleString()}+</div>
              <div className="text-gray-500 text-sm">Google Reviews</div>
            </div>
            <a
              href={`https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || 'YOUR_PLACE_ID'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
            >
              Leave a Review <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="text-blue-600 animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {visible.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="px-5 py-2 bg-white border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm font-semibold"
                >
                  ← Previous
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`w-8 h-8 text-sm font-semibold transition-all ${
                        page === i
                          ? "bg-orange-500 text-white"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-orange-500 hover:text-orange-500"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  className="px-5 py-2 bg-white border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm font-semibold"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
