import type { Metadata } from 'next';
import Image from 'next/image';
import { bundles, getBundleBySlug } from '@/lib/bundles';
import BundlesSection from '@/components/BundlesSection';
import BundleCard from '@/components/BundleCard';

export const metadata: Metadata = {
  title: 'Bundles',
  description: 'Curated reading paths for your journey of rediscovery. Save time by starting with a collection designed for your specific needs.',
  openGraph: {
    title: 'Bundles | Rediscover Series',
    description: 'Curated reading paths for your journey of rediscovery. Save time by starting with a collection designed for your specific needs.',
    type: 'website',
    url: 'https://www.ansiloboff.com/bundles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bundles | Rediscover Series',
    description: 'Curated reading paths for your journey of rediscovery. Save time by starting with a collection designed for your specific needs.',
  },
};

export default function BundlesPage() {
  const starterPack = getBundleBySlug('deconstruction-starter-pack');
  const coreTruths = getBundleBySlug('core-truths');
  const completeCollection = getBundleBySlug('complete-collection');
  const readListen = getBundleBySlug('read-listen');

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bundles
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Curated reading paths designed to guide you through your journey of rediscovery. Each bundle is thoughtfully assembled to meet you where you are.
          </p>
        </div>

        {/* Boxed Set Image */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl">
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

        {/* All Bundles Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {starterPack && (
              <BundleCard bundle={starterPack} />
            )}
            {coreTruths && (
              <BundleCard bundle={coreTruths} />
            )}
            {completeCollection && (
              <BundleCard bundle={completeCollection} />
            )}
            {readListen && (
              <BundleCard bundle={readListen} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

