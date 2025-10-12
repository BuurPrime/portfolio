import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectInfoProps{
    year: string;
    company: string;
    companyUrl?: string;
    tech: string; 
    status: string;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ year, company, companyUrl,  tech, status}) => {
  return (
    <div className="w-full border-t border-b border-neutral-900 my-8 p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
            Year
          </span>
          <span className="text-sm font-medium">{year}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
            Company
          </span>
          <span className="flex text-sm font-medium">
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              {company}
              {companyUrl && <ArrowUpRight className="w-4 h-4" />}
            </a>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
            Made with
          </span>
          <span className="text-sm font-medium">{tech}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
            Status
          </span>
          <div className="flex items-center gap-1">
            <div className={`h-2 w-2 rounded-full ${status === 'Live' ? 'bg-green-500' : 'bg-white'}`}></div>
            <span className="text-sm font-medium">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
