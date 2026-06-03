export interface Gallery {
  id: string;
  slug: string;
  title: {
    he: string;
    en: string;
  };
  subtitle?: {
    he: string;
    en: string;
  };
  coverImage: string;
  images: string[];
  order: number;
}

export interface Package {
  id: string;
  title: {
    he: string;
    en?: string;
  };
  subtitle?: {
    he: string;
    en?: string;
  };
  description: {
    he: string[];
    en?: string[];
  };
  extra?: {
    he: string;
    en?: string;
  };
  price: number;
  image: string;
  imagePosition?: string;
  order: number;
}

export interface SiteContent {
  site: {
    name: string;
    tagline: string;
  };
  about: {
    shortText: string;
    fullText: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  contact: {
    whatsappNumber: string;
  };
}

export interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
}

export type Locale = 'he' | 'en';
