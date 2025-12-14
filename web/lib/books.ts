import fs from 'fs';
import path from 'path';

export interface BookMetadata {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  pages: number;
  coverImage: string;
  author?: string;
  publisher?: string;
  publicationDate?: string;
  isbn?: string;
  tags?: string[];
  slug: string;
}

export interface Chapter {
  title: string;
  file: string;
  order: number;
}

const bookMapping: Record<string, { dir: string; slug: string }> = {
  book1: { dir: 'liberating-humanity', slug: 'liberating-humanity' },
  book2: { dir: 'escape-the-hell-myth', slug: 'escape-the-hell-myth' },
  book3: { dir: 'bible-contradictions', slug: 'bible-contradictions' },
  book4: { dir: 'reality-unveiled', slug: 'reality-unveiled' },
  book5: { dir: 'jesus-god', slug: 'framing-jesus' },
};

export function getAllBooks(): BookMetadata[] {
  const booksDir = path.join(process.cwd(), '..', 'books');
  const books: BookMetadata[] = [];

  for (let i = 1; i <= 5; i++) {
    const bookId = `book${i}`;
    const bookJsonPath = path.join(booksDir, `${bookId}.json`);
    
    if (fs.existsSync(bookJsonPath)) {
      const bookData = JSON.parse(fs.readFileSync(bookJsonPath, 'utf-8'));
      const mapping = bookMapping[bookId];
      
      // Try to get enhanced metadata from submodule
      const submoduleDir = path.join(booksDir, mapping.dir);
      let enhancedMetadata: any = {};
      
      if (fs.existsSync(submoduleDir)) {
        const metadataPath = path.join(submoduleDir, 'book_metadata.json');
        if (fs.existsSync(metadataPath)) {
          try {
            enhancedMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
          } catch (e) {
            // Ignore if metadata file is malformed
          }
        }
      }

      // Use cover image from assets folder
      const coverImage = bookData.coverImage || enhancedMetadata.coverImage || '';
      
      // Normalize tags to always be an array
      let tags: string[] = [];
      if (bookData.tags && Array.isArray(bookData.tags)) {
        tags = bookData.tags;
      } else if (enhancedMetadata.tags) {
        if (Array.isArray(enhancedMetadata.tags)) {
          tags = enhancedMetadata.tags;
        } else if (typeof enhancedMetadata.tags === 'string') {
          tags = enhancedMetadata.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0);
        }
      } else if (bookData.tags && typeof bookData.tags === 'string') {
        tags = bookData.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0);
      }
      
      // Merge metadata, but prioritize bookData description over enhancedMetadata
      books.push({
        ...enhancedMetadata,
        ...bookData, // bookData takes priority, especially for description
        id: bookId,
        slug: mapping.slug,
        coverImage: coverImage.startsWith('assets/') ? coverImage : `assets/${coverImage}`,
        pages: bookData.pages || enhancedMetadata.pages || 0,
        tags,
        description: bookData.description || enhancedMetadata.description || '', // Always use bookData description
      });
    }
  }

  return books;
}

export function getBookBySlug(slug: string): BookMetadata | null {
  const books = getAllBooks();
  return books.find(book => book.slug === slug) || null;
}

