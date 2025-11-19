#!/usr/bin/env python3
"""
Extract quotes and content from book manuscripts and generate social media content files.
"""

import os
import re
import json
import csv
from pathlib import Path
from html.parser import HTMLParser
from html import unescape
import random

# Book mapping
BOOKS = {
    'liberating-humanity': 'Liberating Humanity',
    'escape-the-hell-myth': 'Escape the Hell Myth',
    'bible-contradictions': 'Bible Contradictions',
    'reality-unveiled': 'Reality Unveiled',
    'jesus-god': 'Framing Jesus'
}

THEMES = [
    'hell myth', 'image of God', 'freedom', 'forgiveness', 'divine potential',
    'consciousness', 'bible contradictions', 'Jesus vs Yahweh', 'Father\'s love',
    'spiritual trauma', 'deconstruction', 'rediscovering Jesus', 'transformation',
    'manuscript evidence', 'textual changes', 'fear vs love', 'empowerment',
    'reality creation', 'quantum consciousness', 'healing', 'truth'
]

TONES = ['gentle', 'defiant', 'empathetic', 'prophetic', 'bold', 'challenging', 
         'empowering', 'raw', 'honest', 'revelatory', 'healing', 'transformative']

FOOTER = "www.ansiloboff.com"

class HTMLTextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.in_script = False
        self.in_style = False
        
    def handle_starttag(self, tag, attrs):
        if tag.lower() in ['script', 'style']:
            self.in_script = tag.lower() == 'script'
            self.in_style = tag.lower() == 'style'
            
    def handle_endtag(self, tag):
        if tag.lower() in ['script', 'style']:
            self.in_script = False
            self.in_style = False
            
    def handle_data(self, data):
        if not self.in_script and not self.in_style:
            cleaned = data.strip()
            if cleaned:
                self.text.append(cleaned)
    
    def get_text(self):
        return ' '.join(self.text)

