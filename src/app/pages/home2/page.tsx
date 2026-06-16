"use client";

import {
  Hero,
  ServicesSection,
  Features,
  Pricing,
  CTA,
} from "@/components/home2";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <Features />
      <Pricing />
      <CTA />
    </div>
  );
}
