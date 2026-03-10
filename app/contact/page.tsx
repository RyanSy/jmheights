import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimates | JM Heights",
  description:
    "Contact JM Heights for a free roof inspection and estimate. We respond within 24 hours. Call (555) 123-4567 or fill out our quick contact form.",
};

export default function ContactPage() {
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
              Contact JM Heights
            </span>
          </div>
          <h1
            className="font-display text-6xl md:text-7xl font-900 text-white uppercase tracking-tight leading-[0.9] mb-4"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}
          >
            Let's Talk <span className="text-orange-500">About</span>
            <br />
            Your Project
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Free estimates, free inspections. No pressure, no obligation. Tell us what you need and we'll be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="bg-[#162B52] py-10 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: "Call Us", sub: "(555) 123-4567", href: "tel:+15551234567" },
              { icon: Mail, title: "Email Us", sub: "info@jmheights.com", href: "mailto:info@jmheights.com" },
              { icon: Clock, title: "Hours", sub: "Mon–Sat 7AM–6PM", href: null },
              { icon: Shield, title: "Licensed", sub: "Bonded & Insured", href: null },
            ].map(({ icon: Icon, title, sub, href }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-orange-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">{title}</div>
                  {href ? (
                    <a href={href} className="text-white text-sm font-semibold hover:text-orange-400 transition-colors">
                      {sub}
                    </a>
                  ) : (
                    <div className="text-white text-sm font-semibold">{sub}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
