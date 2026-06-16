import React from "react";
import { StackedCards } from "../components/StackedCards";
import {
  ACCENT_COLOR,
  PEEK_HEIGHT,
  SERVICES_DATA,
  SERVICES_IMAGE_CARDS,
} from "../components/servicesSection.config";

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-mono text-gray-500">&gt; SERVICES</span>
          <hr className="my-2 border-gray-300" />
          <h2 className="text-4xl font-bold text-gray-900">What we offer?</h2>
        </div>

        <StackedCards peekHeight={PEEK_HEIGHT} catchSpeed={6} lerpEase={0.08}>
          {SERVICES_DATA.map((service, idx) => {
            const bg = service.accent ? ACCENT_COLOR : "#ffffff";
            const textColor = service.accent ? "#ffffff" : "#0a0a0a";
            const mutedColor = service.accent
              ? "rgba(255,255,255,0.8)"
              : "#4a4a4a";

            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg"
                style={{ backgroundColor: bg, color: textColor }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg mb-6" style={{ color: mutedColor }}>
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-mono">↳</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-[45%] p-4 flex items-center justify-center">
                    {SERVICES_IMAGE_CARDS[service.imageSlot]}
                  </div>
                </div>
              </div>
            );
          })}
        </StackedCards>
      </div>
    </section>
  );
};
