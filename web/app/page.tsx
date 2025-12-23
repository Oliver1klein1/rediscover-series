import Image from 'next/image';
import Link from 'next/link';
import { getAllBooks } from '@/lib/books';
import { getAllOtherSeries } from '@/lib/otherSeries';
import { getFeaturedBundles } from '@/lib/bundles';
import { getSeriesSEO } from '@/src/data/seo';
import JsonLd from '@/components/JsonLd';
import BundlesSection from '@/components/BundlesSection';
import type { Metadata } from 'next';

let seoData: ReturnType<typeof getSeriesSEO>;
try {
  seoData = getSeriesSEO();
} catch (error) {
  console.error('Error loading SEO data:', error);
  // Fallback SEO data
  seoData = {
    metaTitle: 'Rediscover Series',
    metaDescription: 'Rediscovering Jesus\' Subverted Teachings and the Father\'s Love',
    keywords: [],
    slug: '/',
    canonicalUrl: 'https://www.ansiloboff.com',
    ogTitle: 'Rediscover Series',
    ogDescription: 'Rediscovering Jesus\' Subverted Teachings and the Father\'s Love',
    twitterTitle: 'Rediscover Series',
    twitterDescription: 'Rediscovering Jesus\' Subverted Teachings and the Father\'s Love',
    schema: {},
  };
}

export const metadata: Metadata = {
  title: seoData.metaTitle,
  description: seoData.metaDescription,
  keywords: seoData.keywords.join(', '),
  alternates: {
    canonical: seoData.canonicalUrl,
  },
  openGraph: {
    title: seoData.ogTitle,
    description: seoData.ogDescription,
    type: 'website',
    url: seoData.canonicalUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.twitterTitle,
    description: seoData.twitterDescription,
  },
};

export default function Home() {
  let books: ReturnType<typeof getAllBooks> = [];
  let otherSeries: ReturnType<typeof getAllOtherSeries> = [];
  let featuredBundles: ReturnType<typeof getFeaturedBundles> = [];
  
  try {
    books = getAllBooks();
  } catch (error) {
    console.error('Error loading books:', error);
    books = [];
  }
  
  try {
    otherSeries = getAllOtherSeries();
  } catch (error) {
    console.error('Error loading other series:', error);
    otherSeries = [];
  }
  
  try {
    featuredBundles = getFeaturedBundles();
  } catch (error) {
    console.error('Error loading featured bundles:', error);
    featuredBundles = [];
  }

  return (
    <>
      <JsonLd data={seoData.schema} />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 via-black to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Boxed Set Image Container - Used for alignment */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl">
              {/* Logo and Title Section - Aligned with image width */}
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
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-normal tracking-tight">
                    <span className="block text-yellow-400">Rediscovering Jesus'</span>
                    <span className="block mt-2">
                      <span className="text-white">Subverted</span>{' '}
                      <span className="text-yellow-400">Teachings</span>
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2 font-medium italic mt-6">
                    and the Father's Love
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 mt-6 font-medium tracking-wide uppercase">5-Book Series</p>
                </div>
              </div>

              {/* Boxed Set Image */}
              <div className="relative w-full h-auto">
                <Image
                  src="/assets/covers/rediscover_boxed_set_final2.jpg"
                  alt="Rediscover Series Boxed Set"
                  width={1200}
                  height={900}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Series Description */}
          <div className="max-w-4xl mx-auto text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>
              For two thousand years, religion has distorted Jesus' message … turning liberation into obedience, and love into fear. It told us God demanded blood, that sin defined us from birth, and that submission (being 'under authority') mattered more than awareness.
            </p>
            <p className="text-xl font-semibold text-white">
              But what if that story wasn't from Jesus at all?
            </p>
            <p>
              This series rips through the edits, lies, and power plays that buried his true teachings. It exposes how Yahweh's wrath was mistaken for the Father's love … and how Paul's control replaced Jesus' freedom. From <em className="font-bold italic">"Liberating Humanity"</em> to <em className="font-bold italic">"Escape the Hell Myth"</em>, these books uncover a single revelation: Jesus never preached fear, wrath, or blood sacrifice. The scriptures were tampered with. Jesus revealed a Father who restores, not destroys.
            </p>
            <div className="text-center py-6">
              <p className="text-2xl font-bold text-yellow-400 mb-2">
                From fear to freedom. From illusion to truth.
              </p>
              <p className="text-xl italic text-gray-400">
                Raw. Daring. Restorative.
              </p>
            </div>
            <p className="text-center text-lg">
              This isn't the end of faith … it's the beginning of awakening and living abundantly.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Books Preview */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {books && books.length > 0 ? books.map((book) => (
              <Link key={book.id} href={`/books/${book.slug}`}>
                <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-64 bg-gray-800">
                    <Image
                      src={`/${book.coverImage}`}
                      alt={book.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-yellow-400 transition line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-xs text-gray-500">{book.pages} pages</p>
                  </div>
                </div>
              </Link>
            )) : (
              <div className="col-span-full text-center text-gray-400 py-8">
                Books loading...
              </div>
            )}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/books"
              className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Bundles Section - Temporarily disabled for debugging */}
      {/* {featuredBundles.length > 0 && (
        <BundlesSection
          bundles={featuredBundles}
          title="Bundles"
          subtitle="Save time by starting with a curated collection designed for your journey"
          showViewAll={true}
          viewAllHref="/bundles"
        />
      )} */}

      {/* Other Series Section */}
      {otherSeries.length > 0 && (
        <section className="bg-gray-900 py-16">
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

