import * as React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gradientColors?: [string, string, string];
  innerClassName?: string;
  children?: React.ReactNode;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  (
    {
      className,
      gradientColors = ["#E2CBFF", "#393BB2", "#E2CBFF"],
      innerClassName,
      children,
      ...props
    },
    ref,
  ) => {
    const [start, mid, end] = gradientColors;
    const conicGradient = `conic-gradient(from 90deg at 50% 50%, ${start} 0%, ${mid} 50%, ${end} 100%)`;

    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-12 rounded-xl p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
          className,
        )}
        {...props}
      >
        {/* Spinning border — clipped independently so it doesn't clip outer shadows */}
        <span className="absolute inset-0 rounded-xl overflow-hidden">
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
            style={{ background: conicGradient }}
          />
        </span>

        {/* Label */}
        <span
          className={cn(
            "relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] px-6 py-1 text-sm font-medium backdrop-blur-3xl transition-colors duration-200",
            "bg-slate-950 text-white",
            "group-hover:bg-primary group-hover:text-primary-foreground",
            innerClassName,
          )}
        >
          {children}
        </span>
      </button>
    );
  },
);
ShinyButton.displayName = "ShinyButton";

export { ShinyButton };
