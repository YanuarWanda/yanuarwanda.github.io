import type { SiteConfig, TimelineProps } from '../types';

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
  theme: "dark",
  version: "v0.0.2",
  lastUpdated: "24.06.25"
};

export const experiences: TimelineProps[] = [
  {
    title: "Web Developer",
    subtitle: "Radya Digital • Nov 2021 - Nov 2023",
    description: "Developed and maintained chatbot and e-commerce projects.",
    points: [
      "Optimized e-commerce platform, improving UI/UX design and reducing load time, leading to a better user experience and increased engagement.",
      "Assisted the chatbot customer service team in improving the communication process with customers by creating a queuing system for customer service agents.",
      "Continue to maintain several chatbots from various companies, ensuring that features and customer interactions with chatbots run smoothly on a daily basis.",
      "Tech and languages used: PHP, Laravel, Javascript, C#, .NET"
    ]
  },
  {
    title: "Web Developer (Internship)",
    subtitle: "Radya Digital • Aug 2021 - Nov 2021",
    description: "Developed and maintained chatbot and internal tool projects.",
    points: [
      "Developed a curriculum management system, enhancing efficiency and streamlining the curriculum management process, resulting in improved organization and accessibility.",
      "Assisted the customer service team to improve the communication process with customers for general inquiries and to receive and update the status of complaints regarding products from customers by creating a WhatsApp-based chatbot.",
      "Assisted the sales team in sending promotional campaign messages periodically to thousands of customers and ensuring the message delivery process runs smoothly.",
      "Helped to improve the user experience of a chatbot by revamping the interface of chatbot interactions on the WhatsApp channel from text-based to button-based.",
      "Created and maintained chatbots for big multinational and Indonesian companies, enhancing communication efficiency and customer engagement across diverse sectors.",
      "These chatbots collectively served thousands of users, facilitating seamless interactions and driving positive user experiences.",
      "Tech and languages used: Javascript, C#, .NET"
    ]
  }
]

export const educations: TimelineProps[] = [
  {
    title: "Bachelor of Informatic Engineering",
    subtitle: "UNIKOM Indonesia • 2025"
  }
]

export const skills: string[] = [
  "PHP", "Laravel", "Blade", "Javascript", "Typescript", "React", "Next.js", "C#", ".NET", "REST Api", "Relational Databases", "CI/CD"
]
