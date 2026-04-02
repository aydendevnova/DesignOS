# Anti-Slop Rules

AI models converge on a statistical average of "modern tech website" without strong constraints. These rules override that tendency. The active design system YAML and the style guide for the chosen style are the source of truth for every visual decision.

---

## Typography

Use the exact font families, weights, and pairings from the design system YAML. Treat line-height, letter-spacing, and measure as first-class decisions, not defaults. Follow the scale contrast and typography sections in the active style guide.

### Minimum Size Scale

| Role | Mobile | Desktop |
|------|--------|---------|
| Hero headline | 72px (`text-7xl`) | 120px (`text-[120px]`) |
| Section statement heading | 48px (`text-5xl`) | 64px (`text-6xl`) |
| Section labels (mono/caps) | 11–12px, uppercase, `tracking-[0.2em]` | same |
| Body | 16px (`text-base`) | 18px (`text-lg`) |

**Dead zone: 24–44px.** If a heading lands in this range it is neither dominant nor subordinate — it reads as a blog post. Push it up to section-heading scale or down to body. The design operates at two speeds only: large and small.

## Color

Reference CSS variables (`bg-primary`, `text-muted-foreground`, etc.) for every color value — no raw hex in JSX. Deploy accent color sparingly: one colored focal point per viewport of content. Use tonal surface variation (`bg-background` vs `bg-muted` vs `bg-card`) to separate sections rather than colored bands or gradients. Follow the color rules section in the active style guide exactly.

## Layout

Follow the composition and spatial density sections in the active style guide. Vary alignment, width, density, and internal structure across sections. Alternate between dense and spacious sections to create scroll rhythm. Use asymmetry where the style guide calls for it.

### Banned Layout Patterns

These are the layouts AI models default to. Do not use them:

- **2x2 equal grid of feature cards.** The most common AI-generated layout. If you have four items, use a 1+3 asymmetric split, a staggered list, or a full-width alternating sequence.
- **3-column equal feature card grid.** If three items, vary the presentation: one large + two small, a list, a staggered grid, an asymmetric layout.
- **Centered-headline + subtitle + single-CTA hero.** The single most overused AI hero pattern. Use the allowed hero structures from the landing page guide instead.
- **"Trusted by" logo ticker as the first element after the hero.**
- **Every section center-aligned with uniform horizontal padding.** At least one section must break the centered full-width pattern.
- **Five identical stacked centered sections.** Vary alignment, width, density, and structure across every section.
- **Pricing table** unless the page's explicit purpose requires one.

## Imagery

Use the `PlaceholderImage` component from `scaffolding/image-handling.md` with explicit aspect ratio and descriptive intent for every image. Give product screenshots a border and shadow so they read as real artifacts. Use the decorative imagery type specified by the active style guide — match the imagery description exactly. Size images via their container, not intrinsic dimensions.

## Copy

Every headline must be specific enough that it could only describe the product being built. If a headline could be swapped onto a competitor's page unchanged, rewrite it. When product context is insufficient, use bracketed placeholders (`[Your specific metric]`) rather than generic marketing language.

## Uniformity

Apply the design system's radius scale deliberately — different stops for different component types (buttons vs cards vs avatars). Vary section padding to create rhythm (at least two distinct values). Vary shadow values between elevation levels. The style guide's shape and separation sections define how these should be distributed.

---

## Enforcement Checklist

After generation, verify each item as pass/fail:

```
TYPOGRAPHY
[ ] Font families match design system YAML exactly
[ ] Hero headline >= 72px mobile / 120px desktop
[ ] Section headings >= 48px mobile / 64px desktop
[ ] No heading in the 24–44px dead zone
[ ] Section labels are 11–12px, uppercase, wide tracking
[ ] Line-height and letter-spacing are intentional

COLOR
[ ] All colors reference CSS variables, not raw hex
[ ] Accent color used sparingly — one focal point per viewport
[ ] Color rules match the active style guide
[ ] Sections alternate between 2+ surface treatments
[ ] At least one section uses the opposite mode (light on dark page, dark on light page)
[ ] FAIL if 3+ adjacent sections share the same background color

LAYOUT
[ ] No 2x2 equal grid of feature cards
[ ] No 3-column equal card grid
[ ] Hero is not the centered-headline + subtitle + CTA pattern
[ ] No logo ticker immediately after the hero
[ ] Sections vary in alignment, width, and structure
[ ] At least one section breaks the centered full-width pattern
[ ] Composition follows the active style guide

IMAGERY
[ ] Page contains at minimum: 1 hero image, 1 full-bleed photo break, credibility logos
[ ] All images use PlaceholderImage with aspect ratio and intent
[ ] Hero image is minimum 400px tall; section break images minimum 300px
[ ] Product screenshots have border + shadow
[ ] Decorative imagery matches style guide specification
[ ] Image sizing is container-first
[ ] FAIL if page has zero image placeholders

COPY
[ ] Every headline is product-specific
[ ] No placeholder text outside bracketed prompts

UNIFORMITY
[ ] Border-radius varies between component types
[ ] Section padding varies (2+ distinct values)
[ ] Shadow values vary between elevation levels
```
