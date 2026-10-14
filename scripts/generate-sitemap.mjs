// Generates public/sitemap.xml from the route definitions and product/category
// data used by the app. Re-run via `npm run sitemap` (also runs automatically
// before `npm run build`) whenever products or categories change.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SITE_URL = 'https://threadock.com';

function extractSlugs(filePath) {
  const source = readFileSync(filePath, 'utf8');
  return [...source.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
}

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/products', changefreq: 'weekly', priority: '0.9' },
  { path: '/services', changefreq: 'monthly', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.5' },
  { path: '/faq', changefreq: 'monthly', priority: '0.5' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
];

const categorySlugs = extractSlugs(path.join(rootDir, 'src/data/categoryContent.ts'));
const productSlugs = extractSlugs(path.join(rootDir, 'src/data/products.ts'));

const urls = [
  ...staticRoutes,
  ...categorySlugs.map((slug) => ({
    path: `/products/category/${slug}`,
    changefreq: 'weekly',
    priority: '0.8',
  })),
  ...productSlugs.map((slug) => ({
    path: `/products/${slug}`,
    changefreq: 'monthly',
    priority: '0.6',
  })),
];

const lastmod = new Date().toISOString().slice(0, 10);

const body = urls
  .map(
    ({ path: urlPath, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${urlPath}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(path.join(rootDir, 'public/sitemap.xml'), xml);
console.log(`Generated public/sitemap.xml with ${urls.length} URLs.`);
