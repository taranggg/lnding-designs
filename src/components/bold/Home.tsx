"use client";

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { ServicesSection } from "./sections/ServicesSection";
import { Pricing } from "./sections/Pricing";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
