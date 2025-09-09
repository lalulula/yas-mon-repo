import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    year: "2023",
    role: "Senior Frontend Engineer",
    company: "Vercel",
    description: "Leading frontend architecture for developer tools and AI-powered features.",
    tech: ["React", "TypeScript", "Next.js"],
  },
  {
    year: "2022",
    role: "Frontend Engineer",
    company: "Linear",
    description: "Built performant interfaces for project management and team collaboration.",
    tech: ["React", "GraphQL", "Framer Motion"],
  },
  {
    year: "2021",
    role: "Full Stack Developer",
    company: "Stripe",
    description: "Developed payment infrastructure and merchant-facing dashboard features.",
    tech: ["Ruby", "React", "PostgreSQL"],
  },
  {
    year: "2019",
    role: "Software Engineer",
    company: "Airbnb",
    description: "Created booking flow optimizations and host management tools.",
    tech: ["React", "Node.js", "MySQL"],
  },
]

export function WorkExperience() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {experiences.map((job, index) => (
        <div
          key={index}
          className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
        >
          <div className="lg:col-span-2">
            <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
              {job.year}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
              <div className="text-muted-foreground">{job.company}</div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-lg text-balance">{job.description}</p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
            {job.tech.map((tech) => (
              <Badge
                key={tech}
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
  )
}
