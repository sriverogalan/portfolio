type ClassValue = string | number | false | null | undefined;

/**
 * Minimal className joiner. Filters falsy values and joins with spaces.
 * Avoids pulling extra deps for a small portfolio.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
