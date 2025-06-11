interface AboutSectionProps {
  id: string;
}

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 min-h-[300px] md:min-h-[400px]">
      <h2 className="text-2xl md:text-3xl font-bold  text-portfolio-gray-text mb-4 md:mb-6">
        About Me
      </h2>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6  text-portfolio-gray-text">
        <p className="text-base md:text-lg leading-relaxed">
          I am a passionate Front-End Developer with extensive experience in
          modern web technologies. I love creating beautiful, responsive, and
          user-friendly applications that solve real-world problems. My journey
          in web development started 4+ years ago, and I've been constantly
          learning and evolving with the industry.
        </p>
        <br />
        <p className="text-base md:text-lg leading-relaxed">
          I specialize in React, Angular, and Vue.js, and I'm always excited to
          work on challenging projects that push the boundaries of what's
          possible on the web.
        </p>
      </div>
    </section>
  );
}
