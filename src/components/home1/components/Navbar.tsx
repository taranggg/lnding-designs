import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useUnreadCount } from "@/hooks/useUnreadCount";
import { usePendingProposals } from "@/hooks/usePendingProposals";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { RequestInviteModal } from "@/components/invite/RequestInviteModal";
import { useAuth } from "@/hooks/useAuth";
import { UserDropdown } from "@/components/layout/UserDropdown";
import linkfluenceNavbarLogo from "@/assets/linkfluence-logo.png";
import linkfluenceIcon from "@/assets/linkfluence-icon.png";
import { BlobButton } from "../ui/blob-button";

const NAV_LINKS = [
  { to: "/creator", label: "Creator" },
  { to: "/brand", label: "Brand" },
  { to: "/agency", label: "Agency" },
  { to: "/about", label: "About" },
];

const NavBadge = ({ count }: { count: number }) => (
  <span className="h-5 min-w-[20px] px-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
    {count > 99 ? "99+" : count}
  </span>
);

export const Navbar = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const { user, role } = useAuth();
  const unreadCount = useUnreadCount();
  const pendingProposalsCount = usePendingProposals();
  const location = useLocation();

  const isHomepage = !user && location.pathname === "/";
  const dashboardLink = user ? "/dashboard" : "/";

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

  const dashboardLinks = user ? (
    <>
      <Link
        to={dashboardLink}
        className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
      >
        Dashboard
      </Link>

      {role === "creator" && (
        <>
          <Link
            to="/creator/proposals"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
          >
            Proposals
            {pendingProposalsCount > 0 && (
              <NavBadge count={pendingProposalsCount} />
            )}
          </Link>
          <Link
            to="/creator/contracts"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Contracts
          </Link>
        </>
      )}

      {role === "brand" && (
        <>
          <Link
            to="/dashboard/brand/briefs/new"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            New Brief
          </Link>
          <Link
            to="/brand/proposals"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Proposals
          </Link>
        </>
      )}

      {role === "agency" && (
        <Link
          to="/agency/reports"
          className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
        >
          Reports
        </Link>
      )}

      {role === "admin" && (
        <Link
          to="/admin/briefs"
          className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
        >
          Briefs
        </Link>
      )}

      <Link
        to="/messages"
        className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1"
      >
        Messages
        {unreadCount > 0 && <NavBadge count={unreadCount} />}
      </Link>
    </>
  ) : (
    <>
      {NAV_LINKS.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
        >
          {label}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow:
            "0 1px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to={dashboardLink}
              className="flex items-center gap-1 hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <img
                src={linkfluenceIcon}
                alt=""
                aria-hidden="true"
                className="h-11 w-11 object-contain"
              />
              <img
                src={linkfluenceNavbarLogo}
                alt="LinkFluence"
                width={1080}
                height={1080}
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-8">
              {dashboardLinks}
            </nav>

            {/* Right-side actions */}
            <div className="flex items-center gap-2">
              {user ? (
                <>
                  {/* Mobile hamburger for authenticated */}
                  <button
                    className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-black/5 transition-colors"
                    onClick={() => setMobileMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </button>
                  <UserDropdown />
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden sm:inline-flex text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-black/5"
                    onClick={() => setAuthOpen(true)}
                  >
                    Sign In
                  </Button>
                  <BlobButton
                    onClick={() => setInviteOpen(true)}
                    className="hidden sm:inline-flex bg-primary text-background hover:text-primary border border-primary"
                    blobColor="bg-background"
                  >
                    Request Invite
                  </BlobButton>
                  {/* Mobile hamburger for guests */}
                  <button
                    className="sm:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-black/5 transition-colors"
                    onClick={() => setMobileMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: mobileMenuOpen ? "480px" : "0px" }}
        >
          <nav
            className="flex flex-col gap-1 px-4 pb-4 pt-1"
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.4)",
            }}
          >
            {user ? (
              <>
                <Link
                  to={dashboardLink}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>

                {role === "creator" && (
                  <>
                    <Link
                      to="/creator/proposals"
                      className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors flex items-center gap-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Proposals
                      {pendingProposalsCount > 0 && (
                        <NavBadge count={pendingProposalsCount} />
                      )}
                    </Link>
                    <Link
                      to="/creator/contracts"
                      className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contracts
                    </Link>
                  </>
                )}

                {role === "brand" && (
                  <>
                    <Link
                      to="/dashboard/brand/briefs/new"
                      className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      New Brief
                    </Link>
                    <Link
                      to="/brand/proposals"
                      className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Proposals
                    </Link>
                  </>
                )}

                {role === "agency" && (
                  <Link
                    to="/agency/reports"
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Reports
                  </Link>
                )}

                {role === "admin" && (
                  <Link
                    to="/admin/briefs"
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Briefs
                  </Link>
                )}

                <Link
                  to="/messages"
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Messages
                  {unreadCount > 0 && <NavBadge count={unreadCount} />}
                </Link>
              </>
            ) : (
              <>
                {NAV_LINKS.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-2 flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm font-medium"
                    onClick={() => {
                      setAuthOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <BlobButton
                    className="w-full bg-primary text-background hover:text-primary border border-primary"
                    blobColor="bg-background"
                    onClick={() => {
                      setInviteOpen(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Request Invite
                  </BlobButton>
                </div>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Full-screen mobile overlay for homepage (non-authenticated) */}
      {isHomepage && (
        <div
          className="fixed inset-0 z-[200] flex flex-col bg-primary sm:hidden"
          style={{
            clipPath: mobileMenuOpen
              ? "inset(0 0 0 0 round 0px)"
              : "inset(0 0 100% 100% round 20px)",
            transition: "clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: mobileMenuOpen ? "auto" : "none",
          }}
        >
          <div className="flex items-center justify-between px-4 h-16 shrink-0">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1"
            >
              <img
                src={linkfluenceIcon}
                alt=""
                aria-hidden="true"
                className="h-7 w-7 object-contain brightness-0 invert"
              />
              <img
                src={linkfluenceNavbarLogo}
                alt="LinkFluence"
                width={1080}
                height={1080}
                className="object-contain h-24 w-auto brightness-0 invert"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col px-8 pt-10 gap-8 flex-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white transition-colors"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="px-8 pb-14 flex flex-col gap-4">
            <button
              onClick={() => {
                setAuthOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-white hover:text-white/80 text-2xl font-medium transition-colors text-left"
            >
              Sign In
            </button>
            <BlobButton
              className="w-full bg-primary text-background hover:text-primary border border-primary"
              blobColor="bg-background"
              onClick={() => {
                setInviteOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Request Invite
            </BlobButton>
          </div>
        </div>
      )}

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
      <RequestInviteModal open={inviteOpen} onOpenChange={setInviteOpen} />
    </>
  );
};
