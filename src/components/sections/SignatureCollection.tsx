import { useState } from 'react';
import { signatureProducts } from '../../data/products';
import { Carousel } from '../ui/Carousel';
import { ProductCard } from '../ui/ProductCard';
import { QuickViewModal } from '../ui/QuickViewModal';
import { SectionHeading } from './SectionHeading';
import type { Product } from '../../types';

export function SignatureCollection() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <section className="section" style={{ background: 'var(--color-surface-raised)' }}>
      <div className="page-container">
        <SectionHeading eyebrow="Curated" title="Signature collection" />
        <Carousel ariaLabel="Signature collection products">
          {signatureProducts.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
          ))}
        </Carousel>
      </div>
      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </section>
  );
}
