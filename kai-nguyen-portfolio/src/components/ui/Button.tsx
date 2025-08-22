import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  href,
  target,
  rel,
  download,
  size = "md",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold transition-colors cursor-pointer min-w-[100px]";

  // Cut corner effect using clip-path
  const cutCornerClasses =
    "clip-path-[polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]";

  const variantClasses = {
    primary:
      "bg-hud-panel border border-hud-accent/30 text-hud-accent hover:bg-hud-accent/20",
    secondary:
      "bg-hud-accent/10 border border-hud-accent/20 text-hud-accent hover:bg-hud-accent/30",
    outline:
      "bg-transparent border border-hud-accent/40 text-hud-accent hover:bg-hud-accent/20",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-sm",
  };

  const classes = `${baseClasses} ${variantClasses.primary} ${sizeClasses[size]} ${cutCornerClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
