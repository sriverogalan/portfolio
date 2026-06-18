import { site } from "./site";

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "download"
  | "arrow-up-right"
  | "arrow-right"
  | "external";

export type SocialLink = {
  label: string;
  url: string;
  icon: IconName;
  external?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    url: `mailto:${site.email}`,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/sergiriverogalan",
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    url: "https://github.com/sriverogalan",
    icon: "github",
    external: true,
  },
];
