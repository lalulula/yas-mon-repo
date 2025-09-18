/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { Badge } from '@/components/ui/badge';
import { PROJECTS } from '@/lib/constants/data.consts';

export function Projects() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {PROJECTS.map((project, index) => (
        <div
          key={`${project.name}-${index}`}
          className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
        >
          <div className="lg:col-span-6 space-y-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-medium">
                  {project.name}
                </h3>
              </div>
              <div className="text-muted-foreground">{project.type}</div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-lg text-balance">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  View Project →
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0 ">
            {project.tech.map((tech, index) => (
              <Badge
                key={`${tech}-${index}`}
                variant="outline"
                className="text-xs text-muted-foreground border-border group-hover:border-muted-foreground/50 transition-colors duration-500"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
