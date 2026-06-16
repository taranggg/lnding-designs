"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { DesignSwitcher } from "@/components/shared/DesignSwitcher";
import { Button } from "@/components/ui/button";

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
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md transition-transform duration-300 ease-in-out"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="max-w-300 mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <DesignSwitcher current="minimal" theme="light" className="hidden sm:inline-flex" />
          <Button className="rounded-xl px-5 h-9 text-sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};
