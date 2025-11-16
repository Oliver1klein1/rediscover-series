import { MetadataRoute } from 'next';
import { getCanonicalUrl } from '@/src/data/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rediscover-series.com';
  const sitemapUrl = getCanonicalUrl('/sitemap.xml');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: sitemapUrl,
  };
}

