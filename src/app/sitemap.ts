import type { MetadataRoute } from 'next';
import products from '@/data/products.json';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ['', '/products', '/about', '/contact'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const categoryRoutes = categories.map((category) => ({
    url: `${siteUrl}/products/${category}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
