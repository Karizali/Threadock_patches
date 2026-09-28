import { products } from '../../data/products';
import { ProductGrid } from '../ui/ProductGrid';
import { SectionHeading } from './SectionHeading';

export function ShopGridSection() {
  const secondary = products.slice(8, 16);

  return (
    <section className="section">
      <div className="page-container">
        <SectionHeading eyebrow="More to explore" title="From the shop" />
        <ProductGrid products={secondary} />
      </div>
    </section>
  );
}
