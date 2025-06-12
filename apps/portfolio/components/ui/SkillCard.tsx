import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: number;
}

export function SkillCard({ name, icon, color, level }: SkillCardProps) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(level);
    const hasHalfStar = level % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    const emptyStars = 3 - Math.ceil(level);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="transparent-card p-4 text-center rounded-xl shadow-md bg-white/10 backdrop-blur hover:bg-white/30 transition-all duration-200 relative group">
      <div className="text-3xl md:text-4xl mb-2 flex justify-center items-center">
        <span className={`${color}`}>{icon}</span>
      </div>
      <p className="text-sm md:text-base text-portfolio-gray font-medium">{name}</p>
      <div className="absolute inset-0 bg-black/80 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
        <div className="flex gap-1">
          {renderStars()}
        </div>
        <p className="text-white text-sm mt-2">Proficiency</p>
      </div>
    </div>
  );
}

