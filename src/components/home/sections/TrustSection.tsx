import { MediaCard } from "../components/MediaCard";
import trustData from "../data/trust.json";

export const TrustSection = () => (
  <section className="relative px-6 py-24">
    <div className="max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center">
        <h2 className="font-normal leading-tight text-2xl sm:text-3xl lg:text-4xl">
          <span className="text-zinc-400">{trustData.heading}</span>
          <span className="text-zinc-300 mx-3">·</span>
          <span className="text-foreground">{trustData.subheading}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-stretch px-16">
        {trustData.pillars.map((pillar) => (
          <MediaCard
            key={pillar.number}
            className="min-h-80"
            label={`${pillar.number} · ${pillar.label}`}
            labelColor={pillar.accent}
            title={pillar.tagline}
            description={pillar.description}
            variant="elevated"
            contentBackground="#ffffff"
            contentClassName="py-12"
          />
        ))}
      </div>
    </div>
  </section>
);
