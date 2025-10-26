"use client";

import React from "react";
import Button from "@/components/Button";

const ProjectFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-10">
      <Button
        type="primary"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </Button>
    </div>
  );
};

export default ProjectFooter;
