"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BadgeCheck, ArrowUpRight, Linkedin, Dribbble, Mail } from "lucide-react";
import { getImagePath } from "@/lib/utils";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "sofieamaliebuur@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 10000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-24 px-4">
      {/* Profile Section */}
      <div className="flex flex-col gap-4 animate-slide-in">
        {/* Avatar */}
        <div className="relative w-18 h-18">
          <Image
            src={getImagePath("/images/profile.JPG")}
            alt="Sofie Buur"
            width={50}
            height={50}
            className="rounded-2xl object-cover w-full h-full"
            priority
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-[3px] border-[#0a0a0a]"></div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-lg font-medium text-white">Sofie Buur</p>
              <BadgeCheck className="w-4 h-4 text-blue-500 " strokeWidth={3} />
            </div>
            <p className="text-neutral-500 text-sm">
              Frontend Developer & UI/UX Designer
            </p>
          </div>

          <p className="text-neutral-400 leading-relaxed max-w-lg text-sm">
            Hi, I'm Sofie a frontend developer based in Denmark
            <span
              className="inline-flex items-baseline ml-1.5 translate-y-[0.5px]"
              aria-label="Denmark flag"
            >
              <svg
                width="15"
                height="11"
                viewBox="0 0 28 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[2px] shadow-sm"
              >
                <rect width="28" height="21" fill="#C60C30" />
                <rect x="8" width="4" height="21" fill="white" />
                <rect y="8.5" width="28" height="4" fill="white" />
              </svg>
            </span>{" "}
            working in the interseciton of design and engineering, crafting
            intuitive experiences while maintaing a clean developer-friendly
            codebase.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 text-sm text-neutral-500 hover:text-white transition-colors py-2"
            >
              <span className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg group-hover:border-neutral-700 transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <span>{copied ? "Email copied ✓ " : "Email me"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </button>

            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sofie-buur-frontend-developer-uiux-designer/",
                icon: <Linkedin className="w-4 h-4" />,
              },
              {
                name: "Dribbble",
                url: "https://dribbble.com/Buur",
                icon: <Dribbble className="w-4 h-4" />,
              }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-neutral-500 hover:text-white transition-colors py-2"
              >
                <span className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg group-hover:border-neutral-700 transition-colors">
                  {link.icon}
                </span>
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="mt-32 border-t border-neutral-900/50 pt-8">
        <h2 className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase mb-12">
          Connect
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 mt-8 mb-20 px-4">
          {/* Card 1: Email */}
          <div 
            onClick={copyEmail}
            className="group relative w-full md:w-64 h-48 bg-neutral-900 border border-neutral-800 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 ease-out hover:z-50 hover:scale-105 rotate-[-4deg] hover:rotate-0 cursor-pointer shadow-lg hover:shadow-xl hover:border-neutral-700"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-neutral-800/50 rounded-lg text-white">
                <Mail size={24} />
              </div>
              <ArrowUpRight className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <p className="text-neutral-500 text-sm">{copied ? "Copied!" : "Drop me a line"}</p>
            </div>
          </div>

          {/* Card 2: LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/sofie-buur-frontend-developer-uiux-designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-64 h-48 bg-neutral-900 border border-neutral-800 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 ease-out hover:z-50 hover:scale-105 rotate-[2deg] hover:rotate-0 -mt-4 md:mt-0 md:-ml-12 cursor-pointer shadow-lg hover:shadow-xl hover:border-neutral-700"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-neutral-800/50 rounded-lg text-[#0077b5]">
                <Linkedin size={24} />
              </div>
              <ArrowUpRight className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">LinkedIn</h3>
              <p className="text-neutral-500 text-sm">Let's connect</p>
            </div>
          </a>

          {/* Card 3: Dribbble */}
          <a 
            href="https://dribbble.com/Buur"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-64 h-48 bg-neutral-900 border border-neutral-800 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 ease-out hover:z-50 hover:scale-105 rotate-[-2deg] hover:rotate-0 -mt-4 md:mt-0 md:-ml-12 cursor-pointer shadow-lg hover:shadow-xl hover:border-neutral-700"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-neutral-800/50 rounded-lg text-[#ea4c89]">
                <Dribbble size={24} />
              </div>
              <ArrowUpRight className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Dribbble</h3>
              <p className="text-neutral-500 text-sm">Check my work</p>
            </div>
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default Contact;
