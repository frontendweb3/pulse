# Pulse Ghost CMS Theme

A minimal, high-performance Ghost CMS theme built with modern tools (Vite + Tailwind CSS 4 + Alpine.js) to deliver a sleek, dark-mode-first publishing experience.

## Features

- **Vite & HMR**: Hot Module Replacement for Handlebars (`.hbs`), CSS/Tailwind, and JavaScript assets
- **Tailwind CSS 4**: Utility-first styling with `@tailwindcss/typography` and sleek design tokens
- **Alpine.js**: Lightweight, reactive UI interactions for comments, menus, and collapse components
- **Code Syntax Highlighting**: Automatic code block highlighting via `highlight.js` with a built-in copy button (`highlightjs-copy`)
- **Lucide Icons**: Scalable SVG icons initialized dynamically
- **Automatic Image Optimization**: Integrated `Sharp` image optimization pipeline via `vite-plugin-image-optimizer`
- **One-Command Packaging**: Exports a production-ready `.zip` theme archive compatible with Ghost 6.x

## Prerequisites

- Node.js 22+ and `pnpm` installed globally
- A Ghost CMS instance (v6.0.0 or higher)

## Quick Start (Development)

1. Clone the repository:

   ```bash
   git clone https://github.com/frontendweb3/pulse.git
   cd pulse
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start development server with Hot Module Replacement (HMR):

   ```bash
   pnpm dev
   ```

   This starts the Vite dev server on `http://localhost:5173`. Open your local Ghost site at `http://localhost:2368` to see live updates.

4. Build production assets and package theme:

   ```bash
   pnpm build
   ```

   This compiles assets into `assets/dist/` and generates `pulse.zip` in the root directory.

## Installing Theme in Ghost CMS 6

### Option A: Upload via Ghost Admin UI (Production)

1. Run `pnpm build` in your terminal to generate the `pulse.zip` theme package.
2. Log into your Ghost Admin Dashboard (`https://your-site.com/ghost`).
3. Click on the **Settings** icon (gear icon in bottom-left corner).
4. Navigate to **Site design** -> **Change theme** (or **Design & Branding** -> **Theme**).
5. Click **Upload theme** in the top right.
6. Drag and drop `pulse.zip` (or browse to select `pulse.zip`).
7. Click **Activate** to make Pulse your active theme.

### Option B: Local Development / Symlink

1. Copy or symlink the theme directory into your local Ghost installation's `content/themes/` folder:

   ```bash
   ln -s /path/to/pulse /path/to/ghost/content/themes/pulse
   ```

2. Restart your Ghost CLI instance:

   ```bash
   ghost restart
   ```

3. Go to Ghost Admin (`http://localhost:2368/ghost`), navigate to **Settings** -> **Design**, and activate **Pulse**.

## How Hot Module Replacement (HMR) Works

- **Client Injection**: `default.hbs` automatically detects `localhost` / `127.0.0.1` and injects Vite's client script (`@vite/client`).
- **Template Reloads (`.hbs`)**: When you edit any `.hbs` Handlebars template, the custom `ghostHmrPlugin` in `vite.config.ts` invalidates Vite's module graph (re-scanning Tailwind v4 classes) and sends a full-reload signal to your browser.
- **Instant CSS & JS Updates**: Styling and JS changes update instantly in the browser without full page refreshes.

## Syntax Highlighting (Highlight.js)

Code syntax highlighting is pre-configured for code blocks inside posts and pages.

- Loaded dynamically on post and page templates (`{{#is "post, page"}}`).
- **Copy Button**: Powered by `highlightjs-copy` for one-click code snippet copying.
- **Supported Languages**: `bash`, `css`, `javascript`, `typescript`, `json`, `xml/html`.

## Project Structure

- **Templates**: `author.hbs`, `default.hbs`, `index.hbs`, `post.hbs`, `page.hbs`, `tag.hbs`, `error-404.hbs`
- **Partials**: `partials/` (header, footer, navigation, pagination, cards, share, show-comment)
- **Components**: `partials/components/icon.hbs` (Reusable SVG icon helper powered by Lucide)
- **Assets**: `assets/css/`, `assets/js/`, compiled by Vite into `assets/dist/`
- **Build Config**: `vite.config.ts`

## Scripts

- `pnpm dev` — Starts Vite HMR dev server on port 5173 for live reloading.
- `pnpm build` — Compiles production assets and generates `pulse.zip`.
- `pnpm test` — Validates Ghost CMS 6 compatibility using `gscan`.
- `pnpm screenshot` — Captures full-page screenshots of all routes across mobile, tablet, and desktop viewports.

## License

Released under the MIT License (see [LICENSE.md](file:///home/officialrajdeepsingh/frontendweb/ghost-theme/pulse/LICENSE.md)).
