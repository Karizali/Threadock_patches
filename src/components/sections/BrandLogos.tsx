import { brandLogos } from '../../data/brands';
import styles from './BrandLogos.module.css';

// Repeated so a single group is always wider than the viewport, keeping the loop seamless on large screens.
const loopLogos = Array.from({ length: 4 }, () => brandLogos).flat();

export function BrandLogos() {
  return (
    <section className="section-tight">
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[0, 1].map((group) => (
            <div className={styles.group} key={group} aria-hidden={group === 1}>
              {loopLogos.map((brand, index) => (
                <img
                  className={styles.logo}
                  key={`${group}-${brand.id}-${index}`}
                  src={brand.logo}
                  alt={group === 0 ? brand.name : ''}
                  loading="lazy"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
