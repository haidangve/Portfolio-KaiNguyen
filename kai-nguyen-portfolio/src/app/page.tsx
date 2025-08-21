export default function Home() {
  return (
    <div className="min-h-screen bg-hud-bg text-hud-text font-mono">
      {/* Header - 120px height */}
      <header className="h-[120px] border-b border-hud-accent/20 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-hud-accent">Kai Nguyen</h1>
          <span className="text-hud-text/70">Software Engineer</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-hud-panel border border-hud-accent/30 rounded text-xs">
            ONLINE
          </div>
          <div className="px-3 py-1 bg-hud-panel border border-hud-accent/30 rounded text-xs">
            AVAILABLE
          </div>
        </div>
      </header>

      {/* Main Grid - Left: ID Card (510px), Right: Console (927px) */}
      <main className="grid grid-cols-1 lg:grid-cols-[510px_1fr] min-h-[calc(100vh-180px)]">
        {/* Left: ID Card */}
        <div className="lg:border-r border-hud-accent/20 p-6">
          <div className="bg-hud-panel border border-hud-accent/40 rounded-lg p-6 hud-glow h-full">
            <div className="bg-hud-accent/10 border-b border-hud-accent/30 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
              <h2 className="text-sm font-bold text-hud-accent uppercase tracking-widest">
                IDENTITY / VERIFIED
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-hud-text/50 text-xs uppercase tracking-widest">
                  NAME
                </p>
                <p className="text-hud-accent font-bold">Kai Nguyen</p>
              </div>
              <div>
                <p className="text-hud-text/50 text-xs uppercase tracking-widest">
                  ROLE
                </p>
                <p className="text-hud-text">Software Engineer</p>
              </div>
              <div>
                <p className="text-hud-text/50 text-xs uppercase tracking-widest">
                  LOCATION
                </p>
                <p className="text-hud-text">Vietnam</p>
              </div>
              <div>
                <p className="text-hud-text/50 text-xs uppercase tracking-widest">
                  ID
                </p>
                <p className="text-hud-text">NV-2024-001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Console */}
        <div className="p-6">
          <div className="bg-hud-panel border border-hud-accent/40 rounded-lg p-6 hud-glow h-full flex flex-col">
            {/* Console Header */}
            <div className="bg-hud-accent/10 border-b border-hud-accent/30 px-4 py-2 -mx-6 -mt-6 mb-6 rounded-t-lg">
              <h2 className="text-sm font-bold text-hud-accent uppercase tracking-widest">
                TERMINAL / CONSOLE
              </h2>
            </div>

            {/* Command Navigation Bar */}
            <div className="border-b border-hud-accent/20 pb-2 mb-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  help
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  about
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  projects
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  skills
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  experience
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  contact
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  education
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  certifications
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  leadership
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  sudo
                </span>
                <span className="text-hud-accent cursor-pointer hover:text-hud-accent/80">
                  clear
                </span>
              </div>
            </div>

            {/* Console Output */}
            <div className="flex-1 overflow-y-auto space-y-2 font-mono text-sm">
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
              <div className="text-hud-accent font-bold">kai@portfolio:~$</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - 60px height (DECORATION ONLY) */}
      <footer className="h-[60px] border-t border-hud-accent/20 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <span className="text-hud-accent">kai@portfolio:~$</span>
        </div>
        <div className="text-xs text-hud-text/50">
          {new Date().toLocaleDateString()}, {new Date().toLocaleTimeString()}
        </div>
      </footer>
    </div>
  );
}
