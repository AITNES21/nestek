export const site = {
  name: 'NESTEK',
  domain: 'www.nestek.es',
  url: 'https://www.nestek.es',
  // TODO: cambiar a una direccion @nestek.es (p.ej. nestekinfo@nestek.es)
  // cuando este configurado el correo del dominio. Una direccion @gmail.com
  // resta credibilidad en una web que publica precios de proyecto.
  email: 'web.gastronomy@gmail.com',
  phone: '+34 644 707 179',
  phoneHref: '+34644707179',
  // Titular: habla de sistemas y procesos, nunca de "web".
  tagline: 'Construimos el sistema que tu empresa necesita',
  description:
    'Software a medida, CRM y mantenimiento informático para empresas. Construimos el sistema, gestionamos el parque de equipos y lo mantenemos funcionando.',
  locale: 'es_ES',
} as const;

export const nav = [
  { href: '/servicios/', label: 'Servicios' },
  { href: '/trabajos/', label: 'Trabajos' },
  { href: '/nosotros/', label: 'Nosotros' },
  { href: '/contacto/', label: 'Contacto' },
] as const;
