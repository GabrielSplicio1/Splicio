<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1IrvpkjOmoiu5MGAdk47C3-SDMwnRneG4

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


---

## Download premium no Netlify (IMPORTANTE)

Para o link funcionar no Netlify, coloque o arquivo premium em:

`public/downloadpremium/G-XiteWall-Client.zip`

E o free em:

`public/programa_free.exe`

Depois rode:

- `npm install`
- `npm run build`

Faça o deploy da pasta `dist/` (manual) **ou** conecte o repositório no Netlify (ele vai buildar automático via netlify.toml).
