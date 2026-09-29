import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { primaryNav, productCategories } from '../../data/navigation';
import { categorySlug } from '../../data/categoryContent';
import styles from './Header.module.css';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.bar}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>
              thread<span className={styles.logoAccent}>ock</span>
            </span>
            {/* <span className={styles.logoTagline}>Custom Patches &amp; Promo Goods</span> */}
          </Link>

          <button
            className={styles.menuToggle}
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="primary-nav"
            aria-label="Toggle navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`} id="primary-nav">
            {primaryNav.map((item) =>
              item.label === 'Products' ? (
                <div className={styles.navGroup} key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  >
                    {item.label}
                  </NavLink>
                  <div className={styles.dropdown}>
                    {productCategories.map((category) => (
                      <Link
                        key={category}
                        to={`/products/category/${categorySlug(category)}`}
                        className={styles.dropdownLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className={styles.contact}>
            <a className={styles.contactPhone} href="tel:+13025550148">
              +1 (302) 555-0148
            </a>
            <a className={styles.contactEmail} href="mailto:orders@threadock.com">
              orders@threadock.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
