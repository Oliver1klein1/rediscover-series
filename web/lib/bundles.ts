export type Bundle = {
  slug: string;
  title: string;
  price: string;
  includes: string[];
  includeSlugs: string[];
  description: string;
  cta: string;
  url: string;
  image?: string;
  featured?: boolean;
};

export const bundles: Bundle[] = [
  {
    slug: 'deconstruction-starter-pack',
    title: 'The Deconstruction Starter Pack',
    price: '$12.99',
    includes: [
      'Liberating Humanity',
      'Escape the Hell Myth',
    ],
    includeSlugs: ['liberating-humanity', 'escape-the-hell-myth'],
    description: 'Perfect for those beginning their journey away from fear-based faith.',
    cta: 'Get the Starter Pack',
    url: 'https://ansiloboff.gumroad.com/l/deconstruction-starter-pack',
    image: '/assets/bundles/starter-pack-thumbnail.jpg',
    featured: true,
  },
  {
    slug: 'core-truths',
    title: 'Rediscovering Jesus: Core Truths',
    price: '$17.99',
    includes: [
      'Liberating Humanity',
      'Escape the Hell Myth',
      'Framing Jesus',
    ],
    includeSlugs: ['liberating-humanity', 'escape-the-hell-myth', 'jesus-god'],
    description: 'The essential trilogy that reveals who Jesus really was.',
    cta: 'Get Core Truths Bundle',
    url: 'https://ansiloboff.gumroad.com/l/rediscovering-jesus-core-truths-bundle',
    image: '/assets/bundles/core-truths-thumbnail.jpg',
    featured: true,
  },
  {
    slug: 'complete-collection',
    title: 'The Complete Rediscovering Jesus Collection',
    price: '$29.99',
    includes: [
      'Liberating Humanity',
      'Escape the Hell Myth',
      'Framing Jesus',
      'Reality Unveiled',
      '101 Illustrated Bible Contradictions',
    ],
    includeSlugs: ['liberating-humanity', 'escape-the-hell-myth', 'jesus-god', 'reality-unveiled', 'bible-contradictions'],
    description: 'Everything you need for the complete journey of rediscovery.',
    cta: 'Get the Complete Collection',
    url: 'https://ansiloboff.gumroad.com/l/rediscovering-jesus-collection',
    image: '/assets/bundles/complete-collection-thumbnail.jpg',
    featured: true,
  },
  {
    slug: 'read-listen',
    title: 'Liberating Humanity – Read & Listen Edition',
    price: '$22.99',
    includes: [
      'Liberating Humanity (ebook)',
      'Liberating Humanity (audiobook)',
      'Escape the Hell Myth',
    ],
    includeSlugs: ['liberating-humanity', 'escape-the-hell-myth'],
    description: 'Experience the message in both written and spoken form.',
    cta: 'Get Read & Listen',
    url: 'https://ansiloboff.gumroad.com/l/liberating-humanity-read-and-listen',
    image: '/assets/bundles/read-listen-thumbnail.jpg',
    featured: false,
  },
];

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find(bundle => bundle.slug === slug);
}

export function getFeaturedBundles(): Bundle[] {
  return bundles.filter(bundle => bundle.featured);
}

export function getBundlesForBook(bookSlug: string): Bundle[] {
  const bundleSlugs: string[] = [];
  
  if (bookSlug === 'liberating-humanity') {
    bundleSlugs.push('deconstruction-starter-pack', 'core-truths');
  } else if (bookSlug === 'escape-the-hell-myth') {
    bundleSlugs.push('deconstruction-starter-pack', 'core-truths');
  } else if (bookSlug === 'jesus-god' || bookSlug === 'framing-jesus') {
    bundleSlugs.push('core-truths', 'complete-collection');
  } else if (bookSlug === 'reality-unveiled') {
    bundleSlugs.push('complete-collection');
  } else if (bookSlug === 'bible-contradictions') {
    bundleSlugs.push('complete-collection');
  }
  
  return bundles.filter(bundle => bundleSlugs.includes(bundle.slug));
}

