# Cinematic Alternating

**Params used:** Warm Concrete, Basic Roundness, Sharp Depth, Atmospheric Landscape Photography, Anton / Inter / Geist

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

- Atmospheric Landscape Photography

### Typography (headings, body, captions)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
Moody, full-bleed atmospheric landscape photography — misty hills, overcast skies, dramatic natural light — used as both the hero stage and as embedded imagery inside product UI mockups. The photography bleeds into the product screenshots themselves, so the mood is inescapable: even when looking at a chat interface, you see the landscape behind it. This recursive layering of landscape-within-product is the design's defining move. Remove the atmospheric photography and the design becomes a generic dark SaaS page; it is the photography's pervasive presence at every level that creates the cinematic identity.

### Composition
Two compositional registers alternate. The hero is a full-bleed landscape photograph with centered typography overlaid at mid-height. Below, the feature sections use a strict alternating two-column layout: image-left/text-right, then text-left/image-right, then image-left/text-right — each pair separated by a subtle `border.subtle` hairline rule spanning the full width. The entire page below the hero sits on a near-black `surface.inverse` ground. Visual weight is consistently centered in the hero, then alternates left-right in the feature rows, creating a scanning rhythm that moves diagonally down the page.

### Spatial Density
Moderate. Each feature row contains one product mockup image and one text block — a small icon-plus-label eyebrow, a headline, two sentences of body, and a single CTA button. Generous vertical padding above and below each row prevents crowding. The hero is the sparsest zone: only a headline, one body line, and one CTA button centered in the vast landscape. On smaller formats, collapse the alternating columns to single-column stacked; preserve the row-by-row pacing rather than compressing multiple features into view simultaneously.

### Scale Contrast
Moderate — approximately 3–4x between the hero Headings and Body descriptor. The hero headline is prominent and centered but does not dominate at extreme scale; it reads as a considered statement rather than an architectural event. Feature section headlines sit at roughly 2–3x Body, clearly distinct but not dramatic. No extreme scale contrast; the design's authority comes from photographic atmosphere and compositional calm rather than typographic tension.

### Edge Behavior
The hero photograph bleeds full-width to all edges. Below the hero, the `surface.inverse` background also spans full-width edge-to-edge. Content within feature rows floats inward with consistent lateral margins — text and images never approach the viewport edge. Product mockup images are inset within their column with comfortable padding. The single full-width hairline rules between feature rows span edge-to-edge as the only flush non-photographic elements.

### Separation
Full-width `border.subtle` hairline rules divide each alternating feature row from the next — the sole structural separator on the dark ground. The transition from the landscape hero to the dark feature section is a hard color cut with no rule or fade. No shadows on layout sections; product mockup cards use `shadow.lg` to lift them as distinct objects against the dark background. No background-color shifts between feature rows — `surface.inverse` holds throughout all feature sections.

### Typography
The Headings category carries the hero headline and all feature section headlines at regular weight with natural, relaxed line-height — the tone is calm and intelligent, never aggressive. The Body category handles all descriptor paragraphs at a small comfortable size. The Captions category carries eyebrow labels — a small icon followed by a short label (`Linked Sources`, `Report Builder`, `Search Insights`) in light weight — providing the only navigational metadata in each feature row. Hierarchy is built from scale contrast between Headings and Body; weight plays a minimal role, keeping the overall tone understated.

### Shape
`rounded.full` for the primary CTA button ("Try for Free") — a pill shape that reads as the single approachable, soft interactive element on an otherwise severe dark page. `rounded.xl` for product mockup image containers. `rounded.lg` for small secondary CTA buttons ("View Pricing & Plans") within feature rows. `rounded.none` for the nav bar, section containers, and all structural layout elements. The contrast between the pill CTA and the rectangular layout reinforces the "one clear action" hierarchy.

### Color Rules
`surface.primary` exists only as the nav bar background — a near-white sliver at the very top. The entire hero and all feature sections live on `surface.inverse` (deep near-black), making darkness the dominant surface of the page. No accent color is used for fills, backgrounds, or decoration anywhere. `accent.primary` appears only in the nav "Try Free" button border/fill and possibly the eyebrow icon tint — maximum restraint. `foreground.inverse` carries all text on the dark ground. `foreground.muted` handles body text and captions at reduced contrast, preserving the moody low-contrast atmosphere. The design never shifts to a light zone below the hero; darkness is absolute.

### Decoration
Atmospheric landscape photography — misty mountain ranges, rolling hills under overcast skies, dramatically lit natural terrain — is the sole decorative layer, appearing full-bleed in the hero and embedded as the background within product UI mockup screenshots. The recursion of landscape-within-interface is the distinctive decorative gesture. No illustrations, no abstract shapes, no mesh gradients, no plus marks or glyph repetition.

---

## Decorative Imagery

Moody landscape photography with visible atmosphere such as fog, mist, overcast light, or distant haze. Favor cinematic depth, soft contrast transitions, and a sense of scale that can carry a hero section without becoming busy. The image should feel contemplative and slightly dramatic.

When generating: "cinematic atmospheric landscape photography, misty hills or open terrain, overcast natural light, soft haze, dramatic depth, quiet mood, editorial quality, no text, spacious composition"

## Typography

- headings: Anton
- body: Inter
- captions: Geist

## Color Palette (Warm Concrete)

Canonical hex values and per-token usage notes: [`style-palettes/warm-concrete.palette.yaml`](../style-palettes/warm-concrete.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.none: 0
rounded.lg: 8
rounded.xl: 12
rounded.full: 9999
```

## Elevation

```yaml
shadow.lg:
  - { type: "shadow", shadowType: "outer", color: "#000000B3", offset: { x: 0, y: 12 }, blur: 24 }
```
