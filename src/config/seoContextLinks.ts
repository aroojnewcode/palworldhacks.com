import { normalizeSeoPath } from './pageSeo';

export interface SeoContextLink {
  href: string;
  label: string;
}

const LINK_SETS: Record<string, SeoContextLink[]> = {
  '/': [
    { href: '/products/palworld-cheats/lite/', label: 'Lite ESP and radar tier listing' },
    { href: '/products/palworld-cheats/pro/', label: 'Pro aimbot and no recoil page' },
    { href: '/blog/buy-guide/', label: '2026 Palworld checkout buy guide' },
    { href: '/blog/features/', label: 'Tier features module reference' },
    { href: '/forum/choose-tier/', label: 'Forum: choosing Lite vs Pro' },
    { href: '/sitemap.xml', label: 'XML sitemap index for crawlers' },
    { href: '/sitemap-pages.xml', label: 'Static pages XML sitemap file' },
  ],
  '/faq/': [
    { href: '/products/palworld-cheats/', label: 'Palworld cheat tier comparison hub' },
    { href: '/blog/lite-vs-pro/', label: 'Written Lite versus Pro guide' },
    { href: '/blog/eac-patch/', label: 'Anti-cheat patch-day checklist post' },
    { href: '/support/', label: 'Discord loader support tickets' },
    { href: '/forum/eac-init/', label: 'Forum: EAC initialize errors' },
    { href: '/sitemap.xml', label: 'Full site XML sitemap' },
    { href: '/sitemap-forum.xml', label: 'Forum threads XML sitemap' },
  ],
  '/about/': [
    { href: '/products/palworld-cheats/utilities/', label: 'Utilities: HWID spoofer and UGC' },
    { href: '/blog/stream-proof/', label: 'Creator stream-proof overlay article' },
    { href: '/forum/', label: 'Buyer forum question archive' },
    { href: '/reviews/', label: 'Verified purchaser review hub' },
    { href: '/sitemap-pages.xml', label: 'Sitemap of static pages' },
    { href: '/sitemap.xml', label: 'Primary XML sitemap index' },
  ],
  '/blog/': [
    { href: '/blog/aimbot/', label: 'Aimbot and no recoil setup guide' },
    { href: '/blog/buy-guide/', label: 'Lite, Pro, Elite checkout walkthrough' },
    { href: '/products/palworld-cheats/elite/', label: 'Elite full-suite product listing' },
    { href: '/forum/pre-install/', label: 'Forum: pre-install checklist' },
    { href: '/sitemap-blog.xml', label: 'Blog posts XML sitemap' },
    { href: '/go/palworld/', label: 'Partner secure checkout URL' },
  ],
  '/blog/aimbot/': [
    { href: '/blog/bones/', label: 'Weapon bone select profile examples' },
    { href: '/blog/lite-vs-pro/', label: 'Lite vs Pro tier comparison write-up' },
    { href: '/products/palworld-cheats/pro/', label: 'Pro tier product and pricing page' },
    { href: '/forum/aim-smooth/', label: 'Forum: smoothing aim settings' },
    { href: '/forum/recoil-drill/', label: 'Forum: recoil control drills' },
  ],
  '/blog/buy-guide/': [
    { href: '/blog/use-codes/', label: 'Portal unlock after payment guide' },
    { href: '/blog/elite/', label: 'Elite upgrade modules explainer' },
    { href: '/faq/', label: 'Pre-purchase FAQ index page' },
    { href: '/forum/choose-tier/', label: 'Forum: tier selection thread' },
    { href: '/products/palworld-cheats/', label: 'Live products hub with pricing' },
  ],
  '/blog/features/': [
    { href: '/blog/esp/', label: 'Lite ESP and radar setup guide' },
    { href: '/blog/skins/', label: 'Skin Changer utility breakdown' },
    { href: '/products/palworld-cheats/unlock-all/', label: 'Unlock All cosmetics product page' },
    { href: '/forum/esp-setup/', label: 'Forum: ESP overlay calibration' },
    { href: '/forum/esp-include/', label: 'Forum: ESP filter toggles' },
  ],
  '/blog/bones/': [
    { href: '/blog/aimbot/', label: 'Pro aimbot buyer configuration guide' },
    { href: '/forum/recoil-drill/', label: 'Forum: per-weapon recoil drills' },
    { href: '/products/palworld-cheats/pro/', label: 'Pro tier checkout listing' },
    { href: '/forum/aim-smooth/', label: 'Forum: aim smoothing presets' },
  ],
  '/blog/cheat-codes/': [
    { href: '/blog/console-cmds/', label: 'F1 admin console command list' },
    { href: '/blog/external/', label: 'External loader vs admin tools' },
    { href: '/products/palworld-cheats/lite/', label: 'Lite live-server ESP tier page' },
    { href: '/forum/f1-console/', label: 'Forum: F1 console limitations' },
  ],
  '/blog/console-tips/': [
    { href: '/blog/cheat-codes/', label: 'Console codes vs live loaders article' },
    { href: '/blog/fov/', label: 'FOV hack with ESP pairing guide' },
    { href: '/products/palworld-cheats/', label: 'Products hub tier picker' },
    { href: '/forum/spray-safe/', label: 'Forum: safe spray practice tips' },
  ],
};

const DEFAULT_LINKS: SeoContextLink[] = [
  { href: '/products/palworld-cheats/', label: 'Palworld cheat products directory' },
  { href: '/blog/', label: 'Checkout and tier blog guides' },
  { href: '/faq/', label: 'Tier and checkout FAQ index' },
  { href: '/sitemap.xml', label: 'Site XML sitemap index' },
];

export function getSeoContextLinks(pathname: string): SeoContextLink[] {
  const path = normalizeSeoPath(pathname);
  return LINK_SETS[path] ?? DEFAULT_LINKS;
}
