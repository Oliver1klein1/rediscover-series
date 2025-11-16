import Image from 'next/image';
import Link from 'next/link';
import { getSeriesBySlug, getBookBySlug, getAllOtherSeries } from '@/lib/otherSeries';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    seriesSlug: string;
    bookSlug: string;
  };
}

export async function generateStaticParams() {
  const series = getAllOtherSeries();
  const params: Array<{ seriesSlug: string; bookSlug: string }> = [];
  
  series.forEach((s) => {
    s.books.forEach((book) => {
      params.push({
        seriesSlug: s.slug,
        bookSlug: book.slug,
      });
    });
  });
  
  return params;
}

export default function BookPage({ params }: PageProps) {
  const series = getSeriesBySlug(params.seriesSlug);
  const book = getBookBySlug(params.seriesSlug, params.bookSlug);

  if (!series || !book) {
    notFound();
  }

  // Get previous and next books
  const currentIndex = series.books.findIndex(b => b.id === book.id);
  const prevBook = currentIndex > 0 ? series.books[currentIndex - 1] : null;
  const nextBook = currentIndex < series.books.length - 1 ? series.books[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link 
            href="/other-books" 
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            Other Books
          </Link>
          <span className="text-gray-500 mx-2">/</span>
          <Link 
            href={`/other-books/${series.slug}`}
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            {series.title}
          </Link>
          <span className="text-gray-500 mx-2">/</span>
          <span className="text-gray-400">{book.title}</span>
        </div>

        {/* Book Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Cover Image */}
          <div className="relative w-full h-[600px] bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Book Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {book.title}
            </h1>
            {book.subtitle && (
              <p className="text-xl text-yellow-400 mb-6 italic">{book.subtitle}</p>
            )}
            
            <div className="mb-6">
              <p className="text-gray-400 mb-2">
                <span className="font-semibold text-white">Series:</span>{' '}
                <Link 
                  href={`/other-books/${series.slug}`}
                  className="text-yellow-400 hover:text-yellow-300 transition"
                >
                  {series.title}
                </Link>
              </p>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold text-white">Author:</span> {series.author}
              </p>
              
              {/* Pricing Section */}
              {book.price && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div>
                      <p className="text-gray-300 font-medium">Paperback</p>
                      <p className="text-xs text-gray-500">8.5" x 8.5" • Full Color</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-yellow-400">${book.price.paperback.toFixed(2)}</p>
                      <div className="flex gap-2 mt-2">
                        <a
                          href="#"
                          className="px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-500 transition text-sm"
                          title="Amazon link will be added when available"
                        >
                          Amazon
                        </a>
                        <a
                          href="#"
                          className="px-4 py-2 bg-purple-600 text-white rounded font-semibold hover:bg-purple-700 transition text-sm"
                          title="Gumroad link will be added when available"
                        >
                          Gumroad
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">About this Book</h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {book.description}
              </p>
            </div>

            {/* Navigation to Previous/Next Books */}
            <div className="flex justify-between gap-4 pt-6 border-t border-gray-800">
              {prevBook ? (
                <Link
                  href={`/other-books/${series.slug}/${prevBook.slug}`}
                  className="flex-1 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition border border-gray-800 hover:border-yellow-400/50"
                >
                  <p className="text-xs text-gray-500 mb-1">Previous</p>
                  <p className="text-sm text-white font-semibold line-clamp-1">{prevBook.title}</p>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}
              
              {nextBook ? (
                <Link
                  href={`/other-books/${series.slug}/${nextBook.slug}`}
                  className="flex-1 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition border border-gray-800 hover:border-yellow-400/50 text-right"
                >
                  <p className="text-xs text-gray-500 mb-1">Next</p>
                  <p className="text-sm text-white font-semibold line-clamp-1">{nextBook.title}</p>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

