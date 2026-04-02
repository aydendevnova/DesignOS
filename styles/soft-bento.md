# Soft Bento

**Params used:** Forest Sage, Basic Roundness, Soft Cloud, Inter / Inter / Geist / Geist Mono

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

### Typography (headings, body, captions, data)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
A visible bento grid of rounded, tinted surface blocks is the structural and aesthetic cornerstone — the page is explicitly a set of containers, not a continuous scroll. Each block is a distinct `surface.secondary` tile with its own purpose: headline, UI demo, CTA, data stat, or list. Remove the tiled container system and the design becomes a generic column layout. The softness of the rounded corners and muted tinted surfaces signals clinical warmth rather than clinical coldness — approachability is the emotional mandate the grid must carry.

### Composition
A two-column bento grid dominates the hero and repeating content sections, with tiles of varying heights sitting side by side. Tiles do not share borders — gap space between them reveals `surface.primary` and gives each block breathing room. Visual weight is left-anchored: the primary message tile always occupies the left column, with supporting or demonstrative content in the right. Below the grid, single-column full-width text sections provide rhythm breaks between bento zones.

### Spatial Density
Moderate. Each bento tile contains only one or two content types — a headline and body, or a UI mockup, or a stat pair — with generous internal padding. No tile is crowded. Between sections, substantial vertical whitespace separates each bento cluster from the next. On smaller formats, collapse the two-column grid to single-column stacked tiles; preserve internal tile padding — never compress tile contents to fit more tiles per screen.

### Scale Contrast
High within tiles, moderate across the page. Hero headlines run 4–5x Body size, creating strong dominance inside their tile. Data figures (`$2.5B+`, `11M+`) are displayed at a large scale — roughly 3x their caption labels — forming a clear two-speed stat hierarchy. The centered list of clinical terms (Eating Disorder, Detox, SUD) uses graduated scale contrast between items, with the middle item largest — an expressive typographic device unique to this list tile.

### Edge Behavior
All tiles float inward from the viewport edge with a consistent outer margin — nothing bleeds to the browser boundary. Inside each tile, content is inset with generous padding; headlines and body text never press against tile edges. The UI mockup cards within the demo tile are themselves inset within their parent tile, creating a nested inset-within-inset containment. Small elements like pill-shaped category tags sit inset within their tiles and never approach tile boundaries.

### Separation
Gap space between tiles — revealed `surface.primary` background — is the sole structural separator. No border strokes between tiles, no dividers within tiles, no rules between sections. Whitespace alone separates the logo bar, section headings, and text-only sections from adjacent bento clusters. No shadows on tiles; elevation (`shadow.sm`) appears only on the nested UI mockup cards within the demo tile, suggesting interactive product surfaces.

### Typography
The Headings category carries hero headlines and section-opening statements at high scale with natural line-height — multi-line titles read as calm, considered statements. The Body category handles all descriptor paragraphs and nav links at normal weight and spacing. The Data category drives stat figures (`$2.5B+`, `11M+`) at large display scale, paired with small Captions labels beneath each figure. The Captions category also handles pill-shaped eyebrow tags (`Broad clinical support`, `The problem`) rendered in regular weight — not uppercase — relying on the pill container for visual distinction rather than letter-spacing.

### Shape
`rounded.2xl` for all bento tiles and the hero CTA block — the dominant container radius that establishes the design's soft character. `rounded.xl` for nested UI mockup cards within the demo tile. `rounded.full` for pill-shaped eyebrow tags, the nav CTA button, and the status badge (`Form complete`). `rounded.lg` for small inline buttons within the UI mockup. `rounded.none` appears nowhere — every element in the design is softened.

### Color Rules
`surface.primary` is the page background. `surface.secondary` fills all bento tiles in a muted tinted variant — tiles are the same tint family but some are deeper than others, with the CTA tile using `surface.inverse` (dark) as the sole high-contrast block on the page. `accent.primary` appears in the nav CTA button, the status badge fill within the demo tile, and the sparkline data visualization — used sparingly as a true highlight color. `foreground.muted` handles investor logo marks and caption labels. No secondary or tertiary accents; the palette is deliberately narrow.

### Decoration
UI product mockups — simplified representations of CRM, EHR, and RCM screens with patient data — serve as the primary non-typographic visual content, functioning as both decoration and product demonstration. A small sparkline chart within one mockup card is the only data visualization. No mesh gradients, no photography, no abstract illustration. The graduated-scale clinical terms list (Eating Disorder through PHP) is the single expressive typographic decoration.

---

## Typography

- headings: Inter
- body: Inter
- captions: Geist
- data: Geist Mono

## Color Palette (Forest Sage)

Canonical hex values and per-token usage notes: [`style-palettes/forest-sage.palette.yaml`](../style-palettes/forest-sage.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.lg: 8
rounded.xl: 12
rounded.2xl: 16
rounded.full: 9999
```

## Elevation

```yaml
shadow.sm:
  - { type: "shadow", shadowType: "outer", color: "#0000000a", offset: { x: 0, y: 1 }, blur: 2 }
```
