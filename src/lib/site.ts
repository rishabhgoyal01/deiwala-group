// Single source of truth for the public site URL.
// Set NEXT_PUBLIC_SITE_URL in Vercel to the live domain, e.g. https://deiwalagroup.com
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
).replace(/\/$/, '');
