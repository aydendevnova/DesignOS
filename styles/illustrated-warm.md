# Illustrated Warm

**Params used:** Tangerine Orbit, Basic Roundness, Soft Cloud, Storybook Character Illustrations, Funnel Sans / Inter / Geist

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

- Confetti Sparkle Marks
- Storybook Character Illustrations

### Typography (headings, body, captions)

Each accepts one of: Anton, Funnel Sans, Geist, Geist Mono, IBM Plex Mono, Inter, Newsreader, Playfair Display

---

### Identity
Hand-drawn character illustrations — a girl reading, a bear, a child at a bookshelf, rendered in a warm storybook style — flank the central product UI screenshot as decorative sentinels. This pairing of realistic software UI with playful illustration is the design's defining move and emotional argument: serious product, human warmth. Remove the illustrations and it becomes an indistinguishable SaaS page; remove the product screenshot and it becomes a children's brand. Both must coexist at the hero level.

### Composition
Centered single-column layout with a tight max-width text container for headlines and body, expanding to a wider container for the product mockup. The hero follows a strict vertical stacking order: announcement bar → nav → info banner → headline → body → CTA → star rating → tabbed feature selector → product screenshot. Below the fold, an asymmetric two-column split is used for "Get to know" sections — large left-anchored headline beside right-aligned body and link — with a full-width accordion-and-mockup panel beneath. Visual weight is symmetrically centered throughout.

### Spatial Density
Moderate and well-paced. The hero text zone is sparse — a few lines of copy, one CTA, one trust signal — with visible breathing room between elements. The product mockup is intentionally information-dense, communicating software depth. Between major sections, generous vertical whitespace creates clear chapter breaks. On smaller formats, collapse the two-column splits to single-column stacked; the product mockup should scale as a unit with horizontal scroll rather than reflowing.

### Scale Contrast
Moderate-high — approximately 4–5x between the bold hero Headings and Body descriptor text. The headline is the largest typographic element and dominates the top of the page clearly. The "Get to know Playground" section headline runs at an even larger scale, creating a section-break moment of typographic drama. Stat and trust signals (star rating, review count) sit at a small distinct scale. No extreme contrast — the design prioritizes clarity and approachability over tension.

### Edge Behavior
All text and UI content sits within a centered inset container with generous lateral margins. The product mockup extends to a slightly wider container but does not bleed to the viewport edge. The illustrations break outside the mockup's lateral boundary and overlap into the margin zone — the only elements that escape the content column. The announcement bar and nav bar span full width flush to edges. Small CTAs and tags are inset with comfortable padding.

### Separation
Whitespace alone separates most sections. The tabbed feature selector uses `border.subtle` underline rules beneath inactive tabs, with `accent.primary` underline on the active tab. The product mockup floats on `surface.primary` with `shadow.lg`, clearly elevating it off the page. The accordion list uses `border.subtle` hairline rules between each row. No color-cut section breaks, no background shifts between text sections — `surface.primary` holds throughout except for a faint tinted `surface.secondary` behind the second product mockup panel.

### Typography
The Headings category drives all hero and section headlines at bold weight and high scale with tight but not compressed line-height — the boldness signals confidence and accessibility simultaneously. The Body category handles descriptor paragraphs and nav links at normal weight. The Captions category carries the info banner text, star rating label, review count, tab labels, accordion row labels, and the "Watch video tour" prompt — a busy small-text register that frames and labels product zones. Hierarchy is built from bold weight contrast between Headings and Body, reinforced by scale.

### Shape
`rounded.full` for the primary CTA button, the announcement bar, the info banner pill, and the feature tab selector container — pill shapes dominate interactive and informational elements. `rounded.xl` for the product mockup container card and the second-section mockup panel. `rounded.lg` for UI elements within the product mockup (sidebar items, column cards). `rounded.md` for the accordion rows and secondary link elements. `rounded.none` for the nav bar and full-width structural elements.

### Color Rules
`surface.primary` is a warm off-white that holds across all text sections, giving the page a paper-like warmth that complements the illustrations. `accent.primary` (a saturated blue) is used for the primary CTA button, active tab indicator, inline text links, and the announcement bar background — it appears frequently but only on interactive and navigational elements, never on decorative surfaces. `accent.secondary` (a warm orange-yellow) appears in the star rating icons and small scattered illustration accent marks — the emotional warmth signal. `surface.secondary` provides a faint tint behind the lower mockup panel. No `surface.inverse` zones; the page never goes dark.

### Decoration
Hand-drawn storybook character illustrations (children, animals, classroom objects) flank the hero product mockup — the primary and most distinctive decorative layer. Small scattered confetti or sparkle marks appear in the announcement bar background. All illustrations use a warm, limited color palette consistent with `surface.primary` warmth. No photography, no mesh gradients, no abstract geometric decoration.

---

## Decorative Imagery

Warm hand-drawn character illustrations with a soft storybook quality. Use approachable shapes, gentle texture, and expressive but simple poses so the illustration adds personality without overwhelming product content. The tone should feel caring, playful, and premium rather than childish.

When generating: "storybook-style character illustration, warm hand-drawn feel, soft texture, approachable shapes, playful but refined, editorial product companion art, no text"

## Typography

- headings: Funnel Sans
- body: Inter
- captions: Geist

## Color Palette (Tangerine Orbit)

Canonical hex values and per-token usage notes: [`style-palettes/tangerine-orbit.palette.yaml`](../style-palettes/tangerine-orbit.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.none: 0
rounded.md: 6
rounded.lg: 8
rounded.xl: 12
rounded.full: 9999
```

## Elevation

```yaml
shadow.lg:
  - { type: "shadow", shadowType: "outer", color: "#00000008", offset: { x: 0, y: 2 }, blur: 4 }
  - { type: "shadow", shadowType: "outer", color: "#0000000f", offset: { x: 0, y: 12 }, blur: 32 }
```
