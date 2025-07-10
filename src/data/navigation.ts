import type { NavigationItem } from "@/types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    text: {
      en: "About",
      id: "Tentang",
    },
    href: "/about",
    toNewTab: false,
  },
  {
    text: {
      en: "Blogs",
      id: "Artikel",
    },
    href: "https://yanuarwanda.medium.com/",
    toNewTab: true,
  },
  {
    text: {
      en: "Projects",
      id: "Proyek",
    },
    href: "/projects",
    toNewTab: false,
  },
  {
    text: {
      en: "Resume",
      id: "CV",
    },
    href: "/documents/resume-v2.pdf",
    toNewTab: true,
  },
];
