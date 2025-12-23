import Link from 'next/link';
import { Bundle } from '@/lib/bundles';
import BundleCard from './BundleCard';

interface BundlesSectionProps {
  bundles: Bundle[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default function BundlesSection({
  bundles,
  title = 'Bundles',
  subtitle,
  showViewAll = false,
  viewAllHref = '/bundles',
}: BundlesSectionProps) {
  if (bundles.length === 0) return null;

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-400">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {bundles.map((bundle) => (
            <BundleCard key={bundle.slug} bundle={bundle} />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href={viewAllHref}
              className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              View all bundles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

