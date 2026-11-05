import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const required = ['index.html', 'robots.txt', '404.html', 'sitemap.xml', 'sitemap-index.xml'];

for (const name of required) {
  const filePath = path.join(dist, name);
  if (!fs.existsSync(filePath)) {
    console.error(`verify-dist-seo: missing dist/${name}`);
    process.exit(1);
  }
}

for (const name of ['sitemap.xml', 'sitemap-index.xml']) {
  const xml = fs.readFileSync(path.join(dist, name), 'utf8');
  if (!xml.startsWith('<?xml')) {
    console.error(`verify-dist-seo: ${name} is not valid XML`);
    process.exit(1);
  }
  if (!xml.includes('http://www.sitemaps.org/schemas/sitemap/0.9')) {
    console.error(`verify-dist-seo: ${name} missing sitemaps.org namespace`);
    process.exit(1);
  }
  if (!xml.includes('<sitemapindex')) {
    console.error(`verify-dist-seo: ${name} must be a sitemap index`);
    process.exit(1);
  }
}

const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
if (!/^Sitemap:\s+https:\/\/palworldhacks\.com\/sitemap\.xml\s*$/m.test(robots)) {
  console.error('verify-dist-seo: robots.txt must declare Sitemap: https://palworldhacks.com/sitemap.xml');
  process.exit(1);
}

console.log('verify-dist-seo: ok');
