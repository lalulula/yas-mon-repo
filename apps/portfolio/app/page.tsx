import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Page() {
  return (
    <PortfolioLayout>
      <>
        {/*  */}
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <ProjectsSection id="projects" />
      </>
    </PortfolioLayout>
  );
}
