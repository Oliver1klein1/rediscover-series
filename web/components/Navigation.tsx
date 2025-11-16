'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  // Determine which series title to show based on the current path
  let seriesTitle = 'Rediscover Series';
  let seriesLink = '/';
  
  if (pathname?.startsWith('/other-books/fathers-heart')) {
    seriesTitle = "The Father's Heart Series";
    seriesLink = '/other-books/fathers-heart';
  } else if (pathname?.startsWith('/other-books/unspoken-dreams')) {
    seriesTitle = 'Unspoken Hopes and Dreams Series';
    seriesLink = '/other-books/unspoken-dreams';
  } else if (pathname?.startsWith('/other-books')) {
    seriesTitle = 'Other Books';
    seriesLink = '/other-books';
  } else if (pathname?.startsWith('/books') || pathname === '/') {
    seriesTitle = 'Rediscover Series';
    seriesLink = '/';
  }
  
  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={seriesLink} className="text-2xl font-bold text-white hover:text-yellow-400 transition-all duration-300 flex items-center gap-2">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {seriesTitle}
            </span>
          </Link>
          <div className="flex items-center space-x-1">
            <Link 
              href="/" 
              className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/books" 
              className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Books</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/offers" 
              className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Offers</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/other-books" 
              className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group"
            >
              <span className="relative z-10">Other Books</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

