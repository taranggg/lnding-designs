import linkfluenceLogoFull from "../assets/linkfluence-logo-full.png";
import Aurora from "../components/Aurora";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-[#0B0B0B] overflow-hidden flex flex-col"
      style={{ position: "relative" }}
    >
      {/* Aurora WebGL background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Aurora
          colorStops={["#1E3FAB", "#1E3FAB", "#1E3FAB"]}
          amplitude={1.2}
          blend={0.8}
          speed={0.6}
        />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col" style={{ zIndex: 10 }}>
        <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-16 w-full">
            {/* Left Column — ~60% */}
            <div className="flex-[3] space-y-7 max-w-2xl">
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "rgba(255, 195, 0, 0.9)" }}
                />
                <span className="text-xs font-medium text-white/60 tracking-widest uppercase">
                  Creator Economy
                </span>
              </div>

              {/* Main headline */}
              <h1
                className="font-bold text-white"
                style={{
                  fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                India's Largest
                <br />
                <span style={{ color: "#FFFFFF" }}>Creator Business</span>
              </h1>

              {/* Sub-headline */}
              <p
                className="leading-relaxed"
                style={{
                  color: "#A0A0A0",
                  fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                  maxWidth: "480px",
                }}
              >
                85B+ views, iconic campaigns, impossible collabs, and
                culture-defining digital shows with top global brands.
              </p>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="#work"
                  onClick={(e) => e.preventDefault()}
                  className="cta-double-underline text-white font-bold"
                  style={{ fontSize: "1.05rem" }}
                >
                  The Proof is in the Work 👀
                </a>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  { value: "85B+", label: "Total Views" },
                  { value: "500+", label: "Brand Campaigns" },
                  { value: "#1", label: "Creator Network" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <span
                      className="font-bold text-white"
                      style={{ fontSize: "1.4rem", letterSpacing: "-0.02em" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-xs font-medium tracking-wider uppercase"
                      style={{ color: "#606060" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — ~40% */}
            <div className="flex-[2] flex justify-center lg:justify-end items-end w-full">
              <div className="flex flex-col items-center gap-3">
                {/* Thumbnail card */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "200px",
                    height: "140px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 0 40px rgba(255, 195, 0, 0.08)",
                  }}
                >
                  <img
                    src={linkfluenceLogoFull}
                    alt="Campaign thumbnail"
                    className="w-full h-full object-contain p-4"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  {/* Subtle gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(11,11,11,0.6) 0%, transparent 50%)",
                      borderRadius: "16px",
                    }}
                  />
                </div>

                {/* Caption */}
                <p
                  className="text-sm font-medium text-center"
                  style={{ color: "#A0A0A0" }}
                >
                  When brands let us cook
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider line */}
        <div
          className="mx-6 md:mx-12 mb-0"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};
