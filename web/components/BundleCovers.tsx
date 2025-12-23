import Image from 'next/image';
import { getBookCoverImage, getBookTitle } from '@/lib/books';

interface BundleCoversProps {
  slugs: string[];
  size?: 'small' | 'medium';
  showAudiobookBadge?: boolean;
}

function getInitials(title: string | null): string {
  if (!title) return '?';
  const words = title.split(' ');
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return title.substring(0, 2).toUpperCase();
}

export default function BundleCovers({ slugs, size = 'medium', showAudiobookBadge = false }: BundleCoversProps) {
  if (!slugs || slugs.length === 0) return null;

  const sizeClasses = {
    small: 'h-16 w-12',
    medium: 'h-28 w-[4.5rem] md:h-32 md:w-20',
  };

  const imageSize = size === 'small' ? 48 : 80;

  // Calculate overlap amount based on number of covers
  const overlapAmount = slugs.length <= 2 ? 0 : slugs.length <= 3 ? 8 : 12;

  return (
    <div className="flex items-center justify-center mb-4 overflow-x-auto pb-2">
      <div className="flex items-center" style={{ gap: `-${overlapAmount}px` }}>
        {slugs.map((slug, index) => {
          if (!slug) return null;
          
          let coverImage: string | null = null;
          let title: string | null = null;
          
          try {
            coverImage = getBookCoverImage(slug);
            title = getBookTitle(slug);
          } catch (error) {
            // Gracefully handle errors - will show placeholder
            console.error(`Error loading cover for ${slug}:`, error);
          }
          
          const initials = getInitials(title);
          const isFirstCover = index === 0 && showAudiobookBadge;

          return (
            <div
              key={slug}
              className={`relative ${sizeClasses[size]} bg-gray-800 rounded border border-gray-700 overflow-hidden flex-shrink-0 shadow-lg transition-transform hover:scale-105 hover:z-50`}
              style={{
                marginLeft: index > 0 ? `-${overlapAmount}px` : '0',
                zIndex: slugs.length - index,
              }}
            >
              {coverImage ? (
                <Image
                  src={coverImage}
                  alt={title || `Book cover ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={`${imageSize}px`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <span className="text-gray-400 text-xs font-bold">{initials}</span>
                </div>
              )}
              {isFirstCover && (
                <div className="absolute top-1 right-1 bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded shadow-md">
                  AUDIO
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

