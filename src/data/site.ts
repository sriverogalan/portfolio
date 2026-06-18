export type SiteMeta = {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  url: string;
  description: string;
  ogImage: string;
  email: string;
  location: string;
  locale: "en";
  about: string[];
};

export const site: SiteMeta = {
  name: "Sergi Rivero Galán",
  shortName: "Sergi Rivero",
  role: "Senior Software Engineer",
  tagline: "I build products that ship, from architecture to production.",
  url: "https://sergirivero.dev",
  description:
    "Sergi Rivero | Senior Software Engineer specialized in Java, Spring Boot and product-minded full-stack delivery. 6+ years turning business bottlenecks into products in production.",
  ogImage: "/og.png",
  email: "sriverogalan@gmail.com",
  location: "Mallorca, Spain",
  locale: "en",
  about: [
    "I start from the problem, not the framework: understand the business bottleneck, design a solid solution, and ship software that lives in production.",
    "I like building products end to end, owning architecture, performance and delivery, and leaving every codebase cleaner than I found it.",
    "I work well with small teams that care about craft, real impact and moving fast without breaking quality.",
  ],
};
