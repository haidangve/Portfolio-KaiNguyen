"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { IdCard } from "@/components/IdCard";
import { RightPanel } from "@/components/RightPanel";
import { Linkedin, Instagram, Github, Download } from "lucide-react";

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
    "home",
  ];

  // Calculate similarity between two strings (Levenshtein distance)
  const calculateSimilarity = (str1: string, str2: string): number => {
    const matrix = []; //matrix set to empty array
    // First column: cost to delete i chars of str2 to get ""
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    // First row: cost to delete j chars of str1 to get ""
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }

    //Fill in the rest of the matrix
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        //same character, no cost
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          //different character, find the minimum cost of the three possible values
          //substitute (diagonal), insert (left), delete (up)
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, //substitute
            matrix[i][j - 1] + 1, //insert
            matrix[i - 1][j] + 1 //delete
          );
        }
      }
    }
    return matrix[str2.length][str1.length];
  };

  // Find the closest command
  //input: input (string)
  //output: closestCommand (string) | null
  //description: finds the closest command to the input based on the Levenshtein distance
  const findClosestCommand = (input: string): string | null => {
    let minDistance = Infinity; //set minDistance to infinity
    let closestCommand = null; //set closestCommand to null

    //loop through validCommands and calculate the Levenshtein distance between the input and each command
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
      const closestCommand = findClosestCommand(normalizedCommand);
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
    <div className="min-h-screen bg-hud-panel text-hud-text font-content">
      {/* Header - 80px height */}
      <header className="h-[80px] bg-hud-panel border-b border-thin flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-hud-accent text-2xl font-title">[</span>
            <h1 className="text-3xl font-title text-hud-accent uppercase tracking-widest">
              K@DE CONSOLE
            </h1>
            <span className="text-hud-accent text-2xl font-title">]</span>
            <span className="text-hud-text/60 text-xs font-mono self-center">
              v1.0.0
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button href="/resume.pdf" download size="md">
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

      {/* Main Grid - Left: ID Card (510px), Right: Console + Chat Box */}
      <main className="grid grid-cols-1 lg:grid-cols-[510px_1fr] min-h-[calc(100vh-120px)]">
        {/* Left: ID Card */}
        <div className="p-0">
          <IdCard />
        </div>

        {/* Right: Console + Chat Box */}
        <div className="p-0 border-l border-thin">
          <RightPanel
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onCommandSubmit={handleCommandSubmit}
            validCommands={validCommands}
            errorMessages={consoleMessages}
          />
        </div>
      </main>

      {/* Footer - 40px height (DECORATION ONLY) */}
      <footer className="h-[40px] bg-hud-panel border-t border-thin flex items-center justify-between px-6 pt-0">
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