def extract_text_from_html(file_path):
    """Extract text content from HTML file."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Remove script and style tags
        content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
        content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL | re.IGNORECASE)
        
        # Extract text from HTML
        parser = HTMLTextExtractor()
        parser.feed(content)
        text = parser.get_text()
        
        # Clean up
        text = re.sub(r'\s+', ' ', text)
        text = unescape(text)
        
        return text
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return ""

def extract_quotes(text, book_name):
    """Extract quote-worthy sentences from text."""
    quotes = []
    
    # Split into sentences
    sentences = re.split(r'[.!?]+', text)
    
    for sentence in sentences:
        sentence = sentence.strip()
        if not sentence:
            continue
            
        # Look for powerful statements
        # Quotes should be 10-25 words typically
        word_count = len(sentence.split())
        
        if word_count < 10 or word_count > 35:
            continue
        
        # Look for key indicators of quotable content
        powerful_patterns = [
            r'\b(Jesus|Father|God|Yahweh|hell|freedom|love|truth|consciousness|divine|power|authority)\b',
            r'\b(never|always|only|all|every|no one|everyone)\b',
            r'\b(discover|reveal|expose|uncover|transform|heal|liberate|free)\b',
            r'[!?]',  # Exclamations or questions
        ]
        
        has_powerful_pattern = any(re.search(pattern, sentence, re.IGNORECASE) for pattern in powerful_patterns)
        
        if has_powerful_pattern:
            # Clean up the quote
            sentence = re.sub(r'^["\']|["\']$', '', sentence)  # Remove surrounding quotes
            sentence = sentence.strip()
            
            if len(sentence) > 20:  # Minimum length
                quotes.append(sentence)
    
    return quotes

def identify_chapter(file_path):
    """Try to identify chapter number from file path."""
    match = re.search(r'chapter[_\s]*(\d+)', file_path.lower())
    if match:
        return f"Chapter {match.group(1)}"
    
    if 'introduction' in file_path.lower():
        return "Introduction"
    if 'conclusion' in file_path.lower():
        return "Conclusion"
    
    return "Unknown"

def get_book_name(file_path):
    """Extract book name from file path."""
    for book_key, book_name in BOOKS.items():
        if book_key in file_path.lower():
            return book_name
    return "Unknown"

def scan_books():
    """Scan all book directories for HTML/xhtml files."""
    books_dir = Path('books')
    all_quotes = []
    all_scripts = []
    all_slides = []
    all_reels = []
    
    quote_id = 1
    script_id = 1
    slide_id = 1
    reel_id = 1
    
    for book_dir in books_dir.iterdir():
        if not book_dir.is_dir():
            continue
            
        book_name = get_book_name(str(book_dir))
        if book_name == "Unknown":
            continue
        
        print(f"Scanning {book_name}...")
        
        # Find all HTML/xhtml files
        html_files = list(book_dir.rglob('*.html')) + list(book_dir.rglob('*.xhtml'))
        
        for html_file in html_files:
            # Skip certain files
            if any(skip in str(html_file).lower() for skip in ['index', 'toc', 'copyright', 'bibliography', 'appendix']):
                continue
            
            text = extract_text_from_html(html_file)
            if not text or len(text) < 200:
                continue
            
            chapter = identify_chapter(str(html_file))
            quotes = extract_quotes(text, book_name)
            
            # Create quote entries
            for quote in quotes[:10]:  # Limit per file
                theme = random.choice(THEMES)
                tone = random.choice(TONES)
                
                all_quotes.append({
                    'id': f'quote_{quote_id:04d}',
                    'quote_text': quote,
                    'source_book': book_name,
                    'chapter': chapter,
                    'theme': theme,
                    'tone': tone,
                    'platform_recommendation': random.choice(['instagram', 'facebook', 'all']),
                    'cta': get_cta_for_platform(random.choice(['instagram', 'facebook', 'all'])),
                    'footer': FOOTER,
                    'hashtags': get_hashtags(theme, tone)
                })
                quote_id += 1
            
            # Create TikTok scripts from longer passages
            if len(text) > 500:
                scripts = create_tiktok_scripts(text, book_name, chapter, script_id)
                all_scripts.extend(scripts)
                script_id += len(scripts)
            
            # Create slideshow sequences
            slides = create_slideshow_sequences(text, book_name, chapter, slide_id)
            all_slides.extend(slides)
            slide_id += len(slides)
            
            # Create reel scripts
            reels = create_reel_scripts(text, book_name, chapter, reel_id)
            all_reels.extend(reels)
            reel_id += len(reels)
    
    return all_quotes, all_scripts, all_slides, all_reels

def create_tiktok_scripts(text, book_name, chapter, start_id):
    """Create TikTok script entries from text."""
    scripts = []
    
    # Find punchy, short statements
    sentences = re.split(r'[.!?]+', text)
    punchy_lines = []
    
    for sentence in sentences:
        sentence = sentence.strip()
        word_count = len(sentence.split())
        if 5 <= word_count <= 15:
            # Look for hooks
            if any(word in sentence.lower() for word in ['what if', 'imagine', 'think', 'truth', 'discover', 'reveal']):
                punchy_lines.append(sentence)
    
    if len(punchy_lines) >= 3:
        hook = punchy_lines[0]
        script_lines = punchy_lines[1:min(8, len(punchy_lines))]
        
        scripts.append({
            'id': f'tiktok_{start_id:04d}',
            'hook_line': hook,
            'script': script_lines,
            'b_roll_concepts': get_broll_concepts(hook),
            'sound_music_style': random.choice(['dramatic', 'inspiring', 'mysterious', 'energetic']),
            'caption': create_tiktok_caption(hook, book_name),
            'hashtags': get_tiktok_hashtags(),
            'footer': FOOTER,
            'source_book': book_name,
            'chapter': chapter
        })
    
    return scripts[:5]  # Limit per file

def create_slideshow_sequences(text, book_name, chapter, start_id):
    """Create slideshow sequences from text."""
    slides = []
    
    # Split text into logical chunks
    paragraphs = re.split(r'\n\n+', text)
    
    for para in paragraphs[:3]:  # Limit per file
        sentences = re.split(r'[.!?]+', para)
        frames = [s.strip() for s in sentences if len(s.strip().split()) >= 5 and len(s.strip().split()) <= 20]
        
        if len(frames) >= 3:
            slides.append({
                'id': f'slide_{start_id:04d}',
                'frames': frames[:7],  # Max 7 frames
                'theme': random.choice(THEMES),
                'recommended_pacing': random.choice(['fast', 'medium', 'slow']),
                'background_style': random.choice(['minimal', 'gradient', 'dark', 'light']),
                'cta_slide': 'Learn more at www.ansiloboff.com',
                'footer': FOOTER,
                'source_book': book_name,
                'chapter': chapter
            })
            start_id += 1
    
    return slides[:3]  # Limit per file

def create_reel_scripts(text, book_name, chapter, start_id):
    """Create reel script entries."""
    reels = []
    
    # Find emotional, high-impact statements
    sentences = re.split(r'[.!?]+', text)
    emotional_lines = []
    
    for sentence in sentences:
        sentence = sentence.strip()
        word_count = len(sentence.split())
        if 8 <= word_count <= 25:
            # Look for emotional triggers
            emotional_words = ['love', 'fear', 'truth', 'free', 'power', 'divine', 'heal', 'transform', 'discover']
            if any(word in sentence.lower() for word in emotional_words):
                emotional_lines.append(sentence)
    
    if len(emotional_lines) >= 2:
        hook = emotional_lines[0]
        punchline = emotional_lines[-1]
        
        reels.append({
            'id': f'reel_{start_id:04d}',
            'hook_3_sec': hook[:100] if len(hook) > 100 else hook,
            'script': emotional_lines[:5],
            'emotional_punchline': punchline,
            'b_roll': get_broll_concepts(hook),
            'caption': create_reel_caption(hook, punchline, book_name),
            'footer': FOOTER,
            'source_book': book_name,
            'chapter': chapter
        })
    
    return reels[:2]  # Limit per file

def get_cta_for_platform(platform):
    """Get platform-specific CTA."""
    ctas = {
        'instagram': ['Save this post', 'Share with someone who needs this', 'Follow for more truth'],
        'facebook': ['What do you think?', 'Share your thoughts below', 'Tag someone who needs to hear this'],
        'tiktok': ['Follow for more', 'Comment your thoughts', 'Share if this resonated'],
        'all': ['Learn more', 'Discover the full story', 'Read the book']
    }
    return random.choice(ctas.get(platform, ctas['all']))

def get_hashtags(theme, tone):
    """Generate hashtags based on theme and tone."""
    base_tags = ['#Jesus', '#Truth', '#SpiritualFreedom', '#RediscoverJesus']
    theme_tags = {
        'hell myth': ['#HellMyth', '#EternalFire', '#LoveNotFear'],
        'freedom': ['#Freedom', '#Liberation', '#FreeFromFear'],
        'consciousness': ['#Consciousness', '#Reality', '#Quantum'],
        'bible contradictions': ['#BibleContradictions', '#TextualCriticism', '#ManuscriptEvidence']
    }
    
    tags = base_tags + theme_tags.get(theme, [])
    return tags[:8]  # Max 8 hashtags

def get_tiktok_hashtags():
    """Get TikTok-specific hashtags."""
    return ['#Jesus', '#SpiritualTruth', '#Deconstruction', '#FaithJourney', '#TruthSeeker', '#SpiritualAwakening']

def get_broll_concepts(text):
    """Generate B-roll concepts based on text."""
    concepts = []
    text_lower = text.lower()
    
    if 'jesus' in text_lower or 'father' in text_lower:
        concepts.append('Ancient manuscripts/texts')
    if 'hell' in text_lower or 'fire' in text_lower:
        concepts.append('Peaceful nature scenes')
    if 'freedom' in text_lower or 'liberate' in text_lower:
        concepts.append('Open sky/horizon')
    if 'consciousness' in text_lower or 'mind' in text_lower:
        concepts.append('Abstract light patterns')
    
    if not concepts:
        concepts = ['Abstract spiritual imagery', 'Nature scenes']
    
    return concepts[:3]

def create_tiktok_caption(hook, book_name):
    """Create TikTok caption."""
    return f"{hook}\n\nFrom '{book_name}'\n\n{FOOTER}"

def create_reel_caption(hook, punchline, book_name):
    """Create reel caption."""
    return f"{hook}\n\n{punchline}\n\nFrom '{book_name}'\n\n{FOOTER}"

def main():
    print("Extracting content from books...")
    quotes, scripts, slides, reels = scan_books()
    
    # Ensure we have enough content
    print(f"Extracted {len(quotes)} quotes, {len(scripts)} TikTok scripts, {len(slides)} slideshows, {len(reels)} reels")
    
    # If not enough, we'll need to generate more from the content we have
    # For now, let's create the files with what we have
    
    # 1. social-posts.json
    print("Creating social-posts.json...")
    with open('social/social-posts.json', 'w', encoding='utf-8') as f:
        json.dump(quotes[:200], f, indent=2, ensure_ascii=False)
    
    # 2. social-posts.csv
    print("Creating social-posts.csv...")
    with open('social/social-posts.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'quote_text', 'source_book', 'chapter', 'theme', 'tone', 
                                               'platform_recommendation', 'cta', 'footer', 'hashtags'])
        writer.writeheader()
        for quote in quotes[:200]:
            quote_copy = quote.copy()
            quote_copy['hashtags'] = ', '.join(quote_copy['hashtags'])
            writer.writerow(quote_copy)
    
    # 3. tiktok-scripts.json
    print("Creating tiktok-scripts.json...")
    with open('social/tiktok-scripts.json', 'w', encoding='utf-8') as f:
        json.dump(scripts[:100], f, indent=2, ensure_ascii=False)
    
    # 4. tiktok-slides.json
    print("Creating tiktok-slides.json...")
    with open('social/tiktok-slides.json', 'w', encoding='utf-8') as f:
        json.dump(slides[:40], f, indent=2, ensure_ascii=False)
    
    # 5. reels.json
    print("Creating reels.json...")
    with open('social/reels.json', 'w', encoding='utf-8') as f:
        json.dump(reels[:20], f, indent=2, ensure_ascii=False)
    
    print("Done! Files created in social/ directory")

if __name__ == '__main__':
    main()


