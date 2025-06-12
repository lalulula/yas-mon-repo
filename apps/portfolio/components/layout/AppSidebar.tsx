import { NavigationMenu } from "../navigation/NavigationMenu";
import { SocialLinks } from "../navigation/SocialLinks";

interface AppSidebarProps {
  onNavItemClick?: () => void;
}

export function AppSidebar({ onNavItemClick }: AppSidebarProps) {
  const scrollToTop = () => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
      onNavItemClick?.();
    }
  };

  return (
    <aside className="w-64 bg-black/20 backdrop-blur-sm border-r border-white/10 flex-shrink-0 h-full">
      <div className="p-6 h-full flex flex-col overflow-y-auto">
        <div className="mb-8">
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
