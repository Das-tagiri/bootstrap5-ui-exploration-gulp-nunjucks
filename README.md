# Bootstrap5 UI Exploration — Nunjucks + Gulp + BrowserSync (SkyForge)

This project is a ready-to-use setup for Internship Task 2 (Bootstrap 5 UI Exploration & Page Design).
It uses **Nunjucks** for templating, **Gulp** as the task runner and **BrowserSync** for live reload.

## Quick start

1. Install Node.js (v14+ recommended)
2. Open project folder in terminal and install:
   ```
   npm install
   ```
3. Start development (build + watch + live server):
   ```
   npm start
   ```
   This runs `gulp` which builds files into `dist/` and serves them at `http://localhost:3000`.

4. Build for production:
   ```
   npm run build -- --prod
   ```

## Project structure

```
src/
  templates/
    layout.njk        # base layout
    pages/
      index.njk
      about.njk
      contact.njk
  assets/
    css/
      style.css
    js/
      script.js
    images/
dist/                # generated site (deploy this)
gulpfile.js
package.json
```

## How it works

- Edit templates in `src/templates/` (Nunjucks syntax)
- CSS/JS in `src/assets/`
- Gulp compiles templates and copies assets to `dist/`
- Serve `dist/` locally with BrowserSync during development

## Deployment

Deploy the `dist/` folder to GitHub Pages or Netlify. For GitHub Pages, push `dist/` to `gh-pages` branch or use actions.
