'use client'

import ProjectCard from "@/components/ProjectCard";
import work from "@/lib/work";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <main className="flex flex-col items-center gap-4">
        <div className="animate-slide-in-delay-100 flex flex-col gap-8 items-center">
          {/* this should be a feed of projects components */}
          {work.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          ))} 
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center animate-slide-in-delay-150"></footer>
    </div>
  );
}
