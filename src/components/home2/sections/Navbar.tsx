import { Button } from "../ui/button";
import { Logo } from "@/components/shared/Logo";
import { DesignSwitcher } from "@/components/shared/DesignSwitcher";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
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
          <Button variant="gradient" size="sm">
            Request Invite
          </Button>
        </div>
      </div>
    </header>
  );
};
