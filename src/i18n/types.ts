export interface ServiceContent {
  title: string;
  short: string;
  /** Frase de dolor del cliente, en sus palabras */
  pain: string;
  intro: string;
  includes: string[];
  signals: string[];
  /** Rango orientativo ya formateado; null = no se publica */
  from: string | null;
}

export interface ProjectContent {
  client: string;
  summary: string;
  sector: string;
}

export interface Dictionary {
  meta: {
    tagline: string;
    description: string;
    aboutDesc: string;
    servicesDesc: string;
    workDesc: string;
    contactDesc: string;
  };
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
    cta: string;
    menu: string;
    home: string;
    language: string;
    skip: string;
  };
  common: {
    seeDetail: string;
    seeAll: string;
    visit: string;
    talk: string;
    tellUs: string;
    seeServices: string;
  };
  home: {
    eyebrow: string;
    h1: string;
    lead: string;
    facts: { t: string; d: string }[];
    vs: {
      eyebrow: string;
      h2: string;
      lead: string;
      badTag: string;
      goodTag: string;
      bad: string[];
      good: string[];
      badEnd: string;
      goodEnd: string;
    };
    signals: { eyebrow: string; h2: string; items: string[]; foot: string };
    services: { eyebrow: string; h2: string; more: string };
    pricing: {
      eyebrow: string;
      h2: string;
      lead: string;
      seats: string;
      perSeat: string;
      month: string;
      inclTitle: string;
      included: string[];
      note: string;
      noteLink: string;
    };
    steps: { eyebrow: string; h2: string; lead: string; items: { t: string; d: string }[] };
    work: { eyebrow: string; h2: string };
    cta: { h2: string; lead: string };
  };
  services: {
    h1: string;
    lead: string;
    unsureH2: string;
    unsureLead: string;
    includesH2: string;
    signalsH2: string;
    startH2: string;
    startLead: string;
    others: string;
    breadcrumb: string;
  };
  work: { h1: string; lead: string; empty: string; ctaH2: string; ctaLead: string };
  about: {
    h1: string;
    lead: string;
    p2: string;
    p3: string;
    capsEyebrow: string;
    capsH2: string;
    capsFoot: string;
    capabilities: { area: string; items: string[] }[];
    howEyebrow: string;
    howH2: string;
    principles: { t: string; d: string }[];
    ctaH2: string;
    ctaLead: string;
  };
  contact: {
    h1: string;
    lead: string;
    fields: {
      name: string;
      company: string;
      email: string;
      phone: string;
      optional: string;
      message: string;
      placeholder: string;
      privacy: string;
      privacyLink: string;
      submit: string;
      note: string;
    };
    directH: string;
    nextH: string;
    next: string[];
    whoH: string;
    who: string;
    fallbackH2: string;
    fallbackP: string;
  };
  footer: { servicesH: string; companyH: string; contactH: string; legal: string; privacy: string; cookies: string };
  services_data: Record<string, ServiceContent>;
  projects_data: Record<string, ProjectContent>;
}
