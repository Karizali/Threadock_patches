import patchImage from '../../assets/quality_patch.jpg';
import styles from './CustomerSatisfactionBanner.module.css';

const features = [
  { icon: '🎁', label: 'Free Artwork & designs' },
  { icon: '📝', label: 'Unlimited Revisions' },
  { icon: '🏷️', label: 'Unbeatable price' },
  { icon: '👍', label: 'Guaranteed 100% satisfaction' },
  { icon: '🎧', label: 'Real Human Support' },
  { icon: '✂️', label: 'Free Actual Sew Out' },
];

export function CustomerSatisfactionBanner() {
  return (
    <section className={styles.banner}>
      <div className={`page-container ${styles.layout}`}>
        <div className={styles.content}>
          <h2 className={`${styles.title} text-h1`}>Customer Satisfaction Is Our Primary Objective</h2>
          <ul className={styles.list}>
            {features.map((feature) => (
              <li className={styles.item} key={feature.label}>
                <span className={styles.icon} aria-hidden="true">
                  {feature.icon}
                </span>
                <span className={styles.label}>{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className={styles.image} src={patchImage} alt="Close-up of a custom embroidered patch" />
      </div>
    </section>
  );
}
