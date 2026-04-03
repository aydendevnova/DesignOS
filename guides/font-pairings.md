# Font Pairings Reference

Canonical font pairings for Design OS. Each pairing: **display** (headlines) + **body** (paragraphs, UI) + **mono** (labels, captions, code). Cross-reference with the selected style guide's mood to apply the matching pairing to the design system YAML.

## Licensing

All fonts are free for commercial use.

- **Google Fonts** (SIL OFL 1.1): Space Grotesk, Space Mono, Inter, Sora, Outfit, Anton, Bebas Neue, Playfair Display, Instrument Serif, DM Serif Display, Newsreader, Fraunces, Bricolage Grotesque, Plus Jakarta Sans, Source Sans 3, Source Code Pro, JetBrains Mono, Fira Code, IBM Plex Mono
- **Google Fonts + `geist` npm** (SIL OFL 1.1): Geist, Geist Mono
- **Fontshare** (ITF FFL — no modification/redistribution): General Sans, Satoshi → self-host WOFF2 via `@font-face`, do not bundle

Use `next/font/google` for Google Fonts. Use the `geist` npm package for Geist/Geist Mono.

## Pairings

Format: `territory → display / body / mono — mood keywords`

- **Technical** → Space Grotesk / Geist / JetBrains Mono — developer, platform, technical docs
- **Technical (alt)** → Space Mono / Inter / Fira Code — CLI, API, terminal, code-first
- **Editorial** → Anton / Geist / IBM Plex Mono — conference, publication, bold statement
- **Editorial (alt)** → Playfair Display / Source Sans 3 / Source Code Pro — magazine, luxury editorial, long-form
- **Cinematic** → Instrument Serif / Inter / Geist Mono — film, art direction, creative studio
- **Cinematic (alt)** → DM Serif Display / Plus Jakarta Sans / IBM Plex Mono — festival, gallery, creative event
- **Friendly** → Sora / General Sans / Space Mono — consumer SaaS, onboarding, approachable
- **Friendly (alt)** → Bricolage Grotesque / Satoshi / Geist Mono — startup, community, creative tools
- **Corporate** → Inter / Inter / JetBrains Mono — dashboard, enterprise, invisible brand
- **Corporate (alt)** → Outfit / Geist / Fira Code — fintech, B2B, professional services
- **Brutalist** → Anton / Geist / Anton — manifesto, confrontational, single-voice
- **Brutalist (alt)** → Bebas Neue / Inter / Space Mono — streetwear, music, counter-cultural
- **Classic** → Newsreader / Geist / IBM Plex Mono — academic, literary, research
- **Classic (alt)** → Fraunces / Satoshi / Geist Mono — hospitality, food, lifestyle, warmth

### Minimum Viable Set

Six pairings that cover all ten Pencil styles. Every other territory is a variant of one of these.

1. **Technical** → Space Grotesk / Geist / JetBrains Mono
2. **Editorial** → Anton / Geist / IBM Plex Mono
3. **Cinematic** → Instrument Serif / Inter / Geist Mono
4. **Friendly** → Bricolage Grotesque / Satoshi / Geist Mono
5. **Corporate** → Inter / Inter / JetBrains Mono
6. **Brutalist** → Bebas Neue / Inter / Space Mono

## Font Constraints

Validate before emitting CSS.

- **Anton** — Single weight (400), no italics. Display-only, minimum 24px. Hierarchy via size/color only. When used as mono/label (Brutalist territory): minimum 11px, UPPERCASE only.
- **Bebas Neue** — Single weight (400), all-caps only. Cannot render mixed-case.
- **Instrument Serif** — Single weight (400) + italic only. Display-only at large scale.
- **DM Serif Display** — Single weight (400) + italic only. Display-only at large scale.
- **Space Mono** — 2 weights only (400, 700). Use size/case variation for hierarchy.
- **General Sans** — Closed apertures reduce legibility below ~12px. Use ≥14px for body, or substitute Inter/Geist for dense text.

## Font Weights

Format: `font — weights, variable (yes/no), italics (yes/no), extra axes`

- **Space Grotesk** — 300–700, variable, no italics
- **Space Mono** — 400 + 700 only, not variable, italics
- **Geist** — 100–900, variable, no italics
- **Geist Mono** — 100–900, variable, no italics
- **Inter** — 100–900, variable, italics, optical size axis
- **JetBrains Mono** — 100–800, variable, italics
- **Fira Code** — 300–700, variable, no italics
- **IBM Plex Mono** — 100–700, not variable, italics
- **Anton** — 400 only, not variable, no italics
- **Bebas Neue** — 400 only, not variable, no italics
- **Playfair Display** — 400–900, variable, italics
- **Source Sans 3** — 200–900, variable, italics
- **Source Code Pro** — 200–900, variable, italics
- **Instrument Serif** — 400 only, not variable, italics
- **DM Serif Display** — 400 only, not variable, italics
- **Plus Jakarta Sans** — 200–800, variable, italics
- **Sora** — 100–800, variable, no italics
- **General Sans** — 200–900, variable, italics
- **Satoshi** — 300–900, variable, italics
- **Bricolage Grotesque** — 200–800, variable, no italics, opsz + wdth axes
- **Outfit** — 100–900, variable, no italics
- **Newsreader** — 200–800, variable, italics, opsz axis
- **Fraunces** — 100–900, variable, italics, opsz + SOFT + WONK axes

