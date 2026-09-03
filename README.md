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

---

## How to Download & Install Theme on Ghost CMS 6

If you want to use this theme on your Ghost website without setting up code or development tools, follow these step-by-step instructions:

### Step 1: Download Theme Zip File

1. Open the latest releases page in your browser:  
   👉 **[https://github.com/frontendweb3/pulse/releases/latest](https://github.com/frontendweb3/pulse/releases/latest)**
2. Scroll down to the **Assets** section at the bottom of the latest release.
3. Click on the `.zip` file (e.g., `pulse-1.0.0.zip` or `pulse.zip`) to save it to your computer.

> 💡 **Important**: Do **NOT** unzip or extract the downloaded file. Ghost CMS requires the theme file as a compressed `.zip` file.

### Step 2: Upload & Activate in Ghost CMS 6

1. Log into your Ghost Admin Dashboard (e.g., `https://yourdomain.com/ghost`).
2. Click the **Settings** icon (⚙️ gear icon located in the bottom-left corner of the sidebar).
3. Select **Site design** (or **Design**).
4. Click **Change theme** located at the bottom-left of the design sidebar.
5. Click the **Upload theme** button in the top-right corner.
6. Drag and drop your downloaded `pulse-1.0.0.zip` file into the upload box (or click to browse and select the file from your computer).
7. Click **Activate** to apply the Pulse theme to your Ghost site.

---

## Developer Quick Start & Customization

If you want to customize the theme source code or develop new features locally:

### Prerequisites

- Node.js 22+ and `pnpm` installed globally
- A local or remote Ghost instance (v6.0.0 or higher)

### Setup & Development

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

   This starts the Vite dev server on `http://localhost:5173`. Open your local Ghost site at `http://localhost:2368` to view live changes.

4. Build production assets & generate release zip:

   ```bash
   pnpm build
   ```

   This compiles optimized assets into `assets/dist/` and generates `pulse.zip` in the root directory.

### Local Development Symlink

1. Symlink the theme folder into your local Ghost installation:

   ```bash
   ln -s /path/to/pulse /path/to/ghost/content/themes/pulse
   ```

2. Restart Ghost:

   ```bash
   ghost restart
   ```

3. Open Ghost Admin (`http://localhost:2368/ghost`), go to **Settings** -> **Site design** -> **Change theme**, and activate **Pulse**.

---

## How Hot Module Replacement (HMR) Works

- **Client Injection**: `default.hbs` automatically detects `localhost` / `127.0.0.1` and injects Vite's client script (`@vite/client`).
- **Template Reloads (`.hbs`)**: When you edit any `.hbs` Handlebars template, the custom `ghostHmrPlugin` in `vite.config.ts` invalidates Vite's module graph (re-scanning Tailwind v4 classes) and sends a full-reload signal to your browser.
- **Instant CSS & JS Updates**: Styling and JS changes update instantly in the browser without full page refreshes.

---

## Syntax Highlighting (Highlight.js)

Code syntax highlighting is pre-configured for code blocks inside posts and pages.

- Loaded dynamically on post and page templates (`{{#is "post, page"}}`).
- **Copy Button**: Powered by `highlightjs-copy` for one-click code snippet copying.
- **Supported Languages**: `bash`, `css`, `javascript`, `typescript`, `json`, `xml/html`.

---

## Project Structure

- **Templates**: `author.hbs`, `default.hbs`, `index.hbs`, `post.hbs`, `page.hbs`, `tag.hbs`, `error-404.hbs`
- **Partials**: `partials/` (header, footer, navigation, pagination, cards, share, show-comment)
- **Components**: `partials/components/icon.hbs` (Reusable SVG icon helper powered by Lucide)
- **Assets**: `assets/css/`, `assets/js/`, compiled by Vite into `assets/dist/`
- **Build Config**: `vite.config.ts`

---

## Scripts

- `pnpm dev` — Starts Vite HMR dev server on port 5173 for live reloading.
- `pnpm build` — Compiles production assets and generates `pulse.zip`.
- `pnpm test` — Validates Ghost CMS 6 compatibility using `gscan`.
- `pnpm screenshot` — Captures full-page screenshots of all routes across mobile, tablet, and desktop viewports.

---

## License

Released under the MIT License (see [LICENSE.md](file:///home/officialrajdeepsingh/frontendweb/ghost-theme/pulse/LICENSE.md)).
