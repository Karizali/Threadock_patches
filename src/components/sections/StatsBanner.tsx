import { stats } from '../../data/stats';
import styles from './StatsBanner.module.css';

export function StatsBanner() {
  return (
    <section className="section-tight">
      <div className="page-container">
        <div className={styles.heading}>
          <span className={`${styles.eyebrow} text-micro`}>Why Choose Us</span>
          <h2 className={`${styles.title} text-h1`}>Trusted By Teams &amp; Brands Everywhere</h2>
        </div>
        <div className={styles.banner}>
          {stats.map((stat) => (
            <div className={styles.tile} key={stat.id}>
              <span className={styles.value}>{stat.value}</span>
              <span className={`${styles.label} text-body`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
