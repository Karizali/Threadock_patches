import heroImage from '../../assets/hero_image.webp';
import patchImage from '../../assets/quality_patch.jpg';
import styles from './CherishedCustomers.module.css';

const stats = [
  { label: 'Completed Projects', value: '600+', percent: 92 },
  { label: 'Retention rate', value: '90%', percent: 90 },
  { label: 'Client Satisfaction Score', value: '95%', percent: 95 },
];

export function CherishedCustomers() {
  return (
    <section className="section">
      <div className="page-container">
        <div className={styles.layout}>
          <div className={styles.collage}>
            <img className={styles.imageMain} src={heroImage} alt="Custom embroidered patches laid out on a jacket" />
            <img className={styles.imageAccent} src={patchImage} alt="Close-up of a custom embroidered patch" />
          </div>

          <div className={styles.content}>
            <h2 className={`${styles.title} text-h1`}>At threadock You Come First — Our Cherished Customers.</h2>
            <p className={`${styles.paragraph} text-body-lg`}>
              We recognize that your tastes and needs are distinct, so we take the time to collaborate with you and
              craft a personalized patch design tailored to your vision.
            </p>
            <p className={`${styles.paragraph} text-body-lg`}>
              Our approach is built on honesty, clear communication, and adaptability, ensuring we remain aligned
              with you throughout the entire journey. With each order, we dedicate genuine effort and care to
              deliver something meaningful. Choosing threadock means choosing reliability and passion. You can be
              confident that your project is being handled with dedication and expertise.
            </p>

            <div className={styles.stats}>
              {stats.map((stat) => (
                <div className={styles.stat} key={stat.label}>
                  <div className={styles.statRow}>
                    <span className={styles.statLabel}>{stat.label}</span>
                    <span className={styles.statValue}>{stat.value}</span>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.barFill} style={{ width: `${stat.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
