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
  locale: string;
  about: string[];
  heroText: string;
};

const en: SiteMeta = {
  name: "Sergi Rivero Galán",
  shortName: "Sergi Rivero",
  role: "Senior Software Engineer",
  tagline: "I turn business bottlenecks into products that ship.",
  url: "https://sergirivero.dev",
  description:
    "Sergi Rivero, Senior Software Engineer focused on Java, Spring Boot and product-minded full-stack delivery. 6+ years turning business bottlenecks into products in production.",
  ogImage: "/og.png",
  email: "sriverogalan@gmail.com",
  location: "Mallorca, Spain",
  locale: "en",
  about: [
    "I start from the problem, not the framework. Map the bottleneck, design the smallest architecture that holds, and ship software that survives contact with real users.",
    "I own the path end to end: architecture, performance and delivery. I also ship my own products, like Better Screenshoot on macOS.",
  ],
  heroText:
    "6+ years of Java and Spring Boot at the core, product-minded full-stack delivery, and indie apps of my own.",
};

const es: SiteMeta = {
  name: "Sergi Rivero Galán",
  shortName: "Sergi Rivero",
  role: "Senior Software Engineer",
  tagline: "Convierto cuellos de botella de negocio en productos que llegan a producción.",
  url: "https://sergirivero.dev",
  description:
    "Sergi Rivero, Senior Software Engineer especializado en Java, Spring Boot y desarrollo full-stack orientado a producto. Más de 6 años convirtiendo cuellos de botella de negocio en productos en producción.",
  ogImage: "/og.png",
  email: "sriverogalan@gmail.com",
  location: "Mallorca, España",
  locale: "es",
  about: [
    "Empiezo por el problema, no por el framework. Mapeo el cuello de botella, diseño la arquitectura más pequeña que aguante y entrego software que aguanta el contacto con usuarios reales.",
    "Asumo el camino de principio a fin: arquitectura, rendimiento y entrega. También lanzo productos propios, como Better Screenshoot en macOS.",
  ],
  heroText:
    "Más de 6 años con Java y Spring Boot como base, full-stack orientado a producto y apps indie propias.",
};

export function getSite(lang: string = "en"): SiteMeta {
  return lang === "es" ? es : en;
}
