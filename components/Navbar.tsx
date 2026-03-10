"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Financing", href: "/#financing" },
  // { label: "Gallery", href: "/gallery" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B1D3A] shadow-xl shadow-black/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/JM_Heights_Logo.webp"
              alt="JM Heights Cooling Corp."
              width={64}
              height={64}
              className="rounded-full group-hover:scale-105 transition-transform duration-200"
            />
            <div>
              <div
                className="font-display font-bold text-white text-lg leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 800 }}
              >
                JM HEIGHTS
              </div>
              <div className="text-orange-400 text-[10px] font-medium tracking-widest uppercase leading-none mt-0.5">
                Cooling Corp.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+12018243272"
              className="hidden md:flex items-center gap-2 text-white/90 hover:text-white text-sm font-semibold transition-colors"
            >
              <Phone size={14} className="text-orange-400" />
              (201) 824-3272
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
            >
              Free Estimate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-[#0B1D3A] border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-white/80 hover:text-white hover:bg-white/5 text-right px-5 py-4 text-base font-semibold tracking-wider uppercase transition-all border-r-2 border-transparent hover:border-orange-500 ${
                  i !== navLinks.length - 1 ? "border-b border-white/10" : ""
                }`}
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 pt-5 border-t border-white/10 flex flex-col gap-3">
            <a href="tel:+12018243272" className="flex items-center justify-end gap-2 text-white font-semibold px-4">
              (201) 824-3272 <Phone size={15} className="text-orange-400" />
            </a>
            <a href="sms:+12018243272" className="flex items-center justify-end gap-2 text-white/70 font-semibold px-4">
              Text Us <MessageSquare size={15} className="text-orange-400" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
