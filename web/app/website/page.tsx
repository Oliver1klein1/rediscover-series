'use client';

import Image from 'next/image';
import Script from 'next/script';

// Book data from website/script.js
const books = [
  {
    id: "book1",
    title: "Liberating Humanity: How Jesus Exposed The Evil God Of Moses And Warned Of Paul",
    subtitle: "",
    description: "You've been worshiping the wrong God! Jesus exposed Him. Paul enshrined Him. Yahweh is not the Father! This book is a wrecking ball. With scripture as evidence, it unmasks Yahweh's commands — genocide, slavery, child sacrifice — and the shocking truth that Paul, not Jesus, built Christianity. Our Father's identity has been distorted. As has ours. We'd been neutralized. Mission-accomplished. Potential-stifled. This book splits the cracks wide open: no blood sacrifice required, no \"original sin,\" no counterfeit god. Only the Father Jesus revealed … pure love without terms and conditions. United with us. Raw. Explosive. Liberating.",
    pages: 258,
    coverImage: "/assets/covers/liberating-humanity-cover.jpg",
  },
  {
    id: "book2",
    title: "Escape the Hell Myth: Rediscover The Teachings Of Jesus On Love",
    subtitle: "",
    description: "What if the story of eternal torment isn't from Jesus at all? In Escape the Hell Myth, Ansilo Boff exposes the shocking truth: the doctrine of everlasting punishment was built on mistranslations, theological bias, and fear-based control—not on the words of Christ. Through deep linguistic study and bold spiritual insight, this book unpacks what Sheol, Hades, Gehenna, and aionios really meant in the original texts, how Jesus' teachings reveal a God of restoration, not retribution, why Yahweh's violent commands contradict the loving Father Jesus revealed, and the breathtaking hope of universal reconciliation: a divine plan to heal all creation. If you've ever questioned how a loving God could condemn souls to eternal fire, this book will help you escape the lie and rediscover the liberating message of Jesus. Jesus never taught Hell. He revealed a Father who restores, not destroys.",
    pages: 165,
    coverImage: "/assets/covers/Escape-the-hell-myth-cover-final.jpg",
  },
  {
    id: "book3",
    title: "101 Illustrated Bible Contradictions: And 12 Keys To Unlock The Truths These Reveal",
    subtitle: "",
    description: "What if the Bible's contradictions are clues, not merely errors? 101 Illustrated Bible Contradictions exposes the hidden seams: verses that clash, timelines that twist, doctrines that collide. But beneath the chaos lies some deeper truths. These cracks reveal two competing images of God: the wrathful Yahweh of Moses versus the loving Father Jesus revealed. And a divided faith, torn between Jesus' Kingdom of Love and Paul's empire-friendly gospel. In this eye-opening guide, 12 Keys unlock what the contradictions show us: how Scripture was shaped, edited, and weaponized… and how the Truth still shines through. See the flaws. Find the freedom. Rediscover the Father.",
    pages: 341,
    coverImage: "/assets/covers/bible-contradictions-cover-final.jpg",
  },
  {
    id: "book4",
    title: "Reality Unveiled: How Jesus Revealed You Are More Powerful Than You Ever Imagined",
    subtitle: "",
    description: "What if Jesus' most radical teaching wasn't about sin, but about your power to shape reality? In Reality Unveiled, the author takes you beyond religion and into revelation. Where quantum physics, near-death experiences, and ancient wisdom converge to expose the truth: consciousness, not matter, is the foundation of existence. Discover how Jesus' hidden sayings align with cutting-edge science to reveal that \"the kingdom of God is within you.\" You are not a helpless sinner awaiting rescue. You are a divine co-creator in a conscious universe, capable of manifesting healing, abundance, and transformation through awakened awareness. If you've begun questioning the old stories and are ready to uncover the breathtaking truth of who you really are, turn the page … and awaken to the universe Jesus knew all along.",
    pages: 260,
    coverImage: "/assets/covers/reality-unveiled-final.jpg",
  },
  {
    id: "book5",
    title: "Framing Jesus: How Ancient Bible Changes Elevated Jesus Beyond Our Reach",
    subtitle: "",
    description: "Some of what you know of Jesus is a fabrication. Not the man himself, but the story we've been told about him. For centuries, the church has systematically reframed Jesus' radical message, turning a revolutionary teacher of love and liberation into a religious figurehead who supports the very systems he came to dismantle. This book peels back the layers of theological manipulation to reveal the authentic Jesus the one who challenged religious authority, championed the marginalized, and taught that the kingdom of God is within you, not in a distant heaven. Discover how parts of his identity were touched up for over 2000 years and why it matters.",
    pages: 162,
    coverImage: "/assets/covers/framing-jesus-cover-final.jpg",
  }
];

