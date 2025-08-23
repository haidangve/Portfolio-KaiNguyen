import React from "react";

interface MediaHolderProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "compact" | "large";
}

export function MediaHolder({
  children,
  className = "",
  variant = "default",
}: MediaHolderProps) {
  const baseClasses = "relative inline-block";

  const variantClasses = {
    default: "p-1",
    compact: "p-0.5",
    large: "p-2",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes}>
      <div
        className="relative bg-hud-panel border-l-4 border-r-4 border-hud-accent p-2 flex items-center justify-center"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
        }}
      >
        <div className="border border-hud-accent/50 w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
