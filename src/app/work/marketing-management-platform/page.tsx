"use client";

import { ImageBlock } from "@/components/ImageBlock";
import { ProjectInfo } from "@/components/ProjectInfo";
import { WorkPageWrapper } from "@/components/layout/WorkPageWrapper";
import ProjectFooter from "@/components/layout/ProjectFooter";
import { Chip } from "@/components";

export default function MarketingManagementPlatform() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <WorkPageWrapper
          title="Marketing CRM Platform"
          subtitle="Custom made SaaS CRM for fintechs to manage merchant partner data and marketing strategies"
          description="Designed and developed independently by me"
        >
          <ProjectInfo
            year="2025"
            company="Valyrion"
            companyUrl="https://valyrion.com"
            tech="React TS, TailwindCSS"
            status="Live"
          />

          {/* Project Gallery */}
          <div className="flex flex-col items-center w-full gap-20 my-6">
            {/* Introduiction */}
            <div className="flex flex-col m-0 gap-6">
              <h3>Core features</h3>
              <p className="text-[#b7b7b7] leading-relaxed ">
                At its core, it is a marketing hub for Valyrion partners. It
                serves as a central place for Valyrion partners to manage
                merchant relationships, creating and sending marketing
                campaigns, and control marketing material for a custom shopping
                universe. Below you will see snippets of those core features.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-[#888]">
                <Chip label="Merchant Management" />
                <Chip label="Campaigns" />
                <Chip label="Customer Segmentation" />
                <Chip label="Marketplace Configuration" />
              </div>
            </div>

            {/* Dashboard */}
            <div className="flex flex-col items-center m-0">
              <ImageBlock
                src="/images/work/ValyrionPlatform/mmp-dashboardMock.png"
                alt="Marketing Management Platform Overview - Complete platform interface"
              />
            </div>

            {/* Merchants */}
            <div className="flex flex-col gap-6">
              <h4 className="text-3xl font-medium text-white">
                Merchant Management
              </h4>
              <p className="text-[#b7b7b7] leading-relaxed">
                When a deal has been made with a merchant to promote their
                products, they are to be added in the platform. Here,
                information about the merchant and the specifics of the
                marketing agreement is set.
              </p>

              <div className="w-full max-w-6xl">
                <ImageBlock
                  src="/images/work/ValyrionPlatform/mmp-merchantsPage.png"
                  alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
                />
              </div>
            </div>

            {/* Campaigns */}
            <div className="flex flex-col gap-6">
              <h4 className="text-3xl font-medium text-white">Campaigns</h4>
              <p className="text-[#b7b7b7] leading-relaxed">
                Campaigns can be created and sent out to pre-determined customer
                segments. A campaign is created in the Campaign
                Builder - a block-based editor which contents will be compiled into email HTML.
                Once the campaigns has finished sending emails, users can see
                detailed insights about the campaign performance for each block.
              </p>

              <div className="w-full space-y-4 max-w-6xl">
                <ImageBlock
                  src="/images/work/ValyrionPlatform/mmp-campaigns.png"
                  alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
                />
                <ImageBlock
                  src="/images/work/ValyrionPlatform/mmp-campaignBuilderMock.png"
                  alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
                />
                <ImageBlock
                  src="/images/work/ValyrionPlatform/mmp-campaignBuilderProducts.png"
                  alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
                />
                <ImageBlock
                  src="/images/work/ValyrionPlatform/mmp-campaignBuilderInsights.png"
                  alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
                />
              </div>
            </div>

            {/* Customer Segmentation */}
            <div className="flex flex-col gap-6">
              <h4 className="text-3xl font-medium text-white">Customer Segmentation</h4>
              <p className="text-[#b7b7b7] leading-relaxed">
                Customers can be segmented based on their purchase history, email open rate, and other criteria.
              </p>
            </div>

            


          </div>

          <ProjectFooter />
        </WorkPageWrapper>
      </main>
    </div>
  );
}
