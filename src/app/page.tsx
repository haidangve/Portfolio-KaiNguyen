"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { IdCard } from "@/components/IdCard";
import { RightPanel } from "@/components/RightPanel";
import { Linkedin, Instagram, Github, Download } from "lucide-react";
import { findClosestCommand } from "@/lib/utils";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home"); //default tab set to home
  const [consoleMessages, setConsoleMessages] = useState<string[]>([]); //console messages set to empty array

  const validCommands = [
    //valid commands set to array
    "help",
    "about",
    "projects",
    "skills",
    "experience",
    "education",
    "contact",
    "home",
  ];

  // Handle command submission
  //input: command (string)
  //output: void
  //description: handles the submission of a command and updates the active tab and console messages based on the command
  const handleCommandSubmit = (command: string) => {
    const normalizedCommand = command.toLowerCase().trim(); //normalize command to lowercase and trim whitespace

    //if the command is valid, set the active tab to the command and clear the console messages
    if (validCommands.includes(normalizedCommand)) {
      setActiveTab(normalizedCommand);
      setConsoleMessages([]); // Clear error messages
    } else {
      // Invalid command - show error and suggestion
      const closestCommand = findClosestCommand(
        normalizedCommand,
        validCommands
      );
      const errorMessage = `No existing command such as "${normalizedCommand}". Type 'help' to see available commands.`;
      //syntax explanation: if the closest command is found, suggest it, otherwise suggest null
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
    <div className="h-screen bg-hud-panel text-hud-text font-content overflow-hidden">
      {/* Header - Increased height for more spacing */}
      <header className="h-[100px] lg:h-[120px] bg-hud-panel border-b border-thin flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-hud-accent text-2xl lg:text-3xl font-title">
              [
            </span>
            <h1 className="text-2xl lg:text-3xl font-title text-hud-accent uppercase tracking-widest">
              K@DE CONSOLE
            </h1>
            <span className="text-hud-accent text-2xl lg:text-3xl font-title">
              ]
            </span>
            <span className="text-hud-text/60 text-xs font-mono self-center">
              v1.0.0
            </span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href="https://drive.google.com/file/d/1O6tJD4kJrdcXpCtYku3lAf6RTN7_6C37/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            <Download className="w-4 h-4" />
            Resume
          </Button>
          <Button
            href="https://linkedin.com/in/kai-nguyen09"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          <Button
            href="https://github.com/haidangve"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button
            href="https://instagram.com/nvdh_ai"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </Button>
        </div>
      </header>

      {/* Main Content - ID Card hidden on mobile, full terminal on mobile */}
      <main className="h-[calc(100vh-140px)] lg:h-[calc(100vh-160px)] lg:grid lg:grid-cols-[510px_1fr]">
        {/* Left: ID Card - Hidden on mobile */}
        <div className="p-0 hidden lg:block">
          <IdCard />
        </div>

        {/* Right: Console + Chat Box - Full width on mobile */}
        <div className="p-0 h-full lg:border-l lg:border-thin min-h-0">
          <RightPanel
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onCommandSubmit={handleCommandSubmit}
            validCommands={validCommands}
            errorMessages={consoleMessages}
          />
        </div>
      </main>

      {/* Footer - Hidden on mobile, shown on desktop */}
      <footer className="hidden lg:flex h-[40px] bg-hud-panel border-t border-thin items-center justify-between px-6 pt-0">
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
