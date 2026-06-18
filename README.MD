# Portfolio — Sergi Rivero Galán

Personal landing page built as a premium product page (Apple / Cal AI inspired).

## Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — styling (via `@tailwindcss/vite`)
- [GSAP](https://gsap.com) + [Lenis](https://lenis.darkroom.engineering) — animation & smooth scroll
- TypeScript — strict mode
- Atomic Design component architecture

## Requirements

- Node 18+
- [pnpm](https://pnpm.io)

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `http://localhost:4321` |
| `pnpm build` | Build to `./dist` |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Type-check with `astro check` |

## Structure

```
src/
  components/   atoms · molecules · organisms · templates · motion
  data/         projects · experience · skills · links · site
  layouts/      BaseLayout.astro
  pages/        index.astro
  styles/       global.css (design tokens via @theme)
  utils/        animations · lenis · seo · cn
docs/           source CVs
```

## Deploy

Static output. Set the production URL in `astro.config.mjs` (`site`) before deploying to any static host (Cloudflare Pages, Vercel, Netlify).

### Pre-deploy checklist

- [ ] Update `site` in `astro.config.mjs` and `src/data/site.ts`
- [ ] Replace `/public/Sergi_Rivero_CV.pdf` with the latest CV
- [ ] Add real project screenshots to `/public/assets/work/` (SVG placeholders ship by default)
- [ ] Run `pnpm lint && pnpm build`
- [ ] Verify Lighthouse ≥ 95 (Performance, Accessibility, Best Practices, SEO)
- [ ] Test keyboard navigation, focus states and `prefers-reduced-motion`
