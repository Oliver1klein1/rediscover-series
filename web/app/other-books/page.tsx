import Image from 'next/image';
import Link from 'next/link';
import { getAllOtherSeries } from '@/lib/otherSeries';

export default function OtherBooksPage() {
  const series = getAllOtherSeries();

  return (
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
              Other Books by Ansilo Boff
            </h1>
            <p className="text-xl text-gray-400">
              Discover more inspiring series from the same author
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {series.map((s) => (
            <Link key={s.id} href={`/other-books/${s.slug}`}>
              <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-800 hover:border-yellow-400/50">
                <div className="relative w-full h-96 bg-gray-800">
                  <Image
                    src={s.coverImage}
                    alt={s.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition">
                    {s.title}
                  </h2>
                  {s.subtitle && (
                    <p className="text-yellow-400 text-sm mb-3 italic">{s.subtitle}</p>
                  )}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {s.description.split('\n\n')[0]}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 text-sm block">
                        {s.books.length} {s.books.length === 1 ? 'book' : 'books'}
                      </span>
                      {s.price && (
                        <span className="text-yellow-400 text-sm font-semibold">
                          From ${s.price.paperback.toFixed(2)}
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
    </div>
  );
}

