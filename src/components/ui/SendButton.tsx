import React from "react";
import { findClosestCommand } from "@/lib/utils";

interface SendButtonProps {
  inputValue: string;
  validCommands: string[];
  onCommandSubmit: (command: string) => void;
  onClearInput: () => void;
}

export function SendButton({
  inputValue,
  validCommands,
  onCommandSubmit,
  onClearInput,
}: SendButtonProps) {
  const handleSend = () => {
    const closestCommand = findClosestCommand(inputValue, validCommands);
    if (closestCommand && closestCommand !== inputValue.trim()) {
      onCommandSubmit(closestCommand);
    } else {
      onCommandSubmit(inputValue.trim());
    }
    onClearInput();
  };

  if (!inputValue.trim()) {
    return null;
  }

  return (
    <button
      onClick={handleSend}
      className="lg:hidden bg-hud-accent text-hud-panel px-3 py-1 rounded hover:bg-hud-accent/80 transition-colors font-mono text-sm"
    >
      SEND
    </button>
  );
}
