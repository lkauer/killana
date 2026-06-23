import type { Translation } from './types';
import { COLLECTION_IMAGES } from '@/data/collection-images';

export const es: Translation = {
  locale: 'es',
  langTag: 'es',
  path: '/es/',
  meta: {
    title: 'Killana — Calzado Femenino Artesanal de Lujo',
    description:
      'Calzado femenino artesanal diseñado y producido en Brasil. Diseño autoral, producción consciente y presencia internacional para minoristas y distribuidores.',
    ogTitle: 'Killana — Made by Hand',
    ogDescription:
      'Calzado femenino artesanal de lujo. Diseño autoral, producción consciente y presencia global.',
  },
  nav: [
    { label: 'Colección', href: '#colecao' },
    { label: 'Producción Consciente', href: '#producao' },
    { label: 'Presencia Global', href: '#global' },
    { label: 'Nosotros', href: '#sobre' },
    { label: 'Contacto', href: '#contato' },
  ],
  hero: {
    eyebrow: 'Calzado Femenino de Lujo',
    title: 'Made by Hand',
    text: 'Nuestro calzado traduce la autenticidad, uniendo diseño autoral y un cuidadoso trabajo artesanal. Cada pieza nace de materiales certificados y de procedencia sostenible.',
    ctaCollection: 'Conocer la colección',
    ctaCatalog: 'Solicitar catálogo',
  },
  collection: {
    eyebrow: 'Portafolio',
    title: 'Colección Actual',
    items: [
      { ...COLLECTION_IMAGES[0], name: 'Scarpin Esencial', category: 'Scarpin', alt: 'Scarpin femenino en cuero premium' },
      { ...COLLECTION_IMAGES[1], name: 'Sandalia Aura', category: 'Sandalia', alt: 'Sandalia artesanal en cuero' },
      { ...COLLECTION_IMAGES[2], name: 'Mule Nomadic', category: 'Mule', alt: 'Mule en cuero con diseño autoral' },
      { ...COLLECTION_IMAGES[3], name: 'Botín Winter', category: 'Bota', alt: 'Bota femenina de cuero' },
    ],
  },
  authenticity: {
    eyebrow: 'Nuestra Esencia',
    title: 'Zapatos que celebran la autenticidad',
    paragraphs: [
      'Creados para mujeres que ven la moda como una extensión de su identidad, los zapatos Killana son más que calzado: son narrativas en forma de diseño.',
      'Cada línea, cada detalle artesanal, está pensado para celebrar la autenticidad y la fuerza de quienes los usan.',
      'Para mujeres que no siguen tendencias, sino que las crean. Que no buscan solo estilo, sino significado.',
    ],
    highlight:
      'Porque el verdadero lujo está en piezas que cuentan historias, reflejan esencias e inspiran confianza.',
    imageAlt: 'Editorial de moda femenina con calzado Killana',
  },
  production: {
    eyebrow: 'Nuestro compromiso',
    title: 'Producción Consciente',
    cards: [
      {
        icon: 'social',
        title: 'Responsabilidad Social',
        description:
          'Respetamos los consensos globales sobre condiciones de trabajo, garantizando que todos nuestros colaboradores tengan sus derechos asegurados por ley, además de actuar en un ambiente seguro, saludable y que valora a cada persona que contribuye a nuestro camino.',
      },
      {
        icon: 'environment',
        title: 'Medio Ambiente',
        description:
          'Nos preocupamos por el medio ambiente en cada etapa de nuestra producción. Operamos con un sistema de gestión de residuos que asegura la disposición adecuada de cada material, reforzando nuestro compromiso con una producción limpia y sostenible.',
      },
      {
        icon: 'national',
        title: 'Producción Nacional',
        description:
          'Valoramos la riqueza de nuestra región al priorizar la mano de obra y las materias primas locales, contribuyendo al fortalecimiento de la economía y al desarrollo sostenible.',
      },
      {
        icon: 'design',
        title: 'Diseño',
        description:
          'Nuestro equipo de creación combina experiencia y una mirada atenta a las tendencias de la moda para desarrollar colecciones elegantes y sofisticadas. También ofrecemos la personalización de calzado para marcas con nuestra solución de private label.',
      },
    ],
  },
  global: {
    eyebrow: 'Presencia Internacional',
    title: 'We Are Global',
    paragraphs: [
      'Nuestro alcance se extiende a los principales mercados internacionales.',
      'Actuamos en países como Canadá, Italia, Francia, Polonia, Estados Unidos, Portugal, Australia, Rusia y muchos otros, cubriendo las Américas, Europa, Asia, África y Oceanía.',
      'Esta proyección global se fortalece con la participación en eventos de prestigio, como MICAM Milano, donde nuestras colecciones de lujo se destacan y conectan con los mayores actores de la moda.',
    ],
    partner: 'Somos socios de Brazilian Footwear.',
    counters: {
      countries: 'Países atendidos',
      continents: 'Continentes alcanzados',
      years: 'Años de experiencia',
    },
    countries: [
      'Canadá',
      'Italia',
      'Francia',
      'Polonia',
      'Estados Unidos',
      'Portugal',
      'Australia',
      'Rusia',
    ],
    micam: 'MICAM Milano',
    brazilianFootwear: 'Brazilian Footwear',
  },
  about: {
    eyebrow: 'Nuestra Historia',
    title: 'Somos Killana',
    paragraphs: [
      'Killana nació dentro de la tradición calzadista gaúcha, en la ciudad de Três Coroas, inicialmente dedicada a la modalidad Private Label, ofreciendo soporte y productos de alta calidad para diferentes marcas alrededor del mundo. Este camino fue esencial para consolidar nuestra experiencia, siempre fundamentada en valores humanos, relaciones de confianza y respeto en cada etapa de la producción.',
      'Con el tiempo, descubrimos nuestro ADN propio y maduramos hacia el diseño autoral, traduciendo nuestra experiencia en colecciones creativas que valoran el trabajo manual y la autenticidad. Cada par de zapatos lleva el cuidado de manos que cortan, cosen, pegan y montan, un proceso artesanal que refleja dedicación y excelencia.',
      'Nuestro compromiso va más allá de la estética. Trabajamos con cuero de origen rastreado, asegurando un estándar elevado de calidad y responsabilidad. Poseemos certificaciones como el sello ABVTEX, que garantiza relaciones de trabajo justas, y el sello SICTC, que atestigua nuestra responsabilidad en todo el ciclo de la materia prima, incluyendo la disposición y reciclaje adecuados de los residuos. Además, seguimos todas las normas que garantizan un ambiente seguro y saludable para nuestros colaboradores.',
      'Ahora, Killana avanza en una nueva etapa: una marca que une diseño brasileño, responsabilidad socioambiental y excelencia artesanal, creando calzado femenino que expresa estilo, libertad y sofisticación en cada detalle.',
    ],
    timeline: [
      {
        year: '1997',
        title: 'Origen en Três Coroas',
        description:
          'Fundación en la tradición calzadista gaúcha, con enfoque en excelencia y relaciones de confianza.',
      },
      {
        year: 'Calidad certificada',
        title: 'Actuación Private Label',
        description:
          'Consolidación internacional produciendo para marcas alrededor del mundo con los más altos estándares de calidad.',
      },
      {
        year: '2023',
        title: 'Diseño Autoral',
        description:
          'Desarrollo del ADN propio de la marca con colecciones creativas que celebran el trabajo manual.',
      },
      {
        year: 'Certificaciones',
        title: 'ABVTEX & SICTC',
        description:
          'Conquista de los sellos que atestiguan responsabilidad social y ambiental en toda la cadena productiva.',
        badges: ['ABVTEX', 'SICTC'],
      },
      {
        year: 'Hoy',
        title: 'Expansión de la marca',
        description:
          'En 2025 lanzamos nuestra tienda en línea y comenzamos a posicionar nuestra marca en el mercado de la moda nacional e internacional.',
      },
    ],
  },
  certifications: {
    eyebrow: 'Diferenciales',
    title: 'Certificaciones & Excelencia',
    items: [
      {
        type: 'icon',
        title: 'Producción Artesanal',
        description:
          'Cada par pasa por las manos de artesanos especializados en un proceso cuidadoso y dedicado.',
      },
      {
        type: 'icon',
        title: 'Cuero Rastreado',
        description:
          'Materias primas de origen certificado con trazabilidad completa en toda la cadena.',
      },
      {
        type: 'seal',
        seal: 'ABVTEX',
        title: 'Certificación ABVTEX',
        description:
          'Sello Oro que garantiza relaciones de trabajo justas y condiciones dignas para todos los colaboradores.',
      },
      {
        type: 'seal',
        seal: 'SICTC',
        title: 'Certificación SICTC',
        description:
          'Responsabilidad en todo el ciclo de la materia prima, incluyendo disposición y reciclaje de residuos.',
      },
      {
        type: 'icon',
        title: 'Producción Sostenible',
        description:
          'Gestión de residuos y procesos que minimizan el impacto ambiental en cada etapa.',
      },
      {
        type: 'icon',
        title: 'Exportación Internacional',
        description:
          'Presencia consolidada en los principales mercados globales de moda y calzado de lujo.',
      },
    ],
  },
  cta: {
    eyebrow: 'Alianzas Comerciales',
    title: 'Lleva la firma Killana a tu negocio',
    text: 'Conoce nuestras colecciones y conversa con el equipo comercial sobre oportunidades de colaboración.',
    button: 'Solicitar Catálogo',
    contact: 'Hablar con comercial',
    catalog: 'Solicitar catálogo',
    representative: 'Representante',
    phone: 'Teléfono',
    region: 'Región',
    internalTeam: 'EQUIPO INTERNO / KURT',
  },
  footer: {
    tagline: 'Producción artesanal de calzado femenino',
    location: 'Três Coroas - Rio Grande do Sul - Brasil',
    institutional: 'Institucional',
    commercial: 'Comercial',
    social: 'Redes Sociales',
    links: {
      about: 'Sobre la Marca',
      production: 'Compromiso Killana',
      history: 'Nuestra Historia',
      certifications: 'Certificaciones',
      global: 'Presencia Global',
    },
    rights: 'Todos los derechos reservados.',
    partner: 'Socia de',
  },
  whatsapp: {
    label: 'WhatsApp',
    floatLabel: 'Contáctanos por WhatsApp',
  },
};
