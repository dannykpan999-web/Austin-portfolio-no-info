export interface PersonalInfo {
  name: {
    first: string;
    last: string;
  };
  title: string;
  bio: {
    short: string;
    long: string[];
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin?: string;
  };
  education: {
    degree: string;
    institution: string;
    year: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: {
    first: "Austin",
    last: "Bartlett"
  },
  title: "Professional portfolio showcasing high-performance web applications, AI/ML expertise, and technical leadership in React, TypeScript, Node.js, Python, and cloud technologies",
  bio: {
    short: "",
    long: [
      "I'm a Senior Full-Stack Software Developer with strong experience building scalable, high-performance web and mobile applications. I work across frontend and backend systems, focusing on clean architecture, performance, and long-term maintainability.",
      "On the frontend, I design modular and scalable UI architectures using modern frameworks and TypeScript. I have led large refactors, built reusable component systems, improved rendering performance, reduced bundle size, and implemented WCAG 2.1 accessibility standards.",
      "On the backend, I design REST APIs, implement business logic, and work with relational databases such as PostgreSQL and MySQL. I collaborate closely with backend teams on API contracts, data modeling, and performance optimization. I have experience working with Node.js and Python-based services in production environments.",
      "I follow best practices in testing, code quality, CI/CD, and scalable system design. I am comfortable working in cross-functional teams and taking ownership from architecture design to deployment and monitoring."
    ]
  },
  contact: {
    email: "austinkbartlettwork@gmail.com",
    phone: "(248) 925-2139",
    location: "Royal Oak, Michigan 48067",
    github: "",
    linkedin: "https://linkedin.com/in/austin-bartlett-in/"
  },
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Oakland University",
    year: "2023 – 2025"
  },
};
