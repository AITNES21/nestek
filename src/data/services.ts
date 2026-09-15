export interface Service {
  slug: string;
  title: string;
  short: string;
  /** Frase de dolor del cliente, en sus palabras */
  pain: string;
  intro: string;
  includes: string[];
  signals: string[];
  /** Rango orientativo; null = no se publica todavía */
  from: string | null;
  featured: boolean;
}

/**
 * ORDEN DELIBERADO. Software, CRM y soporte informático primero;
 * las aplicaciones web, al final.
 * La web anterior decía "diseño y desarrollo web" y por eso llegaban
 * peticiones de 300 €. Lo que el titular promete es lo que el cliente pide.
 */
export const services: Service[] = [
  {
    slug: 'software-a-medida',
    title: 'Software a medida',
    short: 'Aplicaciones que encajan con cómo trabaja tu empresa, no al revés.',
    pain: '«Tenemos un programa, pero la mitad del trabajo acaba en Excel igual.»',
    intro:
      'El software estándar obliga a tu equipo a adaptarse a un proceso que no es el vuestro. Construimos aplicaciones que parten de cómo trabajáis de verdad: los pasos, las excepciones y las personas que intervienen.',
    includes: [
      'Análisis del proceso real, no del que dice el manual',
      'Diseño funcional y validación antes de escribir código',
      'Desarrollo, pruebas y puesta en producción',
      'Migración de los datos que ya tenéis',
      'Integración con los sistemas en uso',
      'Formación al equipo y documentación',
    ],
    signals: [
      'Vuestro proceso vive en hojas de cálculo compartidas',
      'Cada departamento lleva su propia versión de la información',
      'Se pierde tiempo copiando datos de un sistema a otro',
      'El programa que comprasteis no lo usa casi nadie',
    ],
    from: 'Desde 8.000 €',
    featured: true,
  },
  {
    slug: 'crm',
    title: 'CRM a medida',
    short: 'La gestión de clientes construida alrededor de tu forma de vender.',
    pain: '«Compramos un CRM y seguimos apuntando las cosas importantes en una libreta.»',
    intro:
      'Los CRM genéricos fallan porque imponen un embudo que no es el tuyo. Partimos de tu proceso comercial real y construimos la herramienta encima, integrada con lo que ya usáis.',
    includes: [
      'Modelado de tu proceso comercial',
      'Gestión de clientes, oportunidades y seguimiento',
      'Automatización de tareas repetitivas',
      'Informes y cuadros de mando útiles de verdad',
      'Integración con correo, facturación y web',
      'Migración desde el CRM o el Excel actual',
    ],
    signals: [
      'El CRM está lleno de campos vacíos',
      'El equipo comercial lo esquiva',
      'No sabéis con certeza cuántas oportunidades hay abiertas',
      'La información se pierde entre comercial y administración',
    ],
    from: 'Desde 8.000 €',
    featured: true,
  },
  {
    /* ── EL NEGOCIO ASIR. Precio por puesto, facturación recurrente. ── */
    slug: 'soporte-informatico',
    title: 'Soporte y mantenimiento informático',
    short:
      'Vuestro parque de ordenadores, red y servidores gestionados por un solo proveedor.',
    pain: '«Cuando algo se rompe llamamos a un conocido y cruzamos los dedos.»',
    intro:
      'Una empresa con 30, 50 o 100 puestos necesita que alguien se ocupe de los ordenadores, las cuentas, las copias, la red y los servidores — antes de que fallen, no después. Gestionamos todo el parque informático con precio por puesto y sin sorpresas.',
    includes: [
      'Inventario y control de todos los equipos',
      'Actualizaciones de sistema y seguridad centralizadas',
      'Antivirus y protección de los puestos',
      'Copias de seguridad verificadas de equipos y servidores',
      'Altas, bajas y cambios de usuario',
      'Red, wifi, impresoras y periféricos',
      'Servidores y entornos cloud',
      'Informe mensual del estado del parque',
    ],
    signals: [
      'Nadie sabe cuántos equipos hay ni en qué estado están',
      'Los ordenadores se actualizan cuando alguien se acuerda',
      'Cuando alguien entra o sale, preparar su equipo es una odisea',
      'El servidor lo montó alguien que ya no trabaja aquí',
      'No hay plan si mañana falla una máquina',
      'Pagáis a varios proveedores distintos y ninguno se responsabiliza',
    ],
    from: 'Desde 25 €/puesto al mes',
    featured: true,
  },
  {
    slug: 'mantenimiento-software',
    title: 'Mantenimiento de software',
    short: 'El sistema que construimos, vigilado y mejorando cada mes.',
    pain: '«Nos lo entregaron, funcionó un año, y ahora nadie responde.»',
    intro:
      'Un sistema sin mantenimiento se degrada: las dependencias envejecen, las copias dejan de comprobarse y las mejoras se posponen. Nos quedamos después de entregar, con un compromiso mensual y horas incluidas para que el sistema no se quede quieto.',
    includes: [
      'Monitorización con alertas automáticas',
      'Copias de seguridad diarias y verificación de restauración',
      'Actualizaciones de seguridad y dependencias',
      'Corrección de errores sin coste adicional',
      'Horas incluidas cada mes para cambios y mejoras',
      'Informe mensual de estado',
    ],
    signals: [
      'Nadie ha comprobado nunca que vuestras copias restauren',
      'No sabéis si el sistema está caído hasta que alguien avisa',
      'Los cambios pequeños se acumulan porque hay que pedir presupuesto',
      'Vuestro proveedor anterior ya no responde',
    ],
    from: 'Desde 200 €/mes',
    featured: false,
  },
  {
    slug: 'automatizacion',
    title: 'Automatización e integración',
    short: 'Conectar lo que no se habla y eliminar el trabajo manual repetido.',
    pain: '«Alguien dedica media jornada a pasar datos de un sitio a otro.»',
    intro:
      'Muchas empresas tienen buenas herramientas que no se comunican entre sí, y una persona haciendo de puente. Conectamos los sistemas y automatizamos el trasvase. Suele ser el proyecto más rápido de amortizar.',
    includes: [
      'Mapeo de dónde se pierde el tiempo',
      'Integración entre sistemas mediante API',
      'Automatización de tareas administrativas y comerciales',
      'Procesamiento automático de documentos',
      'Avisos y notificaciones según reglas propias',
    ],
    signals: [
      'Alguien copia información de un sistema a otro a mano',
      'Los mismos datos se teclean dos o tres veces',
      'Los informes se montan a mano cada mes',
      'Hay errores que siempre vienen del mismo trasvase',
    ],
    from: 'Desde 3.000 €',
    featured: false,
  },
  {
    slug: 'aplicaciones-web',
    title: 'Aplicaciones y portales web',
    short: 'Portales de cliente, áreas privadas y aplicaciones en navegador.',
    pain: '«Nuestros clientes nos piden por correo cosas que podrían consultar solos.»',
    intro:
      'Cuando el sistema interno funciona, el paso siguiente suele ser abrirlo: que el cliente consulte su estado, descargue sus documentos o haga sus pedidos sin llamar. Lo construimos sobre el mismo sistema, no aparte.',
    includes: [
      'Portales de cliente y áreas privadas',
      'Aplicaciones web conectadas a vuestro sistema',
      'Sitios corporativos cuando forman parte del proyecto',
      'Rendimiento, accesibilidad y posicionamiento técnico',
    ],
    signals: [
      'Atendéis por teléfono consultas que el cliente podría resolver solo',
      'Enviáis documentos a mano uno por uno',
      'Vuestra web y vuestro sistema no se hablan',
    ],
    from: null,
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);
