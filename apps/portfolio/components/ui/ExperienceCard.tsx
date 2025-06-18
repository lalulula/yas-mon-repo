"use client"

import Image from "next/image";
import { useState } from "react";
import { ExperienceDetailsModal } from "./ExperienceDetailsModal";
interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  logo: string;
  link: string;
  description?: string;
  details?: Array<{
    title: string;
    description: string;
  }>;
}

export function ExperienceCard({ company, position, period, logo, link, description, details }: ExperienceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        onKeyDown={handleKeyDown}
        className="w-full text-left transparent-card px-4 md:px-6 py-1 md:py-3 text-portfolio-gray-default backdrop-blur-sm border border-white/10 rounded-xl relative overflow-hidden cursor-pointer hover:border-white/20 transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative w-15 h-15 md:w-20 md:h-20">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="block w-full h-full"
              >
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  fill
                  className="object-contain p-2"
                />
              </a>
            </div>
            <div>
              <h3 className="font-medium text-sm md:text-base text-portfolio-gray-default-hover">
                {company}
              </h3>
              <p className="font-regular text-portfolio-gray-default text-xs md:text-sm">
                {position}
              </p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-portfolio-gray-default text-[10px] md:text-xs font-thin italic">
              {period}
            </p>
          </div>
        </div>
      </button>

      <ExperienceDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        company={company}
        position={position}
        period={period}
        description={description}
        details={details}
      />
    </>
  );
}
