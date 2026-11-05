import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { palworldBlogImage } from '../config/media';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Palworld Hacks',
    domain: 'palworldhacks.com',
    title: 'Pal Esp – Buy Palworld Hacks & Cheats 2026',
    description:
      'Shop undetected Palworld cheats for Steam PC—player ESP, loot ESP, soft aim, no recoil and stream-proof overlays. Compare Lite, Pro and Elite at.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Palworld — anti-cheat build online',
    eyebrow: 'Undetected Palworld Hacks & Cheats',
    title: 'Undetected Palworld Hacks & Cheats 2026 — Pal ESP, Aimbot & Steam PC Tools',
    subtitle:
      'Buy undetected Palworld cheats for co-op and PvP on Steam—Pal ESP, loot and base ESP, soft aim and no recoil. Compare Lite, Pro and Elite, then checkout for instant loader access.',
    ctaPrimary: 'Get access',
    ctaPrimaryHref: PRIMARY_CHECKOUT_PATH,
    ctaDiscord: 'Shop products',
    modesLabel: 'Play modes',
    modes: ['Co-op host', 'Dedicated', 'Community', 'PvP servers'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Tiers', strong: 'Lite · Pro · Elite' },
      { label: 'Discord support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'What you buy in one Palworld cheat package',
    subtitle: 'Pal ESP, aimbot, no recoil and utilities—priced by tier, delivered after checkout, updated every major Palworld patch.',
    items: [
      {
        title: 'Aimbot / Soft Aim',
        subtitle: 'Win Fights. Look Human.',
        desc: 'Aimbot and Soft Aim with bone select, smoothing and FOV limits—tuned for assault rifles, shotguns and bows in Palworld PvP and base raids.',
        bullets: [
          'Aimbot with smoothing and FOV circle limits',
          'Soft Aim that pulls the crosshair without hard snaps',
          'Bone select: head, chest or nearest bone',
          'Weapon profiles for ARs, shotguns, crossbows and bows',
          'Humanized delay sliders and visibility checks',
        ],
        tags: ['palworld aimbot', 'soft aim', 'bone select'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See Every Threat.',
        desc: 'Readable Pal and player ESP that stays clean during base raids, tower fights and open-world roams.',
        bullets: [
          'Boxes, skeletons, names and distance',
          'Health, weapon and Pal partner indicators',
          'Guild and team color filters',
        ],
        tags: ['palworld esp', 'player esp', 'pal esp'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-1',
      },
      {
        title: 'Loot & Resource ESP',
        subtitle: 'Find It Before They Do.',
        desc: 'Highlight chests, Pal spheres, ore nodes, bases and dropped loot so you spend less time searching and more time capturing Pals.',
        bullets: [
          'Chests, supply drops and rare loot markers',
          'Ore, wood and crafting resource nodes',
          'Base, Palbox and fast-travel alerts',
        ],
        tags: ['loot esp', 'resource esp', 'ore esp'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'No Recoil / Spread',
        subtitle: 'Hold the Spray.',
        desc: 'Recoil and spread control with per-weapon profiles—start conservative and tighten as you get comfortable.',
        bullets: ['Per-weapon recoil compensation', 'Spread reduction sliders', 'Attachment-aware profiles in the portal'],
        tags: ['no recoil', 'no spread', 'recoil control'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-2',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra Tools for Clutch Moments.',
        desc: 'Radar, Skin Changer and quality-of-life tools beyond raw ESP and aim assist.',
        bullets: [
          'Radar: Mini-map overlay for players and loot',
          'Skin Changer: Preview skins locally on your client',
          'Trigger Bot: Fire when the crosshair lands on a target',
          'Stream Proof: Hide overlays from OBS capture',
        ],
        tags: ['radar', 'skin changer', 'trigger bot'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Auto Farm Helpers',
        subtitle: 'Efficient Farm. Zero Grind.',
        desc: 'Speed up resource runs with helpers that stay humanized—so you farm faster without obvious bot patterns.',
        bullets: [
          'Auto gather assist for ore, wood and berries',
          'Node-to-node route hints across biomes',
          'Safe stop when players or hostile Pals appear on ESP',
          'Patch-day farm presets after Palworld updates',
        ],
        tags: ['auto farm', 'resource helper', 'farm bot'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-5',
      },
      {
        title: 'FOV Hack',
        subtitle: 'See More of the Fight.',
        desc: 'Widen your field of view for better awareness in close quarters and open-field fights.',
        bullets: ['Adjustable FOV range', 'Quick reset to default FOV', 'Pairs with Player ESP and radar'],
        tags: ['fov hack', 'field of view', 'awareness'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-5 lg:row-start-5',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same presets on every PC—portal updates track Palworld updates and anti-cheat patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-5',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Why buy Palworld Hacks here—patches, not empty promises',
    subtitle:
      'Most Palworld cheat shops ship stale loaders, obvious aimbots, and ticket bots. We built palworldhacks.com around patch-day delivery, humanized aim assist, and real Discord support.',
    usLabel: 'Palworld Hacks',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'Anti-cheat-aware builds pushed within hours of Palworld updates—check Discord #status before you join co-op or PvP.',
      },
      {
        title: 'Humanized aim & delays',
        desc: 'Smoothing, FOV limits and conservative defaults mimic real player movement—not instant snaps that get you reported and banned.',
      },
      {
        title: 'Real Discord support',
        desc: 'Open a ticket for loader setup, configs and HWID resets—real staff, not copy-paste FAQ replies.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Palworld process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Weapon, ESP and per-server profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord tickets—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Palworld or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Discord support',
        desc: 'Open a ticket for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active users',
        desc: 'Palworld PC players running Pal ESP, aim assist and utilities from palworldhacks.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first raid in just',
    titleHighlight: 'three simple steps',
    intro:
      'Buy a tier, unlock the portal, download the loader, load presets, and join Palworld on Steam PC—with Discord support if anything blocks you.',
    ctaPrimary: 'Shop products',
    ctaSecondary: 'Pre-purchase FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your portal dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import weapon and ESP presets, and tune aim assist plus overlay sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & join Palworld',
        desc: 'Check the live status banner, launch Steam Palworld, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Palworld on Steam after updates.',
    items: ['Windows 10 & 11', 'Steam', 'Palworld client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Cheat tiers',
    title: 'Palworld Cheat Tiers',
    subtitle: 'Full Palworld suite—ESP, aimbot, no recoil, farm helpers, Skin Changer, and priority patch delivery.',
    viewAll: 'Shop all tiers',
    explore: 'Get access',
    items: [
      {
        badge: 'Starter',
        tier: 'Lite',
        name: 'Lite',
        title: 'Palworld Lite Cheats — ESP, Radar & FOV for Steam PC',
        desc: 'Lite tier is awareness-first—player ESP, loot ESP, radar and FOV changer without aim automation. Ideal for Official and co-op servers when you want info with minimal report risk.',
        features: ['Player & Pal ESP', 'Loot & resource ESP', 'Radar overlay', 'FOV changer', 'Stream-proof mode', 'Cloud config backup'],
        more: 12,
        href: `${productBase}lite/`,
        variant: 'essential',
      },
      {
        badge: 'Popular',
        tier: 'Pro',
        name: 'Pro',
        title: 'Palworld Pro Cheats — Aimbot, ESP & No Recoil',
        desc: 'Pro adds aimbot, soft aim, no recoil and weapon profiles on top of every Lite module—the most popular combat tier for co-op and PvP on Steam PC.',
        features: ['All Lite ESP modules', 'Aimbot / Soft Aim', 'No Recoil / Spread', 'Weapon profiles', 'Target selector', 'Stream-proof mode'],
        more: 28,
        href: `${productBase}pro/`,
        variant: 'popular',
      },
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Palworld Elite Cheats — Full ESP, Aimbot & Farm Suite',
        desc: 'Elite tier is the full private suite—aimbot, no recoil, player ESP, loot ESP, auto farm helpers, Skin Changer and priority patch delivery for Steam PC.',
        features: ['Aimbot / Soft Aim', 'No Recoil / Spread', 'Player & Loot ESP', 'Auto Farm Helpers', 'Skin Changer', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'All Palworld Cheat Products & Utilities',
    subtitle:
      'Products hub for Steam PC—browse Lite, Pro and Elite tiers plus HWID Spoofer, UGC and Unlock All utilities with module lists and secure checkout.',
    viewAll: 'Shop all products',
    get: 'Get access',
    explore: 'Get access',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'Palworld HWID Spoofer — Reset Hardware After Ban',
        subtitle: 'HWID spoofer for Steam PC after an EAC hardware flag',
        desc: 'This HWID spoofer rotates disk serials, MAC addresses and GPU IDs after Easy Anti-Cheat flags your machine—portal setup included before you relaunch on Steam.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'Palworld UGC — Steam & Anti-Cheat Account Recovery',
        subtitle: 'Appeals for banned Palworld accounts',
        desc: 'Buy Palworld UGC recovery tools for Steam holds, EAC bans and community server restrictions—custom appeal workflows, case docs and status tracking.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Unlock All — Skin Changer Cosmetics Locally',
        subtitle: 'Unlock All and Skin Changer on Steam PC',
        desc: 'Unlock All with Skin Changer previews weapon skins, clothing and rare variants locally—client-side cosmetics without Steam market purchases.',
        features: ['Weapon skin swap', 'Clothing & item customizer', 'Rare skin preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Palworld Cheat Buy Guides',
    subtitle: 'Tier comparison guides, ESP and aimbot module explainers, and checkout walkthroughs—pick a plan with confidence.',
    latestTitle: 'Palworld Hacks blog — Lite & Elite ESP and Aimbot modules',
    latestSubtitle: 'Transactional guides to help you choose a tier and complete secure checkout for ESP, aimbot and utilities.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'Browse buy guides',
    read: 'Read & buy',
    items: [
      {
        tag: 'Guides',
        title: 'Palworld console codes vs live-server loaders',
        slug: 'cheat-codes',
        image: palworldBlogImage('cheat-codes'),
        desc: 'Admin console codes only work where you are admin. See what works on Official servers and when a private loader with ESP and aimbot is the right buy.',
        date: 'Aug 20, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: 'From practice commands to live Palworld ESP & aimbot',
        slug: 'console-tips',
        image: palworldBlogImage('console-tips'),
        desc: 'Outgrown private-server practice? Compare undetected ESP and aimbot tiers for live PvP—Lite, Pro and Elite with secure checkout.',
        date: 'Aug 19, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'How to get Palworld cheats working after checkout',
        slug: 'use-codes',
        image: palworldBlogImage('use-codes'),
        desc: 'Bought Palworld cheats? Portal login, loader download, conservative presets and first-launch checks so your ESP and aimbot run on Official and Community servers.',
        date: 'Aug 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: 'Cheat features by tier: ESP, aimbot, no recoil & skins',
        slug: 'features',
        image: palworldBlogImage('features'),
        desc: 'Feature guide: Player ESP, Loot ESP, Aimbot, No Recoil, FOV hack and Skin Changer by Lite, Pro and Elite tier—compare modules before checkout.',
        date: 'Aug 18, 2026',
        readTime: '12 min read',
      },
      {
        tag: 'Guides',
        title: 'Private loader vs admin commands on live servers',
        slug: 'console-cmds',
        image: palworldBlogImage('console-cmds'),
        desc: 'Admin commands do not work on servers you do not own. Why buyers choose a private loader with ESP and aimbot—tiers, checkout and portal access.',
        date: 'Aug 17, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Palworld Lite vs Pro: which cheat tier to purchase',
        slug: 'lite-vs-pro',
        image: palworldBlogImage('lite-vs-pro'),
        desc: 'Lite for ESP and radar, Pro for aimbot and no recoil. Compare tiers side by side and buy the Palworld cheat tier that fits your server and playstyle.',
        date: 'Aug 16, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Palworld Elite cheats: full suite pricing & who should upgrade',
        slug: 'elite',
        image: palworldBlogImage('elite'),
        desc: 'Elite is the full Palworld cheats suite: aimbot, ESP, Auto Farm Helpers, Skin Changer and priority patches. See who should buy Elite and how to check out.',
        date: 'Aug 16, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Palworld aimbot & no recoil: Pro tier combat tools',
        slug: 'aimbot',
        image: palworldBlogImage('aimbot'),
        desc: 'Buy Palworld aimbot and no recoil with Pro tier. See what Aimbot, Soft Aim, Bone Select and No Recoil do, then compare tiers and get access.',
        date: 'Aug 15, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Palworld ESP & radar: Lite setup after purchase',
        slug: 'esp',
        image: palworldBlogImage('esp'),
        desc: 'Buy undetected Palworld ESP and radar with Lite. See what you get, how fast setup is after checkout and when to upgrade to Pro or Elite.',
        date: 'Aug 15, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Palworld FOV hack with ESP awareness (Lite+)',
        slug: 'fov',
        image: palworldBlogImage('fov'),
        desc: 'FOV hack ships on Lite and carries through Pro and Elite. Buy a wider view with ESP for base fights and open-field PvP—compare tiers and get access.',
        date: 'Aug 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Palworld Skin Changer / Unlock All utility',
        slug: 'skins',
        image: palworldBlogImage('skins'),
        desc: 'Buy Palworld Skin Changer standalone or bundled with Elite. Preview weapon skins and clothing locally—see what you get and where to check out.',
        date: 'Aug 14, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'EAC patch day checklist before checkout',
        slug: 'eac-patch',
        image: palworldBlogImage('eac-patch'),
        desc: 'Palworld or anti-cheat patch just dropped? Check live status, pick the right tier and buy safely—patch-day checklist for checkout and first launch.',
        date: 'Aug 13, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Palworld HWID Spoofer after a ban',
        slug: 'hwid',
        image: palworldBlogImage('hwid'),
        desc: 'Hardware flagged after an EAC ban? Buy Palworld HWID Spoofer, compare it to a new account, and see when UGC appeal help fits. Checkout at palworldhacks.com.',
        date: 'Aug 13, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Checkout buy guide: Lite, Pro & Elite (2026)',
        slug: 'buy-guide',
        image: palworldBlogImage('buy-guide'),
        desc: 'Step-by-step buy guide: choose Lite, Pro or Elite, pay at secure checkout and unlock your portal. The 2026 walkthrough from tier pick to first launch.',
        date: 'Aug 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Pro aimbot bone select & weapon profiles',
        slug: 'bones',
        image: palworldBlogImage('bones'),
        desc: 'Buy Pro for aimbot bone select and per-weapon recoil profiles on AK, LR-300, MP5 and bolt. See example profiles and get access.',
        date: 'Aug 12, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'EAC errors vs buying UGC recovery / HWID help',
        slug: 'eac-error',
        image: palworldBlogImage('eac-error'),
        desc: 'EAC failed to initialize is usually not a ban. Quick checks first, then when to buy UGC appeal workflows or HWID Spoofer. Then get access to Palworld cheats.',
        date: 'Aug 11, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy external Palworld cheats: safer loader delivery',
        slug: 'external',
        image: palworldBlogImage('external'),
        desc: 'Why buyers choose external Palworld cheats: private loader, portal updates and cloud configs. Compare tiers and get access instead of risky free downloads.',
        date: 'Aug 11, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy stream-proof Palworld cheats for creators',
        slug: 'stream-proof',
        image: palworldBlogImage('stream-proof'),
        desc: 'Stream Proof hides your ESP and aimbot overlay from OBS and Game Bar. Included on every tier—compare Palworld cheats for creators and get access.',
        date: 'Aug 10, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-session without tabbing through chaos.',
    items: [
      { num: '01', label: 'Combat', title: 'Aim assist that adapts to your weapon', desc: 'Aimbot, Soft Aim, Bone Select and smoothing in one combat tab.' },
      { num: '02', label: 'Vision', title: 'ESP that stays readable', desc: 'Filter by distance, team color, loot type and resource node.' },
      { num: '03', label: 'Radar', title: 'Awareness on a compact overlay', desc: 'Radar with players, loot and airdrop hints on a compact overlay.' },
      { num: '04', label: 'Weapons', title: 'Per-weapon recoil profiles', desc: 'Save AK, LR-300, MP5 and bow profiles and swap with hotkeys.' },
      { num: '05', label: 'Movement', title: 'Farm & movement helpers', desc: 'Auto Farm Helpers, FOV hack and utility tools for efficient resource runs.' },
      { num: '06', label: 'Profiles', title: 'Configs for every server type', desc: 'Separate Official, Community and Vanilla presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Palworld profile you can reuse every session.',
    ctaLabel: 'Shop products',
    ctaHref: productBase,
    ctaSecondary: 'Pre-purchase FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check anti-cheat status',
        desc: 'Read the live banner on palworldhacks.com before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches how you play.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune smoothing on a test server.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save Official and Community presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Palworld plays.',
    items: [
      { num: '01', title: 'Update-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you join co-op or a server.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe smoothing and ESP ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real Discord support', desc: 'Stuck on the loader or weapon configs? Discord staff walk you through it—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Palworld Hacks Discord Support',
    subtitle: 'Open a Discord ticket for Palworld loader errors, HWID Spoofer setup and checkout help.',
    channels: [
      {
        icon: 'messageCircle',
        title: 'Discord support',
        desc: 'Join Discord and open a ticket for loader, HWID, and account issues.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your Discord ticket',
    ticketItems: [
      { title: 'Order ID', desc: 'Your Zadeyo / checkout order ID from the purchase confirmation.' },
      { title: 'Issue type', desc: 'Loader, HWID Spoofer, Skin Changer, or account access—say which one.' },
      { title: 'Error screenshot', desc: 'Exact error text or a screenshot from the loader or game.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Palworld Hacks FAQ — Tiers, Checkout & EAC Risk',
    subtitle: 'Clear answers on Palworld cheat tiers, EAC risk, Windows support and how checkout delivery works.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Palworld cheats are online?',
        a: 'The live status banner is on palworldhacks.com and in the Discord #status channel. Always check after a Palworld update, patch or EAC update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Palworld.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Palworld cheats?',
        a: 'Yes—any modification carries risk. Easy Anti-Cheat, Pocketpair and server admins keep evolving detection and reports. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Palworld via Steam on Windows 10/11 64-bit only. macOS, Linux and consoles are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Skin Changer live at palworldhacks.com/products/palworld-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Buy undetected Palworld hacks & cheats — Pal ESP, aimbot & utilities for Steam PC. Secure checkout at palworldhacks.com',
    explore: 'Shop',
    exploreLinks: [
      { href: '/', label: 'What you can buy', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/palworld-cheats/elite/', label: 'Buy Elite Palworld cheats', ariaLabel: 'Elite cheats' },
      { href: '/products/palworld-cheats/', label: 'Shop all products', ariaLabel: 'Products' },
      { href: '/reviews/', label: 'Buyer reviews', ariaLabel: 'Reviews' },
      { href: '/blog/', label: 'Buy guides & tier tips', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About palworldhacks — Meet Our Palworld Hacks Store (Steam PC)',
      description:
        'Meet the team behind palworldhacks.com—the cheats store for undetected ESP, aimbot and Steam PC utilities, with update-day delivery and Discord help after checkout.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Palworld Hacks (palworldhacks.com) is a buyer-focused storefront for undetected Palworld tools on Steam PC. We publish tier comparisons, setup guides, and honest risk notes so you know what you are purchasing before checkout—not vague marketing copy.',
            'We are not Pocketpair Studios and we are not affiliated with Easy Anti-Cheat. Palworld is a trademark of Pocketpair Inc. Product names on this site describe software categories (ESP, aimbot, utilities), not official game features.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Combat tiers: Lite (player ESP, loot ESP, radar, FOV hack), Pro (adds aimbot, soft aim, no recoil, bone select), and Elite (full suite including farm helpers, Skin Changer, and priority patch queue). Each tier page lists modules, screenshots, and system requirements for Windows 10/11.',
            'Utilities sold separately: HWID Spoofer for hardware-flag recovery, UGC tools for structured ban and account appeals, and Skin Changer / Unlock All for local cosmetic preview. The utilities comparison page explains which tool fits a ban versus a cosmetic goal.',
            'Every listing links to secure checkout through our payment partner. After purchase, your operator portal provides the loader, setup guide, and config library for the tier you bought.',
          ],
        },
        {
          heading: 'How buying works',
          paragraphs: [
            'Use Get access on the homepage or product page to open checkout. You will complete payment on our partner checkout, then receive portal access for downloads. Keep your order confirmation email—support tickets ask for that order ID.',
            'Not sure which tier to pick? Start with the Lite vs Pro guide on the blog, the features guide for every module, or the pre-purchase FAQ. Buyer reviews on /reviews/ describe real setups on Official and Community servers (ESP tuning, stream-proof overlays, spoofer workflows).',
            'We do not sell loader files through Discord DMs or random download links. Only use files from your portal after checkout.',
          ],
        },
        {
          heading: 'How we update after Palworld patches',
          paragraphs: [
            'Palworld update days and Easy Anti-Cheat updates can disable modules until a new build ships. We post status on the homepage banner and in Discord #status when builds are online, testing, or offline.',
            'Elite buyers get priority in the patch queue when slots are available. If the banner shows offline, do not launch modules—wait for the updated loader and read the EAC patch day checklist on the blog before rejoining servers.',
            'Blog posts cover post-patch workflows: checking status, downloading the latest loader, loading conservative presets, and when HWID Spoofer or UGC help applies after a ban.',
          ],
        },
        {
          heading: 'Proof and self-serve answers',
          paragraphs: [
            'The FAQ answers tier differences, ban risk, Windows/Steam requirements, and what happens after checkout. The forum hosts buyer-style Q&A on ESP setup, aim smoothing, and utility choice—search there before opening a ticket.',
            'Product pages include gameplay screenshots updated for current Palworld updates. Reviews are labeled by product (Elite, HWID Spoofer, UGC, Skin Changer) so you can read feedback relevant to your purchase.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Loader errors, HWID Spoofer setup, and checkout questions go through Discord tickets (linked on the Support page). Include your order ID, Windows build, Palworld server type, and a screenshot of any error text.',
            'For billing or refund policy questions, read the Terms of Sale first—then open a ticket if your case matches the supported refund criteria (fault on our side on a supported setup with the status banner online).',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy — Data, Cookies & Checkout',
      description:
        'Privacy policy for palworldhacks.com: how we handle cookies, analytics, Discord tickets, checkout partners, data retention and your rights as a shopper.',
      sections: [
        {
          heading: 'Scope',
          paragraphs: [
            'This privacy policy covers palworldhacks.com—the marketing site, guides, and product pages. It does not govern third-party checkout, payment processing, or your operator portal; those services have their own policies when you leave our domain.',
            'Last updated: October 2026. We may revise this page when our analytics or support tools change; material updates will be reflected in the date above.',
          ],
        },
        {
          heading: 'Information we collect',
          paragraphs: [
            'When Google Analytics is enabled, we may receive aggregated metrics such as pages viewed, referral source, device category, browser, and approximate geography. We use this to see which buy guides and product pages help shoppers—not to build individual advertising profiles on this site.',
            'If you open a Discord support ticket, we see what you send there: Discord username, message text, attachments you choose to upload, and any order ID or email you provide for billing lookup.',
            'We do not ask for your Palworld Steam password on palworldhacks.com. We do not store payment card numbers, CVV codes, or full billing addresses on this domain.',
          ],
        },
        {
          heading: 'Information we do not sell',
          paragraphs: [
            'We do not sell your personal information to data brokers. Affiliate checkout links (for example through our Zadeyo partner URLs) may use their own tracking when you complete a purchase on their domain—that processing is governed by the checkout provider’s policy, not this page.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics inform content updates: which FAQ topics need expansion, which product pages get the most pre-purchase traffic, and whether mobile readers can load guides quickly.',
            'Support data is used only to troubleshoot loader issues, utility setup, or order access. Staff may reference your ticket history if you follow up on the same order ID.',
          ],
        },
        {
          heading: 'Cookies and local storage',
          paragraphs: [
            'Analytics cookies (when enabled) measure traffic volume. You can block or delete cookies in your browser; the site remains readable without them.',
            'We store theme preference (light or dark) in local storage so your choice persists between visits. That value stays on your device unless you clear site data.',
            'We do not use advertising cookies on palworldhacks.com for retargeting across unrelated websites.',
          ],
        },
        {
          heading: 'Checkout and delivery partners',
          paragraphs: [
            'Clicking Get access opens our partner checkout (Zadeyo) in the same browser tab to pay and receive portal credentials. Name, email, payment method, and fraud-prevention signals are handled by that provider.',
            'We may receive confirmation that a purchase completed (for example order ID and product tier) through support workflows you initiate—we do not host the payment form itself.',
          ],
        },
        {
          heading: 'Security',
          paragraphs: [
            'palworldhacks.com is served over HTTPS. Do not send payment details or portal passwords through Discord tickets; use the official checkout and portal only.',
          ],
        },
        {
          heading: 'Data retention',
          paragraphs: [
            'Analytics retention follows the configuration in Google Analytics when the service is active. Discord ticket content is kept as long as needed to resolve the issue and for reasonable follow-up on the same order.',
            'You may ask us to delete support messages that are no longer needed after a case is closed, subject to legal or fraud-prevention holds.',
          ],
        },
        {
          heading: 'Your choices and rights',
          paragraphs: [
            'You can opt out of analytics cookies via browser settings or extensions. For portal or billing data held by the checkout provider, contact that provider using the links in your order email.',
            'For privacy questions about palworldhacks.com or Discord tickets, open a ticket from the Support page. For purchase disputes, see the Terms of Sale.',
          ],
        },
        {
          heading: 'Children',
          paragraphs: [
            'palworldhacks.com is not directed at children under 13, and we do not knowingly collect personal information from children. Palworld is rated for mature audiences; purchasers must comply with Steam and local age rules.',
          ],
        },
      ],
    },
    terms: {
      title: 'Palworld Hacks Terms of Sale',
      description:
        'Rules for purchasing Palworld cheat licenses on palworldhacks.com—delivery, personal use, refunds, EAC risk and acceptable product use.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using palworldhacks.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Palworld cheat tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, Skin Changer / Unlock All) delivered through a portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Palworld or anti-cheat updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. palworldhacks.com does not process or store payment card numbers.',
            'After purchase, use the portal linked from your order flow to download the current loader and setup guide before launching Palworld.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EAC or server bans, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Steam Palworld on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—open a ticket on our Discord. Include your order ID, Windows version, Palworld build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Palworld can conflict with game updates and Easy Anti-Cheat. Pocketpair and server admins may take action against accounts. You use this software at your own risk, including possible bans.',
            'Check the homepage status banner before every session. Do not join servers while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, join our Discord and open a ticket via the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Palworld Hacks Discord Support',
      description:
        'Get Discord support for Palworld loader errors, HWID Spoofer setup and checkout questions at palworldhacks.com.',
      sections: [
        {
          heading: 'Before you open a ticket',
          paragraphs: [
            'Check the live status banner on the homepage and in Discord #status—especially after a Palworld update or anti-cheat patch. If status is offline, wait for the new build instead of forcing an old loader.',
            'Download the loader only from your operator portal (linked in your order email). Do not run files from DMs, YouTube links, or forum attachments.',
            'Have your checkout order ID, Windows version (10 or 11), Steam Palworld build, and a screenshot of the exact error ready. Redact unrelated personal info from screenshots when possible.',
          ],
        },
        {
          heading: 'Loader and in-game issues',
          paragraphs: [
            'Start the loader before Palworld, use the setup guide tier for your purchase, and test on a private or low-pop server with conservative ESP ranges and aim smoothing.',
            'If Easy Anti-Cheat shows “failed to initialize,” read the EAC errors guide on the blog first—many cases are driver or overlay conflicts, not a ban. Include whether the issue started right after a patch.',
            'For aimbot or ESP tuning, say which weapon and server type (Official, Community, Modded) you use. Staff can suggest portal presets; they cannot guarantee ban immunity.',
          ],
        },
        {
          heading: 'HWID Spoofer and utilities',
          paragraphs: [
            'HWID tickets: note whether you are on a fresh Steam account, if EAC flagged hardware, and whether you ran the compatibility scan from the spoofer guide. Follow cleanup steps before relaunching Palworld.',
            'UGC tickets: describe ban type (Steam, EAC, server admin) and what appeal steps you already tried. UGC tools organize cases—they do not automatically remove bans.',
            'Skin Changer tickets: confirm you purchased the utility or Elite tier that includes it, and whether the issue is preview-only (client-side) versus a loader error.',
          ],
        },
        {
          heading: 'Checkout and portal access',
          paragraphs: [
            'If payment succeeded but portal access is missing, wait a few minutes and check spam for the order email. Open a ticket with the order ID and the email used at checkout—do not share card numbers in Discord.',
            'Wrong tier purchased? Ask in a ticket before rebuying; staff may advise upgrade paths through the portal when available.',
            'Refund requests must match the criteria in our Terms of Sale (fault on our side on a supported setup with status online). Change-of-mind or ban-related refunds are not offered.',
          ],
        },
        {
          heading: 'Buying help (pre-purchase)',
          paragraphs: [
            'Compare Lite, Pro and Elite on the products hub, read Lite vs Pro and the features guide, or search the FAQ for tier and ban-risk questions. Reviews on /reviews/ are grouped by product for ESP, Elite, spoofer, and UGC feedback.',
            'Utility shoppers: use the utilities comparison table for HWID Spoofer vs UGC vs Skin Changer, then open the product page for screenshots and requirements before Get access.',
          ],
        },
        {
          heading: 'What to expect from support',
          paragraphs: [
            'Tickets are answered in Discord when staff are online—peak times follow EU and US evenings. One ticket per issue keeps threads clear; bump only after 24 hours with new logs if nothing changed.',
            'We do not provide ban guarantees, server unbans, or instructions to evade Pocketpair rules. We help with loader delivery, setup, and product behavior described on palworldhacks.com.',
          ],
        },
      ],
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Get access',
    browseCheatsMobile: 'Get access',
    homeAria: 'Palworld Hacks home',
    checkoutAria: 'Get access to Palworld Hacks',
    discordAria: 'Join Palworld Hacks on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
