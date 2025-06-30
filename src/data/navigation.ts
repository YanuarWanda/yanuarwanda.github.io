import type { NavigationItem } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    text: 'About',
    href: '/about',
    toNewTab: false,
  },
  {
    text: "Blogs",
    href: "https://yanuarwanda.medium.com/",
    toNewTab: true
  },
  {
    text: 'Projects',
    href: '/projects',
    toNewTab: false,
  },
  {
    text: 'Resume',
    href: '/documents/resume-v2.pdf',
    toNewTab: true,
  }
];
