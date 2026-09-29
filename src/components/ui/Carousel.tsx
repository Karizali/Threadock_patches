import { useRef, type ReactNode } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: ReactNode[];
  ariaLabel: string;
}

export function Carousel({ children, ariaLabel }: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const node = viewportRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * 300, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => scrollBy(-1)}
        aria-label="Scroll left"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className={styles.viewport} ref={viewportRef} role="group" aria-label={ariaLabel}>
        {children.map((child, index) => (
          <div className={styles.slide} key={index}>
            {child}
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => scrollBy(1)}
        aria-label="Scroll right"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
