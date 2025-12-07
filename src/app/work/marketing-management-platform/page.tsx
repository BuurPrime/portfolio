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
          <div className="w-full max-w-3xl mx-auto text-center space-y-6">
            <h4 className="text-2xl font-medium text-white">
              Platform Overview
            </h4>
            <p className="leading-relaxed text-[#b7b7b7]">
              This Marketing Management Platform was engineered to streamline the
              complex operations of fintech marketing. By consolidating merchant
              management, campaign creation, and performance analytics into a
              single unified interface, it empowers teams to execute data-driven
              strategies with unprecedented speed and accuracy.
            </p>
          </div>

          {/* Project Gallery */}
          <div className="w-full space-y-32 my-12">
            {/* Feature 1: Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-2xl font-medium text-white">
                  Unified Dashboard
                </h3>
                <p className="text-[#b7b7b7] leading-relaxed">
                  The command center of the platform provides immediate
                  visibility into critical KPIs. From active campaigns to
                  merchant performance trends, the dashboard aggregates
                  real-time data to support informed decision-making at a
                  glance.
                </p>
                <ul className="space-y-2 text-sm text-[#888]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Real-time performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Active campaign monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Revenue trend analysis
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <ImageBlock
                  src="/images/work/ValyrionPlatform/mmp-dashboardMock.png"
                  alt="Marketing Management Platform Overview - Complete platform interface"
                />
              </div>
            </div>

            {/* Feature 2: Campaign Builder */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <ImageBlock
                  src="/images/work/ValyrionPlatform/mmp-campaignBuilderMock.png"
                  alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
                />
              </div>
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-medium text-white">
                  Campaign Orchestration
                </h3>
                <p className="text-[#b7b7b7] leading-relaxed">
                  A powerful yet intuitive campaign builder allows marketing
                  teams to design complex promotional strategies. With granular
                  controls for audience targeting, discount logic, and
                  scheduling, users can launch sophisticated campaigns without
                  technical dependencies.
                </p>
                <ul className="space-y-2 text-sm text-[#888]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Drag-and-drop workflow
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Advanced audience targeting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Automated scheduling
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3: Merchants */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-2xl font-medium text-white">
                  Merchant Ecosystem
                </h3>
                <p className="text-[#b7b7b7] leading-relaxed">
                  Seamlessly onboard and manage merchant partners. Detailed
                  profiles, transaction history, and individual performance
                  tracking enable better relationship management and support.
                </p>
                <ul className="space-y-2 text-sm text-[#888]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Partner onboarding flow
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Document verification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Settlement management
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <ImageBlock
                  src="/images/work/ValyrionPlatform/mmp-merchantsPage.png"
                  alt="Marketing Management Platform Dashboard - Main interface showing campaign overview and analytics"
                />
              </div>
            </div>

            {/* Additional Features Grid */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-medium text-white">
                  Advanced Tools
                </h3>
                <p className="text-[#b7b7b7]">
                  Built for scale with specialized tools for product integration
                  and flexible discount logic.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ImageBlock
                    src="/images/work/ValyrionPlatform/mmp-discounts.png"
                    alt="Discount Management System"
                  />
                  <div className="px-2">
                    <h4 className="text-lg font-medium text-white mb-2">
                      Discount Logic Engine
                    </h4>
                    <p className="text-sm text-[#888]">
                      Configurable rule engine for complex discount scenarios
                      and promotional bundles.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <ImageBlock
                    src="/images/work/ValyrionPlatform/mmp-productFeed.png"
                    alt="Product Feed Integration"
                  />
                  <div className="px-2">
                    <h4 className="text-lg font-medium text-white mb-2">
                      Product Feed Integration
                    </h4>
                    <p className="text-sm text-[#888]">
                      Automated synchronization with merchant product catalogs
                      and inventory systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProjectFooter />
        </WorkPageWrapper>
      </main>
    </div>
  );
}
