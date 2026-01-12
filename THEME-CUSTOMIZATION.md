# Theme Customization Guide

This template uses a professional LNDS-inspired color scheme that works beautifully in both light and dark modes. This guide shows you how to customize the theme for your project.

## Color Scheme

### Current Theme: LNDS Blue

The template uses a blue color palette:
- **Primary**: `#3581B8` (Professional blue)
- **Accent**: Lighter and darker shades of blue
- **Neutral**: Grays for text and backgrounds

---

## Quick Color Change

### Change Primary Color

The fastest way to rebrand is to change the primary color.

**Edit `src/css/custom.css`:**

```css
:root {
  /* CHANGE THIS COLOR to your brand color */
  --ifm-color-primary: #3581B8;  /* Replace with your hex color */
  
  /* Then update these shades (use a color tool) */
  --ifm-color-primary-dark: #2B6A94;
  --ifm-color-primary-darker: #215270;
  --ifm-color-primary-darkest: #183B4C;
  --ifm-color-primary-light: #4998D1;
  --ifm-color-primary-lighter: #5DAFEA;
  --ifm-color-primary-lightest: #71C6FF;
}
```

### Generate Color Shades

Use these tools to generate shades automatically:

1. **[Docusaurus Color Generator](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima)**
   - Enter your primary color
   - Copy the generated CSS

