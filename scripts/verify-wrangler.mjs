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

const validHandling =
  /html_handling\s*=\s*["'](auto-trailing-slash|force-trailing-slash|drop-trailing-slash|none)["']/.exec(
    text,
  );
if (!validHandling) {
  console.error(
    'verify-wrangler: set html_handling to auto-trailing-slash, force-trailing-slash, drop-trailing-slash, or none',
  );
  process.exit(1);
}

console.log('verify-wrangler: ok');