function extractTitleFromFile(filePath: string, bookDir?: string): string {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Get book title from metadata to remove it from chapter titles
    // Use provided bookDir or try to find it from filePath
    let actualBookDir = bookDir;
    if (!actualBookDir) {
      // Try to find the book directory by going up from filePath
      let currentDir = path.dirname(filePath);
      const booksDir = path.join(process.cwd(), '..', 'books');
      
      // Walk up directories until we find one that contains book_metadata.json
      while (currentDir !== booksDir && currentDir.length > booksDir.length) {
        const metadataPath = path.join(currentDir, 'book_metadata.json');
        if (fs.existsSync(metadataPath)) {
          actualBookDir = currentDir;
          break;
        }
        const parentDir = path.dirname(currentDir);
        if (parentDir === currentDir) break; // Reached root
        currentDir = parentDir;
      }
    }
    
    let bookTitle = '';
    
    // Try to get book title from book_metadata.json
    if (actualBookDir) {
      const metadataPath = path.join(actualBookDir, 'book_metadata.json');
      if (fs.existsSync(metadataPath)) {
        try {
          const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
          bookTitle = metadata.title || '';
        } catch (e) {
          // Ignore if metadata file is malformed
        }
      }
    }
    
    // Clean title function
    const cleanTitle = (title: string): string => {
      // Remove book title prefix (e.g., "Reality Unveiled: ")
      if (bookTitle) {
        const titlePrefix = new RegExp(`^${bookTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[:|]\\s*`, 'i');
        title = title.replace(titlePrefix, '');
      }
      
      // Clean up common prefixes with optional colon/pipe
      title = title.replace(/^(Chapter\s+\d+\s*[:\|]?\s*)/i, '');
      title = title.replace(/^(Introduction\s*[:\|]?\s*)/i, '');
      title = title.replace(/^(Part\s+\d+\s*[:\|]?\s*)/i, '');
      title = title.replace(/^(Conclusion\s*[:\|]?\s*)/i, '');
      title = title.replace(/^(Appendix\s+\d+\s*[:\|]?\s*)/i, '');
      
      // Clean up leading dashes/spaces that might remain
      title = title.replace(/^[\s\-–—]+\s*/, '');
      
      // If the title is now just "Chapter X", "Part X", etc., return empty string
      // This means there's no subtitle, so we'll just show the prefix
      const standaloneMatch = title.match(/^(Chapter\s+\d+|Part\s+\d+|Introduction|Conclusion|Appendix\s*\d*)$/i);
      if (standaloneMatch) {
        return '';
      }
      
      return title.trim();
    };
    
    // Try to extract from <title> tag first
    const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/is);
    if (titleMatch) {
      let title = cleanTitle(titleMatch[1].trim());
      if (title.length > 0) return title;
    }
    
    // Try to extract from <h1> tag
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/is);
    if (h1Match) {
      let title = h1Match[1].replace(/<[^>]+>/g, '').trim();
      title = cleanTitle(title);
      if (title.length > 0) return title;
    }
    
    // Try to extract from <h2> with class="chapter-title"
    const h2Match = content.match(/<h2[^>]*class=["']chapter-title["'][^>]*>(.*?)<\/h2>/is);
    if (h2Match) {
      let title = h2Match[1].replace(/<[^>]+>/g, '').trim();
      // Extract from chapter-title-text span if present
      const spanMatch = title.match(/<span[^>]*class=["']chapter-title-text["'][^>]*>(.*?)<\/span>/is);
      if (spanMatch) {
        title = spanMatch[1].replace(/<[^>]+>/g, '').trim();
      }
      title = cleanTitle(title);
      if (title.length > 0) return title;
    }
    
    // Try to extract from <h2> with class="subtitle" (used for parts in Reality Unveiled)
    const h2SubtitleMatch = content.match(/<h2[^>]*class=["']subtitle["'][^>]*>(.*?)<\/h2>/is);
    if (h2SubtitleMatch) {
      let title = h2SubtitleMatch[1].replace(/<[^>]+>/g, '').trim();
      title = cleanTitle(title);
      if (title.length > 0) return title;
    }
    
    // Try to extract from <h2> with class="part-title" (used for Part 2 in Escape The Hell Myth)
    const h2PartTitleMatch = content.match(/<h2[^>]*class=["']part-title["'][^>]*>(.*?)<\/h2>/is);
    if (h2PartTitleMatch) {
      let title = h2PartTitleMatch[1].replace(/<[^>]+>/g, '').trim();
      title = cleanTitle(title);
      if (title.length > 0) return title;
    }
    
    // Try to extract from <p> with class="part-subtitle" (used for Part 1 in Escape The Hell Myth)
    const pPartSubtitleMatch = content.match(/<p[^>]*class=["']part-subtitle["'][^>]*>(.*?)<\/p>/is);
    if (pPartSubtitleMatch) {
      let title = pPartSubtitleMatch[1].replace(/<[^>]+>/g, '').trim();
      title = cleanTitle(title);
      if (title.length > 0) return title;
    }
    
    // Try to extract from <h2> tag with id containing chapter/intro/part
    const h2IdMatch = content.match(/<h2[^>]*id=["'](?:chapter|intro|part)\d*["'][^>]*>(.*?)<\/h2>/is);
    if (h2IdMatch) {
      let title = h2IdMatch[1].replace(/<[^>]+>/g, '').trim();
      title = cleanTitle(title);
      if (title.length > 0) return title;
    }
    
  } catch (e) {
    // If file reading fails, fall back to filename
  }
  
  return '';
}

function findTOCFile(bookDir: string): string | null {
  // Check common TOC file locations in order of preference
  const tocPaths = [
    path.join(bookDir, 'epub', 'OEBPS', 'nav.xhtml'),
    path.join(bookDir, 'epub', 'OEBPS', 'toc.xhtml'),
    path.join(bookDir, 'epub', 'OEBPS', 'Text', 'toc.xhtml'),
    path.join(bookDir, 'epub', 'OEBPS', 'toc.ncx'),
    path.join(bookDir, 'toc.html'),
    path.join(bookDir, 'toc.xhtml'),
  ];
  
  for (const tocPath of tocPaths) {
    if (fs.existsSync(tocPath)) {
      return tocPath;
    }
  }
  
  return null;
}

function parseTOCForOrder(tocPath: string, bookDir: string): Map<string, number> {
  const orderMap = new Map<string, number>();
  let order = 0;
  
  try {
    const content = fs.readFileSync(tocPath, 'utf-8');
    
    // Extract the relevant section - handle different TOC formats
    let tocContent = content;
    
    // Try nav tag first (most common in EPUB)
    const navMatch = content.match(/<nav[^>]*>(.*?)<\/nav>/is);
    if (navMatch) {
      tocContent = navMatch[1];
    } else {
      // Try to find the main <ol> if no nav tag
      const olMatch = content.match(/<ol[^>]*>(.*?)<\/ol>/is);
      if (olMatch) {
        tocContent = olMatch[1];
      } else {
        // For div-based format, extract from body (simpler and more reliable)
        // Note: Some TOC files have duplicate body tags, so we need to get all body content
        // Find the first body tag and extract until the last closing body tag
        const firstBodyStart = content.indexOf('<body');
        const lastBodyEnd = content.lastIndexOf('</body>');
        
        if (firstBodyStart !== -1 && lastBodyEnd !== -1) {
          const bodyStartContent = content.indexOf('>', firstBodyStart) + 1;
          tocContent = content.substring(bodyStartContent, lastBodyEnd);
        } else {
          // Fallback: try single body match
          const bodyMatch = content.match(/<body[^>]*>(.*?)<\/body>/is);
          if (bodyMatch) {
            tocContent = bodyMatch[1];
          }
        }
      }
    }
    
    // Extract all <a> tags in document order - this preserves nested structure order
    // We'll process them sequentially, which naturally handles nested structures
    const linkMatches = Array.from(tocContent.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gis));
    
    for (const match of linkMatches) {
      const href = match[1];
      let filename = href.split('/').pop() || href;
      
      // Handle anchor links (e.g., content.xhtml#introduction)
      filename = filename.split('#')[0];
      
      // Skip non-chapter files early
      if (!filename || filename === '') continue;
      
      // Skip navigation buttons and other non-content files
      if (/^(cover|titlepage|copyright|toc|other-books|bibliography|index|previous|next)\.(html|xhtml)$/i.test(filename)) {
        continue;
      }
      
      // Skip if the link is inside navigation-buttons div
      const linkContext = match[0];
      if (linkContext.includes('nav-button') || linkContext.includes('navigation-buttons')) {
        continue;
      }
      
      // Normalize filename - remove path prefixes and handle both .html and .xhtml
      filename = filename.toLowerCase();
      
      // Only process chapter/part files
      if (/^(chapter|introduction|intro|part|conclusion|appendix)\d*\.(html|xhtml)$/i.test(filename)) {
        // Try to match both .html and .xhtml versions
        const baseName = filename.replace(/\.(html|xhtml)$/i, '');
        const htmlVersion = baseName + '.html';
        const xhtmlVersion = baseName + '.xhtml';
        
        // Add both possible filenames to the order map with the same order
        // This handles cases where root has .html but TOC references .xhtml
        if (!orderMap.has(htmlVersion)) {
          orderMap.set(htmlVersion, order);
        }
        if (!orderMap.has(xhtmlVersion)) {
          orderMap.set(xhtmlVersion, order);
        }
        order++;
      }
    }
  } catch (e) {
    // If parsing fails, return empty map
  }
  
  return orderMap;
}

function findChapterFiles(dir: string, baseDir: string = ''): Array<{ file: string; fullPath: string }> {
  const files: Array<{ file: string; fullPath: string }> = [];
  
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = baseDir ? path.join(baseDir, item) : item;
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check common subdirectories for chapters
      if (item === 'epub' || item === 'OEBPS' || item === 'Text') {
        files.push(...findChapterFiles(fullPath, relativePath));
      }
    } else if (stat.isFile()) {
      // Look for HTML/XHTML chapter files
      if (/^(chapter|introduction|intro|part|conclusion|appendix)\d*\.(html|xhtml)$/i.test(item)) {
        files.push({ file: item, fullPath });
      }
    }
  }
  
  return files;
}

export function getBookChapters(bookSlug: string): Chapter[] {
  const booksDir = path.join(process.cwd(), '..', 'books');
  const mapping = Object.values(bookMapping).find(m => m.slug === bookSlug);
  
  if (!mapping) return [];

  const bookDir = path.join(booksDir, mapping.dir);
  if (!fs.existsSync(bookDir)) return [];
  
  // Special handling for bible-contradictions which uses a single content.xhtml file
  if (bookSlug === 'bible-contradictions') {
    return getBibleContradictionsChapters(bookDir);
  }

  const chapters: Chapter[] = [];
  
  // First, try root directory
  const rootFiles = fs.readdirSync(bookDir).filter(file => 
    /^(chapter|introduction|intro|part|conclusion|appendix)\d*\.(html|xhtml)$/i.test(file)
  );
  
  // Use root files if available, otherwise check subdirectories
  let filesToProcess: Array<{ file: string; fullPath: string }>;
  
  if (rootFiles.length > 0) {
    // Prefer root directory files
    filesToProcess = rootFiles.map(file => ({ file, fullPath: path.join(bookDir, file) }));
  } else {
    // Fallback to subdirectories
    filesToProcess = findChapterFiles(bookDir);
  }
  
  // Remove duplicates - prefer files that appear first (root directory)
  const seen = new Map<string, { file: string; fullPath: string }>();
  for (const item of filesToProcess) {
    if (!seen.has(item.file.toLowerCase())) {
      seen.set(item.file.toLowerCase(), item);
    }
  }
  const uniqueFiles = Array.from(seen.values());

  // Try to get order from TOC file first
  const tocPath = findTOCFile(bookDir);
  const tocOrder = tocPath ? parseTOCForOrder(tocPath, bookDir) : null;
  
  // Sort files - use TOC order if available, otherwise use natural order
  uniqueFiles.sort((a, b) => {
    // If we have TOC order, use it
    if (tocOrder) {
      const aOrder = tocOrder.get(a.file.toLowerCase());
      const bOrder = tocOrder.get(b.file.toLowerCase());
      
      if (aOrder !== undefined && bOrder !== undefined) {
        return aOrder - bOrder;
      }
      if (aOrder !== undefined) return -1;
      if (bOrder !== undefined) return 1;
    }
    
    // Fallback to natural order (introduction, then parts/chapters by number)
    const aMatch = a.file.match(/(chapter|introduction|intro|part|conclusion|appendix)(\d*)/i);
    const bMatch = b.file.match(/(chapter|introduction|intro|part|conclusion|appendix)(\d*)/i);
    
    if (!aMatch && !bMatch) return a.file.localeCompare(b.file);
    if (!aMatch) return 1;
    if (!bMatch) return -1;
    
    const aType = aMatch[1].toLowerCase();
    const bType = bMatch[1].toLowerCase();
    const aNum = parseInt(aMatch[2] || '0');
    const bNum = parseInt(bMatch[2] || '0');
    
    // Type priority: intro < part < chapter < conclusion < appendix
    const typeOrder: Record<string, number> = {
      'intro': 0,
      'introduction': 0,
      'part': 1,
      'chapter': 2,
      'conclusion': 3,
      'appendix': 4,
    };
    
    const aTypeOrder = typeOrder[aType] ?? 99;
    const bTypeOrder = typeOrder[bType] ?? 99;
    
    if (aTypeOrder !== bTypeOrder) {
      return aTypeOrder - bTypeOrder;
    }
    
    // Same type, sort by number
    return aNum - bNum;
  });

  // Now extract titles and assign sequential order
  uniqueFiles.forEach(({ file, fullPath }, index) => {
    let title = extractTitleFromFile(fullPath, bookDir);
    
    // Fallback to filename-based title if extraction failed
    if (!title) {
      const match = file.match(/(chapter|introduction|intro|part|conclusion|appendix)(\d*)/i);
      if (match) {
        const prefix = match[1].charAt(0).toUpperCase() + match[1].slice(1);
        const num = match[2] || '';
        title = `${prefix}${num ? ' ' + num : ''}`;
      } else {
        title = file.replace(/\.(html|xhtml)$/i, '');
      }
    }
    
    chapters.push({
      title,
      file,
      order: index, // Use sequential order based on sorted files
    });
  });

  return chapters;
}

function getBibleContradictionsChapters(bookDir: string): Chapter[] {
  const chapters: Chapter[] = [];
  
  // Try to get chapters from nav.xhtml
  const navPath = path.join(bookDir, 'epub', 'OEBPS', 'nav.xhtml');
  if (fs.existsSync(navPath)) {
    try {
      const content = fs.readFileSync(navPath, 'utf-8');
      const linkMatches = Array.from(content.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gis));
      
      linkMatches.forEach((match, index) => {
        const href = match[1];
        let title = match[2].trim();
        
        // Skip if it's an anchor link to content.xhtml
        if (href.includes('content.xhtml#')) {
          const anchor = href.split('#')[1];
          
          // Add Part prefix for part-one and part-two
          if (anchor === 'part-one') {
            title = 'Part 1: The Contradictions';
          } else if (anchor === 'part-two') {
            title = 'Part 2: Keys to Unlocking the Contradictions';
          }
          
          chapters.push({
            title: title || anchor,
            file: `content.xhtml#${anchor}`,
            order: index,
          });
        }
      });
    } catch (e) {
      // If parsing fails, fall back to default structure
    }
  }
  
  // If no chapters found, use default structure
  if (chapters.length === 0) {
    chapters.push(
      { title: 'Introduction', file: 'content.xhtml#introduction', order: 0 },
      { title: 'Part 1: The Contradictions', file: 'content.xhtml#part-one', order: 1 },
      { title: 'Part 2: Keys to Unlocking the Contradictions', file: 'content.xhtml#part-two', order: 2 },
      { title: 'Conclusion', file: 'content.xhtml#conclusion', order: 3 },
      { title: 'Contradiction Index', file: 'content.xhtml#contradiction-index', order: 4 },
    );
  }
  
  // Ensure Part 1 and Part 2 have correct titles
  chapters.forEach(chapter => {
    if (chapter.file === 'content.xhtml#part-one' && !chapter.title.startsWith('Part 1:')) {
      chapter.title = 'Part 1: The Contradictions';
    } else if (chapter.file === 'content.xhtml#part-two' && !chapter.title.startsWith('Part 2:')) {
      chapter.title = 'Part 2: Keys to Unlocking the Contradictions';
    }
  });
  
  return chapters;
}

export function getAuthorBio(): string {
  return `I grew up in the thick of church life. Sunday wasn't just a day—it was the center of gravity. My earliest memories are filled with hymns echoing through the church my dad pastored, and the faint smell of worn leather Bibles. Church wasn't something we went to; it was the air we breathed.

Even when I later studied medicine and built a career in business, faith never took a back seat. Every spare moment I had, I spent buried in Scripture, convinced that if I could just study a little harder, pray a little longer, serve a little better, I'd understand God the way He truly wanted to be known.

I was raised Baptist: conservative, careful, certain. Then I found myself drawn into the charismatic world, full of passion and expectancy. I led teams, prayed for the sick, and witnessed what I could only describe as miracles. I saw lives changed, hearts healed, even bodies restored.

But over time, a quiet unease began to surface—like a thread tugging loose beneath the surface of my belief system. I started noticing that the things I'd built my faith around didn't always line up with what Jesus actually said. The God I'd worshipped all my life didn't sound like the Father Jesus revealed, and I hadn't noticed in decades.

It was a slow, disorienting awakening. And yet, that moment of doubt became the beginning of something far more beautiful—a search for truth that finally felt alive. I've earned no theology degrees (despite years of study which far exceed the hours required for these). Just scars from decades in medicine, pharma, and church life, dissecting human bodies and human beliefs. I wore the "born-again, Spirit-filled, Bible-believing" badge proudly... until Jesus' unfiltered words turned my blood to ice.`;
}

