# Image Handling

How Design OS handles images during generation, modeled on Pencil.dev's approach.

## Pencil's Key Insight

In Pencil, there is no "image" node type. Images are applied as **fills to pre-sized frame containers** via the G (Generate) operation. The workflow is always:

1. Create a frame with explicit dimensions, corner radius, and position in the layout.
2. Apply the image as a fill to that frame.

This means the **container is the design decision** — its size, aspect ratio, border-radius, and relationship to surrounding elements are all locked in before any image content enters the picture. The image is subordinate to the container. It fills the space it is given.

Design OS adopts the same principle for code output.

## Container-First Approach

Every image in the generated output must be wrapped in an explicitly-sized container. No image should rely on its intrinsic dimensions to determine layout.

### The PlaceholderImage Component

Generate this component in every project at `src/components/shared/placeholder-image.tsx`:

```tsx
import Image from "next/image"

interface PlaceholderImageProps {
  alt: string
  aspect?: "video" | "square" | "portrait" | "wide" | "ultrawide"
  width?: number
  height?: number
  className?: string
  intent?: string
  rounded?: "none" | "sm" | "md" | "lg" | "xl"
}

const aspectMap = {
  video: "aspect-video",       // 16:9
  square: "aspect-square",     // 1:1
  portrait: "aspect-[3/4]",    // 3:4
  wide: "aspect-[2/1]",        // 2:1
  ultrawide: "aspect-[3/1]",   // 3:1
}

const roundedMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
}

function PlaceholderImage({
  alt,
  aspect = "video",
  width,
  height,
  className = "",
  intent,
  rounded = "md",
}: PlaceholderImageProps) {
  const aspectClass = width && height ? "" : aspectMap[aspect]
  const roundedClass = roundedMap[rounded]
  const style = width && height ? { width, height } : undefined

  return (
    <div
      className={`relative overflow-hidden bg-neutral-800 border-2 border-dashed border-neutral-500 ${aspectClass} ${roundedClass} ${className}`}
      style={style}
      data-image-intent={intent}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-sm font-mono text-center px-4 leading-relaxed">
          [IMAGE: {intent ?? alt}]
        </p>
      </div>
    </div>
  )
}

export { PlaceholderImage }
```

### Usage

```tsx
{/* Hero product screenshot — 16:9, large */}
<PlaceholderImage
  alt="Product dashboard showing real-time analytics"
  aspect="video"
  intent="Product screenshot: main dashboard view"
  rounded="lg"
  className="w-full shadow-lg border"
/>

{/* Team photo — square, smaller */}
<PlaceholderImage
  alt="Engineering team at work"
  aspect="square"
  intent="Team photo: candid, real environment"
  rounded="xl"
  className="w-64"
/>

{/* Full-bleed hero background */}
<div className="relative min-h-[90vh]">
  <PlaceholderImage
    alt="Aerial view of logistics warehouse"
    aspect="ultrawide"
    intent="Hero background: product environment, wide angle"
    rounded="none"
    className="absolute inset-0 w-full h-full"
  />
  <div className="relative z-10">{/* Text overlay */}</div>
</div>

{/* Fixed dimensions (explicit px) */}
<PlaceholderImage
  alt="App icon"
  width={80}
  height={80}
  intent="App icon or logo"
  rounded="lg"
/>
```

## Image Container Rules

### Aspect Ratios

Every image container must have an explicit aspect ratio. No exceptions. This prevents layout shift and ensures the design works before real images are added.

| Aspect | Ratio | Use Case |
|--------|-------|----------|
| `video` | 16:9 | Product screenshots, hero images, feature visuals |
| `square` | 1:1 | Avatars, logos, icons, team photos |
| `portrait` | 3:4 | Person photos, mobile screenshots, cards |
| `wide` | 2:1 | Banner images, section backgrounds |
| `ultrawide` | 3:1 | Full-bleed hero backgrounds, page-width strips |

### Border Radius

Image containers use the design system's radius scale — not the same value for every image:

- Hero/full-bleed images: `rounded-none` or `rounded-lg`
- Feature screenshots: `rounded-lg` or `rounded-xl` (with `border` and `shadow`)
- Avatars: `rounded-full`
- Card images: Match the card's radius (typically `rounded-md` or `rounded-lg`)
- Thumbnails: `rounded-sm` or `rounded-md`

