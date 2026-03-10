import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | JM Heights",
  description: "Privacy Policy for JM Heights Cooling Corp.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm mt-3">Last updated: March 9, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl prose prose-gray">

            <h2>1. Information We Collect</h2>
            <p>We collect your name, phone number, email address, service location, and usage data (via cookies and analytics).</p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To provide and schedule services</li>
              <li>To respond to inquiries</li>
              <li>To improve website performance</li>
              <li>To send updates and promotions (if opted in)</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell your information. We may share it with third-party tools (e.g., for scheduling or email) or if required by law.</p>

            <h2>4. Cookies</h2>
            <p>Cookies help us analyze traffic and improve your experience. You can disable them in your browser settings.</p>

            <h2>5. Data Security</h2>
            <p>We use secure methods to protect your data, but no system is 100% secure.</p>

            <h2>6. Your Rights</h2>
            <p>You can request access to your data, ask for deletion, or unsubscribe from communications at any time by contacting us.</p>

            <h2>7. Children's Privacy</h2>
            <p>Our site is not intended for users under 13. We do not knowingly collect data from children.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this privacy policy. Please check this page periodically.</p>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm">
            <Link href="/terms" className="text-blue-600 hover:text-orange-500 transition-colors font-medium">
              Terms of Service →
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
