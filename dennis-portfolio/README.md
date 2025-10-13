Dennis Muiruri Mbugua — Portfolio
=================================

Tech stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 + Framer Motion + next-themes + Lucide icons.

Getting Started
---------------

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` to view the site.

Project Structure
-----------------

- `src/app/layout.tsx`: Global layout, SEO metadata, theme provider.
- `src/app/page.tsx`: Home page wiring all sections.
- `src/app/globals.css`: Tailwind + theme tokens (colors, fonts, background).
- `src/sections/*`: Modular sections (Hero, About, Skills, Projects, Experience, Contact, Footer).
- `src/components/ThemeToggle.tsx`: Dark/Light mode toggle.

Customization
-------------

- Text/content: Edit components under `src/sections/*`.
- Colors: Update CSS variables in `src/app/globals.css` (`--background`, `--accent`, etc.).
- Fonts: Managed via `next/font` in `src/app/layout.tsx` (Inter, Poppins).
- Social links: Update links in `src/sections/Contact.tsx`.
- CV: Place your file at `public/Dennis_Muiruri_CV.pdf` or update the link in `src/sections/Hero.tsx`.
- Formspree: Replace `yourFormId` in `src/sections/Contact.tsx` with your Formspree form ID.

Deployment
----------

- Vercel (recommended): Push to GitHub, import repo in Vercel. No extra config needed.
- Netlify: Use Next.js support. Build command: `npm run build`, publish directory: `.next`.

SEO
---

- SEO metadata is configured in `src/app/layout.tsx`. Update `metadataBase`, `title`, `description`, and `openGraph` fields.

License
-------

MIT — feel free to use this as a starter and customize.
