# Inline Friendly

**Params used:** Deep Space Neon, Basic Roundness, Soft Lift, Geist / Inter / Geist Mono

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

### Typography (headings, body, captions)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
A single word in the headline is set in a contrasting handwritten script — "doing" rendered in an expressive cursive style while the surrounding headline uses a high-contrast display weight — creating an inline typographic collision that is the design's entire personality. This is not a decorative element alongside the text; it is embedded within the sentence itself, disrupting and humanizing a single word. Remove it and the page becomes a forgettable clean SaaS layout. Every other choice — the rounded pill nav, the warm `surface.secondary` announcement badge, the friendly product mockups — exists to support and match the warmth this one typographic gesture establishes.

### Composition
Strictly centered single-column for the hero: announcement pill → headline → subtitle → CTA → product mockup. The product mockup section breaks to a two-panel side-by-side layout labeled "Your notes + transcript" and "AI enhanced," showing the before/after transformation at equal scale. Below, a centered large headline introduces a horizontally scrolling row of client logo tiles. Visual weight is symmetrically centered throughout with no left or right gravitational pull.

### Spatial Density
Sparse. The hero text zone contains minimal elements with generous whitespace between each. The product mockup panels are content-rich internally but sit with abundant empty space surrounding them. The client logo row uses equally-sized tiles with visible gaps. On smaller formats, preserve whitespace by showing the product panels stacked rather than side-by-side; never compress elements to fill freed space.

### Scale Contrast
High for the hero — the main headline runs approximately 5–6x the subtitle Body text, making it clearly dominant. Within the headline itself, the handwritten word introduces a third typographic register purely through style contrast rather than scale — it runs at roughly the same size as its surrounding words but reads as categorically different. No extreme scale contrast elsewhere; sections below the hero use a large centered headline at 3–4x Body, then the logo tiles at label scale.

### Edge Behavior
All content sits within a tight centered max-width container with generous lateral margins — nothing approaches the viewport edge. The product mockup panels float centered with visible margin on all sides. The client logo row tiles extend close to but do not reach the viewport edge. The floating video call thumbnail on the left product panel crops partially outside its parent card boundary — the only edge-breaking gesture on the page, and deliberately casual in feel.

### Separation
Whitespace alone separates all sections. The product mockups use `shadow.sm` elevation to lift them as distinct objects on `surface.primary`. Client logo tiles use `border.subtle` as card outlines, with gap space between tiles. The nav bar floats as a pill-shaped contained bar with `border.subtle` outline rather than spanning the full page width — it is itself a contained object. No rules, no color cuts, no background shifts between sections.

### Typography
The Headings category carries the hero headline and the social proof section headline at high scale — the dominant display register uses high-contrast weight with generous natural line-height. The Body category handles the subtitle and product mockup content at comfortable reading size. The Captions category carries the announcement pill label, the "Your notes + transcript" and "AI enhanced" labels above the mockup panels, nav links, and the "AI enhanced" sparkle-prefixed eyebrow — small and light. The inline handwritten script word is a decorative Headings treatment, not a separate font category — it is an expressive variant applied to one token within the headline.

### Shape
`rounded.full` dominates: the nav bar container, the announcement pill badge, the primary CTA button, and the "AI enhanced" eyebrow tag are all pill-shaped. `rounded.xl` for the product mockup card containers. `rounded.lg` for the client logo tiles. `rounded.md` for elements within the product UI mockups. `rounded.none` appears nowhere — every element on the page is softened, making this the second design in the set with zero sharp corners.

### Color Rules
`surface.primary` is a clean near-white holding across all sections. `surface.secondary` is a warm muted tint used for the announcement pill badge — the only non-white surface on the page aside from product mockup interiors. `accent.primary` (a saturated forest green) is used for the primary CTA button fill and the small sparkle icon before "AI enhanced" — appearing exactly twice, both times on direct action or feature-highlight elements. `foreground.muted` handles nav links, subtitle text, and client logo marks. No `surface.inverse` zone; the page never goes dark. The palette is maximally restrained: one accent, two surfaces, done.

### Decoration
The inline handwritten script word embedded in the headline is the primary and most distinctive decorative element — it is typographic decoration inseparable from content. A small sparkle/star glyph prefixes the "AI enhanced" label. The floating video call thumbnail (two participant faces) cropped at the edge of the left mockup panel adds a human, candid quality. No photography as decoration, no illustrations, no mesh gradients, no abstract shapes.

---

## Typography

- headings: Geist
- body: Inter
- captions: Geist Mono

## Color Palette (Deep Space Neon)

Canonical hex values and per-token usage notes: [`style-palettes/deep-space-neon.palette.yaml`](../style-palettes/deep-space-neon.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.md: 6
rounded.lg: 8
rounded.xl: 12
rounded.full: 9999
```

## Elevation

```yaml
shadow.sm:
  - { type: "shadow", shadowType: "outer", color: "#0000000a", offset: { x: 0, y: 1 }, blur: 2 }
```
