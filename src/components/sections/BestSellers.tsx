import { Link } from 'react-router-dom';
import { bestsellerProducts } from '../../data/products';
import { ProductGrid } from '../ui/ProductGrid';
import { SectionHeading } from './SectionHeading';

export function BestSellers() {
  return (
    <section className="section">
      <div className="page-container">
        <SectionHeading
          eyebrow="Shop"
          title="Best sellers"
          action={
            <Link to="/products" className="text-small">
              View all products &rarr;
            </Link>
          }
        />
        <ProductGrid products={bestsellerProducts} />
      </div>
    </section>
  );
}
