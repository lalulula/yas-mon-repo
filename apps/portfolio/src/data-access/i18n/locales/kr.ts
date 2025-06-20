export default {
  sidebar: {
    language: '언어'
  },
  // Hero Section
  hero: {
    name: '김윤아',
    description:
      'React / Next.js를 활용한 반응형, 고성능 웹 애플리케이션 개발에 2년 이상의 전문성을 보유한 혁신적인 프론트엔드 개발자입니다. 사용자 중심 디자인과 최신 기술을 융합하여 복잡한 문제를 해결하는 데 열정을 가지고 있습니다.',
    download_resume: '이력서 다운로드',
    education: {
      title: '학력',
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
    title: '소개',
    description_1:
      '저는 2년 이상의 실무 경험을 가진 프론트엔드 개발자로, 사용자 경험을 개선하고 상호작용을 증진시키는 것을 열정적으로 추구합니다. 저의 주요 관심사는 React와 Next.js이며, 반응형, 접근성, 성능을 모두 갖춘 웹 애플리케이션을 만드는 것을 즐깁니다.',
    description_2:
      '저는 훌륭한 인터페이스는 사용자에 대한 깊은 이해에서 온다고 믿기 때문에, 항상 UX를 우선시하는 마인드셋으로 개발에 접근합니다. 디자이너와 기획자와의 협업을 적극적으로 추구하여 디자인 의도와 기술적 실현 가능성을 일치시키려 노력합니다. 이는 훌륭한 제품을 만드는 데 있어 소통이 핵심이라고 믿기 때문입니다.',
    description_3:
      '최근에는 프론트엔드와 AI의 교차점을 탐구하고 있습니다. 현재는 LangChain을 학습하여 업무 프로세스를 효율화하고, 수동 작업을 줄이고 생산성을 높이는 더 스마트한 인터페이스를 만들고 있습니다.',
    description_4:
      '코딩 외에도 성능 개선, 깨끗하고 확장 가능한 코드 유지, 그리고 최신 프론트엔드 생태계의 도구들에 대한 지속적인 학습에 관심이 있습니다. 이는 상태 관리와 컴포넌트 라이브러리부터 테스트 프레임워크와 빌드 최적화까지 포괄합니다.',
    description_5:
      '호기심 많고, 협업을 즐기며, 지속적으로 성장하는 사람을 찾고 계시다면, 바로 여기 있습니다.'
  },

  // Skills Section
  skills: {
    title: '기술',
    proficiency: 'Proficiency',
    mobile_helper_text: '카드를 터치하여 자세히 보기'
  },

  // Experience Section
  experience: {
    title: '경력/활동',
    click_logo: '회사 로고를 클릭하여 회사 웹사이트를 확인하세요',
    i_esg: {
      description:
        '- 기존 코드를 리팩토링하여 1440 - 1920 뷰모드 가능하게 함.\n - 레거시 pdf다운로드 방식(python)을 puppeteer를 이용한 다운로드 방식으로 개선\n - Management모듈 개발/안정/고도화 개발에 참여.'
    },
    idciti: {
      description:
        '- 실내 GNSS 솔루션으로 uGPS를 확인 할 수 있는 웹 애플리케이션을 개발.\n*uGPS : 내비게이션을 이용할 수 없는 지하 주차장이나 터널 건물 내부와 같은 공간에서 GPS신호를 인공적으로 생성햐 기존의 내비게이션 서비스를 이용할 수 있게 도와주는 기술.\n- IDFense 리팩토링\n*IDFense : 딥러닝을 통해 드론의 이미지를 학습시킨 카메라로 드론으르 추적하고, uGPS를 이용하여 이를 무력화시키는 솔루션.'
    },
    ta: {
      description:
        '20명 이상의 학생들에게 "Programming Language Paradigm", "Finite Mathematics Structures" 과목을 돕고, 문제를 해결하는 방법을 이해하도록 도움.'
    }
  },

  // Projects Section
  projects: {
    title: '프로젝트',
    github: 'GitHub 보기',
    demo: '데모 확인',
    mobile_helper_text: '카드를 터치하여 자세히 보기',
    portfolio: {
      description: 'Next.js와 Tailwind CSS로 구축된 모던하고 반응형 포트폴리오',
      detailDescription:
        'Next.js와 Tailwind CSS로 구축된 모던하고 반응형 포트폴리오'
    },
    mgt: {
      description: 'i-ESG 플랫폼을 위한 관리 모듈',
      detailDescription: `MGT모듈은 매니지먼트툴의 약자로 협업을 통해 데이터를 입력하고, AI 대시보드를 활용해 이를 시각화하여 인사이트를 도출할 수 있는 기능을 제공합니다.
      MGT가 제공하는 대시보드, 데이터관리, KPI 기능에는, 차트, 폼, 테이블과 같은 컴포넌트를 사용하여 사용자가 쉽게 데이터를 입력할 수 있도록 돕습니다.
      MUI를 이용하여 디자인, Redux를 이용하여 상태 관리, React-hook-form을 이용하여 폼을 구현하였고, Recharts를 사용해 차트들을 제공하였습니다.
      많은 데이터가 관리되어양 하다보니, debounce, lazy loading, 등의 방식을 사용해 성능을 개선하였습니다. `
    },
    pdf: {
      description: 'i-ESG 플랫폼을 위한 PDF 다운로드 기능',
      detailDescription: `
      i-ESG는 기존에 python을 이용하여 화면에 렌더링되는 데이터를 다운로드 하는 방식을 사용하였습니다.
      이에는 몇가지 문제점이 있었습니다
      - 최신 CSS 기능(Flexbox, Grid, Media Query 등)을 완벽히 지원하지 않음
      - 동적으로 렌더링되는 JS 기반 콘텐츠(차트, React 등) 표시 불가
      - 레이아웃 일관성 부족: 브라우저와 실제 출력물이 달라지는 경우 많음
      - 폰트/이미지 로딩 이슈
      - 정밀한 레이아웃 제어 어려움
      이를 해결하기 위해, 그리고 특히나 보고서 추출을 위한 디자인이 세밀해야 했기 때문에, puppeteer을 이용해 브라우저를 제어하여 pdf를 생성할 수 있는 방식으로 변경했습니다.
      이를 도입하여, 가상브라우저를 통해 일관적이고 세밀한 결과물을 생성 할 수 있게됐을 뿐더러, 더 나아가 데이터 동적인 데이터도 손쉽게 추출할 수 있게 되었습니다.
       `
    },
    mkt_data_reasearch_assistant: {
      description: '엑셀 시트에서 회사 정보를 추출하는 Python 코드',
      detailDescription: `
      mkt_data_reasearch_assistant는 엑셀 시트에서 빈 데이터를 채우는 것에 대한 문제에서 탄생했습니다.
      이 문제는 수천개의 빈 회사 데이터가 있는 엑셀 시트에서 발생했습니다.
      이를 해결하기 위해, 먼저 회사 데이터와 추출해야 하는 데이터를 추출하기 위해 python(excel 처리 라이브러리 - e.g. openpyxl)을 사용했습니다.
      그리고 이를 위해, Tavily와 Perplexity를 통해 데이터를 추출하는 검색 에이전트를 만들었습니다.
      그리고 이를 포맷팅하기 위해, AzureOpenAI를 사용하여 데이터를 포맷팅하고, 이를 엑셀 시트에 쓰기 위해 openpyxl을 사용했습니다.
      `
    },
    travel_assistant: {
      description: '여행 계획을 돕는 웹 애플리케이션',
      detailDescription: `
      Travel assistant는 사용자가 여행을 계획할 수 있도록 돕는 웹 애플리케이션으로, chainlit(streamlit - 둘 다 사용 가능)을 사용하여 만들었습니다.
      llm(gpt-4o)와 Tavily 기반 에이전트를 사용하여 사용자가 선호도에 따라 여행을 계획할 수 있도록 돕습니다.  
      `
    },
    ai_prompts: {
      description:
        '사용자가 AI 프롬프트를 생성하고 공유할 수 있는 웹 애플리케이션',
      detailDescription: `NextJS기반으로 생성된 웹 애플리케이션으로, 사용자들이 자신의 프롬프트를 생성하고 공유할 수 있습니다. 
      구글SSO를 통해 사용자들이 편리하게 로그인 할 수 있습니다. tailwind-css를 이용하여 디자인, Lottie로 애니메이션, vercel에 배포하였습니다.`
    },
    bite_print: {
      description: '음식 낭비 줄이기를 위한 애플리케이션',
      detailDescription: `
      BitePrint는 음식 낭비를 줄이고 지속 가능성을 유지하기 위해 탄생했습니다.
      사용자가 OCR(tesseract) 기술을 사용하여 영수증을 스캔하고, 음식 기부를 제안하여 잉여와 필요 사이의 격차를 브릿지합니다. 
      이는 음식을 구매하는 것을 커뮤니티 지지와 지속 가능성의 행동으로 변환하는 것에 대한 것입니다, 한 번의 스캔으로.`
    },
    map_book: {
      description: '지도 커뮤니티를 위한 애플리케이션',
      detailDescription: `이 앱은 React로 만들어졌으며, 사용자들이 지도에 데이터를 추가하고 다른 사람들과 공유할 수 있습니다. 
      이는 MapboxGL API를 사용하여 지도를 렌더링합니다.`
    },
    langchain_goole_tools: {
      description: 'langchain 툴 연습 코드',
      detailDescription:
        '이 코드는 langchain의 툴을 연습하기 위한 코드입니다. langchain google calendar 툴과 google mail 툴을 사용하여 작업을 단순화합니다.'
    },
    flavor_file: {
      description: '레시피를 저장할 수 있는 모바일 애플리케이션',
      detailDescription: `FlavorFile은 사용자들이 레시피를 저장할 수 있는 모바일 애플리케이션입니다. 
      Flutter로 만들어졌으며, 사용자들이 자신의 레시피를 업로드하고, 이를 통해 새로운 레시피를 제공할 수 있습니다.
      TastyAPI를 사용하여 새로운 레시피를 제공합니다.`
    }
  }
};
