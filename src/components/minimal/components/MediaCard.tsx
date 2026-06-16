import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShinyButton } from "./ShinyButton";
import { cn } from "@/lib/utils";

// ─── Variants ────────────────────────────────────────────────────────────────

const variantStyles: Record<string, string> = {
  default: "border-[#e4e4e7] shadow-none",
  elevated: "border-[#e4e4e7] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]",
  flat: "border-transparent shadow-none bg-transparent",
};

// ─── Props ───────────────────────────────────────────────────────────────────

export interface MediaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual area (top of card).
   * Pass `visual` for fully custom content, or `imageSrc` for a plain image.
   * `visual` takes precedence over `imageSrc`.
   */
  visual?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  /** Height of the visual/image area in px. Defaults to 220 for `visual`, 300 for `imageSrc`. */
  visualHeight?: number;

  /** Coloured eyebrow label above the title. */
  label?: string;
  labelColor?: string;

  title?: string;
  description?: string;

  /**
   * Footer area.
   * Pass `footer` for fully custom content, or `cta` + `onCtaClick` for the
   * standard ShinyButton shorthand. `footer` takes precedence over `cta`.
   */
  footer?: React.ReactNode;
  cta?: string;
  onCtaClick?: () => void;

  /** Visual style of the card shell. */
  variant?: "default" | "elevated" | "flat";
  /** Background colour of the content area. Defaults to #f7f7f7. */
  contentBackground?: string;
  contentClassName?: string;
}

// ─── Component ───────────────────────────────────────────────────────────────

export const MediaCard = React.forwardRef<HTMLDivElement, MediaCardProps>(
  (
    {
      visual,
      imageSrc,
      imageAlt = "",
      visualHeight,
      label,
      labelColor,
      title,
      description,
      footer,
      cta,
      onCtaClick,
      variant = "default",
      contentBackground = "#f7f7f7",
      contentClassName,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const topHeight = visualHeight ?? (visual ? 220 : 300);
    const hasFooter = footer !== undefined || !!cta;

    return (
      <Card
        ref={ref}
        className={cn(
          "rounded-3xl overflow-hidden flex flex-col h-full",
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {/* ── Visual area ── */}
        {(visual || imageSrc) && (
          <div style={{ height: `${topHeight}px`, flexShrink: 0 }}>
            {visual ?? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover block"
              />
            )}
          </div>
        )}

        {/* ── Content area ── */}
        <CardContent
          className={cn("flex flex-col flex-1 gap-5 px-8 py-8 border-t border-[#f0f0f2]", contentClassName)}
          style={{ background: contentBackground }}
        >
          {children ?? (
            <>
              {label && (
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: labelColor }}
                >
                  {label}
                </span>
              )}

              {(title || description) && (
                <div className="flex flex-col gap-3">
                  {title && (
                    <h3 className="text-gray-900 font-semibold leading-snug text-xl">
                      {title}
                    </h3>
                  )}
                  {description && (
                    <p className="text-sm leading-relaxed text-[#71717a]">
                      {description}
                    </p>
                  )}
                </div>
              )}

              {hasFooter && (
                <div className="mt-1">
                  {footer ?? (
                    <ShinyButton
                      gradientColors={["#c8d8f0", "#1e3a5f", "#c8d8f0"]}
                      className="h-8 shadow-sm self-start"
                      innerClassName="bg-background text-foreground text-xs px-4 py-0 group-hover:bg-primary group-hover:text-primary-foreground"
                      onClick={onCtaClick}
                    >
                      {cta}
                    </ShinyButton>
                  )}
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    );
  },
);
MediaCard.displayName = "MediaCard";
