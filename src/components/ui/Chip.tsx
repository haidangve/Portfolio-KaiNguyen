import React from "react";

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  isFirst?: boolean;
  isAfterActive?: boolean;
}

export function Chip({
  children,
  active = false,
  onClick,
  className = "",
  isFirst = false,
  isAfterActive = false,
}: ChipProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all cursor-pointer min-w-[120px] relative";

  // Browser tab styling with orange color scheme and cyberpunk cut corner
  const tabClasses = active
    ? "bg-hud-accent/20 text-hud-accent"
    : "bg-hud-panel/60 text-hud-text/60 hover:text-hud-text/80 hover:bg-hud-panel/80";

  const classes = `${baseClasses} ${tabClasses} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
      }}
    >
      {children}
      {/* Vertical separator on left side for non-first, non-active, and non-after-active chips */}
      {!isFirst && !active && !isAfterActive && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-2/3 bg-hud-accent/30"></div>
      )}
    </button>
  );
}
