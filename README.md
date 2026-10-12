# Maternidade Reborn Dudinha Hikari

Landing page responsiva em React + Vite + TypeScript. Identidade clean, fundo branco, sem gradientes de interface e com a **logomarca original** em `public/images/logo.jpg`.

## Iniciar

```bash
npm install
npm run dev
```

## Produção

```bash
npm run build
npm run preview
```

## Antes de publicar (IMPORTANTE)

1. **Fotografias:** substitua os arquivos SVG demonstrativos em `public/images/bebes/` por fotos reais e atualize os caminhos no `src/App.tsx`. Os SVG são apenas placeholders, não representam produtos reais.
2. **WhatsApp:** informe o número real em `src/config.ts` no formato `55DDDNÚMERO`, somente dígitos. Enquanto não configurado, o link usa um e-mail de exemplo que **não é um contato válido da empresa**.
3. **Instagram:** altere o endereço `https://instagram.com/` no rodapé para o perfil oficial.
4. **Conteúdo:** revise textos institucionais, condições comerciais, disponibilidade, entrega e FAQ com a empresa antes de publicar. Não foram inventados preços, avaliações ou depoimentos.
5. **SEO:** ajuste metadados em `index.html` e adicione domínio, favicon e imagens sociais quando disponíveis.

## Organização

- `public/images/logo.jpg`: logomarca original, sem alterações.
- `public/images/bebes/`: ilustrações temporárias, a substituir por fotos reais.
- `src/App.tsx`: seções da landing page e conteúdo inicial.
- `src/styles.css`: estilos responsivos.
- `src/config.ts`: contato por WhatsApp.

Sem dependência de backend. A landing page funciona como vitrine institucional com direcionamento para contato.
