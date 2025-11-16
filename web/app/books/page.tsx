import Image from 'next/image';
import Link from 'next/link';
import { getAllBooks } from '@/lib/books';
import { getAllOtherSeries } from '@/lib/otherSeries';
import BookCard from '@/components/BookCard';
import { getSeriesSEO, getCanonicalUrl } from '@/src/data/seo';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

const seoData = getSeriesSEO();

const booksCanonicalUrl = getCanonicalUrl('/books');

export const metadata: Metadata = {
  title: `All Books | ${seoData.metaTitle}`,
  description: "Explore all 5 books in the Rediscover Series: Liberating Humanity, Escape the Hell Myth, 101 Bible Contradictions, Reality Unveiled, and Framing Jesus.",
  keywords: [...seoData.keywords, "all books", "book series", "rediscover books"].join(', '),
  alternates: {
    canonical: booksCanonicalUrl,
  },
  openGraph: {
    title: `All Books | ${seoData.ogTitle}`,
    description: "Explore all 5 books uncovering Jesus' subverted teachings and the Father's love.",
    type: 'website',
    url: booksCanonicalUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `All Books | ${seoData.twitterTitle}`,
    description: "Explore all 5 books uncovering Jesus' subverted teachings and the Father's love.",
  },
};

export default function BooksPage() {
  const books = getAllBooks();
  const otherSeries = getAllOtherSeries();

  return (
    <>
      <JsonLd data={seoData.schema} />
      <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex-shrink-0">
            <Image
              src="/assets/ansilo_boff_logo.jpg?v=3"
              alt="Ansilo Boff Logo"
              width={200}
              height={100}
              className="rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Rediscover Series
            </h1>
            <p className="text-xl text-gray-400">
              Five books uncovering the truth about Jesus' teachings
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      {/* Other Series Section */}
      {otherSeries.length > 0 && (
        <section className="bg-gray-900 py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Other Books by Ansilo Boff
              </h2>
              <p className="text-xl text-gray-400">
                Discover more inspiring series from the same author
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {otherSeries.map((series) => (
                <Link key={series.id} href={`/other-books/${series.slug}`}>
                  <div className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-700 hover:border-yellow-400/50">
                    <div className="relative w-full h-96 bg-gray-900">
                      <Image
                        src={series.coverImage}
                        alt={series.title}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition">
                        {series.title}
                      </h3>
                      {series.subtitle && (
                        <p className="text-yellow-400 text-sm mb-3 italic">{series.subtitle}</p>
                      )}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {series.description.split('\n\n')[0]}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-500 text-sm block">
                            {series.books.length} {series.books.length === 1 ? 'book' : 'books'}
                          </span>
                          {series.price && (
                            <span className="text-yellow-400 text-sm font-semibold">
                              From ${series.price.paperback.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <span className="text-yellow-400 text-sm font-semibold group-hover:text-yellow-300">
                          View Series →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}

