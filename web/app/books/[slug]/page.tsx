import { getBookBySlug, getBookChapters } from '@/lib/books';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { aplusContent } from '@/src/data/aplus';
import { getSEOForBook } from '@/src/data/seo';
import { getBundlesForBook } from '@/lib/bundles';
import JsonLd from '@/components/JsonLd';
import BundleCard from '@/components/BundleCard';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const book = getBookBySlug(params.slug);
  const seoData = getSEOForBook(params.slug);

  if (!book || !seoData) {
    return {
      title: 'Book Not Found',
      description: 'The requested book could not be found.',
    };
  }

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords.join(', '),
    alternates: {
      canonical: seoData.canonicalUrl,
    },
    openGraph: {
      title: seoData.ogTitle,
      description: seoData.ogDescription,
      type: 'book',
      url: seoData.canonicalUrl,
      images: seoData.ogImage ? [seoData.ogImage] : [`/${book.coverImage}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.twitterTitle,
      description: seoData.twitterDescription,
      images: seoData.twitterImage ? [seoData.twitterImage] : [`/${book.coverImage}`],
    },
  };
}

export default function BookPage({ params }: PageProps) {
  const book = getBookBySlug(params.slug);
  const chapters = getBookChapters(params.slug);
  const seoData = getSEOForBook(params.slug);
  const bundlesForBook = getBundlesForBook(params.slug);

  const purchaseOptions: Record<
    string,
    {
      gumroad: string;
      amazon?: string;
    }
  > = {
    'liberating-humanity': {
      gumroad: 'https://ansiloboff.gumroad.com/l/liberating-humanity',
      amazon:
        'https://www.amazon.com/Liberating-Humanity-Rediscover-Subverted-Teachings-ebook/dp/B0G4KVLTTB/',
    },
    'escape-the-hell-myth': {
      gumroad: 'https://ansiloboff.gumroad.com/l/escape-hell',
      amazon: 'https://www.amazon.com/dp/B0G4SVQGJB',
    },
    'bible-contradictions': {
      gumroad: 'https://ansiloboff.gumroad.com/l/101-illustrated-bible-contradictions',
      amazon: 'https://www.amazon.com/dp/B0G5FV99Y2',
    },
    'framing-jesus': {
      gumroad: 'https://ansiloboff.gumroad.com/l/framing-jesus',
      amazon: 'https://www.amazon.com/dp/B0G6PGS6BN',
    },
    'reality-unveiled': {
      gumroad: 'https://ansiloboff.gumroad.com/l/reality-unveiled',
      amazon: 'https://www.amazon.com/dp/B0G63857ZF',
    },
  };

  const samplePreviews: Record<string, string> = {
    'liberating-humanity': '/liberating_humanity_sneek_peek.pdf#toolbar=0&navpanes=0',
    'escape-the-hell-myth': '/samples/escape-hell_sample.pdf#toolbar=0&navpanes=0',
    'bible-contradictions': '/samples/101-bible-contradictions_sample.pdf#toolbar=0&navpanes=0',
    'framing-jesus': '/samples/framing-jesus_sample.pdf#toolbar=0&navpanes=0',
    'reality-unveiled': '/samples/reality-unveiled_sample.pdf#toolbar=0&navpanes=0',
  };

  if (!book) {
    notFound();
  }

  return (
    <>
      {seoData && <JsonLd data={seoData.schema} />}
      <div className="min-h-screen bg-black py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Book Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[600px] bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src={`/${book.coverImage}`}
              alt={`Cover of '${book.title}' – Rediscovering Jesus' Subverted Teachings and the Father's Love${book.id === 'book1' ? ', Book 1' : book.id === 'book2' ? ', Book 2' : book.id === 'book3' ? ', Book 3' : book.id === 'book4' ? ', Book 4' : book.id === 'book5' ? ', Book 5' : ''}`}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">{book.title}</h1>
            {book.subtitle && (
              <p className="text-xl text-gray-400 mb-6">{book.subtitle}</p>
            )}
            <div className="space-y-4 mb-8">
              <div className="text-gray-300 leading-relaxed space-y-4">
                {book.description.split('\n\n').map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  
                  // Style short, impactful lines (like "Raw. Explosive. Liberating.")
                  const isShortImpact = trimmed.length < 150 && (trimmed.includes('.') || trimmed.match(/^[A-Z]/));
                  const isBoldStatement = trimmed.length < 80 && trimmed.match(/^[A-Z]/);
                  
                  return (
                    <p 
                      key={index} 
                      className={
                        isBoldStatement 
                          ? 'font-bold text-xl text-white' 
                          : isShortImpact 
                          ? 'font-semibold text-lg text-gray-200' 
                          : ''
                      }
                    >
                      {trimmed}
                    </p>
                  );
                })}
              </div>
              {book.tags && Array.isArray(book.tags) && book.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-2 text-gray-400">
              {book.author && <p>Author: {book.author}</p>}
              {book.publisher && <p>Publisher: {book.publisher}</p>}
              {book.publicationDate && <p>Published: {book.publicationDate}</p>}
            </div>
            {/* Purchase Links */}
            {purchaseOptions[book.slug] ? (
              <div className="mt-8 space-y-4">
                <div>
                  <a
                    href={purchaseOptions[book.slug].gumroad}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-yellow-400 text-black text-center py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                  >
                    I want this!
                  </a>
                  <p className="text-center text-gray-400 text-sm mt-2">(Buy Direct from the Author)</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <p className="text-white font-medium mb-2">You will receive:</p>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>DRM-free PDF (Color)</li>
                    <li>Printer-friendly Greyscale PDF</li>
                    <li>EPUB for all e-readers</li>
                    <li>Lifetime updates</li>
                  </ul>
                </div>
                {purchaseOptions[book.slug].amazon && (
                  <div className="text-center pt-2">
                    <a
                      href={purchaseOptions[book.slug].amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm hover:text-gray-400 transition underline"
                    >
                      Prefer Amazon? View on Amazon
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-8 space-y-3">
                <a
                  href="#"
                  className="block w-full bg-yellow-400 text-black text-center py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Buy on Amazon
                </a>
                <a
                  href="#"
                  className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
                >
                  Get Ebook
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Prefer a Bundle? Block */}
        {bundlesForBook.length > 0 && (
          <div className="mt-8 bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-2">
              Prefer a bundle?
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Save time by starting with a curated collection.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bundlesForBook.map((bundle) => (
                <BundleCard key={bundle.slug} bundle={bundle} />
              ))}
            </div>
          </div>
        )}

        {/* Sneak Peek / Chapters List */}
        {samplePreviews[book.slug] && (
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Take a Sneak Peek inside ...</h2>
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src={samplePreviews[book.slug]}
                title={`${book.title} Sneak Peek`}
                className="w-full"
                style={{ height: '900px' }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">Use the viewer controls to scroll and zoom.</p>
          </div>
        )}

        {/* Audiobook Section - Only for Liberating Humanity */}
        {book.slug === 'liberating-humanity' && (
          <div className="mt-12 bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Audiobook Now Available</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                Prefer to listen?
              </p>
              <p className="text-gray-300 mb-4">
                <strong><em>Liberating Humanity</em></strong> is now available as a <strong>complete, unabridged audiobook</strong>, delivered as a <strong>single, chapterized M4B file</strong> for seamless listening on <strong>Apple Books and most audiobook players</strong>.
              </p>
              <p className="text-gray-300 mb-4">
                Narrated by <em>Truth Beyond Tradition Voice</em>, this edition preserves the book's intensity, clarity, and confrontational honesty … ideal for reflective listening or deep re-examination of long-held beliefs.
              </p>
              <div className="mb-6">
                <p className="text-gray-300 mb-3">
                  Listen to a short sample from Chapter 7, where Paul's teachings come under the microscope:
                </p>
                <div className="flex items-center justify-center gap-4 bg-gray-700 rounded-lg p-4">
                  <audio
                    controls
                    className="w-full max-w-md"
                    style={{ outline: 'none' }}
                  >
                    <source src="/sample_audio_paul.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Get the full audiobook. Instant download. DRM-free. <strong>Yours to keep.</strong>
              </p>
              <div className="flex justify-center mb-4">
                <Image
                  src="/audiobook_icon.png"
                  alt="Audiobook icon"
                  width={64}
                  height={64}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-center">
                <a
                  href="https://ansiloboff.gumroad.com/l/liberating-humanity-audiobook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black text-center px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Get the Audiobook
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Chapters List for other books */}
        {book.slug !== 'liberating-humanity' && (
          chapters.length > 0 && (
            <div className="bg-gray-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
              <div className="space-y-2">
                {chapters.map((chapter, index) => {
                  // Determine chapter number/prefix
                  let prefix = '';
                  
                  // Check for anchor-based parts (e.g., content.xhtml#part-one, content.xhtml#part-two)
                  const anchorMatch = chapter.file.match(/#(part-one|part-two|part-?(\d+)|introduction|conclusion|contradiction-index)/i);
                  if (anchorMatch) {
                    const anchor = anchorMatch[1].toLowerCase();
                    if (anchor === 'part-one') prefix = 'Part 1';
                    else if (anchor === 'part-two') prefix = 'Part 2';
                    else if (anchor.startsWith('part')) {
                      const num = anchorMatch[2] || (anchor === 'part-one' ? '1' : anchor === 'part-two' ? '2' : '');
                      prefix = `Part ${num || '1'}`;
                    } else if (anchor.includes('intro')) prefix = 'Introduction';
                    else if (anchor.includes('conclusion')) prefix = 'Conclusion';
                  } else {
                    // Fallback to filename pattern matching
                    const fileMatch = chapter.file.match(/(chapter|introduction|intro|part|conclusion|appendix)(\d*)/i);
                    if (fileMatch) {
                      const type = fileMatch[1].toLowerCase();
                      const num = fileMatch[2] || '';
                      if (type.includes('intro')) prefix = 'Introduction';
                      else if (type.includes('part')) prefix = `Part ${num || '1'}`;
                      else if (type.includes('chapter')) prefix = `Chapter ${num || '1'}`;
                      else if (type.includes('conclusion')) prefix = 'Conclusion';
                      else if (type.includes('appendix')) prefix = `Appendix ${num || '1'}`;
                    }
                  }
                  
                  // Clean up title - remove prefix if it's duplicated
                  let displayTitle = chapter.title;
                  let displayPrefix = prefix;
                  
                  if (displayTitle && prefix) {
                    // Escape special regex characters in prefix
                    const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    
                    // Check if title already starts with the prefix followed by colon (e.g., "Part 1: The Contradictions")
                    const prefixWithColonRegex = new RegExp(`^${escapedPrefix}\\s*[:]\\s*`, 'i');
                    if (prefixWithColonRegex.test(displayTitle)) {
                      // Title already includes prefix with colon, so show full title without separate prefix
                      displayPrefix = '';
                      // Keep the full title as-is (don't remove prefix since it's part of the title)
                      displayTitle = chapter.title;
                    } else {
                      // Check if title starts with just the prefix (without colon)
                      const prefixOnlyRegex = new RegExp(`^${escapedPrefix}\\s*$`, 'i');
                      if (prefixOnlyRegex.test(displayTitle)) {
                        // Title is just the prefix, so show only prefix
                        displayTitle = '';
                      } else {
                        // Remove prefix from title if it starts with it (without colon)
                        const prefixRegexNoColon = new RegExp(`^${escapedPrefix}\\s*[-]?\\s*`, 'i');
                        displayTitle = displayTitle.replace(prefixRegexNoColon, '').trim();
                        
                        // If title is empty after removal, use empty string
                        if (!displayTitle) {
                          displayTitle = '';
                        }
                      }
                    }
                  }
                  
                  // Check if this is a Part heading
                  const isPart = displayPrefix && displayPrefix.toLowerCase().startsWith('part');
                  
                  return (
                    <div
                      key={index}
                      className={`p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer ${isPart ? 'text-center' : 'flex items-start'}`}
                    >
                      {isPart ? (
                        // Centered layout for Part headings
                        <div className="space-y-1">
                          <div className="text-gray-400 text-sm font-medium">
                            {displayPrefix}
                          </div>
                          {displayTitle && (
                            <div className="text-gray-200">
                              {displayTitle}
                            </div>
                          )}
                        </div>
                      ) : (
                        // Regular layout for other chapters
                        <>
                          {displayPrefix && (
                            <span className="text-gray-400 text-sm font-medium min-w-[100px]">
                              {displayPrefix}
                            </span>
                          )}
                          <span className={`text-gray-200 ${displayPrefix ? 'flex-1' : ''}`}>
                            {displayTitle || displayPrefix || ''}
                          </span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )
        )}

        {/* Go Deeper (A+ Content) */}
        {aplusContent[book.slug] && (
          <div className="mt-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-8 md:p-12 border border-gray-700">
            
            {/* Hook Headline */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 text-center">
                {aplusContent[book.slug].hookHeadline}
              </h3>
            </div>

            {/* Elevator Pitch */}
            <div className="mb-10">
              <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                {aplusContent[book.slug].elevatorPitch}
              </p>
            </div>

            {/* Who It Is For */}
            <div className="mb-10 bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-400">
              <h4 className="text-xl font-semibold text-white mb-3">Who This Book Is For</h4>
              <p className="text-gray-300 leading-relaxed">{aplusContent[book.slug].whoItIsFor}</p>
            </div>

            {/* Key Benefits */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-6">Key Benefits</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aplusContent[book.slug].keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <span className="text-yellow-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-300 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlight Blocks */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-8">Featured Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aplusContent[book.slug].highlightBlocks.map((block, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition">
                    {block.imagePath && (
                      <div className="mb-4 rounded-lg overflow-hidden flex justify-center">
                        <Image
                          src={block.imagePath}
                          alt={block.title}
                          width={400}
                          height={300}
                          className="w-[77%] h-auto object-cover"
                        />
                      </div>
                    )}
                    {!block.imagePath && block.imageConcept && (
                      <div className="mb-4 bg-gray-700 rounded-lg p-4 text-center min-h-[200px] flex items-center justify-center">
                        <p className="text-gray-400 text-sm italic">Suggested image: {block.imageConcept}</p>
                      </div>
                    )}
                    <h5 className="text-xl font-bold text-white mb-3">{block.title}</h5>
                    <p className="text-gray-300 leading-relaxed mb-4">{block.body}</p>
                    {block.quote && (
                      <div className="border-l-4 border-yellow-400 pl-4 mt-4">
                        <p className="text-gray-200 italic">"{block.quote}"</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Big Quotes */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">What Readers Will Feel & Discover</h4>
              <div className="space-y-6">
                {aplusContent[book.slug].bigQuotes.map((quote, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-6 border-l-4 border-yellow-400">
                    <p className="text-lg text-gray-200 italic leading-relaxed mb-3">"{quote.text}"</p>
                    <p className="text-gray-400 text-sm">— {quote.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Audio Sample or Sneak Peek */}
        {book.slug !== 'liberating-humanity' && book.slug !== 'bible-contradictions' && (
          <div className="mt-12 bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Audiobook</h2>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <p className="text-gray-400 mb-4">
                Coming soon
              </p>
              <div className="flex justify-center">
                <Image
                  src="/audiobook_icon.png"
                  alt="Audiobook icon"
                  width={64}
                  height={64}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

