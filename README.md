Cheng Wee's Portfolio
=====================

A modern, responsive portfolio built with **React**, **TypeScript**, and **Vite**. It dynamically fetches resume data from GitHub Gists, featuring a dual-view system (Portfolio vs. Full CV), dark mode, and scroll-aware navigation.

🛠️ Tech Stack
--------------

**React 18** - **TypeScript** - **Vite** - **Tailwind CSS** - **Lucide React**

⚡ Quick Start
-------------

```
# 1. Clone & Install
git clone [https://github.com/your-username/cheng-wee-portfolio.git](https://github.com/your-username/cheng-wee-portfolio.git)
cd cheng-wee-portfolio
npm install

# 2. Run Dev Server
npm run dev

```

⚙️ Configuration
----------------

-   **Data Source:** Update `USERNAME` and `GIST_IDS` in `src/services/resumeService.ts` to point to your JSON Resume Gists (one for Portfolio view, one for Full CV).

-   **Styling:** Customize the `primary` and `accent` colors inside the `<script>` tag in `index.html`.

🚀 Deployment (GitHub Pages)
----------------------------

1.  In repository **Settings > Pages**, set **Source** to **GitHub Actions**.

2.  Create `.github/workflows/deploy.yml`:

```
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4

```
