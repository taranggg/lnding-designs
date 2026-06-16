export interface SitePage {
  id: "home1" | "home2" | "home3";
  label: string;
  href: string;
}

export const sitePages: SitePage[] = [
  { id: "home1", label: "Design 1", href: "/pages/home1" },
  { id: "home2", label: "Design 2", href: "/pages/home2" },
  { id: "home3", label: "Design 3", href: "/pages/home3" },
];
