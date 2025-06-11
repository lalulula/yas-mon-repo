interface SkillCardProps {
  name: string;
  color: string;
}

export function SkillCard({ name, color }: SkillCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center hover:bg-black/40 transition-colors">
      <div
        className={`w-10 h-10 md:w-12 md:h-12 ${color} rounded-xl mx-auto mb-2 md:mb-3 flex items-center justify-center`}
      >
        <span className=" text-portfolio-gray-text font-bold text-sm">
          {name.charAt(0)}
        </span>
      </div>
      <p className=" text-portfolio-gray-text font-medium text-xs md:text-sm">
        {name}
      </p>
    </div>
  );
}
