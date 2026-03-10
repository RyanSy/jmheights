import Link from "next/link";
import { CreditCard, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Quick & straightforward online application",
  "Flexible plans to fit your budget",
  "No long waits — get approved fast",
  "Use for any HVAC or plumbing installation",
  "Deferred interest & fixed payment options",
];

export default function FinancingSection() {
  return (
    <section id="financing" className="section-padding bg-[#0B1D3A] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />
      <div className="absolute inset-y-0 right-0 w-1/3 opacity-10"
        style={{ background: "linear-gradient(135deg, transparent, #F97316)" }} />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
                Financing Available
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[0.9] mb-6"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}>
              Don't Let Budget{" "}
              <span className="text-orange-500">Stop</span>{" "}
              Your Comfort
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Home repairs and system replacements can be daunting. That's why we've partnered with <strong className="text-white">Synchrony</strong> to offer financing options that fit your budget and lifestyle — so you can get the right system installed now, not later.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-orange-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.synchrony.com/mmc/S6223259807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-wider uppercase text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30 group"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              <CreditCard size={16} />
              Apply Now with Synchrony
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card visual */}
          <div className="flex items-center justify-center">
            <div className="bg-white/5 border border-white/10 p-10 max-w-sm w-full">
              <div className="text-center mb-8">
                <CreditCard size={48} className="text-orange-400 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                  Synchrony Financing
                </h3>
                <p className="text-white/50 text-sm">Powered by Synchrony Financial</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Application", value: "Quick & Online" },
                  { label: "Decision", value: "Fast Approval" },
                  { label: "Plans", value: "Flexible Options" },
                  { label: "Use For", value: "Any Service" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/40 text-xs uppercase tracking-wider">{label}</span>
                    <span className="text-white font-semibold text-sm">{value}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.synchrony.com/mmc/S6223259807"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm tracking-wider uppercase transition-colors"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
