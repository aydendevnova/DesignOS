# Web App Guidelines

These rules apply when the generation target is a functional product UI: dashboard, admin panel, settings page, data view, or any authenticated interface where the user performs tasks.

## Core Principle: Purpose-First

Every screen must answer: what is the user here to do? The layout, hierarchy, and component selection should serve that purpose. A dashboard is not a gallery of widgets — it is an answer to a question the user has.

## Layout Patterns

### Sidebar + Main Content (Primary Pattern)

The most common web app layout. Rules for doing it well:

- Sidebar width: 240-280px. Not wider unless the navigation is genuinely complex.
- Sidebar should use the design system's sidebar token colors, not the page background.
- Main content area gets full remaining width with consistent internal padding (24-32px).
- The sidebar should NOT be collapsible by default on desktop. Collapsible sidebars add complexity that most apps do not need.
- Navigation items should have clear active states using the design system's accent color.

### Top Nav + Content

Alternative for simpler apps with fewer navigation items (under 6).

- Header height: 56-64px fixed.
- Navigation items in the header bar, not in a dropdown.
- Content area below with its own scroll context.

### Nested Layout (Sidebar + Sub-navigation)

For complex products with multiple sections each having sub-pages.

- Primary sidebar: 240px, navigation between major sections.
- Secondary navigation: either a horizontal tab bar or a narrower secondary sidebar (180-200px).
- Never nest more than two levels of navigation.

## Content Hierarchy

### Dashboard Screens

- Lead with the most important metric or status. Not a welcome message, not a list of recent items.
- Stat cards should vary in size based on importance. Not all cards the same size.
- Use the full width. A dashboard with everything in a narrow centered column wastes the medium.
- Data tables are often the most useful component on a dashboard. Do not bury them below decorative cards.

### Detail/Edit Screens

- Form labels above inputs, not beside them (better for scanning and mobile).
- Group related fields with clear section headings.
- Primary action (Save, Submit) should be sticky or clearly visible. Do not place it below a long scroll.
- Destructive actions (Delete, Remove) should be visually separated from primary actions.

### List/Table Screens

- Column headers must be clearly distinct from data rows (use muted-foreground color, smaller/uppercase text, or a bottom border).
- Provide sort indicators on sortable columns.
- Row hover states for interactive tables.
- Pagination or infinite scroll — pick one and commit.
- Empty states must be designed, not just "No data found."

## Component Usage

### Data Tables

- Use the design system's Table components (DataTable, Table Row, Table Cell, Column Header).
- Column widths should be set intentionally based on content type:
  - Name/title columns: flex (fill remaining space)
  - Status columns: 100-120px
  - Date columns: 140-160px
  - Action columns: 80-100px (icon buttons)
  - Numeric columns: 80-120px, right-aligned

### Cards

- Cards should contain actual content, not just a title and an icon.
- Stat cards: large number, label, and optionally a trend indicator or sparkline.
- Use Card variants from the design system (Card, Card Action, Card Plain, Card Image) based on the content type.

### Forms

- Input Group components include labels — use them instead of bare inputs with separate label elements.
- Validation states: use the design system's destructive color for errors, and display error messages below the input, not in a toast.
- Radio groups and checkbox groups should use the description variants when the option needs explanation.
- Switch for binary toggles that take effect immediately. Checkbox for binary choices that require a submit action.

### Navigation

- Breadcrumbs for any screen deeper than 2 levels.
- Tabs for switching between views of the same data (not for navigation between different pages).
- Pagination for data sets. Show current page, total pages, and items-per-page when relevant.

## Spacing

- Page padding: 24-32px on desktop, 16px on mobile.
- Gap between major sections: 24-32px.
- Gap within card content: 12-16px.
- Gap between form fields: 16-20px.
- These values should reference the design system's spacing scale, not arbitrary values.

## Empty States

Every list, table, and dashboard widget needs a designed empty state that:
1. Explains what will appear here.
2. Provides a clear action to populate it (if applicable).
3. Uses the design system's muted-foreground color for the explanatory text.

## Loading States

- Skeleton loaders for content that takes >200ms to load.
- Spinner indicators only on buttons during form submission.
- Never show a blank screen while data loads — always show the page structure with loading indicators in the content areas.
