export interface SkillCategory {
  title: string;
  icon: string; // Icon name from lucide-react
  skills: string[];
}

export interface TechnicalProficiency {
  name: string;
  percentage: number;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend / Web",
    icon: "Monitor",
    skills: ["React", "Next.js", "Remix", "TypeScript", "SPA", "SSR", "React Server Components", "MobX", "Redux Toolkit", "Recoil", "Zustand", "React Query", "Tailwind CSS", "Framer Motion", "WCAG 2.1 AA", "PWA"]
  },
  {
    title: "Backend / AI",
    icon: "Server",
    skills: ["Node.js", "Express.js", "NestJS", "Serverless (AWS Lambda)", "Python", "Flask", "FastAPI", "Django", "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "GraphQL", "WebSockets", "REST APIs"]
  },
  {
    title: "Database & Storage",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Elasticsearch", "Prisma", "TypeORM", "Sequelize"]
  },
  {
    title: "DevOps / Cloud",
    icon: "Cloud",
    skills: ["Docker", "Docker Compose", "Kubernetes", "AWS", "GCP", "Azure", "GitHub Actions", "GitLab CI", "Vercel", "Sentry", "LogRocket", "Grafana"]
  },
  {
    title: "Data Visualization",
    icon: "Layers",
    skills: ["D3.js", "Chart.js", "Highcharts", "Three.js", "Mapbox", "Leaflet", "React Flow", "Pandas", "Matplotlib", "Seaborn", "Google Analytics / GA4", "Amplitude", "Mixpanel"]
  },
  {
    title: "Testing & Security",
    icon: "Shield",
    skills: ["Jest", "React Testing Library", "Cypress", "Playwright", "ESLint", "Prettier", "TypeScript strict mode", "JWT", "OAuth2", "OWASP", "CSRF/XSS Prevention", "HTTPS / CORS"]
  }
];

export const technicalProficiency: TechnicalProficiency[] = [
  { name: "Frontend Development", percentage: 97 },
  { name: "Backend & AI/ML", percentage: 92 },
  { name: "Database & DevOps", percentage: 88 },
  { name: "Testing & Security", percentage: 90 }
];
