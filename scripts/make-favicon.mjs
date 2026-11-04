import sharp from 'sharp';
import { writeFileSync, readFileSync } from 'node:fs';

const src =
  process.env.BRAND_FAVICON_SRC ??
  'C:/Users/DELL 7280/.cursor/projects/c-Users-DELL-7280-Documents-palworldhacks-com-main/assets/favicon_pal-a9d53f2c-2b8c-4cc6-88e1-6b836a0221c2.png';

const sizes = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192.png', 192],
  ['android-chrome-512.png', 512],
  ['logo.png', 64],
];

for (const [name, size] of sizes) {
  await sharp(src).resize(size, size, { fit: 'cover' }).png().toFile(`public/${name}`);
}

await sharp(src).resize(512, 512, { fit: 'cover' }).png().toFile('public/favicon.png');

function pngToIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const entries = [];
  for (const png of pngBuffers) {
    const w = png.readUInt32BE(16);
    const h = png.readUInt32BE(20);
    const meta = Buffer.alloc(16);
    meta[0] = w >= 256 ? 0 : w;
    meta[1] = h >= 256 ? 0 : h;
    meta.writeUInt16LE(1, 4);
    meta.writeUInt16LE(32, 6);
    meta.writeUInt32LE(png.length, 8);
    meta.writeUInt32LE(offset, 12);
    entries.push(meta);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

const p16 = await sharp(src).resize(16, 16).png().toBuffer();
const p32 = await sharp(src).resize(32, 32).png().toBuffer();
const p48 = await sharp(src).resize(48, 48).png().toBuffer();
writeFileSync('public/favicon.ico', pngToIco([p16, p32, p48]));

const png64 = (await sharp(src).resize(128, 128).png().toBuffer()).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Palworld Hacks">
  <image href="data:image/png;base64,${png64}" width="128" height="128"/>
</svg>
`;
writeFileSync('public/favicon.svg', svg);
writeFileSync('public/logo.svg', svg);

console.log('Wrote favicon.ico bytes', readFileSync('public/favicon.ico').length);
console.log('Wrote favicon.svg + logo.svg + png sizes');
