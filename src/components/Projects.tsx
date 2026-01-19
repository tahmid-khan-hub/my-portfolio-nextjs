"use client";
import { projectData } from "@/constants/projectsData";
import AnimateOnView from "@/hooks/AnimateOnView";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  return (
    <section className="w-full text-white py-16 mb-24">
      <div className="max-w-[1350px] mx-auto px-4 md:px-3">
        <AnimateOnView direction="down" delay={0.25} duration={0.6}><h2 className="text-4xl font-bold mb-12 text-center">My <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Projects</span></h2></AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <AnimateOnView key={index} direction="left" delay={index * 0.08}><div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full hover:bg-gray-950"
            >
              {/* Image */}
              <div className="p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 object-cover w-full h-56"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 pl-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 font-semibold text-sm mb-7 pl-3 pr-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8 pl-3">
                {project.technologies.map((tech, i) => (
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
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-blue-400 transition-transform duration-200 hover:scale-107"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.gitHub_client}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-blue-400 transition-transform duration-200 hover:scale-107"
                  >
                    <FaGithub /> Client
                  </a>
                  {project.gitHub_server && (
                    <a
                      href={project.gitHub_server}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-blue-400 transition-transform duration-200 hover:scale-107"
                    >
                      <FaGithub /> Server
                    </a>
                  )}
                </div>

                {/* details */}
                <Link href={`/projects-details/${project.id}`}><button className="text-blue-500 hover:text-blue-400 text-xl transition-transform duration-200 hover:scale-120 ">
                  <FaArrowRightLong size={25} className="-mb-1.5"/>
                </button></Link>
              </div>
            </div></AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
