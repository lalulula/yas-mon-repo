import { SkillCard } from "../ui/SkillCard";

interface SkillsSectionProps {
  id: string;
}

const skills = [
  { name: "Html", color: "bg-orange-500" },
  { name: "CSS/SCSS", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Angular", color: "bg-red-500" },
  { name: "Vue", color: "bg-green-500" },
  { name: "React", color: "bg-cyan-500" },
  { name: "Git", color: "bg-orange-600" },
  { name: "Linux", color: "bg-gray-700" },
];

export function SkillsSection({ id }: SkillsSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 min-h-[300px] md:min-h-[400px]">
      <h2 className="text-2xl md:text-3xl font-bold  text-portfolio-gray-text mb-4 md:mb-6">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} color={skill.color} />
        ))}
      </div>
    </section>
  );
}
