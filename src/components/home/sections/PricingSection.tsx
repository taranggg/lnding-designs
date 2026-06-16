import { Check } from "lucide-react";
import { ShinyButton } from "../components/ShinyButton";
import pricingData from "../data/pricing.json";

interface PlanCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceNote: string | null;
  cta: string;
  ctaFootnote: string | null;
  features: string[];
  featured: boolean;
  isComingSoon?: boolean;
}

const PlanCard = ({
  title,
  subtitle,
  price,
  priceNote,
  cta,
  ctaFootnote,
  features,
  featured,
  isComingSoon = false,
}: PlanCardProps) => (
  <div
    className="flex flex-col rounded-2xl p-7 gap-6"
    style={{
      background: featured ? "#ffffff" : "#fafafa",
      border: featured ? "2px solid #1e3a5f" : "1px solid #e4e4e7",
      boxShadow: featured
        ? "0 8px 32px rgba(30,58,95,0.12), 0 2px 8px rgba(0,0,0,0.06)"
        : "none",
    }}
  >
    {/* Plan identity */}
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold text-gray-900">{title}</span>
      <span className="text-sm" style={{ color: "#71717a" }}>
        {subtitle}
      </span>
    </div>

    {/* Price */}
    <div className="flex flex-col gap-0.5">
      <span
        className="font-semibold leading-none text-gray-900"
        style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
      >
        {price}
      </span>
      {priceNote && (
        <span className="text-sm" style={{ color: "#71717a" }}>
          {priceNote}
        </span>
      )}
    </div>

    {/* CTA */}
    <div className="flex flex-col gap-2">
      {isComingSoon ? (
        <div className="cursor-not-allowed w-full">
          <ShinyButton
            gradientColors={["#c8d8f0", "#1e3a5f", "#c8d8f0"]}
            className="w-full h-10 pointer-events-none"
            innerClassName="bg-background text-foreground text-sm px-4 py-0"
          >
            Coming Soon
          </ShinyButton>
        </div>
      ) : (
        <ShinyButton
          gradientColors={["#c8d8f0", "#1e3a5f", "#c8d8f0"]}
          className="w-full h-10"
          innerClassName={
            featured
              ? "bg-primary text-primary-foreground text-sm px-4 py-0 group-hover:bg-primary/90 group-hover:text-primary-foreground"
              : "bg-background text-foreground text-sm px-4 py-0 group-hover:bg-primary group-hover:text-primary-foreground"
          }
        >
          {cta}
        </ShinyButton>
      )}
      {ctaFootnote && (
        <span
          className="text-xs text-center hover:underline cursor-pointer"
          style={{ color: "#71717a" }}
        >
          {ctaFootnote}
        </span>
      )}
    </div>

    {/* Divider */}
    <div style={{ borderTop: "1px solid #e4e4e7" }} />

    {/* Features */}
    <ul className="flex flex-col gap-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <Check
            size={15}
            className="shrink-0 mt-0.5"
            style={{ color: "#1e3a5f" }}
            strokeWidth={2.5}
          />
          <span className="text-sm leading-snug" style={{ color: "#374151" }}>
            {f}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export const PricingSection = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">

        {/* Header */}
        <h2 className="text-center font-normal leading-tight whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl">
          <span className="text-zinc-400">{pricingData.heading} </span>
          <span className="text-foreground">{pricingData.subheading}</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {pricingData.plans.map((plan) => (
            <PlanCard
              key={plan.id}
              {...plan}
              featured={plan.id === "brand"}
              isComingSoon={plan.id === "agency"}
            />
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: "#e4e4e7" }}
        >
          {pricingData.stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col gap-2 px-8 py-8"
              style={{ background: "#fafafa" }}
            >
              <span
                className="font-semibold leading-none text-gray-900"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm leading-snug"
                style={{ color: "#71717a", maxWidth: "200px" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
