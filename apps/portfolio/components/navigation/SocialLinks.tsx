"use client";

import { socialLinks } from "@/src/dto/constants/social-links.const";

export function SocialLinks() {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="space-y-2">
      {socialLinks.map((link) => (
        <button
          key={link.label}
          onClick={() => handleLinkClick(link.url)}
          className="w-full flex items-center gap-3 px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-left"
        >
          <link.icon className="w-4 h-4 flex-shrink-0" />
          <span>{link.label}</span>
        </button>
      ))}
    </nav>
  );
}
