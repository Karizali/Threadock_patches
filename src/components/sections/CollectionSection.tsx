import type { Product } from '../../types';
import { CollectionCard } from '../ui/CollectionCard';
import styles from './CollectionSection.module.css';

interface CollectionSectionProps {
  title: string;
  description: string;
  products: Product[];
}

export function CollectionSection({ title, description, products }: CollectionSectionProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <h2 className={`${styles.title} text-h2`}>{title}</h2>
      <p className={`${styles.description} text-body`}>{description}</p>
      <div className={styles.row}>
        {products.map((product) => (
          <CollectionCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
