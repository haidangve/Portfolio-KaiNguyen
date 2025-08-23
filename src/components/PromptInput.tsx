"use client";
import React, { useState, KeyboardEvent, useRef } from "react";

interface PromptInputProps {
  onCommandSubmit: (command: string) => void;
  validCommands?: string[];
}

export function PromptInput({
  onCommandSubmit,
  validCommands = [],
}: PromptInputProps) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  //handleInputChange(): handle the input change event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //handleKeyPress(): handle the key press event
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
    <div className="bg-hud-panel p-4 h-20 mt-0 relative border border-hud-accent/30 shadow-[0_0_8px_rgba(255,107,53,0.2)]">
      {/* Subtle top border for separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-hud-accent/20"></div>
      <div className="flex items-center gap-4 h-full">
        <span className="text-hud-accent font-bold">kai@portfolio:~$</span>

        <div className="flex items-center flex-1 relative">
          <input
            ref={inputRef}
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
            className="w-3 h-6 bg-hud-accent animate-blink absolute shadow-[0_0_4px_rgba(255,107,53,0.6)]"
            style={{
              left: `${inputValue.length * 8.4}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
