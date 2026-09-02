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
          <h2 className="text-4xl font-bold mb-16 text-center">
            My{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </AnimateOnView>

        <div className="flex flex-col">
          {projectData.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={project.id}>
                <AnimateOnView
                  direction={isEven ? "right" : "left"}
                  delay={index * 0.08}
                >
                  <div
                    className={`flex flex-col ${
                      isEven ? "md:flex-row-reverse" : "md:flex-row"
                    } w-full items-center gap-8 md:gap-12 py-14`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                      <ProjectsImageContainer
                        image={project.image}
                        title={project.title}
                      />
                    </div>

                    {/* Project overview */}
                    <div className="w-full md:w-1/2">
                      <ProjectsOverview
                        index={index}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        project_url={project.url}
                        github_client_url={project.gitHub_client}
                        github_server_url={project.gitHub_server}
                      />
                    </div>
                  </div>
                </AnimateOnView>

                {/* Hairline divider (skip after last project) */}
                {index !== projectData.length - 1 && (
                  <div className="w-full h-px bg-white/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
