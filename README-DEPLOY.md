# Deploy no Netlify — Killana

Guia para publicar o website institucional Killana no Netlify (plano gratuito).

## Pré-requisitos

- Conta no [Netlify](https://www.netlify.com/)
- Repositório no GitHub, GitLab ou Bitbucket

## Opção 1: Deploy via Git (recomendado)

1. Faça push do projeto para o repositório remoto
2. Acesse [app.netlify.com](https://app.netlify.com/) → **Add new site** → **Import an existing project**
3. Conecte o repositório Git
4. Configure o build:

| Campo            | Valor           |
|------------------|-----------------|
| Build command    | `npm run build` |
| Publish directory| `dist`          |
| Node version     | `18` ou superior |

5. Clique em **Deploy site**

O arquivo `netlify.toml` na raiz já contém essas configurações.

## Opção 2: Deploy manual (CLI)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build local
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

## Domínio personalizado

1. No painel Netlify: **Domain settings** → **Add custom domain**
2. Configure `killana.com.br` (ou subdomínio desejado)
3. Atualize os DNS conforme instruções do Netlify
4. Ative HTTPS (automático via Let's Encrypt)

## Variáveis de ambiente

Este projeto não requer variáveis de ambiente para funcionar. Caso adicione integrações futuras (CMS, analytics), configure em:

**Site settings** → **Environment variables**

## Verificações pós-deploy

- [ ] `/` carrega em português
- [ ] `/en/` carrega em inglês
- [ ] `/es/` carrega em espanhol
- [ ] Seletor de idiomas redireciona corretamente
- [ ] `https://seu-dominio.com/sitemap-index.xml` acessível
- [ ] `https://seu-dominio.com/robots.txt` acessível
- [ ] Botões WhatsApp abrem `https://wa.me/555198533616`
- [ ] Lighthouse Performance, SEO, Accessibility > 95

## Atualizar URL do site

Se o domínio for diferente de `killana.com.br`, atualize em:

- `astro.config.mjs` → `site`
- `src/data/site.ts` → `SITE_URL`
- `public/robots.txt` → `Sitemap`

## Suporte

Para dúvidas sobre o projeto, consulte o [README.md](./README.md).
