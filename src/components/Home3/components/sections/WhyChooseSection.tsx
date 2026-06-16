import { Shield, Zap, Lock, Users, TrendingUp, ClipboardCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Network",
    description:
      "Every creator and brand is manually verified by our team to ensure quality and authenticity.",
    bg: "#0d0d0f",
    borderColor: "rgba(255,255,255,0.08)",
    glowColor: "rgba(59,130,246,0.12)",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.25)",
    iconColor: "#60a5fa",
  },
  {
    icon: Zap,
    title: "AI-Powered Matching",
    description:
      "Smart algorithms match creators with brands based on audience, niche, and campaign goals.",
    bg: "#080e1a",
    borderColor: "rgba(59,130,246,0.2)",
    glowColor: "rgba(59,130,246,0.18)",
    iconBg: "rgba(255,255,255,0.06)",
    iconBorder: "rgba(255,255,255,0.12)",
    iconColor: "#ffffff",
  },
  {
    icon: Lock,
    title: "Secure Contracts",
    description:
      "Auto-generated contracts protect both parties with clear terms, deliverables, and payment schedules.",
    bg: "#0d0d0f",
    borderColor: "rgba(255,255,255,0.08)",
    glowColor: "rgba(59,130,246,0.12)",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.25)",
    iconColor: "#60a5fa",
  },
  {
    icon: Users,
    title: "Premium Brands",
    description:
      "Work with top-tier brands that value quality content and fair compensation.",
    bg: "#080e1a",
    borderColor: "rgba(59,130,246,0.2)",
    glowColor: "rgba(59,130,246,0.18)",
    iconBg: "rgba(255,255,255,0.06)",
    iconBorder: "rgba(255,255,255,0.12)",
    iconColor: "#ffffff",
  },
  {
    icon: TrendingUp,
    title: "Campaign Analytics",
    description:
      "Track performance metrics and insights to optimize your collaborations and grow your reach.",
    bg: "#0d0d0f",
    borderColor: "rgba(255,255,255,0.08)",
    glowColor: "rgba(59,130,246,0.12)",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.25)",
    iconColor: "#60a5fa",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance First",
    description:
      "Built-in compliance tools ensure all campaigns meet regulatory requirements and platform guidelines.",
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
            Everything You Need to Collaborate
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.5, color: "#a1a1aa" }}
          >
            From verified creators to secure payments — built for the modern creator economy.
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
                    backgroundImage: "url('/grain.avif')",
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
