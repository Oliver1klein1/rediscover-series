import { getAllOtherSeries, getSeriesBySlug, getBookBySlug } from '@/lib/otherSeries';
import { getCanonicalUrl, getImageUrl } from './seo';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rediscover-series.com';

export interface OtherSeriesSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage?: string;
  slug: string;
  canonicalUrl: string;
  schema: Record<string, any>;
}

export interface OtherBookSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage?: string;
  slug: string;
  canonicalUrl: string;
  schema: Record<string, any>;
}

// The Father's Heart Series SEO
const fathersHeartSeriesSEO: OtherSeriesSEO = {
  metaTitle: "The Father's Heart Children's Book Series | Ansilo Boff",
  metaDescription: "Children's books introducing kids to the gentle, forgiving Father Jesus revealed. Stories of forgiveness, kindness, peace, and welcome for ages 3-7.",
  keywords: [
    "children's books",
    "Christian children's books",
    "Jesus teachings for kids",
    "forgiveness for children",
    "children's Bible stories",
    "gentle God children",
    "kids books about God",
    "Christian parenting",
    "bedtime stories",
    "Sunday school books"
  ],
  ogTitle: "The Father's Heart Children's Book Series",
  ogDescription: "See others and God through Jesus' eyes. Tender stories that help children feel safe, kind, and deeply loved.",
  ogImage: getImageUrl('/assets/other-series/fathers-heart/fh_mockup1112.jpg'),
  twitterTitle: "The Father's Heart Children's Book Series",
  twitterDescription: "Children's books introducing kids to the gentle Father Jesus revealed. Stories of forgiveness, kindness, and peace.",
  twitterImage: getImageUrl('/assets/other-series/fathers-heart/fh_mockup1112.jpg'),
  slug: '/other-books/fathers-heart',
  canonicalUrl: getCanonicalUrl('/other-books/fathers-heart'),
  schema: {
    "@context": "https://schema.org",
    "@type": "BookSeries",
    "name": "The Father's Heart Children's Book Series",
    "description": "What if the stories we tell about God helped children feel safe, kind, and deeply loved? This series re-introduces children to the gentle, forgiving Father that Jesus revealed—not a God of punishment or fear, but one of peace, mercy, and inclusion.",
    "author": {
      "@type": "Person",
      "name": "Ansilo Boff"
    },
    "numberOfBooks": 5,
    "url": getCanonicalUrl('/other-books/fathers-heart'),
    "inLanguage": "en-US",
    "hasPart": [
      {
        "@type": "Book",
        "name": "When My Little Brother Broke My Toy: So That's What \"Forgive\" Means!",
        "url": getCanonicalUrl('/other-books/fathers-heart/when-my-little-brother-broke-my-toy')
      },
      {
        "@type": "Book",
        "name": "When I Decided I Won't Be Friends with Oliver Anymore: So That's What \"Not Holding a Grudge\" Means!",
        "url": getCanonicalUrl('/other-books/fathers-heart/when-i-decided-i-wont-be-friends-with-oliver-anymore')
      },
      {
        "@type": "Book",
        "name": "Why Saying Bad Words To or About Others Makes Everyone Sad: So That's What \"Guarding Our Tongue\" Means!",
        "url": getCanonicalUrl('/other-books/fathers-heart/why-saying-bad-words-makes-everyone-sad')
      },
      {
        "@type": "Book",
        "name": "When Thunder Made Me Hide: So That's What \"Peace Inside\" Means!",
        "url": getCanonicalUrl('/other-books/fathers-heart/when-thunder-made-me-hide')
      },
      {
        "@type": "Book",
        "name": "When We Made Room at Our Table: So That's What \"Welcome\" Means!",
        "url": getCanonicalUrl('/other-books/fathers-heart/when-we-made-room-at-our-table')
      }
    ]
  }
};

