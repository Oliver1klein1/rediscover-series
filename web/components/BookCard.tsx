import Link from 'next/link';
import Image from 'next/image';

interface BookCardProps {
  book: {
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    pages: number;
    coverImage: string;
  };
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.slug}`}>
      <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-80 bg-gray-800">
          <Image
            src={`/${book.coverImage}`}
            alt={book.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="text-gray-400 text-sm mb-3">{book.subtitle}</p>
          )}
          <p className="text-gray-300 text-sm line-clamp-3 mb-4">
            {book.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs">{book.pages} pages</span>
            <span className="text-yellow-400 text-sm font-medium group-hover:translate-x-1 transition inline-block">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

