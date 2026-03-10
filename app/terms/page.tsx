import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | JM Heights",
  description: "Terms of Service for JM Heights Cooling Corp.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1D3A] pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500" />
        <div className="container-custom relative">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Legal</span>
          </div>
          <h1
            className="font-display text-5xl md:text-6xl font-bold text-white uppercase tracking-tight"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}
          >
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm mt-3">Last updated: March 9, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl prose prose-gray">

            <h2>1. Services Provided</h2>
            <p>JM Heights provides heating, ventilation, and air conditioning installation, maintenance, and repair services in New Jersey. Our website allows you to learn about our services, schedule appointments, and contact us.</p>

            <h2>2. Use of Website</h2>
            <p>You agree to use our site only for lawful purposes. You may not use our website to distribute spam, attempt unauthorized access, or interfere with the functionality or security of the site.</p>

            <h2>3. Quotes and Appointments</h2>
            <p>Quotes are estimates and may change after an on-site evaluation. Appointment times are subject to change due to weather, emergencies, or technical issues.</p>

            <h2>4. Intellectual Property</h2>
            <p>All content, including text, images, and logos, is owned by JM Heights and protected by copyright law. You may not copy or reproduce content without permission.</p>

            <h2>5. Third-Party Links</h2>
            <p>We may link to third-party sites. We are not responsible for the content or privacy practices of those sites.</p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>We provide our website "as is" without warranties. We do not guarantee it will be error-free or always available.</p>

            <h2>7. Limitation of Liability</h2>
            <p>JM Heights is not liable for indirect or consequential damages from using the website or services.</p>

            <h2>8. Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use of the website means you accept any updates.</p>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm">
            <Link href="/privacy" className="text-blue-600 hover:text-orange-500 transition-colors font-medium">
              Privacy Policy →
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