// The Unspoken Hopes and Dreams Series SEO
const unspokenDreamsSeriesSEO: OtherSeriesSEO = {
  metaTitle: "Unspoken Hopes and Dreams Series | Poetic Books for Parents",
  metaDescription: "Poetic love letters from parent to child. Five-line verses for expecting parents and newborns. Perfect baby shower gifts and keepsakes.",
  keywords: [
    "poetry books for parents",
    "baby shower gifts",
    "unborn child books",
    "parent to child poetry",
    "expecting parent books",
    "newborn books",
    "keepsake books",
    "poetry for children",
    "parenting poetry",
    "baby books"
  ],
  ogTitle: "The 'Unspoken Hopes and Dreams' Series",
  ogDescription: "A whisper. A promise. A lifeline wrapped in verse. Poetic love letters from parent to child, written before the first breath.",
  ogImage: getImageUrl('/assets/other-series/unspoken-dreams/unspoken-hopes-and-dreams-series-mockup.jpg'),
  twitterTitle: "Unspoken Hopes and Dreams Series | Poetic Books",
  twitterDescription: "Poetic love letters from parent to child. Five-line verses for expecting parents and newborns.",
  twitterImage: getImageUrl('/assets/other-series/unspoken-dreams/unspoken-hopes-and-dreams-series-mockup.jpg'),
  slug: '/other-books/unspoken-dreams',
  canonicalUrl: getCanonicalUrl('/other-books/unspoken-dreams'),
  schema: {
    "@context": "https://schema.org",
    "@type": "BookSeries",
    "name": "The 'Unspoken Hopes and Dreams' Series",
    "description": "A poetic love letter from parent to child, written before the first breath, the first step, the first word. Each book is a tender collection of five-line verses that anchor a child's soul in love, courage, and belonging.",
    "author": {
      "@type": "Person",
      "name": "Ansilo Boff"
    },
    "numberOfBooks": 4,
    "url": getCanonicalUrl('/other-books/unspoken-dreams'),
    "inLanguage": "en-US",
    "hasPart": [
      {
        "@type": "Book",
        "name": "Whispers to My Unborn Son: A Mum's Poetic Life Jacket",
        "url": getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-son-mum')
      },
      {
        "@type": "Book",
        "name": "Whispers to My Unborn Son: A Dad's Poetic Life Jacket",
        "url": getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-son-dad')
      },
      {
        "@type": "Book",
        "name": "Whispers to My Unborn Daughter: A Dad's Poetic Life Jacket",
        "url": getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-daughter-dad')
      },
      {
        "@type": "Book",
        "name": "Whispers to My Unborn Daughter: A Mum's Poetic Life Jacket",
        "url": getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-daughter-mum')
      }
    ]
  }
};

