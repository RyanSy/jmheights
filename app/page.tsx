import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Calendar,
  AlertTriangle,
  Shield,
  Clock,
  DollarSign,
  Star,
  Users,
  Wrench,
  Wind,
  Flame,
  Building2,
  ChevronRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "JM Heights Cooling Corp. | Plumbing, Heating & HVAC | North Jersey",
  description:
    "Family-owned plumbing, heating & HVAC company serving Bergen and Passaic counties since 1969. Licensed, 24/7 emergency service, upfront flat-rate pricing. Call (201) 824-3272.",
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const trustStrip = [
  "Licensed & Insured",
  "Family-Owned Since 1969",
  "NJ Plumbing License #12023",
  "NJ HVAC License #9370",
  "A+ BBB Rating",
  "24/7 Emergency Service",
];

const serviceCategories = [
  {
    icon: Wrench,
    title: "Plumbing",
    href: "/plumbing/",
    description:
      "From clogged drains and leaking pipes to water heater replacement and sewer repairs, our licensed plumbers diagnose the issue and complete most repairs on the first visit.",
    services: [
      "Drain Cleaning & Sewer Service",
      "Water Heater Repair & Installation",
      "Leak Detection & Pipe Repair",
      "Sewer Line Repair",
      "Sump Pump Service",
      "Fixture Installation & Upgrades",
    ],
  },
  {
    icon: Flame,
    title: "Heating",
    href: "/heating/",
    description:
      "We service and install furnaces, boilers, heat pumps, and complete heating systems. From older steam boilers in pre-war homes to modern high-efficiency equipment.",
    services: [
      "Furnace Repair & Installation",
      "Boiler Repair & Replacement",
      "Oil-to-Gas Conversion",
      "Heat Pump Service",
      "Steam Boiler Service",
      "Annual Heating Maintenance",
    ],
  },
  {
    icon: Wind,
    title: "Air Conditioning & HVAC",
    href: "/hvac/",
    description:
      "EPA 608-certified technicians servicing all major brands. We repair, install, and maintain central AC, ductless mini-splits, heat pumps, and full HVAC systems.",
    services: [
      "AC Repair & Installation",
      "Ductless Mini-Split Systems",
      "HVAC Maintenance",
      "Heat Pump Installation",
      "Rooftop Unit Service",
      "Indoor Air Quality Solutions",
    ],
  },
  {
    icon: Building2,
    title: "Commercial",
    href: "/commercial/",
    description:
      "Restaurants, retail, offices, and apartment buildings throughout North Jersey. Flexible scheduling, preventative maintenance plans, and after-hours emergency support.",
    services: [
      "Commercial Plumbing",
      "Commercial HVAC",
      "Commercial Heating",
      "Preventative Maintenance Contracts",
      "Emergency Commercial Repairs",
      "Code Compliance & Inspections",
    ],
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Family-Owned Since 1969",
    description:
      "Three generations serving Bergen and Passaic counties with trusted plumbing, heating, and HVAC service.",
  },
  {
    icon: Shield,
    title: "Licensed Across All Three Trades",
    description:
      "NJ Plumbing License #12023 and NJ HVAC License #9370. One company for plumbing, heating, and cooling — no subcontracting.",
  },
  {
    icon: Wrench,
    title: "On-Staff Mechanical Engineer",
    description:
      "We perform proper load calculations and system planning to ensure installations are sized and designed correctly.",
  },
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Service",
    description:
      "Real emergency dispatch with fully stocked service trucks available day and night.",
  },
  {
    icon: DollarSign,
    title: "Upfront Flat-Rate Pricing",
    description:
      "You'll know the price before work begins. No surprise overtime or hidden charges.",
  },
  {
    icon: Clock,
    title: "Same-Day Service Available",
    description:
      "Our local dispatch and North Jersey coverage allow us to respond quickly when service is needed.",
  },
  {
    icon: Star,
    title: "Financing Available",
    description:
      "Financing options for qualified customers on major repairs and system replacements.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted Local Reputation",
    description:
      "A+ BBB rating and verified five-star reviews from homeowners and businesses across North Jersey.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Speak With Real Dispatch",
    description:
      "We answer calls directly and schedule the fastest available appointment window.",
  },
  {
    num: "02",
    title: "Licensed Technician Arrival",
    description:
      "A JM Heights technician arrives in a marked truck with protective equipment and diagnostic tools.",
  },
  {
    num: "03",
    title: "Full System Diagnostic",
    description:
      "We inspect and test the issue properly before recommending repairs.",
  },
  {
    num: "04",
    title: "Upfront Flat-Rate Quote",
    description: "You receive pricing before any work begins.",
  },
  {
    num: "05",
    title: "Repair, Testing & Walkthrough",
    description:
      "We complete the repair, test the system, and explain the work completed before leaving.",
  },
];

