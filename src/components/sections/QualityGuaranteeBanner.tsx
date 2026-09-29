import { Link } from 'react-router-dom';
import patchImage from '../../assets/quality_patch.jpg';
import styles from './QualityGuaranteeBanner.module.css';

export function QualityGuaranteeBanner() {
  return (
    <section className={styles.banner}>
      <img className={`${styles.patch} ${styles.patchLeft}`} src={patchImage} alt="" aria-hidden="true" />
      <img className={`${styles.patch} ${styles.patchRight}`} src={patchImage} alt="" aria-hidden="true" />

      <div className={`page-container ${styles.content}`}>
        <h2 className={`${styles.title} text-h1`}>
          Every Custom Patch Is Backed By Our Outstanding Customer Service And 100% Quality Guarantee
        </h2>
        <p className={`${styles.subtitle} text-body-lg`}>
          If you have questions, feel free to reach us by email at orders@threadock.com or toll-free at
          +1 (302) 555-0148. Ready to get your free quote? Head over to our{' '}
          <Link to="/contact" className={styles.link}>
            contact page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
