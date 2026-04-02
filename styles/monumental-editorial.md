# Monumental Editorial

**Params used:** Parchment Gold, Basic Roundness, Hospitality Interior Photography, Playfair Display / Newsreader / Geist

---

## Available Parameters

### colorPalette

- Carbon Frost
- Deep Space Neon
- Fern Journal
- Forest Sage
- Heritage Warmth
- Parchment Gold
- Tangerine Orbit
- Terminal Green
- Warm Concrete
- Warm Linen

**Color lookup:** `style-palettes/_index.yaml` maps each name to a `*.palette.yaml` file containing `colors` (hex), `token_semantics`, and `used_in_styles`. Shared semantic key definitions: `style-palettes/_token-legend.yaml`.

### roundness

- Basic Roundness

### decorativeImagery

- Hospitality Interior Photography

### Typography (headings, body, captions)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
Viewport-filling display typography — uppercase headlines so large they bleed off both left and right edges simultaneously — is the cornerstone of the design. "FORM FOLLOWS FEELING" spans the full width and crops at both sides, creating the sensation that the type is bigger than the page itself. This bleeding, edge-breaking typographic gesture is non-negotiable; it transforms text into architecture. The full-bleed hero photograph beneath it exists as a textured stage, but the type is the event.

### Composition
Two distinct compositional modes alternate through the page. The hero is a full-bleed photographic slab with typography layered on top — text floats at multiple vertical positions across the image simultaneously (top-left caption, center body quote, top-right nav link, bottom edge-bleeding headline). Below, the layout shifts to a sparse three-column editorial grid: a short left-column label, a centered body text block, and a right-column link — with a single small photograph placed off-center to the right of middle. Visual weight in the hero is bottom-heavy, pulled down by the massive baseline-anchored headline.

### Spatial Density
Extremely sparse below the fold. The "EMPATHY SHAPES EVERYTHING" section is an enormous uppercase headline on a white ground with nothing else — the entire viewport is headline and void. The three-column editorial section contains a small photograph, two short paragraphs, and two labels across the full width, leaving the majority of the surface empty. On smaller formats, preserve the emptiness: show one element per screen, never compress multiple zones together.

### Scale Contrast
Extreme. The bleeding display headline runs 8–10x the size of body text — it is not a headline in the conventional sense but a typographic object at architectural scale. The "EMPATHY SHAPES EVERYTHING" section headline also runs at near-full-viewport-width, maintaining extreme scale even off the photograph. Body text is deliberately small and refined. No mid-scale exists — the design operates at two extremes only: monumental display and quiet body.

### Edge Behavior
Large typographic elements are the defining rule: they bleed past the viewport boundary on both sides, cropping against the edges with zero margin. This is the design's most distinctive spatial gesture and must be preserved wherever display headlines appear. Small elements — captions, nav links, body text, the small interior photograph — all float inward with generous margins, never touching edges. The contrast between bleeding type and inset small elements creates the page's sense of scale.

### Separation
Whitespace alone creates all separation — between the hero photograph zone and the headline zone, between sections, between the three editorial columns. No border strokes, no rules, no color-cut dividers anywhere. The transition from photograph to white ground is a hard cut with no gradient or fade. No shadows, no elevation — the design is entirely flat.

### Typography
The Headings category carries all display headlines at extreme scale — uppercase with tight, compressed line-height so stacked lines feel like a single monolithic slab. The Body category handles all running text in two modes: a mid-size centered quote overlaid on the photograph (slightly elevated weight), and small refined paragraphs in the editorial grid below. The Captions category carries all navigation labels, section identifiers ("About", "Approach →"), and column labels ("Interior design for hospitality") — small, light-weight, and widely spaced. Hierarchy is built from the extreme size gulf between Headings and everything else; weight plays a secondary role.

### Shape
`rounded.none` everywhere without exception. Every element — the small interior photograph, any containers, all typographic blocks — is strictly rectangular. No softness of any kind; the design's authority depends on absolute angularity.

### Color Rules
Strictly two surface states: `surface.primary` (white) for all off-photograph sections, and the photograph itself serving as a textured `surface.inverse`-equivalent in the hero. All type on the photograph uses `foreground.inverse` (white). All type below uses `foreground.primary` (near-black). No accent colors anywhere — no buttons, no highlights, no colored links. Navigation arrows (`→`) are the only non-typographic marks and they carry no color distinction. The palette is monochrome absolute.

### Decoration
High-quality interior design photography — luxurious hospitality spaces with warm ambient lighting — is the sole decorative layer, used full-bleed in the hero and as a single small inset image in the editorial section. No illustration, no gradients, no abstract marks, no icons. Typography at architectural scale takes decoration's place.

---

## Decorative Imagery

Architectural interior photography of hospitality spaces such as lounges, hotel lobbies, restaurants, or refined communal environments. Emphasize material richness, spatial depth, and a composed, design-forward point of view. The image should feel immersive and quietly luxurious.

When generating: "high-end hospitality interior photography, architectural composition, warm materials, quiet luxury, spacious room depth, editorial lighting, no people required, no text"

## Typography

- headings: Playfair Display
- body: Newsreader
- captions: Geist

## Color Palette (Parchment Gold)

Canonical hex values and per-token usage notes: [`style-palettes/parchment-gold.palette.yaml`](../style-palettes/parchment-gold.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.none: 0
```
