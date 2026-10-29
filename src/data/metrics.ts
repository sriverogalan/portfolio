export type Metric = {
  /** Numeric value used for the count-up animation. */
  value: number;
  /** Prefix shown before the number, e.g. "+" or "-" */
  prefix?: string;
  /** Suffix shown after the number, e.g. "%". */
  suffix?: string;
  label: string;
};

const en: Metric[] = [
  { prefix: "-", value: 95, suffix: "%", label: "Frontend load times" },
  { prefix: "+", value: 80, suffix: "%", label: "Dev velocity on a 5-person team" },
  { prefix: "-", value: 40, suffix: "%", label: "Database response time" },
  { prefix: "+", value: 60, suffix: "%", label: "Operational efficiency" },
];

const es: Metric[] = [
  { prefix: "-", value: 95, suffix: "%", label: "Tiempos de carga del frontend" },
  { prefix: "+", value: 80, suffix: "%", label: "Velocidad de desarrollo en un equipo de 5" },
  { prefix: "-", value: 40, suffix: "%", label: "Tiempo de respuesta de base de datos" },
  { prefix: "+", value: 60, suffix: "%", label: "Eficiencia operativa" },
];

export function getMetrics(lang: string = "en"): Metric[] {
  return lang === "es" ? es : en;
}
