import React from "react";

export function IdCard() {
  return (
    <div className="bg-hud-panel border-0 p-6 hud-glow h-full">
      {/* ID Card Header */}
      <div className="bg-hud-accent/10 border-b border-hud-accent/30 px-4 py-2 -mx-6 -mt-6 mb-6">
        <h2 className="text-sm font-title text-hud-accent uppercase tracking-widest">
          IDENTITY / VERIFIED
        </h2>
      </div>

      {/* Main ID Card Content */}
      <div className="space-y-4">
        {/* Profile Image Section */}
        <div className="relative">
          <div className="w-64 h-64 mx-auto border-2 border-hud-accent/50 bg-hud-bg relative overflow-hidden">
            {/* Avatar Image */}
            <img
              src="/img/avatar.png"
              alt="Kai Nguyen"
              className="w-full h-full object-cover"
            />
            {/* Screen Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-hud-accent/10 via-transparent to-hud-accent/5"></div>
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hud-accent/5 to-transparent bg-[length:100%_4px] animate-pulse"></div>
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 border border-hud-accent/30 animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-1">
          <h3 className="text-2xl font-title text-hud-accent uppercase tracking-wider">
            KAI NGUYEN
          </h3>
          <div className="bg-hud-accent/10 border border-hud-accent/30 px-3 py-1">
            <p className="text-sm font-content text-hud-text uppercase tracking-wider">
              SOFTWARE ENGINEER
            </p>
          </div>
        </div>

        {/* Compact Info Grid */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div>
            <p className="text-hud-text/50 text-xs uppercase tracking-widest">
              ID
            </p>
            <p className="text-hud-text font-mono text-sm">NV-2024-001</p>
          </div>
          <div>
            <p className="text-hud-text/50 text-xs uppercase tracking-widest">
              STATUS
            </p>
            <p className="text-hud-accent font-bold text-sm">ACTIVE</p>
          </div>
          <div>
            <p className="text-hud-text/50 text-xs uppercase tracking-widest">
              LOCATION
            </p>
            <p className="text-hud-text text-sm">VIETNAM</p>
          </div>
          <div>
            <p className="text-hud-text/50 text-xs uppercase tracking-widest">
              EXPIRES
            </p>
            <p className="text-hud-text text-sm">12/25</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-hud-accent/30">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto border border-hud-accent/50 bg-hud-bg flex items-center justify-center">
              <span className="text-hud-accent font-bold text-sm">5</span>
            </div>
            <p className="text-hud-text/50 text-xs mt-1">YEARS</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto border border-hud-accent/50 bg-hud-bg flex items-center justify-center">
              <span className="text-hud-accent font-bold text-sm">15+</span>
            </div>
            <p className="text-hud-text/50 text-xs mt-1">PROJECTS</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto border border-hud-accent/50 bg-hud-bg flex items-center justify-center">
              <span className="text-hud-accent font-bold text-sm">A+</span>
            </div>
            <p className="text-hud-text/50 text-xs mt-1">RATING</p>
          </div>
        </div>
      </div>
    </div>
  );
}
