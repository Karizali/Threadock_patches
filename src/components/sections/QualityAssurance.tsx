import type { ReactNode } from 'react';
import patchImage from '../../assets/quality_patch.jpg';
import styles from './QualityAssurance.module.css';

interface QualityFeature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const features: QualityFeature[] = [
  {
    id: 'precision',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
      </svg>
    ),
    title: 'Precision Craftsmanship',
    description:
      'Precision craftsmanship turns every detail into a mark of quality, durability, and refined finishing.',
  },
  {
    id: 'materials',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="6" />
        <polyline points="8.2 13.9 7 22 12 19 17 22 15.8 13.9" />
      </svg>
    ),
    title: 'Premium Materials',
    description: 'Premium materials ensure every product feels durable, reliable, and built to last.',
  },
  {
    id: 'durability',
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s7-3.5 7-9V5l-7-3-7 3v7c0 5.5 7 9 7 9z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Durability Tested',
    description:
      'Durability-tested products are made to handle regular use without losing their shape, color, or finish.',
  },
  {
    id: 'colour',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    title: 'Colour Accuracy',
    description:
      'Colour accuracy ensures every shade matches your design with clean, consistent detail.',
  },
];

export function QualityAssurance() {
  return (
    <section className={`section-tight ${styles.section}`}>
      <div className="page-container">
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={patchImage} alt="Close-up of an embroidered patch on a dark surface" />
          </div>
          <div className={styles.content}>
            <span className={`${styles.eyebrow} text-micro`}>Quality You Can Trust</span>
            <h2 className={`${styles.heading} text-h1`}>Build To The Highest Standards</h2>
            <p className={`${styles.lede} text-body-lg`}>
              We combine premium materials, expert craftsmanship, and rigorous quality control to
              deliver patches that look exceptional and last.
            </p>
            <div className={styles.features}>
              {features.map((feature) => (
                <div className={styles.feature} key={feature.id}>
                  <span className={styles.icon} aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3 className={`${styles.featureTitle} text-h4`}>{feature.title}</h3>
                  <p className={`${styles.featureDescription} text-small`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
