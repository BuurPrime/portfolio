'use client';

import Button from "@/components/Button";

export default function MarketingManagementPlatform() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main className="flex flex-col items-center gap-8 px-4 md:px-8 w-full max-w-7xl">
        <h1 className="text-4xl font-bold animate-slide-in">Marketing CRM Platform</h1>
        
        <div className="w-full">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto animate-slide-in-delay-50">
              Custom made CRM for fintechs to manage their marketing strategies.
            </p>
            
            
          </div>
        </div>
        
        <div className="flex gap-4 my-10">
          <Button
            type="primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
          </Button>
        </div>
      </main>
    </div>
  );
} 