2. **[Shadowlord Color Generator](https://noeldelgado.github.io/shadowlord/)**
   - Generate lighter/darker variations

3. **[Coolors](https://coolors.co/)**
   - Create full color palettes

---

## Dark Mode Colors

Customize colors for dark mode separately:

```css
[data-theme='dark'] {
  /* Primary colors for dark mode */
  --ifm-color-primary: #4998D1;  /* Slightly lighter than light mode */
  --ifm-color-primary-dark: #3581B8;
  --ifm-color-primary-darker: #2B6A94;
  --ifm-color-primary-darkest: #215270;
  --ifm-color-primary-light: #5DAFEA;
  --ifm-color-primary-lighter: #71C6FF;
  --ifm-color-primary-lightest: #85DDFF;
  
  /* Optionally adjust background colors */
  --ifm-background-color: #1b1b1d;
  --ifm-background-surface-color: #242526;
}
```

---

## Color Palette Examples

### Green Theme

```css
:root {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
}
```

### Purple Theme

```css
:root {
  --ifm-color-primary: #7c3aed;
  --ifm-color-primary-dark: #6d28d9;
  --ifm-color-primary-darker: #5b21b6;
  --ifm-color-primary-darkest: #4c1d95;
  --ifm-color-primary-light: #8b5cf6;
  --ifm-color-primary-lighter: #a78bfa;
  --ifm-color-primary-lightest: #c4b5fd;
}
```

### Orange Theme

```css
:root {
  --ifm-color-primary: #f97316;
  --ifm-color-primary-dark: #ea580c;
  --ifm-color-primary-darker: #c2410c;
  --ifm-color-primary-darkest: #9a3412;
  --ifm-color-primary-light: #fb923c;
  --ifm-color-primary-lighter: #fdba74;
  --ifm-color-primary-lightest: #fed7aa;
}
```

### Red Theme

```css
:root {
  --ifm-color-primary: #dc2626;
  --ifm-color-primary-dark: #b91c1c;
  --ifm-color-primary-darker: #991b1b;
  --ifm-color-primary-darkest: #7f1d1d;
  --ifm-color-primary-light: #ef4444;
  --ifm-color-primary-lighter: #f87171;
  --ifm-color-primary-lightest: #fca5a5;
}
```

---

## Typography

### Font Customization

Change fonts by adding to `custom.css`:

```css
:root {
  /* Body text font */
  --ifm-font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
  
  /* Headings font */
  --ifm-heading-font-family: 'Poppins', var(--ifm-font-family-base);
  
  /* Code font */
  --ifm-font-family-monospace: 'Fira Code', 'Courier New', monospace;
  
  /* Font sizes */
  --ifm-font-size-base: 16px;
  --ifm-h1-font-size: 2.5rem;
  --ifm-h2-font-size: 2rem;
  --ifm-h3-font-size: 1.5rem;
  --ifm-h4-font-size: 1.25rem;
  --ifm-h5-font-size: 1rem;
  --ifm-h6-font-size: 0.875rem;
}
```

### Load Custom Fonts

Add to `docusaurus.config.ts`:

```typescript
export default {
  // ...
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap',
      },
    },
  ],
};
```

---

## Custom Styling Features

This template includes several custom styles in `src/css/custom.css`:

### 1. Image Borders

All images have subtle borders:

```css
img {
  border: 1.5px solid #DFE1E6;
}
```

**To customize:**
```css
img {
  border: 2px solid var(--ifm-color-primary);  /* Thicker, colored border */
  border-radius: 8px;  /* Rounded corners */
}

/* Or remove borders */
img {
  border: none;
}
```

### 2. Table Styling

Tables are left-aligned:

```css
table th {
  text-align: left;
}
```

**To customize:**
```css
table {
  border-radius: 8px;
  overflow: hidden;
}

table th {
  background: var(--ifm-color-primary);
  color: white;
  text-align: center;  /* Center headers */
}

table tr:hover {
  background: var(--ifm-color-emphasis-100);
}
```

### 3. Card Styling

Enhanced card styling with hover effects:

```css
article.card {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

article.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--ifm-color-primary);
}
```

**To customize:**
```css
article.card {
  border-radius: 16px;  /* More rounded */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);  /* Always show shadow */
}

article.card:hover {
  transform: translateY(-2px);  /* Lift on hover */
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}
```

---

## Layout Customization

### Content Width

Change maximum content width:

```css
:root {
  --ifm-container-width: 1200px;  /* Default is 1140px */
  --ifm-container-width-xl: 1440px;
}
```

### Sidebar Width

```css
:root {
  --doc-sidebar-width: 300px;  /* Default is 300px */
}
```

### Spacing

Adjust global spacing:

```css
:root {
  --ifm-spacing-horizontal: 1.5rem;  /* Horizontal padding */
  --ifm-spacing-vertical: 1.5rem;    /* Vertical padding */
}
```

---

## Navbar Customization

### Navbar Height

```css
:root {
  --ifm-navbar-height: 60px;  /* Default is 60px */
}
```

### Navbar Styling

```css
.navbar {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar__title {
  font-weight: 700;
  font-size: 1.25rem;
}

.navbar__item {
  font-weight: 500;
}
```

### Navbar Background

```css
.navbar {
  background: linear-gradient(90deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-light) 100%);
}

.navbar__link {
  color: white;
}
```

---

## Footer Customization

### Footer Background

```css
.footer {
  background: linear-gradient(180deg, #1c1e21 0%, #282c34 100%);
}

.footer__link-item {
  color: #aaa;
}

.footer__link-item:hover {
  color: var(--ifm-color-primary-lighter);
}
```

### Footer Layout

Modify footer in `docusaurus.config.ts`:

```typescript
footer: {
  style: 'dark',  // or 'light'
  links: [
    {
      title: 'Docs',
      items: [
        { label: 'User Guide', to: '/user-guide/intro' },
        { label: 'Developer Guide', to: '/developer' },
      ],
    },
    {
      title: 'Community',
      items: [
        { label: 'GitHub', href: 'https://github.com/...' },
        { label: 'Discord', href: 'https://discord.gg/...' },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} My Project.`,
},
```

---

## Code Block Styling

### Syntax Highlighting Theme

Change in `docusaurus.config.ts`:

```typescript
prism: {
  theme: prismThemes.github,       // Light mode
  darkTheme: prismThemes.dracula,  // Dark mode
  // Other options:
  // prismThemes.vsDark
  // prismThemes.duotoneDark
  // prismThemes.oceanicNext
}
```

### Code Block Customization

```css
/* Code blocks */
.prism-code {
  font-size: 14px;
  border-radius: 8px;
}

/* Inline code */
code {
  background: var(--ifm-color-emphasis-200);
  border-radius: 4px;
  padding: 0.2rem 0.4rem;
  font-size: 0.9em;
}
```

### Add Line Numbers

```typescript
// docusaurus.config.ts
prism: {
  additionalLanguages: ['java', 'php'],
  magicComments: [
    {
      className: 'theme-code-block-highlighted-line',
      line: 'highlight-next-line',
      block: { start: 'highlight-start', end: 'highlight-end' },
    },
  ],
}
```

---

## Admonition Styling

Customize callout boxes (:::note, :::tip, etc.):

```css
.admonition {
  border-left-width: 4px;
  border-radius: 8px;
}

.admonition-icon svg {
  width: 24px;
  height: 24px;
}

/* Custom colors for each type */
.alert--success {
  --ifm-alert-background-color: #e6f7e6;
  --ifm-alert-border-color: #28a745;
}

.alert--info {
  --ifm-alert-background-color: #e6f3ff;
  --ifm-alert-border-color: #0066cc;
}

.alert--warning {
  --ifm-alert-background-color: #fff4e6;
  --ifm-alert-border-color: #ff9800;
}

.alert--danger {
  --ifm-alert-background-color: #ffe6e6;
  --ifm-alert-border-color: #dc3545;
}
```

---

## Responsive Design

### Mobile Customization

```css
@media (max-width: 768px) {
  :root {
    --ifm-font-size-base: 14px;
    --ifm-spacing-horizontal: 1rem;
  }
  
  .navbar__title {
    font-size: 1rem;
  }
  
  /* Hide certain elements on mobile */
  .hide-on-mobile {
    display: none;
  }
}
```

### Tablet Adjustments

```css
@media (min-width: 769px) and (max-width: 996px) {
  :root {
    --doc-sidebar-width: 250px;
  }
}
```

---

## Advanced Customization

### CSS Variables Reference

Complete list of commonly used variables:

```css
:root {
  /* Colors */
  --ifm-color-primary: #3581B8;
  --ifm-background-color: #ffffff;
  --ifm-background-surface-color: #ffffff;
  --ifm-font-color-base: #1c1e21;
  --ifm-heading-color: #1c1e21;
  
  /* Typography */
  --ifm-font-family-base: system-ui, -apple-system, sans-serif;
  --ifm-font-size-base: 16px;
  --ifm-line-height-base: 1.65;
  --ifm-code-font-size: 95%;
  
  /* Layout */
  --ifm-navbar-height: 60px;
  --ifm-container-width: 1140px;
  --doc-sidebar-width: 300px;
  
  /* Spacing */
  --ifm-spacing-horizontal: 1.5rem;
  --ifm-spacing-vertical: 1.5rem;
  --ifm-global-spacing: 1rem;
  
  /* Borders */
  --ifm-global-radius: 0.4rem;
  --ifm-global-border-width: 1px;
  --ifm-color-emphasis-200: #e3e3e3;
  
  /* Transitions */
  --ifm-transition-fast: 200ms;
  --ifm-transition-slow: 400ms;
}
```

### Custom Classes

Add reusable utility classes:

```css
/* Utility classes */
.text-center {
  text-align: center;
}

.mt-2 {
  margin-top: 1rem;
}

.mb-2 {
  margin-bottom: 1rem;
}

.grid-2-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  background: var(--ifm-color-primary);
  color: white;
}
```

Use in markdown:

```mdx
<div className="text-center mt-2">
  Centered text with top margin
