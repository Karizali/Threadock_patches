import { brandLogos } from '../../data/brands';
import styles from './BrandLogos.module.css';

export function BrandLogos() {
  return (
    <section className="section-tight">
      <div className="page-container">
        <div className={styles.row}>
          {brandLogos.map((brand) => (
            <span className={styles.name} key={brand.id}>
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
