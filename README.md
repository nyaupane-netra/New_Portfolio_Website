# Netra Nyaupane — Portfolio

Personal portfolio for Netra Nyaupane, Computer Science student at Fisk University.
Built with React 19, TypeScript, Vite, Tailwind CSS 4, and Motion.

## Run locally

Prerequisite: Node.js 20+

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command           | What it does                      |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the dev server on port 3000 |
| `npm run build`   | Production build into `dist/`     |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Type-check with `tsc --noEmit`    |

## Editing content

- `src/data/site.ts` — name, email, location, social links, GPA, and the year you started coding
- `src/data/projects.ts` — featured projects (omit `liveUrl` or `githubUrl` to hide that button)
- `src/components/` — one file per page section

## Deployment

Deployed on Vercel. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).
