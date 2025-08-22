"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Console } from "@/components/Console";
import { PromptInput } from "@/components/PromptInput";
import { IdCard } from "@/components/IdCard";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [consoleMessages, setConsoleMessages] = useState<string[]>([]);

  const validCommands = [
    "help",
    "about",
    "projects",
    "skills",
    "experience",
    "education",
    "home",
  ];

  // Calculate similarity between two strings (Levenshtein distance)
  const calculateSimilarity = (str1: string, str2: string): number => {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  };

  // Find the closest command
  const findClosestCommand = (input: string): string | null => {
    let minDistance = Infinity;
    let closestCommand = null;

    for (const command of validCommands) {
      const distance = calculateSimilarity(input, command);
      if (distance < minDistance) {
        minDistance = distance;
        closestCommand = command;
      }
    }

    // Only suggest if similarity is reasonable (distance <= 3)
    return minDistance <= 3 ? closestCommand : null;
  };

  const handleCommandSubmit = (command: string) => {
    const normalizedCommand = command.toLowerCase().trim();

    if (validCommands.includes(normalizedCommand)) {
      setActiveTab(normalizedCommand);
      setConsoleMessages([]); // Clear error messages
    } else {
      // Invalid command - show error and suggestion
      const closestCommand = findClosestCommand(normalizedCommand);
      const errorMessage = `No existing command such as "${normalizedCommand}". Type 'help' to see available commands.`;
      const suggestionMessage = closestCommand
        ? `Did you mean: '${closestCommand}'?`
        : null;

      setConsoleMessages([
        errorMessage,
        ...(suggestionMessage ? [suggestionMessage] : []),
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-hud-bg text-hud-text font-content">
      {/* Header - 80px height */}
      <header className="h-[80px] border-b border-hud-accent/20 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-title text-hud-accent uppercase tracking-wider">
            PROFILE.EXE
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button
            href="https://linkedin.com/in/kai-nguyen09"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </Button>
          <Button
            href="https://instagram.com/nvdh_ai"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
          </Button>
          <Button
            href="https://github.com/haidangve"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </Button>
          <Button href="/resume.pdf" download size="md">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5z" />
              <path d="M20 18H4v2h16v-2z" />
            </svg>
            Resume
          </Button>
        </div>
      </header>

      {/* Main Grid - Left: ID Card (510px), Right: Console + Chat Box */}
      <main className="grid grid-cols-1 lg:grid-cols-[510px_1fr] min-h-[calc(100vh-120px)]">
        {/* Left: ID Card */}
        <div className="lg:border-r border-hud-accent/20 p-0">
          <IdCard />
        </div>

        {/* Right: Console + Chat Box */}
        <div className="p-0 flex flex-col h-full">
          {/* Console Component */}
          <Console
            activeTab={activeTab}
            onTabChange={setActiveTab}
            errorMessages={consoleMessages}
          />

          {/* Prompt Input */}
          <PromptInput
            onCommandSubmit={handleCommandSubmit}
            validCommands={validCommands}
          />
        </div>
      </main>

      {/* Footer - 40px height (DECORATION ONLY) */}
      <footer className="h-[40px] border-t border-hud-accent/20 flex items-center justify-between px-6 pt-0">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-hud-accent rounded-full animate-pulse"></div>
        </div>
        <div className="text-xs text-hud-text/50">
          {new Date().toLocaleDateString()}, {new Date().toLocaleTimeString()}
        </div>
      </footer>
    </div>
  );
}
