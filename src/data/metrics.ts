export type Metric = {
  /** Numeric value used for the count-up animation. */
  value: number;
  /** Prefix shown before the number, e.g. "+" or "−". */
  prefix?: string;
  /** Suffix shown after the number, e.g. "%". */
  suffix?: string;
  label: string;
};

export const metrics: Metric[] = [
  { prefix: "−", value: 95, suffix: "%", label: "Frontend load times" },
  { prefix: "+", value: 80, suffix: "%", label: "Dev velocity (5-person team)" },
  { prefix: "−", value: 40, suffix: "%", label: "DB response time" },
  { prefix: "+", value: 60, suffix: "%", label: "Operational efficiency" },
];
