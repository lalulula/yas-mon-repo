interface ProjectsSectionProps {
  id: string;
}

export function ProjectsSection({ id }: ProjectsSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 min-h-[300px] md:min-h-[400px]">
      <h2 className="text-2xl md:text-3xl font-bold  text-portfolio-gray-text mb-4 md:mb-6">
        Projects
      </h2>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6  text-portfolio-gray-text">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white/30 rounded-lg p-3 md:p-4">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Portfolio Website
            </h3>
            <p className=" text-portfolio-gray-text text-sm md:text-base mb-3 md:mb-4">
              A modern, responsive portfolio built with Next.js and Tailwind CSS
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-500/20 rounded text-xs md:text-sm">
                Next.js
              </span>
              <span className="px-2 py-1 bg-blue-500/20 rounded text-xs md:text-sm">
                React
              </span>
              <span className="px-2 py-1 bg-blue-500/20 rounded text-xs md:text-sm">
                Tailwind
              </span>
            </div>
          </div>
          <div className="bg-white/30 rounded-lg p-3 md:p-4">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              E-commerce App
            </h3>
            <p className=" text-portfolio-gray-text text-sm md:text-base mb-3 md:mb-4">
              Full-stack e-commerce solution with payment integration
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-500/20 rounded text-xs md:text-sm">
                Vue.js
              </span>
              <span className="px-2 py-1 bg-green-500/20 rounded text-xs md:text-sm">
                Node.js
              </span>
              <span className="px-2 py-1 bg-green-500/20 rounded text-xs md:text-sm">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
