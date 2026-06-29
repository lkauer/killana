import type { Translation } from './types';
import { COLLECTION_IMAGES } from '@/data/collection-images';
import { GLOBAL_COUNTRIES } from '@/data/site';

export const pt: Translation = {
  locale: 'pt',
  langTag: 'pt-BR',
  path: '/',
  meta: {
    title: 'Killana — Calçados Femininos Artesanais de Luxo',
    description:
      'Calçados femininos artesanais produzidos no Brasil. Design autoral, produção consciente e presença internacional para lojistas e distribuidores.',
    ogTitle: 'Killana — Made by Hand',
    ogDescription:
      'Calçados femininos artesanais de luxo. Design autoral, produção consciente e presença global.',
  },
  nav: [
    { label: 'Coleção', href: '#colecao' },
    { label: 'COMPROMISSO KILLANA', href: '#producao' },
    { label: 'Presença Global', href: '#global' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],
  hero: {
    eyebrow: 'Calçados Femininos de Luxo',
    title: 'Made by Hand',
    text: 'Nossos calçados traduzem a autenticidade, unindo design autoral e um cuidadoso trabalho artesanal. Cada peça nasce de materiais certificados e de procedência sustentável.',
    ctaCollection: 'Conheça a coleção',
    ctaCatalog: 'Solicitar catálogo',
  },
  collection: {
    eyebrow: 'Portfólio',
    title: 'Coleção Atual',
    items: [
      { ...COLLECTION_IMAGES[0], name: 'Scarpin Essencial', category: 'Scarpin', alt: 'Scarpin feminino em couro premium' },
      { ...COLLECTION_IMAGES[1], name: 'Sandália Aura', category: 'Sandália', alt: 'Sandália artesanal em couro' },
      { ...COLLECTION_IMAGES[2], name: 'Mule Nomadic', category: 'Mule', alt: 'Mule em couro com design autoral' },
      { ...COLLECTION_IMAGES[3], name: 'Ankle Boot Winter', category: 'Bota', alt: 'Bota feminina de couro' },
    ],
  },
  authenticity: {
    eyebrow: 'Nossa Essência',
    title: 'Sapatos que celebram a autenticidade',
    paragraphs: [
      'Criados para mulheres que veem a moda como uma extensão de sua identidade, os sapatos Killana são mais do que calçados, são narrativas em forma de design.',
      'Cada linha, cada detalhe artesanal, é pensado para celebrar a autenticidade e a força de quem os usa.',
      'Para mulheres que não seguem tendências, mas as criam. Que não buscam apenas estilo, mas significado.',
    ],
    highlight:
      'Porque o verdadeiro luxo está em peças que contam histórias, refletem essências e inspiram confiança.',
    imageAlt: 'Editorial de moda feminina com calçados Killana',
  },
  production: {
    eyebrow: 'Nosso compromisso',
    title: 'COMPROMISSO KILLANA',
    cards: [
      {
        icon: 'social',
        title: 'Responsabilidade Social',
        description:
          'Respeitamos os consensos globais sobre condições de trabalho, garantindo que todos os nossos colaboradores tenham seus direitos assegurados por lei, além de atuar em um ambiente seguro, saudável e que valoriza cada pessoa que contribui para a nossa jornada.',
      },
      {
        icon: 'environment',
        title: 'Meio Ambiente',
        description:
          'Nos preocupamos com o meio ambiente em cada etapa da nossa produção. Operamos com um sistema de gerenciamento de resíduos que assegura a destinação adequada de cada material, reforçando nosso compromisso com uma produção limpa e sustentável.',
      },
      {
        icon: 'national',
        title: 'Produção Nacional',
        description:
          'Valorizamos a riqueza da nossa região ao priorizar a mão de obra e as matérias-primas locais, contribuindo para o fortalecimento da economia e o desenvolvimento sustentável.',
      },
      {
        icon: 'design',
        title: 'Design',
        description:
          'Nossa equipe de criação combina expertise e olhar atento às tendências da moda para desenvolver coleções elegantes e sofisticadas. Também oferecemos a personalização de calçados para marcas com nossa solução de private label.',
      },
    ],
  },
  global: {
    eyebrow: 'Presença Internacional',
    title: 'We Are Global',
    paragraphs: [
      'Nosso alcance se estende aos principais mercados internacionais.',
      'Atuamos em países como Canadá, Itália, França, Polônia, Estados Unidos, Portugal, Austrália, Rússia e muitos outros, cobrindo as Américas, Europa, Ásia, África e Oceania.',
      'Essa projeção global é fortalecida pela participação em eventos de prestígio, como a MICAM Milano, onde nossas coleções de luxo se destacam e conectam com os maiores players da moda.',
    ],
    partner: 'Somos parceiros do Brazilian Footwear.',
    counters: {
      countries: 'Países atendidos',
      continents: 'Continentes alcançados',
      years: 'Anos de experiência',
    },
    countries: [...GLOBAL_COUNTRIES],
    micam: 'MICAM Milano',
    brazilianFootwear: 'Brazilian Footwear',
  },
  about: {
    eyebrow: 'Nossa História',
    title: 'Somos a Killana',
    paragraphs: [
      'A Killana nasceu dentro da tradição calçadista gaúcha, na cidade de Três Coroas, inicialmente dedicada à modalidade Private Label, oferecendo suporte e produtos de alta qualidade para diferentes marcas ao redor do mundo. Esse caminho foi essencial para consolidar nossa expertise, sempre fundamentada em valores humanos, relações de confiança e respeito em cada etapa da produção.',
      'Com o tempo, descobrimos nosso DNA próprio e amadurecemos em direção ao design autoral, traduzindo nossa experiência em coleções criativas que valorizam o trabalho manual e a autenticidade. Cada par de sapatos carrega o cuidado de mãos que cortam, costuram, colam e montam, um processo artesanal que reflete dedicação e excelência.',
      'Nosso compromisso vai além da estética. Trabalhamos com couro de origem rastreada, assegurando um padrão elevado de qualidade e responsabilidade. Possuímos certificações como o selo ABVTEX, que garante relações de trabalho justas, e o selo SICTC, que atesta nossa responsabilidade em todo o ciclo da matéria-prima, incluindo a destinação e reciclagem adequada dos resíduos. Além disso, seguimos todas as normas que garantem um ambiente seguro e saudável para nossos colaboradores.',
      'Agora, a Killana segue em uma nova etapa: uma marca que une design brasileiro, responsabilidade socioambiental e excelência artesanal, criando calçados femininos que expressam estilo, liberdade e sofisticação em cada detalhe.',
    ],
    timeline: [
      {
        year: '1997',
        title: 'Origem em Três Coroas',
        description:
          'Fundação na tradição calçadista gaúcha, com foco em excelência e relações de confiança.',
      },
      {
        year: 'qualidade atestada',
        title: 'Atuação Private Label',
        description:
          'Consolidação internacional produzindo para marcas ao redor do mundo com os mais altos padrões de qualidade.',
      },
      {
        year: '2023',
        title: 'Design Autoral',
        description:
          'Desenvolvimento do DNA próprio da marca com coleções criativas que celebram o trabalho manual.',
      },
      {
        year: 'Certificações',
        title: 'ABVTEX & SICTC',
        description:
          'Conquista dos selos que atestam responsabilidade social e ambiental em toda a cadeia produtiva.',
        badges: ['ABVTEX', 'SICTC'],
      },
      {
        year: 'Hoje',
        title: 'Expansão da marca',
        description:
          'Em 2025 lançamos nosso e-commerce e passamos a posicionar nossa marca no mercado da moda nacional e internacional.',
      },
    ],
  },
  certifications: {
    eyebrow: 'Diferenciais',
    title: 'Certificações & Excelência',
    items: [
      {
        type: 'icon',
        title: 'Produção Artesanal',
        description:
          'Cada par passa pelas mãos de artesãos especializados em um processo cuidadoso e dedicado.',
      },
      {
        type: 'icon',
        title: 'Couro Rastreado',
        description:
          'Matérias-primas de origem certificada com rastreabilidade completa em toda a cadeia.',
      },
      {
        type: 'seal',
        seal: 'ABVTEX',
        title: 'Certificação ABVTEX',
        description:
          'Selo ouro que garante relações de trabalho justas e condições dignas para todos os colaboradores.',
      },
      {
        type: 'seal',
        seal: 'SICTC',
        title: 'Certificação SICTC',
        description:
          'Responsabilidade em todo o ciclo da matéria-prima, incluindo destinação e reciclagem de resíduos.',
      },
      {
        type: 'icon',
        title: 'Produção Sustentável',
        description:
          'Gestão de resíduos e processos que minimizam o impacto ambiental em cada etapa.',
      },
      {
        type: 'icon',
        title: 'Exportação Internacional',
        description:
          'Presença consolidada nos principais mercados globais de moda e calçados de luxo.',
      },
    ],
  },
  cta: {
    eyebrow: 'Parcerias Comerciais',
    title: 'Leve a assinatura Killana para o seu negócio',
    text: 'Conheça nossas coleções e converse com o time comercial sobre oportunidades de parceria.',
    button: 'Solicitar Catálogo',
    contact: 'Vendas mercado interno',
    exportSales: 'SALES EXPORT',
    catalog: 'Solicitar catálogo',
    representative: 'Representante',
    phone: 'Telefone',
    region: 'Região',
    internalTeam: 'EQUIPE INTERNA / KURT',
  },
  footer: {
    tagline: 'Produção artesanal de calçados femininos',
    location: 'Três Coroas - Rio Grande do Sul - Brasil',
    institutional: 'Institucional',
    commercial: 'Comercial',
    social: 'Redes Sociais',
    links: {
      about: 'Sobre a Marca',
      production: 'COMPROMISSO KILLANA',
      history: 'Nossa História',
      certifications: 'Certificações',
      global: 'Presença Global',
    },
    rights: 'Todos os direitos reservados.',
    partner: 'Parceira',
  },
  whatsapp: {
    label: 'WhatsApp',
    floatLabel: 'Fale conosco pelo WhatsApp',
  },
};
