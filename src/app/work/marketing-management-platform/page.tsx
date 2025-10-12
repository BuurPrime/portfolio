"use client";

import Button from "@/components/Button";
import { ImageBlock } from "@/components/ImageBlock";
import { ProjectInfo } from "@/components/ProjectInfo";
import { WorkPageWrapper } from "@/components/layout/WorkPageWrapper";

export default function MarketingManagementPlatform() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <WorkPageWrapper
          title="Marketing CRM Platform"
          subtitle="Custom made SaaS CRM for fintechs to manage marketing strategies."
          description="Designed and developed independently."
        >
          <div className="w-full">
            {/* Project Information Grid */}
            <ProjectInfo
              year="2024"
              company="Valyrion"
              companyUrl="https://valyrion.com"
              tech="ReactTS, TailwindCSS"
              status="Live"
            />

            <div className="gallery">
              <ImageBlock
                src="/images/work/ValyrionPlatform/mmp-dashboard.png"
                alt="Marketing Management Platform"
              />

              <ImageBlock
                src="/images/work/ValyrionPlatform/ValyrionPlatform_Thumbnail.png"
                alt="Marketing Management Platform"
              />
            </div>

            <div className="flex gap-4 my-10">
              <Button
                type="primary"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Back to top
              </Button>
            </div>
          </div>
        </WorkPageWrapper>
      </main>
    </div>
  );
}
