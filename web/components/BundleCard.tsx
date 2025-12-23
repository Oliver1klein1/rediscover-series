import Image from 'next/image';
import { Bundle } from '@/lib/bundles';

interface BundleCardProps {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: BundleCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-800">
      {bundle.image && (
        <div className="relative w-full h-80 md:h-96 bg-gray-800">
          <Image
            src={bundle.image}
            alt={bundle.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          {bundle.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {bundle.description}
        </p>
        
        <div className="mb-4">
          <p className="text-white font-medium mb-2 text-sm">Includes:</p>
          <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
            {bundle.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-yellow-400">
            {bundle.price}
          </span>
        </div>
        
        <a
          href={bundle.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-yellow-400 text-black text-center py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          {bundle.cta}
        </a>
      </div>
    </div>
  );
}

