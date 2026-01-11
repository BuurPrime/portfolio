import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectInfoProps {
  year: string;
  company?: string;
  companyUrl?: string;
  link?: string;
  linkUrl?: string;
  tech: string;
  status?: string;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({
  year,
  company,
  companyUrl,
  link,
  linkUrl,
  tech,
  status,
}) => {
  return (
    <div className="w-full border-t border-b border-neutral-900 mt-8 p-4">
      <div className="grid grid-cols-2 gap-y-6 md:flex md:justify-between max-w-5xl mx-auto">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
            Year
          </span>
          <span className="text-sm font-medium">{year}</span>
        </div>

        {company && (
          <div className="flex flex-col">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
              CUSTOMER
            </span>
            <span className="flex text-sm font-medium">
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1"
              >
                {company}
                {companyUrl && (
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                )}
              </a>
            </span>
          </div>
        )}

        {link && (
          <div className="flex flex-col">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
              LINK
            </span>
            <span className="flex text-sm font-medium">
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1"
              >
                {link}
                {linkUrl && (
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                )}
              </a>
            </span>
          </div>
        )}

        <div className="flex flex-col">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
            Made with
          </span>
          <span className="text-sm font-medium">{tech}</span>
        </div>

        {status && (
        <div className="flex flex-col">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
            Status
          </span>
          <div className="flex items-center gap-1">
            {status === "Live" ? (
              <div className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
            ) : (
              <div className="h-2 w-2 rounded-full bg-white"></div>
            )}
            <span className="text-sm font-medium">{status}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
