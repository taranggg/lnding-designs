import { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getTimezone } from "countries-and-timezones";
import { alpha2ToAlpha3 } from "i18n-iso-countries";
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  const location = useMemo(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const iso2 = getTimezone(tz)?.countries[0];
    return (iso2 && alpha2ToAlpha3(iso2)) ?? "IND";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Constant radius (not animated) keeps the transition 100% compositor-only —
    // no per-frame repaint of the image card = smoothest scroll.
    gsap.set(el, {
      transformPerspective: 1200,
      force3D: true,
      borderRadius: "24px",
    });

    const anim = gsap.to(el, {
      scale: 0.8,
      rotateX: 8,
      y: 40,
      // Front-load the motion so it feels fast up front while still finishing
      // exactly at the cover point — quick feel, no mid-transition stall.
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.documentElement,
        // End exactly where the second fold finishes sliding up to cover the
        // card (one full viewport of scroll). Ending sooner leaves the card
        // frozen for the remaining scroll, which reads as a mid-transition
        // stall/jerk — the motion must stay live right up to the handoff.
        start: "top top",
        end: () => "+=" + window.innerHeight,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div
      className="bg-black flex p-3 sm:p-4"
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        zIndex: 1,
        overflow: "hidden",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Hero card — scales down on scroll */}
      <div
        ref={cardRef}
        className="relative flex-1 flex flex-col overflow-hidden"
        style={{
          borderRadius: "20px",
          backgroundImage: "url(/shared/Blue_background_with_hanged_hand.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-16 py-16 pt-28">
          <h1
            className="text-white"
            style={{
              fontFamily: "'TimesNow', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(1.4rem, 3vw, 2.8rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              textShadow:
                "0 0 20px rgba(255,255,255,0.9), 0 0 60px rgba(255,255,255,0.5), 0 0 120px rgba(200,220,255,0.35)",
            }}
          >
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipiscing elit sed do eiusmod.
          </h1>
          <p
            className="mt-6 text-slate-350"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 350,
              fontSize: "clamp(1.7rem, 2.1vw, 2.1rem)",
              letterSpacing: "0.04em",
            }}
          >
            Tempor incididunt ut labore.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 grid grid-cols-3 items-center px-8 md:px-12 pb-8">
          {/* Left — live time */}
          <span
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
            }}
          >
            {time}
          </span>

          {/* Center — Scroll to Explore with shimmer */}
          <span
            className="hero-shimmer text-center"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Scroll to Explore
          </span>

          {/* Right — location */}
          <span
            className="text-right"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
            }}
          >
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};
