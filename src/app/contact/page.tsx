"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BadgeCheck, ArrowUpRight, Linkedin, Dribbble } from "lucide-react";
import { getImagePath } from "@/lib/utils";


export default function Contact() {

  const [copied, setCopied] = useState(false);
  const email = "sofieamaliebuur@gmail.com";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "c") {
        copyEmail();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-24 px-4">
      {/* Profile Section */}
      <div className="flex flex-col gap-6 animate-slide-in">
        {/* Avatar */}
        <div className="relative w-26 h-26">
          <Image
            src={getImagePath("/images/profile.JPG")}
            alt="Sofie Buur"
            width={80}
            height={80}
            className="rounded-2xl object-cover w-full h-full"
            priority
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-[3px] border-[#0a0a0a]"></div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-medium text-white">Sofie Buur</h3>
              <BadgeCheck className="w-4 h-4 text-blue-500 " strokeWidth={3} />
            </div>
            <p className="text-neutral-500 text-sm">
              Frontend Developer & UI/UX Designer
            </p>
          </div>

          <p className="text-neutral-400 leading-relaxed max-w-lg text-sm">
            Hi, I'm Sofie a frontend developer based in Denmark
            <span
              className="inline-flex items-baseline ml-1.5 translate-y-[2px]"
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
            working in the interseciton of design and engineering, crafting intuitive experiences while maintaing a clean developer-friendly codebase.
          </p>

          <div className="pt-2 flex items-center gap-3 text-neutral-500 text-sm">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-2 hover:text-neutral-300 transition-colors"
            >
              <span>
                Press{" "}
                <span className="inline-flex items-center justify-center w-5 h-5 bg-neutral-800 rounded text-neutral-300 text-[10px] font-mono border border-neutral-700 mx-0.5 group-hover:border-neutral-500 transition-colors">
                  C
                </span>{" "}
                to copy my email
              </span>
            </button>
            {copied && (
              <span className="text-green-500 text-xs animate-in fade-in slide-in-from-left-2 duration-300">
                Copied to clipboard!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="mt-32 border-t border-neutral-900/50 pt-8">
        <h2 className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase mb-4">
          Connect
        </h2>
        <div className="flex flex-col gap-3">
          {[
            { 
              name: "LinkedIn", 
              url: "https://www.linkedin.com/in/sofie-buur-frontend-developer-uiux-designer/",
              icon: (
                <Linkedin className="w-4 h-4" />
              )
            },
            { 
              name: "Dribbble", 
              url: "https://dribbble.com/Buur",
              icon: (
                <Dribbble className="w-4 h-4" />
              )
            },
            { 
              name: "Notion Creator", 
              url: "https://www.notion.com/@prettyproductivity",
              icon: (
                <Image 
                  src={getImagePath("/images/notion.svg")}
                  alt="Notion" 
                  width={16} 
                  height={16} 
                  className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              )
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

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
    </div>
  );
}
