export interface SEOData {
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

export interface SeriesSEO extends SEOData {
  // Series-specific fields can be added here if needed
}

export interface BookSEO extends SEOData {
  // Book-specific fields can be added here if needed
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rediscover-series.com';
const seriesUrl = `${baseUrl}/`;
const seriesName = "Rediscovering Jesus' Subverted Teachings and the Father's Love";

// Define book information for hasPart array
const bookSeriesParts = [
  {
    name: "Liberating Humanity: How Jesus Exposed The Evil God Of Moses And Warned Of Paul",
    url: `${baseUrl}/books/liberating-humanity`
  },
  {
    name: "Escape the Hell Myth: Rediscover The Teachings Of Jesus On Love",
    url: `${baseUrl}/books/escape-the-hell-myth`
  },
  {
    name: "101 Illustrated Bible Contradictions: And 12 Keys To Unlock The Truths These Reveal",
    url: `${baseUrl}/books/bible-contradictions`
  },
  {
    name: "Reality Unveiled: How Jesus Revealed You Are More Powerful Than You Ever Imagined",
    url: `${baseUrl}/books/reality-unveiled`
  },
  {
    name: "Framing Jesus: How Ancient Bible Changes Elevated Jesus Beyond Our Reach",
    url: `${baseUrl}/books/framing-jesus`
  }
];

export const seriesSEO: SeriesSEO = {
  metaTitle: "Rediscovering Jesus' Subverted Teachings | 5-Book Series",
  metaDescription: "Expose how religion distorted Jesus' message. Discover the Father's true love through 5 books revealing Yahweh vs. the Father, Paul's control, and Jesus' liberating teachings.",
  keywords: [
    "Jesus teachings",
    "faith deconstruction",
    "biblical contradictions",
    "Yahweh vs Father",
    "Paul vs Jesus",
    "hell myth",
    "Jesus authentic message",
    "religious deconstruction",
    "progressive Christianity",
    "biblical truth",
    "Jesus subverted teachings"
  ],
  ogTitle: "Rediscovering Jesus' Subverted Teachings and the Father's Love",
  ogDescription: "A 5-book series exposing how religion turned liberation into obedience and love into fear. Discover the Father Jesus revealed—not the wrathful god of tradition.",
  twitterTitle: "Rediscovering Jesus' Subverted Teachings | 5-Book Series",
  twitterDescription: "Expose how religion distorted Jesus' message. Discover the Father's true love through books revealing Yahweh vs. the Father and Jesus' liberating teachings.",
  slug: "/",
  canonicalUrl: seriesUrl,
  schema: {
    "@context": "https://schema.org",
    "@type": "BookSeries",
    "name": seriesName,
    "description": "A 5-book series exposing how religion distorted Jesus' message, turning liberation into obedience and love into fear. These books uncover how Yahweh's wrath was mistaken for the Father's love and how Paul's control replaced Jesus' freedom.",
    "author": {
      "@type": "Person",
      "name": "Ansilo Boff"
    },
    "numberOfBooks": 5,
    "url": seriesUrl,
    "inLanguage": "en-US",
    "hasPart": bookSeriesParts.map(book => ({
      "@type": "Book",
      "name": book.name,
      "url": book.url
    }))
  }
};

export function getCanonicalUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // Remove trailing slash except for root
  const cleanPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '');
  return `${baseUrl}${cleanPath}`;
}

