export interface SeriesMetadata {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  coverImage: string;
  slug: string;
  books: BookMetadata[];
  price?: {
    paperback: number;
    bundle?: number;
  };
}

export interface BookMetadata {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  slug: string;
  order: number;
  price?: {
    paperback: number;
  };
}

// The Father's Heart Children's Book Series
export const fathersHeartSeries: SeriesMetadata = {
  id: 'fathers-heart',
  title: "The Father's Heart Children's Book Series",
  subtitle: "See others and God through Jesus' eyes.",
  author: 'Ansilo Boff',
  description: `What if the stories we tell about God helped children feel safe, kind, and deeply loved?

In The Father's Heart Series, Ansilo Boff re-introduces children to the gentle, forgiving Father that Jesus revealed — not a God of punishment or fear, but one of peace, mercy, and inclusion.

Through tender storytelling and luminous watercolor illustrations, each book turns everyday moments into spiritual discoveries: forgiving a friend, using kind words, feeling peace during storms, sharing what we have, and welcoming others at our table.

Every page helps children (and parents) unlearn fear and rediscover love.

Because when we see others — and God — through Jesus' eyes, the world becomes a brighter, kinder place.

Perfect for bedtime reading, family devotion, or Sunday-school story time, The Father's Heart Series nurtures young hearts to grow in empathy, peace, and joy.`,
  coverImage: '/assets/other-series/fathers-heart/fh_mockup1112.jpg',
  slug: 'fathers-heart',
  price: {
    paperback: 14.99,
    bundle: 64.99,
  },
  books: [
    {
      id: 'fh-book1',
      title: 'When My Little Brother Broke My Toy',
      subtitle: "So That's What \"Forgive\" Means!",
      description: `What if forgiveness wasn't about payback—but about love that keeps going?

When a child's toy breaks, so does his heart. But through gentle storytelling and bright illustrations, kids discover what Jesus revealed: the Father never punishes or holds grudges—He only loves and forgives.

A tender, hope-filled story that helps children let go of anger, make peace quickly, and feel God's smile again.`,
      coverImage: '/assets/other-series/fathers-heart/fh-book1-cover.jpg',
      slug: 'when-my-little-brother-broke-my-toy',
      order: 1,
      price: {
        paperback: 14.99,
      },
    },
    {
      id: 'fh-book2',
      title: "When I Decided I Won't Be Friends with Oliver Anymore",
      subtitle: "So That's What \"Not Holding a Grudge\" Means!",
      description: `Can love start again after friendship breaks?

When hurt feelings turn heavy, one child learns that real strength isn't in winning … it's in forgiving. Through playful scenes and a whisper of God's voice, readers see that the Father never keeps score; He simply says, "Let's start again."

A heartfelt reminder for every child that mercy always brings the sunshine back.`,
      coverImage: '/assets/other-series/fathers-heart/fh-book2-cover.jpg',
      slug: 'when-i-decided-i-wont-be-friends-with-oliver-anymore',
      order: 2,
      price: {
        paperback: 14.99,
      },
    },
    {
      id: 'fh-book3',
      title: 'Why Saying Bad Words To or About Others Makes Everyone Sad',
      subtitle: "So That's What \"Guarding Our Tongue\" Means!",
      description: `Words can hurt—or heal.

After blurting something mean, a young child discovers that words are like colors: some paint gray, others paint joy. With Jesus as the gentle teacher, children learn how the Father's words always bless, never curse.

A joyful story that helps kids speak kindly, choose bright "heart-colors," and spread love wherever they go.`,
      coverImage: '/assets/other-series/fathers-heart/fh-book3-cover.jpg',
      slug: 'why-saying-bad-words-makes-everyone-sad',
      order: 3,
      price: {
        paperback: 14.99,
      },
    },
    {
      id: 'fh-book4',
      title: 'When Thunder Made Me Hide',
      subtitle: "So That's What \"Peace Inside\" Means!",
      description: `Even the loudest storm can't shake God's peace.

When thunder roars, fear whispers, "God is angry." But in the quiet of the child's heart, another voice answers, "I'm here—always calm, always love."

This comforting story helps children trade fear for trust and discover that true safety comes from the Father's presence within.`,
      coverImage: '/assets/other-series/fathers-heart/fh-book4-cover.jpg',
      slug: 'when-thunder-made-me-hide',
      order: 4,
      price: {
        paperback: 14.99,
      },
    },
    {
      id: 'fh-book5',
      title: 'When We Made Room at Our Table',
      subtitle: "So That's What \"Welcome\" Means!",
      description: `What happens when we make room for one more?

A simple bowl of soup becomes a feast of friendship as a family invites new neighbors to share their table. Through warmth and wonder, children learn that love grows by including others—the way the Father includes everyone.

A beautiful story of generosity, belonging, and the kind of welcome that feels like home.`,
      coverImage: '/assets/other-series/fathers-heart/fh-book5-cover.jpg',
      slug: 'when-we-made-room-at-our-table',
      order: 5,
      price: {
        paperback: 14.99,
      },
    },
  ],
};

