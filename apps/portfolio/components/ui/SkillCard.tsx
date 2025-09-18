'use client';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: number;
}

export function SkillCard({ name, icon, color, level }: SkillCardProps) {
  const { t: translate } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
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
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button
      type="button"
      className="transparent-card p-4 text-center rounded-xl shadow-md bg-white/10 backdrop-blur hover:bg-white/30 transition-all duration-200 relative group cursor-pointer w-full h-full"
      onClick={handleClick}
      aria-label={`${name} - ${translate('skills.proficiency')}`}
    >
      <div className="text-3xl md:text-4xl mb-2 flex justify-center items-center">
        <span className={`${color}`}>{icon}</span>
      </div>
      <p className="text-[10px] md:text-sm text-portfolio-gray-default font-regular break-words hyphens-auto leading-tight">
        {name}
      </p>
      <div
        className={`absolute inset-0 bg-black/80 rounded transition-opacity duration-300 flex flex-col items-center justify-center ${
          isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <div className="flex gap-1">{renderStars()}</div>
        <p className="text-[oklch(0.9851_0_0)] text-sm mt-2">
          {translate('skills.proficiency')}
        </p>
      </div>
    </button>
  );
}
