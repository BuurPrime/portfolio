import React from "react";
import { WorkPageWrapper } from "@/components/layout/WorkPageWrapper";
import { ProjectInfo } from "@/components/ProjectInfo";

export const MerchantDashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <WorkPageWrapper
          title="Merchant Dashboard"
          subtitle="For webshops to see and analyze the results of their paid marketing efforts"
          description="Designed and developed independently by me"
        >
          <ProjectInfo
            year="2025"
            company="Valyrion"
            companyUrl="https://valyrion.com"
            tech="React TS, TailwindCSS"
            status="Live"
          />
        </WorkPageWrapper>
      </main>
    </div>
  );
}

export default MerchantDashboard;