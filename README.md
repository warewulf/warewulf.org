# warewulf.org

The Warewulf project website, built with [Gatsby](https://www.gatsbyjs.com/) and [Tailwind CSS](https://tailwindcss.com/).

```shell
npm install
npm run develop   # http://localhost:8000
npm run build     # production build into public/
```

## Layout

- `src/pages/`: home, docs index, help, news list, 404, and `{MarkdownRemark.frontmatter__slug}.js` (renders every markdown page and news post at its frontmatter `slug`)
- `src/posts/`: news posts (frontmatter: `slug`, `date`, `title`)
- `src/static-pages/`: `/about` and `/charter`
- `src/data/site.js`: shared links, nav, and the latest docs version. Update `LATEST_DOCS` and `LATEST_RELEASE` when a new release series ships.
- `static/docs/`: generated documentation, published by GitHub Actions. Do not edit by hand.

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
