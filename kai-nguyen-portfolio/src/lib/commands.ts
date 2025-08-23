import { Command, ConsoleMessage } from "@/types/index";
import { personalData } from "./data/personal-data";

/**
 * Command registry - defines all available CLI commands
 * Clean, simple structure perfect for a portfolio
 */
export const commands: Record<string, Command> = {
  // Help command: Display all available commands
  help: {
    name: "help",
    description: "Show all available commands",
    run: (): ConsoleMessage[] => [
      { type: "text" as const, content: "Available commands:" },
      { type: "text" as const, content: "" },
      {
        type: "text" as const,
        content: "  help        - Show this help message",
      },
      { type: "text" as const, content: "  about       - Learn about me" },
      {
        type: "text" as const,
        content: "  projects    - View my selected projects",
      },
      {
        type: "text" as const,
        content: "  experience  - View my work experience",
      },
      { type: "text" as const, content: "  education   - View my education" },
      {
        type: "text" as const,
        content: "  skills      - Technical skills overview",
      },
      { type: "text" as const, content: "  home        - Go to home screen" },
      { type: "text" as const, content: "" },
      {
        type: "text" as const,
        content: "Tip: Click on command chips or type directly in the console!",
      },
    ],
  },

  // About command: Display information about me
  about: {
    name: "about",
    description: "Learn about me",
    run: (): ConsoleMessage[] => [
      { type: "text" as const, content: `Who is ${personalData.name}?` },
      { type: "text" as const, content: "" },
      { type: "text" as const, content: personalData.bio },
      { type: "text" as const, content: "" },
      { type: "text" as const, content: ` Location: ${personalData.location}` },
      { type: "text" as const, content: ` Role: ${personalData.role}` },
      { type: "text" as const, content: "" },
      {
        type: "text" as const,
        content:
          " I love building innovative solutions and learning new technologies.",
      },
      {
        type: "text" as const,
        content:
          "When I'm not coding, you can find me exploring new frameworks or contributing to open source.",
      },
    ],
  },

  // Projects command: Display my selected projects
  projects: {
    name: "projects",
    description: "View my selected projects",
    run: () => [
      { type: "text", content: "Selected Projects:" },
      {
        type: "gallery",
        items: personalData.projects.map((project) => ({
          src: project.image,
          alt: project.alt,
          caption: project.name,
        })),
      },
      {
        type: "text",
        content: 'Type "project <name>" for details, or click a thumbnail.',
      },
    ],
  },

  // Experience command: Display my work experience
  experience: {
    name: "experience",
    description: "Display my work experience",
    run: () => {
      const messages: ConsoleMessage[] = [
        { type: "text", content: "Work Experience:" },
        { type: "divider" },
      ];

      personalData.experience.forEach((exp) => {
        messages.push(
          {
            type: "text",
            content: `${exp.title.toUpperCase()} | ${exp.company}`,
          },
          { type: "text", content: exp.period },
          ...exp.description.map((desc) => ({
            type: "text" as const,
            content: `  • ${desc}`,
          })),
          { type: "text", content: "" }
        );
      });

      messages.push({
        type: "text",
        content: 'Type "projects" to see my portfolio work!',
      });
      return messages;
    },
  },

  // Education command: Display my education
  education: {
    name: "education",
    description: "Display my education",
    run: () => {
      const messages: ConsoleMessage[] = [
        { type: "text", content: "Education:" },
        { type: "divider" },
      ];

      personalData.education.forEach((edu) => {
        messages.push(
          { type: "text", content: edu.degree.toUpperCase() },
          { type: "text", content: `${edu.institution} | ${edu.period}` },
          ...(edu.gpa
            ? [{ type: "text" as const, content: `  • GPA: ${edu.gpa}` }]
            : []),
          ...(edu.awards?.map((award) => ({
            type: "text" as const,
            content: `  • ${award}`,
          })) || []),
          ...(edu.coursework?.map((course) => ({
            type: "text" as const,
            content: `  • ${course}`,
          })) || []),
          { type: "text", content: "" }
        );
      });

      messages.push({
        type: "text",
        content:
          "Continuous learning through online courses and tech conferences!",
      });
      return messages;
    },
  },

  // Skills command: Display my technical skills
  skills: {
    name: "skills",
    description: "Display my technical skills",
    run: () => {
      const messages: ConsoleMessage[] = [
        { type: "text", content: "Technical Skills:" },
        { type: "divider" },
      ];

      Object.entries(personalData.skills).forEach(([category, skills]) => {
        const categoryName =
          category === "aiMl" ? "AI/ML" : category.toUpperCase();
        messages.push(
          { type: "text", content: `${categoryName}:` },
          { type: "text", content: `  • ${skills.join(", ")}` },
          { type: "text", content: "" }
        );
      });

      messages.push({
        type: "text",
        content: "Always learning and adapting to new technologies!",
      });
      return messages;
    },
  },

  // Home command: Go to home screen
  home: {
    name: "home",
    description: "Go to home screen",
    run: () => [], // Return empty array since Console component handles clearing
  },
};

/**
 * Enhanced command processor with better error handling and suggestions
 */
export function runCommand(cmd: string): ConsoleMessage[] {
  // Handle empty input
  const trimmedCmd = cmd.trim();
  if (!trimmedCmd) {
    return [
      {
        type: "text",
        content: 'Type a command or "help" for available commands.',
      },
    ];
  }

  const [command] = trimmedCmd.toLowerCase().split(" ");

  // Check if command exists
  if (commands[command]) {
    const result = commands[command].run();
    return Array.isArray(result) ? result : [];
  }

  // Provide helpful suggestions for similar commands
  const similarCommands = Object.keys(commands).filter(
    (cmd) =>
      cmd.includes(command) ||
      command.includes(cmd) ||
      // Check for common typos
      (cmd === "projects" && command === "projet")
  );

  const suggestions =
    similarCommands.length > 0
      ? `Did you mean: ${similarCommands.join(", ")}?`
      : 'Type "help" for available commands.';

  return [
    { type: "text", content: `Command not found: ${command}` },
    { type: "text", content: suggestions },
  ];
}
