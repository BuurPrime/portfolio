"use client";

import { ImageBlock } from "@/components/ImageBlock";
import { ProjectInfo } from "@/components/ProjectInfo";
import { WorkPageWrapper } from "@/components/layout/WorkPageWrapper";
import ProjectFooter from "@/components/layout/ProjectFooter";

export default function MarketingManagementPlatform() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <WorkPageWrapper
          title="Marketing CRM Platform"
          subtitle="Custom made SaaS CRM for fintechs to manage marketing strategies"
          description="Designed and developed independently"
        >
          {/* Project Information Grid */}
          <ProjectInfo
            year="2025"
            company="Valyrion"
            companyUrl="https://valyrion.com"
            tech="React, TypeScript, TailwindCSS"
            status="Live"
          />

          {/* Project Overview */}
          <div className="w-full">
            <div className="space-y-4">
              <h4 className="">Key Features</h4>
              <p className="leading-relaxed text-[#b7b7b7] text-sm">Key</p>
            </div>
          </div>

          {/* Project Gallery */}
            <ImageBlock
              src="/images/work/ValyrionPlatform/mmp-dashboardMock.png"
              alt="Marketing Management Platform Overview - Complete platform interface"
            />
            
            <ImageBlock
              src="/images/work/ValyrionPlatform/mmp-merchantsPage.png"
              alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
            />

<ImageBlock
              src="/images/work/ValyrionPlatform/mmp-campaignBuilderMock.png"
              alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
            />

            

          <ProjectFooter />
        </WorkPageWrapper>
      </main>
    </div>
  );
}
