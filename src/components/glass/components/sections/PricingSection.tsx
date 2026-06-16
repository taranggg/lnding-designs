import React from "react";
import { BlobButton } from "../BlobButton";
import JourneyAnimation from "../JourneyAnimation";

const PricingSection: React.FC = () => {
  return (
    <JourneyAnimation
      title="Lorem ipsum dolor sit amet."
      description={
        <>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </>
      }
      backgroundImageUrl="/glass/blue-mountain-bg.jpeg"
      cards={[
        // CARD 1: CREATOR
        {
          backThemeClass: "bg-[#f4f4f5] text-[#18181b]",
          children: (
            <div className="flex flex-col h-full p-4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold m-0">Creator</h3>
                <span className="text-[10px] uppercase tracking-wider opacity-80 block mb-0.5">
                  Lorem ipsum dolor sit
                </span>
                <div className="text-3xl font-bold leading-none">Free</div>
              </div>

              <ul className="list-none p-0 m-0 mb-2 flex-grow">
                {[
                  "Lorem ipsum dolor sit amet",
                  "Consectetur adipiscing elit",
                  "Sed do eiusmod tempor incididunt",
                  "Ut labore et dolore magna aliqua",
                  "Ut enim ad minim veniam",
                  "Quis nostrud exercitation",
                  "Ullamco laboris nisi ut aliquip",
                  "Ex ea commodo consequat",
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
                Get Started
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
                  Consectetur adipiscing elit
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
                  "Lorem ipsum dolor sit amet",
                  "Consectetur adipiscing elit sed",
                  "Do eiusmod tempor incididunt",
                  "Ut labore et dolore magna aliqua",
                  "Unlimited lorem ipsum creation",
                  "Dolor sit amet matching",
                  "Secure payment protection",
                  "Contract automation",
                  "Campaign analytics",
                  "Content approval workflow",
                  "Lorem ipsum safety tools",
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
                  Get Started
                </BlobButton>
                <a
                  href="#"
                  className="block text-center mt-2 text-[10px] underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  Lorem ipsum dolor sit →
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
                  Sed do eiusmod tempor
                </span>
                <div className="text-3xl font-bold leading-none">Custom</div>
              </div>

              <ul className="list-none p-0 m-0 mb-2 flex-grow">
                {[
                  "Manage multiple lorem ipsums",
                  "Bulk lorem ipsum tools",
                  "Advanced analytics & insights",
                  "Priority API access",
                  "Custom integrations",
                  "Priority lorem ipsum matching",
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
                Get Started
              </BlobButton>
            </div>
          ),
        },
      ]}
    />
  );
};

export default PricingSection;
