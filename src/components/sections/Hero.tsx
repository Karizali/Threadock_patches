import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { TickerBar } from '../ui/TickerBar';
import styles from './Hero.module.css';

const chips = ['EP', 'DT', 'KC', 'WP', 'PB', 'CH'];

interface HeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  cta?: ReactNode;
}

const defaultActions = (
  <>
    <Link to="/products">
      <Button variant="primary">Explore the catalog</Button>
    </Link>
    <Link to="/contact">
      <Button variant="secondary">Request a quote</Button>
    </Link>
  </>
);

export function Hero({
  eyebrow = 'Custom patches & promo goods',
  title = 'Your vision, stitched with precision.',
  description = 'From embroidered patches to full apparel runs, we take your artwork from proof to production without the back-and-forth.',
  cta = defaultActions,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className="page-container">
        <div className={styles.inner}>
          <div>
            <span className={`${styles.eyebrow} text-micro`}>{eyebrow}</span>
            <h1 className={`${styles.heading} text-hero`}>{title}</h1>
            <p className={`${styles.lede} text-body-lg`}>{description}</p>
            {cta && <div className={styles.ctaRow}>{cta}</div>}
          </div>
          <div className={styles.visual} aria-hidden="true">
            {chips.map((chip) => (
              <div className={styles.visualChip} key={chip}>
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
      <TickerBar />
    </section>
  );
}
