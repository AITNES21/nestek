import type { Dictionary } from './types';

export const es: Dictionary = {
  meta: {
    tagline: 'Construimos el sistema que tu empresa necesita',
    description:
      'Software a medida, CRM y mantenimiento informático para empresas. Construimos el sistema, gestionamos el parque de equipos y lo mantenemos funcionando.',
    aboutDesc:
      'Ingeniería informática aplicada: construimos sistemas de gestión a medida y mantenemos la infraestructura donde funcionan.',
    servicesDesc:
      'Software a medida, CRM, soporte informático, automatización y aplicaciones web para empresas.',
    workDesc: 'Proyectos de software, sistemas y aplicaciones desarrollados por NESTEK.',
    contactDesc:
      'Cuéntanos qué proceso se te ha quedado pequeño. La primera conversación no la facturamos.',
  },
  nav: {
    services: 'Servicios',
    work: 'Trabajos',
    about: 'Nosotros',
    contact: 'Contacto',
    cta: 'Hablemos',
    menu: 'Abrir menú',
    home: 'inicio',
    language: 'Idioma',
    skip: 'Saltar al contenido',
  },
  common: {
    seeDetail: 'Ver detalle',
    seeAll: 'Ver todos los trabajos',
    visit: 'Visitar',
    talk: 'Hablemos',
    tellUs: 'Cuéntanos tu caso',
    seeServices: 'Ver servicios',
  },
  home: {
    eyebrow: 'Software a medida · CRM · Soporte informático',
    h1: 'Construimos el sistema que tu empresa necesita',
    lead: 'Y nos quedamos a mantenerlo. Software, CRM y parque informático gestionados por un solo equipo, con precio cerrado.',
    facts: [
      { t: 'Desarrollo', d: 'Software, CRM e integraciones a medida' },
      { t: 'Sistemas', d: 'Parque informático, red y servidores' },
      { t: 'Un solo contrato', d: 'Las dos cosas, el mismo equipo' },
    ],
    vs: {
      eyebrow: 'Por qué nosotros',
      h2: 'Un proveedor, no tres',
      lead: 'Lo normal es tener una empresa para el software, otra para los ordenadores y otra para la web. Cuando algo falla, cada una dice que el problema es de las otras dos.',
      badTag: 'Lo habitual',
      goodTag: 'Con NESTEK',
      bad: ['Una empresa hace el software', 'Otra lleva los ordenadores', 'Otra tiene la web'],
      good: [
        'Desarrollo y sistemas, mismo equipo',
        'Un contrato, un teléfono',
        'El software y la máquina donde corre',
      ],
      badEnd: 'Nadie se responsabiliza del conjunto',
      goodEnd: 'Cuando algo falla, es nuestro problema',
    },
    signals: {
      eyebrow: 'Cuándo tiene sentido llamarnos',
      h2: 'Si algo de esto te suena, el problema no es tu equipo. Es la herramienta.',
      items: [
        'Vuestro proceso vive en hojas de cálculo compartidas',
        'Alguien dedica horas a pasar datos de un sistema a otro',
        'Nadie sabe cuántos equipos hay ni en qué estado están',
        'El programa que comprasteis no lo usa casi nadie',
        'No encontráis a quién contratar para arreglarlo',
        'Vuestro proveedor anterior ya no responde',
      ],
      foot: 'Ninguna de estas cosas se arregla con más esfuerzo. Se arreglan con un sistema que encaje con cómo trabajáis, y con alguien que lo mantenga.',
    },
    services: {
      eyebrow: 'Servicios',
      h2: 'Qué hacemos',
      more: 'Automatización, mantenimiento de software y portales web',
    },
    pricing: {
      eyebrow: 'Soporte informático',
      h2: 'Precio por puesto, sin sorpresas',
      lead: 'Todo el parque informático gestionado. Sabes lo que pagas cada mes desde el primer día.',
      seats: 'puestos',
      perSeat: 'por puesto',
      month: '€/mes',
      inclTitle: 'Incluido en todos los planes',
      included: [
        'Inventario y control de equipos',
        'Actualizaciones y seguridad',
        'Copias verificadas',
        'Altas, bajas y cambios de usuario',
        'Red, wifi e impresoras',
        'Servidores y cloud',
        'Informe mensual',
        'Soporte a usuarios',
      ],
      note: 'Precios orientativos. El presupuesto final depende de servidores, sedes y nivel de servicio.',
      noteLink: 'Ver qué incluye',
    },
    steps: {
      eyebrow: 'Cómo trabajamos',
      h2: 'El proyecto es el principio, no el final',
      lead: 'La mayoría de proveedores entrega y desaparece. Nosotros vendemos el sistema y el mantenimiento juntos, porque un sistema sin mantenimiento se degrada.',
      items: [
        {
          t: 'Entendemos el proceso',
          d: 'Antes de proponer nada, vemos cómo trabajáis de verdad: los pasos, las excepciones y dónde se pierde el tiempo. Sin diagnóstico no hay propuesta.',
        },
        {
          t: 'Presupuesto cerrado',
          d: 'Un precio, un alcance y una fecha. Con lo que incluye y lo que no, por escrito. Sin facturación por horas ni sorpresas a mitad.',
        },
        {
          t: 'Construimos e integramos',
          d: 'Entregas cada dos semanas y un entorno donde lo veis funcionando desde el principio. Nada de desaparecer un mes y volver con todo.',
        },
        {
          t: 'Nos quedamos',
          d: 'Mantenimiento del software y del parque informático, con informe mensual. El sistema sigue mejorando después de la entrega.',
        },
      ],
    },
    work: { eyebrow: 'Trabajos', h2: 'Algunos proyectos' },
    cta: {
      h2: '¿Tienes un proceso que se te ha quedado pequeño?',
      lead: 'Cuéntanos cómo trabajáis hoy. Si podemos ayudar, te lo decimos con un presupuesto cerrado. Si no, también.',
    },
  },
  services: {
    h1: 'Lo que construimos',
    lead: 'Todo lo que hacemos parte del mismo sitio: entender cómo trabaja tu empresa y construir la herramienta que falta. Después nos quedamos a mantenerla.',
    unsureH2: '¿No sabes cuál encaja?',
    unsureLead:
      'Normal. Casi nadie llega sabiendo qué necesita — llega sabiendo qué le duele. Cuéntanos el problema y te decimos si podemos ayudar.',
    includesH2: 'Qué incluye',
    signalsH2: 'Señales de que lo necesitas',
    startH2: 'Cómo empieza',
    startLead:
      'Una conversación para entender el proceso. Si vemos que podemos ayudar, te mandamos una propuesta con alcance y precio cerrado. Sin compromiso y sin facturar la reunión.',
    others: 'Otros servicios',
    breadcrumb: 'Migas',
  },
  work: {
    h1: 'Proyectos',
    lead: 'Cada proyecto empieza con un problema concreto de una empresa concreta. Aquí van algunos, con lo que resolvieron.',
    empty: 'Estamos preparando esta sección.',
    ctaH2: '¿Tu caso se parece a alguno?',
    ctaLead:
      'Cuéntanos qué proceso se os ha quedado pequeño y te decimos si podemos ayudar.',
  },
  about: {
    h1: 'Desarrollo y sistemas, un solo interlocutor',
    lead: 'NESTEK es una empresa de ingeniería informática. Construimos el software que una empresa necesita para trabajar y gestionamos la infraestructura donde ese software funciona.',
    p2: 'En la mayoría de casos eso son dos proveedores distintos: uno que programa y otro que lleva los ordenadores. Cuando algo falla, cada uno dice que el problema es del otro. Aquí es el mismo contrato y el mismo teléfono.',
    p3: 'Trabajamos con empresas que han crecido más rápido que sus herramientas: procesos en hojas de cálculo, programas que nadie usa, información repartida entre departamentos y un parque informático que nadie controla. Construimos el sistema que falta y nos quedamos a mantenerlo.',
    capsEyebrow: 'Capacidades',
    capsH2: 'Las dos mitades del problema',
    capsFoot:
      'Un sistema que funciona necesita las dos. Separarlas es lo que hace que los proyectos se queden a medias.',
    capabilities: [
      {
        area: 'Desarrollo',
        items: [
          'Software de gestión a medida',
          'CRM y procesos comerciales',
          'Integraciones y automatización',
          'Aplicaciones y portales web',
        ],
      },
      {
        area: 'Sistemas',
        items: [
          'Parque informático y usuarios',
          'Redes, servidores y cloud',
          'Copias de seguridad y recuperación',
          'Seguridad y control de accesos',
        ],
      },
    ],
    howEyebrow: 'Cómo trabajamos',
    howH2: 'Cuatro cosas que no negociamos',
    principles: [
      {
        t: 'Precio cerrado',
        d: 'Un alcance, un precio y una fecha, por escrito antes de empezar. Si hay que cambiar algo, se dice lo que cuesta antes de hacerlo.',
      },
      {
        t: 'Sin dependencia oculta',
        d: 'El código y los datos son tuyos. Si un día decides irte, te los llevas con su documentación. No trabajamos atando clientes.',
      },
      {
        t: 'Un solo interlocutor',
        d: 'Desarrollo y sistemas se llevan desde el mismo sitio. Cuando algo falla, no hay proveedores señalándose entre ellos.',
      },
      {
        t: 'La tecnología, según el problema',
        d: 'No tenemos una herramienta favorita que vender. Elegimos según lo que cuesta mantener el sistema dentro de cinco años.',
      },
    ],
    ctaH2: '¿Hablamos?',
    ctaLead: 'La primera conversación es para entender el problema. No la facturamos.',
  },
  contact: {
    h1: 'Cuéntanos tu caso',
    lead: 'Lo que mejor funciona es que nos expliques cómo trabajáis hoy y qué es lo que más molesta. Con eso ya podemos decirte si tiene sentido seguir hablando.',
    fields: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Email',
      phone: 'Teléfono',
      optional: '(opcional)',
      message: '¿Qué proceso se os ha quedado pequeño?',
      placeholder:
        'Por ejemplo: llevamos los pedidos en un Excel compartido y cada vez que entra uno nuevo hay que copiarlo a mano al programa de facturación.',
      privacy: 'He leído y acepto la',
      privacyLink: 'política de privacidad',
      submit: 'Enviar',
      note: 'Respondemos en un día laborable.',
    },
    directH: 'Directo',
    nextH: 'Qué pasa después',
    next: [
      'Te respondemos en un día laborable.',
      'Una llamada o videollamada de 20–30 minutos para entender el proceso.',
      'Si vemos que podemos ayudar, propuesta con alcance y precio cerrado.',
      'Si no, te lo decimos y te orientamos hacia quien sí pueda.',
    ],
    whoH: 'Con quién trabajamos',
    who: 'Empresas con equipo y procesos que se les han quedado pequeños. Proyectos desde 3.000 €.',
    fallbackH2: 'Escríbenos directamente',
    fallbackP:
      'Cuéntanos en un par de líneas cómo trabajáis hoy y qué es lo que más molesta. Respondemos en un día laborable.',
  },
  footer: {
    servicesH: 'Servicios',
    companyH: 'Empresa',
    contactH: 'Contacto',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
  },
  services_data: {
    'software-a-medida': {
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
    },
    crm: {
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
    },
    'soporte-informatico': {
      title: 'Soporte y mantenimiento informático',
      short: 'Vuestro parque de ordenadores, red y servidores gestionados por un solo proveedor.',
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
    },
    'mantenimiento-software': {
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
    },
    automatizacion: {
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
    },
    'aplicaciones-web': {
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
    },
  },
  projects_data: {
    unero: {
      client: 'Unero — Construcción y reformas · Ibiza y Formentera',
      summary:
        'Plataforma con catálogo de proyectos, propiedades y estudio, en dos idiomas y con backend propio. No un escaparate: un sistema que gestiona su información y crece con la obra.',
      sector: 'Construcción · Inmobiliario',
    },
    'tri-infinity': {
      client: 'Tri Infinity — Club deportivo',
      summary:
        'Panel de gestión propio para que el club publique sus noticias sin depender de nadie. Dejaron de necesitar un desarrollador para cada cambio.',
      sector: 'Deporte · Club',
    },
    'distrito-44': {
      client: 'Distrito 44 — Inmobiliaria',
      summary:
        'Portal de propiedades con formularios de contacto integrados, para centralizar las consultas de clientes en lugar de repartirlas entre teléfono y correo.',
      sector: 'Inmobiliario',
    },
    fastrecord: {
      client: 'FastRecord — Gestión de propiedades, Ibiza',
      summary:
        'Captación de solicitudes de alquiler y mantenimiento de propiedades desde el móvil, con los formularios conectados a su proceso de trabajo.',
      sector: 'Inmobiliario',
    },
  },
};
