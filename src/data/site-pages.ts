export interface SitePage {
  id: "minimal" | "bold" | "glass";
  label: string;
  href: string;
}

export const sitePages: SitePage[] = [
  { id: "minimal", label: "Minimal", href: "/pages/minimal" },
  { id: "bold", label: "Bold", href: "/pages/bold" },
  { id: "glass", label: "Glass", href: "/pages/glass" },
];
