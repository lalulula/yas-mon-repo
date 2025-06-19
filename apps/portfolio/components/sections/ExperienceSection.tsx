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
    position: "Frontend Developer",
    period: "Apr 2024 - Present",
    logo: "/assets/image/i-esg_logo.png",
    link: "https://i-esg.io/",
    description_en: "Refactored existing code to enable 1440 - 1920 view mode.\nImproved legacy PDF download method (Python) to use Puppeteer-based download approach.\nParticipated in Management module development/stabilization/enhancement development.",
    description_ko: "- 기존 코드를 리팩토링하여 1440 - 1920 뷰모드 가능하게 함.\n - 레거시 pdf다운로드 방식(python)을 puppeteer를 이용한 다운로드 방식으로 개선\n - Management모듈 개발/안정/고도화 개발에 참여. "

  },
  {
    company: "IDCITI",
    position: "Software Engineer",
    period: "Oct 2022 - 2023",
    logo: "/assets/image/idciti_logo.png",
    link: "https://idciti.com/",
    description_en:
      `- Developed a web application to verify uGPS using indoor GNSS solutions.
*uGPS: A technology that artificially generates GPS signals in spaces where navigation cannot be used, such as underground parking lots, tunnels, or building interiors, enabling the use of existing navigation services.\n
- IDFense refactoring  
*IDFense: A solution that tracks drones using cameras trained with drone images through deep learning and neutralizes them using uGPS.`,
    description_ko:
      `- 실내 GNSS 솔루션으로 uGPS를 확인 할 수 있는 웹 애플리케이션을 개발. 
*uGPS : 내비게이션을 이용할 수 없는 지하 주차장이나 터널 건물 내부와 같은 공간에서 GPS신호를 인공적으로 생성햐 기존의 내비게이션 서비스를 이용할 수 있게 도와주는 기술.\n
- IDFense 리팩토링
*IDFense : 딥러닝을 통해 드론의 이미지를 학습시킨 카메라로 드론으르 추적하고, uGPS를 이용하여 이를 무력화시키는 솔루션.`,

  },
  {
    company: "Teaching Assistant",
    position: "Teaching Assistant",
    period: "Mar 2022 - Sep 2022",
    logo: "/assets/image/sbu_logo.png",
    link: "https://www.stonybrook.edu/commcms/registrar/registration/schedules.php",
    description_en: "Assissted professor with 20+ students in “Programming Language Paradigm”,“Finite Mathematics Structures”, by helping them understand how we can approach a problem and find a solution.",
    description_ko: "20명 이상의 학생들에게 “Programming Language Paradigm”,“Finite Mathematics Structures” 과목을 돕고, 문제를 해결하는 방법을 이해하도록 도움."

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
