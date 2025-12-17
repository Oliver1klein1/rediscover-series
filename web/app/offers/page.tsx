import Image from 'next/image';
import Link from 'next/link';
import { getAllBooks } from '@/lib/books';

export default function OffersPage() {
  const books = getAllBooks();

  const bundles = [
    {
      id: 'complete-series',
      title: 'Complete Series Bundle',
      subtitle: 'All 5 Books',
      description: 'Complete your Rediscover journey with all five groundbreaking books',
      image: '/assets/covers/rediscover_boxed_set_final2.jpg',
      books: [1, 2, 3, 4, 5],
      pricing: {
        ebook: { price: 34.99, original: 44.95, discount: 22, savings: 9.96 },
        paperback: { price: 64.99, original: 82.95, discount: 22, savings: 17.96 },
        hardcover: { price: 94.99, original: 121.95, discount: 22, savings: 26.96 }
      },
      featured: true
    },
    {
      id: 'core-trilogy',
      title: 'Core Trilogy Bundle',
      subtitle: 'Books 1, 2 & 5',
      description: 'The essential Rediscover collection: foundation, core teaching, and authenticity',
      books: [1, 2, 5],
      pricing: {
        ebook: { price: 19.99, original: 24.97, discount: 20, savings: 4.98 },
        paperback: { price: 37.99, original: 46.97, discount: 19, savings: 8.98 },
        hardcover: { price: 56.99, original: 70.97, discount: 20, savings: 13.98 }
      }
    },
    {
      id: 'deep-dive',
      title: 'Deep Dive Bundle',
      subtitle: 'Books 1, 3 & 4',
      description: 'The comprehensive study collection: longest, most transformative books',
      books: [1, 3, 4],
      pricing: {
        ebook: { price: 21.99, original: 27.97, discount: 21, savings: 5.98 },
        paperback: { price: 41.99, original: 52.97, discount: 21, savings: 10.98 },
        hardcover: { price: 59.99, original: 76.97, discount: 22, savings: 16.98 }
      }
    },
    {
      id: 'starter',
      title: 'Starter Bundle',
      subtitle: 'Books 2 & 5',
      description: 'Perfect introduction: two accessible entry points to the Rediscover Series',
      books: [2, 5],
      pricing: {
        ebook: { price: 12.99, original: 15.98, discount: 19, savings: 2.99 },
        paperback: { price: 24.99, original: 29.98, discount: 17, savings: 4.99 },
        hardcover: { price: 37.99, original: 45.98, discount: 17, savings: 7.99 }
      }
    },
    {
      id: 'advanced',
      title: 'Advanced Bundle',
      subtitle: 'Books 3 & 4',
      description: 'Transformative exploration: consciousness, contradictions, and reality',
      books: [3, 4],
      pricing: {
        ebook: { price: 14.99, original: 18.98, discount: 21, savings: 3.99 },
        paperback: { price: 28.99, original: 35.98, discount: 19, savings: 6.99 },
        hardcover: { price: 41.99, original: 51.98, discount: 19, savings: 9.99 }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex-shrink-0 flex items-center gap-4">
            <Image
              src="/assets/ansilo-boff-avatar-v2.jpg"
              alt="Ansilo Boff"
              width={100}
              height={100}
              className="rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
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
              Special Offers & Bundles
            </h1>
            <p className="text-xl text-gray-400">
              Save when you buy multiple books from the Rediscover Series
            </p>
          </div>
        </div>

        {/* Featured: Complete Series Bundle */}
        {bundles.filter(b => b.featured).map((bundle) => (
          <div key={bundle.id} className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-8 md:p-12 border-2 border-yellow-400/30 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="order-2 md:order-1">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={bundle.image || '/assets/covers/rediscover_boxed_set_final2.jpg'}
                      alt={bundle.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 md:order-2">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {bundle.title}
                    </h2>
                    <p className="text-xl text-yellow-400 mb-4">{bundle.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed">{bundle.description}</p>
                  </div>

                  {/* Pricing Cards */}
                  <div className="space-y-4 mb-6">
                    {/* eBook */}
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">eBook</span>
                        <div className="text-right">
                          <span className="text-gray-400 line-through text-sm mr-2">${bundle.pricing.ebook.original.toFixed(2)}</span>
                          <span className="text-2xl font-bold text-yellow-400">${bundle.pricing.ebook.price.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-400">Save ${bundle.pricing.ebook.savings.toFixed(2)} ({bundle.pricing.ebook.discount}% off)</span>
                        <div className="flex gap-2">
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

                    {/* Paperback */}
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">Paperback</span>
                        <div className="text-right">
                          <span className="text-gray-400 line-through text-sm mr-2">${bundle.pricing.paperback.original.toFixed(2)}</span>
                          <span className="text-2xl font-bold text-yellow-400">${bundle.pricing.paperback.price.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-400">Save ${bundle.pricing.paperback.savings.toFixed(2)} ({bundle.pricing.paperback.discount}% off)</span>
                        <div className="flex gap-2">
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

                    {/* Hardcover */}
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">Hardcover</span>
                        <div className="text-right">
                          <span className="text-gray-400 line-through text-sm mr-2">${bundle.pricing.hardcover.original.toFixed(2)}</span>
                          <span className="text-2xl font-bold text-yellow-400">${bundle.pricing.hardcover.price.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-400">Save ${bundle.pricing.hardcover.savings.toFixed(2)} ({bundle.pricing.hardcover.discount}% off)</span>
                        <div className="flex gap-2">
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

                  {/* Included Books */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {bundle.books.map((bookIndex) => {
                        const book = books[bookIndex - 1];
                        return (
                          <Link
                            key={book.id}
                            href={`/books/${book.slug}`}
                            className="group relative w-20 h-32 rounded overflow-hidden border border-gray-700 hover:border-yellow-400 transition"
                          >
                            <Image
                              src={`/${book.coverImage}`}
                              alt={book.title}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Bundles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">More Bundle Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bundles.filter(b => !b.featured).map((bundle) => (
              <div key={bundle.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-400/50 transition">
                <h3 className="text-2xl font-bold text-white mb-2">{bundle.title}</h3>
                <p className="text-yellow-400 text-sm mb-3">{bundle.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{bundle.description}</p>

                {/* Included Books */}
                <div className="flex gap-2 mb-4">
                  {bundle.books.map((bookIndex) => {
                    const book = books[bookIndex - 1];
                    return (
                      <Link
                        key={book.id}
                        href={`/books/${book.slug}`}
                        className="relative w-16 h-24 rounded overflow-hidden border border-gray-700 hover:border-yellow-400 transition"
                      >
                        <Image
                          src={`/${book.coverImage}`}
                          alt={book.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </Link>
                    );
                  })}
                </div>

                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">eBook:</span>
                    <div className="text-right">
                      <span className="text-gray-500 line-through mr-2">${bundle.pricing.ebook.original.toFixed(2)}</span>
                      <span className="text-yellow-400 font-bold">${bundle.pricing.ebook.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Paperback:</span>
                    <div className="text-right">
                      <span className="text-gray-500 line-through mr-2">${bundle.pricing.paperback.original.toFixed(2)}</span>
                      <span className="text-yellow-400 font-bold">${bundle.pricing.paperback.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Hardcover:</span>
                    <div className="text-right">
                      <span className="text-gray-500 line-through mr-2">${bundle.pricing.hardcover.original.toFixed(2)}</span>
                      <span className="text-yellow-400 font-bold">${bundle.pricing.hardcover.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex-1 px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-500 transition text-sm text-center"
                    title="Amazon link will be added when available"
                  >
                    Amazon
                  </a>
                  <a
                    href="#"
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded font-semibold hover:bg-purple-700 transition text-sm text-center"
                    title="Gumroad link will be added when available"
                  >
                    Gumroad
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Book Pricing Reference */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Individual Book Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
              <div key={book.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <Link href={`/books/${book.slug}`} className="block mb-3">
                  <div className="relative w-full h-32 mb-2 rounded overflow-hidden">
                    <Image
                      src={`/${book.coverImage}`}
                      alt={book.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">{book.title}</h3>
                </Link>
                <div className="text-xs text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>eBook:</span>
                    <span className="text-yellow-400 font-semibold">
                      ${book.id === 'book1' || book.id === 'book4' ? '8.99' : book.id === 'book3' ? '9.99' : '7.99'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paperback:</span>
                    <span className="text-yellow-400 font-semibold">
                      ${book.id === 'book1' || book.id === 'book4' ? '16.99' : book.id === 'book3' ? '18.99' : '14.99'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hardcover:</span>
                    <span className="text-yellow-400 font-semibold">
                      ${book.id === 'book1' || book.id === 'book4' ? '24.99' : book.id === 'book3' ? '26.99' : '22.99'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Secure checkout available on Amazon and Gumroad</p>
          <p className="mt-2">30-day money-back guarantee • Instant delivery on digital formats</p>
        </div>
      </div>
    </div>
  );
}

