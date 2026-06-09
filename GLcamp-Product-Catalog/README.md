# GLcamp Product Catalog E-book

Premium React + Vite + TypeScript catalog website for GLcamp product presentation and PDF export.

## Local Run

```bash
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

Build for production:

```bash
npm.cmd run build
```

Preview the production build:

```bash
npm.cmd run preview
```

## Add A New Product

All product data is stored in:

```text
src/data/products.ts
```

Copy one product object and update:

- `id`
- `category`
- `name`
- `model`
- `description`
- `images`
- `specs`
- `optionalFeatures`
- `leadTime`
- `shipping`
- `ddp`
- `highlights`
- `packaging`
- `applications`

Example image field:

```ts
images: [
  {
    src: "/products/my-product.jpg",
    alt: "GLcamp product photo"
  }
]
```

## Replace The Logo

The current logo is a clean text mark in `src/components/Logo.tsx`.

To use your real logo:

1. Put the logo file in `public/`, for example `public/glcamp-logo.png`.
2. Open `src/components/Logo.tsx`.
3. Replace the text mark with:

```tsx
<img src="/glcamp-logo.png" alt="GLcamp" className="h-10 w-auto" />
```

Use a transparent PNG or SVG for the best print result.

## Replace Product Images

Put product images in:

```text
public/products/
```

Then update `src/data/products.ts`:

```ts
images: [
  { src: "/products/rv-awning-450.jpg", alt: "GLcamp RV Awning" },
  { src: "/products/rv-awning-detail.jpg", alt: "RV awning detail" }
]
```

Images use `object-fit: cover` or `object-fit: contain` depending on the section, so they keep their original ratio and do not stretch.

## Export PDF

The page has two export options:

- `Print / PDF`: uses the browser print dialog.
- `Download PDF`: uses `html2pdf.js`.

For the most reliable commercial PDF:

1. Click `Print / PDF`.
2. Choose `Save as PDF`.
3. Enable background graphics in the browser print dialog.

## Deploy To Vercel

1. Push this project to GitHub.
2. Create a new Vercel project.
3. Vercel will detect Vite automatically.
4. Use these settings if needed:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy.

This repository also includes `vercel.json` to force Vercel to use the Vite build output in `dist`.

## Main Files

```text
index.html
vite.config.ts
vercel.json
tailwind.config.js
src/main.tsx
src/App.tsx
src/data/products.ts
src/components/
src/styles/
```

The old `app/` folder from the previous Next.js project is not used by this Vite catalog.
