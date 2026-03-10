"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Wind, Flame, Building2, AirVent, Droplets, Settings, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wind,
  Flame,
  Building2,
  AirVent,
  Droplets,
  Settings,
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative" ref={sectionRef}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <div className="h-px w-12 bg-orange-500" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#0B1D3A] uppercase tracking-tight mb-4"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}>
            Our{" "}
            <span className="relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-500" />
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Heating, cooling, plumbing, and everything in between — serving residential, commercial, and industrial clients across North Jersey since 1969.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Settings;
            return (
              <div key={service.id}
                className="service-card group relative bg-white p-8 border-l-4 border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                <div className="w-14 h-14 bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon size={24} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0B1D3A] uppercase tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-1.5 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:text-orange-500 transition-colors group/link">
                  Get a Free Estimate
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="absolute top-6 right-6 font-display text-5xl font-bold text-gray-100 leading-none select-none"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 900 }}>
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Not sure what you need? We'll diagnose it for free.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12018243272"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-wider uppercase text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              Call (201) 824-3272
            </a>
            <a href="sms:+12018243272"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#0B1D3A] hover:bg-[#162B52] text-white font-bold tracking-wider uppercase text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}>
              Text Us Instead <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
