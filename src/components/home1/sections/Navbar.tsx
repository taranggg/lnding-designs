import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { DesignSwitcher } from "@/components/shared/DesignSwitcher";
import { Button } from "@/components/ui/button";
import footerData from "../data/footer.json";

export const Navbar = () => {
  const navLinks = footerData.columns[0].links;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
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
          <Button className="rounded-xl px-5 h-9 text-sm">Request Invite</Button>
        </div>
      </div>
    </header>
  );
};
