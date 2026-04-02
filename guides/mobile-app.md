# Mobile App Screen Composition

Design mobile app screens that feel modern, premium, fast, and easy to scan. Prioritize clarity, hierarchy, touch ergonomics, and platform conventions.

---

## Primary Rule

Every screen is composed as a vertical stack of:

1. Status Bar (OS-controlled)
2. App Content (your layout)
3. Bottom Bar (optional: Tab Bar / Bottom Nav)

---

## 1. Status Bar (OS-Controlled)

- Height: **62 px**
- Content vertically centered within the bar
- Time label uses **"SF Pro"** as primary font; fall back to **"Inter"**
- Never place critical UI behind the status bar
- Always respect safe areas / status bar insets
- Avoid custom fake status bars — treat as untouchable OS chrome

---

## 2. App Content (Your Layout)

### Wrapper & Spacing Model

All app content elements must sit inside **one wrapper container** (a single vertical stack). The wrapper provides:

- **Consistent left and right padding** (16–20 px) applied once at the wrapper level
- **Gap-based vertical spacing** between sibling sections (24–32 px between major sections, 12–16 px between tightly related items)

### Content Stacking Order

1. Top context (optional): Title / navigation header / search / filters
2. Primary content: the "job to be done" for the screen
3. Supporting content: secondary modules, help text, empty states
4. Floating actions (optional): FAB or sticky CTA

### Rules

- One primary intent per screen. Everything else is subordinate.
- Strong hierarchy: first 1–2 elements explain "where am I" + "what can I do here"
- **Typography consistency:** Same font size for all "Title" text across every screen
- Design for one-handed use: primary actions in lower half
- Scrolling: single vertical scroll container (avoid nested scrolls)
- Touch targets: comfortable hit areas for tappable elements
- States: always consider loading, empty, error, and success states

### Do / Don't

- DO keep key CTAs visible without scrolling when feasible
- DO prefer simple stacks over complex grids on mobile
- DO rely on the wrapper's `gap` for all vertical spacing
- DO use bottom padding on the content container (same value as the container's `gap`)
- DON'T cram multiple competing sections above the fold
- DON'T add per-section horizontal padding — let the wrapper handle it
- DON'T use spacer elements for bottom space — use bottom padding instead

---

## 3. Bottom Bar — Pill-Style Tab Bar

### When to Use

Most multi-section apps benefit from a Tab Bar. Use when users switch between 3–5 top-level destinations frequently.

### Layout & Sizing

- **Tab Bar Container**: full screen width, centered content. Padding: 12 px top, 21 px right/bottom/left (home-indicator safe area)
- **Pill** (menu items wrapper): fixed height 62 px, `fill_container` width. Corner radius: 36 px. Border: 1 px solid. Inner padding: 4 px
- **Tab Items**: horizontal row, each `fill_container` width/height. Corner radius: 26 px. Layout: vertical, gap 4 px, centered
- **Icon**: 18 px. **Label**: 10 px, weight 500–600, uppercase, ~0.5 px letter-spacing

### Active vs. Inactive States

- **Active tab**: solid fill (accent color), icon + label in contrasting color. Must be immediately obvious.
- **Inactive tabs**: transparent background, icon + label in muted color.

### Rules

- 3–5 tabs max — top-level destinations only
- Labels always uppercase
- Respect safe-area bottom inset
- Tab switching preserves each tab's navigation stack/state
- App content must never be obscured by the Tab Bar

---

## Screen Blueprint (Mandatory)

For every screen, describe in this order:

- **Status Bar**: standard / edge-to-edge with safe padding
- **App Content**:
  - Header area
  - Primary content area
  - Secondary content area
  - Primary action placement
  - Scroll behavior
- **Bottom Bar**: None / Pill Tab Bar (list tabs) / other

---

## Default Recommendation

- Standard status bar + safe area
- Simple header (title + optional right action)
- Content in a single vertical scroll
- Pill-style Tab Bar with 4–5 top-level destinations for main screens
