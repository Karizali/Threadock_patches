import type { ReactNode } from 'react';
import { Hero } from './Hero';

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: ReactNode;
  backgroundImage?: string;
  visualImage?: string;
}

export function PageIntro({ eyebrow, title, description, cta, backgroundImage, visualImage }: PageIntroProps) {
  return (
    <Hero
      eyebrow={eyebrow}
      title={title}
      description={description}
      cta={cta}
      backgroundImage={backgroundImage}
      visualImage={visualImage}
    />
  );
}
