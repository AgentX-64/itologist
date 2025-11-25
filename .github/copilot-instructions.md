This repository is a small static marketing site for "autonomi" (single-page HTML + small CSS utilities). The goal of these instructions is to help AI coding agents be immediately productive when changing or extending the site.

**High Level**
- **Type:** Single-page static site (root `index.html`) with a small, hand-crafted utility stylesheet (`tailwind.css`).
- **No build system detected:** there is no `package.json`, no bundler, and no Tailwind CLI. `tailwind.css` is a small custom subset of utility classes, not the official generated Tailwind output.
- **External deps:** Google Fonts are loaded from fonts.googleapis.com. No backend services or APIs are integrated in the repository files.

**Where to look (key files)**
- `index.html`: the single entry point. Contains most of the site's markup, inline theme CSS variables (`:root`), component styles, and minimal JS (theme buttons + footer year). See the large `<style>` block near the top for color variables and layout rules.
- `tailwind.css`: a lightweight set of utility classes used across the site (container sizing, spacing, typography helpers). Add new utilities here if you need them.

**Project-specific patterns and conventions**
- Styles: Primary design is implemented inline in `index.html` using CSS variables in `:root`. If you need to change color tokens, edit that `:root` block (e.g. `--accent`, `--accent-2`) — these variables drive across-page visuals.
- Theme toggles: `index.html` defines `.theme-ink` and `.theme-light` classes. Theme buttons in the nav use `data-theme` attributes and set these classes on the `documentElement`. Keep this pattern when adding new themes.
- Structural sections: The page is split into semantic sections with ids: `#services`, `#why`, `#how`, `#work`, `#pricing`, `#contact`. New content should follow this pattern — keep sections self-contained, and use existing classes like `container`, `card`, and `grid-3` for consistent spacing.
- Small JS only: The only JS in the repo (in `index.html`) sets the footer year and toggles theme classes. Prefer minimal vanilla JS for small interactions instead of adding large frameworks.

**Build / dev / run guidance (what actually works right now)**
- No build step is required. The site is static — you can open `index.html` in a browser or serve it via a simple static server. Examples:

  - `python3 -m http.server 8000` (serve current directory at http://localhost:8000)
  - `npx serve` (if `serve` is available locally)

- If you add any pre-processing (SASS, PostCSS, Tailwind CLI), include a minimal README and a `package.json` so future contributors and agents can discover the build commands.

**Editing guidelines & examples**
- To change colors globally: update the `:root` variables near the top of `index.html` and test the theme buttons. Example tokens: `--accent`, `--accent-2`, `--bg`, `--surface`.
- To add a new utility class: extend `tailwind.css` with the utility definition and use the same naming style (utility-prefixed, mobile-first responsive rules). Example: add `.gap-6 { gap: 1.5rem; }` if you need a consistent gap utility.
- To add a new section: create a semantic `<section id="new-section">` and use `<div class="container">` followed by existing layout patterns (`grid-3`, `card`, etc.). Keep styles minimal and reuse existing classes.

**Template snippets to reuse**
- Theme button: `<button class="btn" data-theme="ink">Ink</button>` — the site wire-up listens for `[data-theme]` and toggles `theme-ink` / `theme-light` on the root.
- Card component: `<div class="card"><h3>Title</h3><p class="muted">Description</p></div>` — used throughout for consistent visuals.

**Testing & validation**
- Visual check is primary: open `index.html` in a browser and verify layout, colors, and the theme toggle. There are no unit tests in the repo.
- If adding JS, test in a modern browser and keep code vanilla and small; avoid adding libraries without a clear need.

**When merging or updating this file**
- If a prior `.github/copilot-instructions.md` exists, merge conservatively: keep any project history or unique policy notes, and add or update the sections above rather than replacing wholesale.

If you want, I can also:
- add a small `README.md` with the run commands and a short developer checklist,
- or create a minimal `package.json` + `npm` scripts if you want a local `serve`/`dev` step tracked.

Please review and tell me if any detail is missing or if you want the doc expanded with examples for adding a new page or component.
