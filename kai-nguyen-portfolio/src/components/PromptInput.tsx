"use client";
import React, { useState, KeyboardEvent } from "react";

interface PromptInputProps {
  onCommandSubmit: (command: string) => void;
  validCommands?: string[];
}

export function PromptInput({
  onCommandSubmit,
  validCommands = [],
}: PromptInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      onCommandSubmit(inputValue.trim());
      setInputValue("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const currentInput = inputValue.toLowerCase().trim();

      // Find commands that start with the current input
      const matchingCommands = validCommands.filter(
        (cmd) => cmd.startsWith(currentInput) && cmd !== currentInput
      );

      if (matchingCommands.length > 0) {
        // Auto-complete with the first matching command
        setInputValue(matchingCommands[0]);
      }
    }
  };

  return (
    <div className="bg-hud-panel border-0 p-4 hud-glow h-20 mt-0">
      <div className="flex items-center gap-4 h-full">
        <span className="text-hud-accent font-bold">kai@portfolio:~$</span>

        <div className="flex items-center flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="bg-transparent border-none outline-none text-hud-text font-content text-sm w-full"
            style={{
              caretColor: "transparent",
            }}
            autoFocus
          />
          <div
            className="w-3 h-6 bg-hud-accent animate-blink absolute"
            style={{
              left: `${inputValue.length * 8.4}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
