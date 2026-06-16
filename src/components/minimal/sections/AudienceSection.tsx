import { MediaCard } from "../components/MediaCard";
import audienceData from "../data/audience.json";

export const AudienceSection = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="font-normal leading-tight text-2xl sm:text-3xl lg:text-4xl">
            <span className="text-zinc-400">{audienceData.heading}</span>
            <span className="text-zinc-300 mx-3">·</span>
            <span className="text-foreground">{audienceData.subheading}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audienceData.cards.map((card) => (
            <MediaCard
              key={card.label}
              imageSrc={card.churroSrc}
              imageAlt={card.label}
              visualHeight={320}
              label={card.label}
              labelColor={card.labelColor}
              title={card.title}
              description={card.description}
              cta={card.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
