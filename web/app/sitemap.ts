import { MetadataRoute } from 'next';
import { getAllBooks } from '@/lib/books';
import { getCanonicalUrl } from '@/src/data/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rediscover-series.com';
  const books = getAllBooks();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: getCanonicalUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: getCanonicalUrl('/books'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: getCanonicalUrl('/about'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: getCanonicalUrl('/offers'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic book pages
  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: getCanonicalUrl(`/books/${book.slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticPages, ...bookPages];
}

