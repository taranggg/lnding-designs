import { Link } from "react-router-dom";
import { useState } from "react";
import { RequestInviteModal } from "./invite/RequestInviteModal";
import { BlobButton } from "./BlobButton";

export const Footer = () => {
  const [inviteOpen, setInviteOpen] = useState(false);

  return (
    <>
      <footer className="bg-black flex p-3 sm:p-4" style={{ height: "100vh" }}>
        {/* Rounded image card — mirrors the Hero card pattern */}
        <div
          className="relative flex-1 flex flex-col items-center justify-center overflow-hidden"
          style={{
            borderRadius: "20px",
            backgroundImage: "url('/Statue_carrying_smartphone_reel.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <p
              className="text-slate-200 mb-4"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 450,
                fontSize: "1.25rem",
                letterSpacing: "0.14em",
              }}
            >
              That's our platform
            </p>
            <h2
              className="text-white mb-8"
              style={{
                fontFamily: "'TimesNow', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textShadow:
                  "0 0 20px rgba(255,255,255,0.9), 0 0 60px rgba(255,255,255,0.5), 0 0 120px rgba(200,220,255,0.35)",
              }}
            >
              Let's <em style={{ fontStyle: "italic" }}>elevate</em> your
              influence
            </h2>
            <BlobButton
              onClick={() => setInviteOpen(true)}
              size="lg"
              className="px-10 py-3 text-base rounded-xl"
              blobColor="bg-primary"
            >
              Request Invite
            </BlobButton>
          </div>

          {/* Bottom bar pinned to card bottom */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
              <span>
                © {new Date().getFullYear()} Your Brand | All Rights Reserved.
              </span>
              <div className="flex items-center gap-6">
                <Link
                  to="/creator"
                  className="hover:text-white transition-colors"
                >
                  Creator
                </Link>
                <Link
                  to="/brand"
                  className="hover:text-white transition-colors"
                >
                  Brand
                </Link>
                <Link
                  to="/agency"
                  className="hover:text-white transition-colors"
                >
                  Agency
                </Link>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  to="/legal/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/legal/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/legal/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
                <Link
                  to="/legal/refund"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <RequestInviteModal open={inviteOpen} onOpenChange={setInviteOpen} />
    </>
  );
};
