import fs from 'node:fs';

const path = 'wrangler.toml';
if (!fs.existsSync(path)) {
  console.error('verify-wrangler: wrangler.toml missing');
  process.exit(1);
}

const text = fs.readFileSync(path, 'utf8');
if (/html_handling\s*=\s*["']auto["']/i.test(text)) {
  console.error(
    'verify-wrangler: invalid html_handling = "auto". Use force-trailing-slash (see wrangler.toml comment).',
  );
  process.exit(1);
}

if (!/html_handling\s*=\s*["']force-trailing-slash["']/.test(text)) {
  console.error('verify-wrangler: expected html_handling = "force-trailing-slash"');
  process.exit(1);
}

console.log('verify-wrangler: ok');
