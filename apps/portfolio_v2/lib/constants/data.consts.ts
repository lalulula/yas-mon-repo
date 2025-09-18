export const POSTS = [
  {
    title: 'The Future of Web Development',
    excerpt:
      ':How AI and Automation Are Reshaping the Way We Build for the Web',
    readTime: '3 min',
    link: 'https://www.notion.so/Future-of-Web-Development-26a8afb32410805d8008ef519e46391b?source=copy_link'
  },
  {
    title: 'AIX?',
    excerpt: ':무엇이고 어떤것들이 고려되어야하는지?',
    readTime: '3 min',
    link: 'https://www.notion.so/AIX-26a8afb3241080c0b790ecc4763fd8c1?source=copy_link'
  },
  {
    title: 'SAML SSO 구현',
    excerpt:
      ': SAML SSO 간단 정리 + Next.js 목서버 & Keycloak로 테스트한 것에 대한 간단한 정리',
    readTime: '3 min',
    link: 'https://www.notion.so/SAML-SSO-26a8afb32410807bbf96d84394a97304?source=copy_link'
  },
  {
    title: 'Performance First development',
    excerpt:
      ': Why performance should be a first-class citizen in your workflow.',
    readTime: '3 min',
    link: 'https://www.notion.so/Performance-First-development-26a8afb3241080d7beeefaae1aa2c06d?source=copy_link'
  }
];

export const PROJECTS = [
  {
    name: '[i-ESG] MGT - Management Module',
    type: 'Work Project',
    description:
      'Management Tool providing features to input data through collaboration, visualize it using AI dashboards, and derive insights. Implemented performance optimizations including debounce and lazy loading for large datasets.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'RHF',
      'MUI',
      'Redux',
      'i18n',
      'Recharts'
    ],
    link: null,
    githubLink: null
  },
  {
    name: '[i-ESG] PDF Download',
    type: 'Work Project',
    description:
      'Replaced legacy Python-based PDF generation with Puppeteer-based approach to support modern CSS features, JS-based content, and ensure layout consistency. Enables precise report extraction through virtual browser control.',
    tech: ['Next.js', 'React', 'TypeScript', 'Puppeteer', 'MUI', 'i18n'],
    link: null,
    githubLink: null
  },
  {
    name: 'Marketing Data Research Assistant',
    type: 'Personal Project',
    description:
      'Python-based tool to fill empty company data in Excel sheets. Uses Tavily and Perplexity APIs for data extraction, Azure OpenAI for formatting, and openpyxl for Excel manipulation.',
    tech: ['Python', 'AzureOpenAI', 'TavilyAPI', 'PerplexityAPI'],
    link: 'https://drive.google.com/file/d/1_WAnestCTxP1zlQWwfZ2D5pV9EKc7IzR/view?usp=sharing',
    githubLink: null
  },
  {
    name: 'Travel Assistant',
    type: 'Personal Project',
    description:
      'Web application for travel planning built with Chainlit. Uses GPT-4o and Tavily-based agent to help users plan travel based on preferences.',
    tech: ['Python', 'Chainlit', 'AzureOpenAI', 'TavilyAPI', 'PerplexityAPI'],
    link: 'https://github.com/lalulula/itinerary-assistant',
    githubLink: 'https://github.com/lalulula/itinerary-assistant'
  },
  {
    name: 'AIPrompts',
    type: 'Personal Project',
    description:
      'Web application for creating and sharing AI prompts. Features Google SSO, Tailwind CSS design, Lottie animations, and MongoDB integration. Deployed on Vercel.',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel', 'SSO', 'MongoDB'],
    link: 'https://ai-prompts-rebuild.vercel.app/',
    githubLink: 'https://github.com/lalulula/AIPromptsRebuild'
  },

  {
    name: 'Bite Print',
    type: 'Personal Project',
    description:
      'Sustainability-focused app to fight food waste. Uses OCR (Tesseract) technology to scan receipts and suggest food donations, bridging the gap between surplus and need.',
    tech: ['Next.js', 'React', 'MUI', 'Lottie'],
    link: 'https://devpost.com/software/biteprint',
    githubLink: 'https://github.com/lalulula/NaengJangGo'
  },
  {
    name: 'FlavorFile',
    type: 'Personal Project',
    description:
      'Mobile recipe management app built with Flutter. Features Google SSO, photo uploads, recipe steps, and integration with TastyAPI for new recipes with instructional videos.',
    tech: ['Flutter', 'Firebase', 'MongoDB'],
    link: 'https://drive.google.com/file/d/1Ev4Hw1UKZUwwrK-5rMCjwavtqF5tyDGQ/view',
    githubLink: 'https://github.com/lalulula/FlavorFile'
  },
  {
    name: 'MindBloom.ai',
    type: 'Hackathon Project',
    description:
      'AI-powered mental wellness tracker that uses NLP to analyze user mental health based on text input. Features fine-tuned BERT model for sentiment analysis and ChatGPT API for personalized recommendations to improve mental health.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Python',
      'TensorFlow',
      'BERT',
      'ChatGPT API',
      'Material-UI',
      'Redux'
    ],
    link: 'https://devpost.com/software/mindbloom-ai',
    githubLink: null
  },
  {
    name: 'Portfolio Website',
    type: 'Personal Project',
    description:
      'A modern, responsive portfolio built with Next.js, shadcn Tailwind CSS. Features internationalization support and optimized performance.',
    tech: ['Next.js', 'React', 'Tailwind', 'i18n'],
    link: null,
    githubLink: null
  },
  {
    name: 'Map Book',
    type: 'Personal Project',
    description:
      'React application allowing users to add data to maps and share with others. Built with MapboxGL API for map rendering and data visualization.',
    tech: ['React', 'MapboxGL'],
    link: null,
    githubLink: null
  }
];

export const EXPERIENCES = [
  {
    year: '2024.04-Present',
    role: 'Frontend Engineer',
    company: 'i-ESG',
    description:
      'Refactored existing code to enable 1440-1920 view mode. Improved legacy PDF download method (Python) to use Puppeteer-based download approach. Participated in Management module development, stabilization, and enhancement.',
    tech: ['Next.js', 'TypeScript', 'Python', 'Puppeteer']
  },
  {
    year: '2022.10-2023.03',
    role: 'Software Engineer',
    company: 'IDCITI',
    description:
      'Developed a web application to verify uGPS using indoor GNSS solutions. Refactored IDFense, a solution that tracks drones using cameras trained with drone images through deep learning and neutralizes them using uGPS.',
    tech: ['React', 'Node.js', 'Deep Learning', 'GNSS', 'uGPS']
  }
];
