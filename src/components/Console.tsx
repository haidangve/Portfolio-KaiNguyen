import React, { useState, useEffect } from "react";
import { Chip } from "@/components/ui/Chip";
import { MediaHolder } from "@/components/ui/MediaHolder";
import { personalData } from "@/lib/data/personal-data";
import { Mail, Github, Linkedin, Instagram, Download } from "lucide-react";
import { ContactCard } from "@/components/ui/ContactCard";

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
  const [isLoading, setIsLoading] = useState(false);
  const [currentContent, setCurrentContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (activeTab) {
      setIsLoading(true);

      // Simulate loading delay
      const timeout = setTimeout(() => {
        setCurrentContent(getConsoleContent(activeTab));
        setIsLoading(false);
      }, 800);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [activeTab]);

  const getConsoleContent = (tab: string) => {
    switch (tab) {
      case "help":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ help
            </div>

            <div className="space-y-1 ml-4 mt-2">
              <div className="text-hud-text/80">
                <span className="text-hud-accent font-mono">help</span> - Show
                this help message
              </div>
              <div className="text-hud-text/80">
                <span className="text-hud-accent font-mono">about</span> - Learn
                about me
              </div>
              <div className="text-hud-text/80">
                <span className="text-hud-accent font-mono">projects</span> -
                View my selected projects
              </div>
              <div className="text-hud-text/80">
                <span className="text-hud-accent font-mono">skills</span> -
                Technical skills overview
              </div>
              <div className="text-hud-text/80">
                <span className="text-hud-accent font-mono">experience</span> -
                View my work experience
              </div>
              <div className="text-hud-text/80">
                <span className="text-hud-accent font-mono">education</span> -
                View my education
              </div>
              <div className="text-hud-text/80">
                <span className="text-hud-accent font-mono">contact</span> - Get
                in touch and download resume
              </div>
              <div className="text-hud-text/80">
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
            <div className="ml-4 mt-2">
              <div className="text-hud-text/80 text-base leading-relaxed">
                {personalData.bio.split(/(\*\*.*?\*\*)/).map((part, index) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    // Remove the ** markers and highlight the text
                    const highlightedText = part.slice(2, -2);
                    return (
                      <span
                        key={index}
                        className="text-hud-accent font-semibold"
                      >
                        {highlightedText}
                      </span>
                    );
                  }
                  return <span key={index}>{part}</span>;
                })}
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

            <div className="space-y-4 ml-4">
              {personalData.projects.map((project, index) => (
                <div key={index} className="flex gap-3">
                  {/* Project Thumbnail */}
                  <MediaHolder className="w-40 h-28 lg:w-48 lg:h-32">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover object-center rounded-sm"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </MediaHolder>

                  {/* Project Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-hud-accent font-bold hover:text-hud-accent/80 transition-colors cursor-pointer underline"
                      >
                        {project.name}
                      </a>
                      <span className="text-hud-accent/60">↗</span>
                    </div>
                    <div className="text-hud-text/80 text-sm mb-1 leading-relaxed">
                      {project.description}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-hud-accent/10 text-hud-accent text-xs rounded border border-hud-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
            <div className="space-y-3 ml-4">
              <div>
                <div className="text-hud-accent font-bold mb-2">Frontend</div>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.frontend.slice(0, 8).map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-hud-accent/10 text-hud-accent text-sm rounded border border-hud-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-hud-accent font-bold mb-2">Backend</div>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.backend.slice(0, 6).map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-hud-accent/10 text-hud-accent text-sm rounded border border-hud-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-hud-accent font-bold mb-2">
                  Tools & Platforms
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.tools.slice(0, 8).map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-hud-accent/10 text-hud-accent text-sm rounded border border-hud-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
            <div className="space-y-3 ml-4">
              {personalData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-hud-accent/30 pl-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-hud-accent font-bold">
                      {exp.title}
                    </span>
                    <span className="text-hud-text/60 text-sm">
                      @{" "}
                      {exp.companyLink ? (
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-hud-text/60 hover:text-hud-accent/80 transition-colors underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </span>
                  </div>
                  <div className="text-hud-text/60 text-sm mb-2">
                    {exp.period}
                  </div>
                  <div className="text-hud-text/80 text-sm">
                    {exp.description.slice(0, 2).map((desc, i) => (
                      <div key={i} className="mb-1">
                        • {desc}
                      </div>
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
            <div className="space-y-3 ml-4 mt-2">
              {personalData.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-hud-accent/30 pl-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-hud-accent font-bold">
                      {edu.degree}
                    </span>
                  </div>
                  <div className="text-hud-text/80 text-sm mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-hud-text/60 text-sm mb-2">
                    {edu.period}
                  </div>
                  {edu.gpa && (
                    <div className="text-hud-text/60 text-sm mb-2">
                      GPA: {edu.gpa}
                    </div>
                  )}
                  {edu.awards && edu.awards.length > 0 && (
                    <div className="mb-2">
                      <div className="text-hud-accent font-semibold text-sm mb-1">
                        Awards & Recognition
                      </div>
                      {edu.awards.map((award, i) => (
                        <div key={i} className="text-hud-text/80 text-sm mb-1">
                          • {award}
                        </div>
                      ))}
                    </div>
                  )}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div>
                      <div className="text-hud-accent font-semibold text-sm mb-1">
                        Relevant Coursework
                      </div>
                      <div className="text-hud-text/80 text-sm">
                        {edu.coursework.join(", ")}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        );
      case "contact":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ contact
            </div>
            <div className="ml-4 mt-2 space-y-3">
              <div className="text-hud-text/80">
                Let&apos;s connect! Here&apos;s how to reach me:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ContactCard
                  icon={Mail}
                  label="Email"
                  href={`mailto:${personalData.email}`}
                  external={false}
                />
                <ContactCard
                  icon={Github}
                  label="GitHub"
                  href={`https://${personalData.social.github}`}
                />
                <ContactCard
                  icon={Linkedin}
                  label="LinkedIn"
                  href={`https://${personalData.social.linkedin}`}
                />
                <ContactCard
                  icon={Instagram}
                  label="Instagram"
                  href="https://instagram.com/nvdh_ai"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-hud-accent/20">
                <div className="text-hud-text/80 mb-3">Download my resume:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ContactCard
                    icon={Download}
                    label="Resume.pdf"
                    href="https://drive.google.com/file/d/1O6tJD4kJrdcXpCtYku3lAf6RTN7_6C37/view?usp=sharing"
                  />
                </div>
              </div>
            </div>
          </>
        );
      case "home":
        return (
          <>
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ home
            </div>
            <div className="text-hud-text/80">
              Welcome to my interactive portfolio terminal!
            </div>
            <div className="text-hud-text/80 mt-2">
              Type &apos;help&apos; to see available commands.
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
              Hi, I&apos;m Kai Nguyen, a Software Engineer.
            </div>
            <div className="text-hud-text">
              Welcome to my interactive portfolio terminal!
            </div>
            <div className="text-hud-text mt-4">
              Type &apos;help&apos; to see available commands.
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col border border-hud-accent/30 shadow-[0_0_8px_rgba(255,107,53,0.2)] min-h-0">
      {/* Console Header */}
      <div className="bg-hud-accent/10 border-b border-hud-accent/30 px-6 py-3 lg:py-4">
        <h2 className="text-sm font-title text-hud-accent uppercase tracking-widest">
          TERMINAL
        </h2>
      </div>

      {/* Tabs - Chrome Style - Hidden on mobile */}
      <div className="hidden lg:flex bg-hud-panel overflow-x-auto">
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
          active={activeTab === "experience"}
          onClick={() => onTabChange("experience")}
          isAfterActive={activeTab === "about"}
        >
          experience
        </Chip>
        <Chip
          active={activeTab === "projects"}
          onClick={() => onTabChange("projects")}
          isAfterActive={activeTab === "experience"}
        >
          projects
        </Chip>
        <Chip
          active={activeTab === "education"}
          onClick={() => onTabChange("education")}
          isAfterActive={activeTab === "projects"}
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
      <div className="flex-1 overflow-y-auto space-y-2 font-content text-base p-3 lg:p-6 bg-hud-panel relative min-h-0 console-content pb-4">
        {/* Subtle top border for merged effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-hud-accent/30"></div>
        {errorMessages.length > 0 ? (
          <div className="space-y-2">
            {errorMessages.map((message, index) => (
              <div key={index} className="text-hud-accent font-mono">
                Error: {message}
              </div>
            ))}
          </div>
        ) : isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="text-hud-accent font-mono font-bold">
              kai@portfolio:~$ {activeTab}
            </div>
            <div className="text-hud-accent font-mono animate-pulse">
              Loading...
            </div>
          </div>
        ) : (
          <div className="space-y-2">{currentContent}</div>
        )}
      </div>
    </div>
  );
}
