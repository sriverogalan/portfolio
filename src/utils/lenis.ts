import Lenis from "lenis";

/**
 * Creates a Lenis smooth-scroll instance.
 * The caller is responsible for wiring it to GSAP's ticker and ScrollTrigger.
 */
export function initSmoothScroll(): Lenis {
  return new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });
}
