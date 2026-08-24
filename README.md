# AMA Villas da Barra — Web

Redesign e evolução do site da **AMA — Associação de Moradores da Rua Aroazes / Villas da Barra**.

## Objetivo

Criar uma experiência mais institucional, moderna e simples de navegar, preservando as funcionalidades já existentes e reorganizando a Home conforme o novo briefing.

## Escopo inicial da Home

- Header e menu compacto
- Banner institucional
- Acessos rápidos
- Próximos eventos
- Últimas notícias
- Parceiros
- AMA Lazer
- Retrospectiva da AMA
- WhatsApp e redes sociais
- Footer institucional

## Stack

- React 19
- Vite 7
- CSS responsivo sem framework

## Executando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Deploy

O projeto está preparado para publicação automática no **GitHub Pages** por meio do workflow `.github/workflows/deploy-pages.yml`.

Todo push na branch `main` dispara o build do Vite e o deploy da pasta `dist`.

Site esperado:

`https://doistechti.github.io/doistech-villas-da-barra-web/`

## Status

Primeira implementação mockada do redesign. Conteúdos, links, integrações e dados ainda serão conectados às fontes reais do site atual.

## Observação

As imagens presentes em `public/mock/` são mockups gerados para orientar o redesign visual e deverão ser substituídos ou validados antes da publicação final.
