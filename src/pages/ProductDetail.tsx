import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductSwatch } from '../components/ui/ProductSwatch';
import { ProductGrid } from '../components/ui/ProductGrid';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageIntro } from '../components/sections/PageIntro';
import styles from './ProductDetail.module.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <PageIntro
        eyebrow={product.category}
        title={product.name}
        description={product.description}
        cta={
          <>
            <Link to="/contact"><Button variant="primary">Request a quote</Button></Link>
            <Link to="/products"><Button variant="secondary">Browse products</Button></Link>
          </>
        }
      />
      <div className={styles.body}>
        <div className="page-container">
          <div className={styles.productOverview}>
            <ProductSwatch product={product} size="lg" />

            <div className={styles.info}>
              <h2 className={`${styles.name} text-h2`}>{product.name}</h2>

              <div className={styles.badges}>
                {product.bestseller && <Badge variant="bestseller">Bestseller</Badge>}
                {product.signature && <Badge variant="signature">Signature</Badge>}
              </div>

              {product.tagline && <p className={`${styles.tagline} text-h4`}>{product.tagline}</p>}

              {product.detail?.map((paragraph, index) => (
                <p className={`${styles.paragraph} text-body-lg`} key={index}>
                  {paragraph}
                </p>
              ))}

              {product.highlights && product.highlights.length > 0 && (
                <ul className={styles.highlights}>
                  {product.highlights.map((highlight) => (
                    <li className={styles.highlight} key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {product.specs && product.specs.length > 0 && (
            <div className={styles.specs}>
              <h2 className={`${styles.specsTitle} text-h3`}>Product Specifications</h2>
              <div className={styles.specTable}>
                {product.specs.map((spec) => (
                  <div className={styles.specRow} key={spec.label}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className={styles.related}>
              <h2 className={`${styles.relatedTitle} text-h2`}>You may also like</h2>
              <ProductGrid products={related} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
