export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Paytient",
    location: "Michigan, USA",
    period: "December 2024 – Present",
    achievements: [
      "Built AWS Lambda functions and serverless workflows, improving platform scalability to handle 35% more traffic during peak times.",
      "Created RESTful API endpoints with strong security, reducing risks by 60% and protecting sensitive data for over 50,000 users.",
      "Worked with product and marketing teams to redesign the mobile onboarding process, increasing user retention and improving experience by 40%.",
      "Led migration to serverless architecture using AWS Lambda, cutting server setup time by 75% and increasing system uptime from 99.95% to 99.99%.",
      "Improved database queries and backend algorithms, reducing API response time by 40% and making the app faster and more responsive.",
      "Set up monitoring and logging with AWS CloudWatch, helping to identify and fix seven major performance issues and improving system stability."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Spatial Front, Inc.",
    location: "Washington, DC",
    period: "June 2022 – November 2024",
    achievements: [
      "Designed reliable backend services using Node.js and improved Python scripts, supporting three key data-driven applications and increasing data ingestion by 30%.",
      "Managed migration of legacy APIs to a microservices architecture with Docker and Kubernetes, increasing data throughput by 70% and reducing average API latency by 40%.",
      "Moved legacy backend services to AWS Elastic Beanstalk, raising application uptime to 99.99% and cutting server costs by 20% through better resource use.",
      "Improved system stability by adding centralized logging, monitoring dashboards, and automated alerts, reducing average response time by 75 ms.",
      "Refactored backend code to lower technical debt and make the system easier to maintain in the long term."
    ]
  },
  {
    title: "Software Developer",
    company: "Trout Unlimited",
    location: "Arlington, VA",
    period: "January 2018 – May 2022",
    achievements: [
      "Scaled a reusable component library and enforced WCAG 2.1 Level AA accessibility compliance, growing the library to 120+ components and ensuring consistency across the application.",
      "Established Jest unit testing with ~80% code coverage, improving code quality and reducing testing time by 45%.",
      "Modernized a legacy codebase by transitioning from AngularJS to React, improving performance and maintainability and reducing lines of code by 34%.",
      "Spearheaded accessibility initiatives by conducting audits and implementing fixes, reducing accessibility issues by 65% and ensuring compliance with accessibility standards.",
      "Designed and implemented a staff directory UI with advanced search and filtering for 250+ users, enhancing user experience.",
      "Optimized website performance, reducing page load times by 41% through code splitting and image optimization techniques."
    ]
  }
];
