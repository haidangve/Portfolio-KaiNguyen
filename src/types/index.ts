
//Console message types - each has different properties based on type
export type ConsoleMessage =
  | { type: "cmd"; content: string }
  | { type: "text"; content: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    }
  | {
      type: "gallery";
      items: Array<{ src: string; alt: string; caption?: string }>;
      maxRow?: number;
    }// Multiple images in a row
  | { type: "divider" }; // Visual separator line

export type Command = {
  name: string;
  description: string;
  run: () => ConsoleMessage[] | Promise<ConsoleMessage[]>; //// Execution function
};

export interface IdCardProps {
  name: string; //Full Name
  role: string; //Profession
  location: string; //Location
  id: string; //Unique Identifier
  avatarUrl: string; //Profile image URL
}

export interface ChipProps {
  label: string;
  value: string;
  active?: boolean; //visual active state
  onClick: (value: string) => void; //click handler
}
/**
 * Props for HUD-style panel containers
 * Reusable component for consistent styling
 */

export interface PanelProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode; //Panel Content
  className?: string;
}

/**
 * Props for the main console component
 * Manages command output display and user input
 */
export interface ConsoleProps {
  logs: ConsoleMessage[];           // Array of messages to display
  onRun: (cmd: string) => void;     // Command execution handler
}

/**
 * Props for the command input component
 * Handles user typing and command history
 */
export interface PromptInputProps {
  onSubmit: (cmd: string) => void;  // Form submission handler
  disabled?: boolean;               // Disable input during processing
}
