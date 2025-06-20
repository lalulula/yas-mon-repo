import { NavigationMenu } from "../navigation/NavigationMenu";
import { SocialLinks } from "../navigation/SocialLinks";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ChevronLeft } from "lucide-react";

interface AppSidebarProps {
  onNavItemClick?: () => void;
  onCloseMenu?: () => void;
  isMobile?: boolean;
}

export function AppSidebar({ onNavItemClick, onCloseMenu, isMobile }: AppSidebarProps) {
  const scrollToTop = () => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
      onNavItemClick?.();
    }
  };

  return (
    <aside className="w-64 bg-black/20 backdrop-blur-sm border-r border-white/10 flex-shrink-0 h-full relative">
      {/* Mobile Close Button */}
      {isMobile && onCloseMenu && (
        <button
          type="button"
          onClick={onCloseMenu}
          className="absolute top-4 right-4 z-50 p-2 bg-black/20 text-white hover:bg-black/30 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="sr-only">Close menu</span>
        </button>
      )}

      <div className="p-6 h-full flex flex-col overflow-y-auto">
        <div className="mb-6">
          <LanguageToggle />
        </div>

        <div className="mb-8">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <h3
            className="text-white/80 text-lg font-medium mb-4 cursor-pointer hover:text-white transition-colors"
            onClick={scrollToTop}
          >
            Menu
          </h3>
          <NavigationMenu onItemClick={onNavItemClick} />
        </div>

        <div>
          <h3 className="text-white/80 text-lg font-medium">Socials</h3>
          <SocialLinks />
        </div>
      </div>
    </aside>
  );
}
