import React from "react";

export interface BrowserWindowProps {
  // Content
  src: string;
  mediaType?: "image" | "video";
  mediaClassName?: string;

  // Sizing & Behavior
  width?: string | number;
  height?: string | number;
  resizable?: boolean;

  // Layout & Spacing (Defaults based on your screenshot)
  /** The space between the outer glass edge and the inner image */
  framePadding?: string;
  /** The radius of the inner image */
  mediaRadius?: string;

  // Outer Glass Container Styling
  containerClassName?: string;
  /** Controls the tint of the glass. Use low opacity for clear glass */
  glassBg?: string;
  /** Controls refraction. Saturation + Moderate Blur = Magnified Liquid effect */
  glassFilter?: string;
  /** The physical border of the frame */
  glassBorder?: string;
  /** Inner light reflections to make it look like 3D glass */
  glassEdgeGlow?: string;

  // Header Controls
  showControls?: boolean;
  controlsClassName?: string;
}

export const BrowserWindow: React.FC<BrowserWindowProps> = ({
  src,
  mediaType = "image",
  mediaClassName = "object-[center_top]", // Defaulting to your previous alignment

  width = "100%",
  height = "auto",
  resizable = false,

  // Default Spacing: 3 units all around, but 12 units at top to fit the Mac dots
  framePadding = "p-3 pt-12",
  mediaRadius = "rounded-xl",

  containerClassName = "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]",

  // --- CLEAR LIQUID GLASS SETTINGS ---
  glassBg = "bg-white/5", // Very faint white for clarity
  glassFilter = "backdrop-blur-md backdrop-saturate-[1.2] backdrop-brightness-105", // Magnified/Refractive look
  glassBorder = "border border-white/10", // Almost invisible physical border
  glassEdgeGlow = "shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_0_20px_rgba(255,255,255,0.05)]", // The liquid rim light
  // ------------------------------------

  showControls = true,
  controlsClassName = "absolute top-4 left-4 flex space-x-2 z-30",
}) => {
  const containerStyle: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      style={containerStyle}
      className={`
        relative flex flex-col rounded-[1.5rem] 
        ${glassFilter} ${glassBg} ${glassBorder} ${glassEdgeGlow}
        ${resizable ? "resize overflow-hidden" : "overflow-hidden"} 
        ${containerClassName}
      `}
    >
      {/* Mac Controls - Now floating over the clear glass frame */}
      {showControls && (
        <div className={controlsClassName}>
          <div className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] border border-black/10" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] border border-black/10" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] border border-black/10" />
        </div>
      )}

      {/* Content Area with Padded Frame */}
      <div
        className={`relative w-full h-full flex-grow flex flex-col z-10 ${framePadding}`}
      >
        {/* Inner Wrapper for the Media */}
        <div
          className={`relative w-full h-full flex-grow overflow-hidden ${mediaRadius} shadow-inner bg-black/40`}
        >
          {mediaType === "image" ? (
            <img
              src={src}
              alt="Browser content"
              className={`absolute inset-0 w-full h-full object-cover ${mediaClassName}`}
            />
          ) : (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover ${mediaClassName}`}
            />
          )}

          {/* Subtle inner shadow right inside the image to separate it from the glass frame */}
          <div className="pointer-events-none absolute inset-0 rounded-inherit ring-1 ring-inset ring-black/20" />
        </div>
      </div>
    </div>
  );
};
