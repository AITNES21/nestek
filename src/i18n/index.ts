import type { Dictionary } from './types';
import { es } from './es';
import { en } from './en';
import { de } from './de';
import { fr } from './fr';
import type { Locale } from './config';

export const DICTS: Record<Locale, Dictionary> = { es, en, de, fr };

export function t(lang: Locale): Dictionary {
  return DICTS[lang];
}

export * from './config';
export type { Dictionary, ServiceContent, ProjectContent } from './types';

/** Orden de los servicios. Deliberado: software y CRM primero, web al final. */
export const SERVICE_ORDER = [
  'software-a-medida',
  'crm',
  'soporte-informatico',
  'mantenimiento-software',
  'automatizacion',
  'aplicaciones-web',
] as const;

/** Los tres que aparecen en la portada. */
export const FEATURED_SERVICES = ['software-a-medida', 'crm', 'soporte-informatico'] as const;

/** Escalones de precio por puesto. El importe cambia según la moneda del idioma. */
export const PRICING_TIERS: Record<Locale, { seats: string; price: string; unit: string; featured?: boolean }[]> = {
  es: [
    { seats: '30', price: '1.050', unit: '35 €' },
    { seats: '50', price: '1.500', unit: '30 €', featured: true },
    { seats: '100', price: '2.500', unit: '25 €' },
  ],
  en: [
    { seats: '30', price: '1,050', unit: '€35' },
    { seats: '50', price: '1,500', unit: '€30', featured: true },
    { seats: '100', price: '2,500', unit: '€25' },
  ],
  // Suiza: precio de mercado local, nunca convertido desde euros.
  de: [
    { seats: '30', price: '1’650', unit: 'CHF 55' },
    { seats: '50', price: '2’250', unit: 'CHF 45', featured: true },
    { seats: '100', price: '4’000', unit: 'CHF 40' },
  ],
  fr: [
    { seats: '30', price: '1’650', unit: 'CHF 55' },
    { seats: '50', price: '2’250', unit: 'CHF 45', featured: true },
    { seats: '100', price: '4’000', unit: 'CHF 40' },
  ],
};

/** Datos no traducibles de los proyectos. Los textos van en cada diccionario. */
export const PROJECT_META = [
  {
    slug: 'unero',
    name: 'Unero',
    year: '2025',
    stack: ['Backend propio', 'Base de datos', 'ES/EN', 'SEO'],
    image: '/images/unero.webp',
    url: 'https://unero.es',
  },
  {
    slug: 'tri-infinity',
    name: 'Tri Infinity',
    year: '2025',
    stack: ['React', 'Panel de administración', 'Netlify'],
    image: '/images/tri2.webp',
    url: 'https://triinfinity.netlify.app',
  },
  {
    slug: 'distrito-44',
    name: 'Distrito 44',
    year: '2025',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    image: '/images/distrito.webp',
    url: 'https://distrito-44.com',
  },
  {
    slug: 'fastrecord',
    name: 'FastRecord',
    year: '2025',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    image: '/images/fastrecord.webp',
    url: 'https://aitnes21.github.io/Fastrecord',
  },
] as const;
