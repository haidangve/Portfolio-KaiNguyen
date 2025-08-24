import React from "react";
import { MediaHolder } from "@/components/ui/MediaHolder";
import { InfoPanel } from "@/components/ui/InfoPanel";

export function IdCard() {
  return (
    <div className="bg-hud-panel h-full flex flex-col">
      {/* ID Card Header */}
      <div className="bg-hud-accent/10 border-b border-thin px-6 py-3 lg:py-4">
        <h2 className="text-hud-accent font-title text-sm uppercase tracking-widest">
          ID CARD
        </h2>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto font-content text-sm p-4 bg-hud-panel flex flex-col">
        {/* Profile Image Section - Takes 2/3 of space */}
        <div className="flex-[2] flex justify-center items-center">
          <MediaHolder variant="large">
            <img
              src="/img/avatar.png"
              alt="Kai Nguyen"
              className="w-72 h-72 object-cover"
            />
          </MediaHolder>
        </div>

        {/* Info Panel - Takes 1/3 of space */}
        <div className="flex-[1] flex items-center justify-center w-full">
          <InfoPanel className="w-full" />
        </div>
      </div>
    </div>
  );
}
