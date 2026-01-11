"use client";

import React from "react";
import { WorkPageWrapper } from "@/components/layout/WorkPageWrapper";
import { ProjectInfo } from "@/components/ProjectInfo";
import { ImageBlock } from "@/components/ImageBlock";
import { Chip } from "@/components";
import ProjectFooter from "@/components/layout/ProjectFooter";

const EspressoTools: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <main>
        <WorkPageWrapper
          title="Espresso Tools Visual Identity"
          subtitle="Visual identity for a danish webshop selling espresso tools"
          description="Designed independently by me"
        >
          <ProjectInfo
            year="2025"
            company="Espresso Tools"
            companyUrl="https://espressotools.dk"
            tech="Figma, Illustrator"
            status="Live"
          />

          <div className="flex flex-col items-center w-full gap-15 my-6">
            {/* Introduction */}
            <div className="flex flex-col m-0 gap-6">
              <h3>Brand Essence</h3>
              <p className="text-[#b7b7b7] leading-relaxed">
                Espresso Tools is your trusted source for high-quality espresso
                equipment. We offer a curated selection of tools designed to
                elevate your espresso experience, whether at home or in a café.
                Our products are chosen for their durability, functionality, and
                timeless design—helping baristas and coffee enthusiasts brew
                better coffee every day.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-[#888]">
                <Chip label="Visual Identity" />
                <Chip label="Brand Design" />
                <Chip label="E-commerce" />
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex flex-col items-center m-0 w-full">
              <ImageBlock
                src="/images/work/EspressoTools/EspressoTools_Thumbnail.png"
                alt="Espresso Tools Brand Identity Showcase"
              />
            </div>

            {/* Color Palette */}
            <div className="flex flex-col gap-6 w-full">
              <h4 className="text-3xl font-medium text-white">Color Palette</h4>
              <p className="text-[#b7b7b7] leading-relaxed">
                The color palette is inspired by the various stages of espresso
                extraction—from the deep, dark roast to the rich, golden crema.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
                <div className="p-6 rounded-lg bg-[#1a1a1a] flex flex-col justify-end h-32 border border-white/10">
                  <span className="text-white font-mono text-sm">
                    Charcoal Black
                  </span>
                  <span className="text-white/50 font-mono text-xs">
                    #1A1A1A
                  </span>
                </div>
                <div className="p-6 rounded-lg bg-[#30120B] flex flex-col justify-end h-32 border border-white/10">
                  <span className="text-white font-mono text-sm">
                    Cocoa Brown
                  </span>
                  <span className="text-white/50 font-mono text-xs">
                    #30120B
                  </span>
                </div>
                <div className="p-6 rounded-lg bg-[#99DD96] flex flex-col justify-end h-32 border border-white/10">
                  <span className="text-black font-mono text-sm">Apple</span>
                  <span className="text-black/50 font-mono text-xs">
                    #99DD96
                  </span>
                </div>
                <div className="p-6 rounded-lg bg-[#FAF7F2] flex flex-col justify-end h-32 border border-white/10">
                  <span className="text-black font-mono text-sm">Ivory</span>
                  <span className="text-black/50 font-mono text-xs">
                    #FAF7F2
                  </span>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col gap-6 w-full">
              <h4 className="text-3xl font-medium text-white">Typography</h4>
              <p className="text-[#b7b7b7] leading-relaxed">
                We selected a clean, geometric sans-serif to ensure legibility
                across digital platforms while maintaining a sleek, industrial
                look reminiscent of high-end espresso machines.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="p-8 border border-white/10 rounded-lg bg-white/5 flex flex-col justify-center">
                  <span className="text-white/50 font-mono text-sm mb-4">
                    Antonio
                  </span>
                  <p className="text-4xl md:text-6xl font-bold text-white mb-4 font-antonio">
                    Aa Bb Cc
                  </p>
                  <p className="text-xl text-white/70 font-antonio">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                <div className="p-8 border border-white/10 rounded-lg bg-white/5 flex flex-col justify-center">
                  <span className="text-white/50 font-mono text-sm mb-4">
                    Figtree
                  </span>
                  <p className="text-4xl md:text-6xl font-regular text-white mb-4 font-figtree">
                    Aa Bb Cc
                  </p>
                  <p className="text-xl text-white/70 font-figtree">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ProjectFooter />
        </WorkPageWrapper>
      </main>
    </div>
  );
};

export default EspressoTools;
