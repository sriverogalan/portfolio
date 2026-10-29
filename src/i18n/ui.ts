export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.work": "Work",
    "nav.process": "Process",
    "nav.experience": "Experience",
    "nav.stack": "Stack",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.primary": "Primary",
    "nav.mobile": "Mobile",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.changeLanguage": "Change language",
    "nav.home": "Home",
    "hero.viewWork": "View work",
    "hero.getInTouch": "Get in touch",
    "hero.scrollSelectedWork": "Selected work",
    "shipping.label": "Now shipping",
    "shipping.product": "Better Screenshoot: macOS screenshots with a built-in editor",
    "shipping.cta": "See the work",
    "section.selectedWork.label": "Selected work",
    "section.selectedWork.title": "Products shipped, end to end.",
    "section.selectedWork.description":
      "From architecture to production. Platforms, internal tools and client products with measurable outcomes.",
    "section.selectedWork.alsoBuilding": "Also building",
    "section.selectedWork.alsoBuildingDesc": "Side products and client work, shipped or still in progress.",
    "section.selectedWork.projects": "projects",
    "section.process.label": "How I ship",
    "section.process.title": "Four steps. Same rhythm every time.",
    "section.process.description":
      "The operating cadence I use on client work and on my own products.",
    "section.experience.label": "Experience",
    "section.experience.title": "A track record of shipping.",
    "section.experience.description":
      "Six years across aviation, logistics, ERP and freelance product work.",
    "section.stack.label": "Technical edge",
    "section.stack.title": "The stack behind the work.",
    "section.stack.description":
      "Depth in backend and architecture, with enough breadth to own the full product surface.",
    "section.about.label": "About",
    "section.contact.label": "Contact",
    "section.contact.title": "Let's build something worth shipping.",
    "section.contact.description":
      "Reach out by email or LinkedIn. Happy to talk about what you're building.",
    "metrics.label": "Measured impact across teams and products",
    "metrics.aria": "Impact metrics",
    "caseStudy.problem": "Problem",
    "caseStudy.approach": "Approach",
    "caseStudy.outcome": "Outcome",
    "experience.current": "Current",
    "footer.builtWith": "Built with Astro & GSAP",
    "footer.nav": "Footer",
    "theme.toggle": "Toggle theme",
    "404.title": "Not found",
    "404.description": "Page not found.",
    "404.body": "This page wandered off. Let's get you back.",
    "404.cta": "Back home",
  },
  es: {
    "nav.work": "Proyectos",
    "nav.process": "Método",
    "nav.experience": "Experiencia",
    "nav.stack": "Stack",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.primary": "Principal",
    "nav.mobile": "Móvil",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",
    "nav.changeLanguage": "Cambiar idioma",
    "nav.home": "Inicio",
    "hero.viewWork": "Ver proyectos",
    "hero.getInTouch": "Contactar",
    "hero.scrollSelectedWork": "Proyectos destacados",
    "shipping.label": "En producción",
    "shipping.product": "Better Screenshoot: capturas en macOS con editor integrado",
    "shipping.cta": "Ver el trabajo",
    "section.selectedWork.label": "Proyectos",
    "section.selectedWork.title": "Productos lanzados de principio a fin.",
    "section.selectedWork.description":
      "Desde la arquitectura hasta la producción. Plataformas, herramientas internas y productos con resultados medibles.",
    "section.selectedWork.alsoBuilding": "También construyendo",
    "section.selectedWork.alsoBuildingDesc":
      "Productos propios y trabajos para clientes, lanzados o aún en progreso.",
    "section.selectedWork.projects": "proyectos",
    "section.process.label": "Cómo entrego",
    "section.process.title": "Cuatro pasos. El mismo ritmo siempre.",
    "section.process.description":
      "La cadencia con la que trabajo en proyectos de cliente y en los míos.",
    "section.experience.label": "Experiencia",
    "section.experience.title": "Historial de entregas.",
    "section.experience.description":
      "Seis años en aviación, logística, ERP y producto freelance.",
    "section.stack.label": "Perfil técnico",
    "section.stack.title": "El stack detrás del trabajo.",
    "section.stack.description":
      "Profundidad en backend y arquitectura, con amplitud suficiente para cubrir toda la superficie del producto.",
    "section.about.label": "Sobre mí",
    "section.contact.label": "Contacto",
    "section.contact.title": "Construyamos algo que valga la pena.",
    "section.contact.description":
      "Escríbeme por email o LinkedIn. Hablemos de lo que estás construyendo.",
    "metrics.label": "Impacto medido en equipos y productos",
    "metrics.aria": "Métricas de impacto",
    "caseStudy.problem": "Problema",
    "caseStudy.approach": "Enfoque",
    "caseStudy.outcome": "Resultado",
    "experience.current": "Actual",
    "footer.builtWith": "Hecho con Astro y GSAP",
    "footer.nav": "Pie de página",
    "theme.toggle": "Cambiar tema",
    "404.title": "No encontrado",
    "404.description": "Página no encontrada.",
    "404.body": "Esta página se ha perdido. Volvamos al inicio.",
    "404.cta": "Volver al inicio",
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
