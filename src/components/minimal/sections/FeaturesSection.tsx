import {
  UsersRound,
  Brain,
  ShieldCheck,
  BarChart2,
  LucideIcon,
} from "lucide-react";
import featuresData from "../data/features.json";
import { ShinyButton } from "../components/ShinyButton";

const iconMap: Record<string, LucideIcon> = {
  UsersRound,
  Brain,
  ShieldCheck,
  BarChart2,
};

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  const Icon = iconMap[icon] ?? UsersRound;
  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{
          background: "#f0f0f2",
          border: "1px solid #e0e0e4",
          boxShadow:
            "0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        <Icon size={20} color="#111827" strokeWidth={1.6} />
      </div>
      <h3 className="text-gray-900 font-semibold text-base leading-snug whitespace-nowrap">
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#71717a" }}>
        {description}
      </p>
    </div>
  );
};

export const FeaturesSection = () => {
  const leftFeatures = featuresData.items.slice(0, 2);
  const rightFeatures = featuresData.items.slice(2, 4);

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-gray-900 mb-4 whitespace-nowrap w-fit mx-auto block"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            {featuresData.heading}
          </h2>
          <p
            className="mb-8 px-2 max-w-2xl mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "#71717a" }}
          >
            {featuresData.subheading}
          </p>
          <ShinyButton
            gradientColors={["#c8d8f0", "#1e3a5f", "#c8d8f0"]}
            className="shadow-lg"
            innerClassName="bg-background text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
          >
            Learn More
          </ShinyButton>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 xl:gap-16">
          {/* Left features */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((f) => (
              <FeatureItem
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>

          {/* Center hero image */}
          <div
            className="rounded-3xl overflow-hidden shrink-0 mx-auto"
            style={{
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)",
              maxWidth: "420px",
              width: "100%",
            }}
          >
            <img
              src="/minimal/LinkFulence_featureHero.avif"
              alt="Platform features"
              className="w-full h-auto block"
              style={{ borderRadius: "inherit" }}
            />
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((f) => (
              <FeatureItem
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
