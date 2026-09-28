import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { productCategories } from '../data/navigation';
import { PageIntro } from '../components/sections/PageIntro';
import { Select } from '../components/ui/Field';
import { SearchBar } from '../components/ui/SearchBar';
import { ProductGrid } from '../components/ui/ProductGrid';
import styles from './Products.module.css';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') ?? '';
  const query = searchParams.get('q') ?? '';

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesQuery = query
        ? product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  return (
    <>
      <PageIntro
        eyebrow="Shop the catalog"
        title="Products"
        description="Browse embroidered patches, transfers, stickers, bags, keychains, and promotional goods — filter by category or search for exactly what you need."
      />
      <div className={styles.controlsBar}>
        <div className="page-container">
          <div className={styles.controls}>
            <SearchBar value={query} onChange={(value) => setParam('q', value)} placeholder="Search products" />
            <Select
              label="Category"
              value={category}
              onChange={(e) => setParam('category', e.target.value)}
            >
              <option value="">All categories</option>
              {productCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
            <span className={`${styles.count} text-small`}>
              {filtered.length} product{filtered.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className="page-container">
          <ProductGrid products={filtered} emptyMessage="No products in this category yet — check back soon or request a custom quote." />
        </div>
      </div>
    </>
  );
}
