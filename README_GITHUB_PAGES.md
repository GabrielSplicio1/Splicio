# Deploy no GitHub Pages (Vite + React)

Este projeto já está preparado para publicar no GitHub Pages.

## Requisitos
- Node.js (LTS)

## Rodar local
```bash
npm install
npm run dev
```

## Publicar no GitHub Pages
1) Crie um repositório no GitHub e suba este projeto (commit/push).
2) No terminal, dentro da pasta do projeto:
```bash
npm install
npm run deploy
```
3) No GitHub: Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages / (root)
- Save

A URL ficará no formato:
https://SEU-USUARIO.github.io/NOME-DO-REPO/

## Observação
O Vite está com base './' para funcionar em subpastas (GitHub Pages).
