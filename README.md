# Safe Redact Landing Page

Marketing website for [Safe Redact](https://github.com/Safe-Redact), the offline AI-powered redaction tool for video, audio, images, and documents.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3
- **Deployment:** Static export (Vercel, Netlify, or any static host)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (font, metadata, JSON-LD)
│   ├── page.tsx            # Landing page (composes all sections)
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # Tailwind directives + animations
├── components/
│   ├── ui/                 # Reusable UI primitives
│   │   ├── AnimateOnScroll # Scroll-triggered animation wrapper
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Heading.tsx
│   │   ├── Input.tsx
│   │   └── SectionWrapper.tsx
│   ├── sections/           # Page sections (each independently reusable)
│   │   ├── Hero.tsx
│   │   ├── MetricsBar.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FileTypes.tsx
│   │   ├── UseCases.tsx
│   │   ├── Benefits.tsx
│   │   ├── Validation.tsx
│   │   ├── Comparison.tsx
│   │   ├── Faq.tsx
│   │   └── Waitlist.tsx
│   └── layout/             # Layout components
│       ├── Header.tsx
│       ├── MobileNav.tsx
│       └── Footer.tsx
├── content/                # Structured content (separated from presentation)
│   ├── site.ts             # Site config and nav links
│   ├── hero.ts
│   ├── features.ts
│   ├── how-it-works.ts
│   ├── file-types.ts
│   ├── use-cases.ts
│   ├── benefits.ts
│   ├── metrics-bar.ts
│   ├── comparison.ts
│   ├── faq.ts
│   └── metadata.ts
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
├── types/
│   └── index.ts            # Shared TypeScript interfaces
└── assets/                 # Static assets
```

## Content Management

All marketing copy lives in `src/content/` as structured TypeScript files. This separates content from presentation and makes future CMS integration straightforward.

To update any section's text, edit the corresponding file in `src/content/`. No component changes needed.

## SEO

- Metadata API with Open Graph and Twitter cards
- JSON-LD structured data (`SoftwareApplication` schema)
- Dynamic sitemap and robots.txt
- Semantic HTML with proper heading hierarchy
- All images optimized with `next/image`

## Animations

Scroll-triggered animations use the `AnimateOnScroll` component (IntersectionObserver-based). CSS keyframes are defined in `globals.css`. The `animate-stagger` class cascades child animations with 100ms delays.

## License

MIT
