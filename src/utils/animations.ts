import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EASE = "power3.out";

/** Scroll-triggered reveals for any [data-reveal] element. */
function initReveals(): void {
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    onEnter: (elements) =>
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: EASE,
        stagger: 0.08,
        overwrite: true,
      }),
    onLeaveBack: (elements) =>
      gsap.to(elements, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        ease: EASE,
        stagger: 0.05,
        overwrite: true,
      }),
  });
}

/** Staggered word reveal for split headings outside the hero. */
function initSplitHeadings(): void {
  const headings = gsap.utils.toArray<HTMLElement>("[data-split-heading]");
  headings.forEach((heading) => {
    if (heading.closest("#top")) return; // hero handled by the intro timeline
    const words = heading.querySelectorAll<HTMLElement>("[data-split-word]");
    ScrollTrigger.create({
      trigger: heading,
      start: "top 85%",
      onEnter: () => {
        gsap.to(words, {
          y: 0,
          duration: 0.9,
          ease: EASE,
          stagger: 0.05,
          overwrite: true,
        });
      },
      onLeaveBack: () => {
        gsap.to(words, {
          y: "110%",
          duration: 0.5,
          ease: EASE,
          stagger: 0.03,
          overwrite: true,
        });
      },
    });
  });
}

/** Hero intro timeline played on load. */
function initHero(): void {
  const heroWords = gsap.utils.toArray<HTMLElement>("#top [data-split-word]");
  const heroItems = gsap.utils.toArray<HTMLElement>("#top [data-hero-item]");

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (heroWords.length) {
    tl.to(heroWords, { y: 0, duration: 1, stagger: 0.06 }, 0);
  }
  if (heroItems.length) {
    tl.to(heroItems, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0.25);
  }
}

/** Count-up numbers for [data-count] elements. */
function initCounters(): void {
  const counters = gsap.utils.toArray<HTMLElement>("[data-count]");
  counters.forEach((el) => {
    const to = Number(el.dataset.countTo ?? "0");
    const prefix = el.dataset.countPrefix ?? "";
    const suffix = el.dataset.countSuffix ?? "";
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => {
        const obj = { value: 0 };
        gsap.to(obj, {
          value: to,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
          },
        });
      },
      onLeaveBack: () => {
        el.textContent = `${prefix}0${suffix}`;
      },
    });
  });
}

/** Subtle parallax on flagged images (desktop only). */
function initParallax(): void {
  if (!window.matchMedia("(min-width: 768px)").matches) return;
  const targets = gsap.utils.toArray<HTMLElement>("[data-parallax-target]");
  targets.forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: -4 },
      {
        yPercent: 4,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}

/** Subtle page background shift driven by section markers. */
function initSectionBackgrounds(): void {
  const sections = gsap.utils.toArray<HTMLElement>("[data-section-bg]");
  if (!sections.length) return;

  const tones: Record<string, string> = {
    default: "var(--color-bg)",
    soft: "var(--color-surface-soft)",
    surface: "var(--color-surface)",
  };

  sections.forEach((section) => {
    const tone = section.dataset.sectionBg ?? "default";
    const color = tones[tone] ?? tones.default;
    ScrollTrigger.create({
      trigger: section,
      start: "top 55%",
      end: "bottom 45%",
      onEnter: () => gsap.to("body", { backgroundColor: color, duration: 0.6, ease: "power1.out" }),
      onEnterBack: () => gsap.to("body", { backgroundColor: color, duration: 0.6, ease: "power1.out" }),
    });
  });
}

/** Magnetic effect for [data-magnetic] wrappers (fine pointers only). */
function initMagnetic(): void {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const wrappers = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
  wrappers.forEach((wrap) => {
    const target = wrap.querySelector<HTMLElement>("[data-magnetic-target]");
    if (!target) return;
    const xTo = gsap.quickTo(target, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(target, "y", { duration: 0.5, ease: "power3" });

    wrap.addEventListener("mousemove", (event) => {
      const rect = wrap.getBoundingClientRect();
      const relX = event.clientX - (rect.left + rect.width / 2);
      const relY = event.clientY - (rect.top + rect.height / 2);
      xTo(relX * 0.35);
      yTo(relY * 0.35);
    });
    wrap.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/**
 * Header background on scroll + scroll-spy nav. These involve no movement,
 * so they run regardless of motion preference.
 */
export function initInterface(): void {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
  if (header) {
    const update = () => {
      const scrollY = window.scrollY;
      header.classList.toggle("is-scrolled", scrollY > 4);
      const ratioVal = Math.min(1, scrollY / 64);
      header.style.setProperty("--header-scroll-progress", ratioVal.toFixed(3));
      
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? scrollY / max : 0;
        progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
  }

  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  const sectionByHref = new Map<string, HTMLElement>();
  for (const link of navLinks) {
    const href = link.getAttribute("href");
    if (!href || sectionByHref.has(href)) continue;
    const section = document.querySelector<HTMLElement>(href);
    if (section) sectionByHref.set(href, section);
  }

  const setActiveNav = (id: string) => {
    navLinks.forEach((link) => {
      link.toggleAttribute("data-active", link.getAttribute("href") === id);
    });
  };

  if (sectionByHref.size) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveNav(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionByHref.forEach((section) => observer.observe(section));

    // At the top, highlight the logo, not Work.
    if (window.scrollY < 8) setActiveNav("#top");
  }
}

/** Initializes all motion-dependent animations. Returns a cleanup function. */
export function initAnimations(): () => void {
  gsap.registerPlugin(ScrollTrigger);

  initHero();
  initReveals();
  initSplitHeadings();
  initCounters();
  initParallax();
  initSectionBackgrounds();
  initMagnetic();

  ScrollTrigger.refresh();

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
