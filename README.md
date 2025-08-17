# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1f8eefc1-7a1a-4930-8451-0a1bbe430dbd

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1f8eefc1-7a1a-4930-8451-0a1bbe430dbd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**


**Use GitHub Codespaces**


## What technologies are used for this project?

This project is built with:


## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/1f8eefc1-7a1a-4930-8451-0a1bbe430dbd) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# calendar-journal-web

Marketing site for Calendar Journal built with Vite + React + TypeScript + Tailwind (shadcn/ui components).

## Local Development

Install deps (using bun, npm or pnpm) and run dev server:

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

Output is in `dist/`.

## Deployment (GitHub Pages)

This repo is configured for deployment to GitHub Pages (project site) under the path `/calendar-journal-web/`.

Changes introduced:

- `vite.config.ts` sets default `base: '/calendar-journal-web/'` but you can override with env var `VITE_GH_PAGES_BASE` (ensure trailing slash)
- `BrowserRouter` in `src/App.tsx` uses `basename="/calendar-journal-web"`
- `public/404.html` handles deep-link refreshes on GitHub Pages for SPA routing

### Steps
1. Commit and push changes to `main`.
2. Create a GitHub Actions workflow (e.g. `.github/workflows/deploy.yml`) that runs `bun install` (or npm), `bun run build`, and deploys `dist` to the `gh-pages` branch.
3. Enable GitHub Pages in repo settings: Source = `gh-pages` branch, root `/`.

### Custom Domain
If you later use a custom domain with a `CNAME`, set `base: '/'` in `vite.config.ts` and remove the `basename` prop from `BrowserRouter`.

## License
Proprietary – All rights reserved.
