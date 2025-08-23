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

export function formatTime(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour12: false, //24 hour format
    hour: "2-digit", //2 digits for hour
    minute: "2-digit", //2 digits for minute
    second: "2-digit", //2 digits for second
  });
}
