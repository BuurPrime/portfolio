"use client";

import ProjectCard from "@/components/ProjectCard";
import work from "@/lib/work";
import Button from "@/components/Button";

export default function Work() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main className="flex flex-col items-center gap-8 px-4 md:px-8 w-full max-w-7xl">
        <h1 className="text-4xl font-bold animate-slide-in">My Work</h1>
        <div className="w-full">
          <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto animate-slide-in-delay-50">
            Stuff I've worked on professionally.
          </p>

          <div className="flex flex-col gap-12 items-center">
            {work.map((project, index) => (
              <div
                key={project.title}
                className={`animate-slide-in-delay-${index * 100}`}
              >
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
