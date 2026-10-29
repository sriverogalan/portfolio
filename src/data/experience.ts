export type Experience = {
  company: string;
  role: string;
  /** e.g. "Jun 2024 - Oct 2025" */
  period: string;
  location?: string;
  /** One line of impact. */
  summary: string;
  /** Short scannable areas / highlights. */
  areas: string[];
  current?: boolean;
};

const en: Experience[] = [
  {
    company: "Next Digital",
    role: "Senior Software Engineer",
    period: "Oct 2025 - Present",
    location: "Remote",
    summary:
      "Built Würth España's PPE platform from zero to MVP and migrated Acciona Flights to Java 21 in under two weeks.",
    areas: ["Java 21", "Spring Boot", "DDD / Hexagonal", "Vue + Capacitor"],
    current: true,
  },
  {
    company: "SolveWe (Freelance)",
    role: "Product Engineer",
    period: "2022 - Present",
    location: "Mallorca",
    summary:
      "End-to-end product ownership for clients in education, booking, ERP and e-commerce.",
    areas: ["Discovery to delivery", "Spring Boot", "Redis", "Docker + CI/CD"],
    current: true,
  },
  {
    company: "Air Europa",
    role: "Senior Software Engineer",
    period: "Jun 2024 - Oct 2025",
    location: "Remote",
    summary:
      "Led the front-end rebuild of a 15-module internal ERP and shipped a unified component library.",
    areas: ["Vue", "Vite migration", "Node.js", "UI systems"],
  },
  {
    company: "Límit Technologies",
    role: "Software Engineer",
    period: "Mar 2023 - Jun 2024",
    location: "Hybrid",
    summary:
      "Migrated a legacy ERP from Oracle Forms to React/TypeScript and Spring Boot, and optimized critical PL/SQL.",
    areas: ["React / TypeScript", "Spring Boot", "PL/SQL", "Mentoring"],
  },
  {
    company: "ClickToTravel",
    role: "Frontend Developer",
    period: "Jun 2020 - Dec 2021",
    location: "Hybrid",
    summary:
      "Built hotel website management tools in Vue used by more than 10 hotel chains.",
    areas: ["Vue.js", "Reusable components", "Dynamic theming"],
  },
];

const es: Experience[] = [
  {
    company: "Next Digital",
    role: "Senior Software Engineer",
    period: "Oct 2025 - Presente",
    location: "Remoto",
    summary:
      "Construí la plataforma de EPIs de Würth España de cero a MVP y migré Acciona Flights a Java 21 en menos de dos semanas.",
    areas: ["Java 21", "Spring Boot", "DDD / Hexagonal", "Vue + Capacitor"],
    current: true,
  },
  {
    company: "SolveWe (Freelance)",
    role: "Product Engineer",
    period: "2022 - Presente",
    location: "Mallorca",
    summary:
      "Propiedad de producto de principio a fin para clientes en educación, reservas, ERP y comercio electrónico.",
    areas: ["Del discovery a la entrega", "Spring Boot", "Redis", "Docker + CI/CD"],
    current: true,
  },
  {
    company: "Air Europa",
    role: "Senior Software Engineer",
    period: "Jun 2024 - Oct 2025",
    location: "Remoto",
    summary:
      "Lideré la reescritura del frontend de un ERP interno de 15 módulos y lancé una librería de componentes unificada.",
    areas: ["Vue", "Migración a Vite", "Node.js", "Sistemas de UI"],
  },
  {
    company: "Límit Technologies",
    role: "Software Engineer",
    period: "Mar 2023 - Jun 2024",
    location: "Híbrido",
    summary:
      "Migré un ERP legado de Oracle Forms a React/TypeScript y Spring Boot, y optimicé PL/SQL crítico.",
    areas: ["React / TypeScript", "Spring Boot", "PL/SQL", "Mentoring"],
  },
  {
    company: "ClickToTravel",
    role: "Frontend Developer",
    period: "Jun 2020 - Dic 2021",
    location: "Híbrido",
    summary:
      "Construí herramientas de gestión web para hoteles en Vue, usadas por más de 10 cadenas hoteleras.",
    areas: ["Vue.js", "Componentes reutilizables", "Temas dinámicos"],
  },
];

export function getExperience(lang: string = "en"): Experience[] {
  return lang === "es" ? es : en;
}
