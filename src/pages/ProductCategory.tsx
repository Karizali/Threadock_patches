import { Navigate, useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { categoryContentBySlug } from '../data/categoryContent';
import { PageIntro } from '../components/sections/PageIntro';
import { CollectionSection } from '../components/sections/CollectionSection';
import { Button } from '../components/ui/Button';
import styles from './ProductCategory.module.css';

export default function ProductCategory() {
  const { category: slug } = useParams();
  const content = categoryContentBySlug(slug ?? '');

  if (!content) {
    return <Navigate to="/products" replace />;
  }

  const categoryProducts = products.filter((p) => p.category === content.category);
  const chips = Array.from(new Set(categoryProducts.map((p) => p.monogram))).slice(0, 6);

  return (
    <>
      <PageIntro
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        backgroundImage={content.heroImage}
        chips={chips.length > 0 ? chips : undefined}
        cta={
          <>
            <Link to="/contact">
              <Button variant="primary">Request a quote</Button>
            </Link>
            <Link to="/products">
              <Button variant="secondary">Browse all products</Button>
            </Link>
          </>
        }
      />
      <div className={styles.body}>
        <div className="page-container">
          {content.collections.map((collection) => (
            <CollectionSection
              key={collection.type}
              title={collection.title}
              description={collection.description}
              products={categoryProducts.filter((p) => p.type === collection.type)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
