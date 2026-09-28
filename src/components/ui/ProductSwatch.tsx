import type { Product } from '../../types';
import { categoryImages } from '../../data/categoryImages';
import styles from './ProductSwatch.module.css';

interface ProductSwatchProps {
  product: Product;
  size?: 'sm' | 'lg';
}

export function ProductSwatch({ product, size = 'sm' }: ProductSwatchProps) {
  return (
    <div className={`${styles.swatch} ${styles[size]}`}>
      <img
        className={styles.image}
        src={categoryImages[product.category]}
        alt={product.name}
        loading="lazy"
      />
    </div>
  );
}
