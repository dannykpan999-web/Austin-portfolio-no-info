export interface Project {
  id: number;
  title: string;
  description: string[];
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 11,
    title: "AlphaAI Capital – AI-Powered Trading Platform",
    description: [
      "Designed and built the platform's full feature set—authentication, AI strategy simulation, trading, payments, analytics, and notifications.",
      "Deployed containerized modules for all core services with zero-downtime blue-green deployments via GitHub Actions and AWS.",
      "Implemented a dual-path KYC flow with document scanning, liveness detection, and 2FA using Alpaca APIs.",
      "Integrated Plaid for instant ACH transfers and Stripe for automated subscription billing (freemium → paid).",
      "Used Next.js SSR and WebSockets to achieve sub-200ms live updates and under 1s page loads."
    ],
    tags: ["React", "Node.js", "REST API", "PostgreSQL", "Docker", "Elastic", "Framer"],
    image: "/img/11.jpg",
    liveUrl: "https://www.alphaai.capital/",
    featured: true
  },
  {
    id: 12,
    title: "Yaana Technologies – Cloud BI System for Roaming Analytics",
    description: [
      "Converted the Desktop app to a React + Django web platform.",
      "Built interactive dashboards for deals, traffic, budgets, and financial reports.",
      "Implemented advanced forecasting & telecom charging models in Python.",
      "Created fast data pipelines using Pandas and optimizing performance with Redis caching.",
      "Integrated with the legacy system for a smooth transition and zero downtime."
    ],
    tags: ["React", "Python", "Django", "Pandas", "Oracle/PostgreSQL", "Redis"],
    image: "/img/12.png",
    liveUrl: "https://www.yaanatech.com/",
    featured: true
  },
  {
    id: 1,
    title: "NFT Marketplace – Decentralized Trading Platform",
    description: [
      "Created a decentralized NFT marketplace with features like minting, listing, and bidding.",
      "Implemented wallet authentication, smart contract integration, and custom backend APIs using Node.js.",
      "Eliminated fragmented trading by creating a unified platform",
      "Increased trading volume by 60% through better liquidity management"
    ],
    tags: ["React", "Express.js", "Node.js", "MongoDB", "AWS"],
    image: "/img/01.png",
    featured: true
  },
  {
    id: 2,
    title: "TradeFlare – Crypto Trading Platform",
    description: [
      "Developed a scalable and responsive UI using React and Tailwind CSS, ensuring seamless performance across devices.",
      "Integrated live price updates via WebSockets, allowing users to track crypto fluctuations in real-time.",
      "Improved size prediction accuracy by 80%",
      "Enhanced user experience with interactive customization options"
    ],
    tags: ["JavaScript", "PHP", "Bootstrap", "Ruby on Rails"],
    image: "/img/05.png",
    featured: true
  },
  {
    id: 3,
    title: "Black Market Crypto Platform – Anonymous Blockchain System",
    description: [
      "Built a dark-themed crypto platform focusing on anonymous transactions and decentralized data handling.",
      "Reduced project completion time by 30% with automated workflow optimization",
      "Eliminated tool fragmentation with centralized collaboration features",
      "Improved team communication efficiency by 40%"
    ],
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    image: "/img/03.png",
    featured: true
  },
  {
    id: 4,
    title: "Healthcare Platform – Trusted Doctor Portal",
    description: [
      "Reduced administrative overhead by 60% through process digitization",
      "Improved accuracy by 85% with automated verification systems",
      "Streamlined nomination workflows reducing processing time by 50%",
      "Enhanced transparency and audit trail capabilities"
    ],
    tags: ["React", ".NET", "SQL", "AWS"],
    image: "/img/04.png",
    featured: true
  },
  {
    id: 5,
    title: "Pet Training App – Interactive Platform for Cat Owners",
    description: [
      "Built a training platform for pet owners to follow interactive video guides and monitor progress.",
      "Used Firebase for authentication and content storage, Supabase for real-time data, and Stripe for secure payments. ",
      "Eliminated human error in high-frequency trading operations",
      "Improved profit margins by 25% through optimized trade execution"
    ],
    tags: ["React", "Node.js", "MongoDB", "Redux", "HTML", "React", "JavaScript"],
    image: "/img/02.png",
    featured: true
  },
  {
    id: 6,
    title: "Fashion E-commerce Store – Beautiful & Modern UI",
    description: [
      "Reduced return rates by 30% with virtual try-on system",
      "Increased customer confidence through 3D visualization",
      "Improved size prediction accuracy by 80%",
      "Enhanced user experience with interactive customization options"
    ],
    tags: ["React", "Node.js", "MongoDB"],
    image: "/img/06.png",
    featured: true
  },
  {
    id: 7,
    title: "HealthDiet – AI-Powered Diet & Nutrition SaaS",
    description: [
      "Built an AI-driven diet planning platform with personalized meal recommendations based on user health profiles.",
      "Integrated machine learning models for calorie tracking, macro analysis, and adaptive meal plan generation.",
      "Improved user health goal achievement rates by 65% through personalized AI coaching",
      "Reduced meal planning time by 80% with automated weekly schedule generation"
    ],
    tags: ["React", "Python", "TensorFlow", "Node.js", "PostgreSQL"],
    image: "/img/07.png",
    featured: true
  },
  {
    id: 9,
    title: "MotoX – Online Meeting & Video Conference SaaS",
    description: [
      "Created a scalable video conferencing platform with screen sharing, virtual backgrounds, and breakout rooms.",
      "Built a WebRTC-based architecture with SFU media server for low-latency group calls supporting up to 100 participants.",
      "Achieved 99.9% call uptime with distributed media server infrastructure",
      "Reduced meeting setup time by 60% with one-click instant room creation"
    ],
    tags: ["React", "WebRTC", "Node.js", "Redis", "AWS"],
    image: "/img/09.png",
    featured: true
  },
  {
    id: 10,
    title: "WhatsApp Marketing – Chatbot Automation Platform",
    description: [
      "Designed a WhatsApp marketing automation tool with drag-and-drop chatbot builder and broadcast messaging.",
      "Integrated WhatsApp Business API with CRM systems, enabling automated lead nurturing and customer support flows.",
      "Increased client conversion rates by 55% through targeted automated campaigns",
      "Reduced customer response time by 90% with AI-powered chatbot interactions"
    ],
    tags: ["React", "Node.js", "MongoDB", "WhatsApp API", "OpenAI"],
    image: "/img/10.png",
    featured: true
  }
];
