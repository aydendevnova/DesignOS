# Editorial Scientific

**Params used:** Fern Journal, Basic Roundness, Gentle Lift, Technical Construction Overlay, Newsreader / Inter / IBM Plex Mono

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

- Landscape Photography
- Technical Construction Overlay

### Typography (headings, body, captions)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
A full-bleed landscape photograph anchors the page as a deep, textured stage — the central visual event that everything else is arranged around and layered on top of. This photographic foundation is non-negotiable; remove it and the design collapses into an ordinary text layout. All other choices — the restrained typographic hero, the floating terminal overlay, the sparse decorative annotation marks — exist to frame and activate this photographic plane.

### Composition
The layout uses a wide single-column rhythm with generous horizontal margins, placing content in an asymmetric left-heavy split at the hero level: a large headline block occupies the left half, a body text and CTA cluster the right. Below, the full-bleed photograph breaks the column constraint entirely and runs edge-to-edge. Visual weight is top-left-anchored in the hero, then recentered by the full-width image section below. The grid is loose and intuitive rather than strict — elements align relationally, not to a rigid column count.

### Spatial Density
Sparse above the fold. The hero zone contains only a headline, a short descriptor paragraph, and two CTAs, surrounded by abundant `surface.primary` breathing room. The full-bleed image section is denser — the photograph fills the entire block and a terminal code overlay floats centered within it — but empty space still dominates the edges. On smaller formats, preserve emptiness by reducing visible elements per screen, never by compressing the same content tighter.

### Scale Contrast
High, but not extreme — approximately 4–5x between the hero Headings and the Body descriptor text. The headline is large and commanding but does not crush its container; it sits comfortably with room around it. No micro-scale exists: labels and nav links sit at a small-but-legible size, creating a clean three-speed hierarchy of headline, body, and utility text.

### Edge Behavior
Large elements float inward with generous margins in the hero zone — nothing touches the viewport edges. The full-bleed photograph is the single exception: it bleeds completely to the left and right container boundaries, creating the sensation of a window cut into the layout. Small elements (nav links, logo, caption labels) are inset with comfortable padding and never approach the edge.

### Separation
Whitespace alone creates all separation in the hero and nav zones — no border strokes, no dividers, no background shifts. The `surface.inverse` terminal card floats over the photograph using `shadow.lg` elevation, creating a distinct foreground layer. Subtle annotation marks (figure labels, tick-mark ruler motifs) act as lightweight visual dividers at section boundaries without using formal border rules.

### Typography
The Headings category drives the hero headline at high scale with relaxed line-height — multi-line titles stack with natural breathing room, not compression. The Body category handles all descriptor text, CTA labels, and nav links at normal weight and spacing. The Captions category carries eyebrow labels, figure annotations (`FIG. 001`, `FIG. 002`), and the ruler tick metadata — rendered in wide uppercase letter-spacing to signal reference material and technical precision. Hierarchy is built from scale contrast between Headings and Body, with Captions providing a distinct third register through uppercase tracking rather than size.

### Shape
`rounded.md` for primary CTA buttons and the terminal code card. `rounded.full` for the secondary outlined button. `rounded.none` for the nav bar and all section containers. The deliberate mix — sharp containers with softened interactive elements — keeps the layout grounded while making actionable elements approachable.

### Color Rules
`surface.primary` dominates the entire page as the warm background. `surface.inverse` is used exclusively for the floating terminal overlay, creating a single high-contrast dark zone that anchors the photograph section. `accent.primary` is reserved solely for the primary CTA button fill and the single timeline indicator mark at the bottom — it appears twice on the page, never in body text, never in nav, never decoratively. `foreground.muted` handles logo partners and navigation secondary text. No secondary or tertiary accents exist; restraint is absolute.

### Decoration
Full-bleed landscape photography is the primary decorative layer — it functions as both atmosphere and content. Overlaid thin geometric construction lines (circular arcs, diagonal rules rendered in `accent.primary` at low opacity) appear on the photograph as technical annotation marks, evoking scientific diagrams and cartographic overlays. A horizontal ruler with tick marks at the bottom of the page reinforces the technical-reference register. Dot indicators on the left edge of the photograph section serve as carousel position markers.

---

## Decorative Imagery

Lightweight technical annotation graphics such as arcs, measurement guides, construction lines, and diagram marks layered over a primary image. Keep the marks sparse and intentional so they read as analytical augmentation rather than engineering clutter. The effect should feel like a scientific or design study overlay.

When generating: "technical construction overlay, thin arcs and guide lines, diagram annotation marks, low opacity, precise scientific study feel, sparse composition, no labels, no heavy grid"

## Typography

- headings: Newsreader
- body: Inter
- captions: IBM Plex Mono

## Color Palette (Fern Journal)

Canonical hex values and per-token usage notes: [`style-palettes/fern-journal.palette.yaml`](../style-palettes/fern-journal.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.none: 0
rounded.md: 6
rounded.full: 9999
```

## Elevation

```yaml
shadow.lg:
  - { type: "shadow", shadowType: "outer", color: "#00000008", offset: { x: 0, y: 4 }, blur: 6 }
  - { type: "shadow", shadowType: "outer", color: "#00000012", offset: { x: 0, y: 16 }, blur: 40 }
```
