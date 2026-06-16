# Home page (FE only)

Standalone copy of the LinkFluence homepage UI. No backend/Supabase calls, no invite modal — CTA buttons are presentational only.

## Structure
- `Home.tsx` — assembles all sections, mirrors the original page
- `sections/` — Hero, FeaturesSection, TrustSection, AudienceSection, PricingSection, BannerSection, ServicesSection, HomeFooter
- `components/` — custom (non-shadcn) building blocks: ShinyButton, BlobButton, MediaCard, BrowserWindow, Aurora, StackedCards
- `data/` — JSON content for each section
- `hooks/useSmoothScroll.ts` — Lenis + GSAP smooth scroll
- `assets/social-logos/` — images used by `servicesSection.config.tsx`

## Assumed available in target project
- shadcn/ui installed with `Button` and `Card` components, plus `@/lib/utils` `cn` helper
- `lucide-react`, `react-router-dom`, `gsap`, `lenis`, `ogl`, `class-variance-authority`

Imports like `@/components/ui/button` and `@/components/ui/card` were left pointing at the shadcn path convention — update them once dropped into the target project's alias setup.

Static images referenced by URL (`/churro/...`, `/images/...`, `/svgs/logo.svg`, `/linkfluence-logo.png`) live in this project's `public/` folder and aren't included here — copy them separately if needed.
