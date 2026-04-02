# Web App Design Guidelines

Universal product design principles for responsive web application interfaces. Applies to any use case: CRM, analytics, editor, marketplace, fintech, admin panel, AI tool, or unknown future systems.

> Do not generate marketing pages. Generate functional product UI only.

---

## 1. Purpose First

Every screen must have a clearly defined primary purpose.

- A screen should answer one dominant user question
- A screen should support one primary action
- If multiple goals compete, separate them into distinct surfaces

---

## 2. Dominant Region Rule

Every screen must contain one dominant visual region.

- Visual weight must reflect importance
- Secondary regions must be subordinate
- Avoid equal-weight layouts and competing focal points

---

## 3. Understandability

The interface must explain itself.

- Labels must be clear
- Actions must be recognizable
- Icons must not replace essential text
- System state must be visible

If a user must guess what something does, redesign it.

---

## 4. Progressive Disclosure

Reveal complexity gradually.

- Show essential information first
- Advanced controls must be contextual
- Do not overwhelm with full capability at once
- Detail views should open on demand

Complexity is allowed. Confusion is not.

---

## 5. Recognition Over Recall

- Surface relevant actions when needed
- Do not require users to remember previous states
- Keep navigation predictable
- Use consistent placement of controls

---

## 6. System Status Visibility

Every data-driven surface must support:

- Loading state
- Empty state
- Error state
- Success confirmation
- Permission or restriction state (when applicable)

No silent failure. No blank ambiguity.

---

## 7. Action Hierarchy

- One primary action per screen or section
- Secondary actions visually reduced
- Destructive actions clearly distinct
- Rare actions placed in overflow

Do not give equal emphasis to all actions.

---

## 8. Structural Consistency

- Similar problems → similar solutions
- Navigation logic must remain stable
- Layout rhythm must feel system-driven
- Spacing must follow a consistent scale

Predictability builds trust.

---

## 9. Density Intentionality

Allowed modes:

- **Compact** → high data environments
- **Medium** → balanced default
- **Airy** → low-complexity workflows

Do not mix density modes arbitrarily within one screen.

---

## 10. Spatial Logic

- One dominant axis per screen
- Prefer two structural zones before three
- Avoid unnecessary nested scroll containers
- Use whitespace for separation
- Avoid decorative dividers unless functionally needed

Structure over ornament.

---

## 11. Feedback & Response

Every user action must produce clear feedback.

- Immediate acknowledgment
- Clear validation messaging
- Reversible actions where possible
- Confirm destructive operations

---

## 12. Responsiveness Philosophy

Hierarchy must survive all breakpoints.

- **Mobile**: Single dominant column. Secondary panels become sheets or stacked sections. No horizontal scrolling unless essential.
- **Tablet**: Transitional structural logic.
- **Desktop**: Multi-zone allowed. Higher density permitted.

---

## 13. Entity Integrity

Whenever representing an entity (user, record, document, asset):

- Display its name prominently
- Surface its status clearly
- Show key metadata
- Make actions obvious

---

## 14. Constraint Over Decoration

If an element does not support navigation, understanding, decision-making, or action-taking — it should not exist.

As little design as possible.

---

## 15. Scalability

- More data must not break structure
- More features must not collapse hierarchy
- Growth should extend patterns, not create chaos

---

## 16. Adaptation Logic

Infer product type from the user prompt. Then determine:

- Dominant region
- Primary action
- Appropriate density
- Level of progressive disclosure

Do not assume dashboards, tables, sidebars, or canvases unless required by purpose. Structure must emerge from utility.
