# Rediscover Series

Repository for "Rediscovering Jesus' Subverted Teachings and the Father's Love" book series.

## Structure

```
rediscover-series/
├── series-info/          # Series-wide documentation
│   ├── series-overview.md
│   └── reading-order.md
├── books/                # Individual book metadata
│   ├── book1.json
│   ├── book2.json
│   ├── book3.json
│   ├── book4.json
│   └── book5.json
├── assets/               # Media assets
│   └── covers/          # Book cover images
└── website/             # Simple static website
    ├── index.html
    ├── styles.css
    ├── script.js
    └── package.json
```

## Books

1. **Liberating Humanity** - Exposes Yahweh vs. the Father, and how Paul built Christianity
2. **Escape the Hell Myth** - Reveals how eternal torment was mistranslated and misused
3. **101 Illustrated Bible Contradictions** - Uses contradictions as clues to uncover truth
4. **Reality Unveiled** - Explores consciousness, quantum physics, and Jesus' hidden teachings
5. **Framing Jesus** - Restores the authentic revolutionary teacher

## Website

The `website/` directory contains a simple static site that displays all 5 books. Each book card pulls data from the corresponding JSON file in the `books/` directory.

To view the website:
1. Open `website/index.html` in a web browser
2. Or serve it with a local web server (e.g., `python -m http.server` or `npx serve`)

## Content Files

- **JSON files** (`books/*.json`): Contain book metadata (title, description, pages, cover image path, etc.)
- **Markdown files** (`series-info/*.md`): Series overview and reading order documentation

All content files are ready for you to replace with final content as needed.

