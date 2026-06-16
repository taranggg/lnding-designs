"use client";

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { FeaturesSection } from "./sections/FeaturesSection";
import { TrustSection } from "./sections/TrustSection";
import { AudienceSection } from "./sections/AudienceSection";
import { PricingSection } from "./sections/PricingSection";
import { BannerSection } from "./sections/BannerSection";
import { HomeFooter } from "./sections/HomeFooter";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const Home = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <div id="features">
          <FeaturesSection />
        </div>
        <TrustSection />
        <AudienceSection />
        <PricingSection />
        <BannerSection />
      </main>
      <HomeFooter />
    </div>
  );
};

export default Home;
