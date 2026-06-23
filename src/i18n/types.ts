export type Locale = 'pt' | 'en' | 'es';

export interface NavItem {
  label: string;
  href: string;
}

export interface CollectionItem {
  name: string;
  category: string;
  image: string;
  alt: string;
}

export interface ProductionCard {
  title: string;
  description: string;
  icon: 'social' | 'environment' | 'national' | 'design';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  badges?: string[];
}

export interface CertificationItem {
  title: string;
  description: string;
  type: 'icon' | 'seal';
  seal?: string;
}

export interface Translation {
  locale: Locale;
  langTag: string;
  path: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    ctaCollection: string;
    ctaCatalog: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    items: CollectionItem[];
  };
  authenticity: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlight: string;
    imageAlt: string;
  };
  production: {
    eyebrow: string;
    title: string;
    cards: ProductionCard[];
  };
  global: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    partner: string;
    counters: {
      countries: string;
      continents: string;
      years: string;
    };
    countries: string[];
    micam: string;
    brazilianFootwear: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    timeline: TimelineItem[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    items: CertificationItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    button: string;
    contact: string;
    catalog: string;
    representative: string;
    phone: string;
    region: string;
    internalTeam: string;
  };
  footer: {
    tagline: string;
    location: string;
    institutional: string;
    commercial: string;
    social: string;
    links: {
      about: string;
      production: string;
      history: string;
      certifications: string;
      global: string;
    };
    rights: string;
    partner: string;
  };
  whatsapp: {
    label: string;
    floatLabel: string;
  };
}