// Father's Heart Books SEO
const fathersHeartBooksSEO: Record<string, OtherBookSEO> = {
  'when-my-little-brother-broke-my-toy': {
    metaTitle: "When My Little Brother Broke My Toy | Children's Book",
    metaDescription: "A tender story teaching children what forgiveness means. When a toy breaks, kids discover the Father never punishes—He only loves and forgives.",
    keywords: [
      "forgiveness children's book",
      "teaching forgiveness kids",
      "Christian children's book",
      "sibling forgiveness",
      "kids books about forgiveness",
      "Jesus forgiveness children",
      "gentle God children"
    ],
    ogTitle: "When My Little Brother Broke My Toy: So That's What \"Forgive\" Means!",
    ogDescription: "What if forgiveness wasn't about payback—but about love that keeps going? A tender story helping children let go of anger and feel God's smile.",
    ogImage: getImageUrl('/assets/other-series/fathers-heart/fh-book1-cover.jpg'),
    twitterTitle: "When My Little Brother Broke My Toy | Children's Book",
    twitterDescription: "A tender story teaching children what forgiveness means. Discover the Father who never punishes—He only loves.",
    twitterImage: getImageUrl('/assets/other-series/fathers-heart/fh-book1-cover.jpg'),
    slug: '/other-books/fathers-heart/when-my-little-brother-broke-my-toy',
    canonicalUrl: getCanonicalUrl('/other-books/fathers-heart/when-my-little-brother-broke-my-toy'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "When My Little Brother Broke My Toy: So That's What \"Forgive\" Means!",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "What if forgiveness wasn't about payback—but about love that keeps going? When a child's toy breaks, so does his heart. But through gentle storytelling and bright illustrations, kids discover what Jesus revealed: the Father never punishes or holds grudges—He only loves and forgives.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The Father's Heart Children's Book Series",
        "url": getCanonicalUrl('/other-books/fathers-heart')
      },
      "url": getCanonicalUrl('/other-books/fathers-heart/when-my-little-brother-broke-my-toy'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "14.99"
      }
    }
  },
  'when-i-decided-i-wont-be-friends-with-oliver-anymore': {
    metaTitle: "When I Decided I Won't Be Friends with Oliver | Kids Book",
    metaDescription: "A heartfelt story teaching children not to hold grudges. When friendship breaks, kids learn that mercy always brings the sunshine back.",
    keywords: [
      "children's book about grudges",
      "friendship forgiveness kids",
      "not holding grudges children",
      "mercy children's book",
      "kids books friendship",
      "Christian children's stories"
    ],
    ogTitle: "When I Decided I Won't Be Friends with Oliver Anymore",
    ogDescription: "Can love start again after friendship breaks? A heartfelt reminder that the Father never keeps score—He simply says, 'Let's start again.'",
    ogImage: getImageUrl('/assets/other-series/fathers-heart/fh-book2-cover.jpg'),
    twitterTitle: "When I Decided I Won't Be Friends with Oliver | Kids Book",
    twitterDescription: "A story teaching children not to hold grudges. Mercy always brings the sunshine back.",
    twitterImage: getImageUrl('/assets/other-series/fathers-heart/fh-book2-cover.jpg'),
    slug: '/other-books/fathers-heart/when-i-decided-i-wont-be-friends-with-oliver-anymore',
    canonicalUrl: getCanonicalUrl('/other-books/fathers-heart/when-i-decided-i-wont-be-friends-with-oliver-anymore'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "When I Decided I Won't Be Friends with Oliver Anymore: So That's What \"Not Holding a Grudge\" Means!",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "Can love start again after friendship breaks? When hurt feelings turn heavy, one child learns that real strength isn't in winning … it's in forgiving. Through playful scenes and a whisper of God's voice, readers see that the Father never keeps score; He simply says, 'Let's start again.'",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The Father's Heart Children's Book Series",
        "url": getCanonicalUrl('/other-books/fathers-heart')
      },
      "url": getCanonicalUrl('/other-books/fathers-heart/when-i-decided-i-wont-be-friends-with-oliver-anymore'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "14.99"
      }
    }
  },
  'why-saying-bad-words-makes-everyone-sad': {
    metaTitle: "Why Saying Bad Words Makes Everyone Sad | Kids Book",
    metaDescription: "A joyful story teaching children to guard their tongue. Kids learn that words can hurt or heal, and the Father's words always bless.",
    keywords: [
      "children's book about words",
      "guarding tongue kids",
      "kind words children",
      "speech children's book",
      "kids books about kindness",
      "Christian children's stories"
    ],
    ogTitle: "Why Saying Bad Words To or About Others Makes Everyone Sad",
    ogDescription: "Words can hurt—or heal. A joyful story that helps kids speak kindly, choose bright 'heart-colors,' and spread love wherever they go.",
    ogImage: getImageUrl('/assets/other-series/fathers-heart/fh-book3-cover.jpg'),
    twitterTitle: "Why Saying Bad Words Makes Everyone Sad | Kids Book",
    twitterDescription: "A story teaching children to guard their tongue. Words can hurt or heal—choose kindness.",
    twitterImage: getImageUrl('/assets/other-series/fathers-heart/fh-book3-cover.jpg'),
    slug: '/other-books/fathers-heart/why-saying-bad-words-makes-everyone-sad',
    canonicalUrl: getCanonicalUrl('/other-books/fathers-heart/why-saying-bad-words-makes-everyone-sad'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Why Saying Bad Words To or About Others Makes Everyone Sad: So That's What \"Guarding Our Tongue\" Means!",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "Words can hurt—or heal. After blurting something mean, a young child discovers that words are like colors: some paint gray, others paint joy. With Jesus as the gentle teacher, children learn how the Father's words always bless, never curse.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The Father's Heart Children's Book Series",
        "url": getCanonicalUrl('/other-books/fathers-heart')
      },
      "url": getCanonicalUrl('/other-books/fathers-heart/why-saying-bad-words-makes-everyone-sad'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "14.99"
      }
    }
  },
  'when-thunder-made-me-hide': {
    metaTitle: "When Thunder Made Me Hide | Children's Book About Peace",
    metaDescription: "A comforting story teaching children about inner peace. Even the loudest storm can't shake God's peace within.",
    keywords: [
      "children's book about peace",
      "fear children's book",
      "peace inside kids",
      "storms children's book",
      "trust God children",
      "Christian children's stories"
    ],
    ogTitle: "When Thunder Made Me Hide: So That's What \"Peace Inside\" Means!",
    ogDescription: "Even the loudest storm can't shake God's peace. This comforting story helps children trade fear for trust and discover true safety.",
    ogImage: getImageUrl('/assets/other-series/fathers-heart/fh-book4-cover.jpg'),
    twitterTitle: "When Thunder Made Me Hide | Children's Book",
    twitterDescription: "A story teaching children about inner peace. Even storms can't shake God's peace within.",
    twitterImage: getImageUrl('/assets/other-series/fathers-heart/fh-book4-cover.jpg'),
    slug: '/other-books/fathers-heart/when-thunder-made-me-hide',
    canonicalUrl: getCanonicalUrl('/other-books/fathers-heart/when-thunder-made-me-hide'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "When Thunder Made Me Hide: So That's What \"Peace Inside\" Means!",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "Even the loudest storm can't shake God's peace. When thunder roars, fear whispers, 'God is angry.' But in the quiet of the child's heart, another voice answers, 'I'm here—always calm, always love.' This comforting story helps children trade fear for trust and discover that true safety comes from the Father's presence within.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The Father's Heart Children's Book Series",
        "url": getCanonicalUrl('/other-books/fathers-heart')
      },
      "url": getCanonicalUrl('/other-books/fathers-heart/when-thunder-made-me-hide'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "14.99"
      }
    }
  },
  'when-we-made-room-at-our-table': {
    metaTitle: "When We Made Room at Our Table | Children's Book",
    metaDescription: "A beautiful story teaching children about welcome and inclusion. Making room for others shows the Father's love.",
    keywords: [
      "children's book about welcome",
      "inclusion children's book",
      "hospitality kids",
      "sharing children's book",
      "generosity children",
      "Christian children's stories"
    ],
    ogTitle: "When We Made Room at Our Table: So That's What \"Welcome\" Means!",
    ogDescription: "What happens when we make room for one more? A beautiful story of generosity, belonging, and the kind of welcome that feels like home.",
    ogImage: getImageUrl('/assets/other-series/fathers-heart/fh-book5-cover.jpg'),
    twitterTitle: "When We Made Room at Our Table | Children's Book",
    twitterDescription: "A story teaching children about welcome and inclusion. Making room shows the Father's love.",
    twitterImage: getImageUrl('/assets/other-series/fathers-heart/fh-book5-cover.jpg'),
    slug: '/other-books/fathers-heart/when-we-made-room-at-our-table',
    canonicalUrl: getCanonicalUrl('/other-books/fathers-heart/when-we-made-room-at-our-table'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "When We Made Room at Our Table: So That's What \"Welcome\" Means!",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "What happens when we make room for one more? A simple bowl of soup becomes a feast of friendship as a family invites new neighbors to share their table. Through warmth and wonder, children learn that love grows by including others—the way the Father includes everyone.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The Father's Heart Children's Book Series",
        "url": getCanonicalUrl('/other-books/fathers-heart')
      },
      "url": getCanonicalUrl('/other-books/fathers-heart/when-we-made-room-at-our-table'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "14.99"
      }
    }
  }
};

