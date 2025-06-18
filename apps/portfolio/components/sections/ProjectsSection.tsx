"use client"

import { motion } from "framer-motion"
import ProjectCard from "../ui/ProjectCard";

interface ProjectsSectionProps {
  id: string;
}

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "React", "Tailwind"],
    githubLink: "https://github.com/your-repo/portfolio-website"
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce solution with payment integration",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/your-repo/portfolio-website"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function ProjectsSection({ id }: ProjectsSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 min-h-[300px] md:min-h-[400px] py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl text-portfolio-gray-default font-medium mb-4 md:mb-6">
          Projects
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        className="transparent-card p-4 md:p-6 text-portfolio-gray-default backdrop-blur-sm border border-white/10 rounded-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
