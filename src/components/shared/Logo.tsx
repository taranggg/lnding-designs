import { cn } from "@/lib/utils";

interface LogoProps {
  /** Dark variant wraps the mark in a white chip so it stays legible on dark/glass backgrounds. */
  variant?: "light" | "dark";
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}

export const Logo = ({
  variant = "light",
  src = "/shared/logoipsum-350.svg",
  alt = "Logo",
  className,
  imgClassName,
}: LogoProps) => {
  const img = (
    <img
      src={src}
      alt={alt}
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
