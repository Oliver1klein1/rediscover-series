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
          <div className="flex items-center space-x-2">
            <Link 
              href="/" 
              className={`relative px-6 py-3 font-medium transition-all duration-300 group rounded-lg backdrop-blur-md border ${
                pathname === '/' 
                  ? 'bg-yellow-400/20 border-yellow-400/40 text-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10'
              }`}
            >
              <span className="relative z-10">Home</span>
              {pathname !== '/' && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </>
              )}
            </Link>
            <Link 
              href="/books" 
              className={`relative px-6 py-3 font-medium transition-all duration-300 group rounded-lg backdrop-blur-md border ${
                pathname === '/books' 
                  ? 'bg-yellow-400/20 border-yellow-400/40 text-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10'
              }`}
            >
              <span className="relative z-10">Books</span>
              {pathname !== '/books' && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </>
              )}
            </Link>
            <Link 
              href="/bundles" 
              className={`relative px-6 py-3 font-medium transition-all duration-300 group rounded-lg backdrop-blur-md border ${
                pathname === '/bundles' 
                  ? 'bg-yellow-400/20 border-yellow-400/40 text-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10'
              }`}
            >
              <span className="relative z-10">Bundles</span>
              {pathname !== '/bundles' && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </>
              )}
            </Link>
            <Link 
              href="/about" 
              className={`relative px-6 py-3 font-medium transition-all duration-300 group rounded-lg backdrop-blur-md border ${
                pathname === '/about' 
                  ? 'bg-yellow-400/20 border-yellow-400/40 text-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10'
              }`}
            >
              <span className="relative z-10">About</span>
              {pathname !== '/about' && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </>
              )}
            </Link>
            <Link 
              href="/other-books" 
              className={`relative px-6 py-3 font-medium transition-all duration-300 group rounded-lg backdrop-blur-md border ${
                pathname?.startsWith('/other-books') 
                  ? 'bg-yellow-400/20 border-yellow-400/40 text-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10'
              }`}
            >
              <span className="relative z-10">Other Books</span>
              {!pathname?.startsWith('/other-books') && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

