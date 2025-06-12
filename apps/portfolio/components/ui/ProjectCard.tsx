interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  colorClass: string;
}

export default function ProjectCard({ title, description, technologies, colorClass }: ProjectCardProps) {
  return (
    <div className="card-overlay p-3 md:p-4 text-portfolio-gray  ">
      <h3 className="text-lg md:text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base mb-3 md:mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className={`px-2 py-1 ${colorClass} rounded text-xs md:text-sm`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
