import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function About() {
  return (
    <div className="flex flex-col items-center mt-16">
      <main className="flex flex-col items-center gap-12 max-w-4xl px-4">
        <h1 className="text-3xl font-bold animate-slide-in">About Me</h1>

        <div className="flex flex-col md:flex-row items-center gap-12 animate-slide-in-delay-100">
          <div className="max-w-xl">
            <p className="mb-6 text-lg">
              Hi, I'm Sofie, a frontend developer and UI/UX designer passionate about creating meaningful digital experiences.
            </p>
            <p className="mb-6">
              What drives me is the intersection of creativity and problem-solving. I love the process of transforming complex challenges into elegant, user-friendly solutions. There's nothing more rewarding than seeing people interact with and benefit from the technology I've helped create.
            </p>
            <p className="mb-6">
              My approach combines technical expertise with a deep understanding of user needs, ensuring that every project not only looks beautiful but also serves its purpose effectively.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, experimenting with creative projects, and staying curious about emerging technologies.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-64 h-64 relative rounded-lg overflow-hidden shadow-lg animate-slide-in-delay-200">
              <Image
                src={getImagePath("/images/profile.JPG")}
                alt="Sofie Buur"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-lg animate-slide-in-delay-300">
                <Image
                  src="/images/working.jpg"
                  alt="Working on projects"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-lg animate-slide-in-delay-400">
                <Image
                  src="/images/creative.jpg"
                  alt="Creative process"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-slide-in-delay-500">
          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-600">Turning complex challenges into elegant solutions</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-2">User-Focused</h3>
            <p className="text-gray-600">Creating experiences that people love to use</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-2">Creative Mind</h3>
            <p className="text-gray-600">Blending aesthetics with functionality</p>
          </div>
        </div>
      </main>
    </div>
  );
}