const localIssues = [
  {
    icon: Wrench,
    category: "Plumbing Issues",
    description:
      "Older cast iron drain lines, frozen pipes during winter cold snaps, sewer backups, and hard water reducing water heater lifespan.",
  },
  {
    icon: Flame,
    category: "Heating Issues",
    description:
      "Steam boiler problems in older homes, outdated oil heating systems, cracked heat exchangers, and inefficient furnace performance.",
  },
  {
    icon: Wind,
    category: "HVAC Issues",
    description:
      "Undersized ductwork, frozen condensate lines, aging central AC systems, and humidity-related cooling problems during New Jersey summers.",
  },
];

const faqs = [
  {
    q: "Is JM Heights licensed for plumbing, HVAC, and heating in New Jersey?",
    a: "Yes. JM Heights holds NJ Plumbing License #12023 and NJ HVAC License #9370. We directly handle plumbing, heating, and air conditioning work without subcontracting.",
  },
  {
    q: "Do you offer 24/7 emergency service?",
    a: "Yes. We provide emergency plumbing, heating, and HVAC service across North Jersey with live dispatch and rapid response availability.",
  },
  {
    q: "What areas do you service?",
    a: "We primarily serve Bergen County, Passaic County, and surrounding North Jersey communities including Hackensack, Paramus, Wayne, Clifton, Ridgewood, and Paterson.",
  },
  {
    q: "Do you handle commercial plumbing and HVAC work?",
    a: "Yes. We work with restaurants, offices, retail stores, apartment buildings, and commercial facilities throughout North Jersey.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. Financing options are available for qualified customers on system replacements and larger repair projects.",
  },
  {
    q: "What HVAC brands do you service?",
    a: "We service most major HVAC and heating brands including Carrier, Trane, Lennox, Goodman, Rheem, Mitsubishi, Fujitsu, Navien, Weil-McLain, and more.",
  },
];

const brands = [
  "Carrier",
  "Trane",
  "Lennox",
  "Goodman",
  "Rheem",
  "Mitsubishi",
  "Fujitsu",
  "Navien",
  "Bosch",
  "Weil-McLain",
  "American Standard",
  "Bryant",
];

const bergenTowns = [
  "Hackensack",
  "Paramus",
  "Ridgewood",
  "Fort Lee",
  "Fair Lawn",
  "Wyckoff",
  "Allendale",
  "Bergenfield",
];

const passaicTowns = [
  "Paterson",
  "Wayne",
  "Clifton",
  "Passaic",
  "Totowa",
  "Woodland Park",
  "Little Falls",
];

// ─── Shared primitives ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-orange-500 mb-3">
      <span className="w-6 h-px bg-orange-500 inline-block" />
      {children}
    </p>
  );
}

