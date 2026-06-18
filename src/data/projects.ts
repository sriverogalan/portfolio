export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  slug: string;
  /** One concise line shown on the card. */
  shortDescription: string;
  /** Optional longer detail. */
  description?: string;
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
  visual: "screenshot" | "abstract";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "FormulaCSF",
    slug: "formulacsf",
    shortDescription: "Online education platform that onboarded 500+ students in under 90 days.",
    role: "Product & Software Engineer",
    year: "2023",
    company: "SolveWe",
    technologies: ["Java", "Spring Boot", "Nuxt", "Redis", "JWT"],
    impact: "0 → 500+ students in <90 days",
    links: [{ label: "formulacsf.com", url: "https://formulacsf.com" }],
    image: "/assets/work/formulacsf.png",
    visual: "screenshot",
    featured: true,
  },
  {
    title: "Bohemi40",
    slug: "bohemi40",
    shortDescription: "Rent-a-car booking and fleet platform that grew the customer base by 80%.",
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
      "PPE management product built 0 → MVP, digitizing a fully manual warehouse-to-field process.",
    description:
      "Co-designed the Java/Spring Boot backend with DDD and Hexagonal Architecture plus a Vue + Capacitor mobile app on a reusable Atomic Design system. Added digital signatures, real-time delivery traceability and Excel bulk imports.",
    role: "Senior Software Engineer",
    year: "2025",
    company: "Next Digital",
    technologies: ["Java 21", "Spring Boot", "DDD", "Vue", "Capacitor"],
    impact: "+60% operational efficiency · +40% dev speed",
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
      "Inbound call automation with an LLM-powered voicebot. Currently in development.",
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
    shortDescription: "Back-office digitization for 4 active business clients.",
    role: "Product & Software Engineer",
    year: "2024",
    company: "SolveWe",
    technologies: ["Spring Boot", "JWT", "MySQL", "CI/CD"],
    impact: "4 active business clients",
    visual: "abstract",
    featured: false,
  },
  {
    title: "Blanca Brand",
    slug: "blanca-brand",
    shortDescription: "Custom e-commerce product launched end to end.",
    role: "Product & Software Engineer",
    year: "2023",
    company: "SolveWe",
    technologies: ["Spring Boot", "JWT", "REST API", "CI/CD"],
    impact: "Sales within days of launch",
    visual: "abstract",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
