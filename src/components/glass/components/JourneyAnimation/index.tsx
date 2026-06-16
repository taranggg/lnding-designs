import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./styles.module.css";
import { DotPattern } from "../DotPattern";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export interface JourneyCardProps {
  backThemeClass: string;
  children: React.ReactNode;
}

interface JourneyAnimationProps {
  title: React.ReactNode;
  description: React.ReactNode;
  backgroundImageUrl: string;
  cards: [JourneyCardProps, JourneyCardProps, JourneyCardProps];
}

const JourneyAnimation: React.FC<JourneyAnimationProps> = ({
  title,
  description,
  backgroundImageUrl,
  cards,
}) => {
  const container = useRef<HTMLDivElement>(null);

  // Shared, app-wide smooth scroll (single Lenis instance across all sections).
  useSmoothScroll();

  useGSAP(
    () => {
      const headerContent = gsap.utils.selector(container)(
        `.${styles.headerContent}`,
      )[0];
      const cardContainer = gsap.utils.selector(container)(
        `.${styles.cardContainer}`,
      )[0];

      let isGapAnimationCompleted = false;
      let isFlipAnimationCompleted = false;

      const mm = gsap.matchMedia();

      mm.add("(max-width: 999px)", () => {
        gsap.set(
          [
            `.${styles.card}`,
            `.${styles.cardContainer}`,
            `.${styles.headerContent}`,
          ],
          { clearProps: "all" },
        );
      });

      mm.add("(min-width: 1000px)", () => {
        ScrollTrigger.create({
          trigger: `.${styles.sticky}`,
          start: "top top",
          end: `+=${window.innerHeight * 2.5}px`, // Total scroll distance remains smooth
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // 1. Header Intro (0.1 to 0.25)
            if (progress >= 0.1 && progress <= 0.25) {
              const headerProgress = gsap.utils.mapRange(
                0.1,
                0.25,
                0,
                1,
                progress,
              );
              const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
              const opacityValue = gsap.utils.mapRange(
                0,
                1,
                0,
                1,
                headerProgress,
              );
              gsap.set(headerContent, { y: yValue, opacity: opacityValue });
            } else if (progress < 0.1) {
              gsap.set(headerContent, { y: 40, opacity: 0 });
            } else if (progress > 0.25) {
              gsap.set(headerContent, { y: 0, opacity: 1 });
            }

            // 2. Container Width Shrink (0 to 0.25)
            if (progress <= 0.25) {
              const widthPercentage = gsap.utils.mapRange(
                0,
                0.25,
                85,
                80,
                progress,
              );
              gsap.set(cardContainer, { width: `${widthPercentage}%` });
            } else {
              gsap.set(cardContainer, { width: "80%" });
            }

            // 3. The Split / Tear (Moved up to 0.30)
            if (progress >= 0.3 && !isGapAnimationCompleted) {
              gsap.to(cardContainer, {
                gap: "20px",
                duration: 0.5,
                ease: "power3.out",
              });
              gsap.to(
                [`.${styles.card1}`, `.${styles.card2}`, `.${styles.card3}`],
                { borderRadius: "20px", duration: 0.5, ease: "power3.out" },
              );
              isGapAnimationCompleted = true;
            } else if (progress < 0.3 && isGapAnimationCompleted) {
              gsap.to(cardContainer, {
                gap: "0px",
                duration: 0.5,
                ease: "power3.out",
              });
              gsap.to(`.${styles.card1}`, {
                borderRadius: "20px 0 0 20px",
                duration: 0.5,
                ease: "power3.out",
              });
              gsap.to(`.${styles.card2}`, {
                borderRadius: "0px",
                duration: 0.5,
                ease: "power3.out",
              });
              gsap.to(`.${styles.card3}`, {
                borderRadius: "0 20px 20px 0",
                duration: 0.5,
                ease: "power3.out",
              });
              isGapAnimationCompleted = false;
            }

            // 4. The 3D Flip (Moved up from 0.70 to 0.45!)
            if (progress >= 0.45 && !isFlipAnimationCompleted) {
              gsap.to(`.${styles.card}`, {
                rotationY: 180,
                duration: 0.75,
                ease: "power3.inOut",
                stagger: 0.1,
              });
              gsap.to([`.${styles.card1}`, `.${styles.card3}`], {
                y: 30,
                rotationZ: (i) => [-15, 15][i],
                duration: 0.75,
                ease: "power3.inOut",
              });
              isFlipAnimationCompleted = true;
            } else if (progress < 0.45 && isFlipAnimationCompleted) {
              gsap.to(`.${styles.card}`, {
                rotationY: 0,
                duration: 0.75,
                ease: "power3.inOut",
                stagger: 0.1,
              });
              gsap.to([`.${styles.card1}`, `.${styles.card3}`], {
                y: 0,
                rotationZ: 0,
                duration: 0.75,
                ease: "power3.inOut",
              });
              isFlipAnimationCompleted = false;
            }
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section className={styles.stickySection} ref={container}>
      <DotPattern className="absolute inset-0" />
      <div className={styles.sticky} style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.stickyHeader}>
          <div className={styles.headerContent}>
            <h1>{title}</h1>
            <div className={styles.descriptionText}>{description}</div>
          </div>
        </div>

        <div className={styles.cardContainer}>
          {cards.map((card, index) => {
            const cardNumClass = styles[`card${index + 1}`];
            return (
              <div key={index} className={`${styles.card} ${cardNumClass}`}>
                <div
                  className={`${styles.cardFace} ${styles.cardFront}`}
                  style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                ></div>
                <div
                  className={`${styles.cardFace} ${styles.cardBack} ${card.backThemeClass}`}
                >
                  {card.children}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyAnimation;
