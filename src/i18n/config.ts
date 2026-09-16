export const LOCALES = ['es', 'en', 'de', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

/**
 * ⚠️ ALEMÁN Y FRANCÉS: traducción profesional, pendiente de revisión nativa.
 *
 * El alemán es gramaticalmente correcto, pero el mercado de Basilea usa
 * terminología propia (Schweizer Hochdeutsch) y un tono de compra concreto.
 * Antes de usar la versión DE en una gestión comercial en Suiza, que la
 * revise un nativo. Un comité de compra suizo detecta el alemán "de fuera"
 * y lo interpreta como proveedor extranjero.
 *
 * Ver en Obsidian: "Como Compran las Empresas Suizas".
 */
export const LOCALE_LABELS: Record<Locale, { name: string; short: string }> = {
  es: { name: 'Español', short: 'ES' },
  en: { name: 'English', short: 'EN' },
  de: { name: 'Deutsch', short: 'DE' },
  fr: { name: 'Français', short: 'FR' },
};

/** Etiqueta `lang` del HTML. Para Suiza conviene el subtag regional. */
export const HTML_LANG: Record<Locale, string> = {
  es: 'es',
  en: 'en',
  de: 'de-CH',
  fr: 'fr-CH',
};

export const OG_LOCALE: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_GB',
  de: 'de_CH',
  fr: 'fr_CH',
};

/** Rutas equivalentes entre idiomas. Clave = concepto, no ruta. */
export const ROUTES = {
  home:     { es: '/',              en: '/en/',              de: '/de/',             fr: '/fr/' },
  services: { es: '/servicios/',    en: '/en/services/',     de: '/de/leistungen/',  fr: '/fr/services/' },
  work:     { es: '/trabajos/',     en: '/en/work/',         de: '/de/referenzen/',  fr: '/fr/realisations/' },
  about:    { es: '/nosotros/',     en: '/en/about/',        de: '/de/ueber-uns/',   fr: '/fr/a-propos/' },
  contact:  { es: '/contacto/',     en: '/en/contact/',      de: '/de/kontakt/',     fr: '/fr/contact/' },
  legal:    { es: '/aviso-legal/',  en: '/aviso-legal/',     de: '/aviso-legal/',    fr: '/aviso-legal/' },
  privacy:  { es: '/privacidad/',   en: '/privacidad/',      de: '/privacidad/',     fr: '/privacidad/' },
  cookies:  { es: '/cookies/',      en: '/cookies/',         de: '/cookies/',        fr: '/cookies/' },
} as const;

export type RouteKey = keyof typeof ROUTES;

export function route(key: RouteKey, lang: Locale): string {
  return ROUTES[key][lang];
}

const SERVICE_BASE: Record<Locale, string> = {
  es: '/servicios/',
  en: '/en/services/',
  de: '/de/leistungen/',
  fr: '/fr/services/',
};

export function serviceUrl(slug: string, lang: Locale): string {
  return `${SERVICE_BASE[lang]}${slug}/`;
}

/** Ruta equivalente en otro idioma, para el selector. */
export function switchLocale(pathname: string, to: Locale): string {
  const clean = pathname.endsWith('/') ? pathname : pathname + '/';

  for (const entry of Object.values(ROUTES)) {
    if (Object.values(entry).includes(clean as never)) return entry[to];
  }

  // Detalle de servicio en cualquier idioma
  for (const [, base] of Object.entries(SERVICE_BASE)) {
    if (clean.startsWith(base)) {
      const slug = clean.slice(base.length).replace(/\/$/, '');
      if (slug) return serviceUrl(slug, to);
    }
  }

  return ROUTES.home[to];
}

/** Idioma deducido de la URL. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg ?? '') && seg !== 'es'
    ? (seg as Locale)
    : 'es';
}