export default function WebsitePage() {
  return (
    <div className="website-container">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .website-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
          padding: 20px;
        }

        header {
          text-align: center;
          margin-bottom: 40px;
          padding: 20px 0;
        }

        header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #1a1a1a;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 20px;
        }

        .series-mockup {
          max-width: 600px;
          width: 100%;
          height: auto;
          margin: 20px auto;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: block;
        }

        .series-description {
          max-width: 800px;
          margin: 30px auto;
          padding: 0 20px;
          text-align: left;
          line-height: 1.8;
        }

        .series-description p {
          margin-bottom: 15px;
          font-size: 1.05rem;
          color: #444;
        }

        .series-description p:first-child {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        .series-description p:last-child {
          font-size: 0.95rem;
          color: #666;
          margin-top: 20px;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .book-card {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .book-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .book-cover {
          width: 100%;
          height: auto;
          border-radius: 4px;
          margin-bottom: 15px;
          max-height: 400px;
          object-fit: contain;
        }

        .book-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .book-pages {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 10px;
        }

        .book-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          header h1 {
            font-size: 1.8rem;
          }

          .books-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header>
        <h1>Rediscovering Jesus' Subverted Teachings and the Father's Love</h1>
        <p className="subtitle">5-Book Series</p>
        <Image
          src="/assets/covers/rediscover_boxed_set_final2.jpg"
          alt="Rediscover Series Boxed Set"
          width={600}
          height={450}
          className="series-mockup"
          priority
        />
        <div className="series-description">
          <p>For two thousand years, religion has distorted Jesus' message … turning liberation into obedience, and love into fear. It told us God demanded blood, that sin defined us from birth, and that submission (being 'under authority') mattered more than awareness.</p>
          
          <p>But what if that story wasn't from Jesus at all?</p>
          
          <p>This series rips through the edits, lies, and power plays that buried his true teachings. It exposes how Yahweh's wrath was mistaken for the Father's love … and how Paul's control replaced Jesus' freedom. From <em style={{fontWeight: 'bold', fontStyle: 'italic'}}>"Liberating Humanity"</em> to <em style={{fontWeight: 'bold', fontStyle: 'italic'}}>"Escape the Hell Myth"</em>, these books uncover a single revelation: Jesus never preached fear, wrath, or blood sacrifice. The scriptures were tampered with. Jesus revealed a Father who restores, not destroys.</p>
          
          <p>From fear to freedom. From illusion to truth.</p>
          
          <p><em>Raw. Daring. Restorative.</em></p>
          
          <p>This isn't the end of faith … it's the beginning of awakening and living abundantly.</p>
          
          <p>All available in 6 x 9 inch paperback, hardcover and ebook format. Audiobook available for "Liberating Humanity: How Jesus Exposed The Evil God Of Moses And Warned Of Paul"</p>
        </div>
      </header>
      
      <main>
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <Image
                src={book.coverImage}
                alt={`${book.title} cover`}
                width={300}
                height={400}
                className="book-cover"
              />
              <h2 className="book-title">{book.title}</h2>
              <div className="book-pages">{book.pages} pages</div>
              <p className="book-description">{book.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

