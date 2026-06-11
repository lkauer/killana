import type { Translation } from './types';
import { COLLECTION_IMAGES } from '@/data/collection-images';

export const en: Translation = {
  locale: 'en',
  langTag: 'en',
  path: '/en/',
  meta: {
    title: 'Killana — Handcrafted Luxury Women\'s Footwear',
    description:
      'Handcrafted women\'s footwear designed and manufactured in Brazil. Authorial design, conscious production and international presence for retailers and distributors.',
    ogTitle: 'Killana — Made by Hand',
    ogDescription:
      'Handcrafted luxury women\'s footwear. Authorial design, conscious production and global presence.',
  },
  nav: [
    { label: 'Collection', href: '#colecao' },
    { label: 'Conscious Production', href: '#producao' },
    { label: 'Global Presence', href: '#global' },
    { label: 'About', href: '#sobre' },
    { label: 'Contact', href: '#contato' },
  ],
  hero: {
    eyebrow: 'Luxury Women\'s Footwear',
    title: 'Made by Hand',
    text: 'Our footwear embodies authenticity, combining authorial design with meticulous handcrafted work. Each piece is born from certified materials of sustainable origin.',
    ctaCollection: 'Explore the collection',
    ctaCatalog: 'Request catalog',
  },
  collection: {
    eyebrow: 'Portfolio',
    title: 'Current Collection',
    items: [
      { ...COLLECTION_IMAGES[0], name: 'Essential Pump', category: 'Pump', alt: 'Premium leather women\'s pump' },
      { ...COLLECTION_IMAGES[1], name: 'Aura Sandal', category: 'Sandal', alt: 'Handcrafted leather sandal' },
      { ...COLLECTION_IMAGES[2], name: 'Nomadic Mule', category: 'Mule', alt: 'Authorial design leather mule' },
      { ...COLLECTION_IMAGES[3], name: 'Winter Ankle Boot', category: 'Boot', alt: 'Women\'s leather ankle boot' },
      { ...COLLECTION_IMAGES[4], name: 'Glossy Slingback', category: 'Slingback', alt: 'Elegant leather slingback' },
      { ...COLLECTION_IMAGES[5], name: 'Pastel Clog', category: 'Clog', alt: 'Premium handcrafted clog' },
    ],
  },
  authenticity: {
    eyebrow: 'Our Essence',
    title: 'Shoes that celebrate authenticity',
    paragraphs: [
      'Created for women who see fashion as an extension of their identity, Killana shoes are more than footwear — they are narratives in design form.',
      'Every line, every handcrafted detail, is designed to celebrate the authenticity and strength of those who wear them.',
      'For women who don\'t follow trends, but create them. Who seek not just style, but meaning.',
    ],
    highlight:
      'Because true luxury lies in pieces that tell stories, reflect essences and inspire confidence.',
    imageAlt: 'Fashion editorial featuring Killana footwear',
  },
  production: {
    eyebrow: 'Our commitment',
    title: 'Conscious Production',
    cards: [
      {
        icon: 'social',
        title: 'Social Responsibility',
        description:
          'We respect global consensus on working conditions, ensuring all our collaborators have their rights protected by law, working in a safe, healthy environment that values every person who contributes to our journey.',
      },
      {
        icon: 'environment',
        title: 'Environment',
        description:
          'We care about the environment at every stage of our production. We operate a waste management system that ensures proper disposal of every material, reinforcing our commitment to clean and sustainable production.',
      },
      {
        icon: 'national',
        title: 'National Production',
        description:
          'We value the richness of our region by prioritizing local labor and raw materials, contributing to economic strengthening and sustainable development.',
      },
      {
        icon: 'design',
        title: 'Design',
        description:
          'Our creative team combines expertise with a keen eye on fashion trends to develop elegant and sophisticated collections. We also offer footwear customization for brands through our private label solution.',
      },
    ],
  },
  global: {
    eyebrow: 'International Presence',
    title: 'We Are Global',
    paragraphs: [
      'Our reach extends to the world\'s leading markets.',
      'We operate in countries such as Canada, Italy, France, Poland, the United States, Portugal, Australia, Russia and many others, covering the Americas, Europe, Asia, Africa and Oceania.',
      'This global projection is strengthened by participation in prestigious events such as MICAM Milano, where our luxury collections stand out and connect with the biggest players in fashion.',
    ],
    partner: 'We are partners of Brazilian Footwear.',
    counters: {
      countries: 'Countries served',
      continents: 'Continents reached',
      years: 'Years of experience',
    },
    countries: [
      'Canada',
      'Italy',
      'France',
      'Poland',
      'United States',
      'Portugal',
      'Australia',
      'Russia',
    ],
    micam: 'MICAM Milano',
    brazilianFootwear: 'Brazilian Footwear',
  },
  about: {
    eyebrow: 'Our Story',
    title: 'We are Killana',
    paragraphs: [
      'Killana was born within the Gaúcha footwear tradition, in the city of Três Coroas, initially dedicated to Private Label, offering support and high-quality products for different brands around the world. This path was essential to consolidate our expertise, always grounded in human values, trust and respect at every stage of production.',
      'Over time, we discovered our own DNA and matured toward authorial design, translating our experience into creative collections that value manual work and authenticity. Each pair of shoes carries the care of hands that cut, sew, glue and assemble — an artisanal process that reflects dedication and excellence.',
      'Our commitment goes beyond aesthetics. We work with traceable leather, ensuring a high standard of quality and responsibility. We hold certifications such as the ABVTEX seal, which guarantees fair working relationships, and the SICTC seal, which attests to our responsibility throughout the raw material cycle, including proper disposal and recycling of waste. We also follow all standards that ensure a safe and healthy environment for our collaborators.',
      'Now, Killana enters a new chapter: a brand that unites Brazilian design, socio-environmental responsibility and artisanal excellence, creating women\'s footwear that expresses style, freedom and sophistication in every detail.',
    ],
    timeline: [
      {
        year: '1997',
        title: 'Origins in Três Coroas',
        description:
          'Founded within the Gaúcha footwear tradition, focused on excellence and relationships of trust.',
      },
      {
        year: '2000–2015',
        title: 'Private Label Operations',
        description:
          'International consolidation producing for brands around the world with the highest quality standards.',
      },
      {
        year: '2016–2020',
        title: 'Authorial Design',
        description:
          'Development of the brand\'s own DNA with creative collections that celebrate manual craftsmanship.',
      },
      {
        year: 'Certifications',
        title: 'ABVTEX & SICTC',
        description:
          'Achievement of seals attesting to social and environmental responsibility across the production chain.',
        badges: ['ABVTEX', 'SICTC'],
      },
      {
        year: 'Today',
        title: 'International Expansion',
        description:
          'Presence in over 40 countries, participation in MICAM Milano and partnership with Brazilian Footwear.',
      },
    ],
  },
  certifications: {
    eyebrow: 'Differentiators',
    title: 'Certifications & Excellence',
    items: [
      {
        type: 'icon',
        title: 'Artisanal Production',
        description:
          'Each pair passes through the hands of specialized artisans in a careful and dedicated process.',
      },
      {
        type: 'icon',
        title: 'Traceable Leather',
        description:
          'Certified raw materials with complete traceability throughout the supply chain.',
      },
      {
        type: 'seal',
        seal: 'ABVTEX',
        title: 'ABVTEX Certification',
        description:
          'Seal guaranteeing fair working relationships and dignified conditions for all collaborators.',
      },
      {
        type: 'seal',
        seal: 'SICTC',
        title: 'SICTC Certification',
        description:
          'Responsibility throughout the raw material cycle, including waste disposal and recycling.',
      },
      {
        type: 'icon',
        title: 'Sustainable Production',
        description:
          'Waste management and processes that minimize environmental impact at every stage.',
      },
      {
        type: 'icon',
        title: 'International Export',
        description:
          'Consolidated presence in the world\'s leading fashion and luxury footwear markets.',
      },
    ],
  },
  cta: {
    eyebrow: 'Commercial Partnerships',
    title: 'Bring Killana to your store',
    text: 'Talk to our commercial team and request the complete catalog.',
    button: 'Request Catalog',
    contact: 'Talk to sales',
    catalog: 'Request catalog',
  },
  footer: {
    tagline: 'Artisanal production of women\'s footwear',
    location: 'Três Coroas - Rio Grande do Sul - Brazil',
    institutional: 'Institutional',
    commercial: 'Commercial',
    social: 'Social Media',
    links: {
      about: 'About the Brand',
      production: 'Conscious Production',
      history: 'Our History',
      certifications: 'Certifications',
      global: 'Global Presence',
    },
    rights: 'All rights reserved.',
    partner: 'Partner of',
  },
  whatsapp: {
    label: 'WhatsApp',
    floatLabel: 'Contact us on WhatsApp',
  },
};
