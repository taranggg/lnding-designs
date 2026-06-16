import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-900 hover:text-white ",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BlobButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  blobColor?: string;
}

const BlobButton = React.forwardRef<HTMLButtonElement, BlobButtonProps>(
  (
    { className, variant, size, blobColor = "bg-primary", children, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "absolute left-1/2 top-[120%] z-0 h-[200%] w-[150%] -translate-x-1/2 rounded-[50%] transition-all duration-1000 ease-out group-hover:top-[-20%] group-hover:rounded-none",
            blobColor,
          )}
          aria-hidden="true"
        />

        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  },
);
BlobButton.displayName = "BlobButton";

export { BlobButton, buttonVariants };