// Unspoken Dreams Books SEO
const unspokenDreamsBooksSEO: Record<string, OtherBookSEO> = {
  'whispers-to-my-unborn-son-mum': {
    metaTitle: "Whispers to My Unborn Son: A Mum's Poetic Life Jacket",
    metaDescription: "A mother's poetic love letter to her unborn son. Five-line verses passing on courage, gentleness, and grace. Perfect baby shower gift.",
    keywords: [
      "poetry for unborn child",
      "mother to son poetry",
      "baby shower gift book",
      "expecting mother book",
      "poetry keepsake",
      "unborn child book",
      "mum to son book"
    ],
    ogTitle: "Whispers to My Unborn Son: A Mum's Poetic Life Jacket",
    ogDescription: "Before your son takes his first breath, you've already begun to shape his heart. A perfect baby shower or bedtime gift—a keepsake to treasure forever.",
    ogImage: getImageUrl('/assets/other-series/unspoken-dreams/b1-mum-son2.jpg'),
    twitterTitle: "Whispers to My Unborn Son: A Mum's Poetic Life Jacket",
    twitterDescription: "A mother's poetic love letter to her unborn son. Five-line verses passing on courage and grace.",
    twitterImage: getImageUrl('/assets/other-series/unspoken-dreams/b1-mum-son2.jpg'),
    slug: '/other-books/unspoken-dreams/whispers-to-my-unborn-son-mum',
    canonicalUrl: getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-son-mum'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Whispers to My Unborn Son: A Mum's Poetic Life Jacket",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "Before your son takes his first breath, you've already begun to shape his heart … with your love, your hope, your dreams for the man he'll become. This book captures that sacred whisper. Through simple, five-line rhymes and enchanting illustrations, a mother passes on courage, gentleness, and grace.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The 'Unspoken Hopes and Dreams' Series",
        "url": getCanonicalUrl('/other-books/unspoken-dreams')
      },
      "url": getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-son-mum'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "13.99"
      }
    }
  },
  'whispers-to-my-unborn-son-dad': {
    metaTitle: "Whispers to My Unborn Son: A Dad's Poetic Life Jacket",
    metaDescription: "A father's poetic legacy to his unborn son. Five-line verses guiding him toward truth and tenderness. Perfect gift for expecting fathers.",
    keywords: [
      "poetry for unborn child",
      "father to son poetry",
      "dad to son book",
      "expecting father book",
      "poetry keepsake",
      "unborn child book",
      "father's legacy book"
    ],
    ogTitle: "Whispers to My Unborn Son: A Dad's Poetic Life Jacket",
    ogDescription: "Long before your son opens his eyes, your heartbeat is already teaching him strength and love. An unforgettable keepsake for new or expecting fathers.",
    ogImage: getImageUrl('/assets/other-series/unspoken-dreams/b2-dad-son-cover.jpg'),
    twitterTitle: "Whispers to My Unborn Son: A Dad's Poetic Life Jacket",
    twitterDescription: "A father's poetic legacy to his unborn son. Five-line verses guiding him toward truth and tenderness.",
    twitterImage: getImageUrl('/assets/other-series/unspoken-dreams/b2-dad-son-cover.jpg'),
    slug: '/other-books/unspoken-dreams/whispers-to-my-unborn-son-dad',
    canonicalUrl: getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-son-dad'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Whispers to My Unborn Son: A Dad's Poetic Life Jacket",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "Long before your son opens his eyes, your heartbeat is already teaching him strength and love. This book is your voice when words fall short … a father's legacy in verse. Each five-line poem becomes a compass for his soul, guiding him toward truth and tenderness.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The 'Unspoken Hopes and Dreams' Series",
        "url": getCanonicalUrl('/other-books/unspoken-dreams')
      },
      "url": getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-son-dad'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "13.99"
      }
    }
  },
  'whispers-to-my-unborn-daughter-dad': {
    metaTitle: "Whispers to My Unborn Daughter: A Dad's Poetic Life Jacket",
    metaDescription: "A father's poetic embrace for his unborn daughter. Five-line verses planting seeds of confidence, compassion, and strength.",
    keywords: [
      "poetry for unborn child",
      "father to daughter poetry",
      "dad to daughter book",
      "expecting father book",
      "poetry keepsake",
      "unborn child book",
      "father daughter bond"
    ],
    ogTitle: "Whispers to My Unborn Daughter: A Dad's Poetic Life Jacket",
    ogDescription: "A daughter may not remember every word her father says … but she'll never forget how he made her feel: safe, seen, and loved.",
    ogImage: getImageUrl('/assets/other-series/unspoken-dreams/b3_dad_daughter_cover.jpg'),
    twitterTitle: "Whispers to My Unborn Daughter: A Dad's Poetic Life Jacket",
    twitterDescription: "A father's poetic embrace for his unborn daughter. Verses planting seeds of confidence and strength.",
    twitterImage: getImageUrl('/assets/other-series/unspoken-dreams/b3_dad_daughter_cover.jpg'),
    slug: '/other-books/unspoken-dreams/whispers-to-my-unborn-daughter-dad',
    canonicalUrl: getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-daughter-dad'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Whispers to My Unborn Daughter: A Dad's Poetic Life Jacket",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "A daughter may not remember every word her father says … but she'll never forget how he made her feel: safe, seen, and loved. These verses are his embrace in rhyme … a father's quiet devotion captured in five lines at a time. Each poem plants seeds of confidence, compassion, and strength.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The 'Unspoken Hopes and Dreams' Series",
        "url": getCanonicalUrl('/other-books/unspoken-dreams')
      },
      "url": getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-daughter-dad'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "13.99"
      }
    }
  },
  'whispers-to-my-unborn-daughter-mum': {
    metaTitle: "Whispers to My Unborn Daughter: A Mum's Poetic Life Jacket",
    metaDescription: "A mother's soul written in lullabies for her unborn daughter. Tender five-line poems weaving lessons of kindness, courage, and freedom.",
    keywords: [
      "poetry for unborn child",
      "mother to daughter poetry",
      "mum to daughter book",
      "expecting mother book",
      "poetry keepsake",
      "unborn child book",
      "mother daughter bond"
    ],
    ogTitle: "Whispers to My Unborn Daughter: A Mum's Poetic Life Jacket",
    ogDescription: "Before your daughter sees your face, she already carries your heartbeat within her. A gift every mum-to-be will cherish—a promise of love wrapped in poetry.",
    ogImage: getImageUrl('/assets/other-series/unspoken-dreams/b4-mum-daughter.jpg'),
    twitterTitle: "Whispers to My Unborn Daughter: A Mum's Poetic Life Jacket",
    twitterDescription: "A mother's soul written in lullabies. Tender poems weaving lessons of kindness, courage, and freedom.",
    twitterImage: getImageUrl('/assets/other-series/unspoken-dreams/b4-mum-daughter.jpg'),
    slug: '/other-books/unspoken-dreams/whispers-to-my-unborn-daughter-mum',
    canonicalUrl: getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-daughter-mum'),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Whispers to My Unborn Daughter: A Mum's Poetic Life Jacket",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "Before your daughter sees your face, she already carries your heartbeat within her. This book is your soul, written in lullabies. Through tender five-line poems and radiant illustrations, a mother weaves lessons of kindness, courage, and freedom.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": "The 'Unspoken Hopes and Dreams' Series",
        "url": getCanonicalUrl('/other-books/unspoken-dreams')
      },
      "url": getCanonicalUrl('/other-books/unspoken-dreams/whispers-to-my-unborn-daughter-mum'),
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#",
        "priceCurrency": "USD",
        "price": "13.99"
      }
    }
  }
};

// Helper functions
export function getOtherSeriesSEO(seriesSlug: string): OtherSeriesSEO | null {
  if (seriesSlug === 'fathers-heart') {
    return fathersHeartSeriesSEO;
  }
  if (seriesSlug === 'unspoken-dreams') {
    return unspokenDreamsSeriesSEO;
  }
  return null;
}

export function getOtherBookSEO(seriesSlug: string, bookSlug: string): OtherBookSEO | null {
  if (seriesSlug === 'fathers-heart') {
    return fathersHeartBooksSEO[bookSlug] || null;
  }
  if (seriesSlug === 'unspoken-dreams') {
    return unspokenDreamsBooksSEO[bookSlug] || null;
  }
  return null;
}

