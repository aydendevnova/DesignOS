# Artisan Editorial

**Params used:** Heritage Warmth, Basic Roundness, Architectural Hand Illustrations, Playfair Display / Inter / Geist

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

- Architectural Hand Illustrations
- Lifestyle Workspace Photography
- Ornamental Brand Icon

### Typography (headings, body, captions)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
Full-bleed lifestyle photography — warm, human, atmospheric — used as the hero stage, with display typography overlaid directly on it. The design's emotional register is defined by the combination of photographic warmth and illustrated architectural detail artwork: hand-rendered building illustrations appear as inset content images, giving the design the feel of a handcrafted editorial magazine rather than a digital product page. Remove either the warm photography or the illustrated artwork and the artisan identity collapses.

### Composition
Two compositional modes alternate. The hero is a full-bleed portrait photograph with the brand name overlaid at large scale, flanked by small contextual labels at the left and right edges. Below, the layout uses an asymmetric two-column split: body text left, illustrated image right — then flips: large photograph left, body text right — creating a mirrored alternating rhythm. The final section uses `surface.inverse` as a full-width dark slab with a two-column split inside it. A centered icon marks section transitions. Visual weight alternates left-right between sections rather than holding a consistent gravitational anchor.

### Spatial Density
Sparse to moderate. Each section contains one photograph or illustration, one headline, two to three body paragraphs, and occasionally a bullet list — all with generous vertical padding above and below. The hero is the densest zone due to the overlaid labels and eyebrow text, but even there, emptiness dominates. On smaller formats, collapse to single-column stacked; preserve vertical breathing room between sections rather than compressing content.

### Scale Contrast
Moderate. The hero brand name runs large but does not bleed past edges — it sits contained within the photograph at approximately 5–6x Body size. Section headlines run at 3–4x Body, creating a clear but not extreme hierarchy. A centered amenities bar below the hero uses small all-caps labels at roughly 1x Body size, all equal-weight — a flat, non-hierarchical register. No extreme scale contrast; the design communicates through material warmth rather than typographic tension.

### Edge Behavior
The hero photograph bleeds full-width to all edges. All text sections float inward with generous lateral margins, content never approaching the viewport edge. Inset images (the illustrated building artwork) are sized to roughly half the content column width and sit flush with the column boundary on one side — never floating centered or bleeding. The `surface.inverse` bottom section bleeds full-width but its internal content respects the same inset margins as the light sections.

### Separation
A horizontal row of small all-caps amenity labels separated by hairline `border.subtle` vertical dividers serves as the primary structural separator between the hero and body sections. Within body sections, whitespace alone separates elements. The `surface.inverse` section creates a color-cut boundary with no rule or transition. No shadows, no elevation — entirely flat. The centered decorative icon (an ornamental brand mark) marks section transitions without using a rule.

### Typography
The Headings category carries the hero brand name and all section headlines — the hero name uses light or thin weight for an elegant, refined quality; section headlines use regular weight with natural line-height. The Body category handles all running paragraphs and the bullet list at comfortable reading size. The Captions category carries the eyebrow label ("WHERE YOUR BEST WORK HAPPENS"), flanking contextual labels ("WORKSPACE AND PRIVATE OFFICES", "DOWNTOWN EDMOND OKLAHOMA"), the amenity bar items, and the section identifier ("ABOUT") — all uppercase with wide letter-spacing, functioning as wayfinding and metadata throughout.

### Shape
`rounded.none` for all section containers, the hero photograph, and the `surface.inverse` slab. `rounded.sm` for the outlined CTA button overlaid on the hero photograph and the "LEARN MORE" button in the final section — barely softened, signaling restraint. `rounded.none` is the dominant shape language; the near-square button corners reinforce the artisan, non-digital aesthetic.

### Color Rules
`surface.primary` is a warm, muted sand tone that holds across all light sections — it unifies the page and harmonizes with the warm photography. `surface.inverse` is a deep olive-brown used for the final content section, providing a grounded, earthy contrast zone. `accent.primary` (a terracotta-adjacent warm tone) appears in the nav bar background, the "RESERVE YOUR SPACE" CTA button, the hero CTA button border, and the decorative brand icon — used consistently as the single action and brand color. `foreground.primary` on `surface.primary` and `foreground.inverse` on `surface.inverse`. No secondary or tertiary accents; the palette is deliberately narrow and warm.

### Decoration
Two distinct decorative image types: warm lifestyle photography (people working in brick-and-timber environments) and hand-rendered architectural illustrations of the building exterior and aerial view. The illustrated style is the more distinctive decorative choice — it signals craft and investment in the physical space rather than relying on stock photography alone. A small ornamental brand icon (a stylized architectural flourish) appears as a centered section divider mark. No mesh gradients, no abstract geometric elements.

---

## Decorative Imagery

Hand-rendered architectural drawings or line illustrations with an editorial, crafted feel. Use delicate linework, warm material cues, and restrained detail so the illustration reads as a refined inset visual rather than a cartoon. The overall tone should suggest craftsmanship, place, and human touch.

When generating: "editorial architectural hand illustration, refined line drawing, warm materials, subtle shading, crafted lifestyle brand feel, elegant composition, no labels, no blueprint grid, high-end magazine aesthetic"

## Typography

- headings: Playfair Display
- body: Inter
- captions: Geist

## Color Palette (Heritage Warmth)

Canonical hex values and per-token usage notes: [`style-palettes/heritage-warmth.palette.yaml`](../style-palettes/heritage-warmth.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.none: 0
rounded.sm: 4
```
