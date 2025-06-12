import ProjectCard from "../ui/ProjectCard";

interface ProjectsSectionProps {
  id: string;
}

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "React", "Tailwind"],
    colorClass: "bg-blue-500/20"
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce solution with payment integration",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    colorClass: "bg-green-500/20"
  }
];

export function ProjectsSection({ id }: ProjectsSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 min-h-[300px] md:min-h-[400px]">
      <h2 className="text-2xl md:text-3xl font-bold text-portfolio-gray mb-4 md:mb-6">
        Projects
      </h2>
      <div className="transparent-card p-4 md:p-6 text-portfolio-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
