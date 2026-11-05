import { normalizeSeoPath } from './pageSeo';

export interface SeoContextLink {
  href: string;
  label: string;
}

const LINK_SETS: Record<string, SeoContextLink[]> = {
  '/': [
    { href: '/products/palworld-cheats/lite/', label: 'Shop Lite ESP and radar tier' },
    { href: '/products/palworld-cheats/pro/', label: 'Open Pro aimbot product page' },
    { href: '/blog/buy-guide/', label: 'Read the 2026 checkout buy guide' },
    { href: '/blog/features/', label: 'See every cheat module by tier' },
    { href: '/reviews/', label: 'Browse verified buyer reviews' },
    { href: '/sitemap.xml', label: 'XML sitemap index for crawlers' },
  ],
  '/faq/': [
    { href: '/products/palworld-cheats/', label: 'Compare Palworld cheat tiers' },
    { href: '/blog/lite-vs-pro/', label: 'Lite versus Pro decision guide' },
    { href: '/blog/eac-patch/', label: 'EAC patch-day checklist article' },
    { href: '/support/', label: 'Discord loader support desk' },
    { href: '/terms/', label: 'Terms of sale and license limits' },
    { href: '/sitemap.xml', label: 'Full site XML sitemap' },
  ],
  '/about/': [
    { href: '/products/palworld-cheats/utilities/', label: 'HWID spoofer and UGC utilities hub' },
    { href: '/blog/stream-proof/', label: 'Stream-proof overlay setup guide' },
    { href: '/forum/', label: 'Buyer forum Q&A archive' },
    { href: '/privacy/', label: 'Privacy policy and cookie notice' },
    { href: '/sitemap-pages.xml', label: 'Sitemap of static pages' },
  ],
  '/blog/': [
    { href: '/blog/aimbot/', label: 'Pro aimbot and no recoil guide' },
    { href: '/blog/buy-guide/', label: 'Checkout walkthrough for Lite, Pro, Elite' },
    { href: '/products/palworld-cheats/elite/', label: 'Elite tier full-suite product page' },
    { href: '/go/palworld/', label: 'Secure checkout for portal access' },
    { href: '/sitemap-blog.xml', label: 'Blog posts XML sitemap' },
  ],
  '/blog/aimbot/': [
    { href: '/blog/bones/', label: 'Bone select and weapon profile examples' },
    { href: '/blog/lite-vs-pro/', label: 'When to pick Lite instead of Pro' },
    { href: '/products/palworld-cheats/pro/', label: 'Pro tier checkout product listing' },
    { href: '/forum/aim-smooth/', label: 'Forum thread on aim smoothing' },
  ],
  '/blog/buy-guide/': [
    { href: '/blog/use-codes/', label: 'Portal access after payment guide' },
    { href: '/blog/elite/', label: 'Elite upgrade feature breakdown' },
    { href: '/faq/', label: 'Pre-purchase ban-risk FAQ' },
    { href: '/products/palworld-cheats/', label: 'Live tier pricing on products hub' },
  ],
  '/blog/features/': [
    { href: '/blog/esp/', label: 'Lite ESP and radar setup article' },
    { href: '/blog/skins/', label: 'Skin Changer utility explainer' },
    { href: '/products/palworld-cheats/unlock-all/', label: 'Unlock All cosmetics product page' },
    { href: '/forum/esp-setup/', label: 'Forum ESP overlay tuning tips' },
  ],
  '/blog/bones/': [
    { href: '/blog/aimbot/', label: 'Aimbot and Soft Aim buyer guide' },
    { href: '/forum/recoil-drill/', label: 'Forum recoil drill discussion' },
    { href: '/products/palworld-cheats/pro/', label: 'Buy Pro for weapon profiles' },
  ],
  '/blog/cheat-codes/': [
    { href: '/blog/console-cmds/', label: 'Admin console command reference' },
    { href: '/blog/external/', label: 'External loader versus admin tools' },
    { href: '/products/palworld-cheats/lite/', label: 'Lite tier for live-server ESP' },
  ],
  '/blog/console-tips/': [
    { href: '/blog/cheat-codes/', label: 'Console codes versus live loaders' },
    { href: '/blog/fov/', label: 'FOV hack paired with ESP guide' },
    { href: '/products/palworld-cheats/', label: 'Pick a tier at the products hub' },
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
