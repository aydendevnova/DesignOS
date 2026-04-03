# Component Library — Integration Guide

This document covers everything needed to drop the `components/` folder into a new repo with a standard Next.js / React / Tailwind CSS v4 / shadcn setup.

**Required NPM Packages and Their Roles**

- `gsap`: Used for all animation-related tasks such as timelines, ScrollTrigger, and tweens. Utilized in MegaNav, StickyFeatures, HighlightTextOnScroll, ExpandingFeaturePills, and ImagePreviewCursorFollower.

- `class-variance-authority`: Used in `ui/button.tsx` as a variant-based className builder for the shadcn Button.

- `clsx` and `tailwind-merge`: Combined in the `cn` helper located at `lib/utils.ts`. Every component imports `cn` from `@/lib/utils` to merge and conditionally join class names.

- `radix-ui`: Used in `ui/button.tsx` for the `Slot.Root` component, supporting the polymorphic `asChild` pattern.

- `lucide-react`: An icon library referenced by shadcn defaults. While available, it is not yet directly used by these components.

GSAP's `ScrollTrigger` plugin is imported from `gsap/ScrollTrigger` (bundled with the `gsap` package; no separate install).


## Tailwind v4 Configuration

This project uses **Tailwind CSS v4** with the `@tailwindcss/postcss` plugin (no `tailwind.config.ts` file — everything is in `globals.css`).

### Custom Theme Tokens (globals.css `@theme` block)

The components reference these custom theme values. Merge into your `globals.css` `@theme` block:

```css
@theme {
  --font-haffer: "Haffer", Arial, sans-serif;
  --font-haffer-mono: "Haffer Mono", Arial, sans-serif;
  --breakpoint-desktop: 992px;
  --breakpoint-xs: 480px;
}
```

- `--font-haffer` / `--font-haffer-mono` — used by `MegaNav` (`font-haffer`, `font-haffer-mono` classes). If you don't need MegaNav or the Haffer fonts, these can be omitted.
- `--breakpoint-desktop: 992px` — used throughout as `max-desktop:` responsive variant (MegaNav, ExpandingFeaturePills, ImagePreviewCursorFollower). **Required** for all desktop/mobile breakpoint logic.
- `--breakpoint-xs: 480px` — used by MegaNav for small-screen overrides.

### Haffer Font Files

MegaNav uses `font-haffer` and `font-haffer-mono`. If you include the MegaNav component, add the `@font-face` declarations and place (copy) font files to:

```
public/fonts/HafferRegular.ttf
public/fonts/HafferMedium.ttf
public/fonts/HafferMonoRegular.woff2
public/fonts/HafferMonoMedium.woff2
```

The `@font-face` rules (add to your globals.css):

```css
@font-face {
  font-family: "Haffer";
  src: url("/fonts/HafferRegular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Haffer";
  src: url("/fonts/HafferMedium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Haffer Mono";
  src: url("/fonts/HafferMonoRegular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Haffer Mono";
  src: url("/fonts/HafferMonoMedium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
```

## Component Inventory

| Component | File(s) | Key Deps | Directive |
|---|---|---|---|
| **MegaNav** | `mega-nav.tsx`, `mega-nav.css` | gsap, cn, Haffer fonts | `"use client"` |
| **StickyFeatures** | `sticky-features/StickyFeatures.tsx` | gsap, gsap/ScrollTrigger, cn | `"use client"` |
| **HighlightTextOnScroll** | `highlight-text-on-scroll.tsx` | gsap, gsap/ScrollTrigger, cn | `"use client"` |
| **ExpandingFeaturePills** | `expanding-feature-pills/ExpandingFeaturePills.tsx`, `.css` | gsap | `"use client"` |
| **ImagePreviewCursorFollower** | `image-preview-cursor-follower/ImagePreviewCursorFollower.tsx`, `.css` | gsap, cn | `"use client"` |
| **Button** (shadcn) | `ui/button.tsx` | class-variance-authority, radix-ui, cn | — |

All animation components are client components (`"use client"` at top). The Button is a standard shadcn component with no directive.

## Quick Checklist

1. Install deps: `gsap`, `class-variance-authority`, `clsx`, `tailwind-merge`, `radix-ui`
2. Ensure `src/lib/utils.ts` with `cn` helper exists
3. Add `--breakpoint-desktop: 992px` and `--breakpoint-xs: 480px` to your `@theme` block
4. If using MegaNav: add Haffer font files to `public/fonts/` and `@font-face` + `--font-haffer` / `--font-haffer-mono` to globals.css
5. Copy `src/components/` folder as-is
6. Verify `@/*` path alias is configured in tsconfig
