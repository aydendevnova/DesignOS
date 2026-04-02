# Design System Composition Guidelines

Patterns for composing screens and dashboards using React, Tailwind CSS, and shadcn/ui.

---

## 1. Component Library (shadcn/ui)

All standard UI primitives come from [shadcn/ui](https://ui.shadcn.com). Install only what you need:

```bash
npx shadcn@latest add button card input table tabs dialog alert dropdown-menu pagination badge breadcrumb separator
```

| Category | Components |
|----------|------------|
| Actions | `Button`, `DropdownMenu`, `ContextMenu` |
| Forms | `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Label` |
| Layout | `Card`, `Separator`, `Sheet`, `ScrollArea` |
| Data | `Table`, `Badge`, `Avatar` |
| Feedback | `Alert`, `Toast`, `Sonner` |
| Overlay | `Dialog`, `Popover`, `Tooltip`, `Command` |
| Navigation | `Tabs`, `Breadcrumb`, `Pagination`, `NavigationMenu` |

---

## 2. Component Composition

shadcn/ui components use a compound-component pattern. Each component exposes sub-parts that compose together as children.

### Card Example

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col gap-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="you@example.com" />
    </div>
  </CardContent>
  <CardFooter className="flex justify-end gap-3">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

### Dialog Example

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <div className="flex flex-col gap-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </div>
    </div>
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

Hiding optional sub-parts is done by omitting them from the JSX entirely — no `enabled: false` flags needed.

---

## 3. Icons

Use [Lucide React](https://lucide.dev) — the default icon set for shadcn/ui.

```bash
npm install lucide-react
```

### Usage

```tsx
import { Settings, Home, User, Search, Plus, X } from "lucide-react"

<Settings className="size-5 text-muted-foreground" />
<Home className="size-5" />
```

### Common Icon Names

| Action | Lucide Component |
|--------|-----------------|
| Home | `Home` |
| Settings | `Settings` |
| User | `User` |
| Search | `Search` |
| Add | `Plus` |
| Close | `X` |
| Edit | `Pencil` |
| Delete | `Trash2` |
| Check | `Check` |
| Arrow right | `ArrowRight` |
| Chevron down | `ChevronDown` |
| Menu | `Menu` |
| Dashboard | `LayoutDashboard` |
| Folder | `Folder` |
| File | `FileText` |
| Calendar | `Calendar` |
| Mail | `Mail` |
| Bell | `Bell` |

### Icons Inside Buttons

```tsx
<Button>
  <Plus className="size-4" />
  Add User
</Button>

<Button variant="ghost" size="icon">
  <Settings className="size-4" />
</Button>
```

---

## 4. Sidebar Composition

### Structure

```
Sidebar
├── Header (logo, brand)
├── Content (navigation items)
└── Footer (user profile, settings)
```

### Implementation

```tsx
function AppSidebar() {
  return (
    <aside className="flex h-screen w-[280px] flex-col border-r bg-card">
      <div className="flex h-14 items-center gap-2 border-b px-4">
        <LayoutDashboard className="size-5" />
        <span className="font-heading text-lg font-semibold">Acme</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <p className="px-3 py-2 text-xs font-medium text-muted-foreground">
          Main Menu
        </p>
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
        <SidebarItem icon={Users} label="Users" />
        <SidebarItem icon={Settings} label="Settings" />
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </aside>
  )
}

function SidebarItem({ icon: Icon, label, active }: {
  icon: LucideIcon
  label: string
  active?: boolean
}) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <Icon className="size-4" />
      {label}
    </button>
  )
}
```

---

## 5. Tab Composition

```tsx
<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>
  <TabsContent value="general">
    {/* General settings content */}
  </TabsContent>
  <TabsContent value="security">
    {/* Security settings content */}
  </TabsContent>
  <TabsContent value="billing">
    {/* Billing settings content */}
  </TabsContent>
</Tabs>
```

---

## 6. Dropdown Composition

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem checked>Option A</DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem>Option B</DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>
```

For searchable dropdowns, use the `Command` component (cmdk):

```tsx
<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandGroup heading="Actions">
      <CommandItem>Option A</CommandItem>
      <CommandItem>Option B</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

---

## 7. Table Composition

### Structure

```
Table container
├── Header — Search/filter + action buttons
├── Table
│   ├── TableHeader
│   │   └── TableRow → TableHead cells
│   └── TableBody
│       └── TableRow → TableCell cells
└── Footer — Row count + pagination
```

### Implementation

```tsx
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Input placeholder="Search users..." className="max-w-sm" />
    <Button>
      <Plus className="size-4" />
      Add User
    </Button>
  </div>

  <div className="rounded-md border">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="w-[120px]">Status</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>
            <Badge variant="default">Active</Badge>
          </TableCell>
          <TableCell>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="size-4" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <div className="flex items-center justify-between text-sm text-muted-foreground">
    <span>Showing 1-10 of 100 rows</span>
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  </div>
</div>
```

### Column Width Strategy

| Column Type | Tailwind Class |
|-------------|---------------|
| Primary identifier (name) | `w-[200px]` to `w-[250px]` |
| Email, URL | No width (fills remaining space) |
| Status, badge | `w-[120px]` |
| Date | `w-[140px]` |
| Actions | `w-[80px]` to `w-[100px]` |
| Numbers | `w-[100px]` |

---

## 8. Screen Layout Patterns

### Pattern A: Sidebar + Content (Dashboard)

```
┌──────────┬────────────────────────────────┐
│ Sidebar  │     Main Content Area          │
│  280px   │      flex-1                    │
└──────────┴────────────────────────────────┘
```

```tsx
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  )
}
```

### Pattern B: Header + Content

```tsx
function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex h-14 items-center justify-between border-b px-6">
        {/* Logo, nav, actions */}
      </header>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
```

### Pattern C: Two-Column Layout

```tsx
<div className="flex gap-6">
  <div className="flex-1 space-y-6">
    {/* Main column */}
  </div>
  <div className="w-[360px] space-y-6">
    {/* Side column */}
  </div>
</div>
```

### Pattern D: Card Grid

```tsx
<div className="grid grid-cols-3 gap-4">
  <Card>{/* ... */}</Card>
  <Card>{/* ... */}</Card>
  <Card>{/* ... */}</Card>
</div>
```

Use responsive breakpoints for adaptive grids:

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
```

---

## 9. Common Compositions

### Page Header with Breadcrumbs + Actions

```tsx
<div className="flex items-center justify-between">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Users</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  <div className="flex items-center gap-3">
    <Button variant="outline">Export</Button>
    <Button>Add User</Button>
  </div>
</div>
```

### Form Layout

```tsx
<Card>
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
  </CardHeader>
  <CardContent>
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" />
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-end gap-3">
    <Button variant="outline">Cancel</Button>
    <Button>Submit</Button>
  </CardFooter>
</Card>
```

### Metric Cards

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
  <Card>
    <CardHeader className="pb-2">
      <CardDescription>Total Users</CardDescription>
      <CardTitle className="text-3xl font-semibold">12,543</CardTitle>
    </CardHeader>
  </Card>
  <Card>
    <CardHeader className="pb-2">
      <CardDescription>Revenue</CardDescription>
      <CardTitle className="text-3xl font-semibold">$48,290</CardTitle>
    </CardHeader>
  </Card>
</div>
```

---

## 10. Spacing Reference

| Context | Tailwind Class |
|---------|---------------|
| Screen sections | `space-y-6` or `space-y-8` (24–32px) |
| Card grid | `gap-4` or `gap-6` (16–24px) |
| Form fields (vertical) | `space-y-4` (16px) |
| Form row (horizontal) | `gap-4` (16px) |
| Button groups | `gap-3` (12px) |
| Inside cards | `p-6` (24px, shadcn default) |
| Page content area | `p-8` (32px) |
| Sidebar items | `gap-1` with `px-3 py-2` per item |

---

## 11. Button Hierarchy

| Priority | Variant | Used For |
|----------|---------|----------|
| 1 | `default` | Main action (Save, Submit, Create) |
| 2 | `secondary` | Alternative actions |
| 3 | `outline` | Tertiary, Cancel, Back |
| 4 | `ghost` | Inline actions, navigation |
| 5 | `destructive` | Delete, Remove |

### Button Actions Alignment

- **Cards/Modals:** Right-align actions (`flex justify-end gap-3`)
- **Forms:** Right-align submit buttons
- **Toolbars:** Left-align primary, right-align secondary (`flex justify-between`)
- **Destructive + Cancel:** Cancel on left, Destructive on right

### Button Sizes

| Size | Class | Used For |
|------|-------|----------|
| Default | (none) | Standard actions |
| Small | `size="sm"` | Compact UI, table rows |
| Large | `size="lg"` | Hero CTAs, prominent actions |
| Icon | `size="icon"` | Icon-only buttons |

---

## 12. Design Tokens

All colors are referenced via CSS variables set in `globals.css` and consumed through Tailwind utility classes.

### Colors

| Tailwind Class | Usage |
|---------------|-------|
| `bg-background` / `text-foreground` | Page background, primary text |
| `bg-muted` / `text-muted-foreground` | Muted surfaces, secondary text |
| `bg-card` / `text-card-foreground` | Card backgrounds |
| `border-border` | Borders, dividers |
| `bg-primary` / `text-primary-foreground` | Primary actions, brand |
| `bg-secondary` / `text-secondary-foreground` | Secondary elements |
| `bg-destructive` / `text-destructive-foreground` | Danger actions |
| `bg-accent` / `text-accent-foreground` | Hover states, highlights |

### Semantic Status Colors

Define these in `globals.css` if the design system includes them:

| State | Background | Foreground |
|-------|------------|------------|
| Success | `bg-success` | `text-success-foreground` |
| Warning | `bg-warning` | `text-warning-foreground` |
| Error | `bg-destructive` | `text-destructive-foreground` |
| Info | `bg-info` | `text-info-foreground` |

### Typography

| Tailwind Class | Usage |
|---------------|-------|
| `font-heading` | Headings, labels, navigation |
| `font-body` | Body text, descriptions, inputs |

Font families are registered in `tailwind.config.ts` under `theme.extend.fontFamily` and loaded in `layout.tsx` via `next/font`.

### Border Radius

| Tailwind Class | Usage |
|---------------|-------|
| `rounded-none` | Tables, sharp containers |
| `rounded-md` or `rounded-lg` | Cards, modals (mapped to `--radius`) |
| `rounded-full` | Avatars, pills, circular buttons |

The `--radius` CSS variable controls the base radius. shadcn components derive their radii from it automatically.

---

## 13. Design Principles

- **Visual Hierarchy** — One clear focal point per section. Use size, weight, and color to establish importance.
- **Alignment & Grid** — Align elements to an implicit grid. Use consistent edge alignment within containers.
- **Spacing Consistency** — Use the spacing scale from the reference table. Maintain consistent vertical rhythm.
- **Color Usage** — Always use Tailwind semantic classes (`bg-primary`, `text-muted-foreground`). Never hardcode hex/rgb values in JSX.
- **Content Density** — Cards should contain one primary idea. Tables: 4–7 columns. Avoid overcrowding.
- **Responsive Design** — Use Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`) with a mobile-first approach. Test layouts at 1440px, 1024px, and 375px.
