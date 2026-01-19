
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
    title: "ThreadQube",
    image: "https://i.ibb.co/rKWWk7Fr/thread-banner.png",
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
    id: 2,
    title: "NexUScore",
    image: "https://i.ibb.co/sdkNqSz6/image.png",
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
    id: 3,
    title: "RecipeBook",
    image: "https://i.ibb.co/v6d1rKdF/image.png",
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
    id: 4,
    title: "EventExplorar",
    image: "https://i.ibb.co/6jJhcgC/image.png",
    description:
      "EventExplorar helps you discover and enjoy events around you with ease and excitement. Stay updated on upcoming programs, workshops, and festivals tailored to your interests.",
    url: "http://sprightly-torte-9a8d5c.netlify.app",
    technologies: ["React.js", "Tailwind", "JavaScript", "CSS", "Firebase"],
    gitHub_client: "https://github.com/tahmid-khan-hub/Event-Explorar",
  },
];
