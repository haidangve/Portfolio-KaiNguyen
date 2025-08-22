import React from "react";

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({
  children,
  active = false,
  onClick,
  className = "",
}: ChipProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-colors cursor-pointer min-w-[120px]";

  const stateClasses = active
    ? "bg-hud-accent text-hud-bg border-l-2 border-r-2 border-t-2 border-hud-accent"
    : "bg-hud-panel/50 text-hud-accent hover:bg-hud-accent/20 border-l-2 border-r-2 border-t-2 border-hud-accent/20";

  const classes = `${baseClasses} ${stateClasses} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
