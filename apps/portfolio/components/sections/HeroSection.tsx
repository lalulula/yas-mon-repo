"use client";

import { Button } from '@workspace/ui/components/button';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const { t: translate } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



  return (mounted &&
    <div id="top">
      <div className="transparent-card p-4 md:p-8 text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-2xl text-portfolio-gray-default md:text-3xl font-medium mb-3 md:mb-4">
              {translate('hero.name')}
            </h1>
            <p className="text-xs md:text-sm text-portfolio-gray-default-content leading-relaxed mb-6 max-w-2xl">
              {translate('hero.description')}
            </p>
            <Button className="bg-[oklch(95%_0.03_95)] hover:bg-[oklch(85%_0.03_85)] text-[oklch(50%_0.05_85)]">
              <Download className="mr-2" />
              {translate('hero.download_resume')}
            </Button>
          </div>

          <div className="w-88 h-72 bg-white/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-white/20 rounded-sm mx-auto mb-4">
                Profile image here
              </div>
              <div className="space-y-2">
                <div className="px-2 py-2 bg-white/20 rounded text-sm font-medium">
                  Yunah Kim
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[200px] md:min-h-[200px] mt-5">
        <h2 className="text-2xl md:text-3xl text-portfolio-gray-default font-medium mb-4 md:mb-6">
          {translate('hero.education.title')}
        </h2>
        <div className="transparent-card text-portfolio-gray-default p-4 md:p-6">
          <div className="space-y-4 md:space-y-6">
            <div className="border-l-2 md:border-l-4 border-[oklch(42.26%_0.066_269.06)] pl-3 md:pl-6">
              <h3 className="text-base md:text-lg font-semibold">
                {translate('hero.education.degree')}
              </h3>
              <p className="text-portfolio-gray-default text-xs md:text-sm">
                {`${translate('hero.education.school')} (${translate('hero.education.period')})`}
              </p>
              <p className="mt-2 text-xs md:text-sm">
                {translate('hero.education.focus')}
              </p>
              <p className="mt-1 text-xs md:text-xs">
                {translate('hero.education.academic_recognition')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


