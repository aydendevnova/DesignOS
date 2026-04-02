# Tailwind Config Generation

This document defines how to translate a Design OS YAML design system into a `tailwind.config.ts` file for a Next.js project.

## Process

1. Read the active design system YAML.
2. Extract color tokens, radius scale, shadow scale, and font families.
3. Generate the tailwind config that extends the default theme with these tokens.

## Template

Given a design system YAML, generate the following `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // All colors reference CSS variables — NEVER hardcode hex here.
        // The actual values live in globals.css and switch with theme.
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Include sidebar tokens if the design system provides them
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      // Radius values from YAML radius scale
      borderRadius: {
        // Map from YAML: radius.lg → --radius, then derive others
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Font families from YAML
      fontFamily: {
        // These reference CSS variables set in globals.css
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

## Key Rules

1. **Colors are CSS variable references, not hex values.** The Tailwind config points to CSS variables. The CSS variables hold the actual values and switch with light/dark mode.

2. **Use HSL format for shadcn compatibility.** shadcn/ui expects colors in HSL format without the `hsl()` wrapper in the CSS variable. The Tailwind config adds `hsl()`.

3. **Radius uses a single `--radius` variable.** shadcn derives `md` and `sm` from it via `calc()`.

4. **Font families use CSS variables** set in `globals.css` and loaded via `next/font` in `layout.tsx`.

## Color Conversion

Design system YAML stores hex values. For the CSS variables, convert hex to HSL channels:

- `#5749F4` → `243 87% 62%` (just the H S L values, no commas, no hsl() wrapper)
- `#FFFFFF` → `0 0% 100%`
- `#0a0a0a` → `0 0% 4%`

The globals.css stores these as: `--primary: 243 87% 62%;`
The Tailwind config references them as: `hsl(var(--primary))`

## Semantic Color Extension

If the design system includes semantic colors (success, warning, info, error), add them to the Tailwind config:

```typescript
// Inside theme.extend.colors
success: {
  DEFAULT: "hsl(var(--success))",
  foreground: "hsl(var(--success-foreground))",
  // Include background/border if the YAML provides them (Nitro does)
},
warning: {
  DEFAULT: "hsl(var(--warning))",
  foreground: "hsl(var(--warning-foreground))",
},
```
