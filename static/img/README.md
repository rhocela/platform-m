# Static Assets Guide

This folder contains static assets for your documentation site, including images, icons, and other files that are served directly without processing.

## 📁 Folder Structure

```
static/
├── img/                    # Images and icons
│   ├── logo.svg           # Site logo (navbar)
│   ├── favicon.svg        # Browser favicon
│   └── [your images]      # Additional images
├── [other files]          # PDFs, downloads, etc.
```

## 🖼️ Replacing Logo and Favicon

### Logo

**File:** `logo.svg` (or `logo.png`)

**Used in:** Navigation bar (top left)

**Recommended specs:**
- Format: SVG (preferred) or PNG
- Size: Height ~40px, width proportional
- Transparent background recommended

**To replace:**
1. Place your logo file in this folder: `static/img/logo.svg`
2. Update reference in `docusaurus.config.ts`:
   ```typescript
   navbar: {
     logo: {
       alt: "Your Logo",
       src: "img/logo.svg",  // Update filename if different
     },
   },
   ```

### Favicon

**File:** `favicon.svg` (or `favicon.ico`)

**Used in:** Browser tab icon

**Recommended specs:**
- Format: SVG (modern) or ICO (legacy)
- Size: 32x32px minimum (SVG scales automatically)
- Simple, recognizable design

**To replace:**
1. Place your favicon in this folder: `static/img/favicon.svg`
2. Update reference in `docusaurus.config.ts`:
   ```typescript
   const config: Config = {
     favicon: "img/favicon.svg",  // Update filename if different
   },
   ```

### Multi-Size Favicon (Optional)

For better browser compatibility, provide multiple sizes:

1. Create favicons:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180)

2. Add to `docusaurus.config.ts`:
   ```typescript
   headTags: [
     {
       tagName: 'link',
       attributes: {
         rel: 'icon',
         type: 'image/png',
         sizes: '32x32',
         href: '/img/favicon-32x32.png',
       },
     },
     {
       tagName: 'link',
       attributes: {
         rel: 'icon',
         type: 'image/png',
         sizes: '16x16',
         href: '/img/favicon-16x16.png',
       },
     },
     {
       tagName: 'link',
       attributes: {
         rel: 'apple-touch-icon',
         sizes: '180x180',
         href: '/img/apple-touch-icon.png',
       },
     },
   ],
   ```

## 📷 Adding Images to Documentation

### Reference Static Images

Images in the `static` folder can be referenced using absolute paths:

```markdown
![Alt text](/img/my-image.png)
```

This works from any documentation file regardless of its location.

### Organize Images

Create subfolders for better organization:

```
static/img/
├── logo.svg
├── favicon.svg
├── screenshots/
│   ├── dashboard.png
│   └── settings.png
├── diagrams/
│   ├── architecture.svg
│   └── workflow.svg
└── icons/
    ├── feature-1.svg
    └── feature-2.svg
```

Reference with subfolder path:
```markdown
![Dashboard](/img/screenshots/dashboard.png)
![Architecture](/img/diagrams/architecture.svg)
```

### Image Best Practices

1. **Use descriptive filenames:**
   - ✅ `user-login-screen.png`
   - ❌ `screenshot1.png`

2. **Optimize image sizes:**
   - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target: Under 200KB per image
   - Screenshots: PNG format
   - Photos: JPG format
   - Icons/logos: SVG format (scalable)

3. **Always add alt text:**
   ```markdown
   ![User dashboard showing dataset overview](/img/dashboard.png)
   ```

4. **Use responsive images when needed:**
   ```jsx
   <img
     src="/img/large-image.jpg"
     alt="Description"
     style={{maxWidth: '100%', height: 'auto'}}
   />
   ```

## 📄 Other Static Files

### PDFs and Downloads

Place downloadable files in the `static` folder:

```
static/
├── downloads/
│   ├── user-manual.pdf
│   ├── api-specification.pdf
│   └── template.xlsx
```

