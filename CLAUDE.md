# Design OS

Design OS is a frontend generation system that produces React + Tailwind + shadcn/ui code with a specific design identity. The repo contains design system YAMLs, visual style guides, compositional rules, scaffolding instructions, and style palettes. Generated projects use Next.js App Router with TypeScript.

```
design-systems/   — YAML token definitions (Halo, Ember, Nitro, shadcn-neutral)
styles/           — 10 visual style guides (composition, color, typography, shape)
style-palettes/   — color palette YAMLs with semantic token mappings
guides/           — generation guides per output type (landing page, webapp, mobile, etc.)
rules/            — anti-slop, general, and task-specific constraints
scaffolding/      — globals.css, tailwind config, and image handling templates
handoff/          — validation report format
```

## Design OS

## Rules

1. **One task per subagent call.** Each component or section is a discrete unit of work. Do not batch unrelated work.
2. **Evaluate every task.** Run the anti-slop checklist after each generation pass. Generate a `VALIDATION-REPORT.md` per the handoff format.
3. **Use copy verbatim.** If `CONTENT.md` or the user provides specific copy, use it exactly. When copy is missing, use bracketed placeholders (`[Your metric here]`), never generic marketing language.
4. **Git commit per phase.** Scaffold, then commit. Build each section, then commit. One logical unit of change per commit.
5. **Use real assets.** Reference actual design system tokens, actual font names, actual palette values. No invented hex codes, no default Tailwind colors, no placeholder font stacks.
