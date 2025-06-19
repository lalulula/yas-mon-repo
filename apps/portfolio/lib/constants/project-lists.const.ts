import type { Project } from '@/src/dto';

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    technologies: ['Next.js', 'React', 'Tailwind', 'i18n'],
    translationKey: 'portfolio',
    deploymentLink: ''
  },
  {
    title: '[i-ESG]MGT - Management Module',
    technologies: [
      'Next.js ',
      'React',
      'Typescript',
      'RHF',
      'MUI',
      'Redux',
      'i18n',
      'Recharts'
    ],
    translationKey: 'mgt'
  },
  {
    title: '[i-ESG]PDF download',
    technologies: [
      'Next.js ',
      'React',
      'Typescript',
      'Puppeteer',
      'MUI',
      'i18n'
    ],
    translationKey: 'pdf'
  },
  {
    title: 'Marketing Data Research Assistant',
    technologies: ['Python', 'AzureOpenAI', 'TavilyAPI', 'PerplexityAPI'],
    translationKey: 'mkt_data_reasearch_assistant',
    githubLink: 'https://github.com/jisu-park/mkt_data_reasearch_assistant',
    refPath: ''
  },
  {
    title: 'Travel Assistant',
    technologies: [
      'Python',
      'Chainlit',
      'AzureOpenAI',
      'TavilyAPI',
      'PerplexityAPI'
    ],
    translationKey: 'travel_assistant',
    githubLink: 'https://github.com/lalulula/itinerary-assistant',
    refPath: ''
  },
  {
    title: 'AIPrompts',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel', 'SSO', 'MongoDB'],
    translationKey: 'ai_prompts',
    githubLink: 'https://github.com/lalulula/AIPromptsRebuild',
    deploymentLink: 'https://ai-prompts-rebuild.vercel.app/'
  },
  {
    title: 'Map Book',
    technologies: ['React', 'MapboxGL'],
    translationKey: 'map_book',
    githubLink: 'https://github.com/lalulula/MapBook'
  },
  {
    title: 'Bite Print',
    technologies: ['Next.js', 'React', 'MUI', 'Lottie'],
    translationKey: 'bite_print',
    githubLink: 'https://github.com/lalulula/NaengJangGo',
    refPath: 'https://devpost.com/software/biteprint'
  },
  {
    title: 'FlavorFile',
    technologies: ['Flutter', 'Firebase', 'MongoDB'],
    translationKey: 'flavor_file',
    githubLink: 'https://github.com/lalulula/FlavorFile'
  }
];
