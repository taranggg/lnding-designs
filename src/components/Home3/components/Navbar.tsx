import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RequestInviteModal } from "./invite/RequestInviteModal";
import { BlobButton } from "./BlobButton";
import navbarLogo from "../assets/linkfluence-logo.png";

/**
 * Standalone homepage navbar — no auth/session wiring. Wire up `onSignInClick`
 * if you add your own auth flow.
 */
interface NavbarProps {
  onSignInClick?: () => void;
}

export const Navbar = ({ onSignInClick }: NavbarProps) => {
  const [inviteOpen, setInviteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [secondFoldVisible, setSecondFoldVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Second fold starts at 100vh; its top hits 50% of viewport when scrollY = 50vh
      setSecondFoldVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const MobileNavLinks = () => (
    <div className="flex flex-col space-y-4 pt-4">
      <Link
        href="/creator"
        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        onClick={closeMobileMenu}
      >
        Creator
      </Link>
      <Link
        href="/brand"
        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        onClick={closeMobileMenu}
      >
        Brand
      </Link>
      <Link
        href="/agency"
        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        onClick={closeMobileMenu}
      >
        Agency
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        onClick={closeMobileMenu}
      >
        About
      </Link>
    </div>
  );

  return (
    <>
      {/* pt-10 gives more breathing room from the top; wider initial width */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-10 px-4 pointer-events-none">
        <div
          className="pointer-events-auto flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-500 ease-in-out"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.1)",
            width: secondFoldVisible ? "min(680px, 94vw)" : "min(1160px, 96vw)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src={navbarLogo.src}
              alt="Logo"
              className="object-contain"
              style={{
                height: secondFoldVisible ? "130px" : "150px",
                transition: "height 0.5s ease",
              }}
            />
          </Link>

          {/* Center links — hidden on mobile */}
          <div
            className="hidden md:flex items-center gap-7 transition-all duration-500"
            style={{ opacity: secondFoldVisible ? 0.9 : 1 }}
          >
            <Link
              href="/creator"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              Creator
            </Link>
            <Link
              href="/brand"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              Brand
            </Link>
            <Link
              href="/agency"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              Agency
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              About
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] bg-background border-border"
              >
                <SheetHeader>
                  <SheetTitle className="text-foreground">Menu</SheetTitle>
                </SheetHeader>
                <MobileNavLinks />
              </SheetContent>
            </Sheet>

            <Button
              variant="ghost"
              onClick={onSignInClick}
              size="sm"
              className="text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 hidden md:inline-flex"
            >
              Sign In
            </Button>
            <BlobButton onClick={() => setInviteOpen(true)}>
              Request Invite
            </BlobButton>
          </div>
        </div>
      </nav>

      <RequestInviteModal open={inviteOpen} onOpenChange={setInviteOpen} />
    </>
  );
};
