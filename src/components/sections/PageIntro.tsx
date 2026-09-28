import type { ReactNode } from 'react';
import { Hero } from './Hero';

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: ReactNode;
}

export function PageIntro({ eyebrow, title, description, cta }: PageIntroProps) {
  return <Hero eyebrow={eyebrow} title={title} description={description} cta={cta} />;
}
