"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";
interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  logo: string;
  link: string;
  description_en: string;
  description_ko: string;

}

export function ExperienceCard({ company, position, period, logo, link, description_en, description_ko }: ExperienceCardProps) {
  const { i18n } = useTranslation();


  return (
    <button
      type="button"
      className="w-full text-left transparent-card px-4 md:px-6 py-1 md:py-3 text-portfolio-gray-default backdrop-blur-sm border border-white/10 rounded-xl relative overflow-hidden hover:border-white/20 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-15 h-15 md:w-20 md:h-20 flex-shrink-0">
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
          <div className="flex-1 min-w-0 w-64 md:w-128 lg:w-160">
            <h3 className="font-medium text-sm md:text-base text-portfolio-gray-default-hover">
              {company}
            </h3>
            <p className="font-regular text-portfolio-gray-default text-xs md:text-sm">
              {position}
            </p>
            <p className="mt-2 font-regular text-portfolio-gray-default text-xs md:text-sm break-words whitespace-break-spaces">
              {i18n.language === "ko" ? description_ko : description_en}
            </p>
          </div>
        </div>
        <div className="text-left sm:text-right flex-shrink-0 w-20 md:w-24">
          <p className="text-portfolio-gray-default text-[10px] md:text-xs font-thin italic">
            {period}
          </p>
        </div>
      </div>
    </button>
  );
}
