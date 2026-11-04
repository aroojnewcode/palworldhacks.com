export interface Review {
  id: string;
  name: string;
  handle: string;
  rating: 1 | 2 | 3 | 4 | 5;
  product: string;
  productHref: string;
  title: string;
  body: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Marcus K.',
    handle: 'update_scout',
    rating: 5,
    product: 'Palworld Elite',
    productHref: '/products/palworld-cheats/elite/',
    title: 'Elite ESP + farm helpers on dedicated co-op',
    body: 'Bought Elite before a major update. Player ESP and loot markers made dungeon runs cleaner, and Auto Farm Helpers cut grind time. Portal presets loaded fast—Discord helped me tune aimbot smoothing on day one.',
    date: 'Sep 12, 2026',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Elena R.',
    handle: 'stream_safe',
    rating: 5,
    product: 'Palworld Elite',
    productHref: '/products/palworld-cheats/elite/',
    title: 'Stream-proof overlays for creators',
    body: 'Needed stream-proof so OBS never shows ESP. Worked on game capture after the checklist in the blog. Soft aim stays human with the default FOV circle—no snap reports from my duo.',
    date: 'Sep 4, 2026',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Jordan P.',
    handle: 'rifle_main',
    rating: 5,
    product: 'Palworld Elite',
    productHref: '/products/palworld-cheats/elite/',
    title: 'No recoil profiles for assault rifles & bows',
    body: 'Per-weapon recoil profiles saved my sprays on Community. Started conservative like the guide said, then tightened. Patch after Thursday update landed before I joined a server again.',
    date: 'Aug 28, 2026',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Sam T.',
    handle: 'hwid_reset',
    rating: 5,
    product: 'HWID Spoofer',
    productHref: '/products/palworld-cheats/hwid-spoofer/',
    title: 'HWID Spoofer after an EAC hardware flag',
    body: 'Fresh accounts died instantly on one PC. Followed the restore-point checklist, spoofed, cold reboot, then verified IDs. Got back into Palworld the same night—support walked me through Discord.',
    date: 'Aug 21, 2026',
    verified: true,
  },
  {
    id: 'r5',
    name: 'Chris V.',
    handle: 'loot_radar',
    rating: 4,
    product: 'Palworld Elite',
    productHref: '/products/palworld-cheats/elite/',
    title: 'Loot ESP & radar for roams',
    body: 'Radar + loot ESP is what I use most. Distance filters took a session to dial in, but once set I stop walking into afk players. Would love more biome presets out of the box—still a solid buy.',
    date: 'Aug 15, 2026',
    verified: true,
  },
  {
    id: 'r6',
    name: 'Priya N.',
    handle: 'skin_preview',
    rating: 5,
    product: 'Skin Changer',
    productHref: '/products/palworld-cheats/unlock-all/',
    title: 'Skin Changer for loadout previews',
    body: 'Bought Unlock All standalone to preview weapon and clothing skins locally. Other players still see my real inventory, which matches the product page. Fast checkout and portal download.',
    date: 'Aug 9, 2026',
    verified: true,
  },
  {
    id: 'r7',
    name: 'Diego M.',
    handle: 'ugc_help',
    rating: 4,
    product: 'UGC Recovery',
    productHref: '/products/palworld-cheats/ugc/',
    title: 'UGC appeal workspace after a Steam hold',
    body: 'UGC organized my ban docs and follow-ups—no magic unban, which they are honest about. Status tracking made Discord tickets clearer. Pairing with HWID tips from the blog helped decide next steps.',
    date: 'Aug 2, 2026',
    verified: true,
  },
  {
    id: 'r8',
    name: 'Alex W.',
    handle: 'patch_day',
    rating: 5,
    product: 'Palworld Elite',
    productHref: '/products/palworld-cheats/elite/',
    title: 'Loader updates after EAC patches',
    body: 'Status banner + Discord #status kept me from launching mid-patch. New loader build showed up within the window they advertise. Checkout to first raid was under an hour with portal presets.',
    date: 'Jul 26, 2026',
    verified: true,
  },
  {
    id: 'r9',
    name: 'Nina L.',
    handle: 'duo_main',
    rating: 5,
    product: 'Palworld Elite',
    productHref: '/products/palworld-cheats/elite/',
    title: 'Soft aim that does not look obvious',
    body: 'Bone select and smoothing defaults feel fair on dedicated servers. Duo noticed fewer wild snaps versus free cheats we tried years ago. Support answered a loader question same evening.',
    date: 'Jul 18, 2026',
    verified: true,
  },
];

export function getReviewStats(items: Review[] = reviews) {
  const count = items.length;
  const sum = items.reduce((acc, r) => acc + r.rating, 0);
  const average = count ? Math.round((sum / count) * 10) / 10 : 0;
  const fiveStar = items.filter((r) => r.rating === 5).length;
  return { count, average, fiveStar, verified: items.filter((r) => r.verified).length };
}

export function getRatingBreakdown(items: Review[] = reviews) {
  const total = items.length || 1;
  return ([5, 4, 3, 2, 1] as const).map((stars) => {
    const count = items.filter((r) => r.rating === stars).length;
    return {
      stars,
      count,
      pct: Math.round((count / total) * 100),
    };
  });
}

export function getReviewProducts(items: Review[] = reviews) {
  return [...new Set(items.map((r) => r.product))];
}
