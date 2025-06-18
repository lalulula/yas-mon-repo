interface AboutSectionProps {
  id: string;
}

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 min-h-[100px] md:min-h-[200px]">
      <h2 className="text-2xl md:text-3xl text-portfolio-gray-default font-medium mb-4 md:mb-6">
        About Me
      </h2>
      <div className="transparent-card p-4 md:p-6  text-portfolio-gray-default-content">
        <p className=" text-xs  md:text-sm  leading-relaxed">
          I am a passionate Front-End Developer with extensive experience in
          modern web technologies. I love creating beautiful, responsive, and
          user-friendly applications that solve real-world problems. My journey
          in web development started 4+ years ago, and I've been constantly
          learning and evolving with the industry.
        </p>
        <br />
        <p className=" text-xs  md:text-sm  leading-relaxed">
          I specialize in React/Next.js, and I'm always excited to
          work on challenging projects that push the boundaries of what's
          possible on the web.
        </p>
      </div>
    </section>
  );
}
