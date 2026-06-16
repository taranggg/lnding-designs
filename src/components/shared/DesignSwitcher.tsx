"use client";

import { DropdownMenu } from "radix-ui";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { sitePages, type SitePage } from "@/data/site-pages";

interface DesignSwitcherProps {
  current: SitePage["id"];
  theme?: "light" | "dark";
  className?: string;
}

export const DesignSwitcher = ({
  current,
  theme = "light",
  className,
}: DesignSwitcherProps) => {
  const isDark = theme === "dark";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            isDark
              ? "text-white/70 hover:text-white hover:bg-white/10 border border-white/15"
              : "text-foreground/70 hover:text-foreground hover:bg-foreground/5 border border-border",
            className,
          )}
        >
          <LayoutGrid className="h-3.5 w-3.5" />
          Switch design
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className={cn(
            "z-50 min-w-[160px] rounded-xl p-1 shadow-lg",
            isDark
              ? "bg-neutral-900 border border-white/10"
              : "bg-popover border border-border",
          )}
        >
          {sitePages.map((page) => (
            <DropdownMenu.Item key={page.id} asChild>
              <a
                href={page.href}
                className={cn(
                  "block cursor-pointer rounded-lg px-3 py-2 text-sm outline-none transition-colors",
                  page.id === current
                    ? isDark
                      ? "bg-white/10 text-white font-medium"
                      : "bg-accent text-foreground font-medium"
                    : isDark
                      ? "text-white/70 hover:bg-white/10 hover:text-white"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                {page.label}
                {page.id === current && (
                  <span className="ml-1 opacity-60">(current)</span>
                )}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
