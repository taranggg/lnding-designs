"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { DesignSwitcher } from "@/components/shared/DesignSwitcher";
import { Button } from "@/components/ui/button";
import footerData from "../data/footer.json";

export const Navbar = () => {
  const navLinks = footerData.columns[0].links;
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          setMobileMenuOpen(false);
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

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <DesignSwitcher current="home1" theme="light" className="hidden sm:inline-flex" />
          <Button className="hidden sm:inline-flex rounded-xl px-5 h-9 text-sm">
            Request Invite
          </Button>
          <button
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/60"
        style={{ maxHeight: mobileMenuOpen ? "400px" : "0px" }}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Button
            className="mt-2 rounded-xl h-9 text-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request Invite
          </Button>
        </nav>
      </div>
    </header>
  );
};
