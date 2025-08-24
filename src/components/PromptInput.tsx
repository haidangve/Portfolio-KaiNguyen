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
  const inputRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Handles input change events and updates the input value state
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  /**
   * Handles keyboard events for command submission and auto-completion
   * - Enter: Submits the command
   * - Tab: Auto-completes with matching commands
   */
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
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

  /**
   * Auto-expands textarea height based on content
   * Ensures the input field grows vertically when text overflows
   */
  const handleTextareaResize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = "auto";
    target.style.height = Math.min(target.scrollHeight, 200) + "px";
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
          {/* Auto-expanding textarea for multi-line input support */}
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            onInput={handleTextareaResize}
            className="bg-transparent border-none outline-none text-hud-text font-content text-base lg:text-lg w-full resize-none overflow-hidden leading-6"
            style={{
              caretColor: "transparent", // Hide default cursor
              minHeight: "44px", // Touch-friendly minimum height
              maxHeight: "200px", // Prevent excessive expansion
            }}
            rows={1}
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
            className="w-3 h-6 bg-hud-accent animate-blink absolute shadow-[0_0_4px_rgba(255,107,53,0.6)]"
            style={{
              left: `${inputValue.length * 8.4}px`, // Approximate character width
              top: "0px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
