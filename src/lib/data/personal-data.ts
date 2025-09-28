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
    companyLink?: string;
    period: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    gpa?: string;
    coursework?: string[];
    awards?: string[];
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
  bio: "Hi, I'm **Kai Nguyen** — a software engineer with **2+ years** of experience in **full-stack development**, **UX/UI design**, and **AI/ML**. My path started in **fine arts**, before I dropped everything at **20** and moved to **Canada** to reinvent myself. What began as late nights of **self-study** grew into a passion for building **ethical AI** and **UX-centric** applications that solve real problems. I see myself as a **polymath** in progress, blending **tech**, **design**, and **business**. Based in **Toronto**, I'm driven to push boundaries while staying grounded in curiosity and ethics.",

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
      companyLink: "https://www.prairiemicroworks.com/",
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
      companyLink:
        "https://www.linkedin.com/company/vggate/posts/?feedView=all",
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
      companyLink: "https://ciem.org.vn/",
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
      awards: ["Dean's Honour List (2023-2024)"],
      coursework: [
        "Web/Mobile Development",
        "Object-Oriented Programming",
        "Data Structure and Algorithms",
        "System Analysis",
        "Networking and Cloud Development",
        "Database Management",
      ],
    },
    {
      degree: "Bachelor's in Data Science",
      institution: "National Economics University",
      period: "August 2021 - July 2023",
      coursework: [
        "Data Analytics",
        "Data Structure and Algorithms",
        "Programming (Python, R, SQL)",
        "Machine Learning",
      ],
    },
  ],

  projects: [
    {
      name: "Invisibility Cloak Application",
      description:
        "A real-time computer vision application that creates an invisibility cloak effect using OpenCV and Flask. Features background capture with countdown, intuitive color selection with Harry Potter themed names, and professional error handling. The app processes video streams in real-time to detect and replace objects of specified colors with the captured background, creating a magical invisibility effect.",
      image: "/img/invisibility_cloak.png",
      alt: "Invisibility cloak computer vision application",
      technologies: [
        "Python",
        "OpenCV",
        "Flask",
        "Computer Vision",
        "REST API",
        "JavaScript",
        "CSS3",
      ],
      link: "https://github.com/haidangve/Invisible-Cloak",
    },
    {
      name: "Android Tanning Salon App",
      description:
        "A comprehensive business management app for local tanning salons that streamlines customer onboarding, appointment scheduling, and administrative tasks. Features secure user authentication, real-time data synchronization, and an intuitive interface that helps salon owners manage their business operations efficiently.",
      image: "/img/tanningbed.png",
      alt: "Android app development",
      technologies: ["Java", "XML", "PHP", "MySQL", "Gradle", "GitHub Actions"],
      link: "https://www.linkedin.com/in/kai-nguyen09/details/projects",
    },
    {
      name: "Image to Checkbox Sketch Converter",
      description:
        "A creative web app that converts images into artistic 'checkbox' sketches. Built in just one hour as part of a coding challenge, this prototype demonstrates rapid development skills and creative problem-solving. The app transforms uploaded images into unique checkbox-based artwork, showcasing the intersection of art and technology.",
      image: "/img/checkbox.png",
      alt: "Image to checkbox sketch converter",
      technologies: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
      link: "https://checkbox-pixel-art.vercel.app/",
    },
    {
      name: "OOP's Way Back Home",
      description:
        "A cultural-inspired pixelated adventure game that tells the story of a character's journey back home. Features dynamic player movement, intelligent enemy AI with patrol and chase behaviors, and interactive environments. Built with modern game development practices including object pooling and resource optimization for smooth 60FPS gameplay.",
      image: "/img/oops.png",
      alt: "Pixelated game development project",
      technologies: ["C#", "Godot", "Figma", "Adobe Suite", "Agile"],
      link: "https://github.com/haidangve/OOPs-Way-Back-Home",
    },
    {
      name: "Flower Persona Quiz",
      description:
        "A heartfelt International Women's Day project built in just 12 hours to surprise loved ones 13,000km away in Vietnam. Features an interactive personality quiz with custom flower-themed storytelling, beautiful UI designs created in Adobe Illustrator/Photoshop, and Firebase integration for form management. Combines creativity with technical skills to create a meaningful digital gift.",
      image: "/img/flowers.png",
      alt: "Flower persona quiz application",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Firebase",
        "Adobe Illustrator",
        "Adobe Photoshop",
      ],
      link: "https://haidangve.github.io/FlowerQuiz/",
    },
  ],
};
