import React, { useLayoutEffect, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

interface StackedCardsProps {
  children: React.ReactNode;
  peekHeight?: number;
  catchSpeed?: number;
  lerpEase?: number;
}

const getOffsetTop = (el: HTMLElement): number => {
  let top = 0;
  let cur: HTMLElement | null = el;
  while (cur) {
    top += cur.offsetTop;
    cur = cur.offsetParent as HTMLElement | null;
  }
  return top;
};

export const StackedCards: React.FC<StackedCardsProps> = ({
  children,
  peekHeight = 111,
  catchSpeed = 6,
  lerpEase = 0.08,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const animDataRef = useRef<{
    n: number;
    heights: number[];
    stepDist: number[];
    totalY: number[];
    scrollWin: number[];
    catchStart: number[];
  } | null>(null);
  const lerpEaseRef = useRef(lerpEase);
  lerpEaseRef.current = lerpEase;

  const recalc = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    cardsRef.current = cards;
    const n = cards.length;
    if (n === 0) return;

    const heights = cards.map((card) => card.offsetHeight);
    const offsets = cards.map((card) => getOffsetTop(card));

    const stepDist: number[] = [];
    for (let i = 1; i < n; i++) {
      stepDist[i] = heights[i - 1] - peekHeight;
    }

    const totalY: number[] = [0];
    for (let i = 1; i < n; i++) {
      totalY[i] = totalY[i - 1] - stepDist[i];
    }

    const scrollWin: number[] = [];
    const catchStart: number[] = [];
    for (let i = 1; i < n; i++) {
      scrollWin[i] = stepDist[i] / (catchSpeed - 1);
      catchStart[i] = offsets[i - 1] + heights[i - 1] - window.innerHeight;
    }

    animDataRef.current = {
      n,
      heights,
      stepDist,
      totalY,
      scrollWin,
      catchStart,
    };

    cards.forEach((card) => gsap.set(card, { y: 0 }));
  }, [peekHeight, catchSpeed]);

  const childrenCount = React.Children.count(children);

  useLayoutEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc, childrenCount]);

  useEffect(() => {
    const tick = () => {
      const data = animDataRef.current;
      if (!data) return;
      const { n, stepDist, totalY, scrollWin, catchStart } = data;
      const scrollY = window.scrollY;
      const ease = lerpEaseRef.current;

      // Find the active card (the one currently doing the catch‑up)
      let active = n;
      for (let i = 1; i < n; i++) {
        if (scrollY < catchStart[i] + scrollWin[i]) {
          active = i;
          break;
        }
      }

      // Compute the shared stack offset that applies to all cards >= active
      let offset = 0;
      for (let k = 1; k < active; k++) {
        offset += stepDist[k];
      }
      if (active < n) {
        const progress = Math.min(
          Math.max((scrollY - catchStart[active]) / scrollWin[active], 0),
          1,
        );
        offset += progress * stepDist[active];
      }
      const stackOffset = -offset;

      // Set target Y for every card
      const targets: number[] = [];
      for (let i = 0; i < n; i++) {
        if (i < active) {
          // Already stacked: fixed at its own final position
          targets[i] = totalY[i];
        } else {
          // Follow the active card (or final stack offset when all stacked)
          targets[i] = stackOffset;
        }
      }

      // Apply with lerp for smooth motion
      const cards = cardsRef.current;
      for (let i = 0; i < n; i++) {
        const cur = gsap.getProperty(cards[i], "y") as number;
        const diff = targets[i] - cur;
        if (Math.abs(diff) < 0.05) {
          gsap.set(cards[i], { y: targets[i] });
        } else {
          gsap.set(cards[i], { y: cur + diff * ease });
        }
      }
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
