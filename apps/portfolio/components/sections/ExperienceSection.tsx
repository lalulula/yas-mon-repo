'use client';

import { motion } from 'framer-motion';
import { ExperienceCard } from '../ui/ExperienceCard';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { experience } from '@/src/dto/constants/exp.consts';
interface ExperienceSectionProps {
  id: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export function ExperienceSection({ id }: ExperienceSectionProps) {
  const { t: translate } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <section
        id={id}
        className="scroll-mt-8 min-h-[100px] md:min-h-[200px] py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          className="mb-4"
        >
          <div className="flex flex-row items-end gap-4">
            <h2 className="text-2xl md:text-3xl font-medium text-portfolio-gray-default">
              {translate('experience.title')}
            </h2>
            <p className="text-portfolio-gray-transparent italic text-[11px] md:text-[13px]">
              {translate('experience.click_logo')}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-100px' }}
          className="space-y-4 md:space-y-6"
        >
          {experience.map((job, index) => (
            <motion.div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ExperienceCard
                {...job}
                description_en={translate(
                  `experience.${job.translationKey}.description`
                )}
                description_ko={translate(
                  `experience.${job.translationKey}.description`
                )}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    )
  );
}
