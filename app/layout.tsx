import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jmheights.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JM Heights Cooling Corp. | Top Rated HVAC & Plumbing | North Jersey",
    template: "%s | JM Heights",
  },
  description:
    "Top rated, family owned HVAC & plumbing company serving North Jersey with 56+ years of experience. Heating, cooling, plumbing — one call does it all. (201) 824-3272",
  keywords: [
    "HVAC North Jersey",
    "heating and cooling Bergenfield NJ",
    "AC repair North Jersey",
    "furnace repair NJ",
    "plumbing North Jersey",
    "mini split installation NJ",
    "boiler repair Bergen County",
    "JM Heights",
    "HVAC Bergenfield",
  ],
  authors: [{ name: "JM Heights Cooling Corp." }],
  creator: "JM Heights Cooling Corp.",
  publisher: "JM Heights Cooling Corp.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "JM Heights Cooling Corp.",
    title: "JM Heights Cooling Corp. | Top Rated HVAC & Plumbing | North Jersey",
    description:
      "Family owned HVAC & plumbing serving North Jersey for 56+ years. Heating, cooling, plumbing — one call, one contractor.",
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: "JM Heights Cooling Corp." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Heights Cooling Corp. | Top Rated HVAC & Plumbing | North Jersey",
    description: "Family owned HVAC & plumbing serving North Jersey for 56+ years.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: { index: true, follow: true },
  other: {
    "google-site-verification": "",
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${barlowCondensed.variable}`}>
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}} />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "name": "JM Heights Cooling Corp.",
          "url": "https://jmheights.com",
          "telephone": "+12018243272",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "78 Magnolia St.",
            "addressLocality": "Bergenfield",
            "addressRegion": "NJ",
            "postalCode": "07621",
            "addressCountry": "US"
          },
          "areaServed": "North Jersey",
          "description": "Top rated, family owned HVAC & plumbing company serving North Jersey with 56+ years of experience.",
          "priceRange": "$$",
          "openingHours": ["Monday - Saturday, 8AM - 7PM"]
        })}} />
      </body>
    </html>
  );
}
