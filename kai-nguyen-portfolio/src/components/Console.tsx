import React from "react";
import { Chip } from "@/components/ui/Chip";
import { personalData } from "@/lib/data/personal-data";

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
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ help
            </div>
            <div className="text-hud-text font-bold text-lg mt-4 mb-2">
              📋 Available Commands:
            </div>
            <div className="space-y-1 ml-4">
              <div className="text-hud-text">
                <span className="text-hud-accent font-mono">help</span> - Show
                this help message
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-mono">about</span> - Learn
                about me
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-mono">projects</span> -
                View my selected projects
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-mono">skills</span> -
                Technical skills overview
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-mono">experience</span> -
                View my work experience
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-mono">education</span> -
                View my education
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-mono">home</span> - Go to
                home screen
              </div>
            </div>
          </>
        );
      case "about":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ about
            </div>
            <div className="text-hud-text font-bold text-lg mt-4 mb-2">
              👨‍💻 About Me:
            </div>
            <div className="space-y-2 ml-4">
              <div className="text-hud-text">
                Hi, I'm{" "}
                <span className="text-hud-accent font-bold">
                  {personalData.name}
                </span>
                , a passionate {personalData.role} from Vietnam.
              </div>
              <div className="text-hud-text">{personalData.bio}</div>
              <div className="text-hud-text mt-4">
                <span className="text-hud-accent font-bold">🌍 Location:</span>{" "}
                {personalData.location}
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-bold">📧 Email:</span>{" "}
                {personalData.email}
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-bold">💼 Status:</span>{" "}
                Open to new opportunities
              </div>
            </div>
          </>
        );
      case "projects":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ projects
            </div>
            <div className="text-hud-text font-bold text-lg mt-4 mb-2">
              🚀 Featured Projects:
            </div>
            <div className="space-y-4 ml-4">
              {personalData.projects.map((project, index) => (
                <div
                  key={index}
                  className="border-l-2 border-hud-accent/30 pl-4"
                >
                  <div className="text-hud-accent font-bold">
                    {project.name}
                  </div>
                  <div className="text-hud-text text-sm">
                    {project.description}
                  </div>
                  <div className="text-hud-text/60 text-xs mt-1">
                    <span className="text-hud-accent">Tech:</span>{" "}
                    {project.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "skills":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ skills
            </div>
            <div className="text-hud-text font-bold text-lg mt-4 mb-2">
              🛠️ Technical Skills:
            </div>
            <div className="space-y-2 ml-4">
              <div className="text-hud-text">
                <span className="text-hud-accent font-bold">Frontend:</span>{" "}
                {personalData.skills.frontend.join(", ")}
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-bold">Backend:</span>{" "}
                {personalData.skills.backend.join(", ")}
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-bold">AI/ML:</span>{" "}
                {personalData.skills.aiMl.join(", ")}
              </div>
              <div className="text-hud-text">
                <span className="text-hud-accent font-bold">Tools:</span>{" "}
                {personalData.skills.tools.join(", ")}
              </div>
            </div>
          </>
        );
      case "experience":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ experience
            </div>
            <div className="text-hud-text font-bold text-lg mt-4 mb-2">
              💼 Work Experience:
            </div>
            <div className="space-y-3 ml-4">
              {personalData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-hud-accent/30 pl-4"
                >
                  <div className="text-hud-accent font-bold">{exp.title}</div>
                  <div className="text-hud-text text-sm">{exp.company}</div>
                  <div className="text-hud-text/60 text-xs">{exp.period}</div>
                  <div className="text-hud-text/70 text-xs mt-1">
                    {exp.description.map((desc, i) => (
                      <div key={i}>• {desc}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "education":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ education
            </div>
            <div className="text-hud-text font-bold text-lg mt-4 mb-2">
              🎓 Education:
            </div>
            <div className="space-y-2 ml-4">
              {personalData.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-hud-accent/30 pl-4"
                >
                  <div className="text-hud-accent font-bold">{edu.degree}</div>
                  <div className="text-hud-text text-sm">{edu.institution}</div>
                  <div className="text-hud-text/60 text-xs">{edu.period}</div>
                  {edu.gpa && (
                    <div className="text-hud-text/60 text-xs">
                      GPA: {edu.gpa}
                    </div>
                  )}
                  {edu.description && (
                    <div className="text-hud-text/70 text-xs mt-1">
                      {edu.description.map((desc, i) => (
                        <div key={i}>• {desc}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        );
      case "home":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ home
            </div>
            <div className="text-hud-text/50 mt-4">
              Type 'help' to see available commands.
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ welcome
            </div>
            <div className="text-hud-text mt-4">
              Hi, I'm Kai Nguyen, a Software Engineer.
            </div>
            <div className="text-hud-text">
              Welcome to my interactive portfolio terminal!
            </div>
            <div className="text-hud-text mt-4">
              Type 'help' to see available commands.
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col border border-hud-accent/30 shadow-[0_0_8px_rgba(255,107,53,0.2)]">
      {/* Console Header */}
      <div className="bg-hud-accent/10 border-b border-hud-accent/30 px-6 py-2">
        <h2 className="text-sm font-title text-hud-accent uppercase tracking-widest">
          TERMINAL
        </h2>
      </div>

      {/* Tabs - Chrome Style */}
      <div className="flex bg-hud-panel">
        <Chip
          active={activeTab === "home"}
          onClick={() => onTabChange("home")}
          isFirst={true}
        >
          home
        </Chip>
        <Chip
          active={activeTab === "help"}
          onClick={() => onTabChange("help")}
          isAfterActive={activeTab === "home"}
        >
          help
        </Chip>
        <Chip
          active={activeTab === "about"}
          onClick={() => onTabChange("about")}
          isAfterActive={activeTab === "help"}
        >
          about
        </Chip>
        <Chip
          active={activeTab === "projects"}
          onClick={() => onTabChange("projects")}
          isAfterActive={activeTab === "about"}
        >
          projects
        </Chip>
        <Chip
          active={activeTab === "experience"}
          onClick={() => onTabChange("experience")}
          isAfterActive={activeTab === "projects"}
        >
          experience
        </Chip>
        <Chip
          active={activeTab === "education"}
          onClick={() => onTabChange("education")}
          isAfterActive={activeTab === "experience"}
        >
          education
        </Chip>
        <Chip
          active={activeTab === "skills"}
          onClick={() => onTabChange("skills")}
          isAfterActive={activeTab === "education"}
        >
          skills
        </Chip>
      </div>

      {/* Console Content - Display Tab Content */}
      <div className="flex-1 overflow-y-auto space-y-4 font-content text-sm p-6 bg-hud-panel relative">
        {/* Subtle top border for merged effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-hud-accent/30"></div>
        {errorMessages.length > 0 ? (
          <div className="space-y-2">
            {errorMessages.map((message, index) => (
              <div key={index} className="text-hud-accent font-mono">
                ❌ {message}
              </div>
            ))}
          </div>
        ) : (
          getConsoleContent(activeTab)
        )}
      </div>
    </div>
  );
}
