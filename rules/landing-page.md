# Landing Page Guidelines

These rules apply when the generation target is a marketing/conversion page: homepage, product landing page, launch page, or any page whose primary goal is to persuade a visitor to take an action.

## Page Purpose

Before generating a single line of code, state three things explicitly:
1. Who is this page for (specific audience, not "everyone")?
2. What does the product actually do (specific capability, not a category)?
3. What is the single most important action the visitor should take?

If any of these cannot be answered with specificity, stop and ask. Vague inputs produce slop outputs.

## Mandatory Images

Every landing page MUST include at minimum:

1. **One hero image** — a background photo, split-layout photo, or product screenshot. Minimum 400px tall. The hero is not text-only.
2. **One full-bleed photo break** between content sections — a viewport-width image that interrupts the text flow and creates visual rhythm. Minimum 300px tall.
3. **Partner or credibility logos** — grayscale, restrained, placed below the fold (never immediately after the hero).

If real assets do not exist in `public/assets/`, render a `PlaceholderImage` with the `intent` prop describing what goes there. Placeholders are gray boxes with dashed borders and white `[IMAGE: ...]` labels — they are visible, obvious, and not skippable. A page with zero image placeholders is a build failure.

## Hero Section

The hero is the most abused section in AI-generated landing pages. Rules:

- Do NOT use the centered-headline-subtitle-CTA pattern. This is the default layout every model converges on.
- The hero must communicate what the product does within 3 seconds of landing. Not what it enables, not a metaphor — the actual thing.
- Allowed hero structures (pick ONE, do not default to the first):
  - **Split hero**: Text on one side, product screenshot or visual on the other. Asymmetric split (not 50/50).
  - **Full-bleed visual hero**: Large product image or screenshot with text overlaid or positioned adjacent.
  - **Statement hero**: A single large headline with no subtitle, no CTA above the fold. The CTA appears after the first scroll section. This works for strong brand plays.
  - **Interactive hero**: A live demo, interactive element, or code snippet that IS the hero content.
- The hero headline must name the product's specific function. "Inventory tracking that updates before your warehouse does" beats "The future of supply chain."
- If a CTA button appears in the hero, it should have specific label text ("Start free 14-day trial", "See the demo", "View pricing") — not "Get Started" or "Learn More."

## Section Structure

- A landing page should have 5-8 sections, not 3 and not 12.
- Sections must vary in structure. Do not repeat the same internal layout.
- Required variation: at least 3 different section layouts must appear. Examples of distinct layouts:
  - Asymmetric two-column (image left, text right — or reversed)
  - Full-width statement with large text
  - Bento grid (mixed-size cards in a grid)
  - Alternating image-text pairs (left/right zigzag)
  - Offset layout (content not centered, pushed to one side)
  - Feature list (vertical, not card-based)
  - Testimonial integrated into content (not a separate carousel section)

## Section Rhythm

Alternate between dense and spacious sections. A section with multiple elements packed together should be followed by a section with generous whitespace and fewer elements. This creates a breathing rhythm as the visitor scrolls.

Spacing between sections should be generous — at minimum 80px, preferably 96-120px for major transitions. Within sections, use tighter spacing (16-32px) to group related elements.

### Surface Alternation (mandatory)

Sections MUST alternate between at least 2 distinct surface treatments. A page where every section shares the same background color has no visual rhythm.

**Dark-theme pages:** alternate between a true dark (`#0A0A0A` / `bg-background`) and a warm-dark (`#141414` or `#1A1A1A` / `bg-muted`). At least one section should flip to a light surface (`#FAFAFA` / `bg-card` or warm white) as a contrast moment.

**Light-theme pages:** alternate between `#FFFFFF` (`bg-background`) and a warm off-white (`#FAFAFA` / `bg-muted`). At least one section should flip to a dark surface (`bg-foreground` with inverted text) as a contrast moment.

Three or more adjacent sections sharing the same background color is a build failure.

## Social Proof

- Do NOT place a logo bar as the first element after the hero. It is the most predictable AI pattern.
- Social proof should be woven into the content, not isolated in a separate section.
- Preferred patterns:
  - Inline testimonial quotes between feature sections.
  - A metric callout ("12,000 teams use this") placed next to or within a feature description.
  - A case study snippet with a real company name and a specific result.
- If a logo bar must exist, it should appear below the fold, not immediately after the hero, and should have no more than 5-6 logos with restrained styling (grayscale, small, no hover effects).

## Call to Action

- The primary CTA should appear 2-3 times on the page: once in or near the hero, once mid-page, once in a closing section.
- Each CTA instance can have different surrounding context but the same action.
- CTA button text must be specific and action-oriented. Avoid "Get Started," "Sign Up," "Learn More." Instead: "Try free for 14 days," "See how it works," "Book a 15-minute demo."
- The final CTA section should be distinct from the hero — not a copy of it. A common effective pattern is a full-width colored band with a direct statement and a single button.

## Footer

- The footer is a designed element, not a dumping ground.
- Do NOT use the four-column link grid pattern unless the site genuinely has enough links to justify it.
- For a landing page (not a full marketing site), a minimal footer is better: logo, essential links (privacy, terms), and a single line of contact info or social links.

## Mobile Considerations

- Design mobile-first. The desktop layout is an enhancement of the mobile layout, not the reverse.
- On mobile, sections that are two-column on desktop should stack vertically with adjusted spacing.
- Touch targets must be at least 44px.
- No horizontal scroll. Ever.

## Light Mode Implementation

- Use warm or neutral off-whites for the base background, not pure `#FFFFFF` everywhere.
- Use deliberate tonal variation between sections: a section on warm cream, the next on cool near-white. This separates sections without borders, colored bands, or shadows.
- Reserve pure white for surfaces that need to "lift" above the ground plane (cards, dropdowns, modals).
