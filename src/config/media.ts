/** Palworld SEO media on Supabase (public bucket). */
const MEDIA_BASE =
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/palworld/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4';

export const PALWORLD_MEDIA = {
  arcaneS7: `${MEDIA_BASE}/1793725969135-0irpj0-arcane-palworld-s7.webp`,
  scene1: `${MEDIA_BASE}/1793725935948-c2k32c-palworlds1.webp`,
  scene2: `${MEDIA_BASE}/1793725920015-ebj20k-palworlds2.webp`,
  scene4: `${MEDIA_BASE}/1793725906985-rnwdit-palworlds4.webp`,
  scene5: `${MEDIA_BASE}/1793725887522-lxgrm3-palworlds5.webp`,
  scene6: `${MEDIA_BASE}/1793725871713-4rg4jw-palworlds6.webp`,
} as const;

/** Ordered pool for carousels, blog heroes, and rotating art. */
export const PALWORLD_IMAGE_POOL: readonly string[] = [
  PALWORLD_MEDIA.arcaneS7,
  PALWORLD_MEDIA.scene1,
  PALWORLD_MEDIA.scene2,
  PALWORLD_MEDIA.scene4,
  PALWORLD_MEDIA.scene5,
  PALWORLD_MEDIA.scene6,
];

export const DEFAULT_PALWORLD_HERO_IMAGE = PALWORLD_MEDIA.arcaneS7;
export const DEFAULT_PALWORLD_OG_IMAGE = PALWORLD_MEDIA.arcaneS7;

/** Site favicon + footer/forum logo (`public/favicon.png`). */
export const PALWORLD_FAVICON_URL = '/favicon.png';
export const PALWORLD_LOGO_URL = '/favicon.png';

export function palworldImageAt(index: number): string {
  const pool = PALWORLD_IMAGE_POOL;
  if (pool.length === 0) return DEFAULT_PALWORLD_HERO_IMAGE;
  const i = ((index % pool.length) + pool.length) % pool.length;
  return pool[i]!;
}

const BLOG_SLUG_ORDER = [
  'cheat-codes',
  'console-tips',
  'use-codes',
  'features',
  'console-cmds',
  'lite-vs-pro',
  'elite',
  'aimbot',
  'esp',
  'fov',
  'skins',
  'eac-patch',
  'hwid',
  'buy-guide',
  'bones',
  'eac-error',
  'external',
  'stream-proof',
] as const;

export function palworldBlogImage(slug: string): string {
  const index = BLOG_SLUG_ORDER.indexOf(slug as (typeof BLOG_SLUG_ORDER)[number]);
  return palworldImageAt(index >= 0 ? index : 0);
}

export function isRemoteMediaUrl(src: string): boolean {
  return /^https?:\/\//i.test(src);
}
