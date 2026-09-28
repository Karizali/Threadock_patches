import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  onLight?: boolean;
  action?: ReactNode;
}

export function SectionHeading({ eyebrow, title, onLight, action }: SectionHeadingProps) {
  return (
    <div className={styles.wrap}>
      <div>
        <span className={`${styles.eyebrow} text-micro`}>{eyebrow}</span>
        <h2 className={`${styles.heading} ${onLight ? styles.headingOnLight : ''} text-h2`}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
