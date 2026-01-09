import React from "react";
import { WorkPageWrapper } from "@/components/layout/WorkPageWrapper";
import { ProjectInfo } from "@/components/ProjectInfo";
import { ImageBlock } from "@/components/ImageBlock";
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
                link="Visit site"
                linkUrl="https://espressotools.dk/"
                tech="Figma, Illustrator"
                status="Live"
              />
              
              {/* Project Gallery */}
              <div className="flex flex-col items-center w-full gap-20 my-6">
                
                {/* Introduction */}
                <div className="flex flex-col m-0 gap-6">
                  <h3>Brand Identity</h3>
                  <p className="text-[#b7b7b7] leading-relaxed">
                    The goal was to create a modern and clean visual identity that reflects the precision and quality of the espresso tools sold. The design focuses on minimalism and usability, ensuring that the products stand out while maintaining a cohesive brand image across all platforms.
                  </p>
                </div>

                {/* Hero Image */}
                <div className="flex flex-col items-center m-0 w-full">
                  <ImageBlock
                    src="/images/work/ValyrionPlatform/ValyrionPlatform_Thumbnail.png"
                    alt="Espresso Tools Brand Identity Overview"
                  />
                </div>

                {/* Typography & Colors */}
                <div className="flex flex-col gap-6 w-full">
                  <h4 className="text-3xl font-medium text-white">
                    Typography & Color Palette
                  </h4>
                  <p className="text-[#b7b7b7] leading-relaxed">
                    A carefully selected color palette and typography system were established to communicate elegance and simplicity. The colors are inspired by the rich tones of coffee, while the typography ensures high readability and a contemporary feel.
                  </p>

                  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ImageBlock
                      src="/images/work/ValyrionPlatform/ValyrionPlatform_Thumbnail.png"
                      alt="Typography System"
                    />
                    <ImageBlock
                      src="/images/work/ValyrionPlatform/ValyrionPlatform_Thumbnail.png"
                      alt="Color Palette"
                    />
                  </div>
                </div>

                {/* Logo Design */}
                <div className="flex flex-col gap-6 w-full">
                  <h4 className="text-3xl font-medium text-white">Logo Design</h4>
                  <p className="text-[#b7b7b7] leading-relaxed">
                    The logo was designed to be versatile, working well on both digital screens and physical packaging. It incorporates subtle coffee-related elements without being overly literal, maintaining a professional look.
                  </p>

                  <div className="w-full max-w-6xl">
                    <ImageBlock
                      src="/images/work/ValyrionPlatform/ValyrionPlatform_Thumbnail.png"
                      alt="Logo Variations and Usage"
                    />
                  </div>
                </div>

                {/* Marketing Materials */}
                <div className="flex flex-col gap-6 w-full">
                  <h4 className="text-3xl font-medium text-white">Marketing Assets</h4>
                  <p className="text-[#b7b7b7] leading-relaxed">
                    To support the launch, a set of marketing materials was created, including social media assets, banners, and print collateral. These assets maintain consistency with the new visual identity.
                  </p>

                  <div className="w-full space-y-4 max-w-6xl">
                    <ImageBlock
                      src="/images/work/ValyrionPlatform/ValyrionPlatform_Thumbnail.png"
                      alt="Social Media Assets"
                    />
                    <ImageBlock
                      src="/images/work/ValyrionPlatform/ValyrionPlatform_Thumbnail.png"
                      alt="Product Packaging Design"
                    />
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
