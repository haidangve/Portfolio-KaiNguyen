//Import clsx for conditional class names and twMerge for merging tailwind classes
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine and merge Tailwind CSS classes
 * This is a common pattern in modern React apps for conditional styling
 *
 * Example usage:
 * cn("bg-blue-500", isActive && "bg-red-500", className)
 *
 * @param inputs - Array of class values (strings, conditionals, etc.)
 * @returns Merged and deduplicated class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Centralized fuzzy search utility for command matching
 * Handles exact matches, prefix matching, substring matching, and character similarity
 *
 * @param input - User input to match against
 * @param validCommands - Array of valid commands to search through
 * @returns Closest matching command or null if no good match found
 */
export function findClosestCommand(
  input: string,
  validCommands: string[]
): string | null {
  if (!input.trim()) return null;

  const inputLower = input.toLowerCase().trim();
  let bestMatch: string | null = null;
  let bestScore = 0;

  for (const command of validCommands) {
    const commandLower = command.toLowerCase();

    // Exact match gets highest priority
    if (commandLower === inputLower) {
      return command;
    }

    // Check if input is a substring of command (prefix matching)
    if (commandLower.startsWith(inputLower)) {
      const score = inputLower.length / commandLower.length;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = command;
      }
    }

    // Check if command contains input as substring
    if (commandLower.includes(inputLower)) {
      const score = (inputLower.length / commandLower.length) * 0.8; // Slightly lower score
      if (score > bestScore) {
        bestScore = score;
        bestMatch = command;
      }
    }

    // Simple character matching for typos
    let charMatches = 0;
    let inputIndex = 0;
    for (
      let i = 0;
      i < commandLower.length && inputIndex < inputLower.length;
      i++
    ) {
      if (commandLower[i] === inputLower[inputIndex]) {
        charMatches++;
        inputIndex++;
      }
    }

    if (charMatches > 0) {
      const score =
        (charMatches / Math.max(inputLower.length, commandLower.length)) * 0.6;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = command;
      }
    }
  }

  // Only return match if similarity is above threshold
  return bestScore > 0.3 ? bestMatch : null;
}

/**
 * Manages command history for the CLI interface
 * Prevents duplicates and limits history size for performance
 *
 * @param command - New command to add to history
 * @param history - Current command history array
 * @returns Updated history array with new command at front
 */
export function addToHistory(command: string, history: string[]) {
  //Remove duplicates by checking if the command is already in the history
  //If it is, remove it from the history
  //If it is not, add it to the front of the history
  const newHistory = [command, ...history.filter((cmd) => cmd !== command)];

  //Keep only the last 50 commands for memory management
  //slice(0, 50) returns a new array with the first 50 elements
  return newHistory.slice(0, 50);
}

/**
 * Formats current time for HUD displays
 * Uses 24-hour format to match the futuristic/terminal aesthetic
 *
 * @returns Time string in HH:MM:SS format
 */
export function getCurrentTime(): string {
  const now = new Date();
  return now.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
