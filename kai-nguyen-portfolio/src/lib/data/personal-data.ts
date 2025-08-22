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
  bio: "Software Engineer with 3 years' experience delivering full-stack solutions in React.js, Next.js, TypeScript, C#, Java (Spring Boot), Python, and SQL. Skilled in REST APIs, CI/CD automation, cloud (AWS/Docker) and UI/UX development (Figma, Adobe). Strong foundation in OOP, SDLC, and software architecture, with a proven record of delivering production-ready apps in Agile teams.",

  social: {
    github: "github.com/haidangve",
    linkedin: "linkedin.com/in/kai-nguyen09",
    instagram: "@nvdh_ai",
  },

  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Tailwind CSS",
      "SASS",
      "Redux/Zustand",
    ],
    backend: [
      "Java",
      "Python",
      "C#",
      "Node.js",
      ".NET",
      "Spring Boot",
      "RESTful APIs",
    ],
    aiMl: ["Data Analytics", "Machine Learning", "SQL", "Power BI"],
    tools: [
      "GitHub",
      "AWS",
      "Docker",
      "CI/CD Pipelines",
      "Agile/Scrum",
      "Test-Driven Development",
      "Postman",
      "Vite",
      "PowerShell",
      "Linux",
    ],
  },

  experience: [
    {
      title: "Software Developer & Business Analyst",
      company: "CodeBrew (Prairie Micro Works Inc)",
      period: "March 2025 - July 2025",
      description: [
        "Built Android app UI with Java/XML and integrated RESTful APIs (PHP/MySQL), streamlining onboarding workflows for 5+ local tanning salons",
        "Designed normalized database schema & session management logic, ensuring smooth user login and admin control",
        "Automated builds/tests with Gradle (Kotlin) and GitHub Actions CI/CD, cutting deployment time and improving stability",
        "Led requirements gathering, wireframing, and Agile sprints for a team of 6, delivering app on time and within scope",
      ],
    },
    {
      title: "Software Development Intern",
      company: "VGGATE (HapoSoft JSC)",
      period: "May 2024 - October 2024",
      description: [
        "Built Redux-based UI components for a drop shipping app (React.js, Node.js, Tailwind CSS); implemented Python-backed logic and API integration, reducing request latency by 18%",
        "Shipped company website (React.js + WordPress) solo in 3 weeks, boosting SEO visibility by 25% and securing 4 new SaaS contracts",
        "Built Python data pipeline to scrape and clean datasets from 200+ websites, delivering insights for our SaaS B2B clients",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "Central Institution for Economic Management (CIEM)",
      period: "February 2023 - May 2023",
      description: [
        "Managed SQL-based expense reporting for an organization-wide budget, reducing travel costs by 8%",
        "Produced 8 dashboards (Excel/Power BI) to improve expense tracking and decision-making experience",
        "Wrote SQL queries (joins, subqueries, and aggregations) to clean/validate 100+ financial records, improving reporting accuracy by 20%",
      ],
    },
  ],

  education: [
    {
      degree: "Diploma in Business Information Systems",
      institution: "Saskatchewan Polytechnic",
      period: "August 2023 - July 2025",
      gpa: "3.85/4.0",
      description: [
        "Dean's Honour List (2023-2024)",
        "Relevant Coursework: Web/Mobile Development, OOP, Data Structure and Algorithms, System Analysis, Networking and Cloud Development, Database Management",
      ],
    },
    {
      degree: "Bachelor's in Data Science",
      institution: "National Economics University",
      period: "August 2021 - July 2023",
      description: [
        "Relevant Coursework: Data Analytics, Data Structure and Algorithms, Programming (Python, R, SQL), ML",
      ],
    },
  ],

  projects: [
    {
      name: "OOP's Way Back Home",
      description:
        "Led front-end development and UI/UX design for a pixelated game in Asperite, Figma and Adobe Suite. Applied C# for backend gameplay logic (Godot): player state machine, directional movement, enemy AI, event-driven interactions. Optimized runtime with resources preloading and object pooling, maintaining 60FPS on target machines.",
      image: "/img/terminal-1.png",
      alt: "Pixelated game development project",
      technologies: ["C#", "Godot", "Figma", "Adobe Suite", "Agile"],
      link: "https://github.com/haidangve",
    },
    {
      name: "Android Tanning Salon App",
      description:
        "Built Android app UI with Java/XML and integrated RESTful APIs (PHP/MySQL), streamlining onboarding workflows for 5+ local tanning salons. Designed normalized database schema & session management logic, ensuring smooth user login and admin control.",
      image: "/img/fitness-1.png",
      alt: "Android app development",
      technologies: ["Java", "XML", "PHP", "MySQL", "Gradle", "GitHub Actions"],
      link: "https://github.com/haidangve",
    },
    {
      name: "Drop Shipping App",
      description:
        "Built Redux-based UI components for a drop shipping app (React.js, Node.js, Tailwind CSS); implemented Python-backed logic and API integration, reducing request latency by 18%. Conducted API testing via Postman.",
      image: "/img/chat-1.png",
      alt: "Drop shipping application",
      technologies: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "Redux",
        "Python",
        "Postman",
      ],
      link: "https://github.com/haidangve",
    },
  ],
};
