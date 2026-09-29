import { Link } from 'react-router-dom';
import wholesaleImage from '../../assets/bg_img_10.jpg';
import styles from './WholesaleCta.module.css';

export function WholesaleCta() {
  return (
    <section className="section-tight">
      <div className="page-container">
        <div className={styles.banner} style={{ backgroundImage: `url(${wholesaleImage})` }}>
          <div className={styles.overlay} />
          <div className={styles.content}>
            <span className={`${styles.eyebrow} text-micro`}>Premium manufacturing</span>
            <h2 className={`${styles.heading} text-hero`}>Wholesale Bulk Orders</h2>
            <p className={`${styles.copy} text-body-lg`}>
              Get high-quality custom branding solutions at competitive wholesale prices.
            </p>
            <Link to="/contact" className={styles.cta}>
              Get a quote <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
