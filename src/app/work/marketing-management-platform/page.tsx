'use client';

export default function MarketingManagementPlatform() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main className="flex flex-col items-center gap-8 px-4 md:px-8 w-full max-w-7xl">
        <h1 className="text-4xl font-bold animate-slide-in">Marketing Management Platform</h1>
        
        <div className="w-full">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto animate-slide-in-delay-50">
              A comprehensive platform for managing marketing campaigns and analytics.
            </p>
            
            {/* Add more detailed content about the project here */}
            <div className="mt-12 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <p>
                  [Add your project overview here]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Technology 1</li>
                  <li>Technology 2</li>
                  <li>Technology 3</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 mt-16">
          <div
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors animate-slide-in-delay-150"
            onClick={() => window.scrollTo(0, 0)}
          >
            Back to top
          </div>
        </div>
      </main>
    </div>
  );
} 