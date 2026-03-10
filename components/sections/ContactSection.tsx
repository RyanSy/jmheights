import { Phone, MessageSquare, MapPin, Clock, Shield } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(201) 824-3272",
    href: "tel:+12018243272",
    subtext: "Call Anytime",
  },
  {
    icon: MessageSquare,
    label: "Text Us",
    value: "Text (201) 824-3272",
    href: "sms:+12018243272",
    subtext: "Fast response guaranteed",
  },
    // {
    //   icon: MapPin,
    //   label: "Address",
    //   value: "78 Magnolia St., Bergenfield, NJ 07621",
    //   href: null,
    //   subtext: "Serving all of North Jersey",
    // },
  {
    icon: Clock,
    label: "Emergency",
    value: "Call ",
    href: "tel:+12018243272",
    subtext: "24/7 emergency HVAC service",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-custom relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <div className="h-px w-12 bg-orange-500" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#0B1D3A] uppercase tracking-tight mb-4"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}>
            Request a Free Estimate
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Fill out the form and we'll get back to you fast. Prefer to talk? Call or text us directly at <a href="tel:+12018243272" className="text-orange-500 font-semibold hover:underline">(201) 824-3272</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 shadow-xl">
          {/* Info Panel */}
          <div className="lg:col-span-2 bg-[#0B1D3A] p-8 md:p-10">
            <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wide mb-2"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              Contact Info
            </h3>
            <div className="h-1 w-16 bg-orange-500 mb-8" />

            <div className="space-y-7">
              {contactInfo.map(({ icon: Icon, label, value, href, subtext }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-white font-semibold hover:text-orange-400 transition-colors text-sm block">{value}</a>
                    ) : (
                      <div className="text-white font-semibold text-sm">{value}</div>
                    )}
                    <div className="text-white/50 text-xs mt-0.5">{subtext}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={14} className="text-orange-400" />
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Licensed & Insured</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                HVAC License #9370 · Plumbing License #12023<br />
                Serving all of North Jersey.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
