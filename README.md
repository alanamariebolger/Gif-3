# NTRO Vite + React + TypeScript (Netlify-ready)

A clean starter that builds on Netlify and can be embedded in Webflow.

## 1) Start fresh with GitHub Desktop
1. **Download** this folder as a ZIP (from ChatGPT), then unzip it.
2. Open **GitHub Desktop** → **File → Add local repository…** → choose the unzipped folder → **Add**.
3. Click **Publish repository** (top bar) → choose a name → **Publish Repository**.

## 2) Connect to Netlify
- In Netlify, click **Add new site → Import an existing project → GitHub**.
- Select the repo you just published.
- Netlify will auto-detect `build: npm run build` and `publish: dist` from `netlify.toml`.
- Deploy. (Node is pinned to 20.17.0; CSP allows Webflow embedding.)

## 3) Embed in Webflow
Drag an **Embed** element and paste:
```html
<iframe
  src="https://YOUR-SITE.netlify.app"
  style="width:100%;min-height:80vh;border:0;"
  loading="lazy"
  allow="fullscreen">
</iframe>
```
Replace `YOUR-SITE` with your Netlify site domain. Publish your Webflow page.

## Dev scripts
```bash
npm install       # first time
npm run dev       # local dev
npm run build     # CI/Netlify uses this
npm run preview   # preview the production build
```
