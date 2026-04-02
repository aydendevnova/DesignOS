# Aerial Gravitas

**Params used:** Carbon Frost, Basic Roundness, Soft Cloud, Aerial Photography, Playfair Display / Inter / Geist / Geist Mono

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

### elevation

- Gentle Lift
- Sharp Depth
- Soft Cloud
- Soft Lift

### decorativeImagery

- Aerial Photography
- Cartographic Grid Overlay
- Landscape Photography

### Typography (headings, body, captions, data)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
Full-bleed aerial and landscape photography used as section-defining stage sets — not decorative accents, but structural zones that occupy entire viewport heights. The design is built from alternating photographic slabs and typographic slabs; remove the photography and the rhythm collapses. Every photographic block carries a tonal overlay that shifts the surface from neutral to a deep, saturated `surface.inverse` plane, making imagery and content zones feel like one continuous material.

### Composition
Stacked full-width horizontal sections with hard cuts between them — no gradual transitions, no overlapping zones. Within each section, content follows an asymmetric split: hero text anchors left at large scale, supporting text and CTAs cluster right. The numbered services list uses a full-width two-column extreme split — numbers flush left, service names flush right — creating a stretched ledger-like reading axis. A floating `surface.primary` card overlaps the boundary between the final photograph section and its edge, creating the only instance of layered depth in the layout.

### Spatial Density
Moderate to sparse. Each section contains a small number of elements — a headline, one or two lines of body, a single CTA — surrounded by generous vertical breathing room. The services list is the densest zone, but line spacing between entries keeps it airy. On smaller formats, preserve the section-per-viewport rhythm: each screen shows one section with minimal elements, never compressing multiple sections into view simultaneously.

### Scale Contrast
High — approximately 5–6x between the hero Headings and Body descriptor text. The hero headline is large and commanding, running two to three lines. The numbered list items sit at a large-but-subordinate scale, roughly 2–3x Body, forming a distinct mid-tier. This three-speed hierarchy (hero headline → list items → body/captions) is essential; all three levels must be present and clearly differentiated.

### Edge Behavior
Large photographic sections bleed edge-to-edge with zero margin, occupying the full container width. Typography in content sections floats inward with generous horizontal margins, never touching the viewport edges. The floating card in the photo section is inset from the right edge with comfortable padding, sitting visually "inside" the photograph rather than against its boundary. Small elements — eyebrow labels with dot indicators, CTA buttons — sit inset and never approach edges.

### Separation
Hard color cuts between full-width sections are the primary separator — `surface.primary` zones cut against `surface.inverse` photograph zones with no transition. A single hairline `border.subtle` rule separates the aerial hero photo from the typography section below it. No shadows on layout sections; the floating card uses `shadow.md` as the sole elevation instance. Within the services list, whitespace alone separates entries — no rules, no dividers.

### Typography
The Headings category drives all hero and section headlines at high scale with relaxed, natural line-height — titles read as composed statements, not compressed slabs. The Body category handles descriptor paragraphs and nav links at normal weight. The Captions category carries eyebrow labels — short uppercase phrases with wide letter-spacing paired with a small dot indicator — marking section identity before the headline. The numbered list creates a fourth typographic register: oversized Data-style index numbers in `accent.primary` paired with large Headings-weight service names, establishing a counted-list rhythm unique to this section.

### Shape
`rounded.sm` for all CTA buttons — small enough to read as nearly square-cornered, signaling precision over friendliness. `rounded.none` for all section containers, photograph blocks, and the floating card. No `rounded.full` pill shapes anywhere; the design's authority depends on angular containment.

### Color Rules
Two dominant surface zones — `surface.primary` (light, warm) for typography-led sections and `surface.inverse` (dark, deep) for photograph-led sections — alternate with each section, creating a light-dark-light cadence. `accent.primary` is used sparingly: numbered list indices, dot indicators on eyebrow labels, and CTA button fills only. A narrow strip of color-blocked rectangles (`accent.primary`, `accent.secondary`, `accent.tertiary`) appears as a single decorative moment at the transition between the hero and services section — its only occurrence. No accent color in body text, headings, or borders.

### Decoration
Full-bleed aerial and landscape photography is the primary decorative layer, carrying both atmosphere and section identity. Thin geometric construction lines — straight ruled grids overlaid on the aerial photograph at low opacity in `accent.primary` — evoke cartographic survey work and reinforce the precision positioning of the brand. A single row of small color-block rectangles at one section break is the only abstract decorative element; it is used once and never repeated.

---

## Decorative Imagery

Large-scale aerial photography showing terrain, coastlines, cities, or water systems from above. Favor expansive compositions with strong geometry, visible environmental texture, and enough negative space to support overlaid UI or typography. The image should feel structural rather than scenic, with a calm, survey-like perspective.

When generating: "high-quality aerial photography, top-down or high oblique view, expansive terrain or city geometry, cinematic scale, clear structure, subtle atmospheric depth, room for overlay text, no visible text, editorial quality"

## Typography

- headings: Playfair Display
- body: Inter
- captions: Geist
- data: Geist Mono

## Color Palette (Carbon Frost)

Canonical hex values and per-token usage notes: [`style-palettes/carbon-frost.palette.yaml`](../style-palettes/carbon-frost.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.none: 0
rounded.sm: 4
```

## Elevation

```yaml
shadow.md:
  - { type: "shadow", shadowType: "outer", color: "#00000008", offset: { x: 0, y: 1 }, blur: 3 }
  - { type: "shadow", shadowType: "outer", color: "#0000000a", offset: { x: 0, y: 4 }, blur: 12 }
```
