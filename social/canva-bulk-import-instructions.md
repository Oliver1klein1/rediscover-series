# Canva Bulk Create Import Instructions
## Rediscover Series Social Media Content

This guide will walk you through importing the generated CSV/JSON files into Canva's Bulk Create tool to automatically generate hundreds of social media posts.

---

## Prerequisites

1. **Canva Pro Account** (Bulk Create is a Pro feature)
2. **Template Files Created** - Use the templates from `canva-templates.json`
3. **Data Files Ready:**
   - `social-posts.csv` (for quote posts)
   - `tiktok-slides.json` (for slideshows)
   - `reels.json` (for reel covers)

---

## Step 1: Create Your Base Templates in Canva

### For Each Template Type:

1. **Open Canva** → Create a new design
2. **Set the correct dimensions** (from `canva-templates.json`):
   - Instagram Square: 1080x1080
   - Instagram Carousel: 1080x1080 (create first slide)
   - Facebook Post: 1200x630
   - TikTok Slideshow: 1080x1920
   - TikTok Quote Card: 1080x1920
   - Reels Cover: 1080x1920

3. **Apply the template specifications:**
   - Set fonts (Playfair Display, Montserrat, Bebas Neue, Anton)
   - Set colors (from color palette)
   - Set background style
   - Add text placeholders

---

## Step 2: Set Up Variable Placeholders

### For Instagram Square Quote Template:

1. **Add Text Elements:**
   - Create a text box for the quote
   - Select the text box
   - Click **"..." menu** → **"Connect to data"**
   - Name it: `{{quote_text}}`

2. **Add Footer:**
   - Create footer text box
   - Type: `{{footer}}`
   - Position it at bottom-center (per template specs)
   - Format: Montserrat Light, 14px, lowercase, letter-spacing 1px

3. **Optional Elements:**
   - Source attribution: `{{source_book}}`
   - Theme tag: `{{theme}}`
   - CTA: `{{cta}}`

### For TikTok Slideshow Template:

1. **Create Frame 1:**
   - Hook text: `{{hook_line}}`
   - Footer: `{{footer}}`

2. **Create Additional Frames:**
   - Frame 2: `{{script_line_1}}`
   - Frame 3: `{{script_line_2}}`
   - Frame 4: `{{script_line_3}}`
   - (Continue for all script lines)
   - Final Frame: `{{cta_slide}}` + `{{footer}}`

3. **Set Footer on All Frames:**
   - Copy footer element to each frame
   - Use same variable: `{{footer}}`

### For Instagram Carousel Template:

1. **Slide 1:**
   - Title: `{{quote_text}}` (first part)
   - Footer: `{{footer}}`

2. **Slide 2-N:**
   - Content: `{{quote_text}}` (split across slides)
   - Footer: `{{footer}}`

3. **Final Slide:**
   - CTA: `{{cta}}`
   - Footer: `{{footer}}` (larger, more prominent)

---

## Step 3: Prepare Your CSV File

### For Quote Posts (`social-posts.csv`):

The CSV already has the correct columns:
- `id`
- `quote_text`
- `source_book`
- `chapter`
- `theme`
- `tone`
- `platform_recommendation`
- `cta`
- `footer`
- `hashtags`

**No modifications needed** - use the file as-is.

### For TikTok Slideshows:

You'll need to create a modified CSV from `tiktok-slides.json`:

1. **Open `tiktok-slides.json`** in a text editor
2. **Convert to CSV format** with columns:
   - `id`
   - `frame_1`, `frame_2`, `frame_3`, `frame_4`, `frame_5`, `frame_6`, `frame_7`
   - `cta_slide`
   - `footer`

**Example CSV structure:**
```csv
id,frame_1,frame_2,frame_3,frame_4,cta_slide,footer
slide_0001,"What if everything you thought you knew","about Jesus","is based on edited texts?","Irenaeus quoted a verse in 180 CE.","Learn more at www.ansiloboff.com","www.ansiloboff.com"
```

---

## Step 4: Import into Canva Bulk Create

### Method 1: Using Canva's Bulk Create Tool

1. **Open your template** in Canva
2. **Click "Apps"** in the left sidebar
3. **Search for "Bulk Create"** → Click to open
4. **Click "Connect data"**
5. **Upload your CSV file:**
   - Click "Upload CSV"
   - Select `social-posts.csv`
   - Wait for Canva to parse the columns

6. **Map Variables:**
   - Canva will show your CSV columns
   - Drag each column to the corresponding text element:
     - `quote_text` → Quote text box
     - `footer` → Footer text box
     - `cta` → CTA text box (if applicable)
     - `source_book` → Source attribution (if applicable)

7. **Preview:**
   - Click "Preview" to see how variables populate
   - Check that footer appears correctly on all designs

8. **Generate:**
   - Click "Generate" or "Create designs"
   - Canva will create one design per CSV row
   - Wait for generation to complete

### Method 2: Using Canva API (Advanced)

If you have API access:

```python
import requests

# Upload CSV
files = {'file': open('social-posts.csv', 'rb')}
response = requests.post('https://api.canva.com/v1/bulk-create/upload', files=files)

# Map variables and generate
# (See Canva API documentation for full implementation)
```

---

## Step 5: Verify Footer Placement

**Critical Check:** After bulk generation:

