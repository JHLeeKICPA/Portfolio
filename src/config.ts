export const siteConfig = {
  name: "이재현",
  title: "",
  description: "Portfolio website of Jaehyun Lee",
  accentColor: "#1d4ed8",
  social: {
    email: "wogus3575@naver.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    blog: "https://yourblog.com",
    github: "https://github.com/JaheyunLee",
  },
  aboutMe:
    "한국공인회계사로서 회계감사, 내부회계, 가치평가, 연결PA, 원가분석, 국가회계 등 다양한 업무를 수행하였습니다. \n또한 생산성과 AI에 관심이 많으며 관련하여 IT, 데이터사이언스 분야에 대해 꾸준히 공부하고 있습니다.\n저는 언제나 더 나은 방법을 찾는 사람이며, 수동적 반복 보다는 능동적 탐색으로 새로운 가치를 제시하는 전문가를 목표로 합니다.",
  skills: ["KICPA", "AI", "Productivity", "IT", "Data Science"],
  projects: [
    {
      name: "Langchain을 활용한 회계기준서 RAG 프로젝트",
      description:
        "Langchain을 활용하여 회계기준, 질의회신, 실무사례 등을 학습하여 RAG 기반의 AI agent 구축",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["Langchain", "Python", "RAG"],
    },
    {
      name: "Obsidian 활용 디지털가든 구축 프로젝트",
      description:
        "Obsidian으로 세컨드브레인을 구축한 후 이를 웹에 배포하여 디지털가든 구축",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Obsidian", "Backend", "AWS"],
    },
    {
      name: "n8n을 활용한 업무자동화 프로젝트",
      description:
        "n8n을 활용하여 업무에 적용할 수 있는 다양한 자동화 프로젝트 수행",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["n8n", "Python", "AWS"],
    },
  ],
  experience: [
    {
      company: "Audit&Assurance",
      title: "안경회계법인",
      dateRange: "2019 ~ 2021",
      bullets: [
      ],
    },
    {
      company: "Audit&Assurance",
      title: "안진회계법인",
      dateRange: "2021 ~ 2023",
      bullets: [
      ],
    },
    {
      company: "분석평가단, 2작전사령부",
      title: "육군 재정장교",
      dateRange: "2023 ~ 2026 (現)",
      bullets: [
      ],
    },
    {
      company: "원가관리 자문위원",
      title: "방위사업청",
      dateRange: "2025 ~ 2027 (現)",
      bullets: [
      ],
    }
  ],
  education: [
    { 
      degree: "경북대학교 글로벌인재학부",
      dateRange: "2014 ~ 2019",
      achievements: [
        "4년 전액 장학생",
      ],
    },
    {
      degree: "한국방송통신대학교 AI학과",
      dateRange: "2023 ~ 2025",
      achievements: [
      ],
    },
    {
      degree: "경북대학교 데이터사이언스 대학원",
      dateRange: "2025 ~ 2026 (現)",
      achievements: [
        "졸업논문 : 분류모델 기반의 데이터감사(예정)"
      ],
    }
  ],
  workExperience: [
    {
      category: "회계감사",
      description: "상장사 및 비상장사 회계감사 업무",
      items: [
        {
          role: "In-Charge",
          clients: ["㈜LX홀딩스", "두산큐벡스㈜", "버슘머트리얼즈코리아㈜ 및 계열사", "기타"]
        },
        {
          role: "Staff",
          clients: ["㈜LG", "㈜LG씨엔에스", "㈜트리노테크놀로지", "㈜대유에이텍", "기타"]
        }
      ]
    },
    {
      category: "내부회계",
      description: "내부회계관리제도 구축 및 고도화",
      items: [
        {
          role: "In-Charge",
          clients: ["㈜DH오토웨어", "사조동아원㈜", "㈜SK E&S(연결프로세스)", "기타"]
        },
        {
          role: "Staff",
          clients: ["㈜시너지이노베이션", "㈜나스미디어", "㈜플레이디", "기타"]
        }
      ]
    },
    {
      category: "평가, PA",
      description: "기업가치평가, 연결 PA, Conversion",
      items: [
        {
          role: "재무보고 목적 공정가치 평가 및 손상검사",
          clients: ["㈜SBS", "㈜라인게임즈", "밸류그로스㈜", "㈜오피스디포코리아", "기타"],
          note: "안진회계법인 감사본부 Valuation Specialist 팀 2년 경력"
        },
        {
          role: "연결 PA, Conversion",
          clients: ["㈜홈센타홀딩스", "㈜보광산업"],
        }
      ]
    },
    {
      category: "원가분석",
      description: "원가 및 비용 분석 보고서 작성",
      items: [
        {
          role: "방산물자 원가 분석",
          clients: ["KAI", "한화에어로스페이스", "한화시스템", "현대로템", "풍산"]
        },
        {
          role: "정책 보고서 작성",
          clients: ["육군 계급체계 다단계/정년연장에 따른 비용 추계분석", "대구시 군부대 이전에 따른 기부대양여 자산 적정가치 평가", "소형무장헬기(LAH) 창정비 방안 분석"]
        }
      ]
    }
  ],
};
