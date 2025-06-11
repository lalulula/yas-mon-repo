import { Button } from "@workspace/ui/components/button";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-8 text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-3xl text-portfolio-gray-text md:text-4xl font-bold mb-3 md:mb-4">
              Yunah Kim / 김윤아
            </h1>
            <p className="text-base text-portfolio-gray-text md:text-lg leading-relaxed mb-6 max-w-2xl">
              Innovative Front-End Developer with 2+ years of expertise in
              building responsive, high-performance web applications using and
              React / Next.js. Passionate about merging user-centric design with
              cutting-edge technology to solve complex problems.
            </p>
            <Button className="bg-[oklch(95%_0.03_95)] hover:bg-[oklch(85%_0.03_85)] text-[oklch(50%_0.05_85)]">
              <Download className="mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="w-88 h-72 bg-white/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-white/20 rounded-sm mx-auto mb-4">
                Profile image here
              </div>
              <div className="space-y-2">
                <div className="px-2 py-2 bg-white/20 rounded text-sm font-medium">
                  Yunah Kim
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[300px] md:min-h-[400px]">
        <h2 className="text-2xl md:text-3xl text-portfolio-gray-text font-bold mb-4 md:mb-6">
          Education
        </h2>
        <div className="bg-white/10 backdrop-blur-sm text-portfolio-gray-text rounded-xl p-4 md:p-6 ">
          <div className="space-y-4 md:space-y-6">
            <div className="border-l-2 md:border-l-4 border-[oklch(42.26%_0.066_269.06)] pl-3 md:pl-6">
              <h3 className="text-lg md:text-xl font-semibold">
                Bachelor of Computer Science
              </h3>
              <p className="text-portfolio-gray-text text-sm md:text-base">
                Stony Brook University
              </p>
              <p className="text-portfolio-gray-text text-xs md:text-sm">
                2018 - 2022
              </p>
              <p className="mt-2 text-sm md:text-base">
                Focused on software engineering, web development, and computer
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
