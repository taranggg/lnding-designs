"use client";

import {
  Navbar,
  Hero,
  ServicesSection,
  Features,
  Pricing,
  CTA,
  Footer,
} from "@/components/home2";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