function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="tel:2018243272"
      className={`inline-flex items-center gap-2 font-bold hover:text-orange-400 transition-colors ${className}`}
    >
      <Phone className="w-4 h-4" />
      (201) 824-3272
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0c1a35] text-white overflow-hidden">
        {/* subtle diagonal texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* orange accent bar top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-widest uppercase mb-5">
              <span className="w-6 h-px bg-orange-400" />
              Bergen &amp; Passaic County · Since 1969
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
              North Jersey{" "}
              <span className="text-orange-500">Plumbing, Heating</span>
              <br className="hidden sm:block" /> &amp; HVAC Services
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              One Family. Three Trades. Serving Bergen and Passaic Counties
              Since 1969.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="tel:2018243272"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now: (201) 824-3272
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded transition-colors text-sm"
              >
                <Calendar className="w-4 h-4" />
                Schedule Online
              </Link>
              <Link
                href="/emergency-service/"
                className="inline-flex items-center gap-2 border border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-orange-300 font-semibold px-6 py-3.5 rounded transition-colors text-sm"
              >
                <AlertTriangle className="w-4 h-4" />
                24/7 Emergency Service
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustStrip.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-slate-400 text-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            When the plumbing leaks, the heat stops working, or the AC goes
            out, North Jersey homeowners don&apos;t want three different
            contractors. They want one trusted company that handles it all.{" "}
            <strong className="text-slate-900">
              JM Heights has provided plumbing, heating, and HVAC services
              across Bergen and Passaic counties since 1969.
            </strong>{" "}
            Licensed plumbers, HVAC technicians, and heating specialists under
            one roof — with upfront flat-rate pricing and same-day service
            whenever available.
          </p>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Full-Service Plumbing, Heating &amp; HVAC
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-200 flex flex-col"
                >
                  <div className="w-11 h-11 rounded bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {cat.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {cat.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={cat.href}
                    className="text-sm font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    See all {cat.title.toLowerCase()} services
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY JM HEIGHTS ───────────────────────────────────────────────────── */}
      <section className="bg-[#0c1a35] text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Why JM Heights</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why North Jersey Homeowners{" "}
              <span className="text-orange-500">Choose JM Heights</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-9 h-9 rounded bg-orange-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white mb-1.5 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/reviews/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-orange-500/50 text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors"
            >
              <Star className="w-4 h-4 text-orange-400" />
              Read Reviews
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors"
            >
              More About Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section className="bg-orange-500 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Need Plumbing or HVAC Service Today?
            </h2>
            <p className="text-orange-100 mt-1 text-sm">
              Same-day appointments available across Bergen and Passaic County.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:2018243272"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded hover:bg-orange-50 transition-colors text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              (201) 824-3272
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded transition-colors text-sm whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Where We Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              North Jersey Service Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Bergen County */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-orange-500" />
                <h3 className="font-bold text-slate-900">
                  Bergen County Plumbing, Heating &amp; HVAC
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {bergenTowns.map((town) => (
                  <span
                    key={town}
                    className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded"
                  >
                    {town}
                  </span>
                ))}
              </div>
            </div>

            {/* Passaic County */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-orange-500" />
                <h3 className="font-bold text-slate-900">
                  Passaic County Plumbing, Heating &amp; HVAC
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {passaicTowns.map((town) => (
                  <span
                    key={town}
                    className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded"
                  >
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-slate-500 text-sm">
            Don&apos;t see your town?{" "}
            <Link
              href="/service-areas/"
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              View all service areas →
            </Link>{" "}
            — We service homes and businesses throughout the North Jersey
            region.
          </p>
        </div>
      </section>

      {/* ── LOCAL ISSUES ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Local Knowledge</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Common Plumbing &amp; HVAC Issues in North Jersey Homes
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl leading-relaxed">
              North Jersey homes experience unique problems due to aging
              infrastructure, seasonal weather changes, and older housing
              stock.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {localIssues.map((issue) => {
              const Icon = issue.icon;
              return (
                <div
                  key={issue.category}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-orange-100 rounded flex items-center justify-center">
                      <Icon className="w-4 h-4 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-slate-900">
                      {issue.category}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What to Expect When You Call JM Heights
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.num} className="relative flex flex-col">
                {/* connector line (desktop) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(50%+20px)] right-0 h-px bg-orange-200 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-extrabold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-orange-600 transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-orange-400 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ───────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">
            Brands We Service
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {brands.map((brand) => (
              <span key={brand} className="text-slate-500 font-semibold text-sm">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CONVERSION STRIP ──────────────────────────────────────────── */}
      <section className="bg-[#0c1a35] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
            Ready to Schedule Service?
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            Same-day service available across Bergen and Passaic County.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:2018243272"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now: (201) 824-3272
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              <Calendar className="w-4 h-4" />
              Schedule Online
            </Link>
            <Link
              href="/emergency-service/"
              className="inline-flex items-center gap-2 border border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-orange-300 font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              <AlertTriangle className="w-4 h-4" />
              24/7 Emergency Service
            </Link>
            <Link
              href="/financing/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              Financing Options
            </Link>
            <Link
              href="/coupons/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              Current Specials
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
