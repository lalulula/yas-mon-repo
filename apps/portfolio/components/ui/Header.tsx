import type React from 'react';
import { X, Maximize2 } from 'lucide-react';

interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <div className="max-w-7xl mx-auto bg-black/10 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/20 h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)]">
      <div className="flex items-center justify-between p-2 md:p-4 bg-black/20 border-b border-white/10">
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-white/10 rounded">
            <X className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-white/10 rounded">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="h-[calc(100%-2.5rem)] md:h-[calc(100%-3.5rem)]">
        {children}
      </div>
    </div>
  );
}
