import instagramLogo from "../assets/social-logos/instagram.png";
import youtubeLogo from "../assets/social-logos/youtube.png";
import tiktokLogo from "../assets/social-logos/tiktok.png";
import servicesData from "../data/services.json";

export const ACCENT_COLOR = servicesData.accentColor;
export const PEEK_HEIGHT = 111;

export interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
  accent: boolean;
  imageSlot: string;
}

export const SERVICES_DATA: ServiceItem[] = servicesData.items;

function InfluencerCard() {
  return (
    <div
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0d0d0d 100%)" }}
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
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-white/50 text-xs font-medium tracking-wider uppercase">
            500+ Brand Campaigns
          </span>
        </div>
      </div>
    </div>
  );
}

function DigitalIPsCard() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8" style={{ background: "#0a0a0a" }}>
      <div className="grid grid-cols-3 gap-4 w-full">
        {servicesData.digitalIpsBrands.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center rounded-lg py-3 px-2"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
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
          style={{ height: 2, background: `rgba(255,255,255,${0.05 + i * 0.015})` }}
        />
      ))}
      <div
        className="absolute flex items-center justify-center w-20 h-20 rounded-full"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}
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
      style={{ background: "radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 70%)" }}
    >
      <div className="text-center space-y-1">
        <p
          className="font-black tracking-[0.3em] uppercase"
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", color: "rgba(255,255,255,0.9)" }}
        >
          MONK - E
        </p>
        <p
          className="font-bold tracking-[0.5em] uppercase"
          style={{ fontSize: "clamp(0.7rem, 1vw, 0.9rem)", color: "rgba(255,255,255,0.4)" }}
        >
          STUDIOS
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
