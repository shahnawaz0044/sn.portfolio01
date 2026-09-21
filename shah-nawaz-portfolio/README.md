# Shah Nawaz — Portfolio

A production-ready, fully responsive portfolio website for **Shah Nawaz**, Digital Marketer & Researcher, built with a dark, futuristic, glassmorphism-driven creative-agency aesthetic.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, hover states, dashboard entrance)
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx      # Root layout, fonts, SEO metadata, Open Graph
  page.tsx         # Assembles all sections
  sitemap.ts       # Dynamic sitemap
  globals.css      # Tailwind base + design tokens (glass, gradient text, etc.)
components/
  Navbar.tsx        # Sticky nav with mobile menu
  Hero.tsx           # Hero + animated AI marketing dashboard
  About.tsx
  Expertise.tsx      # Animated expertise cards
  Projects.tsx       # Project showcase cards
  Process.tsx        # Research → Strategy → Create → Optimize → Grow timeline
  Tools.tsx           # Tool badges
  Contact.tsx
  Footer.tsx
  ui/
    Reveal.tsx        # Scroll-reveal wrapper (Framer Motion)
    SectionHeading.tsx
lib/
  utils.ts           # Small classnames helper
public/
  favicon.svg, og-image.svg, robots.txt
```

## Deploying to Vercel

1. Push this project to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave all defaults (Framework Preset: Next.js) and click **Deploy**.

No environment variables or extra configuration are required.

## Editing content

All copy (headings, section descriptions, project/expertise items, contact links) lives directly inside the relevant component in `components/`, so updates don't require touching any config or data files.

## Contact links

- LinkedIn: https://www.linkedin.com/in/shah-nawaz-ahmad-226030438
- Email: shahnawazahmad0044@gmail.com
