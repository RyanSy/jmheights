"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, ArrowRight, Shield, Award, Star, Wrench } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "56+ Years Experience" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Wrench, label: "Family Owned" },
];

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1D3A]">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A] via-[#162B52]/90 to-[#0B1D3A]" />
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-orange-500 hidden lg:block" />
      <div className="absolute right-0 top-0 h-full w-96 opacity-10"
        style={{ background: "linear-gradient(135deg, transparent 40%, #F97316 100%)" }} />

      {/* Geometric accents */}
      <div className="absolute top-24 right-12 w-32 h-32 border-2 border-orange-500/20 rotate-45 hidden xl:block" />
      <div className="absolute top-36 right-20 w-16 h-16 border border-blue-500/30 rotate-12 hidden xl:block" />
      <div className="absolute bottom-32 left-8 w-20 h-20 bg-orange-500/10 rotate-12 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Pre-heading */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
                North Jersey's HVAC & Plumbing Experts
              </span>
            </div>

            {/* Heading */}
            <h1 ref={headingRef}
              className="font-display leading-[0.9] mb-6"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}>
              <span className="block text-white text-6xl sm:text-7xl md:text-8xl uppercase tracking-tight">
                COMFORT
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl uppercase tracking-tight">
                <span className="text-orange-500">YOU CAN</span>
              </span>
              <span className="block text-white text-6xl sm:text-7xl md:text-8xl uppercase tracking-tight">
                COUNT ON
              </span>
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-20 bg-blue-600" />
              <div className="h-1 w-8 bg-orange-500" />
            </div>

            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-10">
              Family owned & operated with <strong className="text-white">56+ years of experience</strong> serving residential, commercial & industrial clients across North Jersey. One call handles it all — heating, cooling, and plumbing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:+12018243272"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30 group"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                <Phone size={18} />
                (201) 824-3272
              </a>
              <a href="sms:+12018243272"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold text-lg tracking-wider uppercase transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                <MessageSquare size={18} />
                Text Us
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-5">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={15} className="text-orange-400" />
                  <span className="text-white/60 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo side */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Image
                    src="/JM_Heights_Logo.webp"
                    alt="JM Heights Cooling Corp."
                    width={200}
                    height={200}
                    className="rounded-full drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
              {/* Orbiting accent dots */}
              <div className="absolute top-4 right-8 w-4 h-4 bg-orange-500 rounded-full" />
              <div className="absolute bottom-8 left-4 w-3 h-3 bg-blue-400 rounded-full" />
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "56+", label: "Years of Experience" },
              { value: "Res + Com", label: "Residential & Commercial" },
              { value: "5★", label: "Google Rating" },
              { value: "One Call", label: "HVAC + Plumbing" },
            ].map(({ value, label }) => (
              <div key={label} className="py-5 px-6 text-center">
                <div className="font-display text-white text-2xl md:text-3xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 800 }}>
                  {value}
                </div>
                <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
