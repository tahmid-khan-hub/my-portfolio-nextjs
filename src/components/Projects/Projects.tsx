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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <AnimateOnView key={index} direction="left" delay={index * 0.08}>
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full hover:bg-gray-950"
              >
                {/* Image */}
                <ProjectsImageContainer image={project.image} title={project.title}/>

                {/* project overview */}
                <ProjectsOverview
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    project_url={project.url}
                    github_client_url={project.gitHub_client}
                    github_server_url={project.gitHub_server}
                />

              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
