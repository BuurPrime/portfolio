"use client";

import React from "react";

interface WorkPageWrapperProps {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
}

export const WorkPageWrapper: React.FC<WorkPageWrapperProps> = ({
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <div className="w-full">
      {/* work/project info */}
      <div className="w-full flex flex-col items-center gap-3">
        <h1 className="project-title animate-slide-in-delay-50">{title}</h1>
        <div>
          <p className="project-subtitle">{subtitle}</p>
          <p className="project-description">{description}</p>
        </div>
      </div>

      {/* work/project content */}
      <div>{children}</div>
    </div>
  );
};