export function getImageUrl(imagePath: string): string {
  // Ensure image path starts with /
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${normalizedPath}`;
}

// Cover image paths for each book
const bookCoverImages: Record<string, string> = {
  "liberating-humanity": "/assets/covers/liberating-humanity-cover.jpg",
  "escape-the-hell-myth": "/assets/covers/Escape-the-hell-myth-cover-final.jpg",
  "bible-contradictions": "/assets/covers/bible-contradictions-cover-final.jpg",
  "reality-unveiled": "/assets/covers/reality-unveiled-final.jpg",
  "framing-jesus": "/assets/covers/framing-jesus-cover-final.jpg"
};

export const booksSEO: Record<string, BookSEO> = {
  "liberating-humanity": {
    metaTitle: "Liberating Humanity: Jesus Exposed Yahweh & Warned of Paul",
    metaDescription: "Jesus exposed Yahweh's genocide and slavery commands. Paul built Christianity on control. Discover how Jesus revealed the Father's pure love—no blood sacrifice required.",
    keywords: [
      "Yahweh vs Father",
      "Jesus exposed Yahweh",
      "Paul vs Jesus",
      "blood sacrifice",
      "original sin",
      "Jesus liberation",
      "biblical genocide",
      "Christianity origins",
      "Jesus authentic teachings",
      "faith deconstruction",
      "Yahweh commands"
    ],
    ogTitle: "Liberating Humanity: How Jesus Exposed The Evil God Of Moses",
    ogDescription: "Jesus exposed Yahweh's commands—genocide, slavery, child sacrifice. Paul enshrined him. Discover the Father Jesus revealed: pure love without terms and conditions.",
    twitterTitle: "Liberating Humanity: Jesus Exposed Yahweh & Warned of Paul",
    twitterDescription: "Jesus exposed Yahweh's genocide commands. Paul built Christianity. Discover the Father's pure love—no blood sacrifice required.",
    slug: "/books/liberating-humanity",
    canonicalUrl: getCanonicalUrl("/books/liberating-humanity"),
    ogImage: getImageUrl(bookCoverImages["liberating-humanity"]),
    twitterImage: getImageUrl(bookCoverImages["liberating-humanity"]),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Liberating Humanity: How Jesus Exposed The Evil God Of Moses And Warned Of Paul",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "With scripture as evidence, this book unmasks Yahweh's commands—genocide, slavery, child sacrifice—and the shocking truth that Paul, not Jesus, built Christianity. Discover the Father Jesus revealed: pure love without terms and conditions.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": seriesName,
        "url": seriesUrl
      },
      "url": `${baseUrl}/books/liberating-humanity`,
      "numberOfPages": 258,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#", // TODO: Replace with actual Amazon/Gumroad URL
        "priceCurrency": "USD"
      }
    }
  },
  "escape-the-hell-myth": {
    metaTitle: "Escape the Hell Myth: Rediscover Jesus' Teachings on Love",
    metaDescription: "Eternal torment was built on mistranslations, not Jesus' words. Discover what Sheol, Hades, and Gehenna really meant—and the hope of universal restoration.",
    keywords: [
      "hell myth",
      "eternal torment",
      "Jesus hell teachings",
      "Sheol Hades Gehenna",
      "universal restoration",
      "hell mistranslation",
      "Jesus love teachings",
      "biblical hell",
      "restoration theology",
      "faith deconstruction",
      "hell doctrine"
    ],
    ogTitle: "Escape the Hell Myth: Rediscover The Teachings Of Jesus On Love",
    ogDescription: "The doctrine of eternal torment was built on mistranslations and fear-based control—not on Jesus' words. Discover the Father who restores, not destroys.",
    twitterTitle: "Escape the Hell Myth: Rediscover Jesus' Teachings on Love",
    twitterDescription: "Eternal torment was mistranslated. Discover what Jesus really taught about Sheol, Hades, and Gehenna—and the hope of universal restoration.",
    slug: "/books/escape-the-hell-myth",
    canonicalUrl: getCanonicalUrl("/books/escape-the-hell-myth"),
    ogImage: getImageUrl(bookCoverImages["escape-the-hell-myth"]),
    twitterImage: getImageUrl(bookCoverImages["escape-the-hell-myth"]),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Escape the Hell Myth: Rediscover The Teachings Of Jesus On Love",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "This book exposes the shocking truth: the doctrine of everlasting punishment was built on mistranslations, theological bias, and fear-based control—not on the words of Jesus. Discover what \"Sheol\", \"Hades\", \"Gehenna\", and \"aionios\" really meant in the original texts.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": seriesName,
        "url": seriesUrl
      },
      "url": `${baseUrl}/books/escape-the-hell-myth`,
      "numberOfPages": 165,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#", // TODO: Replace with actual Amazon/Gumroad URL
        "priceCurrency": "USD"
      }
    }
  },
  "bible-contradictions": {
    metaTitle: "101 Bible Contradictions: 12 Keys to Unlock Truth",
    metaDescription: "Bible contradictions reveal competing visions of God. Discover 12 keys that unlock what these contradictions show: Yahweh's wrath vs. the Father's love.",
    keywords: [
      "bible contradictions",
      "biblical contradictions",
      "scripture contradictions",
      "Yahweh vs Father",
      "bible errors",
      "biblical truth",
      "scripture study",
      "bible contradictions explained",
      "biblical inerrancy",
      "faith deconstruction",
      "bible contradictions book"
    ],
    ogTitle: "101 Illustrated Bible Contradictions: And 12 Keys To Unlock The Truths",
    ogDescription: "What if Bible contradictions are clues, not errors? These cracks reveal two competing images of God: Yahweh's wrath versus the Father's love Jesus revealed.",
    twitterTitle: "101 Bible Contradictions: 12 Keys to Unlock Truth",
    twitterDescription: "Bible contradictions reveal competing visions of God. Discover 12 keys that unlock Yahweh's wrath vs. the Father's love.",
    slug: "/books/bible-contradictions",
    canonicalUrl: getCanonicalUrl("/books/bible-contradictions"),
    ogImage: getImageUrl(bookCoverImages["bible-contradictions"]),
    twitterImage: getImageUrl(bookCoverImages["bible-contradictions"]),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "101 Illustrated Bible Contradictions: And 12 Keys To Unlock The Truths These Reveal",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "What if the Bible's contradictions are clues, not merely errors? These cracks reveal two competing images of God: the wrathful Yahweh of Moses versus the loving Father Jesus revealed. Discover 12 keys that unlock what the contradictions show us.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": seriesName,
        "url": seriesUrl
      },
      "url": `${baseUrl}/books/bible-contradictions`,
      "numberOfPages": 341,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#", // TODO: Replace with actual Amazon/Gumroad URL
        "priceCurrency": "USD"
      }
    }
  },
  "reality-unveiled": {
    metaTitle: "Reality Unveiled: Jesus Revealed Your Divine Power",
    metaDescription: "Jesus' radical teaching: consciousness shapes reality. Discover how quantum physics, near-death experiences, and Jesus' hidden sayings reveal your divine co-creator power.",
    keywords: [
      "Jesus consciousness",
      "quantum physics Jesus",
      "divine co-creator",
      "kingdom of God within",
      "consciousness reality",
      "Jesus hidden teachings",
      "spiritual awakening",
      "manifestation Jesus",
      "near-death experiences",
      "faith deconstruction",
      "Jesus power teachings"
    ],
    ogTitle: "Reality Unveiled: How Jesus Revealed You Are More Powerful",
    ogDescription: "What if Jesus' most radical teaching wasn't about sin, but about your power to shape reality? Discover consciousness, quantum physics, and Jesus' hidden sayings.",
    twitterTitle: "Reality Unveiled: Jesus Revealed Your Divine Power",
    twitterDescription: "Jesus' radical teaching: consciousness shapes reality. Discover quantum physics, near-death experiences, and your divine co-creator power.",
    slug: "/books/reality-unveiled",
    canonicalUrl: getCanonicalUrl("/books/reality-unveiled"),
    ogImage: getImageUrl(bookCoverImages["reality-unveiled"]),
    twitterImage: getImageUrl(bookCoverImages["reality-unveiled"]),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Reality Unveiled: How Jesus Revealed You Are More Powerful Than You Ever Imagined",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "What if Jesus' most radical teaching wasn't about sin, but about your power to shape reality? Discover how quantum physics, near-death experiences, and ancient wisdom converge to reveal that consciousness, not matter, is the foundation of existence.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": seriesName,
        "url": seriesUrl
      },
      "url": `${baseUrl}/books/reality-unveiled`,
      "numberOfPages": 260,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#", // TODO: Replace with actual Amazon/Gumroad URL
        "priceCurrency": "USD"
      }
    }
  },
  "framing-jesus": {
    metaTitle: "Framing Jesus: How Bible Changes Elevated Jesus Beyond Reach",
    metaDescription: "Ancient manuscripts reveal verses were edited to elevate Jesus. Discover documented proof: 6 Church Fathers quoted verses missing from modern Bibles.",
    keywords: [
      "biblical textual criticism",
      "historical Jesus",
      "manuscript evidence",
      "Trinity origins",
      "Council of Nicaea",
      "early Christianity",
      "Jesus elevation",
      "biblical variants",
      "Church Fathers",
      "faith deconstruction",
      "Jesus authenticity"
    ],
    ogTitle: "Framing Jesus: How Ancient Bible Changes Elevated Jesus",
    ogDescription: "Six Church Fathers quoted Bible verses identifying 'the Father as Creator of all'—verses that vanished from every modern Bible as scribes elevated Jesus.",
    twitterTitle: "Framing Jesus: Bible Changes Elevated Jesus Beyond Reach",
    twitterDescription: "Ancient manuscripts reveal verses were edited. Discover documented proof: 6 Church Fathers quoted verses missing from modern Bibles.",
    slug: "/books/framing-jesus",
    canonicalUrl: getCanonicalUrl("/books/framing-jesus"),
    ogImage: getImageUrl(bookCoverImages["framing-jesus"]),
    twitterImage: getImageUrl(bookCoverImages["framing-jesus"]),
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Framing Jesus: How Ancient Bible Changes Elevated Jesus Beyond Our Reach",
      "author": {
        "@type": "Person",
        "name": "Ansilo Boff"
      },
      "description": "Through documented examination of early manuscripts and Church Father quotations, discover how Jesus's subordinate statements about the Father were progressively edited or deleted as theology evolved from 'Jesus exalted at resurrection' to 'Jesus eternally God.'",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "BookSeries",
        "name": seriesName,
        "url": seriesUrl
      },
      "url": `${baseUrl}/books/framing-jesus`,
      "numberOfPages": 162,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "#", // TODO: Replace with actual Amazon/Gumroad URL
        "priceCurrency": "USD"
      }
    }
  }
};

export function getSEOForBook(slug: string): BookSEO | null {
  return booksSEO[slug] || null;
}

export function getSeriesSEO(): SeriesSEO {
  return seriesSEO;
}

