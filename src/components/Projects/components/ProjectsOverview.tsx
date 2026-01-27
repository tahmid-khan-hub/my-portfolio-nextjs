import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsOverview = ({id, title, description, technologies, project_url, github_client_url, github_server_url} : 
    {id: number; title: string; description: string; technologies: string[]; project_url: string; github_client_url: string; github_server_url?: string;}
) => {
  return (
    <>
      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 pl-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 font-semibold text-sm mb-7 pl-3 pr-2">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-8 pl-3">
        {technologies.map((tech, i) => (
          <button
            key={i}
            className="px-3 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/80 hover:text-blue-200"
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Links */}
      <div className="mt-auto flex justify-between items-end text-lg px-4 pb-5">
        {/* Left side - links */}
        <div className="flex gap-4">
          <a
            href={project_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-blue-400 transition-transform duration-200 hover:scale-107"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={github_client_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-blue-400 transition-transform duration-200 hover:scale-107"
          >
            <FaGithub /> Client
          </a>
          {github_server_url && (
            <a
              href={github_server_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-blue-400 transition-transform duration-200 hover:scale-107"
            >
              <FaGithub /> Server
            </a>
          )}
        </div>

        {/* project details page link */}
        <Link href={`/projects-details/${id}`}>
          <button className="text-blue-500 hover:text-blue-400 text-xl transition-transform duration-200 hover:scale-120 ">
            <FaArrowRightLong size={25} className="-mb-1.5" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProjectsOverview;
