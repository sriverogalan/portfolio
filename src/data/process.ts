export type ProcessStep = {
  title: string;
  detail: string;
};

const en: ProcessStep[] = [
  {
    title: "Find the real bottleneck",
    detail:
      "I talk to operators, not just stakeholders. The limit is usually a workflow, a data gap or a fragile integration.",
  },
  {
    title: "Design the smallest system that holds",
    detail:
      "I keep clear boundaries and room to grow. DDD when the domain needs it. A clean CRUD when it does not.",
  },
  {
    title: "Ship something usable early",
    detail:
      "Production is my feedback loop. I cut scope, put a real surface in front of users, then harden what they use.",
  },
  {
    title: "Measure and leave it cleaner",
    detail:
      "I track the outcome that justified the build, fix the sharp edges and leave the codebase easier to navigate.",
  },
];

const es: ProcessStep[] = [
  {
    title: "Encontrar el cuello de botella",
    detail:
      "Hablo con quien opera el día a día, no solo con responsables. El límite suele ser un flujo, datos o una integración frágil.",
  },
  {
    title: "Diseñar lo mínimo que aguante",
    detail:
      "Mantengo límites claros y margen para crecer. DDD cuando el dominio lo pide. Un CRUD limpio cuando no.",
  },
  {
    title: "Lanzar algo usable pronto",
    detail:
      "Producción es mi feedback. Recorto alcance, pongo una superficie real delante de usuarios y endurezco lo que usan.",
  },
  {
    title: "Medir y dejarlo más limpio",
    detail:
      "Sigo el resultado que justificó el proyecto, limpio las aristas y dejo el código más fácil de navegar.",
  },
];

export function getProcessSteps(lang: string = "en"): ProcessStep[] {
  return lang === "es" ? es : en;
}
