"use client"

import { getTechChipClasses } from "@/lib/utils/colors";
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react";
import { ProjectDetailsModal } from "./ProjectDetailsModal";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button
        type="button"
        className="w-full text-left"
        onClick={() => setIsModalOpen(true)}
        onKeyDown={handleKeyDown}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          className="transparent-card-overlay p-4 md:p-6 text-portfolio-gray-default group relative overflow-hidden h-[160px] md:h-[200px] flex flex-col"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base md:text-lg font-semibold text-portfolio-gray-default group-hover:text-portfolio-gray-hover transition-colors duration-300">
                {title}
              </h3>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ArrowUpRight className="w-5 h-5 text-portfolio-gray-hover" />
              </motion.div>
            </div>

            <p className="text-xs md:text-sm mb-4 font-regular text-portfolio-gray-default group-hover:text-portfolio-gray-hover transition-colors duration-300 flex-grow">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm 
                    border shadow-lg hover:shadow-xl transition-all duration-300 group/chip ${getTechChipClasses(tech)}`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </button>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        technologies={technologies}
      />
    </>
  );
}