### Shadows and Borders

Product screenshots and UI images should have `border` and `shadow-md` or `shadow-lg` to lift them from the page and make them feel like real artifacts, not flat fills.

Background images and decorative images should have NO border and NO shadow.

### The `intent` Prop

The `intent` prop is a design-time annotation. It describes what image should go here when the placeholder is replaced with real content. Write it as a brief description a photographer or designer would understand:

Good intents:
- `"Product screenshot: settings page with sidebar visible"`
- `"Lifestyle photo: developer at desk, natural light, real workspace"`
- `"Diagram: data flow from API to dashboard"`
- `"Logo: partner company, grayscale"`

Bad intents (too vague):
- `"Image here"`
- `"Photo"`
- `"Screenshot"`

## Layout Patterns with Images

### Pattern: Asymmetric Split with Screenshot

The image container gets more space than the text. The screenshot has border + shadow to feel like a real product shot.

```tsx
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
  <div className="lg:col-span-2 space-y-6">
    {/* Text content */}
  </div>
  <div className="lg:col-span-3">
    <PlaceholderImage
      alt="Product dashboard"
      aspect="video"
      intent="Product screenshot: primary feature in use"
      rounded="xl"
      className="w-full shadow-xl border"
    />
  </div>
</div>
```

### Pattern: Overlapping Image

Image extends beyond its section container to create visual depth. Uses negative margin or absolute positioning.

```tsx
<section className="py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        {/* Text content */}
      </div>
      <div className="relative lg:-mr-24">
        <PlaceholderImage
          alt="Full product interface"
          aspect="video"
          intent="Product screenshot: full interface, edge-to-edge"
          rounded="lg"
          className="w-full shadow-2xl border"
        />
      </div>
    </div>
  </div>
</section>
```

### Pattern: Stacked Screenshots (Mobile + Desktop)

Show the product at two breakpoints. The mobile screenshot overlaps the desktop one.

```tsx
<div className="relative">
  <PlaceholderImage
    alt="Desktop view"
    aspect="video"
    intent="Product screenshot: desktop dashboard, full width"
    rounded="xl"
    className="w-full shadow-xl border"
  />
  <div className="absolute -bottom-8 -right-4 w-1/4 max-w-[200px]">
    <PlaceholderImage
      alt="Mobile view"
      aspect="portrait"
      intent="Product screenshot: mobile app, same feature"
      rounded="xl"
      className="w-full shadow-2xl border-2 border-background"
    />
  </div>
</div>
```

### Pattern: Bento with Mixed Media

Bento grid cells contain images of different aspect ratios.

```tsx
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="col-span-2 row-span-2">
    <PlaceholderImage
      alt="Main feature"
      aspect="square"
      intent="Product screenshot: primary workflow"
      rounded="lg"
      className="w-full h-full shadow-lg border"
    />
  </div>
  <div>
    <PlaceholderImage
      alt="Feature detail"
      aspect="square"
      intent="UI close-up: notification panel"
      rounded="lg"
      className="w-full shadow-md border"
    />
  </div>
  <div>
    <PlaceholderImage
      alt="Feature detail"
      aspect="square"
      intent="UI close-up: search results"
      rounded="lg"
      className="w-full shadow-md border"
    />
  </div>
</div>
```

## Anti-Slop Image Rules

- No AI-generated people. No stock groups around laptops.
- No abstract 3D blob illustrations. No floating geometric shapes.
- No generic "technology" imagery (circuit boards, abstract networks, glowing orbs).
- Product screenshots are always the strongest image choice. If the product has a UI, show it.
- If the product does not have a visual UI, use photography of the actual environment where it is used — not idealized stock photography.
- Every image intent must be specific enough that two different designers would source roughly the same kind of image from it.

## Replacing Placeholders Later

When the project moves past the generation phase and real images are available:

1. Search the codebase for `PlaceholderImage` components.
2. Read each `intent` prop to understand what image is needed.
3. Replace with `next/image` using the same container dimensions and aspect ratio.
4. Remove the `PlaceholderImage` component when no instances remain.

The container dimensions, aspect ratios, and border-radius values stay — only the fill changes. Exactly like Pencil's G operation filling an existing frame.
