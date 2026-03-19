import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Dynamic imports from src/data
const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  // Import data files
  const { BUSINESS } = await import('../src/data/business.js');
  const { services } = await import('../src/data/services.js');
  const { zones } = await import('../src/data/zones.js');

  const domain = BUSINESS.domain;
  const today = new Date().toISOString().split('T')[0];

  // Define all static pages
  const staticPages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/services', changefreq: 'monthly', priority: '0.9' },
    { path: '/zones-intervention', changefreq: 'monthly', priority: '0.9' },
    { path: '/tarifs', changefreq: 'monthly', priority: '0.8' },
    { path: '/a-propos', changefreq: 'monthly', priority: '0.6' },
    { path: '/contact', changefreq: 'monthly', priority: '0.8' },
    { path: '/mentions-legales', changefreq: 'yearly', priority: '0.3' },
    { path: '/politique-confidentialite', changefreq: 'yearly', priority: '0.3' },
    { path: '/cookies', changefreq: 'yearly', priority: '0.3' },
    { path: '/plan-du-site', changefreq: 'monthly', priority: '0.3' },
  ];

  // Build service pages
  const servicePages = services.map((s: { slug: string }) => ({
    path: `/services/${s.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  // Build zone pages
  const zonePages = zones.map((z: { slug: string }) => ({
    path: `/zones-intervention/${z.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const allPages = [...staticPages, ...servicePages, ...zonePages];

  // Generate sitemap.xml
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${domain}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  // Generate robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

  const publicDir = resolve(__dirname, '..', 'public');
  writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf-8');
  writeFileSync(resolve(publicDir, 'robots.txt'), robots, 'utf-8');

  console.log(`Sitemap generated with ${allPages.length} URLs`);
  console.log(`Robots.txt generated with domain: ${domain}`);
}

main().catch((err) => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
