import { getSite } from "../data/site";

export type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
};

/** Build the absolute OG image URL from a site-relative path. */
export function absoluteUrl(path: string, lang: string = "en"): string {
  const site = getSite(lang);
  return new URL(path, site.url).toString();
}

/** JSON-LD Person schema for richer search results. */
export function personSchema(lang: string = "en") {
  const site = getSite(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
    },
    sameAs: [
      "https://linkedin.com/in/sergiriverogalan",
      "https://github.com/sriverogalan",
    ],
  };
}
