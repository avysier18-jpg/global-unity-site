# AGENTS.md - Global Unity Site

## Project Overview
A government transparency and accountability website featuring:
- **Mirror**: Shows what agencies said vs. what actually happened
- **Truth Library**: Seven rooms of evidence with interactive chart galleries

Live site: https://global-unity.netlify.app
Hosting: Netlify (auto-deploys from GitHub main branch)

---

## File Structure
```
/
├── index.html              # Homepage
├── truth-library.html      # Truth Library (7 rooms with gallery modals)
├── /mirror/
│   ├── index.html          # Mirror landing page with interactive pipeline
│   ├── dol.html            # Department of Labor mirror page
│   ├── nhtsa.html          # NHTSA mirror page
│   ├── hhs.html            # HHS mirror page
│   └── treasury.html       # Treasury mirror page
├── /docs/
│   ├── /room1/             # Room 1 chart images (5 tile folders)
│   ├── /room2/             # Room 2 chart images (5 tile folders)
│   ├── /room3/             # Room 3 chart images (5 tile folders)
│   ├── /room4/             # Room 4 chart images (5 tile folders)
│   ├── /room5/             # Room 5 chart images (5 tile folders)
│   ├── /room6/             # Room 6 chart images (5 tile folders)
│   └── /room7/             # Room 7 chart images (4 tile folders)
└── /css/                   # Stylesheets (if separated)
```

---

## Design System

### Colors (CSS Custom Properties)
```css
--bg-primary: #0a192f;        /* Dark navy background */
--bg-card: #112240;           /* Card/tile background */
--text-primary: #ccd6f6;      /* Main text color */
--text-secondary: #8892b0;    /* Muted text */
--accent: #64ffda;            /* Teal accent (links, highlights) */
--accent-hover: #9efff0;      /* Lighter teal for hover states */
--border-subtle: rgba(29, 58, 92, 0.3);  /* Subtle borders */
```

### Typography
- Headings: Bold, teal (#64ffda) for room titles
- Body: #ccd6f6 on dark backgrounds
- Links: #64ffda with hover to #9efff0

### Component Patterns

#### Floating Tile Cards
All tiles use this pattern:
```css
.tile {
    background: #112240;
    border: 1px solid rgba(29, 58, 92, 0.3);
    border-radius: 12px;
    padding: 24px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.3),
        0 0 40px rgba(100, 255, 218, 0.03);
}

.tile:hover {
    transform: translateY(-8px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.4),
        0 0 60px rgba(100, 255, 218, 0.08);
}
```

#### Gallery Modals
Each tile opens a modal with:
- Close button (×) top-right
- Title (h2)
- Intro sentence (neutral, factual)
- Grid of clickable chart thumbnails (3 columns desktop, 2 mobile)
- Disclaimer at bottom
- Lightbox for full-size image viewing with arrow navigation

#### Hero Sections
Pages use a hero pattern:
- Large teal title
- Horizontal line separator
- Tagline in muted text

---

## Truth Library Structure

### Room 1: How It Works
5 tiles with sectioned galleries (multiple chart categories per tile):
- The Incentive Machine (34 charts)
- Power Loops (17 charts)
- Stories That Steer Us (16 charts)
- Systems vs Individuals (18 charts)
- Your Place in the Loop (15 charts)

### Room 2: Money & Debt
5 tiles with simple grids:
- Who Actually Creates Money? (6 charts - chart1m.png to chart6m.png)
- Inflation vs Wages (8 charts)
- Why Housing Eats Everything (8 charts)
- The Fed's Real Job (8 charts)
- Winners, Losers, and "Neutral" Rules (8 charts)

### Room 3: Congress Over Time
5 tiles:
- The Flip Script (8 charts)
- When Oversight is Theater (7 charts)
- The Safe Targets (5 charts)
- Majority vs Minority Roles (5 charts)
- Reading Between the Lines (5 charts)

### Room 4: Agencies & Enforcement
5 tiles (4 charts each):
- What Agencies Actually Do
- The Logic of Red Tape
- How Bureaucracies Protect Themselves
- Why Good People Burn Out Inside
- Using the Rules to Change the Rules

### Room 5: The Data
5 tiles (4 charts each):
- Inflation Breakdown
- Wages vs Profits Over Time
- Debt and the Household
- Public Money, Private Benefit
- Where You Are in the Data

### Room 6: The Human Cost
5 tiles (4 charts each, except Communities in Middle has 4):
- Working and Still Behind
- The Mental Load
- Families Under Strain
- Communities in the Middle
- Turning Pain into Power

### Room 7: The Mirror
- Administrative Mirror (links to /mirror/, NOT a gallery)
- Before and After (8 files: chart1-4.png + table1-4.png)
- The Gap Between Words and Outcomes (4 charts)
- Recognizing Scripts (4 charts)
- From Blame to Diagnosis (4 charts)
- Choosing Your Next Move (NO GALLERY YET - needs resources page)

---

## JavaScript Functions (in truth-library.html)
```javascript
// Open gallery modal by ID
openGalleryModal('modal-id')

// Close gallery modal
closeGalleryModal()

// Open lightbox with image
openLightbox(imageSrc)

// Close lightbox
closeLightbox()

// Navigate lightbox (arrows)
navigateLightbox(direction)  // -1 for prev, 1 for next

// Toggle section expand/collapse (Room 1 only)
toggleSection(button)
```

---

## Rules & Constraints

### DO:
- Maintain the dark theme (#0a192f background)
- Keep all tile hover effects consistent
- Use the existing modal/lightbox pattern for new galleries
- Keep text neutral, factual, non-persuasive
- Use "Gallery →" for tiles with chart modals
- Test responsive behavior at 600px breakpoint

### DO NOT:
- Change the color scheme
- Remove existing functionality
- Add CSS frameworks (vanilla CSS only)
- Add JavaScript frameworks (vanilla JS only)
- Use narrative/persuasive language in descriptions
- Restructure HTML without explicit permission

### Mobile Breakpoint
```css
@media (max-width: 600px) {
    /* Modal: full-screen */
    /* Grid: 2 columns */
    /* Thumbnails: 90px height */
    /* Font sizes reduced */
}
```

---

## Pending Work

1. **"Choosing Your Next Move" tile** - Needs a resources page (not a gallery)
   - Should link to: How to file complaints, find representatives, submit public comments, FOIA requests

2. **Footer year** - Update "© 2025" to "© 2026"

3. **Micro-labels for charts** - Optional future enhancement to add small labels under each chart thumbnail

---

## Example Prompt Format

When asking for changes, use this format:
```
In [filename], make this change:

1. Find [specific element or text]
2. Change it to [new content]
3. [Any additional steps]

Constraints:
- Don't change [what to preserve]
- Maintain [specific behavior]

Commit with message "[description]" and push.
```
