import { BlobButton } from "../components/BlobButton";

export const BannerSection = () => {
  return (
    <section className="relative overflow-hidden bg-accent">
      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Brand icon watermark — two layers for depth */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          {/* Depth layer: blurred, offset shadow beneath */}
          <img
            src="/svgs/logo.svg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              width: "720px",
              height: "720px",
              objectFit: "contain",
              filter: "grayscale(1) opacity(0.13) blur(18px)",
              transform: "translateY(28px) scale(1.04)",
            }}
          />
          {/* Main layer */}
          <img
            src="/svgs/logo.svg"
            alt=""
            aria-hidden="true"
            style={{
              position: "relative",
              width: "700px",
              height: "700px",
              objectFit: "contain",
              filter: "grayscale(1) opacity(0.09)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-5">
          <h2
            className="font-medium text-foreground"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              maxWidth: "720px",
            }}
          >
            Build partnerships that drive real impact.
          </h2>

          <p
            className="text-muted-foreground"
            style={{
              fontSize: "clamp(0.95rem, 1.35vw, 1.1rem)",
              lineHeight: 1.65,
              maxWidth: "500px",
            }}
          >
            Join the top creators and brands using LinkFluence to connect,
            collaborate, and scale their reach seamlessly.
          </p>

          <div className="mt-4">
            <BlobButton
              size="lg"
              blobColor="bg-slate-900"
              className="px-10 h-12 text-sm font-medium"
            >
              Request Invite
            </BlobButton>
          </div>
        </div>
      </div>
    </section>
  );
};
