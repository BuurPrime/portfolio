import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/lib/projects";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <main className="flex flex-col items-center gap-8 px-4 md:px-8 w-full max-w-7xl">
        <h1 className="text-4xl font-bold animate-slide-in">Projects</h1>
        <div className="w-full">
          <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto animate-slide-in-delay-50">
            Stuff I've worked on at my own time.
          </p>
          <div className="flex flex-col gap-12 items-center">
            {projects.map((project, index) => (
              <div key={project.title} className={`animate-slide-in-delay-${index * 50}`}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  url={project.url}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
