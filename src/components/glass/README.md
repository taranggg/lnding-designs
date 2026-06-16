# glass

Standalone copy of the discarded homepage design (hero, about/manifesto,
features, pricing cards, navbar, footer). Auth/backend wiring has been
stripped out — this is FE only.

## 1. Install dependencies

```bash
npm install gsap @gsap/react lenis ogl lucide-react class-variance-authority clsx tailwind-merge countries-and-timezones i18n-iso-countries react-router-dom
```

## 2. Install shadcn components

```bash
npx shadcn@latest add button dialog card sheet
```

## 3. Copy assets

- `glass/public/*` → your project's `public/` (fonts, grain.avif, jpeg backgrounds)
- `glass/assets/linkfluence-logo.png` → swap for your own logo, or keep and
  update the import in `components/Navbar.tsx`

## 4. Merge global CSS

Append the contents of `glass/home.css` (font-face + shimmer keyframes) into
your project's global stylesheet, after the `@tailwind` directives.

This design also relies on the standard shadcn CSS variables (`--primary`,
`--background`, `--border`, etc.) and the `tailwindcss-animate` plugin — if
your project was scaffolded with `shadcn init`, you already have these.

`RoleSelectionInvite` also uses a `bg-gradient-primary` utility class, which
isn't part of the shadcn default. Add it to your `tailwind.config`:

```ts
theme: {
  extend: {
    backgroundImage: {
      "gradient-primary": "linear-gradient(90deg, #53A6FF 0%, #7B5CF6 100%)",
    },
  },
},
```

## 5. Use it

```tsx
import Home from "./glass";
```

`glass/index.tsx` composes everything: `Navbar` → `Hero` → `AboutSection` →
`WhyChooseSection` → `PricingSection` → `Footer`, wrapped in the shared
`useSmoothScroll` (Lenis) hook.

## Notes

- `Navbar` has no auth wiring. Pass `onSignInClick` if you add your own auth
  modal; "Request Invite" opens the included `RequestInviteModal`.
- `RequestInviteModal` takes an optional `onRoleSelect` callback — wire up
  your own routing/submission there. By default it just closes.
- Nav/footer links (`/creator`, `/brand`, `/agency`, `/about`, `/legal/*`)
  are `react-router-dom` `Link`s to routes that don't exist yet — point them
  wherever makes sense in your project, or swap for `<a>`/anchors.
