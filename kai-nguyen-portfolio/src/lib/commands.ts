import { Command, ConsoleMessage } from "@/types/index";

/**
 * Command registry - defines all available CLI commands
 * Each command has a name, description, and run function
 * This modular approach makes it easy to add new commands
 * Using a record (object) to map command names to their definitions
 */
export const commands: Record<string, Command> = {
  //Help command: Display all available commands
  help: {
    name: "help",
    description: "Show all available commands",
    run: () => [
      { type: "text", content: "Available commands:" },
      { type: "text", content: "" }, // Empty line for spacing

      // List each command with description (formatted for terminal look)
      { type: "text", content: "  help        - Show this help message" },
      { type: "text", content: "  about       - Learn about me" },
      { type: "text", content: "  projects    - View my selected projects" },
      { type: "text", content: "  experience  - View my work experience" },
      { type: "text", content: "  education   - View my education" },
      { type: "text", content: "  skills      - Technical skills overview" },
      { type: "text", content: "  contact     - Get in touch" },
      { type: "text", content: "  clear       - Clear the console" },
      { type: "text", content: "" },

      //Helpful tip for new users
      {
        type: "text",
        content: "Tip: Click on command chips or type directly in the console!",
      },
    ],
  },

  //About command: Display information about me
  about: {
    name: "about",
    description: "Learn about me",
    run: () => [
      { type: "text", content: "Who is Kai Nguyen?" },
      { type: "text", content: "" }, //spacing
      {
        type: "text",
        content:
          "I'm a software engineer with a passion for building innovative solutions.",
      },
      { type: "text", content: "Placeholder for more information..." },
      { type: "text", content: "Placeholder for more information..." },
      { type: "text", content: "Placeholder for more information..." },
    ],
  },

  //Projects command: Display my selected projects
  projects: {
    name: "projects",
    description: "View my selected projects",
    run: () => [
      { type: "text", content: "Selected Projects:" },

      //Gallery type displays clickacble project thumbnails,
      {
        type: "gallery",
        items: [
          {
            src: "/img/fitness-1.png",
            alt: "Fitness tracking dashboard interface",
            caption: "Fitness App",
          },
          {
            src: "/img/chat-1.png",
            alt: "Real-time chat application UI",
            caption: "Realtime Chat",
          },
          {
            src: "/img/terminal-1.png",
            alt: "HUD-style terminal portfolio",
            caption: "This Portfolio",
          },
        ],
      },

      //Instruction for getting more details
      {
        type: "text",
        content: 'Type "project <name> for details, or click a thumbnail.',
      },
    ],
  },

  //Experience command: Display my work experience
  experience: {
    name: "experience",
    description: "Display my work experience",
    run: () => [
      { type: "text", content: "Work Experience:" },
      { type: "divider" },

      // Format like a professional resume but terminal-style
      { type: "text", content: "SENIOR SOFTWARE ENGINEER | TechCorp Inc." }, // Replace with actual
      { type: "text", content: "2022 - Present" },
      {
        type: "text",
        content: "  • Led development of AI-powered customer service platform",
      },
      {
        type: "text",
        content: "  • Improved system performance by 40% through optimization",
      },
      {
        type: "text",
        content: "  • Mentored junior developers and conducted code reviews",
      },
      { type: "text", content: "" },

      { type: "text", content: "FULL-STACK DEVELOPER | StartupXYZ" }, // Replace with actual
      { type: "text", content: "2020 - 2022" },
      {
        type: "text",
        content: "  • Built scalable web applications serving 10k+ users",
      },
      {
        type: "text",
        content:
          "  • Implemented real-time features using WebSocket technology",
      },
      {
        type: "text",
        content: "  • Collaborated with design team to create intuitive UIs",
      },
      { type: "text", content: "" },

      { type: "text", content: "SOFTWARE ENGINEER INTERN | BigTech Corp" }, // Replace with actual
      { type: "text", content: "2019 - 2020" },
      {
        type: "text",
        content: "  • Developed internal tools that saved 20+ hours per week",
      },
      {
        type: "text",
        content: "  • Worked with machine learning models for data analysis",
      },
      {
        type: "text",
        content: "  • Participated in agile development processes",
      },
      { type: "text", content: "" },

      { type: "text", content: 'Type "projects" to see my portfolio work!' },
    ],
  },

  //Education command: Display my education
  education: {
    name: "education",
    description: "Display my education",
    run: () => [
      { type: "text", content: "Education:" },
      { type: "divider" },

      { type: "text", content: "MASTER OF SCIENCE - COMPUTER SCIENCE" }, // Replace with actual
      { type: "text", content: "University of Technology | 2018 - 2020" },
      {
        type: "text",
        content:
          "  • Specialization: Artificial Intelligence & Machine Learning",
      },
      {
        type: "text",
        content:
          '  • Thesis: "Deep Learning Applications in Natural Language Processing"',
      },
      { type: "text", content: "  • GPA: 3.8/4.0" },
      { type: "text", content: "" },

      {
        type: "text",
        content: "BACHELOR OF ENGINEERING - SOFTWARE ENGINEERING",
      }, // Replace with actual
      { type: "text", content: "Tech University | 2014 - 2018" },
      { type: "text", content: "  • Magna Cum Laude, Dean's List" },
      {
        type: "text",
        content:
          "  • Relevant Coursework: Data Structures, Algorithms, Databases",
      },
      {
        type: "text",
        content: "  • Senior Project: Real-time Collaborative Code Editor",
      },
      { type: "text", content: "" },

      { type: "text", content: "CERTIFICATIONS:" },
      { type: "text", content: "  • AWS Certified Solutions Architect (2023)" },
      {
        type: "text",
        content: "  • Google Cloud Professional Developer (2022)",
      },
      { type: "text", content: "  • TensorFlow Developer Certificate (2021)" },
      { type: "text", content: "" },

      {
        type: "text",
        content:
          "Continuous learning through online courses and tech conferences!",
      },
    ],
  },

  //Skills command: Display my technical skills
  skills: {
    name: "skills",
    description: "Display my technical skills",
    run: () => [
      { type: "text", content: "Technical Skills:" },
      { type: "divider" },

      // Organize skills by category for clarity
      { type: "text", content: "FRONTEND:" },
      { type: "text", content: "  • React, Next.js 14, TypeScript" },
      { type: "text", content: "  • Tailwind CSS, Framer Motion" },
      { type: "text", content: "  • HTML5, CSS3, JavaScript ES6+" },
      { type: "text", content: "" },

      { type: "text", content: "BACKEND:" },
      { type: "text", content: "  • Node.js, Express, Python" },
      { type: "text", content: "  • PostgreSQL, MongoDB, Redis" },
      { type: "text", content: "  • REST APIs, GraphQL, WebSockets" },
      { type: "text", content: "" },

      { type: "text", content: "AI/ML:" },
      { type: "text", content: "  • TensorFlow, PyTorch, Scikit-learn" },
      { type: "text", content: "  • Natural Language Processing" },
      { type: "text", content: "  • Computer Vision, Deep Learning" },
      { type: "text", content: "" },

      { type: "text", content: "TOOLS & PLATFORMS:" },
      { type: "text", content: "  • Git, Docker, AWS, Vercel" },
      { type: "text", content: "  • VS Code, Linux, CI/CD" },
      { type: "text", content: "" },

      {
        type: "text",
        content: "Always learning and adapting to new technologies!",
      },
    ],
  },

  //Contact command: Display my contact information
  ontact: {
    name: "contact",
    description: "Display my contact information",
    run: () => [
      { type: "text", content: "Contact Information:" },
      { type: "divider" },
      { type: "text", content: "EMAIL:" },
      { type: "text", content: "  duchai.nv0909@gmail.com" },
      { type: "text", content: "" },

      { type: "text", content: "SOCIAL:" },
      { type: "text", content: "  GitHub: github.com/haidangve" },
      { type: "text", content: "  LinkedIn: linkedin.com/in/kai-nguyen09" },
      { type: "text", content: "  Instagram: @nvdh_ai" },
      { type: "text", content: "" },

      {
        type: "text",
        content: "Feel free to reach out for collaboration opportunities!",
      },
    ],
  },

  //Clear command: Clear the console
  clear: {
    name: "clear",
    description: "Clear the console",
    run: () => [{ type: "text", content: "" }],
  },
};

/**
 * Enhanced command processor with better error handling and suggestions
 */
export function runCommand(cmd: string): ConsoleMessage[] {
    // Handle empty input
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) {
      return [{ type: "text", content: 'Type a command or "help" for available commands.' }];
    }
  
    const [command, ...args] = trimmedCmd.toLowerCase().split(" ");
  
    // Check if command exists
    if (commands[command]) {
      const result = commands[command].run();
      return Array.isArray(result) ? result : [];
    }
  
    // Provide helpful suggestions for similar commands
    const similarCommands = Object.keys(commands).filter(cmd => 
      cmd.includes(command) || command.includes(cmd) || 
      // Check for common typos
      (cmd === 'ontact' && command === 'contact') ||
      (cmd === 'projet' && command === 'projects')
    );
  
    const suggestions = similarCommands.length > 0 
      ? `Did you mean: ${similarCommands.join(', ')}?`
      : 'Type "help" for available commands.';
  
    return [
      { type: "text", content: `Command not found: ${command}` },
      { type: "text", content: suggestions }
    ];
  }
