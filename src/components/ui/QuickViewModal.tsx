import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { ProductSwatch } from './ProductSwatch';
import { Badge } from './Badge';
import { Button } from './Button';
import styles from './QuickViewModal.module.css';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label="Close quick view">
          &times;
        </button>
        <ProductSwatch product={product} size="lg" />
        <div className={styles.body}>
          {(product.bestseller || product.signature) && (
            <div className={styles.badgeRow}>
              {product.bestseller && <Badge variant="bestseller">Bestseller</Badge>}
              {product.signature && <Badge variant="signature">Signature</Badge>}
            </div>
          )}
          <span className={styles.category}>{product.category}</span>
          <h2 className={styles.name} id="quick-view-title">
            {product.name}
          </h2>
          <p className={styles.description}>{product.description}</p>
          <Link to={`/products/${product.slug}`} onClick={onClose}>
            <Button variant="onLight">View full details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
