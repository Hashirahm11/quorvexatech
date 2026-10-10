# QuorvexaTech website

React 19 + Vite + Tailwind CSS v4 + React Router. Five pages (Home, About, Services, Projects, Contact), plus Privacy and 404.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into /dist
npm run preview    # preview the production build
```
Requires Node.js 20.19+ (22 LTS recommended).

## Starting from scratch instead (same stack)
```bash
npm create vite@latest quorvexatech -- --template react
cd quorvexatech
npm install react-router-dom react-icons
npm install -D tailwindcss @tailwindcss/vite
```
Then add `tailwindcss()` to `vite.config.js` and put `@import "tailwindcss";` at the top of `src/index.css` (Tailwind v4: no tailwind.config.js or postcss.config.js needed).

## Where to edit things
| What | File |
|---|---|
| Email, WhatsApp, social + freelancing links, portfolio link, map | `src/config/siteConfig.js` |
| Projects (portfolio) | `src/data/projects.js` |
| Services | `src/data/services.js` |
| Budget brackets, timelines, website types | `src/data/budgetOptions.js` |
| FAQs / process steps | `src/data/faqs.js`, `src/data/process.js` |
| Page photos | `src/config/images.js` |

Values containing `YOUR_` or `example.com` are treated as placeholders: icons show greyed-out and are not clickable.

## Contact form
- **Netlify Forms (default):** works automatically after deploying to Netlify. The static form in `index.html` registers it. Enable email notifications in Netlify: Site configuration > Forms > Form notifications.
- **Formspree (optional):** create a form at formspree.io, copy the endpoint, and set `VITE_FORMSPREE_ENDPOINT` (in `.env` locally, and in Netlify under Site configuration > Environment variables). Rebuild after changing it.
- Locally (`npm run dev`) with no Formspree endpoint, the form shows an honest "not available locally" message instead of a fake success.

## Deploy to Netlify
1. Push the project to GitHub, then Netlify > Add new site > Import from Git.
2. Build command: `npm run build`. Publish directory: `dist`. (Both are also in `netlify.toml`.)
3. SPA fallback: `public/_redirects` contains `/*  /index.html  200` so refreshing /about etc. works.
4. Add your domain under Domain management; HTTPS is automatic.