1. **Open a sample design** from the generated batch
2. **Verify footer:**
   - ✅ Text reads: "www.ansiloboff.com"
   - ✅ Position: Bottom-center
   - ✅ Font: Montserrat Light
   - ✅ Size: 14px (or as specified)
   - ✅ Color: #6B6B6B or #999999
   - ✅ Letter-spacing: 1px
   - ✅ Case: lowercase

3. **Check all designs:**
   - Footer should be consistent across all generated designs
   - No missing footers
   - No formatting errors

---

## Step 6: Handling Multi-Slide Content

### For Carousels:

1. **Create first slide** with variables
2. **Duplicate slide** for additional frames
3. **In Bulk Create:**
   - Map `quote_text` to split across slides
   - Or create separate columns: `slide_1_text`, `slide_2_text`, etc.
   - Map `footer` to all slides

### For TikTok Slideshows:

1. **Create all frames** in one design
2. **Use frame-specific variables:**
   - Frame 1: `{{frame_1}}`
   - Frame 2: `{{frame_2}}`
   - etc.
3. **Map CSV columns** to each frame variable
4. **Ensure footer** appears on all frames

---

## Step 7: Export and Organize

### After Generation:

1. **Select all generated designs**
2. **Download:**
   - Format: PNG (for social media)
   - Quality: High
   - Naming: Use `{{id}}` variable for filenames

3. **Organize by platform:**
   - Create folders: `instagram/`, `facebook/`, `tiktok/`
   - Move designs to appropriate folders

4. **Create backup:**
   - Save original CSV files
   - Save Canva template files
   - Document any customizations

---

## Troubleshooting

### Footer Not Appearing:

**Problem:** Footer missing from generated designs

**Solution:**
1. Check that footer text box has variable: `{{footer}}`
2. Verify CSV has `footer` column
3. Ensure footer is not hidden or locked
4. Check footer is on all slides/frames

### Text Overflow:

**Problem:** Quote text too long, cuts off

**Solution:**
1. Enable "Auto-resize" on text boxes
2. Adjust font size in template
3. Split long quotes across multiple slides
4. Use text wrapping settings

### Variable Not Mapping:

**Problem:** CSV column not connecting to text element

**Solution:**
1. Verify CSV column name matches variable name exactly
2. Check for special characters or spaces in column names
3. Re-upload CSV file
4. Manually map columns in Bulk Create interface

### Formatting Lost:

**Problem:** Fonts/colors not applying correctly

**Solution:**
1. Set formatting in template BEFORE adding variables
2. Use "Lock" feature to preserve formatting
3. Apply brand styles consistently
4. Use Canva's "Styles" feature for consistency

---

## Best Practices

### Template Setup:

1. ✅ **Set all formatting FIRST** (fonts, colors, sizes)
2. ✅ **Add variables SECOND** (after formatting is locked)
3. ✅ **Test with sample data** before bulk generation
4. ✅ **Lock footer element** to prevent accidental changes
5. ✅ **Use consistent spacing** from template specs

### CSV Preparation:

1. ✅ **Clean data** - Remove special characters that break Canva
2. ✅ **Check encoding** - Use UTF-8
3. ✅ **Verify footer column** - Ensure all rows have "www.ansiloboff.com"
4. ✅ **Test with small batch** - Generate 5-10 designs first
5. ✅ **Backup original files** - Keep CSV and JSON backups

### Quality Control:

1. ✅ **Spot-check designs** - Review random samples
2. ✅ **Verify footer** - Check every design has footer
3. ✅ **Check readability** - Ensure text is legible
4. ✅ **Brand consistency** - Verify colors/fonts match guidelines
5. ✅ **Platform optimization** - Ensure dimensions are correct

---

## Quick Reference: Variable Mapping

### Instagram Square Quote:
```
{{quote_text}} → Main quote text box
{{footer}} → Footer text box (bottom-center)
{{cta}} → CTA text (optional)
{{source_book}} → Source attribution (optional)
```

### TikTok Slideshow:
```
{{frame_1}} → Slide 1 text
{{frame_2}} → Slide 2 text
{{frame_3}} → Slide 3 text
... (continue for all frames)
{{cta_slide}} → Final slide CTA
{{footer}} → Footer on ALL frames
```

### Instagram Carousel:
```
{{slide_1_text}} → First slide
{{slide_2_text}} → Second slide
... (continue for all slides)
{{cta}} → Final slide CTA
{{footer}} → Footer on ALL slides
```

### Reels Cover:
```
{{hook_3_sec}} → Main hook text
{{footer}} → Footer text (bottom-center)
{{emotional_punchline}} → Subtitle (optional)
```

---

## Support Resources

- **Canva Bulk Create Help:** https://www.canva.com/help/article/bulk-create
- **Canva Variables Guide:** https://www.canva.com/help/article/using-variables
- **Template Specifications:** See `canva-templates.json`
- **Content Files:** See `social/` directory

---

## Notes

- **Footer is mandatory** - Every design must include "www.ansiloboff.com"
- **Test first** - Always generate a small batch before bulk creation
- **Backup everything** - Save templates, CSVs, and generated designs
- **Brand consistency** - Follow color palette and font specifications strictly
- **Platform optimization** - Use correct dimensions for each platform

**Last Updated:** 2024-11-16


