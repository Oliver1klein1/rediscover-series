import Image from 'next/image';
import Link from 'next/link';
import { getSeriesBySlug, getAllOtherSeries } from '@/lib/otherSeries';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    seriesSlug: string;
  };
}

export async function generateStaticParams() {
  const series = getAllOtherSeries();
  return series.map((s) => ({
    seriesSlug: s.slug,
  }));
}

export default function SeriesPage({ params }: PageProps) {
  const series = getSeriesBySlug(params.seriesSlug);

  if (!series) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Series Header */}
        <div className="mb-12">
          <Link 
            href="/other-books" 
            className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block transition"
          >
            ← Back to Other Books
          </Link>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={series.coverImage}
                alt={series.title}
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {series.title}
              </h1>
              {series.subtitle && (
                <p className="text-xl text-yellow-400 mb-4 italic">{series.subtitle}</p>
              )}
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-4">
                {series.description}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Author:</span> {series.author}
              </p>
            </div>
          </div>
        </div>

        {/* Series Pricing */}
        {series.price && (
          <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Series Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-300 font-medium mb-2">Individual Books</p>
                <p className="text-2xl font-bold text-yellow-400 mb-1">${series.price.paperback.toFixed(2)}</p>
                <p className="text-xs text-gray-500">per book • Paperback</p>
              </div>
              {series.price.bundle && (
                <div className="bg-gray-800 rounded-lg p-4 border border-yellow-400/50">
                  <p className="text-gray-300 font-medium mb-2">Complete Series Bundle</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-gray-500 line-through text-sm">
                      ${(series.price.paperback * series.books.length).toFixed(2)}
                    </span>
                    <p className="text-2xl font-bold text-yellow-400">${series.price.bundle.toFixed(2)}</p>
                  </div>
                  <p className="text-xs text-green-400">
                    Save ${((series.price.paperback * series.books.length) - series.price.bundle).toFixed(2)} ({Math.round(((1 - (series.price.bundle / (series.price.paperback * series.books.length))) * 100))}% off)
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Books Grid */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-8">Books in this Series</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {series.books.map((book) => (
              <Link key={book.id} href={`/other-books/${series.slug}/${book.slug}`}>
                <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-800 hover:border-yellow-400/50">
                  <div className="relative w-full h-80 bg-gray-800">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition line-clamp-2">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-sm text-yellow-400 mb-2 line-clamp-1">{book.subtitle}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">Book {book.order}</p>
                      {book.price && (
                        <p className="text-sm font-bold text-yellow-400">${book.price.paperback.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

