import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { Logo } from "@/components/shared/Logo";
import { DesignSwitcher } from "@/components/shared/DesignSwitcher";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export const Navbar = () => {
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
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Logo variant="dark" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <DesignSwitcher current="home2" theme="dark" className="hidden sm:inline-flex" />
          <Button variant="gradient" size="sm" className="hidden sm:inline-flex">
            Request Invite
          </Button>
          <button
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0B0B0B]/95 backdrop-blur-md"
        style={{ maxHeight: mobileMenuOpen ? "320px" : "0px" }}
      >
        <nav className="flex flex-col gap-1 px-6 py-3">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button
            variant="gradient"
            size="sm"
            className="mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request Invite
          </Button>
        </nav>
      </div>
    </header>
  );
};
