export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  monogram: string;
  bestseller?: boolean;
  signature?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
  rating: number;
}

export interface NavCategory {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BrandLogo {
  id: string;
  name: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}
