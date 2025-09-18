'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  ref: (el: HTMLElement | null) => void;
}

export function HeroSection({ ref }: HeroSectionProps) {
  const currentYear = new Date().getFullYear();
  const [isOtherSkillsExpanded, setIsOtherSkillsExpanded] = useState(false);
  const [isKoreanIntro, setIsKoreanIntro] = useState(false);
  return (
    <header
      id="intro"
      ref={ref}
      className="min-h-screen flex items-center opacity-0"
    >
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2 mb-30">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
              PORTFOLIO / {currentYear}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-balance">
              <br />
              <span className="text-muted-foreground whitespace-nowrap">
                Yunah Kim/김윤아
              </span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsKoreanIntro(false)}
                className={`px-2 py-1 text-xs font-mono transition-colors duration-200 ${
                  !isKoreanIntro
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                intro_en
              </button>
              <button
                type="button"
                onClick={() => setIsKoreanIntro(true)}
                className={`px-2 py-1 text-xs font-mono transition-colors duration-200 ${
                  isKoreanIntro
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                intro_kr
              </button>
            </div>

            {/* Introduction Text */}
            {!isKoreanIntro ? (
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
                Frontend Developer enhancing digital experiences through
                <span className="text-foreground"> collaboration</span>,
                <span className="text-foreground">
                  {' '}
                  thoughtful problem-solving
                </span>
                ,and the smart use of
                <span className="text-foreground"> AI</span>, blending
                <span className="text-foreground"> design</span>,
                <span className="text-foreground"> technology</span>, and
                <span className="text-foreground"> user experience</span>.
              </p>
            ) : (
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
                <span className="text-foreground">협업</span>과
                <span className="text-foreground">문제 해결</span>, 그리고{' '}
                <span className="text-foreground">AI</span>를 현명하게 활용하여
                <span className="text-foreground">디자인</span>,
                <span className="text-foreground"> 기술</span>,
                <span className="text-foreground"> 사용자 경험</span>을 아우르는
                더 나은 디지털 경험을 만들어가는 프론트엔드 개발자입니다.
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="whitespace-nowrap">Available for work</span>
              </div>
              <div className="whitespace-nowrap">
                @South Korea (and open for VISA sponsorship)
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0 lg:ml-20">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">
              CURRENTLY
            </div>
            <div className="space-y-2">
              <div className="text-foreground">Frontend Developer</div>
              <div className="text-muted-foreground">@ i-ESG</div>
              <div className="text-xs text-muted-foreground">
                2024 — Present
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
            <div className="flex flex-wrap gap-2">
              {['NextJS', 'TypeScript', 'React'].map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-xs border-border hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setIsOtherSkillsExpanded(!isOtherSkillsExpanded)}
              className="flex items-center gap-2 text-sm text-muted-foreground font-mono hover:text-foreground transition-colors duration-200 group"
            >
              OTHER
              {isOtherSkillsExpanded ? (
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 transition-transform duration-200" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOtherSkillsExpanded
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'Notion',
                  'Jira',
                  'Figma',
                  'Framer Motion',
                  'MUI',
                  'TailwindCSS',
                  'Git',
                  'LangChain',
                  'Dify'
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs border-border hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
