# Artem Yuditskiy — Portfolio

A responsive one-page portfolio for a Python Backend & Automation Developer. The site is dependency-free and uses semantic HTML, CSS and a small amount of JavaScript.

## Local development

From the project directory, start a static server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

There is no build step. The same files can be deployed directly to any static host.

## Project structure

- `index.html` — page structure, SEO metadata and SVG sprite.
- `styles.css` — visual system and responsive layouts.
- `app.js` — contact configuration and data for services, projects and tech stack.
- `assets/` — optimized project visuals and the social preview image.
- `_headers` — security headers applied by Cloudflare Pages.
- `.gitignore` — local files excluded from the repository.

## Editing

- Update the name, Telegram URL and GitHub URL at the top of `app.js` in the `portfolio` object.
- Update service, project and stack content in the same object.
- If the full name or metadata changes, also update the static fallback values and metadata in `index.html`.
- Replace the optimized project images in `assets/`, keeping these filenames:
  - `crypto-activity-monitor.webp`
  - `crypto-activity-monitor-alerts.webp`
  - `crypto-market-alert-hub.webp`
  - `crypto-market-alert-hub-mini-app.webp`
  - `ai-monitoring-intelligence.webp`

Project images below the fold use native lazy loading. The WebP files are lossless so small UI text stays crisp.

## Deploy to Cloudflare Pages

1. Create an empty private GitHub repository, then initialize and push this project:

   ```bash
   git init -b main
   git add .
   git commit -m "Initial portfolio"
   git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
3. Authorize access to the private repository and use these settings:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `exit 0`
   - Build output directory: `/`
   - Root directory: leave blank
4. Select **Save and Deploy**.

No environment variables, Node.js dependencies, Pages Functions or build artifacts are required. Cloudflare will deploy the repository root as a static site. Future pushes to `main` will trigger production deployments; other branches can be used for preview deployments.

After connecting a custom domain, replace the relative social image URLs in `index.html` with the final absolute HTTPS URL for the most reliable link previews.
