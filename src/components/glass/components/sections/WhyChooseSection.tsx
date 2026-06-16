import { Shield, Zap, Lock, Users, TrendingUp, ClipboardCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    bg: "#0d0d0f",
    borderColor: "rgba(255,255,255,0.08)",
    glowColor: "rgba(59,130,246,0.12)",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.25)",
    iconColor: "#60a5fa",
  },
  {
    icon: Zap,
    title: "Dolor Sit Amet",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    bg: "#080e1a",
    borderColor: "rgba(59,130,246,0.2)",
    glowColor: "rgba(59,130,246,0.18)",
    iconBg: "rgba(255,255,255,0.06)",
    iconBorder: "rgba(255,255,255,0.12)",
    iconColor: "#ffffff",
  },
  {
    icon: Lock,
    title: "Consectetur Elit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    bg: "#0d0d0f",
    borderColor: "rgba(255,255,255,0.08)",
    glowColor: "rgba(59,130,246,0.12)",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.25)",
    iconColor: "#60a5fa",
  },
  {
    icon: Users,
    title: "Sed Do Eiusmod",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    bg: "#080e1a",
    borderColor: "rgba(59,130,246,0.2)",
    glowColor: "rgba(59,130,246,0.18)",
    iconBg: "rgba(255,255,255,0.06)",
    iconBorder: "rgba(255,255,255,0.12)",
    iconColor: "#ffffff",
  },
  {
    icon: TrendingUp,
    title: "Tempor Incididunt",
    description:
      "Mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    bg: "#0d0d0f",
    borderColor: "rgba(255,255,255,0.08)",
    glowColor: "rgba(59,130,246,0.12)",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.25)",
    iconColor: "#60a5fa",
  },
  {
    icon: ClipboardCheck,
    title: "Labore Et Dolore",
    description:
      "Accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.",
    bg: "#080e1a",
    borderColor: "rgba(59,130,246,0.2)",
    glowColor: "rgba(59,130,246,0.18)",
    iconBg: "rgba(255,255,255,0.06)",
    iconBorder: "rgba(255,255,255,0.12)",
    iconColor: "#ffffff",
  },
];

export const WhyChooseSection = () => {
  return (
    <section
      className="bg-[#0B0B0B] relative overflow-hidden py-24 px-6"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-white"
            style={{ fontSize: "2.8rem", fontWeight: 400, marginBottom: "0.8rem" }}
          >
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.5, color: "#a1a1aa" }}
          >
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative rounded-2xl p-7 overflow-hidden flex flex-col gap-6"
                style={{
                  background: feature.bg,
                  border: `1px solid ${feature.borderColor}`,
                  boxShadow:
                    "inset 0px 1px 1px rgba(255,255,255,0.4), inset 0px -2px 6px rgba(0,0,0,0.5)",
                }}
              >
                {/* Layer 1 — blue radial glow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${feature.glowColor} 0%, transparent 60%)`,
                  }}
                />

                {/* Layer 2 — grain texture */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    backgroundImage: "url('/glass/grain.avif')",
                    backgroundSize: "150px",
                    opacity: 0.2,
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Layer 3 — top-light / bottom-dark gradient */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 15%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: feature.iconBg,
                      border: `1px solid ${feature.iconBorder}`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: feature.iconColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: "rgba(255,255,255,0.18)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3
                    className="text-white mb-2"
                    style={{ fontSize: "1rem", fontWeight: 500, letterSpacing: "-0.01em" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
