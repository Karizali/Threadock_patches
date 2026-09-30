import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { categoryImages } from '../../data/categoryImages';
import { Badge } from './Badge';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {(product.bestseller || product.signature) && (
          <div className={styles.badgeRow}>
            {product.bestseller && <Badge variant="bestseller">Bestseller</Badge>}
            {product.signature && <Badge variant="signature">Signature</Badge>}
          </div>
        )}

        <img className={styles.image} src={product.image ?? categoryImages[product.category]} alt={product.name} loading="lazy" />

        {/* Quick View Hover Overlay */}
        <button
          type="button"
          className={styles.quickViewOverlay}
          onClick={() => onQuickView(product)}
          aria-label={`Quick view ${product.name}`}
        >
          <svg className={styles.eyeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>

        {/* Title Stripe with Gradient */}
        <div className={styles.titleBar}>
          <Link to={`/products/${product.slug}`} className={styles.title}>
            {product.name}
          </Link>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{product.description}</p>
      </div>
    </article>
  );
}