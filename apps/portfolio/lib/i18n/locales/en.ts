export default {
  // Hero Section
  hero: {
    name: 'Yunah Kim',
    description:
      'Innovative Front-End Developer with 2+ years of expertise in building responsive, high-performance web applications using React / Next.js. Passionate about merging user-centric design with cutting-edge technology to solve complex problems.',
    download_resume: 'Download Resume',
    education: {
      title: 'Education',
      degree: 'Bachelor of Computer Science',
      school: 'Stony Brook University',
      period: '2018 - 2022',
      focus:
        'Majored in computer science, specialization: Artificial Intelligence and Data Science',
      academic_recognition:
        "Dean's List : Full 8 semesters, Academic scholarship : 2022 Fall-2024 Spring"
    }
  },

  // About Section
  about: {
    title: 'About Me',
    description_1:
      "I'm a Frontend Developer with over 2 years of hands-on experience, passionate about building intuitive and interactive user experiences. My main focus is on React and Next.js, and I enjoy crafting responsive, accessible, and performant web applications that make a real difference.",
    description_2:
      "I believe that great interfaces come from a deep understanding of users, so I always try to approach development with a UX-first mindset. I'm proactive about collaborating with designers and planners to align design intent with technical feasibility—because I believe communication is key to building great products.",
    description_3:
      "Recently, I've been exploring the intersection of frontend and AI. I'm currently learning LangChain to streamline work processes and create smarter interfaces that reduce manual tasks and boost productivity.",
    description_4:
      "Beyond coding, I'm also keen on improving performance, maintaining clean and scalable code, and staying up-to-date with the latest tools in the modern frontend ecosystem—from state management and component libraries to testing frameworks and build optimization.",
    description_5:
      "If you're looking for someone who's curious, collaborative, and always growing, you're in the right place."
  },

  // Skills Section
  skills: {
    title: 'Skills',
    proficiency: 'Proficiency'
  },

  // Experience Section
  experience: {
    title: 'Experience/Activities',
    click_logo: 'Click on the company logo to view the company website',
    i_esg: {
      description:
        'Refactored existing code to enable 1440 - 1920 view mode.\nImproved legacy PDF download method (Python) to use Puppeteer-based download approach.\nParticipated in Management module development/stabilization/enhancement development.'
    },
    idciti: {
      description:
        'Developed a web application to verify uGPS using indoor GNSS solutions.\n*uGPS: A technology that artificially generates GPS signals in spaces where navigation cannot be used, such as underground parking lots, tunnels, or building interiors, enabling the use of existing navigation services.\nIDFense refactoring\n*IDFense: A solution that tracks drones using cameras trained with drone images through deep learning and neutralizes them using uGPS.'
    },
    ta: {
      description:
        'Assisted professor with 20+ students in "Programming Language Paradigm", "Finite Mathematics Structures", by helping them understand how we can approach a problem and find a solution.'
    }
  },

  // Projects Section
  projects: {
    title: 'Projects',
    portfolio: {
      description:
        'A modern, responsive portfolio built with Next.js and Tailwind CSS',
      detailDescription:
        'A modern, responsive portfolio built with Next.js and Tailwind CSS'
    },
    mgt: {
      description: 'Management module for the i-ESG platform',
      detailDescription: `MGT module is an abbreviation for Management Tool. It provides features to input data through collaboration, visualize it using AI dashboards, and derive insights.
      The dashboard, data management, and KPI features in MGT use components like charts, forms, and tables to make it easy for users to input data.
      MUI is used for design, Redux for state management, React-hook-form for forms, and Recharts for charts.
      Due to the large amount of data being managed, I used debounce, lazy loading, etc. to improve performance.`
    },
    pdf: {
      description: 'A PDF download feature for the i-ESG platform',
      detailDescription: `
      i-ESG used a method of downloading data that is rendered on the screen using python.
      There were several issues with this approach:
      - Does not fully support modern CSS features (Flexbox, Grid, Media Query, etc.)
      - Cannot display JS-based content (charts, React, etc.)
      - Lack of layout consistency: Many cases where the browser and the actual output differ
      - Font/image loading issues
      - Difficulty in precise layout control
      To address these issues, and particularly because the design needed to be very precise for report extraction, I changed the approach to generate PDFs by controlling the browser using puppeteer.
      By introducing this, I was able to create consistent and precise results through a virtual browser, and also easily extract dynamic data.
      `
    },
    mkt_data_reasearch_assistant: {
      description:
        'Python code to extract company information from a excel sheet withh empty data.',
      detailDescription: `
      mkt_data_reasearch_assistant came from the struggle to fill in the empty data in a excel sheet, 
      which has thousands of empty companny data.
      I used python(excel handling library - e.g. openpyxl) to first extrtact the company data and the data we need to extract from the excel sheet,
      then created a search agent which uses Tavily and Perplexity as a tooll to extract the data. 
      Then I used a llm(using AzureOpenAI) to format the extracted data, and write the formatted data to the excel sheet.
      `
    },
    travel_assistant: {
      description: 'Web application to help users plan their travel.',
      detailDescription: `
      Travel assistant is a web application that allows users to plan their travel, made with chainlit(streamlit - both available)
      I uses llm(gpt-4o), and Tavily based agent that helps user plan travel based on preferences.  
      `
    },
    ai_prompts: {
      description:
        'A web application that allows users to create and share AI prompts',
      detailDescription: `A web application built with NextJS, allowing users to create and share AI prompts. 
      Google SSO is used to allow users to log in easily. Tailwind-css is used for design, Lottie for animation, and vercel is deployed.`
    },
    bite_print: {
      description: 'Application for food waste reduction.',
      detailDescription: `
      BitePrint was born from the vision to fight food waste and maintain sustainability.
      By enabling users to scan receipts using OCR(tesseract) technology, and suggest food donations, we bridge the gap between surplus and need. 
      It's about transforming grocery shopping into an act of community support and sustainability, one scan at a time.`
    },
    map_book: {
      description: 'Application for map enthusiasts.',
      detailDescription: `This app, built on React, allows users to add data to a map and share it with others. 
      It uses MapboxGL API for rendering maps.`
    },
    langchain_goole_tools: {
      description: 'Tool practice code for langchain',
      detailDescription:
        'This is a practice code for langchain. Use langchain google calendar tool and google mail tool, for creating a streamline and sismplifying work.'
    },
    flavor_file: {
      description: 'Mobile application that allows users to save recipes.',
      detailDescription: `FlavorFile is a mobile application that allows users to save recipes. 
      It is built with Flutter.  For convinent use, users may use their google account to create an account(Google SSO).
      It has features where user upload photos of their recipe, the steps to produce it, 
      and additionaly using TastyAPI, we provide new recipe allowing with a video to make it.`
    }
  }
};