// The Unspoken Hopes and Dreams Series
export const unspokenDreamsSeries: SeriesMetadata = {
  id: 'unspoken-dreams',
  title: "The 'Unspoken Hopes and Dreams' Series",
  subtitle: 'A whisper. A promise. A lifeline wrapped in verse.',
  author: 'Ansilo Boff',
  description: `The Unspoken Hopes and Dreams series is a poetic love letter from parent to child … written before the first breath, the first step, the first word.

Each book is a tender collection of five-line verses that anchor a child's soul in love, courage, and belonging.

Perfect for parents to read with little ones aged 3–7, these keepsakes bridge generations and preserve the most sacred moments of early parenthood.

Whether you're expecting or already holding your miracle, these books are a timeless gift from your heart to theirs.`,
  coverImage: '/assets/other-series/unspoken-dreams/unspoken-hopes-and-dreams-series-mockup.jpg',
  slug: 'unspoken-dreams',
  price: {
    paperback: 13.99,
    bundle: 49.99,
  },
  books: [
    {
      id: 'ud-book1',
      title: "Whispers to My Unborn Son: A Mum's Poetic Life Jacket",
      description: `Before your son takes his first breath, you've already begun to shape his heart … with your love, your hope, your dreams for the man he'll become.

This book captures that sacred whisper.

Through simple, five-line rhymes and enchanting illustrations, a mother passes on courage, gentleness, and grace.

A perfect baby shower or bedtime gift … a keepsake to treasure forever.`,
      coverImage: '/assets/other-series/unspoken-dreams/b1-mum-son2.jpg',
      slug: 'whispers-to-my-unborn-son-mum',
      order: 1,
      price: {
        paperback: 13.99,
      },
    },
    {
      id: 'ud-book2',
      title: "Whispers to My Unborn Son: A Dad's Poetic Life Jacket",
      description: `Long before your son opens his eyes, your heartbeat is already teaching him strength and love.

This book is your voice when words fall short … a father's legacy in verse.

Each five-line poem becomes a compass for his soul, guiding him toward truth and tenderness.

An unforgettable keepsake for new or expecting fathers … promising wisdom that lasts a lifetime.`,
      coverImage: '/assets/other-series/unspoken-dreams/b2-dad-son-cover.jpg',
      slug: 'whispers-to-my-unborn-son-dad',
      order: 2,
      price: {
        paperback: 13.99,
      },
    },
    {
      id: 'ud-book3',
      title: "Whispers to My Unborn Daughter: A Dad's Poetic Life Jacket",
      description: `A daughter may not remember every word her father says … but she'll never forget how he made her feel: safe, seen, and loved.

These verses are his embrace in rhyme … a father's quiet devotion captured in five lines at a time.

Each poem plants seeds of confidence, compassion, and strength.

A heartwarming gift for dads welcoming daughters … the beginning of a bond that lasts forever.`,
      coverImage: '/assets/other-series/unspoken-dreams/b3_dad_daughter_cover.jpg',
      slug: 'whispers-to-my-unborn-daughter-dad',
      order: 3,
      price: {
        paperback: 13.99,
      },
    },
    {
      id: 'ud-book4',
      title: "Whispers to My Unborn Daughter: A Mum's Poetic Life Jacket",
      description: `Before your daughter sees your face, she already carries your heartbeat within her.

This book is your soul, written in lullabies.

Through tender five-line poems and radiant illustrations, a mother weaves lessons of kindness, courage, and freedom.

A gift every mum-to-be will cherish … a promise of love wrapped in poetry.`,
      coverImage: '/assets/other-series/unspoken-dreams/b4-mum-daughter.jpg',
      slug: 'whispers-to-my-unborn-daughter-mum',
      order: 4,
      price: {
        paperback: 13.99,
      },
    },
  ],
};

export function getAllOtherSeries(): SeriesMetadata[] {
  return [fathersHeartSeries, unspokenDreamsSeries];
}

export function getSeriesBySlug(slug: string): SeriesMetadata | null {
  const allSeries = getAllOtherSeries();
  return allSeries.find(series => series.slug === slug) || null;
}

export function getBookBySlug(seriesSlug: string, bookSlug: string): BookMetadata | null {
  const series = getSeriesBySlug(seriesSlug);
  if (!series) return null;
  return series.books.find(book => book.slug === bookSlug) || null;
}

