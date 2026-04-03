# Osmo Supply Components — Usage Guide

The `osmo-component-reference/` directory contains five GSAP-powered animation components from the Osmo Supply library. These are supplementary to the core shadcn/ui primitives. They add scroll-driven animations, cursor interactions, and animated navigation that CSS transitions alone cannot achieve.

**These are seasoning, not the meal.** Most pages need zero to two of these components. A page built entirely from shadcn/ui primitives with CSS transitions is the correct default. Reach for an Osmo component only when it directly improves a specific section's UX — never to decorate.

---

## Evaluation Criteria

Before adding any Osmo component, answer all four questions. If any answer is no, do not use it.

1. **Does it serve the content or just decorate it?** The component must make the content more understandable, navigable, or engaging. Visual novelty alone is not a reason.
2. **Does it match the existing animation feel?** Design OS pages use smooth, confident motion — `600ms ease-out` or equivalent. Components that ship with bouncy, playful, or spring-based defaults must be overridden to match. If the page uses Framer Motion or CSS transitions at a specific easing, GSAP timelines must use the same curve and duration.
3. **Will it work on mobile or does it break the touch experience?** Cursor-following effects are desktop-only by definition. Scroll-pinned layouts must degrade gracefully to stacked content on mobile. If the component has no mobile fallback, it cannot be used on a page that must work on mobile.
4. **Does it add loading weight worth the visual payoff?** All five components require `gsap` as a dependency. If the page does not already use GSAP, adding a component means adding ~60KB (gzipped) of JavaScript. One component that transforms a key section may justify that weight. A subtle text fade does not.

---

## Integration Requirements

When you add any Osmo component, you MUST:

1. **Override default styles to match design tokens.** Replace hardcoded colors (`#272a2a`, `#f2f2f2`, `text-black/50`, `bg-white/10`) with CSS variable references from `globals.css`. Replace hardcoded font families (`font-haffer`) with the active design system's fonts. Replace hardcoded border-radius values with the design system's radius scale — if the active style uses `radius: 0` (Monumental Editorial), the component must have `rounded-none` or `rounded-[0]`.

2. **Ensure GSAP animations match existing easing and duration.** If the page uses `600ms ease-out` CSS transitions or Framer Motion `transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}`, the GSAP counterpart is `duration: 0.6, ease: "power2.out"`. Do not mix `back.out(2)` (bouncy) with a page that uses linear or ease-out curves. The reference components ship with various easings — override them to match the page.

3. **Verify mobile behavior.** Every component must render correctly at 375px. Desktop-only interactions (cursor following) must be hidden on mobile with the `max-desktop:hidden` breakpoint. Scroll-pinned sections must unpin and stack on mobile.

4. **Install dependencies.** All components require `gsap`. Add `--breakpoint-desktop: 992px` and `--breakpoint-xs: 480px` to the `@theme` block in `globals.css`. Ensure `src/lib/utils.ts` exports the `cn` helper.

---

## Component Reference

### StickyFeatures

**What it does.** A scroll-pinned section where the viewport pins in place while the user scrolls through a set of features. Each feature transitions via a clip-path animation on an image panel, with text fading in/out alongside. A progress bar tracks scroll position.

**When to use.** Feature showcase sections where 3–6 features each have a distinct visual (screenshot, illustration, photo). The scroll-pinning creates a cinematic reveal that CSS transitions cannot replicate. Works well as a mid-page section between text-heavy content.

**When to skip.** If you have fewer than 3 features, or the features don't have strong visuals, use a simpler alternating layout. If the page is short (under 5 sections), scroll-pinning can feel disorienting.

**Props.**

```typescript
interface Feature {
  tag: string        // category label (e.g. "Analytics")
  title: string      // feature heading
  description: string
  linkText?: string  // optional CTA text
  image: string      // image URL
}

interface StickyFeaturesProps {
  features: Feature[]
}
```

**Style overrides required.**
- Replace `bg-white/15` (progress bar track) and `bg-white` (progress bar fill) with design token colors
- Replace `text-white/70` (description) with `text-muted-foreground` or equivalent
- Replace `bg-white/10` (tag badge) with a token-based surface
- Replace `rounded-[0.75em]` with the design system's radius for cards
- The GSAP ease `"power4.inOut"` and `"power4.out"` are aggressive — adjust to match page easing

**Mobile behavior.** Unpins on mobile (`max-md:h-auto`), images stack above text. No horizontal scroll. Works on touch.

**Files.** `sticky-features/StickyFeatures.tsx`

---

### HighlightTextOnScroll

**What it does.** Splits a text string into individual characters and fades them from low opacity to full opacity as the user scrolls through the element's viewport range. Creates a "reading along" effect.

