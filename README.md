# Design OS

Design OS is a frontend generation system that produces React + Tailwind + shadcn/ui code with a consistent design identity. It provides design system tokens, visual style guides, compositional rules, scaffolding templates, and color palettes that AI agents use to generate Next.js App Router + TypeScript projects.

## Structure

```
design-systems/              YAML token definitions (Halo, Ember, Nitro, shadcn-neutral)
styles/                      Visual style guides — composition, color, typography, shape
style-palettes/              Color palette YAMLs with semantic token mappings
guides/                      Generation guides per output type (landing page, webapp, mobile, slides, table)
rules/                       Anti-slop, general, and task-specific generation constraints
scaffolding/                 globals.css, tailwind config, and image handling templates
handoff/                     Validation report format
osmo-component-reference/    Optional GSAP animation components (Osmo Supply library)
```

## Design Systems

| System | Description |
|---|---|
| **Halo** | Light, airy, soft UI identity |
| **Ember** | Warm, energetic, bold UI identity |
| **Nitro** | Sharp, high-contrast, technical identity |
| **shadcn-neutral** | Baseline shadcn/ui defaults |

## Style Palettes

Carbon Frost, Deep Space Neon, Fern Journal, Forest Sage, Heritage Warmth, Parchment Gold, Tangerine Orbit, Terminal Green, Warm Concrete, Warm Linen.

## Visual Styles

Aerial Gravitas, Artisan Editorial, Cinematic Alternating, Editorial Scientific, Illustrated Warm, Inline Friendly, Monumental Editorial, Product Demo, Soft Bento, Spatial Plus.

## Output Types

- **Landing Page**: marketing page generation
- **Web App**: functional product UI (CRM, analytics, editor, admin, etc.)
- **Mobile App**: responsive mobile-first interfaces
- **Slides**: presentation deck generation
- **Table**: data table layouts

## Osmo Supply Components

An optional set of GSAP-powered animation components from the Osmo Supply library. These are supplementary to the core shadcn/ui primitives and should be used sparingly — most pages need zero to two of these. See `guides/osmo-components.md` for evaluation criteria and integration rules.

| Component | Purpose |
|---|---|
| **MegaNav** | Animated navigation with mega-menu dropdowns |
| **StickyFeatures** | Scroll-pinned feature showcase with clip-path transitions |
| **HighlightTextOnScroll** | Per-character text highlight driven by scroll position |
| **ExpandingFeaturePills** | Pills that expand on interaction to reveal detail |
| **ImagePreviewCursorFollower** | Image previews that follow cursor on list item hover |

## Usage

Design OS is consumed as context by AI agents. A generation task combines a **design system** (tokens), a **style palette** (colors), a **visual style** (composition rules), and a **guide** (output-type instructions). The agent scaffolds the project using templates from `scaffolding/`, applies constraints from `rules/`, and validates output against the `handoff/` checklist. The agent may optionally integrate Osmo Supply components where they serve the content — see `guides/osmo-components.md` for when and how.
