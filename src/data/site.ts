import type {SiteConfig, TimelineProps} from '../types';

export const SITE_CONFIG: SiteConfig = {
  title: "Yanuar Wanda",
  description: "Personal website of Yanuar Wanda",
  image: "/src/assets/images/profile.jpg",
  url: "https://yanuarwanda.github.io",
  author: "Yanuar Wanda",
  keywords: [
    "Yanuar Wanda",
    "developer",
    "portfolio",
    "projects"
  ],
  theme: "light"
};

export const experiences: TimelineProps[] = [
  {
    title: "Web & Chatbot Developer (Internship)",
    subtitle: "Radya Digital • Aug 2021 - Nov 2021"
  },
  {
    title: "Web Developer",
    subtitle: "Radya Digital • Nov 2021 - Nov 2023"
  }
]

export const educations: TimelineProps[] = [
  {
    title: "Bachelor of Computer Science",
    subtitle: "UNIKOM Indonesia • 2025"
  }
]

export const skills: string[] = [
  "PHP", "Laravel", "Blade", "Javascript", "Typescript", "React", "Next.js", "C#", ".NET", "REST Api", "Relational Databases", "CI/CD"
]
