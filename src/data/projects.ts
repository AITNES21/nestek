export interface Project {
  slug: string;
  name: string;
  client: string;
  /** Qué resolvió, no qué tecnología se usó */
  summary: string;
  sector: string;
  year: string;
  stack: string[];
  image: string;
  url?: string;
  repo?: string;
  published: boolean;
}

/**
 * Datos recuperados de `js/portfolio.js` de la web anterior.
 *
 * ⚠️ REESCRITOS a propósito. Los textos originales estaban en lenguaje de
 * agencia web ("landing de alta conversión", "SEO local", "mobile-first").
 * Ese vocabulario atrae encargos de 300 €. Aquí se describe QUÉ GANÓ EL
 * CLIENTE, que es lo que lee alguien con presupuesto para un sistema.
 *
 * ⬜ POR CONFIRMAR:
 *   - Año de cada proyecto
 *   - Unero: la web anterior decía Vue + Express + PostgreSQL, pero luego
 *     se mencionó Astro. ¿Se rehízo? Ajustar el stack al real.
 *   - Permiso de cada cliente para seguir apareciendo.
 */
export const projects: Project[] = [
  {
    slug: 'unero',
    name: 'Unero',
    client: 'Unero — Construcción y reformas · Ibiza y Formentera',
    summary:
      'Plataforma con catálogo de proyectos, propiedades y estudio, en dos idiomas y con backend propio. No un escaparate: un sistema que gestiona su información y crece con la obra.',
    sector: 'Construcción · Inmobiliario',
    year: '2025',
    stack: ['Backend propio', 'Base de datos', 'Bilingüe ES/EN', 'SEO técnico'],
    image: '/images/unero.webp',
    url: 'https://unero.es',
    repo: 'https://github.com/AITNES21/Unero',
    published: true,
  },
  {
    slug: 'tri-infinity',
    name: 'Tri Infinity',
    client: 'Tri Infinity — Club deportivo',
    summary:
      'Panel de gestión propio para que el club publique sus noticias sin depender de nadie. Dejaron de necesitar un desarrollador para cada cambio.',
    sector: 'Deporte · Club',
    year: '2025',
    stack: ['React', 'Panel de administración', 'Netlify', 'Analítica'],
    image: '/images/tri2.webp',
    url: 'https://triinfinity.netlify.app',
    repo: 'https://github.com/AITNES21/triinfinity',
    published: true,
  },
  {
    slug: 'distrito-44',
    name: 'Distrito 44',
    client: 'Distrito 44 — Inmobiliaria',
    summary:
      'Portal de propiedades con formularios de contacto integrados, para centralizar las consultas de clientes en lugar de repartirlas entre teléfono y correo.',
    sector: 'Inmobiliario',
    year: '2025',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    image: '/images/distrito.webp',
    url: 'https://distrito-44.com',
    repo: 'https://github.com/AITNES21/distrito44',
    published: true,
  },
  {
    slug: 'fastrecord',
    name: 'FastRecord',
    client: 'FastRecord — Gestión de propiedades, Ibiza',
    summary:
      'Captación de solicitudes de alquiler y mantenimiento de propiedades desde el móvil, con los formularios conectados a su proceso de trabajo.',
    sector: 'Inmobiliario',
    year: '2025',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SEO local'],
    image: '/images/fastrecord.webp',
    url: 'https://aitnes21.github.io/Fastrecord',
    repo: 'https://github.com/AITNES21/Fastrecord',
    published: true,
  },
];

export const publishedProjects = projects.filter((p) => p.published);
