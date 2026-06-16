import Link from "next/link";
import { cn } from "@/lib/utils";
import { sitePages, type SitePage } from "@/data/site-pages";

interface DesignTabsProps {
  current: SitePage["id"];
  theme?: "light" | "dark";
  className?: string;
}

export const DesignTabs = ({
  current,
  theme = "light",
  className,
}: DesignTabsProps) => {
  const isDark = theme === "dark";

  return (
    <div className={cn("flex items-center gap-6", className)}>
      {sitePages.map((page) => (
        <Link
          key={page.id}
          href={page.href}
          className={cn(
            "text-sm font-medium transition-colors",
            page.id === current
              ? isDark
                ? "text-white"
                : "text-foreground"
              : isDark
                ? "text-white/60 hover:text-white"
                : "text-foreground/60 hover:text-foreground",
          )}
        >
          {page.label}
        </Link>
      ))}
    </div>
  );
};
