import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectsOverview = ({ 
  index, id, title, description, technologies, project_url, github_client_url, github_server_url,
}: {
  index: number;
  id: number;
  title: string;
  description: string;
  technologies: string[];
  project_url: string;
  github_client_url: string;
  github_server_url?: string;
}) => {
  return (
    <div className="flex flex-col">
      {/* Project number */}
      <span className="text-sm text-gray-500 font-mono mb-2">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5">
        {description}
      </p>

      {/* Tech Stack - plain text, no bg */}
      <p className="text-blue-400/70 text-sm mb-7">
        {technologies.join(" · ")}
      </p>

      {/* Links */}
      <div className="flex items-center justify-between">
        <div className="flex gap-6 text-sm">
          <a
            href={project_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaExternalLinkAlt size={12} /> Live
          </a>
          <a
            href={github_client_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaGithub size={14} /> Client
          </a>
          {github_server_url && (
            <a
              href={github_server_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaGithub size={14} /> Server
            </a>
          )}
        </div>

        <Link href={`/projects-details/${id}`}>
          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
            Details
            <FaArrowRightLong size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsOverview;
