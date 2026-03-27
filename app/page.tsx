import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FinancingSection from "@/components/sections/FinancingSection";
import CTASection from "@/components/sections/CTASection";
import BlogPreview from "@/components/sections/BlogPreview";
import ContactSection from "@/components/sections/ContactSection";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "JM Heights Cooling Corp. | Top Rated HVAC & Plumbing | North Jersey",
  description:
    "JM Heights is a top rated, family owned HVAC & plumbing company serving North Jersey with 56+ years of experience. Heating, cooling, plumbing — one call does it all. (201) 824-3272",
};

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <FinancingSection />
      <CTASection />
      {/* <BlogPreview posts={latestPosts} /> */}
      <ContactSection />
    </>
  );
}