Link to them:
```markdown
[Download User Manual](/downloads/user-manual.pdf)
[Download Template](/downloads/template.xlsx)
```

### Configuration Files

Example configs or templates:

```
static/
├── examples/
│   ├── config.json
│   ├── .env.example
│   └── docker-compose.yml
```

Link with download attribute:
```markdown
[Download config.json](/examples/config.json)
```

Or embed in code blocks:
````markdown
```json title="config.json"
{
  "setting": "value"
}
```

[Download this file](/examples/config.json)
````

## 🎨 Image Styling

The template includes automatic image styling in `src/css/custom.css`:

```css
img {
  border: 1.5px solid #DFE1E6;
}
```

### Custom Image Styling

Override for specific images:

```jsx
<img
  src="/img/my-image.png"
  alt="Description"
  style={{
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  }}
/>
```

Or use CSS classes:

```css
/* In custom.css */
.screenshot {
  border: 2px solid var(--ifm-color-primary);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon {
  border: none;
  width: 48px;
  height: 48px;
}
```

```jsx
<img src="/img/screenshot.png" className="screenshot" alt="..." />
<img src="/img/icon.svg" className="icon" alt="..." />
```

## 🛠️ Tools and Resources

### Logo Creation
- [Canva](https://www.canva.com/) - Logo designer
- [LogoMakr](https://logomakr.com/) - Free logo maker
- [Figma](https://www.figma.com/) - Design tool

### Favicon Generation
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Generate all favicon sizes
- [Favicon.io](https://favicon.io/) - Simple favicon generator

### Image Optimization
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Image compression tool
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimizer

### Icon Resources
- [Heroicons](https://heroicons.com/) - Free SVG icons
- [Feather Icons](https://feathericons.com/) - Simple icons
- [Font Awesome](https://fontawesome.com/) - Icon library

## 🔍 Troubleshooting

### Image Not Showing

1. **Check path:** Must start with `/`
   ```markdown
   ✅ ![Alt](/img/image.png)
   ❌ ![Alt](img/image.png)
   ❌ ![Alt](./img/image.png)
   ```

2. **Verify file exists:** Check `static/img/` folder

3. **Case sensitive:** Filename must match exactly
   - ✅ `Logo.svg` matches `Logo.svg`
   - ❌ `Logo.svg` doesn't match `logo.svg`

4. **Clear cache:**
   ```bash
   npm run clear
   npm start
   ```

### Logo Not Appearing

1. **Check config:** Verify `docusaurus.config.ts`:
   ```typescript
   logo: {
     src: "img/logo.svg",  // Path relative to static/
   }
   ```

2. **File format:** Ensure SVG or PNG is valid

3. **Size:** Might be too large/small - check height

### Favicon Not Showing

1. **Hard refresh browser:** Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

2. **Check multiple browsers:** Favicon caching varies

3. **Wait:** Can take time for browsers to update

4. **Check format:** Browser support varies
   - SVG: Modern browsers only
   - ICO/PNG: Universal support

## 📋 Checklist

When setting up your template:

- [ ] Replace `logo.svg` with your logo
- [ ] Replace `favicon.svg` with your favicon
- [ ] Update logo reference in `docusaurus.config.ts`
- [ ] Update favicon reference in `docusaurus.config.ts`
- [ ] Test logo appears in navbar
- [ ] Test favicon appears in browser tab
- [ ] Organize existing images into subfolders
- [ ] Delete unused images from template
- [ ] Optimize all images for web
- [ ] Add alt text to all images in documentation

## 📚 Additional Information

For more details, see:
- [TEMPLATE-GUIDE.md](../TEMPLATE-GUIDE.md)
- [THEME-CUSTOMIZATION.md](../THEME-CUSTOMIZATION.md)
- [Docusaurus Static Assets Docs](https://docusaurus.io/docs/static-assets)
