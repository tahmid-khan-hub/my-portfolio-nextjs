
export interface ProjectData {
  id: number;
  title: string;
  image: string;
  description: string;
  url: string;
  technologies: string[];
  gitHub_client: string;
  gitHub_server?: string;
}

export const projectData: ProjectData[] = [
  {
    id: 1,
    title: "KitStruck",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769265964/Screenshot_2026-01-24_144003_lmwdfl.png",
    description:
      "KitStruck is a full-stack e-commerce platform for browsing and purchasing authentic football jerseys with secure payments and a personalized dashboard. Admins can easily manage products, orders and users, ensuring a smooth shopping experience.",
    url: "https://kit-struck.vercel.app",
    technologies: ["Next js", "TypeScript", "PostgreSQL", "Tailwind CSS", "CSS", "Stripe", "NextAuth", "Tan Stack Query", "Axios"],
    gitHub_client: "https://github.com/tahmid-khan-hub/KitStruck",
  },
  {
    id: 2,
    title: "ThreadQube",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769540010/Screenshot_2026-01-28_005220_jwd5vn.png",
    description:
      "ThreadQube is a MERN-based forum that lets users share and engage with posts, with premium options and clear admin management. It supports easy discussions while keeping the community connected and moderated.",
    url: "https://thread-qube-app.netlify.app",
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "JWT Token",
      "Node.js",
      "Express.js",
      "Stripe",
      "Tan Stack Query",
      "React hook form",
    ],
    gitHub_client: "https://github.com/tahmid-khan-hub/Thread-Qube",
    gitHub_server: "https://github.com/tahmid-khan-hub/Thread-Qube-Server",
  },
  {
    id: 3,
    title: "NexUScore",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769540209/Screenshot_2026-01-28_005625_fxzogq.png",
    description:
      "NexUSCore is an educational platform where users can explore and enroll in a variety of courses. Enroll in your desired courses and level up your skills on your schedule.",
    url: "https://nexuscore-app.netlify.app",
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "JWT Token",
      "Node.js",
      "Express.js",
      "Stripe",
    ],
    gitHub_server: "https://github.com/tahmid-khan-hub/NexUsCore-server",
    gitHub_client: "https://github.com/tahmid-khan-hub/Nexus-Core",
  },
  {
    id: 4,
    title: "RecipeBook",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769540365/Screenshot_2026-01-28_005901_qqefxu.png",
    description:
      "RecipeBook brings delicious recipes to your fingertips, making cooking easy and fun for everyone. Explore a wide range of recipes with step-by-step instructions and beautiful visuals.",
    url: "https://comforting-pasca-4e92c6.netlify.app/",
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "Node.js",
      "Express.js",
    ],
    gitHub_server: "https://github.com/tahmid-khan-hub/Recipe-Book-Server",
    gitHub_client: "https://github.com/tahmid-khan-hub/Recipe-Book",
  },
  {
    id: 5,
    title: "EventExplorar",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769540464/Screenshot_2026-01-28_010040_dbq9ry.png",
    description:
      "EventExplorar helps you discover and enjoy events around you with ease and excitement. Stay updated on upcoming programs, workshops, and festivals tailored to your interests.",
    url: "http://sprightly-torte-9a8d5c.netlify.app",
    technologies: ["React.js", "Tailwind", "JavaScript", "CSS", "Firebase"],
    gitHub_client: "https://github.com/tahmid-khan-hub/Event-Explorar",
  },
];
