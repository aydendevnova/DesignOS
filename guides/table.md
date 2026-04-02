# Table Design Guidelines

Use these rules only when there is no predefined Table component or Table frame in the design system or document.

---

## Table Hierarchy

```
Table (frame, vertical layout)
├── Header Row (frame, horizontal, width: fill_container, height: fixed)
│   ├── Cell (frame, width: fixed, height: fill_container)
│   │   └── Text (text, bold, textGrowth: fixed-width)
│   ├── Cell (frame, width: fixed, height: fill_container)
│   │   └── Text (text, bold, textGrowth: fixed-width)
│   └── ...
├── Data Row (frame, horizontal, width: fill_container, height: fixed)
│   ├── Cell (frame, width: fixed, height: fill_container)
│   │   └── Text (text, textGrowth: fixed-width)
│   ├── Cell (frame, width: fixed, height: fill_container)
│   │   └── Text (text, textGrowth: fixed-width)
│   └── ...
├── Data Row ...
└── ...
```

---

## Rules

- If the user does not specify data, generate **dummy placeholder values** for each cell
- Cells may contain other components (e.g., label, button) instead of text if explicitly requested
- **Responsive multi-screen design**: When converting a wide multi-column table to a mobile version, consider using cards instead of a table
