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
      "GraphQL",
    ],
    backend: [
      "Java",
      "Python",
      "C#",
      "Node.js",
      ".NET",
      "Spring Boot",
      "Flask",
      "FastAPI",
      "LangChain",
      "MCP",
      "RESTful APIs",
    ],
    aiMl: [
      "Data Analytics",
      "Machine Learning",
      "SQL",
      "Power BI",
      "OpenCV",
      "Scikit-Learn",
      "GPT-4o mini API",
    ],
    tools: [
      "GitHub",
      "AWS (EC2, S3, Lambda, Kafka, IAM)",
      "Google Cloud",
      "Azure",
      "Docker",
      "CI/CD Pipelines",
      "Agile/Scrum",
      "Test-Driven Development",
      "Postman",
      "Vite",
      "PowerShell",
      "Linux",
      "MongoDB",
      "DynamoDB",
      "SQLite",
    ],
  },

  experience: [
    {
      title: "Software Developer & Business Analyst",
      company: "CodeBrew (Prairie Micro Works Inc)",
      companyLink: "https://www.prairiemicroworks.com/",
      period: "March 2025 - July 2025",
      description: [
        "Built Android app UI with Java on Android SDK and integrated RESTful APIs (PHP) for 5+ local tanning salons; conducted API testing via Postman",
        "Designed & implemented normalized MySQL database schema",
        "Automated builds and regression tests with Gradle (Kotlin) and GitHub Actions CI/CD",
        "Collaborated with a cross-functional team of 6 through Agile sprints, leading requirements gathering and wireframing",
      ],
    },
    {
      title: "Software Development Intern",
      company: "VGGATE (HapoSoft JSC)",
      companyLink:
        "https://www.linkedin.com/company/vggate/posts/?feedView=all",
      period: "May 2024 - October 2024",
      description: [
        "Developed scalable React/TypeScript/Redux features and integrated Python APIs that reduced request latency by 18%",
        "Shipped company website (React.js + WordPress) solo in 3 weeks, boosting SEO visibility by 25% and driving $10000 in contracts; improved UX/UI using Figma",
        "Built Python data pipeline to scrape and clean datasets from 200+ websites, delivering insights for our SaaS B2B clients",
        "Deployed services on AWS EC2, Lambda, S3, and Kafka, with containerized pipelines and CI/CD",
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
    {
      title: "Graphic Designer",
      company: "MEC Music Club",
      companyLink: "https://www.facebook.com/mec.neu/",
      period: "November 2021 - May 2023",
      description: [
        "Led and contributed to the design process for 10+ mid- to large-scale university musical events, including stage layouts, posters, social media posts and visual branding",
        "Collaborated with cross-functional teams of 200+ members (musicians, technical crew, and event managers) to deliver cohesive event experiences",
        "Gained experience in user-centered design at scale by crafting visual and spatial experiences for diverse student audiences",
        "Designed key projects including Mnight 2022 Rhapsodine, Now You See Me 2022 Ky Hoi, and NEU Youth Festival 2022",
      ],
    },
  ],

  education: [
    {
      degree: "Diploma in Information Systems",
      institution: "Saskatchewan Polytechnic",
      period: "August 2023 - July 2025",
      gpa: "3.85/4.0",
      awards: ["Dean's Honour List (2023-2024)"],
      coursework: [
        "Web/Mobile Development",
        "Advanced OOP",
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
      name: "ImmiBuddy, AI Compliance Agent",
      description:
        "Built from a 4-hour hackathon prototype into an AI copilot for immigration document validation. Used GPT-4o mini API + LangChain with custom MCP layers. React/Next.js frontend integrated with a Python (Flask/FastAPI) backend. The system helps users validate immigration documents and provides compliance guidance through intelligent AI assistance.",
      image: "/img/immibuddy.png",
      alt: "AI Compliance Agent for immigration documents",
      technologies: [
        "Python",
        "LangChain",
        "MCP",
        "React.js",
        "Next.js",
        "GPT-4o mini API",
        "Flask",
        "FastAPI",
      ],
    },
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
    {
      name: "Mnight 2022 Rhapsodine",
      description:
        "MEC's flagship musical night featuring all 4 artistic departments plus guest singers and celebrities. Led comprehensive 3-month design and production process including social media campaigns, product designs (backdrop, tickets, prints), and videography/editing (trailers, promotional content). Collaborated with 200+ team members to deliver a cohesive visual experience for diverse student audiences.",
      image: "/img/mnight.jpg",
      alt: "Mnight 2022 Rhapsodine musical event design",
      technologies: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Adobe Premiere Pro",
        "Figma",
        "Videography",
        "Video Editing",
        "Graphic Design",
        "Event Branding",
      ],
      link: "https://www.facebook.com/photo/?fbid=4949141855139829&set=a.224862674234461",
    },
  ],
};
