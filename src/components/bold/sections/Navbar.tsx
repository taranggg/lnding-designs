import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Logo } from "@/components/shared/Logo";
import { DesignTabs } from "@/components/shared/DesignTabs";

export const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (currentY < 60) {
          setVisible(true);
        } else if (delta > 4) {
          setVisible(false);
        } else if (delta < -4) {
          setVisible(true);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 relative flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Logo />
        </a>

        <DesignTabs
          current="bold"
          theme="dark"
          className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <Button variant="gradient" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};
