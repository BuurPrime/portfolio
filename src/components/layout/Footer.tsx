import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-2 text-neutral-700 text-xs border-t border-neutral-900 w-full p-12">
      <div className="flex space-x-4">
        <a
          className="hover:text-neutral-500"
          href="https://www.linkedin.com/in/sofie-buur-frontend-developer-uiux-designer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="hover:text-neutral-500"
          href="https://dribbble.com/Buur"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>
        <a
          className="hover:text-neutral-500"
          href="https://www.notion.com/@prettyproductivity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Notion Creator
        </a>
        <a
          className="hover:text-neutral-500"
          href="/SofieBuur_CV2025_EN.pdf"
          download="SofieBuur_CV2025_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <p>Made with Next.js, TypeScript, & Tailwind</p>
      <p>&copy; {new Date().getFullYear()} Sofie Buur · All rights reserved.</p>
    </div>
  );
};

export default Footer;
