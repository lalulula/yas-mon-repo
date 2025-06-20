import type { Project } from '@/src/dto/interface';

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    technologies: ['Next.js', 'React', 'Tailwind', 'i18n'],
    translationKey: 'portfolio'
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
    refLink:
      'https://drive.google.com/file/d/1_WAnestCTxP1zlQWwfZ2D5pV9EKc7IzR/view?usp=sharing'
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
    refLink:
      'https://drive.google.com/file/d/1I0HrYZSQS7pDPWhj95Nb6JMqJsPoQGlv/view?usp=sharing'
  },
  {
    title: 'AIPrompts',
    technologies: ['Next.js', 'React', 'Tailwind', 'Vercel', 'SSO', 'MongoDB'],
    translationKey: 'ai_prompts',
    githubLink: 'https://github.com/lalulula/AIPromptsRebuild',
    refLink: 'https://ai-prompts-rebuild.vercel.app/'
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
    refLink: 'https://devpost.com/software/biteprint'
  },
  {
    title: 'FlavorFile',
    technologies: ['Flutter', 'Firebase', 'MongoDB'],
    translationKey: 'flavor_file',
    githubLink: 'https://github.com/lalulula/FlavorFile',
    refLink:
      'https://drive.google.com/file/d/1Ev4Hw1UKZUwwrK-5rMCjwavtqF5tyDGQ/view?usp=drive_link'
  }
];
