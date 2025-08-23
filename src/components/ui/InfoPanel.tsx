import React from "react";
import { personalData } from "@/lib/data/personal-data";

interface InfoPanelProps {
  className?: string;
}

export function InfoPanel({ className = "" }: InfoPanelProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Name */}
      <div className="text-center">
        <h1 className="text-xl font-title text-hud-accent tracking-wider">
          KAI NGUYEN
        </h1>
      </div>

      {/* Title Badge - Full Width */}
      <div className="bg-hud-accent/20 border border-hud-accent/30 py-2">
        <div className="text-center">
          <span className="text-hud-accent text-sm font-semibold tracking-wider">
            SOFTWARE ENGINEER
          </span>
        </div>
      </div>

      {/* Info Grid - Full Width */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-hud-text/60 text-xs uppercase tracking-wider">
            Location
          </div>
          <div className="text-white font-mono text-sm">
            {personalData.location}
          </div>
        </div>

        <div>
          <div className="text-hud-text/60 text-xs uppercase tracking-wider">
            Status
          </div>
          <div className="text-hud-accent font-mono text-sm">OPEN TO WORK</div>
        </div>

        <div>
          <div className="text-hud-text/60 text-xs uppercase tracking-wider">
            YO Experience
          </div>
          <div className="text-white font-mono text-sm">2+ YEARS</div>
        </div>

        <div>
          <div className="text-hud-text/60 text-xs uppercase tracking-wider">
            Availability
          </div>
          <div className="text-white font-mono text-sm">IMMEDIATE</div>
        </div>
      </div>
    </div>
  );
}
