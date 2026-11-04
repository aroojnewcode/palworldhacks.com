/** Zadeyo affiliate checkout — all CTAs use this Palworld product link. */
export const PALWORLD_CHECKOUT_URL =
  'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fpalworld';

/** Checkout destinations keyed by internal product id (all map to Palworld checkout). */
export const CHECKOUT_URLS = {
  palworld: PALWORLD_CHECKOUT_URL,
  skinChanger: PALWORLD_CHECKOUT_URL,
  hwidSpoofer: PALWORLD_CHECKOUT_URL,
  ugc: PALWORLD_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/palworld', CHECKOUT_URLS.palworld],
  ['/go/palworld/', CHECKOUT_URLS.palworld],
  ['/go/rust', CHECKOUT_URLS.palworld],
  ['/go/rust/', CHECKOUT_URLS.palworld],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
