# Product Demo

**Params used:** Terminal Green, Basic Roundness, Sharp Depth, Geist / Inter / Geist Mono / IBM Plex Mono

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
A full-scale, floating product UI screenshot — a dense, realistic data table with a sidebar, column headers, and live-looking contact records — is the centerpiece of the page and the design's primary argument. The product is the hero; the headline exists to label it, not to precede it. Every other section either supports this product-forward stance (the integration constellation diagram, the stat row) or provides narrative context between demonstrations. Remove the product mockup and the design loses its reason for existing.

### Composition
Single-column, centered, stacked full-width sections with a narrow content container and generous lateral margins. The product mockup breaks slightly wider than the text column, creating a subtle zoom moment. The integration diagram section uses a dark `surface.inverse` rounded block inset from the page edges as a self-contained showcase panel. The stat row at the bottom uses a four-column equal-width grid. Visual weight is consistently centered — no left or right gravitational pull anywhere on the page.

### Spatial Density
Sparse in text sections, dense inside product mockup zones. The hero text area contains a rating badge, a three-line headline, one body paragraph, two CTAs, and a trust note — all with room to breathe. The product table mockup is intentionally dense with rows and columns, communicating product maturity and data richness. On smaller formats, the text sections compress gracefully; the product mockup should scroll horizontally or scale down as a unit rather than reflowing its contents.

### Scale Contrast
Moderate — approximately 3–4x between the hero Headings and Body text. The headline is prominent but not monumental; it serves a supporting role to the product screenshot rather than dominating the viewport. The stat figures (`5M+`, `3.1x`, `2.5hrs`, `12k`) run at approximately 4x their caption labels, creating a strong two-speed data display. No extreme scale contrast anywhere — the design's authority comes from product density, not typographic drama.

### Edge Behavior
All content floats inward within a centered max-width container with consistent lateral margins. The product mockup and the integration panel extend slightly beyond the text column width but never reach the viewport edge. The integration panel uses `rounded.3xl` and sits as a contained island with clear margin on all sides — it does not bleed. The announcement bar at the very top is the only full-width flush element. Small elements (CTAs, badges, nav items) are inset with comfortable padding.

### Separation
Whitespace alone separates all sections — no horizontal rules, no color-cut borders between content zones. The `surface.inverse` integration panel creates a dark island that reads as a distinct section through color contrast alone, not through borders. The product mockup floats on `surface.primary` with `shadow.lg` providing the only elevation, lifting it clearly off the background. The data table uses `border.subtle` hairline rules between rows and columns internally.

### Typography
The Headings category drives the hero headline and section headlines at moderate scale with natural line-height — clear and direct, never compressed or stylized. The Body category handles all descriptor paragraphs, table cell contents, and nav links at normal weight. The Captions category carries the eyebrow label (`PROBLEM → PROMISE`), the rating badge text, the "No card required" trust note, and stat figure labels — rendered in a small, muted register that frames without competing. The Data category drives the four stat figures at large display scale, each paired with a Captions label beneath.

### Shape
`rounded.lg` for CTA buttons, table badge chips, and small UI elements within the product mockup. `rounded.xl` for the product mockup container card and the integration panel's inner app icon cards. `rounded.3xl` for the integration panel itself — the largest, most prominent rounded container on the page. `rounded.full` for the primary filled CTA button and the announcement bar pill. `rounded.none` for the data table rows and the nav bar.

### Color Rules
`surface.primary` is a near-white page background. `surface.inverse` (deep dark) is used exclusively for the integration diagram panel — one dramatic zone of contrast on an otherwise light page. The announcement bar uses a gradient fill of `accent.primary` into `accent.secondary` — the only gradient instance, and the first thing seen on the page. `accent.primary` reappears in the primary CTA button and the central glow within the integration panel. `foreground.muted` handles social proof logos, caption labels, and the sidebar icon states. No surface shifts between text-only sections — `surface.primary` holds throughout.

### Decoration
The integration constellation diagram — a centered brand icon surrounded by floating partner app logos connected by subtle dotted lines, set against a deep `surface.inverse` background with a radial glow emanating from the center — is the sole decorative set piece. Small emoji-style 3D icons accompany each stat figure. A gradient announcement bar at the very top uses `accent.primary`-to-`accent.secondary` as a thin decorative band. No photography, no mesh gradients in body sections, no abstract illustration.

---

## Typography

- headings: Geist
- body: Inter
- captions: Geist Mono
- data: IBM Plex Mono

## Color Palette (Terminal Green)

Canonical hex values and per-token usage notes: [`style-palettes/terminal-green.palette.yaml`](../style-palettes/terminal-green.palette.yaml). Resolve palette display names from params via [`style-palettes/_index.yaml`](../style-palettes/_index.yaml). Shared semantic key definitions: [`style-palettes/_token-legend.yaml`](../style-palettes/_token-legend.yaml).

## Roundness

```yaml
rounded.none: 0
rounded.lg: 8
rounded.xl: 12
rounded.3xl: 24
rounded.full: 9999
```

## Elevation

```yaml
shadow.lg:
  - { type: "shadow", shadowType: "outer", color: "#000000B3", offset: { x: 0, y: 12 }, blur: 24 }
```
