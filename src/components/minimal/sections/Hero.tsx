import { Button } from "@/components/ui/button";
import { BrowserWindow } from "../components/BrowserWindow";

export const Hero = () => {
  return (
    <div className="relative bg-background">
      {/* Text + CTA */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 gap-6"
        style={{ minHeight: "100vh", paddingBottom: "26vh" }}
      >
        <h1
          className="font-medium text-foreground whitespace-nowrap"
          style={{
            fontSize: "clamp(1rem, 3vw, 3rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Lorem Ipsum Dolor Sit Amet
          <br /> Consectetur Elit.
        </h1>

        <p
          className="text-muted-foreground"
          style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.125rem)",
            lineHeight: 1.65,
            maxWidth: "560px",
          }}
        >
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut
          enim ad minim veniam.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
          <Button className="rounded-xl px-8 h-11 text-sm">Get Started</Button>
          <Button
            variant="default"
            className="rounded-xl px-8 h-11 text-sm bg-slate-100/20 border border-slate-200 text-bg-foreground hover:bg-background "
          >
            Learn More
          </Button>
        </div>
      </div>

      <div
        className="relative z-10 px-6 md:px-12 lg:px-24"
        style={{ marginTop: "-40vh", paddingBottom: "80px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
          style={{ zIndex: -1 }}
        >
          <img
            src="/minimal/churro/LinkFluence_churro1.avif"
            alt=""
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <BrowserWindow
          src="/shared/extra/LinkFluence_hero1.avif"
          mediaType="image"
          height={750}
          framePadding="p-3 pt-10"
          glassFilter="backdrop-blur-sm backdrop-contrast-125"
          containerClassName="shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
          glassBorder="border border-slate-800/20"
          glassBg="bg-slate-800/10"
        />
      </div>
    </div>
  );
};
