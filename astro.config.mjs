// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Update `site` to the final production URL before deploy.
export default defineConfig({
  site: "https://sergirivero.dev",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
