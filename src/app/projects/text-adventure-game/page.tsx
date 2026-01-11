import React from "react";
import { WorkPageWrapper } from "@/components/layout/WorkPageWrapper";
import { ProjectInfo } from "@/components/ProjectInfo";

const TextAdventureGame: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <WorkPageWrapper
          title={
            <>
              Text Adventure Game: <br /> In the vase sits Pretty Flowers
            </>
          }
          subtitle="A short interactive story game"
          description="Designed and developed independently by me"
        >
          <ProjectInfo
            year="2024"
            link="Play here"
            linkUrl="https://buurprime.github.io/playable-media/"
            tech="React JS, TailwindCSS"
            status="Live"
          />
        </WorkPageWrapper>
      </main>
    </div>
  );
};

export default TextAdventureGame;
