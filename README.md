# Killana — Website Institucional

Website institucional premium da marca **Killana**, fabricante brasileira de calçados femininos artesanais de luxo.

Construído com **Astro**, **TypeScript** e **Tailwind CSS**, com suporte multi-idioma (PT, EN, ES) e SEO internacional.

## Requisitos

- Node.js 18+
- npm 9+

## Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd killana

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:4321`

## Scripts

| Comando         | Descrição                        |
|-----------------|----------------------------------|
| `npm run dev`   | Servidor de desenvolvimento      |
| `npm run build` | Build de produção em `/dist`     |
| `npm run preview` | Preview do build local         |
| `npm run check` | Verificação de tipos Astro       |

## Estrutura do Projeto

```
src/
├── components/     # Componentes Astro reutilizáveis
├── layouts/        # Layouts base
├── pages/          # Rotas (PT, EN, ES)
├── content/        # Content collections (blog, catálogo)
├── data/           # Dados estáticos e configurações
├── i18n/           # Traduções por idioma
└── styles/         # Estilos globais Tailwind
```

## Idiomas

| Idioma    | URL              |
|-----------|------------------|
| Português | `/`              |
| Inglês    | `/en/`           |
| Espanhol  | `/es/`           |

Cada idioma possui rota independente com conteúdo estático — sem troca dinâmica via JavaScript.

## SEO

- `hreflang` e URLs canônicas
- Open Graph e Twitter Cards
- Schema.org (Organization + LocalBusiness)
- `sitemap.xml` gerado automaticamente
- `robots.txt` em `/public`

## Deploy

Consulte [README-DEPLOY.md](./README-DEPLOY.md) para instruções de deploy no Netlify.

## Evolução Futura

O projeto está preparado para:

- Blog institucional (`src/content/blog/`)
- Catálogo via CMS (`src/content/catalog/`)
- Área de representantes
- Integração com CMS headless

## Licença

© Killana Calçados. Todos os direitos reservados.
