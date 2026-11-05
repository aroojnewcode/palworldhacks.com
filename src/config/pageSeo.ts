/**
 * Unique titles/descriptions per route — all Palworld-focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Pal Esp – Buy Palworld Hacks & | Meet the palworldhacks',
    description:
      'Pal ESP for Steam PC—shop undetected Palworld cheats with loot ESP, soft aim, no recoil and stream-proof overlays. Compare Lite, Pro and Elite.',
  },
  '/products/palworld-cheats/': {
    title: 'All Palworld Cheat Products | Lite, Pro, Elite Hub',
    description:
      'Products hub for undetected palworld cheats on Steam PC—compare Lite, Pro and Elite tiers plus HWID, UGC and utilities. Module lists, buy guides and checkout.',
  },
  '/products/palworld-cheats/lite/': {
    title: 'Palworld Lite Cheats for Sale | ESP, Radar & FOV',
    description:
      'Purchase Lite tier: player ESP, loot ESP, radar and FOV tools for Steam PC—awareness-first Palworld cheats without aim automation.',
  },
  '/products/palworld-cheats/pro/': {
    title: 'Palworld Pro Cheats for Sale | Aimbot, ESP & No Recoil',
    description:
      'Purchase Pro tier: aimbot, soft aim, no recoil plus full Lite ESP—combat-focused Palworld cheats for co-op and PvP on Steam PC.',
  },
  '/products/palworld-cheats/elite/': {
    title: 'Palworld Elite Cheats for Sale | ESP, Aimbot, Farm Bot',
    description:
      'Purchase Elite tier: skeleton ESP, aimbot, no recoil, auto farm helpers, Skin Changer and priority anti-cheat patch queue for co-op and dedicated servers.',
  },
  '/products/palworld-cheats/hwid-spoofer/': {
    title: 'Palworld HWID Spoofer for Sale | Reset After Ban',
    description:
      'Buy a Palworld HWID spoofer to rotate disk, MAC and GPU IDs after an anti-cheat hardware flag. Portal setup guide and Discord support included.',
  },
  '/products/palworld-cheats/ugc/': {
    title: 'Palworld UGC Recovery Tool | Steam & Ban Appeals',
    description:
      'UGC appeal workspace for Steam holds, anti-cheat bans and server restrictions—document cases, track status and rebuild account access with structured workflows.',
  },
  '/products/palworld-cheats/unlock-all/': {
    title: 'Unlock All & Skin Changer | Local Cosmetics',
    description:
      'Unlock All and Skin Changer for local weapon and clothing previews on Steam PC—client-side cosmetics without market purchases; standalone or with Elite tier.',
  },
  '/products/palworld-cheats/utilities/': {
    title: 'Compare Cheat Utilities | HWID Spoofer & UGC',
    description:
      'Cheat utility comparison for Steam PC—HWID Spoofer vs UGC recovery use cases, feature lists and product pages. Skin Changer details live on Unlock All.',
  },
  '/blog/': {
    title: 'Checkout – ESP and aimbot modules | Palworld Hacks',
    description:
      'Checkout walkthroughs for Palworld cheats—secure payment, tier picks, ESP and aimbot modules. Lite, Pro and Elite guides at palworldhacks.com.',
  },
  '/forum/': {
    title: 'Buyer Forum Q&A | ESP, Radar & Spoofer Help',
    description:
      'Palworld buyer forum: ESP and radar setup Q&A from our guides—overlay tuning, HWID tools, update readiness and tier picks before checkout.',
  },
  '/reviews/': {
    title: 'Palworld Hacks Reviews | Buyer Ratings & Feedback',
    description:
      'Read verified Palworld Hacks reviews for Elite ESP and aimbot, HWID Spoofer, UGC recovery and Skin Changer—real buyer ratings before you checkout.',
  },
  '/faq/': {
    title: 'Faq – Palworld Tiers, Checkout & | Meet the palworldhacks',
    description:
      'FAQ before you buy: Windows and Steam setup, Lite vs Pro vs Elite, ban risk, checkout delivery and HWID resets—clear answers on palworldhacks.com.',
  },
  '/terms/': {
    title: 'Palworld Hacks Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Palworld cheat licenses on palworldhacks.com—delivery, personal-use limits, refunds, anti-cheat risk and acceptable product use.',
  },
  '/about/': {
    title: 'Cheats Store – Meet the palworldhacks | Palworld Hacks',
    description:
      'Meet the palworldhacks.com cheats store team—tiers, utilities, update-day loader updates and Discord help after checkout on Steam PC.',
  },
  '/blog/aimbot/': {
    title: 'Aimbot – Bone Select and No Recoil | Palworld Hacks',
    description:
      'aimbot and no recoil for Palworld Pro tier—Bone Select, Soft Aim, Trigger Bot and recoil control before secure checkout.',
  },
  '/blog/cheat-codes/': {
    title: 'Palworld console codes vs live-server load | Hacks',
    description:
      'Admin console codes only work where you are admin. See what works on Official servers and when a private loader with ESP and aimbot is the right buy.',
  },
  '/blog/console-tips/': {
    title: 'From practice commands to live Palworld ES | Hacks',
    description:
      'Outgrown private-server practice? Compare undetected ESP and aimbot tiers for live PvP—Lite, Pro and Elite with secure checkout.',
  },
  '/support/': {
    title: 'Palworld Hacks Discord Support | Loader Help Tickets',
    description:
      'Discord support for loader errors, HWID Spoofer setup and checkout—open a ticket with your order ID, issue type and screenshots for fast help.',
  },
  '/blog/buy-guide/': {
    title: 'Palworld checkout buy guide: Lite, Pro & E | Hacks',
    description:
      'Buy guide: step-by-step Palworld checkout—choose Lite, Pro or Elite, pay securely and unlock the operator portal for loader download.',
  },
  '/blog/features/': {
    title: 'Features – Palworld Hacks by tier | Meet the palworldhacks',
    description:
      'Features by tier for Palworld cheats—ESP, aimbot, no recoil, farm helpers and Skin Changer on Lite, Pro and Elite before you buy.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Data, Cookies & Your Rights',
    description:
      'Privacy policy for palworldhacks.com—cookies, analytics, Discord ticket data, checkout partners, retention and your rights when browsing or purchasing.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
