import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, Star } from "lucide-react";

const serviceLinks = [
  "Cooling Systems",
  "Heating Systems",
  "Commercial & Industrial",
  "Indoor Air Quality",
  "Plumbing",
  "Specialized Services",
];

const quickLinks = [
  { label: "Home", href: "/" },
  // { label: "Gallery", href: "/gallery" },
  // { label: "Blog", href: "/blog" },
  { label: "Financing", href: "/#financing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1D3A]">
      {/* CTA Strip */}
      <div className="bg-orange-500 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white text-center sm:text-left">
              <span className="font-bold text-xl tracking-wide"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 800 }}>
                No heat? No AC? We're here.
              </span>
              <span className="text-orange-100 ml-3 text-sm">
                Call or text — fast response, honest service.
              </span>
            </div>
            <div className="flex gap-3">
              <a href="tel:+12018243272"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold text-sm tracking-wider uppercase hover:bg-orange-50 transition-colors"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                <Phone size={15} /> (201) 824-3272
              </a>
              <a href="sms:+12018243272"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1D3A] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#162B52] transition-colors"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                <MessageSquare size={15} /> Text Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/JM_Heights_Logo.webp"
                alt="JM Heights Cooling Corp."
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <div className="font-bold text-white text-lg tracking-tight leading-none"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 800 }}>
                  JM HEIGHTS
                </div>
                <div className="text-orange-400 text-[10px] tracking-widest uppercase mt-0.5">
                  Cooling Corp.
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Top rated, family owned HVAC & plumbing company serving North Jersey with 56+ years of experience.
            </p>
            {/* <div className="flex items-center gap-2 bg-white/5 px-4 py-3 mb-6">
              <div className="flex">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={13} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">5.0</span>
              <span className="text-white/50 text-xs">· Google Rated</span>
            </div> */}
            <div className="text-white/40 text-xs space-y-1">
              <div>HVAC License: 9370</div>
              <div>Plumbing License: 12023</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg tracking-wider uppercase mb-6 border-b border-white/10 pb-3"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map(s => (
                <li key={s}>
                  <Link href="/#services" className="text-white/60 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:w-3 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg tracking-wider uppercase mb-6 border-b border-white/10 pb-3"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              Quick Links
            </h4>
            <ul className="space-y-2 mb-8">
              {quickLinks.map(link => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://www.synchrony.com/mmc/S6223259807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold tracking-wide uppercase transition-colors"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
            >
              Apply for Financing <ArrowRight size={14} />
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg tracking-wider uppercase mb-6 border-b border-white/10 pb-3"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:+12018243272" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                  <Phone size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Call or Text</div>
                    <span className="text-sm font-semibold">(201) 824-3272</span>
                  </div>
                </a>
              </li>
              {/* <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Address</div>
                    <span className="text-sm">78 Magnolia St.<br />Bergenfield, NJ 07621</span>
                  </div>
                </div>
              </li> */}
            </ul>
            <div className="mt-6 bg-white/5 p-4">
              <h5 className="text-white/40 text-xs uppercase tracking-widest mb-3">Hours</h5>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-white/60">
                  <span className="text-orange-400">Call Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© {currentYear} JM Heights Cooling Corp. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <span>HVAC 9370 | Plumbing 12023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
