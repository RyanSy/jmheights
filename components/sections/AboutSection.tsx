"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const values = [
  "Family owned & operated since 1969 — not a franchise",
  "56+ years serving North Jersey residential, commercial & industrial",
  "On-staff mechanical engineer for system design",
  "Licensed HVAC (9370) and Plumbing (12023) contractor",
  "One contractor for heating, cooling, and plumbing",
  "Financing available through Synchrony",
  "Emergency service — call anytime",
  "Honest diagnosis, no unnecessary upselling",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[#162B52] to-[#0B1D3A] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src="/images/IMG_5295.JPEG"
                    alt="JM Heights Cooling Corp."
                    width={220}
                    height={220}
                    className="mx-auto drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-500/30 -z-10" />

            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-[#0B1D3A] p-6 shadow-2xl">
              <div className="font-display text-5xl font-bold text-orange-500 leading-none"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}>
                56+
              </div>
              <div className="text-white/70 text-sm mt-1">Years in Business</div>
              <div className="h-0.5 w-8 bg-orange-500 mt-2" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">About Us</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-bold text-[#0B1D3A] uppercase tracking-tight leading-[0.9] mb-6"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}>
              Family Owned.{" "}
              <span className="text-gradient-orange">North Jersey</span>{" "}
              Trusted.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              JM Heights Cooling Corp. is a top-rated, family-owned HVAC and plumbing company that has been serving North Jersey since 1969. With over 56 years of experience, we've built a reputation on honest work, expert knowledge, and treating every customer like a neighbor — because they usually are.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We're a true one-stop shop: heating, cooling, and plumbing under one roof, with an on-staff mechanical engineer for custom system design. No subcontracting, no runaround — just the right solution done right the first time.
            </p>

            <ul className="space-y-3 mb-10">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{value}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+12018243272"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-wider uppercase text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                Call (201) 824-3272
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              {/* <Link href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0B1D3A] text-[#0B1D3A] font-bold tracking-wider uppercase text-sm hover:bg-[#0B1D3A] hover:text-white transition-all duration-200"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                See Our Work
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
