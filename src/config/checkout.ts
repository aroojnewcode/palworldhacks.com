import { CHECKOUT_URLS, PALWORLD_CHECKOUT_URL } from './checkout-redirects.mjs';

/** Zadeyo affiliate checkout destinations. */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  palworld: 'palworld',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Zadeyo affiliate URL for visible “Get access” / buy CTAs (same tab — no target=_blank). */
export function checkoutPath(_product: CheckoutProduct = 'palworld'): string {
  return PALWORLD_CHECKOUT_URL;
}

/** Internal /go/* path (blog links, bookmarks); 302 to Zadeyo via public/_redirects. */
export function checkoutRedirectPath(product: CheckoutProduct = 'palworld'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Alias used by /go/[slug] static redirect pages. */
export function checkoutExternalUrl(_product: CheckoutProduct = 'palworld'): string {
  return PALWORLD_CHECKOUT_URL;
}

/** Default product checkout redirect (replaces legacy Discord CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('palworld');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(_slug: string): string {
  return PALWORLD_CHECKOUT_URL;
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  const normalized = href.startsWith('/') ? href : `/${href}`;
  const goMatch = normalized.match(/^\/go\/([^/]+)\/?$/);
  if (goMatch) {
    return PALWORLD_CHECKOUT_URL;
  }

  if (!href.startsWith('http')) {
    return normalized;
  }

  if (href.includes('zadeyo.com/go/')) {
    return PALWORLD_CHECKOUT_URL;
  }

  if (href.includes('/products/') || href.includes('%2Fproducts%2F')) {
    return PALWORLD_CHECKOUT_URL;
  }

  return href;
}
