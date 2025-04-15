export interface NavigationItem {
  text: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  keywords: string[];
  theme: string;
}

export interface TimelineProps {
  title: string;
  subtitle: string;
  description?: string;
}