'use client';

import { useEffect, useState } from 'react';

interface NavigationProps {
  activeSection: string;
}

const sections = [
  { id: 'intro', label: 'Introduction' },
  { id: 'work', label: 'Work Experience' },
  { id: 'thoughts', label: 'Recent Thoughts' },
  { id: 'connect', label: 'Connect' }
];

export function Navigation({ activeSection }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative w-2 h-8 rounded-full transition-all duration-500 ${
              activeSection === section.id
                ? 'bg-foreground'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Navigate to ${section.label}`}
          >
            <span className="absolute left-6 top-1/2 -translate-y-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
