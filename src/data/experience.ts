export type Experience = {
  company: string;
  role: string;
  /** e.g. "Jun 2024 – Oct 2025" */
  period: string;
  location?: string;
  /** One line of impact. */
  summary: string;
  /** Short scannable areas / highlights. */
  areas: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Next Digital",
    role: "Senior Software Engineer",
    period: "Oct 2025 – Present",
    location: "Remote",
    summary:
      "Built Würth España's PPE platform from 0 to MVP and migrated Acciona Flights to Java 21 in under two weeks.",
    areas: ["Java 21", "Spring Boot", "DDD / Hexagonal", "Vue + Capacitor"],
    current: true,
  },
  {
    company: "SolveWe (Freelance)",
    role: "Product Engineer",
    period: "2022 – Present",
    location: "Mallorca",
    summary:
      "End-to-end product ownership for clients across education, booking, ERP and e-commerce.",
    areas: ["Discovery → delivery", "Spring Boot", "Redis", "Docker + CI/CD"],
    current: true,
  },
  {
    company: "Air Europa",
    role: "Senior Software Engineer",
    period: "Jun 2024 – Oct 2025",
    location: "Remote",
    summary:
      "Led the front-end rebuild of a 15-module internal ERP and shipped a unified component library.",
    areas: ["Vue", "Vite migration", "Node.js", "UI systems"],
  },
  {
    company: "Límit Technologies",
    role: "Software Engineer",
    period: "Mar 2023 – Jun 2024",
    location: "Hybrid",
    summary:
      "Migrated a legacy ERP from Oracle Forms to React/TypeScript + Spring Boot and optimized critical PL/SQL.",
    areas: ["React / TypeScript", "Spring Boot", "PL/SQL", "Mentoring"],
  },
  {
    company: "ClickToTravel",
    role: "Frontend Developer",
    period: "Jun 2020 – Dec 2021",
    location: "Hybrid",
    summary:
      "Built hotel website management tools in Vue, enabling 10+ hotel chains to run their web presence.",
    areas: ["Vue.js", "Reusable components", "Dynamic theming"],
  },
];
