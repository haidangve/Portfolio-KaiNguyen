import React from "react";
import { Chip } from "@/components/ui/Chip";

interface ConsoleProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  errorMessages?: string[];
}

export function Console({
  activeTab,
  onTabChange,
  errorMessages = [],
}: ConsoleProps) {
  const getConsoleContent = (tab: string) => {
    switch (tab) {
      case "help":
        return (
          <>
            <div className="text-hud-accent font-bold">
              kai@portfolio:~$ help
            </div>
            <div className="text-hud-text font-bold">Available commands:</div>
            <div className="text-hud-text"> help - Show this help message</div>
            <div className="text-hud-text"> about - Learn about me</div>
            <div className="text-hud-text">
              {" "}
              projects - View my selected projects
            </div>
            <div className="text-hud-text">
              {" "}
              skills - Technical skills overview
            </div>
            <div className="text-hud-text">
              {" "}
              experience - View my work experience
            </div>
            <div className="text-hud-text"> education - View my education</div>
            <div className="text-hud-text"> home - Go to home screen</div>
          </>
        );
      case "about":
        return (
          <>
            <div className="text-hud-accent font-bold">
              kai@portfolio:~$ about
            </div>
            <div className="text-hud-text">
              Hi, I'm Kai Nguyen, a Software Engineer from Vietnam.
            </div>
            <div className="text-hud-text">
              I specialize in full-stack development and love creating
            </div>
            <div className="text-hud-text">
              interactive, user-friendly applications.
            </div>
          </>
        );
      case "projects":
        return (
          <>
            <div className="text-hud-accent font-bold">
              kai@portfolio:~$ projects
            </div>
            <div className="text-hud-text font-bold">Selected Projects:</div>
            <div className="text-hud-text">
              {" "}
              • Fitness App - React Native, Node.js
            </div>
            <div className="text-hud-text">
              {" "}
              • Chat Application - Socket.io, Express
            </div>
            <div className="text-hud-text">
              {" "}
              • This Portfolio - Next.js, TypeScript
            </div>
          </>
        );
      case "skills":
        return (
          <>
            <div className="text-hud-accent font-bold">
              kai@portfolio:~$ skills
            </div>
            <div className="text-hud-text font-bold">Technical Skills:</div>
            <div className="text-hud-text">
              {" "}
              Frontend: React, Next.js, TypeScript, Tailwind CSS
            </div>
            <div className="text-hud-text">
              {" "}
              Backend: Node.js, Express, Python, Django
            </div>
            <div className="text-hud-text">
              {" "}
              Database: MongoDB, PostgreSQL, Redis
            </div>
          </>
        );
      case "experience":
        return (
          <>
            <div className="text-hud-accent font-bold">
              kai@portfolio:~$ experience
            </div>
            <div className="text-hud-text font-bold">Work Experience:</div>
            <div className="text-hud-text">
              {" "}
              • Software Engineer - Tech Company (2023-Present)
            </div>
            <div className="text-hud-text">
              {" "}
              • Full-Stack Developer - Startup (2022-2023)
            </div>
            <div className="text-hud-text">
              {" "}
              • Frontend Developer - Agency (2021-2022)
            </div>
          </>
        );
      case "education":
        return (
          <>
            <div className="text-hud-accent font-bold">
              kai@portfolio:~$ education
            </div>
            <div className="text-hud-text font-bold">Education:</div>
            <div className="text-hud-text">
              {" "}
              • Bachelor's in Computer Science
            </div>
            <div className="text-hud-text"> • University of Technology</div>
            <div className="text-hud-text"> • Graduated: 2021</div>
          </>
        );
      case "home":
        return (
          <>
            <div className="text-hud-accent font-bold">
              kai@portfolio:~$ home
            </div>
            <div className="text-hud-text/50">
              Type 'help' to see available commands.
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="text-hud-accent font-bold">
              kai@portfolio:~$ welcome
            </div>
            <div className="text-hud-text">
              Hi, I'm Kai Nguyen, a Software Engineer.
            </div>
            <div className="text-hud-text">
              Welcome to my interactive portfolio terminal!
            </div>
            <div className="text-hud-text">
              Type 'help' to see available commands.
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-hud-panel hud-glow flex-1 flex flex-col">
      {/* Console Header */}
      <div className="bg-hud-accent/10 border-b border-hud-accent/30 px-6 py-2">
        <h2 className="text-sm font-title text-hud-accent uppercase tracking-widest">
          TERMINAL / CONSOLE
        </h2>
      </div>

      {/* Tabs - Chrome Style */}
      <div className="flex">
        <Chip active={activeTab === "home"} onClick={() => onTabChange("home")}>
          home
        </Chip>
        <Chip active={activeTab === "help"} onClick={() => onTabChange("help")}>
          help
        </Chip>
        <Chip
          active={activeTab === "about"}
          onClick={() => onTabChange("about")}
        >
          about
        </Chip>
        <Chip
          active={activeTab === "projects"}
          onClick={() => onTabChange("projects")}
        >
          projects
        </Chip>
        <Chip
          active={activeTab === "experience"}
          onClick={() => onTabChange("experience")}
        >
          experience
        </Chip>
        <Chip
          active={activeTab === "education"}
          onClick={() => onTabChange("education")}
        >
          education
        </Chip>
        <Chip
          active={activeTab === "skills"}
          onClick={() => onTabChange("skills")}
        >
          skills
        </Chip>
      </div>

      {/* Console Content - Display Tab Content */}
      <div className="flex-1 overflow-y-auto space-y-2 font-content text-sm p-6 bg-hud-panel border-l-2 border-r-2 border-t-2 border-b-2 border-hud-accent/50">
        {errorMessages.length > 0 ? (
          <>
            {errorMessages.map((message, index) => (
              <div key={index} className="text-hud-accent">
                {message}
              </div>
            ))}
          </>
        ) : (
          getConsoleContent(activeTab)
        )}
      </div>
    </div>
  );
}
