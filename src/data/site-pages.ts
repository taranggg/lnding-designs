export interface SitePage {
  id: "minimal" | "bold" | "glass";
  label: string;
  href: string;
}

export const sitePages: SitePage[] = [
  { id: "minimal", label: "Minimal", href: "/minimal" },
  { id: "bold", label: "Bold", href: "/bold" },
  { id: "glass", label: "Glass", href: "/glass" },
];
