'use client';

import { Folder, Shield, Building, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationMenuProps {
  onItemClick?: () => void;
}

const navigationItems = [
  { id: 'about', label: 'About', icon: Folder },
  { id: 'skills', label: 'Skills', icon: Shield },
  { id: 'experience', label: 'Experience', icon: Building },
  { id: 'projects', label: 'Projects', icon: Code }
];

export function NavigationMenu({ onItemClick }: NavigationMenuProps) {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the main content container
      const mainContent = element.closest('main');
      if (mainContent) {
        const elementTop = element.offsetTop - 32; // 32px offset for spacing
        mainContent.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });
      }
    }
    setActiveSection(id);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav className="space-y-2">
      {navigationItems.map((item) => (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
            activeSection === item.id
              ? 'text-sidebar-activated bg-white/10'
              : 'text-sidebar-deactivated hover:text-white hover:bg-white/10'
          }`}
        >
          <item.icon className="w-4 h-4 flex-shrink-0" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
