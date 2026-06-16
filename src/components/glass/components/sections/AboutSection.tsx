import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Manifesto copy ────────────────────────────────────────────────────────────
const LINES = [
  "Lorem ipsum dolor sit amet consectetur",
  "adipiscing elit sed do eiusmod tempor",
  "incididunt ut labore et dolore magna",
  "aliqua ut enim ad minim veniam,",
  "quis nostrud exercitation ullamco.",
];
const TOTAL_WORDS = LINES.reduce((s, l) => s + l.split(" ").length, 0);

// ── About copy ────────────────────────────────────────────────────────────────
const PILLARS = [
  {
    num: "01",
    label: "Lorem Ipsum",
    body: "Dolor sit amet consectetur adipiscing elit sed do eiusmod.",
  },
  {
    num: "02",
    label: "Dolor Sit Amet",
    body: "Tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    num: "03",
    label: "Consectetur Elit",
    body: "Ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
];

// ── Animation helpers ─────────────────────────────────────────────────────────
const clamp = (v: number, lo = 0, hi = 1) => (v < lo ? lo : v > hi ? hi : v);

const remap = (v: number, a: number, b: number) => clamp((v - a) / (b - a));

// Gentle sine ease — feels like moving through resistance
const sine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

// Apply opacity + depth illusion (scale + blur + y) to an element
function applyDepth(
  el: HTMLElement | null,
  op: number,
  y: number,
  sc: number,
  bl: number,
) {
  if (!el) return;
  gsap.set(el, { opacity: op, y, scale: sc, filter: `blur(${bl}px)` });
}

// Compute the depth state for a beat at a given progress value.
// inA→inB: surface animation; outA→outB: sink-away animation.
function beatState(
  p: number,
  inA: number,
  inB: number,
  outA?: number,
  outB?: number,
) {
  if (p <= inA) {
    return { op: 0, y: 38, sc: 0.93, bl: 14 };
  }
  if (p < inB) {
    const t = sine(remap(p, inA, inB));
    return { op: t, y: (1 - t) * 38, sc: 0.93 + t * 0.07, bl: (1 - t) * 14 };
  }
  if (!outA || p <= outA) {
    return { op: 1, y: 0, sc: 1, bl: 0 };
  }
  if (outB && p < outB) {
    const t = sine(remap(p, outA, outB));
    return { op: 1 - t, y: -t * 26, sc: 1 + t * 0.07, bl: t * 12 };
  }
  return { op: 0, y: -26, sc: 1.07, bl: 12 };
}

// ── Shared styles ─────────────────────────────────────────────────────────────
const EYEBROW: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "0.7rem",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.3)",
  marginBottom: "2rem",
};

const BODY: React.CSSProperties = {
  fontFamily: "'TimesNow', Georgia, serif",
  fontWeight: 300,
  fontSize: "clamp(1.35rem, 3vw, 3rem)",
  lineHeight: 1.18,
  letterSpacing: "-0.02em",
  color: "rgba(255,255,255,0.88)",
  textAlign: "center",
  maxWidth: "820px",
};

