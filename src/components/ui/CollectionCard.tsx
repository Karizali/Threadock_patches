import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { categoryImages } from '../../data/categoryImages';
import styles from './CollectionCard.module.css';

interface CollectionCardProps {
  product: Product;
}

export function CollectionCard({ product }: CollectionCardProps) {
  return (
    <Link to={`/products/${product.slug}`} className={styles.card}>
      <span className={styles.media}>
        <img src={categoryImages[product.category]} alt={product.name} loading="lazy" />
      </span>
      <span className={styles.rating} aria-hidden="true">
        {'★★★★★'}
      </span>
      <span className={styles.title}>{product.name}</span>
    </Link>
  );
}
