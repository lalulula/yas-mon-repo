'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutSectionProps {
  id: string;
}

export function AboutSection({ id }: AboutSectionProps) {
  const { t: translate } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <section id={id} className="scroll-mt-8 min-h-[100px] md:min-h-[200px]">
        <h2 className="text-2xl md:text-3xl text-portfolio-gray-default font-medium mb-4 md:mb-6">
          {translate('about.title')}
        </h2>
        <div className="transparent-card p-4 md:p-6  text-portfolio-gray-default">
          <p className=" text-xs  md:text-sm  leading-relaxed">
            {translate('about.description_1')}
          </p>
          <br />
          <p className=" text-xs  md:text-sm  leading-relaxed">
            {translate('about.description_2')}
          </p>
          <br />
          <p className=" text-xs  md:text-sm  leading-relaxed">
            {translate('about.description_3')}
          </p>
          <br />
          <p className=" text-xs  md:text-sm  leading-relaxed">
            {translate('about.description_4')}
          </p>
          <br />
          <p className=" text-xs  md:text-sm  leading-relaxed">
            {translate('about.description_5')}
          </p>
          <br />
        </div>
      </section>
    )
  );
}
