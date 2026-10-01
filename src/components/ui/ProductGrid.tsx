import { useState } from 'react';
import type { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';
import { useWindowedGrid } from '../../hooks/useWindowedGrid';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export function ProductGrid({ products, emptyMessage = 'No products match this filter yet.' }: ProductGridProps) {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { gridRef, topSentinelRef, bottomSentinelRef, visibleItems, topSpacerHeight, bottomSpacerHeight } =
    useWindowedGrid(products);

  if (products.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <>
      <div className={styles.grid} ref={gridRef}>
        <div className={styles.spacer} style={{ height: topSpacerHeight }} aria-hidden="true" />
        <div ref={topSentinelRef} className={styles.sentinel} aria-hidden="true" />
        {visibleItems.map((product) => (
          <div key={product.id} data-grid-item>
            <ProductCard product={product} onQuickView={setQuickViewProduct} />
          </div>
        ))}
        <div ref={bottomSentinelRef} className={styles.sentinel} aria-hidden="true" />
        <div className={styles.spacer} style={{ height: bottomSpacerHeight }} aria-hidden="true" />
      </div>
      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </>
  );
}
