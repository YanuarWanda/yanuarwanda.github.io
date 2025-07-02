export interface NavigationItem {
  text: string;
  href: string;
  toNewTab: boolean;
}

export interface SiteConfig {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  keywords: string[];
  theme: string;
  version: string;
  lastUpdated: string;
}

export interface TimelineProps {
  title: string;
  subtitle: string;
  description?: string;
  points?: string[];
  url?: string;
}

export interface CardProps {
  title: string;
  header?: string;
  bordered?: boolean;
}
