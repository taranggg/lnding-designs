import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Single, app-wide Lenis smooth-scroll instance.
 *
 * Lenis hijacks the window scroll and interpolates it frame-by-frame, so the
 * raw stepped wheel/trackpad input becomes a continuous glide. GSAP scrub
 * animations read that smoothed scroll position, which is what makes the
 * fold-to-fold transitions feel buttery instead of "laggy".
 *
 * It is reference-counted so multiple sections can opt in without ever creating
 * a second window-level instance (two Lenis instances would fight over scroll).
 * The single instance is torn down only when the last consumer unmounts.
 */
let lenis: Lenis | null = null;
let refCount = 0;
let tickerCb: ((time: number) => void) | null = null;

export function useSmoothScroll() {
  useEffect(() => {
    refCount += 1;

    if (!lenis) {
      lenis = new Lenis({
        // lerp drives wheel smoothing: lower = smoother/floatier. 0.1 is the
        // Lenis default; 0.08 adds a touch more glide for the fold transitions.
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: true,
        syncTouchLerp: 0.08,
        touchMultiplier: 1.5,
      });

      // Keep ScrollTrigger in lockstep with Lenis' interpolated scroll position.
      lenis.on("scroll", ScrollTrigger.update);

      tickerCb = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCb);
      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      refCount -= 1;
      if (refCount === 0 && lenis) {
        if (tickerCb) gsap.ticker.remove(tickerCb);
        lenis.destroy();
        lenis = null;
        tickerCb = null;
      }
    };
  }, []);

  return lenis;
}
