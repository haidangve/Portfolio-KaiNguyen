export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    aiMl: string[];
    tools: string[];
  };
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    description?: string[];
    gpa?: string;
  }>;
  certifications: Array<{
    name: string;
    year: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    image: string;
    alt: string;
    technologies: string[];
    link?: string;
  }>;
}

export const personalData: PersonalInfo = {
  name: "Kai Nguyen",
  role: "Software Engineer",
  location: "Toronto, ON, Canada",
  email: "duchai.nv0909@gmail.com",
  bio: "I'm a software engineer with a passion for building innovative solutions.",

  social: {
    github: "github.com/haidangve",
    linkedin: "linkedin.com/in/kai-nguyen09",
    instagram: "@nvdh_ai",
  },

  skills: {
    frontend: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
    ],
    backend: [
      "Node.js",
      "Java",
      "C# (.NET)",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
    aiMl: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Natural Language Processing",
      "Computer Vision",
      "Deep Learning",
    ],
    tools: ["Git", "Docker", "AWS", "Vercel", "VS Code", "Linux", "CI/CD"],
  },

  experience: [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: [
        "Led development of AI-powered customer service platform",
        "Improved system performance by 40% through optimization",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: [
        "Built scalable web applications serving 10k+ users",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with design team to create intuitive UIs",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "BigTech Corp",
      period: "2019 - 2020",
      description: [
        "Developed internal tools that saved 20+ hours per week",
        "Worked with machine learning models for data analysis",
        "Participated in agile development processes",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Science - Computer Science",
      institution: "University of Technology",
      period: "2018 - 2020",
      gpa: "3.8/4.0",
      description: [
        "Specialization: Artificial Intelligence & Machine Learning",
        'Thesis: "Deep Learning Applications in Natural Language Processing"',
      ],
    },
    {
      degree: "Bachelor of Engineering - Software Engineering",
      institution: "Tech University",
      period: "2014 - 2018",
      description: [
        "Magna Cum Laude, Dean's List",
        "Relevant Coursework: Data Structures, Algorithms, Databases",
        "Senior Project: Real-time Collaborative Code Editor",
      ],
    },
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect", year: "2023" },
    { name: "Google Cloud Professional Developer", year: "2022" },
    { name: "TensorFlow Developer Certificate", year: "2021" },
  ],

  projects: [
    {
      name: "Fitness App",
      description:
        "A comprehensive fitness tracking application with workout planning and progress monitoring",
      image: "/img/fitness-1.png",
      alt: "Fitness tracking dashboard interface",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/fitness-app",
    },
    {
      name: "Realtime Chat",
      description:
        "Real-time messaging application with user authentication and file sharing",
      image: "/img/chat-1.png",
      alt: "Real-time chat application UI",
      technologies: ["Next.js", "Socket.io", "PostgreSQL"],
      link: "https://github.com/yourusername/chat-app",
    },
    {
      name: "Terminal Portfolio",
      description:
        "Interactive terminal-style portfolio built with React and TypeScript",
      image: "/img/terminal-1.png",
      alt: "HUD-style terminal portfolio",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/yourusername/portfolio",
    },
  ],
};
