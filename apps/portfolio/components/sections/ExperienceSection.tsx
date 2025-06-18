"use client"

import { motion } from "framer-motion";
import { ExperienceCard } from "../ui/ExperienceCard";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
interface ExperienceSectionProps {
  id: string;
}

const experience = [
  {
    company: "i-ESG",
    position: "Junior Frontend Developer",
    period: "Apr 2024 - Present",
    logo: "/assets/image/i-esg_logo.png",
    link: "https://i-esg.io/",
    description: "asdsadsadsadsadsdddsd",
    details: [{
      title: "1440 -> 1920 responsive web design",
      description: "Make the website responsive to different screen sizes",
    }, {
      title: "Fix legacy code",
      description: "Fix the legacy code of the website. For example change PDF download method from using python to using puppeteer.",
    }, {
      title: "MGT Module",
      description: "Brief for management module. It is a module for managing the company's projects and tasks. Develop & enhance module from scratch.",
    }],
  },
  {
    company: "IDCITI",
    position: "Software Developer",
    period: "Oct 2022 - 2023",
    logo: "/assets/image/idciti_logo.png",
    link: "https://idciti.com/",
    link2: "https://m.blog.naver.com/idciti/222928365002",
    description: "asdsadsdasdsadsadsad",
    details: [],
  },
  {
    company: "Teaching Assistant",
    position: "Teaching Assistant",
    period: "Mar 2022 - Sep 2022",
    logo: "/assets/image/sbu_logo.png",
    link: "https://www.stonybrook.edu/commcms/registrar/registration/schedules.php",
    description: "asdsasdasdasdasd",
    details: [{
      title: "AMS 301",
      description: "",
    },
    {
      title: "CSE 206",
      description: "",
    }],
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export function ExperienceSection({ id }: ExperienceSectionProps) {
  const { t: translate } = useTranslation()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (mounted &&
    <section id={id} className="scroll-mt-8 min-h-[100px] md:min-h-[200px] py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        className="mb-8"
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
        viewport={{ margin: "-100px" }}
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
            <ExperienceCard {...job} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
