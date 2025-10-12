import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function About() {
  return (
    <div className="min-h-screen">
      <main>
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <h1 className="text-4xl font-bold animate-slide-in">About Me</h1>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-white">
                  Frontend Developer & UI/UX Designer
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm Sofie, a passionate frontend developer focused on creating
                  meaningful digital experiences that combine beautiful design
                  with intuitive functionality.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  My expertise lies in React, TypeScript, and modern web
                  technologies. I believe in writing clean, maintainable code
                  and crafting user interfaces that not only look great but
                  solve real problems.
                </p>
              </div>

              {/* Skills Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">What I do</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="dark-container">
                    <h4 className="font-medium text-white mb-2">
                      Frontend Development
                    </h4>
                    <p className="text-sm text-gray-400">
                      React, TypeScript, Next.js
                    </p>
                  </div>
                  <div className="dark-container">
                    <h4 className="font-medium text-white mb-2">
                      UI/UX Design
                    </h4>
                    <p className="text-sm text-gray-400">
                      User-centered design, prototyping
                    </p>
                  </div>
                  <div className="dark-container">
                    <h4 className="font-medium text-white mb-2">
                      Modern Tools
                    </h4>
                    <p className="text-sm text-gray-400">
                      TailwindCSS, Figma, Git
                    </p>
                  </div>
                  <div className="dark-container">
                    <h4 className="font-medium text-white mb-2">
                      Problem Solving
                    </h4>
                    <p className="text-sm text-gray-400">
                      Clean code, best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-gray-700/50">
                  <Image
                    src={getImagePath("/images/profile.JPG")}
                    alt="Sofie Buur - Frontend Developer"
                    fill
                    className="object-cover transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              My Tech Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* UI/UX Design */}
              <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    UI/UX Design
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    User interface design, Figma prototyping, usability testing,
                    and user-centered design principles.
                  </p>
                </div>
              </div>

              {/* Frontend Development */}
              <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Frontend Development
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    React, Angular, TypeScript, JavaScript, and TailwindCSS for
                    modern web applications.
                  </p>
                </div>
              </div>

              {/* Backend Development */}
              <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Backend Development
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Java and C# for server-side development, APIs, and
                    enterprise applications.
                  </p>
                </div>
              </div>

              {/* Database & Data */}
              <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Database & Data
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    SQL database design, data modeling, and data management for
                    scalable applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always exploring new technologies and design trends to stay
                at the forefront of web development. When I'm not coding, you'll
                find me experimenting with creative projects and staying curious
                about emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