</div>

<span className="badge">New</span>
```

---

## Theme Swizzling

For advanced customization, "swizzle" Docusaurus components:

```bash
npm run swizzle @docusaurus/theme-classic ComponentName
```

**Common components to swizzle:**
- `Footer` - Completely custom footer
- `NavbarItem` - Custom navbar items
- `DocSidebar` - Custom sidebar
- `TOC` - Table of contents

**Example:**
```bash
npm run swizzle @docusaurus/theme-classic Footer
```

This creates `src/theme/Footer/index.js` which you can customize.

---

## Testing Your Theme

### Check Both Modes

Always test in both light and dark mode:

```bash
npm start
```

Toggle dark mode in the navbar and verify colors look good.

### Check Responsive Design

Test on different screen sizes:
- Mobile (320px - 768px)
- Tablet (769px - 996px)
- Desktop (997px+)

### Browser Compatibility

Test in major browsers:
- Chrome/Edge
- Firefox
- Safari

---

## Troubleshooting

### Changes Not Applying

1. **Clear cache:**
   ```bash
   npm run clear
   npm start
   ```

2. **Check CSS specificity:**
   Use `!important` temporarily to test:
   ```css
   .my-class {
     color: red !important;
   }
   ```

3. **Verify file is imported:**
   Check `docusaurus.config.ts`:
   ```typescript
   theme: {
     customCss: './src/css/custom.css',
   },
   ```

### Dark Mode Issues

Ensure dark mode styles use the correct selector:

```css
[data-theme='dark'] .my-class {
  /* Dark mode styles */
}
```

### Colors Look Wrong

Use CSS variables instead of hard-coded colors:

```css
✅ color: var(--ifm-font-color-base);
❌ color: #000000;
```

---

## Examples and Inspiration

### Docusaurus Showcase

Browse sites built with Docusaurus:
- https://docusaurus.io/showcase

### Color Palette Inspiration

- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Material Design Colors](https://materialui.co/colors/)

---

## Summary

**Quick customization steps:**

1. ✅ Change primary color in `custom.css`
2. ✅ Generate color shades
3. ✅ Update dark mode colors
4. ✅ Customize fonts (optional)
5. ✅ Test in both light/dark modes
6. ✅ Test responsive design

For more information, see:
- [TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md)
- [CUSTOM-COMPONENTS.md](CUSTOM-COMPONENTS.md)
- [Docusaurus Styling Docs](https://docusaurus.io/docs/styling-layout)
