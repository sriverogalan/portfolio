export type SkillGroup = {
  area: string;
  caption: string;
  skills: string[];
};

const en: SkillGroup[] = [
  {
    area: "Backend",
    caption: "Scalable services and clean APIs.",
    skills: ["Java 8-21", "Spring Boot", "Spring Security", "JPA", "Node.js", "NestJS", "REST / OpenAPI", "Python / FastAPI"],
  },
  {
    area: "Frontend",
    caption: "Product UI with reusable systems.",
    skills: ["Vue", "Nuxt", "React", "TypeScript", "Tailwind CSS", "Component libraries"],
  },
  {
    area: "Architecture",
    caption: "Built to last and scale.",
    skills: ["DDD", "Hexagonal", "Clean Architecture", "Microservices", "SOLID"],
  },
  {
    area: "Data & Performance",
    caption: "Fast, measured and optimized.",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "PL/SQL", "SQL optimization"],
  },
  {
    area: "DevOps & Tooling",
    caption: "Reliable, repeatable delivery.",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Jenkins", "AWS", "GCP", "Kubernetes (basics)"],
  },
  {
    area: "Quality & Security",
    caption: "Tested and secure by default.",
    skills: ["TDD", "JUnit", "Mockito", "Clean Code", "OAuth2 / JWT"],
  },
  {
    area: "AI & Automation",
    caption: "AI-assisted engineering, every day.",
    skills: ["Claude Code", "Codex", "GitHub Copilot", "Cursor", "LLM API integration"],
  },
];

const es: SkillGroup[] = [
  {
    area: "Backend",
    caption: "Servicios escalables y APIs limpias.",
    skills: ["Java 8-21", "Spring Boot", "Spring Security", "JPA", "Node.js", "NestJS", "REST / OpenAPI", "Python / FastAPI"],
  },
  {
    area: "Frontend",
    caption: "UI de producto con sistemas reutilizables.",
    skills: ["Vue", "Nuxt", "React", "TypeScript", "Tailwind CSS", "Librerías de componentes"],
  },
  {
    area: "Arquitectura",
    caption: "Pensada para durar y escalar.",
    skills: ["DDD", "Hexagonal", "Clean Architecture", "Microservices", "SOLID"],
  },
  {
    area: "Datos y rendimiento",
    caption: "Rápido, medido y optimizado.",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "PL/SQL", "Optimización SQL"],
  },
  {
    area: "DevOps y herramientas",
    caption: "Entregas fiables y repetibles.",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Jenkins", "AWS", "GCP", "Kubernetes (básico)"],
  },
  {
    area: "Calidad y seguridad",
    caption: "Probado y seguro por defecto.",
    skills: ["TDD", "JUnit", "Mockito", "Clean Code", "OAuth2 / JWT"],
  },
  {
    area: "IA y automatización",
    caption: "Ingeniería asistida por IA, cada día.",
    skills: ["Claude Code", "Codex", "GitHub Copilot", "Cursor", "Integración de APIs LLM"],
  },
];

export function getSkillGroups(lang: string = "en"): SkillGroup[] {
  return lang === "es" ? es : en;
}
