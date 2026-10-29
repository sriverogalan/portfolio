export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectCaseStudy = {
  problem: string;
  approach: string;
  outcome: string;
};

export type Project = {
  title: string;
  slug: string;
  /** One concise line shown on the card. */
  shortDescription: string;
  /** Optional longer detail. */
  description?: string;
  /** Mini case study beats for featured work. */
  caseStudy?: ProjectCaseStudy;
  role: string;
  year?: string;
  company?: string;
  technologies: string[];
  /** Headline outcome, e.g. "+80% new customers". */
  impact?: string;
  links?: ProjectLink[];
  /** Image path under /public, e.g. /assets/work/formulacsf.png */
  image?: string;
  /** How the card renders its visual. */
  visual: "screenshot" | "abstract" | "icon";
  featured?: boolean;
};

const en: Project[] = [
  {
    title: "Better Screenshoot",
    slug: "better-screenshoot",
    shortDescription:
      "Native macOS screenshot app with annotation editor, capture history and global shortcuts.",
    description:
      "Indie product built end to end with Tauri 2 and a Rust capture engine. Lives in the menu bar, annotates on capture, and ships via Homebrew plus a Raycast extension.",
    caseStudy: {
      problem:
        "macOS capture tools either feel dated or lock basics like annotate, history and remappable shortcuts behind a subscription.",
      approach:
        "Built a menu-bar app with Tauri 2 and Vue, a Rust capture core, SQLite history and open distribution via Homebrew and Raycast.",
      outcome:
        "A shipped indie product you can install today. Capture, annotate and share without leaving the flow.",
    },
    role: "Creator",
    year: "2026",
    technologies: ["Tauri 2", "Vue 3", "Rust", "TypeScript", "SQLite"],
    impact: "Shipped on Homebrew & Raycast",
    links: [
      { label: "GitHub", url: "https://github.com/sriverogalan/better-screenshoot" },
      { label: "Raycast", url: "https://www.raycast.com/sriverogalan/better-screenshoot" },
    ],
    image: "/assets/work/better-screenshoot-icon.png",
    visual: "icon",
    featured: true,
  },
  {
    title: "FormulaCSF",
    slug: "formulacsf",
    shortDescription: "Online education platform that onboarded 500+ students in under 90 days.",
    caseStudy: {
      problem:
        "A growing education brand needed a production platform fast: content, auth and enrollments without a six-month build.",
      approach:
        "Owned the stack end to end. Spring Boot APIs, Nuxt frontend, Redis sessions and JWT auth tuned for launch speed.",
      outcome: "From zero to 500+ students in under 90 days, with a codebase ready for the next cohort.",
    },
    role: "Product & Software Engineer",
    year: "2025",
    company: "SolveWe",
    technologies: ["Java", "Spring Boot", "Nuxt", "Redis", "JWT"],
    impact: "0 to 500+ students in under 90 days",
    image: "/assets/work/formulacsf.png",
    visual: "screenshot",
    featured: true,
  },
  {
    title: "Bohemi40",
    slug: "bohemi40",
    shortDescription: "Rent-a-car booking and fleet platform that grew the customer base by 80%.",
    caseStudy: {
      problem:
        "Bookings and fleet ops lived in fragmented tools, which meant slow responses and lost demand in peak season.",
      approach:
        "Shipped a Spring Boot and Vue booking platform with fleet visibility, Dockerized delivery and a flow operators could trust.",
      outcome: "80% more new customers in the 12 months after launch.",
    },
    role: "Product & Software Engineer",
    year: "2023",
    company: "SolveWe",
    technologies: ["Java", "Spring Boot", "Vue", "MySQL", "Docker"],
    impact: "+80% new customers in 12 months",
    links: [{ label: "bohemi40rentacar.com", url: "https://www.bohemi40rentacar.com" }],
    image: "/assets/work/bohemi40.png",
    visual: "screenshot",
    featured: true,
  },
  {
    title: "Würth | PPE Platform",
    slug: "wurth-ppe",
    shortDescription:
      "PPE management product built from zero to MVP, replacing a fully manual warehouse-to-field process.",
    description:
      "Co-designed the Java and Spring Boot backend with DDD and Hexagonal Architecture, plus a Vue and Capacitor mobile app on a reusable Atomic Design system. Added digital signatures, real-time delivery traceability and Excel bulk imports.",
    caseStudy: {
      problem:
        "Moving PPE from warehouse to field was fully manual: paper, delays and no reliable delivery traceability.",
      approach:
        "Took it from zero to MVP with DDD and hexagonal Spring Boot, Vue and Capacitor mobile, digital signatures, live traceability and Excel bulk imports.",
      outcome: "60% higher operational efficiency and 40% faster delivery for the product team.",
    },
    role: "Senior Software Engineer",
    year: "2025",
    company: "Next Digital",
    technologies: ["Java 21", "Spring Boot", "DDD", "Vue", "Capacitor"],
    impact: "+60% ops efficiency, +40% delivery speed",
    links: [
      { label: "App Store", url: "https://apps.apple.com/es/app/gesti%C3%B3n-de-epis/id6759715115" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.wurth.gestionepis&hl=es_419" },
    ],
    image: "/assets/work/wurth.png",
    visual: "screenshot",
    featured: true,
  },
  {
    title: "AI Voice Agent",
    slug: "ai-voice-agent",
    shortDescription: "Inbound call automation with an LLM-powered voicebot. Currently in development.",
    role: "Product & Software Engineer",
    year: "2025",
    company: "SolveWe",
    technologies: ["Spring Boot", "Twilio", "LLM API", "REST"],
    impact: "In development",
    visual: "abstract",
    featured: false,
  },
  {
    title: "Construction ERP",
    slug: "construction-erp",
    shortDescription: "Back-office digitization now used by 4 active business clients.",
    role: "Product & Software Engineer",
    year: "2024",
    company: "SolveWe",
    technologies: ["Spring Boot", "JWT", "MySQL", "CI/CD"],
    impact: "4 active business clients",
    visual: "abstract",
    featured: false,
  },
  {
    title: "Blanca Brand Mallorca",
    slug: "blanca-brand",
    shortDescription: "Custom e-commerce for a Mallorca fashion brand, designed and launched end to end.",
    role: "Product & Software Engineer",
    year: "2023",
    company: "SolveWe",
    technologies: ["Spring Boot", "JWT", "REST API", "CI/CD"],
    impact: "Sales within days of launch",
    visual: "abstract",
    featured: false,
  },
];

const es: Project[] = [
  {
    title: "Better Screenshoot",
    slug: "better-screenshoot",
    shortDescription:
      "App nativa de macOS para capturas de pantalla, con editor de anotaciones, historial y atajos globales.",
    description:
      "Producto indie construido de principio a fin con Tauri 2 y un motor de captura en Rust. Vive en la barra de menú, anota al capturar y se distribuye por Homebrew y una extensión de Raycast.",
    caseStudy: {
      problem:
        "Las herramientas de captura en macOS o se sienten anticuadas o bloquean lo básico (anotar, historial y atajos) detrás de una suscripción.",
      approach:
        "App de barra de menú con Tauri 2 y Vue, núcleo de captura en Rust, historial en SQLite y distribución abierta por Homebrew y Raycast.",
      outcome:
        "Un producto indie instalable hoy. Captura, anota y comparte sin romper el flujo.",
    },
    role: "Creador",
    year: "2026",
    technologies: ["Tauri 2", "Vue 3", "Rust", "TypeScript", "SQLite"],
    impact: "Publicado en Homebrew y Raycast",
    links: [
      { label: "GitHub", url: "https://github.com/sriverogalan/better-screenshoot" },
      { label: "Raycast", url: "https://www.raycast.com/sriverogalan/better-screenshoot" },
    ],
    image: "/assets/work/better-screenshoot-icon.png",
    visual: "icon",
    featured: true,
  },
  {
    title: "FormulaCSF",
    slug: "formulacsf",
    shortDescription:
      "Plataforma de educación online que incorporó a más de 500 estudiantes en menos de 90 días.",
    caseStudy: {
      problem:
        "Una marca educativa en crecimiento necesitaba una plataforma en producción con rapidez: contenido, autenticación e inscripciones, sin un desarrollo de seis meses.",
      approach:
        "Stack de punta a punta. APIs Spring Boot, frontend Nuxt, sesiones Redis y autenticación JWT pensados para velocidad de lanzamiento.",
      outcome:
        "De cero a más de 500 estudiantes en menos de 90 días, con una base lista para la siguiente cohorte.",
    },
    role: "Product & Software Engineer",
    year: "2025",
    company: "SolveWe",
    technologies: ["Java", "Spring Boot", "Nuxt", "Redis", "JWT"],
    impact: "0 a 500+ estudiantes en menos de 90 días",
    image: "/assets/work/formulacsf.png",
    visual: "screenshot",
    featured: true,
  },
  {
    title: "Bohemi40",
    slug: "bohemi40",
    shortDescription:
      "Plataforma de reservas y flota para alquiler de coches que aumentó la base de clientes un 80%.",
    caseStudy: {
      problem:
        "Reservas y flota vivían en herramientas fragmentadas, con respuestas lentas y demanda perdida en temporada alta.",
      approach:
        "Plataforma Spring Boot y Vue con visibilidad de flota, entrega con Docker y un flujo en el que los operadores podían confiar.",
      outcome: "80% más clientes nuevos en los 12 meses posteriores al lanzamiento.",
    },
    role: "Product & Software Engineer",
    year: "2023",
    company: "SolveWe",
    technologies: ["Java", "Spring Boot", "Vue", "MySQL", "Docker"],
    impact: "+80% nuevos clientes en 12 meses",
    links: [{ label: "bohemi40rentacar.com", url: "https://www.bohemi40rentacar.com" }],
    image: "/assets/work/bohemi40.png",
    visual: "screenshot",
    featured: true,
  },
  {
    title: "Würth | Plataforma EPIs",
    slug: "wurth-ppe",
    shortDescription:
      "Producto de gestión de EPIs de cero a MVP, sustituyendo un proceso manual de almacén a campo.",
    description:
      "Codiseñé el backend en Java y Spring Boot con DDD y Arquitectura Hexagonal, más una app móvil en Vue y Capacitor sobre un sistema Atomic Design. Añadí firmas digitales, trazabilidad en tiempo real e importaciones masivas en Excel.",
    caseStudy: {
      problem:
        "El flujo de EPIs del almacén al campo era 100% manual: papel, retrasos y sin trazabilidad fiable de entregas.",
      approach:
        "De cero a MVP con Spring Boot DDD y hexagonal, móvil Vue y Capacitor, firmas digitales, trazabilidad en vivo e importaciones Excel.",
      outcome:
        "60% más eficiencia operativa y 40% más velocidad de entrega para el equipo de producto.",
    },
    role: "Senior Software Engineer",
    year: "2025",
    company: "Next Digital",
    technologies: ["Java 21", "Spring Boot", "DDD", "Vue", "Capacitor"],
    impact: "+60% eficiencia operativa, +40% velocidad de entrega",
    links: [
      { label: "App Store", url: "https://apps.apple.com/es/app/gesti%C3%B3n-de-epis/id6759715115" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.wurth.gestionepis&hl=es_419" },
    ],
    image: "/assets/work/wurth.png",
    visual: "screenshot",
    featured: true,
  },
  {
    title: "AI Voice Agent",
    slug: "ai-voice-agent",
    shortDescription:
      "Automatización de llamadas entrantes con un bot de voz impulsado por LLMs. Actualmente en desarrollo.",
    role: "Product & Software Engineer",
    year: "2025",
    company: "SolveWe",
    technologies: ["Spring Boot", "Twilio", "LLM API", "REST"],
    impact: "En desarrollo",
    visual: "abstract",
    featured: false,
  },
  {
    title: "ERP de Construcción",
    slug: "construction-erp",
    shortDescription: "Digitalización de back-office en uso por 4 clientes empresariales activos.",
    role: "Product & Software Engineer",
    year: "2024",
    company: "SolveWe",
    technologies: ["Spring Boot", "JWT", "MySQL", "CI/CD"],
    impact: "4 clientes empresariales",
    visual: "abstract",
    featured: false,
  },
  {
    title: "Blanca Brand Mallorca",
    slug: "blanca-brand",
    shortDescription:
      "E-commerce a medida para una marca de moda mallorquina, diseñado y lanzado de principio a fin.",
    role: "Product & Software Engineer",
    year: "2023",
    company: "SolveWe",
    technologies: ["Spring Boot", "JWT", "REST API", "CI/CD"],
    impact: "Ventas a los pocos días del lanzamiento",
    visual: "abstract",
    featured: false,
  },
];

export function getProjects(lang: string = "en") {
  const list = lang === "es" ? es : en;
  return {
    featuredProjects: list.filter((project) => project.featured),
    otherProjects: list.filter((project) => !project.featured),
  };
}
