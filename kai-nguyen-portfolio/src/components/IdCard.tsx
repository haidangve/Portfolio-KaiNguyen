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
      <div className="space-y-6">
        {/* Profile Image Section */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto border-2 border-hud-accent/50 bg-hud-bg relative overflow-hidden">
            {/* Placeholder Image */}
            <div className="w-full h-full bg-gradient-to-br from-hud-accent/20 to-hud-accent/10 flex items-center justify-center">
              <div className="text-hud-accent text-4xl font-bold">K</div>
            </div>
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 border border-hud-accent/30 animate-pulse"></div>
          </div>
          {/* Angular Decorative Elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-hud-accent"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-hud-accent"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-hud-accent"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-hud-accent"></div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-title text-hud-accent uppercase tracking-wider">
            KAI NGUYEN
          </h3>
          <div className="bg-hud-accent/10 border border-hud-accent/30 px-3 py-1">
            <p className="text-sm font-content text-hud-text uppercase tracking-wider">
              SOFTWARE ENGINEER
            </p>
          </div>
        </div>

        {/* Personal Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-hud-text/50 text-xs uppercase tracking-widest">
              ID NUMBER
            </p>
            <p className="text-hud-text font-mono text-sm">NV-2024-001</p>
          </div>
          <div className="space-y-1">
            <p className="text-hud-text/50 text-xs uppercase tracking-widest">
              STATUS
            </p>
            <p className="text-hud-accent font-bold text-sm">ACTIVE</p>
          </div>
          <div className="space-y-1">
            <p className="text-hud-text/50 text-xs uppercase tracking-widest">
              LOCATION
            </p>
            <p className="text-hud-text text-sm">VIETNAM</p>
          </div>
          <div className="space-y-1">
            <p className="text-hud-text/50 text-xs uppercase tracking-widest">
              EXPIRES
            </p>
            <p className="text-hud-text text-sm">12/25</p>
          </div>
        </div>

        {/* Barcode Section */}
        <div className="border-t border-hud-accent/30 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 bg-hud-accent ${i % 3 === 0 ? "h-8" : "h-4"}`}
                ></div>
              ))}
            </div>
            <div className="text-right">
              <p className="text-hud-text/50 text-xs">SCAN ID</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-hud-accent/30">
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

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-hud-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-hud-accent/50"></div>
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-hud-accent/50"></div>
      </div>
    </div>
  );
}
