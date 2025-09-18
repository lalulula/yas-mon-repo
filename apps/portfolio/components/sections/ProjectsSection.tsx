'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { projects } from '@/src/dto/constants/project-lists.const';
interface ProjectsSectionProps {
  id: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export function ProjectsSection({ id }: ProjectsSectionProps) {
  const { t: translate } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <section
        id={id}
        className="scroll-mt-8 min-h-[300px] md:min-h-[400px] py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          className="mb-4"
        >
          <div className="flex flex-row items-end gap-4">
            <h2 className="text-2xl md:text-3xl font-medium text-portfolio-gray-default">
              {translate('projects.title')}
            </h2>
            <p className="text-sm text-portfolio-gray-transparent md:hidden italic">
              {translate('projects.mobile_helper_text')}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-100px' }}
          className="transparent-card p-4 md:p-6 text-portfolio-gray-default backdrop-blur-sm border border-white/10 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="h-full"
              >
                <ProjectCard
                  {...project}
                  description={translate(
                    `projects.${project.translationKey}.description`
                  )}
                  detailDescription={translate(
                    `projects.${project.translationKey}.detailDescription`
                  )}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    )
  );
}
