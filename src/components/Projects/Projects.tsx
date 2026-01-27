"use client";
import { projectData } from "@/constants/projectsData";
import AnimateOnView from "@/hooks/AnimateOnView";
import ProjectsImageContainer from "./components/ProjectsImageContainer";
import ProjectsOverview from "./components/ProjectsOverview";

export default function Projects() {
  return (
    <section className="w-full text-white py-16 mb-24">
      <div className="max-w-[1350px] mx-auto px-4 md:px-3">
        <AnimateOnView direction="down" delay={0.25} duration={0.6}>
          <h2 className="text-4xl font-bold mb-12 text-center">
            My{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </AnimateOnView>

        <div className="flex flex-col space-y-10">
          {projectData.map((project, index) => (
            <AnimateOnView key={index} direction="left" delay={index * 0.08}>
              <div className="flex flex-col md:flex-row w-full items-stretch p-1 border border-gray-800 rounded-xl">
                {/* Image */}
                <div className="w-full md:w-1/2 flex">
                  <ProjectsImageContainer
                    image={project.image}
                    title={project.title}
                  />
                </div>

                {/* project overview */}
                <div className="w-full md:w-1/2 flex"><div
                  key={index}
                  className="flex flex-col h-full"
                >
                  <ProjectsOverview
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    project_url={project.url}
                    github_client_url={project.gitHub_client}
                    github_server_url={project.gitHub_server}
                  />
                </div></div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
