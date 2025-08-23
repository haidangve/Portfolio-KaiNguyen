import React from "react";
import { Console } from "./Console";
import { PromptInput } from "./PromptInput";

interface RightPanelProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onCommandSubmit: (command: string) => void;
  validCommands: string[];
  errorMessages: string[];
}

export function RightPanel({
  activeTab,
  onTabChange,
  onCommandSubmit,
  validCommands,
  errorMessages,
}: RightPanelProps) {
  return (
    <div className="bg-hud-panel h-full flex flex-col">
      {/* Console Component */}
      <Console
        activeTab={activeTab}
        onTabChange={onTabChange}
        errorMessages={errorMessages}
      />

      {/* Prompt Input */}
      <PromptInput
        onCommandSubmit={onCommandSubmit}
        validCommands={validCommands}
      />
    </div>
  );
}