// ── Component ─────────────────────────────────────────────────────────────────
export const AboutSection = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lastVals = useRef<number[]>([]);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const n = TOTAL_WORDS;

    const ctx = gsap.context(() => {
      // Single ScrollTrigger drives the entire merged section.
      // scrub: 1 gives enough inertia to feel weighted without fighting the user.
      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: "bottom bottom",
        // Low scrub = fast response; 0.35 s of smoothing prevents jitter
        // without making the playhead feel sticky.
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;

          // ── Phase 1: Manifesto word-by-word reveal (p 0 → 0.25) ─────────────
          const mp = clamp(p / 0.25);
          const refs = wordRefs.current;
          const last = lastVals.current;
          for (let i = 0; i < refs.length; i++) {
            const el = refs[i];
            if (!el) continue;
            const wp = (mp - i / n) / (2 / n);
            const clamped = wp <= 0 ? 0 : wp >= 1 ? 1 : wp;
            const rounded = Math.round(clamped * 100);
            if (last[i] === rounded) continue;
            last[i] = rounded;
            el.style.color = `rgba(255,255,255,${0.15 + (rounded / 100) * 0.85})`;
          }

          // ── Phase 2: Manifesto sinks out — tight 4% window ──────────────────
          const mt = sine(remap(p, 0.25, 0.29));
          applyDepth(
            manifestoRef.current,
            1 - mt,
            -mt * 26,
            1 + mt * 0.07,
            mt * 12,
          );

          // ── Phase 3–5: About beats — 4% in, hold, 4% out ────────────────────
          // Tight transition windows keep each swap feeling instant; the hold
          // regions are generous so copy is readable before the next beat.

          // Vision: in 0.28–0.32, hold, out 0.47–0.51
          applyDepth(
            visionRef.current,
            ...(Object.values(beatState(p, 0.28, 0.32, 0.47, 0.51)) as [
              number,
              number,
              number,
              number,
            ]),
          );

          // Mission: in 0.50–0.54, hold, out 0.65–0.69
          applyDepth(
            missionRef.current,
            ...(Object.values(beatState(p, 0.5, 0.54, 0.65, 0.69)) as [
              number,
              number,
              number,
              number,
            ]),
          );

          // Pillars wrapper: in 0.68–0.72, stays
          applyDepth(
            pillarsRef.current,
            ...(Object.values(beatState(p, 0.68, 0.72)) as [
              number,
              number,
              number,
              number,
            ]),
          );

          // Pillar cards: stagger in at 0.72 / 0.76 / 0.80, each over 3%
          pillarRefs.current.forEach((el, i) => {
            const start = 0.72 + i * 0.04;
            const t = sine(remap(p, start, start + 0.03));
            applyDepth(el, t, (1 - t) * 22, 0.93 + t * 0.07, (1 - t) * 8);
          });
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  const beatClass =
    "absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16 lg:px-24";

  return (
    // 700vh total — 600vh of scrollable distance for the 100vh sticky panel.
    <div ref={wrapRef} style={{ minHeight: "700vh", position: "relative" }}>
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          backgroundColor: "#0B0B0B",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* ── Manifesto text ──────────────────────────────────────────────── */}
        <div ref={manifestoRef} className={beatClass}>
          <div
            style={{
              fontFamily: "'TimesNow', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(1.5rem, 3.6vw, 3.5rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            {(() => {
              let wi = 0;
              return LINES.map((line, li) => (
                <span key={li} style={{ display: "block" }}>
                  {line.split(" ").map((word) => {
                    const i = wi++;
                    return (
                      <span
                        key={i}
                        ref={(el) => {
                          wordRefs.current[i] = el;
                        }}
                        style={{
                          color: "rgba(255,255,255,0.15)",
                          willChange: "color",
                          display: "inline",
                        }}
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </span>
              ));
            })()}
          </div>
        </div>

        {/* ── Beat 1: The Vision ─────────────────────────────────────────── */}
        <div
          ref={visionRef}
          className={beatClass}
          style={{ opacity: 0, scale: "0.93", filter: "blur(14px)" }}
        >
          <p style={EYEBROW}>The Vision</p>
          <p style={BODY}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua
            ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* ── Beat 2: The Mission ────────────────────────────────────────── */}
        <div
          ref={missionRef}
          className={beatClass}
          style={{ opacity: 0, scale: "0.93", filter: "blur(14px)" }}
        >
          <p style={EYEBROW}>The Mission</p>
          <p style={BODY}>
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </div>

        {/* ── Beat 3: Our Pillars ────────────────────────────────────────── */}
        <div
          ref={pillarsRef}
          className={beatClass}
          style={{ opacity: 0, scale: "0.93", filter: "blur(14px)" }}
        >
          <p style={EYEBROW}>Our Pillars</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 max-w-4xl w-full">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.label}
                ref={(el) => {
                  pillarRefs.current[i] = el;
                }}
                style={{ opacity: 0, filter: "blur(8px)" }}
              >
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    color: "rgba(255,255,255,0.18)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {pillar.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'TimesNow', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
                    letterSpacing: "-0.01em",
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: "0.55rem",
                  }}
                >
                  {pillar.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
