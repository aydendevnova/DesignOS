# General Design Rules

These rules apply to ALL generation tasks regardless of page type.

## Design System Adherence

The active design system YAML is the source of truth. Every visual decision must trace back to it.

### Colors
- NEVER use raw hex values in components. Always reference CSS variables defined by the design system.
- `bg-[var(--primary)]` is correct. `bg-[#5749F4]` is a violation.
- The only exception is transparent overlays and very specific one-off values that do not exist in the design system. These must be commented with a reason.

### Fonts
- Use the fonts specified in the design system YAML. Do not substitute.
- If the design system specifies a Google Font, it must be loaded via `next/font/google` in the layout, not via `<link>` tags.
- Apply the heading font to all h1-h3 elements. Apply the body font to all body text. Apply the mono font to code and data elements.

### Radius
- Read the design system's radius scale. Different components get different radius values:
  - Buttons: `radius.sm` or `radius.md`
  - Cards: `radius.md` or `radius.lg`
  - Inputs: `radius.sm` or `radius.md`
  - Avatars: `radius.pill`
  - Tooltips/Dropdowns: `radius.sm`
  - Modals/Dialogs: `radius.lg`
- The point: variation within the scale. Not one value everywhere.

### Shadows
- Use the design system's shadow scale.
- Not every card needs a shadow. A card on a background with sufficient tonal contrast needs no shadow.
- Shadows should increase with elevation: dropdown > card > subtle divider.

## Accessibility

Non-negotiable requirements:

- All text/background pairs must meet WCAG AA contrast ratio (4.5:1 for body, 3:1 for large text).
- All interactive elements must have visible focus states.
- All images must have alt text. Decorative images: `alt=""`. Content images: descriptive alt text.
- Form inputs must have associated labels (via Input Group components or explicit `<label>` + `htmlFor`).
- Touch targets: minimum 44x44px on mobile.
- No information conveyed by color alone. Use text, icons, or patterns as secondary indicators.

## Responsive Design

- Mobile-first approach. Base styles are mobile, `md:` and `lg:` breakpoints add desktop enhancements.
- Breakpoints:
  - Default: 0-767px (mobile)
  - `md`: 768px+ (tablet)
  - `lg`: 1024px+ (desktop)
  - `xl`: 1280px+ (wide desktop)
- Content max-width on landing pages: 1280px (`max-w-7xl`). Do not let text lines exceed ~75 characters.
- Sidebar layouts collapse to a mobile nav (hamburger or bottom tab bar) on mobile.

## Component Quality

### shadcn/ui Usage
- Use shadcn/ui components for all standard UI elements. Do not recreate what shadcn provides.
- Import from `@/components/ui/` per the standard shadcn structure.
- If a shadcn component needs customization beyond variant props, wrap it in a project-specific component rather than modifying the shadcn source.

### Component Structure
- One component per file. Named exports.
- Props via TypeScript interfaces.
- Composition over configuration: prefer `children` and slots over deeply nested prop objects.
- Client components (`"use client"`) only when necessary (event handlers, hooks, browser APIs). Server components by default.

### File Organization
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, CSS variables
│   ├── page.tsx            # Home page
│   └── (routes)/
├── components/
│   ├── ui/                 # shadcn components (DO NOT MODIFY)
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   └── shared/             # Project-specific shared components
├── lib/
│   └── utils.ts            # cn() and utilities
└── styles/
    └── globals.css          # CSS variables from design system
```

## Images

All images follow the container-first approach documented in `design-os/scaffolding/image-handling.md`.

- Every image must be wrapped in a `PlaceholderImage` component with an explicit `aspect` ratio.
- The `intent` prop must describe what image should fill this space — specific enough that two designers would source the same kind of image.
- Image containers use the design system's radius scale. Not all images get the same radius.
- Product screenshots get `border` + `shadow` to feel like real UI artifacts. Background images get neither.
- No image should determine its own layout dimensions. The container is sized explicitly; the image fills it.

## Code Quality

- All components are TypeScript. No `any` types.
- Use `cn()` from `@/lib/utils` for conditional class merging.
- Prefer Tailwind utility classes over custom CSS. Custom CSS only for animations or complex selectors that Tailwind cannot express.
- No inline styles. Exception: dynamic values from data (e.g., `style={{ width: `${percentage}%` }}`).
- Images via `next/image` with explicit width/height or fill + sizes.

## Osmo Supply Component Integration

When using Osmo Supply components (`osmo-component-reference/`), these rules are mandatory:

### Token Override Rule
Every Osmo component ships with hardcoded colors, fonts, and radii from Osmo's brand. Before using any component, replace ALL hardcoded values with the active design system's CSS variables. No `#6840ff`, no `#272a2a`, no `font-haffer` in shipped code — only `bg-primary`, `text-foreground`, `font-heading`, etc. from `globals.css`.

### Animation Consistency Rule
GSAP animations in Osmo components must use the same easing curve and duration as the rest of the page. If the page uses `600ms ease-out` CSS transitions, the GSAP equivalent is `duration: 0.6, ease: "power2.out"`. Do not mix bouncy easings (`back.out(2)`) with smooth/confident page animations. Override the component's defaults.

### Restraint Rule
Most pages need zero Osmo components. Add one only if it directly improves a specific section's UX. Never add more than two to a single page. Run the evaluation criteria in `guides/osmo-components.md` before each addition. A component that merely decorates without serving the content is a build failure.

### Dependency Rule
All Osmo components require `gsap` and the `--breakpoint-desktop: 992px` theme token. If the page does not already use GSAP, adding a component means adding ~60KB gzipped. Justify the weight against the visual payoff.