**When to use.** A single large statement or manifesto line that benefits from scroll-driven emphasis. Use it for mission statements, brand promises, or section transition text. The text must be short enough to read in one scroll pass — one to three sentences maximum.

**When to skip.** If the text is long (more than ~150 characters), the per-character stagger becomes tedious. If the page already has scroll-triggered animations on adjacent sections, this adds cognitive load. If the style guide calls for static, confident typography (Monumental Editorial: "type is the only decoration"), a static heading is more appropriate.

**Props.**

```typescript
interface HighlightTextOnScrollProps {
  children: string          // the text to animate
  className?: string
  scrollStart?: string      // ScrollTrigger start (default "top 80%")
  scrollEnd?: string        // ScrollTrigger end (default "top 20%")
  fadedOpacity?: number     // starting opacity per char (default 0.15)
  staggerAmount?: number    // stagger between chars (default 0.1)
}
```

**Style overrides required.**
- The default renders as an `<h1>` with `text-center text-[clamp(2rem,5vw,4rem)]`. Override `className` with the design system's heading font, size, weight, color, and alignment.
- The `fadedOpacity` default (0.15) works on dark backgrounds. On light backgrounds with dark text, use 0.2–0.3 to keep the faded state visible.

**Mobile behavior.** Works on touch (scroll-driven, not hover). Text reflows naturally. No issues.

**Files.** `highlight-text-on-scroll.tsx`

---

### ImagePreviewCursorFollower

**What it does.** A list of items (case studies, projects, articles) where hovering over a row causes an image preview to follow the cursor. On mobile, the images display inline above each item instead.

**When to use.** Portfolio/case study sections, project lists, or any tabular list where each item has a strong associated image. The cursor-following interaction creates a discovery feel that a static grid cannot. Works best with 4–8 items.

**When to skip.** If the list has fewer than 3 items — use a card layout instead. If the page does not have a tabular/list section, do not invent one to use this component. If the content is better served by a grid with visible thumbnails (e.g. e-commerce products), skip the hidden-until-hover pattern.

**Props.**

```typescript
interface PreviewItem {
  title: string
  location?: string
  year: string
  services: string
  imageSrc: string
  href?: string
}

interface ImagePreviewCursorFollowerProps {
  items: PreviewItem[]
  labelText?: string    // follower badge text (default "View case")
  className?: string
}
```

**Style overrides required.**
- Replace `text-black/50` (column headers) with `text-muted-foreground`
- Replace `border-black/25` (row borders) with `border-border`
- Replace `bg-white` (follower label) with a token-based surface
- Replace `rounded-[0.75em]` with the design system's card radius
- Replace `rounded-[0.25em]` (label badge) with the design system's small radius
- The GSAP ease `"power2.inOut"` at `duration: 0.5` and cursor following at `"power3"` `duration: 0.6` — verify these match the page

**Mobile behavior.** Cursor follower is hidden on mobile (`max-desktop:hidden`). Images render inline above each item in a card-like layout. Fully touch-compatible.

**Files.** `image-preview-cursor-follower/ImagePreviewCursorFollower.tsx`, `image-preview-cursor-follower/image-preview-cursor-follower.css`

---

### MegaNav

**What it does.** A full navigation bar with animated mega-menu dropdown panels, mobile hamburger menu with slide-in panels, keyboard accessibility, and GSAP-driven open/close transitions. Ships with its own data structure for panels, columns, links, and featured cards.

**When to use.** Multi-page sites or complex SaaS products with 3+ navigation sections, each containing multiple categories of links. The mega-menu pattern is justified when the information architecture genuinely requires grouped navigation (products, solutions, resources, company). Appropriate for full marketing sites or large web applications.

**When NOT to use.** Single-page landing pages with 3–5 anchor links. Simple marketing pages. Any page where a basic header with inline links suffices. Adding a mega-nav to a page that doesn't need one adds ~970 lines of JavaScript, requires the Haffer font family, and introduces navigation complexity for no UX gain.

**Props.** The component reads from internal data constants (`NAV_PANELS`, `NAV_LINKS`, `NAV_CTAS`). To use it, modify these constants directly in the component file or refactor to accept props.

**Style overrides required.**
- The component hardcodes Osmo's brand colors (`#6840ff`, `#e4e0f5`, `#201d1d`, `#f2f2f2`) — replace all with design token CSS variables
- Uses `font-haffer` and `font-haffer-mono` — replace with the active design system's fonts
- Uses `rounded-[0.25em]` throughout — replace with the design system's radius scale
- The nav height is set via `--nav-height: 4em` in `mega-nav.css` — adjust as needed
- Requires Haffer font files in `public/fonts/` unless fonts are replaced

