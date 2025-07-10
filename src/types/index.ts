export interface NavigationItem {
  text: Record<string, string>;
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
  title: Record<string, string>;
  subtitle: Record<string, string>;
  description?: Record<string, string>;
  points?: Record<string, string>[];
  url?: string;
}

export interface CardProps {
  title: string;
  header?: string;
  bordered?: boolean;
}
