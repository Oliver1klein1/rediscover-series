// Book data embedded directly to work with file:// protocol
const books = [
  {
    "id": "book1",
    "title": "Liberating Humanity: How Jesus Exposed The Evil God Of Moses And Warned Of Paul",
    "subtitle": "",
    "description": "You've been worshiping the wrong God! Jesus exposed Him. Paul enshrined Him. Yahweh is not the Father! This book is a wrecking ball. With scripture as evidence, it unmasks Yahweh's commands — genocide, slavery, child sacrifice — and the shocking truth that Paul, not Jesus, built Christianity. Our Father's identity has been distorted. As has ours. We'd been neutralized. Mission-accomplished. Potential-stifled. This book splits the cracks wide open: no blood sacrifice required, no \"original sin,\" no counterfeit god. Only the Father Jesus revealed … pure love without terms and conditions. United with us. Raw. Explosive. Liberating.",
    "pages": 258,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/liberating-humanity-cover.jpg",
    "tags": ["rediscover", "jesus", "yahweh", "paul", "liberation"]
  },
  {
    "id": "book2",
    "title": "Escape the Hell Myth: Rediscover The Teachings Of Jesus On Love",
    "subtitle": "",
    "description": "What if the story of eternal torment isn't from Jesus at all? In Escape the Hell Myth, Ansilo Boff exposes the shocking truth: the doctrine of everlasting punishment was built on mistranslations, theological bias, and fear-based control—not on the words of Christ. Through deep linguistic study and bold spiritual insight, this book unpacks what Sheol, Hades, Gehenna, and aionios really meant in the original texts, how Jesus' teachings reveal a God of restoration, not retribution, why Yahweh's violent commands contradict the loving Father Jesus revealed, and the breathtaking hope of universal reconciliation: a divine plan to heal all creation. If you've ever questioned how a loving God could condemn souls to eternal fire, this book will help you escape the lie and rediscover the liberating message of Jesus. Jesus never taught Hell. He revealed a Father who restores, not destroys.",
    "pages": 165,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/Escape-the-hell-myth-cover-final.jpg",
    "tags": ["rediscover", "jesus", "hell", "love", "restoration"]
  },
  {
    "id": "book3",
    "title": "101 Illustrated Bible Contradictions: And 12 Keys To Unlock The Truths These Reveal",
    "subtitle": "",
    "description": "What if the Bible's contradictions are clues, not merely errors? 101 Illustrated Bible Contradictions exposes the hidden seams: verses that clash, timelines that twist, doctrines that collide. But beneath the chaos lies some deeper truths. These cracks reveal two competing images of God: the wrathful Yahweh of Moses versus the loving Father Jesus revealed. And a divided faith, torn between Jesus' Kingdom of Love and Paul's empire-friendly gospel. In this eye-opening guide, 12 Keys unlock what the contradictions show us: how Scripture was shaped, edited, and weaponized… and how the Truth still shines through. See the flaws. Find the freedom. Rediscover the Father.",
    "pages": 341,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/bible-contradictions-cover-final.jpg",
    "tags": ["rediscover", "bible", "contradictions", "scripture", "truth"]
  },
  {
    "id": "book4",
    "title": "Reality Unveiled: How Jesus Revealed You Are More Powerful Than You Ever Imagined",
    "subtitle": "",
    "description": "What if Jesus' most radical teaching wasn't about sin, but about your power to shape reality? In Reality Unveiled, the author takes you beyond religion and into revelation. Where quantum physics, near-death experiences, and ancient wisdom converge to expose the truth: consciousness, not matter, is the foundation of existence. Discover how Jesus' hidden sayings align with cutting-edge science to reveal that \"the kingdom of God is within you.\" You are not a helpless sinner awaiting rescue. You are a divine co-creator in a conscious universe, capable of manifesting healing, abundance, and transformation through awakened awareness. If you've begun questioning the old stories and are ready to uncover the breathtaking truth of who you really are, turn the page … and awaken to the universe Jesus knew all along.",
    "pages": 260,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/reality-unveiled-final.jpg",
    "tags": ["rediscover", "jesus", "consciousness", "power", "reality"]
  },
  {
    "id": "book5",
    "title": "Framing Jesus: How Ancient Bible Changes Elevated Jesus Beyond Our Reach",
    "subtitle": "",
    "description": "Some of what you know of Jesus is a fabrication. Not the man himself, but the story we've been told about him. For centuries, the church has systematically reframed Jesus' radical message, turning a revolutionary teacher of love and liberation into a religious figurehead who supports the very systems he came to dismantle. This book peels back the layers of theological manipulation to reveal the authentic Jesus the one who challenged religious authority, championed the marginalized, and taught that the kingdom of God is within you, not in a distant heaven. Discover how parts of his identity were touched up for over 2000 years and why it matters.",
    "pages": 162,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/framing-jesus-cover-final.jpg",
    "tags": ["rediscover", "jesus", "authenticity", "manipulation", "truth"]
  }
];

function displayBooks() {
    const container = document.getElementById('books-container');
    
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        
        const coverImg = document.createElement('img');
        coverImg.className = 'book-cover';
        coverImg.src = book.coverImage;
        coverImg.alt = `${book.title} cover`;
        coverImg.onerror = function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'book-cover-placeholder';
            placeholder.textContent = 'Cover image placeholder';
            card.insertBefore(placeholder, card.firstChild);
        };
        
        const title = document.createElement('h2');
        title.className = 'book-title';
        title.textContent = book.title;
        
        const pages = document.createElement('div');
        pages.className = 'book-pages';
        pages.textContent = `${book.pages} pages`;
        
        const description = document.createElement('p');
        description.className = 'book-description';
        description.textContent = book.description;
        
        card.appendChild(coverImg);
        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(description);
        
        container.appendChild(card);
    });
}

// Display books when page loads
document.addEventListener('DOMContentLoaded', displayBooks);
