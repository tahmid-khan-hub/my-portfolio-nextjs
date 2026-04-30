
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
    title: "Betrak",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1777534806/Screenshot_2026-04-30_133924_pn9zx6.png",
    description:
      "A full-stack web app that predicts your social media addiction level - Low, Medium or High - using a trained Random Forest model, returning a confidence score and personalized recommendations based on your usage habits, sleep and mental health.",
    url: "https://betrak-web.vercel.app",
    technologies: ["Next js", "TypeScript", "PostgreSQL", "Tailwind CSS", "NextAuth", "Tan Stack Query", "Shadcn UI", "Python", "FastAPI", "SQLAlchemy", "scikit-learn", "SMOTE", "pandas", "joblib"],
    gitHub_client: "https://github.com/tahmid-khan-hub/Betrak",
  },
  {
    id: 2,
    title: "KitStruck",
    image: "https://res.cloudinary.com/ddsy9qaaj/image/upload/v1769265964/Screenshot_2026-01-24_144003_lmwdfl.png",
    description:
      "KitStruck is a full-stack e-commerce platform for browsing and purchasing authentic football jerseys with secure payments and a personalized dashboard. Admins can easily manage products, orders and users, ensuring a smooth shopping experience.",
    url: "https://kit-struck.vercel.app",
    technologies: ["Next js", "TypeScript", "PostgreSQL", "Tailwind CSS", "CSS", "Stripe", "NextAuth", "Tan Stack Query", "Axios"],
    gitHub_client: "https://github.com/tahmid-khan-hub/KitStruck",
  },
  {
    id: 3,
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
    id: 4,
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
];
