'use client';

import { useState } from 'react';
import { Projects } from './projects';
import { WorkExperience } from './work-experience';

type TabType = 'work' | 'projects';

export function WorkProjectsToggle() {
  const [activeTab, setActiveTab] = useState<TabType>('work');

  return (
    <div className="space-y-8">
      {/* Toggle Tabs */}
      <div className="flex items-center gap-1 p-1 bg-muted/30 rounded-lg w-fit">
        <button
          type="button"
          onClick={() => setActiveTab('work')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
            activeTab === 'work'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Work Experience
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
            activeTab === 'projects'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Projects
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {activeTab === 'work' ? <WorkExperience /> : <Projects />}
      </div>
    </div>
  );
}
