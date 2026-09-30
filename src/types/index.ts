export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  type: string;
  description: string;
  monogram: string;
  /** Product-specific photo; falls back to the category image when absent. */
  image?: string;
  bestseller?: boolean;
  signature?: boolean;
  /** Short subheading shown above the detail copy on the product page. */
  tagline?: string;
  /** One or more paragraphs of long-form detail copy. */
  detail?: string[];
  /** Bullet feature list shown on the product detail page. */
  highlights?: string[];
  /** Spec table rows shown on the product detail page. */
  specs?: ProductSpec[];
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
  logo: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}
