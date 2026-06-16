import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RequestInviteModal } from "./invite/RequestInviteModal";
import { BlobButton } from "./BlobButton";
import { DesignSwitcher } from "@/components/shared/DesignSwitcher";

interface NavbarProps {
  onSignInClick?: () => void;
}

export const Navbar = ({ onSignInClick }: NavbarProps) => {
  const [inviteOpen, setInviteOpen] = useState(false);
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
            className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src="/shared/logoipsum-350.svg"
              alt="LinkFluence"
              className="object-contain"
              style={{
                height: secondFoldVisible ? "20px" : "24px",
                transition: "height 0.5s ease",
              }}
            />
            <span className="text-white text-sm font-semibold tracking-tight whitespace-nowrap">
              LinkFluence
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <DesignSwitcher current="glass" theme="dark" className="hidden lg:inline-flex" />

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
