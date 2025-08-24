"use client";
import React, { useState, KeyboardEvent, useRef } from "react";
import { findClosestCommand } from "@/lib/utils";

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

  /**
   * Handles input change events and updates the input value state
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  /**
   * Handles keyboard events for command submission and auto-completion
   * - Enter: Submits the command with fuzzy search auto-correction
   * - Tab: Auto-completes with matching commands
   */
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const closestCommand = findClosestCommand(inputValue, validCommands);

      if (closestCommand && closestCommand !== inputValue.trim()) {
        // Auto-correct and execute the closest command
        onCommandSubmit(closestCommand);
        setInputValue("");
      } else {
        // Execute the exact command
        onCommandSubmit(inputValue.trim());
        setInputValue("");
      }
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
    <div className="bg-hud-panel p-3 lg:p-6 h-20 lg:h-24 mt-0 relative border border-hud-accent/30 shadow-[0_0_8px_rgba(255,107,53,0.2)]">
      {/* Subtle top border for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-hud-accent/20"></div>

      {/* Main input container with baseline alignment for proper text positioning */}
      <div className="flex items-baseline gap-2 lg:gap-4 h-full">
        {/* Terminal prompt text - aligned to text baseline */}
        <span className="text-hud-accent font-bold text-base lg:text-lg">
          kai@portfolio:~$
        </span>

        {/* Input field container */}
        <div className="flex items-baseline flex-1 relative">
          {/* Regular input field for consistent baseline alignment */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="bg-transparent border-none outline-none text-hud-text font-content text-base lg:text-lg w-full leading-6"
            style={{
              caretColor: "transparent", // Hide default cursor
            }}
            autoFocus
            placeholder="Type a command..."
            // Mobile keyboard optimization attributes
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          {/* Custom blinking cursor positioned after text */}
          <div
            className="w-3 h-6 bg-hud-accent animate-blink absolute shadow-[0_0_4px_rgba(255,107,53,0.6)] pointer-events-none"
            style={{
              left: `${inputValue.length * 8.4}px`, // Approximate character width
              top: "0px",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}
