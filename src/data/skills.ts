export type SkillGroup = {
  area: string;
  caption: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    area: "Backend",
    caption: "Scalable services and clean APIs.",
    skills: ["Java 8–21", "Spring Boot", "Spring Security", "JPA", "Node.js", "NestJS", "REST / OpenAPI", "Python / FastAPI"],
  },
  {
    area: "Frontend",
    caption: "Product UI with reusable systems.",
    skills: ["Vue", "Nuxt", "React", "TypeScript", "Tailwind CSS", "Component libraries"],
  },
  {
    area: "Architecture",
    caption: "Designed to last and scale.",
    skills: ["DDD", "Hexagonal", "Clean Architecture", "Microservices", "SOLID"],
  },
  {
    area: "Data & Performance",
    caption: "Fast, measured, optimized.",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "PL/SQL", "SQL optimization"],
  },
  {
    area: "DevOps & Tooling",
    caption: "Ship reliably, repeatably.",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Jenkins", "AWS", "GCP", "Kubernetes (basics)"],
  },
  {
    area: "Quality & Security",
    caption: "Tested and secure by default.",
    skills: ["TDD", "JUnit", "Mockito", "Clean Code", "OAuth2 / JWT"],
  },
  {
    area: "AI & Automation",
    caption: "AI-assisted engineering, daily.",
    skills: ["Claude Code", "Codex", "GitHub Copilot", "Cursor", "LLM API integration"],
  },
];
