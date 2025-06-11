import { JobCard } from "../ui/JobCard";

interface ExperienceSectionProps {
  id: string;
}

const experience = [
  {
    company: "i4Twins",
    position: "Frontend Developer",
    period: "Apr 2024 - Present",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    company: "Previous Company",
    position: "Junior Frontend Developer",
    period: "Jan 2022 - Mar 2024",
    logo: "/placeholder.svg?height=40&width=40",
  },
];

export function ExperienceSection({ id }: ExperienceSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 min-h-[300px] md:min-h-[400px]">
      <h2 className="text-2xl md:text-3xl font-bold  text-portfolio-gray-text mb-4 md:mb-6">
        Experience
      </h2>
      <div className="space-y-3 md:space-y-4">
        {experience.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}
