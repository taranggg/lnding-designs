import React from "react";
import { BlobButton } from "../BlobButton";
import JourneyAnimation from "../JourneyAnimation";

const PricingSection: React.FC = () => {
  return (
    <JourneyAnimation
      title="Power your next collaboration."
      description={
        <>
          Whether you're building an audience or scaling a brand, our pricing is
          designed to be simple, capped, and completely transparent.
        </>
      }
      backgroundImageUrl="/blue-mountain-bg.jpeg"
      cards={[
        // CARD 1: CREATOR
        {
          backThemeClass: "bg-[#f4f4f5] text-[#18181b]",
          children: (
            <div className="flex flex-col h-full p-4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold m-0">Creator</h3>
                <span className="text-[10px] uppercase tracking-wider opacity-80 block mb-0.5">
                  For verified influencers
                </span>
                <div className="text-3xl font-bold leading-none">Free</div>
              </div>

              <ul className="list-none p-0 m-0 mb-2 flex-grow">
                {[
                  "Free to join - no subscriptions",
                  "AI-matched campaign offers",
                  "Automated contracts & payouts",
                  "Secure Stripe Connect payments",
                  "Real-time notifications",
                  "Portfolio showcase",
                  "Performance tracking",
                  "Analytics dashboard",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="text-xs mb-1 pl-4 relative leading-tight opacity-90 before:content-['✓'] before:absolute before:left-0 before:font-bold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <BlobButton
                className="w-full mt-auto h-8 py-1 rounded-xl text-xs font-semibold !bg-[#111] !text-white !border-0 hover:!text-white"
                blobColor="bg-[#2563eb]"
              >
                Apply as Creator
              </BlobButton>
            </div>
          ),
        },
        // CARD 2: BRAND
        {
          backThemeClass: "bg-[#2563eb] text-white",
          children: (
            <div className="flex flex-col h-full p-4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold m-0">Brand</h3>
                <span className="text-[10px] uppercase tracking-wider opacity-80 block mb-0.5">
                  For premium brands
                </span>
                <div className="text-3xl font-bold leading-none">
                  12%{" "}
                  <span className="text-[10px] font-normal block opacity-80 mt-1">
                    platform fee
                  </span>
                </div>
              </div>

              <ul className="list-none p-0 m-0 mb-2 flex-grow">
                {[
                  "Free to sign up - no subscriptions",
                  "12% platform fee per collaboration",
                  "Fee capped at $1,500 maximum",
                  "Minimum $65 fee for small campaigns",
                  "Unlimited campaign creation",
                  "AI creator matching",
                  "Secure payment protection",
                  "Contract automation",
                  "Campaign analytics",
                  "Content approval workflow",
                  "Brand safety tools",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="text-xs mb-1 pl-4 relative leading-tight opacity-90 before:content-['✓'] before:absolute before:left-0 before:font-bold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <BlobButton
                  className="w-full h-8 py-1 rounded-xl text-xs font-semibold !bg-white !text-[#1a56db] !border-0 hover:!text-white"
                  blobColor="bg-slate-800"
                >
                  Apply as Brand
                </BlobButton>
                <a
                  href="#"
                  className="block text-center mt-2 text-[10px] underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  Calculate your exact costs →
                </a>
              </div>
            </div>
          ),
        },
        // CARD 3: AGENCY
        {
          backThemeClass: "bg-[#0f172a] text-[#f8fafc]",
          children: (
            <div className="flex flex-col h-full p-4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold m-0">Agency</h3>
                <span className="text-[10px] uppercase tracking-wider opacity-80 block mb-0.5">
                  For talent agencies
                </span>
                <div className="text-3xl font-bold leading-none">Custom</div>
              </div>

              <ul className="list-none p-0 m-0 mb-2 flex-grow">
                {[
                  "Manage multiple creators",
                  "Bulk campaign tools",
                  "Advanced analytics & insights",
                  "Priority API access",
                  "Custom integrations",
                  "Priority creator matching",
                  "Dedicated account manager",
                  "White-label options",
                  "Custom reporting dashboards",
                  "Multi-workspace support",
                  "Team collaboration tools",
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="text-xs mb-1 pl-4 relative leading-tight opacity-90 before:content-['✓'] before:absolute before:left-0 before:font-bold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <BlobButton
                className="w-full mt-auto h-8 py-1 rounded-xl text-xs font-semibold !bg-transparent border !border-white/30 !text-white hover:!text-white hover:!border-transparent"
                blobColor="bg-[#2563eb]"
              >
                Apply as Agency
              </BlobButton>
            </div>
          ),
        },
      ]}
    />
  );
};

export default PricingSection;
