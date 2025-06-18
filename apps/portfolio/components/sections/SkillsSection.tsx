'use client';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython
} from 'react-icons/fa';
import { SiFramer, SiJira, SiTypescript, SiLangchain } from 'react-icons/si';
import { motion } from 'framer-motion';
import { SkillCard } from '../ui/SkillCard';
import { TbBrandNextjs } from 'react-icons/tb';
import { RiNextjsLine, RiNotionFill, RiTailwindCssFill } from 'react-icons/ri';
import { PiSlackLogo } from 'react-icons/pi';
import { FiFigma } from 'react-icons/fi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { SkillEnum } from '@/lib/enums/enums.enum';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

interface SkillsSectionProps {
  id: string;
}

export function SkillsSection({ id }: SkillsSectionProps) {
  const { t: translate } = useTranslation()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted &&
    <section id={id} className="scroll-mt-8 py-6 md:py-10">
      <h2 className="text-2xl md:text-3xl text-portfolio-gray-default font-medium mb-4 md:mb-6">
        {translate('skills.title')}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <SkillCard
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              level={skill.level}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const skills = [
  // languages
  {
    type: SkillEnum.LANGUAGES,
    name: 'HTML',
    icon: <FaHtml5 />,
    color: 'text-orange-500',
    level: 3
  },
  {
    type: SkillEnum.LANGUAGES,
    name: 'CSS/SCSS',
    icon: <FaCss3Alt />,
    color: 'text-blue-500',
    level: 3
  },
  {
    type: SkillEnum.LANGUAGES,
    name: 'JavaScript',
    icon: <FaJs />,
    color: 'text-yellow-400',
    level: 3
  },
  {
    type: SkillEnum.LANGUAGES,
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-600',
    level: 3
  },
  {
    type: SkillEnum.LANGUAGES,
    name: 'Python',
    icon: <FaPython />,
    color: 'text-blue-500',
    level: 3
  },

  // tools(Frameworks & Libraries)
  {
    type: SkillEnum.TOOLS,
    name: 'LangChain',
    icon: <SiLangchain />,
    color: 'text-green-700',
    level: 2
  },
  {
    type: SkillEnum.TOOLS,
    name: 'React',
    icon: <FaReact />,
    color: 'text-cyan-500',
    level: 3
  },
  {
    type: SkillEnum.TOOLS,
    name: 'NextJS',
    icon: <RiNextjsLine />,
    color: 'text-black',
    level: 3
  },
  {
    type: SkillEnum.TOOLS,
    name: 'Git',
    icon: <FaGitAlt />,
    color: 'text-orange-600',
    level: 2
  },
  {
    type: SkillEnum.TOOLS,
    name: 'MUI',
    icon: <PiSlackLogo />,
    color: 'text-blue-500',
    level: 3
  },
  {
    type: SkillEnum.TOOLS,
    name: 'TailwindCSS',
    icon: <RiTailwindCssFill />,
    color: 'text-blue-500',
    level: 1.5
  },
  {
    type: SkillEnum.TOOLS,
    name: 'FramerMotion',
    icon: <SiFramer />,
    color: 'text-pink-800',
    level: 2
  },
  {
    type: SkillEnum.TOOLS,
    name: 'Figma',
    icon: <FiFigma />,
    color: 'text-navy',
    level: 1.5
  },
  // soft skills
  {
    type: SkillEnum.SOFT_SKILLS,
    name: 'Jira',
    icon: <SiJira />,
    color: 'text-blue-500',
    level: 2
  },
  {
    type: SkillEnum.SOFT_SKILLS,
    name: 'Notion',
    icon: <RiNotionFill />,
    color: 'text-black',
    level: 3
  },
  {
    type: SkillEnum.SOFT_SKILLS,
    name: 'Slack',
    icon: <PiSlackLogo />,
    color: 'text-purple-500',
    level: 2
  },
  {
    type: SkillEnum.SOFT_SKILLS,
    name: 'AgileScrum',
    icon: <FaPeopleGroup />,
    color: 'text-navy-500',
    level: 2
  }
];