## Pairing Notes

**Technical** — Space Grotesk descends from Space Mono (monospace DNA signals "developer" at headline scale). Geist is neutral body. JetBrains Mono is the industry-standard code font. Default for anything dev-facing.

**Technical (alt)** — Monospace display → proportional body is a bold contrast signaling "code territory." Space Mono's 2-weight limit means hierarchy must come from size/case. Best for CLI tools, API docs, developer platforms.

**Editorial** — Anton's condensed weight creates visual authority (conference stages, mastheads). IBM Plex Mono reads as "publication" not "code editor." Single-weight display is acceptable because editorial uses display text at one scale.

**Editorial (alt)** — Strongest internal cohesion: Source Sans 3 and Source Code Pro share a designer and design DNA. Playfair adds high-contrast serif authority. Full weight range across all three. Best for magazines, luxury editorial, long-form.

**Cinematic** — Instrument Serif evokes film credits on dark backgrounds. Single-weight constraint is acceptable for cinematic contexts where display text appears sparingly. All three fonts share a contemporary clean-line aesthetic.

**Cinematic (alt)** — DM Serif Display is warmer than Instrument Serif. Plus Jakarta Sans matches that warmth. Better for festivals, galleries, creative events with broader audiences.

**Friendly** — General Sans legibility drops below 12px (see constraints). For dense body text, substitute Inter or Geist. At 14px+ it performs well.

**Friendly (alt)** — Bricolage Grotesque has the most expressive flexibility of any display font here (three variable axes including width). Most design range. Suited to startups and creative tools.

**Corporate** — Single-family pairing (Inter for both display and body). Hierarchy via weight, size, and optical size axis only. Intentionally invisible. Deploy for dashboards, enterprise tools, internal platforms.

**Corporate (alt)** — Outfit fills the gap between "invisible like Inter" and "has a brand." Fira Code's ligatures add practical value in fintech/B2B contexts with code notation.

**Brutalist** — Anton-on-Anton (display + labels) is the most extreme pairing. Single-voice system. Enforce minimum 11px uppercase for label usage. Deploy only when the brief calls for confrontation.

**Brutalist (alt)** — Bebas Neue forces all-caps headings (urgent, confrontational). Space Mono adds retro counter-cultural texture. Less extreme than Anton-on-Anton.

**Classic** — Newsreader's newspaper heritage provides academic gravitas. Optical size axis can serve both display and pull-quote roles. IBM Plex Mono adds institutional credibility.

**Classic (alt)** — Fraunces is the most typographically flexible font in this reference (SOFT axis: crisp→pillowy, WONK axis: formal→playful). Suited to hospitality, food, lifestyle where warmth must be calibrated.

## Integration

### Next.js Font Loading

```tsx
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })
const body = Inter({ subsets: ["latin"], variable: "--font-body" })
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
```

For Fontshare fonts (General Sans, Satoshi): download WOFF2 from Fontshare, place in `public/fonts/`, declare via `@font-face` in `globals.css`.

### Tailwind v4 Registration

```css
@theme {
  --font-display: var(--font-display), ui-sans-serif, system-ui, sans-serif;
  --font-body: var(--font-body), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-mono), ui-monospace, monospace;
}
```

### Design System YAML Output

```yaml
typography:
  territory: technical
  display:
    family: "Space Grotesk"
    source: google
    weights: [300, 400, 500, 600, 700]
    variable: true
  body:
    family: "Geist"
    source: google
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    variable: true
  mono:
    family: "JetBrains Mono"
    source: google
    weights: [100, 200, 300, 400, 500, 600, 700, 800]
    variable: true
```

## Pencil Style → Territory Mapping

- **Developer / Technical** → Technical (fallback: Corporate)
- **Editorial / Publication** → Editorial (fallback: Classic)
- **Cinematic / Art** → Cinematic (fallback: Editorial)
- **Friendly / Consumer** → Friendly (fallback: Corporate alt)
- **Enterprise / Dashboard** → Corporate (fallback: Technical)
- **Brutalist / Statement** → Brutalist (fallback: Editorial)
- **Classic / Academic** → Classic (fallback: Editorial alt)
- **Lifestyle / Hospitality** → Classic alt (fallback: Friendly alt)
- **Creative / Startup** → Friendly alt (fallback: Cinematic alt)
- **Streetwear / Music** → Brutalist alt (fallback: Brutalist)
