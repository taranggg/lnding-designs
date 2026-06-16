/* Merge this into the `theme.extend` of the target project's tailwind.config.
   Required for the home2 sections (bg-gradient-primary, bg-card, text-primary, etc.) to render correctly. */
export const home2TailwindExtend = {
  colors: {
    border: "var(--border)",
    input: "var(--input)",
    ring: "var(--ring)",
    background: "var(--background)",
    foreground: "var(--foreground)",
    primary: {
      DEFAULT: "var(--primary)",
      foreground: "var(--primary-foreground)",
    },
    destructive: {
      DEFAULT: "var(--destructive)",
      foreground: "var(--destructive-foreground)",
    },
    muted: {
      DEFAULT: "var(--muted)",
      foreground: "var(--muted-foreground)",
    },
    card: {
      DEFAULT: "var(--card)",
      foreground: "var(--card-foreground)",
    },
  },
  backgroundImage: {
    "gradient-primary": "linear-gradient(90deg, #53A6FF 0%, #7B5CF6 100%)",
    "gradient-accent": "linear-gradient(90deg, #53A6FF 0%, #7B5CF6 100%)",
  },
  boxShadow: {
    premium: "var(--shadow-lg)",
  },
};