**Mobile behavior.** Full mobile menu with hamburger toggle, animated panel slides, back button navigation. Touch-compatible. Tested at 480px and 375px breakpoints.

**Files.** `mega-nav.tsx`, `mega-nav.css`

---

### ExpandingFeaturePills

**What it does.** A set of pill-shaped buttons that expand on click to reveal a title, description, and associated image in a split-panel layout. Uses GSAP for the expand/collapse animation with a close button.

**When to use.** Feature exploration sections where the user should choose which features to learn about, rather than scrolling through all of them. The pill pattern works when you have 3–6 features of roughly equal importance and each has an associated visual.

**When NOT to use.** If no section in the current design uses a pill or chip pattern. If the features are better presented as a scrollable list or grid. If the page already has an interactive feature section (StickyFeatures), do not add a second one. The `back.out(2)` default GSAP ease is bouncy — it conflicts with smooth/confident animation styles unless overridden.

**Props.**

```typescript
interface FeaturePill {
  label: string       // pill button text
  title: string       // expanded title
  description: string // expanded description
  image: string       // image URL for the visual panel
}

interface ExpandingFeaturePillsProps {
  items: FeaturePill[]
  coverImage?: string  // initial cover image before any pill is opened
}
```

**Style overrides required.**
- Replace `text-[#f2f2f2]` and `bg-[#272a2a]` with design token colors
- Replace `border-white/15` with `border-border`
- Replace `bg-white/[0.08]` (pill backgrounds) with token-based surfaces
- Replace `rounded-[1.25em]` (container) and `rounded-[2em]` (pills) with design system radius
- Override the GSAP `ease: "back.out(2)"` with the page's easing — `"power2.out"` for smooth/confident styles
- The component CSS sets `--content-item-expanded: 25em` — adjust for the design's content width

**Mobile behavior.** Pills stack full-width on mobile. Image panel moves above the pill list. Touch-compatible expand/collapse. Responsive breakpoints at 991px and 767px.

**Files.** `expanding-feature-pills/ExpandingFeaturePills.tsx`, `expanding-feature-pills/expanding-feature-pills.css`

---

## Decision Matrix

Use this as a quick reference. "Likely fit" means the component frequently improves the section. "Unlikely fit" means it rarely justifies its weight.

| Component | Landing page | Web app | Multi-page site | Single-page site |
|---|---|---|---|---|
| **StickyFeatures** | Likely fit (feature showcase) | Unlikely fit | Likely fit | Likely fit |
| **HighlightTextOnScroll** | Conditional (brand statement) | Unlikely fit | Conditional | Conditional |
| **ImagePreviewCursorFollower** | Conditional (portfolio/case studies) | Unlikely fit | Likely fit (portfolio) | Conditional |
| **MegaNav** | Unlikely fit (too complex) | Likely fit (complex app) | Likely fit | Unlikely fit |
| **ExpandingFeaturePills** | Unlikely fit (no pill pattern) | Unlikely fit | Conditional | Unlikely fit |

---

## GSAP Easing Reference

Map the page's CSS/Framer Motion easing to GSAP equivalents when overriding component defaults:

| CSS / Framer Motion | GSAP Equivalent |
|---|---|
| `ease-out` / `[0, 0, 0.58, 1]` | `"power1.out"` |
| `cubic-bezier(0.16, 1, 0.3, 1)` | `"power2.out"` |
| `cubic-bezier(0.33, 1, 0.68, 1)` | `"power3.out"` |
| `cubic-bezier(0.76, 0, 0.24, 1)` | `"power2.inOut"` |
| `ease-in-out` / `[0.42, 0, 0.58, 1]` | `"power1.inOut"` |
| `linear` | `"none"` |

The default Design OS animation feel — smooth, confident, 600ms ease-out — maps to `duration: 0.6, ease: "power2.out"` in GSAP.

---

## Setup Checklist

1. Install `gsap` (`npm install gsap`)
2. Ensure `src/lib/utils.ts` exports `cn` (clsx + tailwind-merge)
3. Add to `globals.css` `@theme` block:
   ```css
   --breakpoint-desktop: 992px;
   --breakpoint-xs: 480px;
   ```
4. If using MegaNav: add Haffer font files to `public/fonts/` and `@font-face` declarations (see `osmo-component-reference/Integration.md`)
5. Copy only the component files you need from `osmo-component-reference/components/` into `src/components/`
6. Override all hardcoded colors, fonts, and radii before shipping

See `osmo-component-reference/Integration.md` for the full dependency list and Tailwind v4 configuration details.
