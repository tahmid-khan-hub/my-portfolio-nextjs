"use client";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "ThreadQube",
    image: "https://i.ibb.co/rKWWk7Fr/thread-banner.png",
    description:
      "ThreadQube is a MERN-based forum that lets users share and engage with posts, with premium options and clear admin management. It supports easy discussions while keeping the community connected and moderated.",
    url: "https://thread-qube-app.netlify.app",
    fea1: "Users can create, delete and interact with posts by liking, disliking and commenting.",
    fea2: "Unlock extended posting limits and extra features through secure payment.",
    fea3: "Admins can manage announcements, user roles and platform policies to keep the forum organized.",
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
    title: "NexUScore",
    image: "https://i.ibb.co/sdkNqSz6/image.png",
    description:
      "NexUSCore is an educational platform where users can explore and enroll in a variety of courses. Enroll in your desired courses and level up your skills on your schedule.",
    url: "https://nexuscore-app.netlify.app",
    fea1: "Access the most popular and newly added courses",
    fea2: "Easily explore courses by topic or interest",
    fea3: "Track your progress and manage all your enrolled courses",
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
    title: "EventExplorar",
    image: "https://i.ibb.co/6jJhcgC/image.png",
    description:
      "EventExplorar helps you discover and enjoy events around you with ease and excitement. Stay updated on upcoming programs, workshops, and festivals tailored to your interests.",
    url: "http://sprightly-torte-9a8d5c.netlify.app",
    fea1: "Find events across various categories",
    fea2: "View full event descriptions, schedules and locations",
    fea3: "Keep track of your booked events",
    technologies: ["React.js", "Tailwind", "JavaScript", "CSS", "Firebase"],
    gitHub_client: "https://github.com/tahmid-khan-hub/Event-Explorar",
  },
  {
    title: "RecipeBook",
    image: "https://i.ibb.co/v6d1rKdF/image.png",
    description:
      "RecipeBook brings delicious recipes to your fingertips, making cooking easy and fun for everyone. Explore a wide range of recipes with step-by-step instructions and beautiful visuals.",
    url: "https://comforting-pasca-4e92c6.netlify.app/",
    fea1: "Create, edit, and organize personal recipes",
    fea2: "Explore shared recipes from other users",
    fea3: "Like your favorite recipes",
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
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-black text-white py-16">
      <div className="max-w-[1350px] mx-auto px-4 md:px-3">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-5 flex flex-col"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg mb-4 object-cover w-full h-48"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-3">
                {project.description}
              </p>

              {/* Features */}
              {/* <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                <li>{project.fea1}</li>
                <li>{project.fea2}</li>
                <li>{project.fea3}</li>
              </ul> */}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-4 text-lg">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.gitHub_client}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-gray-400 transition"
                >
                  <FaGithub /> Client
                </a>
                {project.gitHub_server && (
                  <a
                    href={project.gitHub_server}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-gray-400 transition"
                  >
                    <FaGithub /> Server
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
