import React from "react";
import { IconType } from "react-icons";

interface ContactCardProps {
  icon: IconType;
  label: string;
  href: string;
  external?: boolean;
  className?: string;
}

export function ContactCard({
  icon: Icon,
  label,
  href,
  external = true,
  className = "",
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-between w-full px-4 py-3 bg-hud-accent/10 text-hud-accent border border-hud-accent/30 rounded hover:bg-hud-accent/20 transition-colors ${className}`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </div>
    </a>
  );
}
