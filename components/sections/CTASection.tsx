import { Phone, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#162B52] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />

      <div className="container-custom relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
              Ready to Get Started?
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-[0.9] mb-8"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}>
            We Pick Up.{" "}
            <span className="text-orange-500">We Show Up.</span>
            <br />We Get It Done.
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mb-10">
            Whether it's a routine tune-up, an emergency breakdown, or a full system replacement — JM Heights Cooling Corp. is ready. Call or text us today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+12018243272"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-wider uppercase text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              <Phone size={16} /> Call (201) 824-3272
            </a>
            <a href="sms:+12018243272"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-white/30 hover:border-white text-white font-bold tracking-wider uppercase text-sm transition-all duration-200 hover:bg-white/10"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              <MessageSquare size={16} /> Text Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
