"use client";

import ProjectCard from "@/components/ProjectCard";
import work from "@/lib/work";
import ProjectFooter from "@/components/layout/ProjectFooter";

const Work: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <h1 className="text-4xl font-bold animate-slide-in">Work</h1>
        <div className="w-full">
          <h4 className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto animate-slide-in-delay-50">
            Stuff I've worked on professionally.
          </h4>

          <div className="gallery">
            {work.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
                className={`animate-slide-in opacity-0`}
                style={{ animationDelay: `${index * 200}ms` }}
              />
            ))}
          </div>
        </div>
        <ProjectFooter />
      </main>
    </div>
  );
};

export default Work;
