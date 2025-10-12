"use client";

import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import work from "@/lib/work";

export default function Work() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <h1 className="text-4xl font-bold animate-slide-in">My Work</h1>
        <div className="w-full">
          <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto animate-slide-in-delay-50">
            Stuff I've worked on professionally.
          </p>

          <div className="gallery ">
            {work.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
                className={`animate-slide-in opacity-0`}
                style={{ animationDelay: `${index * 200}ms` }} // 200ms stagger
              />
            ))}
          </div>
        </div>

        <div className="flex gap-4 my-10">
          <Button
            type="primary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </Button>
        </div>
      </main>
    </div>
  );
}
