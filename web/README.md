# Rediscover Series Website

Modern Next.js website for the Rediscover Series book collection.

## Features

- **Home Page** - Series overview with hero image and boxed set mockup
- **Books Page** - Complete listing of all 5 books
- **Individual Book Pages** - Detailed book pages with chapters, cover images, and purchase links
- **About Page** - Author bio extracted from book content
- **Offers Page** - Gumroad funnel placeholder for series bundles

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Dark, elegant theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── books/             # Books pages
│   ├── about/              # About page
│   └── offers/             # Offers page
├── components/             # React components
├── lib/                    # Utility functions
│   └── books.ts           # Book metadata extraction
└── public/                 # Static assets
    └── assets/             # Book covers and images
```

## Book Data

The website extracts book metadata from:
- `../books/book1.json` through `book5.json` - Main book metadata
- Book submodules in `../books/` - Enhanced metadata and chapters

## Building for Production

```bash
npm run build
npm start
```

## Customization

- Update book metadata in `../books/book*.json` files
- Modify styles in `app/globals.css` and Tailwind config
- Add new pages in the `app/` directory
- Update navigation in `components/Navigation.tsx`



