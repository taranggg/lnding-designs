import React from "react";
import instagramLogo from "@/components/shared/assets/social-logos/instagram.png";
import youtubeLogo from "@/components/shared/assets/social-logos/youtube.png";
import tiktokLogo from "@/components/shared/assets/social-logos/tiktok.png";

export const ACCENT_COLOR = "#3b82f6";
export const PEEK_HEIGHT = 111;

export interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
  accent: boolean;
  imageSlot: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    bullets: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit sed",
      "Eiusmod tempor incididunt",
      "Ut labore et dolore magna",
    ],
    accent: true,
    imageSlot: "influencer",
  },
  {
    title: "Dolor Sit Amet",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
    bullets: [
      "Aligning with lorem ipsum goals",
      "Crafting engaging narratives",
      "Strategic dolor selection",
      "Producing at scale",
    ],
    accent: false,
    imageSlot: "digital-ips",
  },
  {
    title: "Consectetur Elit",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    bullets: [
      "Direct access to top lorem ipsum",
      "Quicker and smoother executions",
      "Stronger dolor-sit alignment",
      "Nation-wide influence across all niches",
    ],
    accent: true,
    imageSlot: "talent",
  },
  {
    title: "Sed Eiusmod Studios",
    description:
      "A full-service lorem ipsum production house delivering high-quality content for dolor sit amet.",
    bullets: [
      "Modular studio space for all your needs",
      "Industry-grade equipment & skilled crews",
      "World-class editing suite",
      "End-to-end production support",
    ],
    accent: false,
    imageSlot: "studios",
  },
];

function InfluencerCard() {
  return (
    <div
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0d0d0d 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-6 items-center">
          {[instagramLogo, youtubeLogo, tiktokLogo].map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-2xl"
              style={{
                width: 64,
                height: 64,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                transform: i === 1 ? "translateY(-12px)" : "none",
              }}
            >
              <img src={src.src} alt="" className="w-8 h-8 object-contain" />
            </div>
          ))}
        </div>
        <div
          className="flex items-center gap-2 px-5 py-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-white/50 text-xs font-medium tracking-wider uppercase">
            Lorem Ipsum Dolor
          </span>
        </div>
      </div>
    </div>
  );
}

function DigitalIPsCard() {
  const brands = [
    "Lorem",
    "Ipsum",
    "Dolor",
    "Sit Amet",
    "Consectetur",
    "Adipiscing",
    "Elit",
    "Sed Do",
    "Eiusmod",
  ];
  return (
    <div
      className="w-full h-full flex items-center justify-center p-8"
      style={{ background: "#0a0a0a" }}
    >
      <div className="grid grid-cols-3 gap-4 w-full">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center rounded-lg py-3 px-2"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-white/70 text-xs font-bold tracking-wide text-center leading-tight">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TalentCard() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4"
      style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)" }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="w-4/5 rounded-sm"
          style={{
            height: 2,
            background: `rgba(255,255,255,${0.05 + i * 0.015})`,
          }}
        />
      ))}
      <div
        className="absolute flex items-center justify-center w-20 h-20 rounded-full"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <span className="text-white/40 text-2xl">🤝</span>
      </div>
    </div>
  );
}

function StudiosCard() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 70%)",
      }}
    >
      <div className="text-center space-y-1">
        <p
          className="font-black tracking-[0.3em] uppercase"
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          LOREM
        </p>
        <p
          className="font-bold tracking-[0.5em] uppercase"
          style={{
            fontSize: "clamp(0.7rem, 1vw, 0.9rem)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          IPSUM
        </p>
      </div>
    </div>
  );
}

export const SERVICES_IMAGE_CARDS: Record<string, React.ReactNode> = {
  influencer: <InfluencerCard />,
  "digital-ips": <DigitalIPsCard />,
  talent: <TalentCard />,
  studios: <StudiosCard />,
};
