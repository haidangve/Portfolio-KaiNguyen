import React from "react";

interface PanelProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: "default" | "elevated" | "outline";
}

export function Panel({
  children,
  title,
  subtitle,
  className = "",
  variant = "default",
}: PanelProps) {
  const baseClasses = "relative p-6";

  const variantClasses = {
    default: "bg-hud-panel border border-hud-accent/30 hud-glow",
    elevated: "bg-hud-panel border border-hud-accent/40 hud-glow-strong",
    outline: "bg-transparent border border-hud-accent/20",
  };

  // Cut corner effect using clip-path
  const cutCornerClasses =
    "clip-path-[polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]";

  const classes = `${baseClasses} ${variantClasses[variant]} ${cutCornerClasses} ${className}`;

  return (
    <div className={classes}>
      {(title || subtitle) && (
        <div className="bg-hud-accent/10 border-b border-hud-accent/30 px-4 py-2 -mx-6 -mt-6 mb-6">
          {title && (
            <h2 className="text-sm font-title text-hud-accent uppercase tracking-widest">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xs text-hud-text/70 mt-1 font-content">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
