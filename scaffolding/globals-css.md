# globals.css Generation

This document defines how to translate a Design OS YAML design system into the `globals.css` file.

## Process

1. Read the active design system YAML.
2. Convert all hex color values to HSL channels.
3. Generate `:root` (light mode) and `.dark` CSS variable blocks.
4. Set font family variables.
5. Set the radius variable.

## Template

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors — light mode */
    --background: {hsl_channels(palette.light.background)};
    --foreground: {hsl_channels(palette.light.foreground)};
    --card: {hsl_channels(palette.light.card)};
    --card-foreground: {hsl_channels(palette.light.card-foreground)};
    --popover: {hsl_channels(palette.light.card)};
    --popover-foreground: {hsl_channels(palette.light.card-foreground)};
    --primary: {hsl_channels(palette.light.primary)};
    --primary-foreground: {hsl_channels(palette.light.primary-foreground)};
    --secondary: {hsl_channels(palette.light.secondary)};
    --secondary-foreground: {hsl_channels(palette.light.secondary-foreground)};
    --muted: {hsl_channels(palette.light.muted)};
    --muted-foreground: {hsl_channels(palette.light.muted-foreground)};
    --accent: {hsl_channels(palette.light.accent)};
    --accent-foreground: {hsl_channels(palette.light.accent-foreground)};
    --destructive: {hsl_channels(palette.light.destructive)};
    --destructive-foreground: {hsl_channels(palette.light.destructive-foreground)};
    --border: {hsl_channels(palette.light.border)};
    --input: {hsl_channels(palette.light.input)};
    --ring: {hsl_channels(palette.light.ring)};

    /* Radius — from YAML radius.md value */
    --radius: {radius.md}px;

    /* Typography */
    --font-heading: {fonts.heading.family};
    --font-body: {fonts.body.family};
    --font-mono: {fonts.mono.family};
  }

  .dark {
    /* Colors — dark mode */
    --background: {hsl_channels(palette.dark.background)};
    --foreground: {hsl_channels(palette.dark.foreground)};
    --card: {hsl_channels(palette.dark.card)};
    --card-foreground: {hsl_channels(palette.dark.card-foreground)};
    --popover: {hsl_channels(palette.dark.card)};
    --popover-foreground: {hsl_channels(palette.dark.card-foreground)};
    --primary: {hsl_channels(palette.dark.primary)};
    --primary-foreground: {hsl_channels(palette.dark.primary-foreground)};
    --secondary: {hsl_channels(palette.dark.secondary)};
    --secondary-foreground: {hsl_channels(palette.dark.secondary-foreground)};
    --muted: {hsl_channels(palette.dark.muted)};
    --muted-foreground: {hsl_channels(palette.dark.muted-foreground)};
    --accent: {hsl_channels(palette.dark.accent)};
    --accent-foreground: {hsl_channels(palette.dark.accent-foreground)};
    --destructive: {hsl_channels(palette.dark.destructive)};
    --destructive-foreground: {hsl_channels(palette.dark.destructive-foreground)};
    --border: {hsl_channels(palette.dark.border)};
    --input: {hsl_channels(palette.dark.input)};
    --ring: {hsl_channels(palette.dark.ring)};
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
  }
  h1, h2, h3 {
    font-family: var(--font-heading);
  }
  code, pre {
    font-family: var(--font-mono);
  }
}
```

## Sidebar Variables

If the design system YAML includes sidebar-specific tokens (Halo does), add them to both `:root` and `.dark`:

```css
/* Inside :root */
--sidebar-background: {hsl_channels(palette.light.sidebar)};
--sidebar-foreground: {hsl_channels(palette.light.sidebar-foreground)};
--sidebar-primary: {hsl_channels(palette.light.primary)};
--sidebar-primary-foreground: {hsl_channels(palette.light.primary-foreground)};
--sidebar-accent: {hsl_channels(palette.light.sidebar-accent)};
--sidebar-accent-foreground: {hsl_channels(palette.light.sidebar-accent-foreground)};
--sidebar-border: {hsl_channels(palette.light.border)};
--sidebar-ring: {hsl_channels(palette.light.ring)};
```

## Semantic Color Variables

If the design system provides semantic colors, add them:

```css
/* Inside :root */
--success: {hsl_channels(semantic-colors.success)};
--success-foreground: {hsl_channels(semantic-colors.success-foreground)};
--warning: {hsl_channels(semantic-colors.warning)};
--warning-foreground: {hsl_channels(semantic-colors.warning-foreground)};

/* Nitro also provides background and border variants for each */
--success-background: {hsl_channels(semantic-colors.success-background)};
--success-border: {hsl_channels(semantic-colors.success-border)};
```

## Font Loading in layout.tsx

Fonts specified in the YAML must be loaded in the root layout using `next/font`:

```tsx
// For Google Fonts (Halo, Ember, Nitro)
import { Inter } from "next/font/google"
// or
import { JetBrains_Mono, Geist } from "next/font/google"

const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
})

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
})

// In the <html> tag:
<html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
```

For system fonts (shadcn-neutral), skip `next/font` and set the CSS variables directly to the system font stack.

## Osmo Component Theme Tokens

If the project uses any Osmo Supply component, add these custom breakpoints and (optionally) font tokens to the `@theme` block. For Tailwind CSS v4 projects (no `tailwind.config.ts`), this goes in `globals.css`:

```css
@theme {
  --breakpoint-desktop: 992px;
  --breakpoint-xs: 480px;
}
```

The `--breakpoint-desktop` token is required by all Osmo components for responsive behavior (`max-desktop:` variant). The `--breakpoint-xs` token is used by MegaNav for small-screen overrides.

If using MegaNav with its default Haffer fonts (instead of overriding with the design system's fonts), also add:

```css
@theme {
  --font-haffer: "Haffer", Arial, sans-serif;
  --font-haffer-mono: "Haffer Mono", Arial, sans-serif;
}
```

And add `@font-face` declarations for Haffer (see `osmo-component-reference/Integration.md`). In most cases, replace Haffer with the active design system's heading and mono fonts instead.

## HSL Conversion Reference

When converting hex to HSL channels for CSS variables:
- Strip the `#` prefix
- Convert to RGB, then to HSL
- Output as `H S% L%` (space-separated, no commas, no `hsl()` wrapper)
- The `hsl()` is added by the Tailwind config when it references `hsl(var(--color))`
