"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { AboutSection } from "./components/sections/AboutSection";
import { WhyChooseSection } from "./components/sections/WhyChooseSection";
import PricingSection from "./components/sections/PricingSection";
import { Footer } from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const Home = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* z-index: 2 so all content slides over the sticky hero card */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <AboutSection />
          <WhyChooseSection />
          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
