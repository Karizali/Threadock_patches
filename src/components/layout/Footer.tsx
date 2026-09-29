import { Link } from 'react-router-dom';
import { productCategories } from '../../data/navigation';
import { categorySlug } from '../../data/categoryContent';
import { FacebookIcon, InstagramIcon, MastercardIcon, PaypalIcon, PinterestIcon, VisaIcon } from './BrandIcons';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'FAQs', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="page-container">
        <div className={styles.grid}>
          <div>
            <span className={styles.brand}>threadock</span>
            <p className={styles.description}>
              Custom patches, transfers, and promotional products built for teams, brands, and shops that reorder
              every season.
            </p>
            <div className={styles.socialRow}>
              <a className={styles.socialLink} href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a className={styles.socialLink} href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a className={styles.socialLink} href="#" aria-label="Pinterest">
                <PinterestIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.heading}>Quick links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Categories</h3>
            <ul className={styles.linkList}>
              {productCategories.map((category) => (
                <li key={category}>
                  <Link to={`/products/category/${categorySlug(category)}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.linkList}>
              <li>
                <span>+1 (302) 555-0148</span>
              </li>
              <li>
                <span>orders@threadock.com</span>
              </li>
              <li>
                <span>Wilmington, Delaware, USA</span>
              </li>
              <li>
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>&copy; {new Date().getFullYear()} threadock. All rights reserved.</span>
          <div className={styles.paymentRow}>
            <span className={styles.paymentChip} aria-label="Visa">
              <VisaIcon />
            </span>
            <span className={styles.paymentChip} aria-label="Mastercard">
              <MastercardIcon />
            </span>
            <span className={styles.paymentChip} aria-label="PayPal">
              <PaypalIcon />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
