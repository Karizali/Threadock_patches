import type { Product } from '../../types';
import { CollectionCard } from '../ui/CollectionCard';
import { Carousel } from '../ui/Carousel';
import styles from './CollectionSection.module.css';

interface CollectionSectionProps {
  title: string;
  description: string;
  products: Product[];
}

const CAROUSEL_THRESHOLD = 3;

export function CollectionSection({ title, description, products }: CollectionSectionProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <h2 className={`${styles.title} text-h1`}>{title}</h2>
      <p className={`${styles.description} text-body-lg`}>{description}</p>

      {products.length > CAROUSEL_THRESHOLD ? (
        <Carousel ariaLabel={`${title} products`}>
          {products.map((product) => (
            <CollectionCard key={product.id} product={product} />
          ))}
        </Carousel>
      ) : (
        <div className={styles.row}>
          {products.map((product) => (
            <div className={styles.item} key={product.id}>
              <CollectionCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
