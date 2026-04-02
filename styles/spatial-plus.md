# Spatial Plus

**Params used:** Warm Linen, Basic Roundness, Soft Lift, Editorial Portrait Photography, Playfair Display / Inter / Geist

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

- Editorial Portrait Photography
- Landscape Photography

### Typography (headings, body, captions)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
A single `accent.primary` plus-sign mark — small, precise, and repeated as the only decorative element across the entire page — is the design's typographic signature. It appears as a lone mark in the top-left corner of the hero, as an eyebrow prefix before section labels, and as a vertical column of five marks floating between photographs in the content section. This repeated minimal glyph creates visual rhythm and brand consistency without illustration, gradient, or pattern. Remove the plus marks and the design loses its personality entirely, collapsing into a generic dark-hero layout.

### Composition
The hero is a `surface.inverse` rounded block — not a full-bleed photograph but a contained dark island sitting on `surface.primary` with visible margin on all sides. Inside it, content is left-anchored with the brand name at large display scale bottom-left, and a portrait photograph floating as a `rounded.xl` card in the upper-right quadrant. Below, the layout shifts to `surface.primary` with a centered large-scale statement paragraph, then a two-column asymmetric photo grid — a taller portrait image left, a wider landscape image right — with the plus-mark column floating between them as a vertical axis. Visual weight alternates between left-anchored (hero) and centered (statement section).

### Spatial Density
Sparse. The hero contains a headline, brand name, one photograph card, and three small text labels — surrounded by significant dark void. The statement section is a single large paragraph centered in open white space. The photo grid section has two large images with a narrow gap column between them and minimal caption text below the left image. On smaller formats, preserve the void: stack elements with generous spacing rather than filling the freed space with additional content.

### Scale Contrast
High. The brand name "Resintoi™" runs at extreme display scale — approximately 6–7x the subtitle headline above it — creating a two-speed hero: the subtitle reads first as a human-scale sentence, then the brand name hits as a spatial event. The statement paragraph below uses a large mid-scale — approximately 3x Body — with a deliberate two-color split: `foreground.primary` for the first clause, `foreground.muted` for the continuation, creating a visual fade that directs reading pace. No mid-scale in the hero; the design operates at monumental and utility only.

### Edge Behavior
The hero `surface.inverse` block floats inward with visible margin on all sides — it does not bleed to the viewport edge, which is unusual and intentional; the contained dark block reads as an object rather than a zone. The portrait photograph card within the hero floats inset within the dark block. Below the hero, the two-column photograph grid extends close to but not past the viewport edge, with modest outer margins. Small elements (caption text, eyebrow labels) are comfortably inset.

### Separation
The rounded `surface.inverse` hero block creates section separation through color contrast alone — no rules, no borders. Below the hero, whitespace is the sole separator between sections. The scrolling logo bar uses visible gap spacing between brand names with no dividers. No shadows on layout sections; the portrait photograph card within the hero uses `shadow.md` to lift it off the dark background. `border.subtle` hairlines appear only inside the small "Contact Jessica" overlay card within the hero photograph.

### Typography
The Headings category carries the brand name at extreme display scale with heavy weight and tight tracking — it reads as a wordmark-scale object. The Body category handles the subtitle headline above the brand name and all running paragraphs at comfortable weight. The Captions category carries the three right-aligned service labels in the hero (`CONSULTING`, `MARKETING`, `SUSTAINABILITY`) in small uppercase with wide letter-spacing, plus the eyebrow prefix (`+ WHAT WE DO`) and the bottom-left caption beneath the portrait. The two-tone statement paragraph — `foreground.primary` fading to `foreground.muted` mid-sentence — is a typographic device applied within the Body category, not a separate font.

### Shape
`rounded.2xl` for the hero `surface.inverse` container block — the largest and most prominent rounded container on the page. `rounded.xl` for the portrait photograph card within the hero and both content section photographs. `rounded.none` for the nav bar and all structural page containers. No `rounded.full` shapes anywhere; the design uses rounded containers as spatial objects, not as interactive UI affordances.

### Color Rules
`surface.primary` is the page background — a near-white warm ground. `surface.inverse` is used exclusively for the hero block, creating one deep dark zone as a contained object. `accent.primary` (a vivid green) appears only as the plus-sign marks and the eyebrow label prefix — never in buttons, never on surfaces, never as a fill. It functions purely as a punctuation color: small, precise, and charged with brand identity through repetition. `foreground.muted` is used for the faded second clause of the statement paragraph and the scrolling logo bar clients — deliberate desaturation as a reading device. No secondary or tertiary accents.

### Decoration
The repeated `accent.primary` plus-sign glyph is the sole decorative element — appearing as a single mark in the hero corner, as a section label prefix, and as a vertical five-mark column between photographs. High-quality editorial portrait photography and landscape photography serve as the primary visual content in image zones. No illustrations, no mesh gradients, no abstract shapes. Decoration is achieved through glyph repetition and photographic quality alone.

---

## Decorative Imagery

High-quality portrait photography with an editorial fashion or magazine sensibility. Favor confident composition, clear subject separation, and controlled lighting that feels elevated rather than casual. The portrait should read as a strong design element with enough simplicity around the subject for overlay use.

When generating: "editorial portrait photography, magazine-quality composition, refined lighting, strong subject presence, clean background or minimal environment, premium tone, no text"

## Typography

- headings: Playfair Display
- body: Inter
- captions: Geist

## Color Palette (Warm Linen)

Canonical hex values and per-token usage notes: [`style-palettes/warm-linen.palette.yaml`](../style-palettes/warm-linen.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.none: 0
rounded.xl: 12
rounded.2xl: 16
```

## Elevation

```yaml
shadow.md:
  - { type: "shadow", shadowType: "outer", color: "#00000008", offset: { x: 0, y: 1 }, blur: 3 }
  - { type: "shadow", shadowType: "outer", color: "#0000000a", offset: { x: 0, y: 4 }, blur: 12 }
```
