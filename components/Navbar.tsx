"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageSquare, ChevronDown } from "lucide-react";

// Counties mapping based on site-structure.md
const serviceAreas = [
  { name: 'Bergen County', href: '/service-areas/bergen-county' },
  { name: 'Passaic County', href: '/service-areas/passaic-county' },
];

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Licenses & Credentials', href: '/about/licenses' },
      { name: 'Our Team', href: '/about/team' },
    ],
  },
    {
    name: 'HVAC',
    href: '/hvac',
    children: [
      { name: 'Heat Pumps', href: '/hvac/heat-pumps' },
      { name: 'Indoor Air Quality', href: '/hvac/indoor-air-quality' },
      { name: 'AC Repair', href: '/hvac/ac-repair' },
      { name: 'AC Installation', href: '/hvac/ac-installation' },
      { name: 'Ductless Mini-Split', href: '/hvac/ductless-mini-split' },
    ],
  },
  {
    name: 'Heating',
    href: '/heating',
    children: [
      { name: 'Boilers', href: '/heating/boilers' },
      { name: 'Furnaces', href: '/heating/furnaces' },
      { name: 'Radiant Floor', href: '/heating/radiant-floor-heating' },
      { name: 'Oil-to-Gas', href: '/heating/oil-to-gas-conversion' },
    ],
  },
  {
    name: 'Plumbing',
    href: '/plumbing',
    children: [
      { name: 'Water Heaters', href: '/plumbing/water-heaters' },
      { name: 'Sewer Services', href: '/plumbing/sewer-services' },
      { name: 'Drain Services', href: '/plumbing/drain-services' },
      { name: 'Gas Line Services', href: '/plumbing/gas-line-services' },
      { name: 'Sump Pumps', href: '/plumbing/sump-pump-services' },
      { name: 'Leak Detection', href: '/plumbing/leak-detection' },
    ],
  },
    { name: 'Commercial', 
    href: '/commercial' 
  },
  {
    name: 'Service Areas',
    href: '/service-areas',
    children: serviceAreas,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1D3A] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/JM_Heights_Logo.webp"
              alt="JM Heights Cooling Corp."
              width={56}
              height={56}
              className="rounded-full group-hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:block">
              <div className="font-black text-white text-lg leading-tight uppercase tracking-tight">
                JM Heights
              </div>
              <div className="text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5">
                Cooling Corp.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            {navigation.map((link) => (
              <div 
                key={link.href} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-white/90 hover:text-white text-[11px] xl:text-[13px] font-bold tracking-wide uppercase transition-colors py-4"
                >
                  {link.name}
                  {link.children && <ChevronDown size={14} className="text-orange-500 opacity-70" />}
                </Link>

                {link.children && (
                  <div className="absolute top-full left-0 w-64 bg-[#0B1D3A] border-t-2 border-orange-500 shadow-2xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-[11px] font-bold text-white/80 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-4">
            <a href="tel:+12018243272" className="hidden xl:flex items-center gap-2 text-white font-bold text-sm hover:text-orange-400 transition-colors">
              <Phone size={16} className="text-orange-500" />
              (201) 824-3272
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-black tracking-tighter uppercase transition-all"
            >
              Free Estimate
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden bg-[#0B1D3A] border-t border-white/10 overflow-y-auto transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="px-4 py-6 flex flex-col">
          {navigation.map((link) => (
            <div key={link.href} className="flex flex-col border-b border-white/5">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex-grow py-4 text-sm font-bold text-white uppercase tracking-widest"
                >
                  {link.name}
                </Link>
                {link.children && (
                  <button onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)} className="p-4 text-orange-500">
                    <ChevronDown size={20} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              {link.children && activeDropdown === link.name && (
                <div className="bg-black/20 px-4 pb-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-[10px] font-bold text-white/60 hover:text-orange-400 uppercase tracking-widest"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}