import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import styles from './WholesaleCta.module.css';

export function WholesaleCta() {
  return (
    <section className="section-tight">
      <div className="page-container">
        <div className={styles.banner}>
          <div>
            <h2 className={`${styles.heading} text-h3`}>Wholesale &amp; bulk orders</h2>
            <p className={`${styles.copy} text-body`}>
              Tiered pricing at 100, 500, and 1,000 units, with dedicated account support for repeat orders.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="secondary">Request wholesale pricing</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
