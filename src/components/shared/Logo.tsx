import { cn } from "@/lib/utils";

interface LogoProps {
  /** Dark variant wraps the mark in a white chip so it stays legible on dark/glass backgrounds. */
  variant?: "light" | "dark";
  className?: string;
  imgClassName?: string;
}

export const Logo = ({ variant = "light", className, imgClassName }: LogoProps) => {
  const img = (
    <img
      src="/logoipsum-395.svg"
      alt="LinkFluence"
      className={cn("h-7 w-auto object-contain", imgClassName)}
    />
  );

  if (variant === "dark") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-lg bg-white px-2.5 py-1.5",
          className,
        )}
      >
        {img}
      </span>
    );
  }

  return <span className={cn("inline-flex items-center", className)}>{img}</span>;
};
