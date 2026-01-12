# Docusaurus Template - Complete Setup Guide

This comprehensive guide will walk you through customizing this Docusaurus template for your project.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Configuration Customization](#configuration-customization)
3. [Content Structure](#content-structure)
4. [Search Configuration](#search-configuration)
5. [Theme Customization](#theme-customization)
6. [Adding Custom Components](#adding-custom-components)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Step 1: Copy the Template

```bash
# Clone or copy the template to your project
git clone <template-repo-url> my-project-docs
cd my-project-docs
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Test the Template

```bash
npm start
```

The site should open at `http://localhost:3000`. Verify everything works before customizing.

---

## Configuration Customization

### Main Configuration File: `docusaurus.config.ts`

This file contains all the main settings for your site. Open it and replace the following placeholders:

#### 1. Basic Information

```typescript
const config: Config = {
  title: "{{PROJECT_NAME}}",                    // Replace with your project name
  tagline: "{{PROJECT_TAGLINE}}",              // Replace with your project description
  favicon: "img/favicon.svg",                   // Path to your favicon
  
  url: "{{SITE_URL}}",                         // Production URL (e.g., https://docs.myproject.com)
  baseUrl: "{{BASE_URL}}",                     // Base path (e.g., "/" or "/docs/")
  
  organizationName: "{{ORG_NAME}}",            // GitHub/GitLab org name
  projectName: "{{PROJECT_NAME}}",             // Repository name
```

**Example:**
```typescript
title: "MyApp Documentation",
tagline: "Complete guide for MyApp users and developers",
url: "https://docs.myapp.com",
baseUrl: "/",
organizationName: "mycompany",
projectName: "myapp",
```

#### 2. Navigation Bar

Update the navbar in the `themeConfig` section:

```typescript
navbar: {
  title: "{{PROJECT_NAME}} Documentation",    // Title next to logo
  logo: {
    alt: "{{PROJECT_NAME}} Logo",
    src: "img/logo.svg",                      // Path to your logo
  },
  items: [
    // Keep or modify these based on which doc types you want
    {
      type: "docSidebar",
      sidebarId: "userGuideSidebar",
      docsPluginId: "user-guide",
      position: "right",
      label: "Users",                         // Customize label
    },
    // ... other nav items
  ],
},
```

#### 3. Footer

Customize the footer links and copyright:

```typescript
footer: {
  style: "dark",
  links: [
    {
      html: `
        <div style="color: #b3b3b3;">
          <a href="{{DEMO_URL}}" target="_blank">Demo↗</a>
          <span>&nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp;</span>
          <a href="{{SOURCE_CODE_URL}}" target="_blank">Source code↗</a>
          <span>&nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp;</span>
          <a href="{{SUPPORT_URL}}" target="_blank">Contact support↗</a>
        </div>
      `,
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} {{YOUR_ORGANIZATION}}.`,
},
```

#### 4. Documentation Types

By default, the template includes three doc types. To add or remove:

**To Remove a Doc Type:**

1. Delete the corresponding plugin from the `plugins` array:
```typescript
// Remove this block to eliminate a doc type
[
  "@docusaurus/plugin-content-docs",
  {
    id: "system-admin",              // Doc type ID
    path: "docs-system-admin",       // Source folder
    routeBasePath: "/system-admin",  // URL path
    sidebarPath: "./sidebars-system-admin.ts",
  },
],
```

2. Remove the corresponding navbar item
3. Delete the folder (e.g., `docs-system-admin/`)
4. Delete the sidebar file (e.g., `sidebars-system-admin.ts`)

**To Add a New Doc Type:**

1. Create a new folder (e.g., `docs-api-reference/`)
2. Create a sidebar file (e.g., `sidebars-api-reference.ts`)
3. Add plugin configuration:
```typescript
[
  "@docusaurus/plugin-content-docs",
  {
    id: "api-reference",
    path: "docs-api-reference",
    routeBasePath: "/api-reference",
    sidebarPath: "./sidebars-api-reference.ts",
  },
],
```
4. Add navbar item

---

## Content Structure

### Folder Organization

Each documentation type has its own folder:

```
docs-user-guide/
├── intro.md                    # Landing page (required)
├── quick-start.md             # Getting started
├── folder-name/
│   ├── _category_.json        # Folder metadata
│   ├── page-1.md
│   └── page-2.md
└── another-folder/
    └── ...
```

### Page Frontmatter

Every markdown file should have frontmatter:

```markdown
---
title: Page Title
sidebar_label: Short Label
sidebar_position: 1
description: Page description for SEO
---

# Page Title

Your content here...
```

**Frontmatter Options:**
- `title` - Page title (appears in browser tab)
- `sidebar_label` - Label in sidebar (shorter than title)
- `sidebar_position` - Order in sidebar (1, 2, 3...)
- `description` - SEO meta description
- `hide_title` - Set to `true` to hide the title
- `hide_table_of_contents` - Set to `true` to hide TOC

### Category Configuration

Create `_category_.json` in folders to configure them:

```json
{
  "label": "Category Name",
  "position": 2,
  "collapsed": false,
  "description": "Category description"
}
```

### Internal Linking

Link to other pages using relative paths:

```markdown
<!-- Link to page in same folder -->
[Link text](./other-page.md)

<!-- Link to page in subfolder -->
[Link text](./subfolder/page.md)

<!-- Link to page in parent folder -->
[Link text](../page.md)

<!-- Link to specific section -->
[Link text](./page.md#section-heading)
```

---

## Search Configuration

The template includes **context-aware search** that automatically filters results based on the current documentation type.

### How It Works

When viewing:
- **User Guide** → Searches only user guide docs
- **Developer Guide** → Searches only developer docs
- **System Admin Guide** → Searches only system admin docs
- **Homepage** → Searches all documentation

### Customizing Search

Search configuration is in `docusaurus.config.ts`:

```typescript
plugins: [
  [
    require.resolve("docusaurus-lunr-search"),
    {
      languages: ["en"],                    // Add more languages if needed
      indexBaseUrl: true,
      enableHighlight: true,
      searchResultLimits: 8,               // Max results to show
      searchResultContextMaxLength: 50,    // Preview text length
      filterByDocId: true,                 // Enable doc-type filtering
    },
  ],
],
```

### Search Customization Files

- `src/components/SearchBar/SearchBar.js` - Main search component
- `src/components/SearchBar/SearchBar.css` - Search styling
- `src/theme/SearchBar.js` - Theme override
- `src/client/searchInit.js` - Search initialization

For detailed search customization, see [SEARCH-CONFIGURATION.md](SEARCH-CONFIGURATION.md).

---

## Theme Customization

### Changing Colors

Edit `src/css/custom.css`:

```css
:root {
  /* Primary color (used for links, buttons, etc.) */
  --ifm-color-primary: #3581B8;        /* Main brand color */
  --ifm-color-primary-dark: #2B6A94;   /* Slightly darker */
  --ifm-color-primary-darker: #215270; /* Even darker */
  --ifm-color-primary-darkest: #183B4C;/* Darkest */
  --ifm-color-primary-light: #4998D1;  /* Slightly lighter */
  --ifm-color-primary-lighter: #5DAFEA;/* Even lighter */
  --ifm-color-primary-lightest: #71C6FF;/* Lightest */
}
```

**Quick Color Change:**
Replace `#3581B8` with your brand color, then use a [color shades generator](https://noeldelgado.github.io/shadowlord/) to create the variants.

### Dark Mode Colors

Update dark mode colors:

```css
[data-theme="dark"] {
  --ifm-color-primary: #4998D1;
  /* ... other dark mode colors */
}
```

### Other Styling

The template includes custom styling for:
- Image borders
- Table headers
- Card components
- Hover effects

See [THEME-CUSTOMIZATION.md](THEME-CUSTOMIZATION.md) for detailed styling options.

---

## Adding Custom Components

### Using Existing Components

#### Card Component

```jsx
import Card from '@site/src/components/Card';

<Card title="Card Title">
  Card content goes here
</Card>
```

#### Feature Flag Component

```jsx
import FeatureFlag from '@site/src/components/FeatureFlag';

<FeatureFlag flag="experimental_feature">
  This content only shows if the feature flag is enabled
</FeatureFlag>
```

### Creating New Components

1. Create a new file in `src/components/`:

```jsx
// src/components/MyComponent.js
import React from 'react';

export default function MyComponent({ children }) {
  return (
    <div className="my-component">
      {children}
    </div>
  );
}
```

2. Use in markdown:

```jsx
import MyComponent from '@site/src/components/MyComponent';

<MyComponent>
  Content here
</MyComponent>
```

See [CUSTOM-COMPONENTS.md](CUSTOM-COMPONENTS.md) for more examples.

---

## Deployment

### Building for Production

```bash
npm run build
```

Output is in the `build/` directory.

### Deployment Options

#### GitHub Pages

1. Set in `docusaurus.config.ts`:
```typescript
url: "https://username.github.io",
baseUrl: "/project-name/",
organizationName: "username",
projectName: "project-name",
```

2. Deploy:
```bash
GIT_USER=<your-username> npm run deploy
```

#### GitLab Pages

Add `.gitlab-ci.yml`:
```yaml
pages:
  stage: deploy
  script:
    - npm install
    - npm run build
    - mv build public
  artifacts:
    paths:
      - public
  only:
    - main
```

#### Netlify / Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

#### Custom Server

Upload the `build/` directory to your web server.

---

## Troubleshooting

### Search Not Working

1. Clear cache: `npm run clear`
2. Rebuild: `npm run build`
3. Check browser console for errors
4. See [SEARCH-CONFIGURATION.md](SEARCH-CONFIGURATION.md)

### Build Errors

1. Delete `node_modules/` and `.docusaurus/`
2. Reinstall: `npm install`
3. Clear cache: `npm run clear`
4. Build: `npm run build`

### TypeScript Errors

Run type checking:
```bash
npm run typecheck
```

Fix any reported issues in `.ts` files.

### Broken Links

Docusaurus will warn about broken links during build. Check the output and fix any broken relative links.

### Images Not Showing

- Ensure images are in `static/` folder
- Reference with absolute path: `![Alt text](/img/image.png)`
- Or place in same folder and use relative: `![Alt text](./image.png)`

---

## Environment Variables

Use environment variables for different deployment scenarios:

```bash
# Development
npm start

# Production with custom URL
DOCS_URL=https://docs.myapp.com DOCS_BASE_URL=/ npm run build

# Subdirectory deployment
DOCS_BASE_URL=/docs/ npm run build
```

---

## Next Steps

1. ✅ Update `docusaurus.config.ts` with your details
2. ✅ Update `package.json` name and description
3. ✅ Replace logos in `static/img/`
4. ✅ Remove sample content from `docs-*/` folders
5. ✅ Add your documentation content
6. ✅ Customize theme colors (optional)
7. ✅ Test build: `npm run build`
8. ✅ Deploy to your hosting provider

---

## Additional Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [React Components in MDX](https://docusaurus.io/docs/markdown-features/react)
- [Mermaid Diagrams](https://mermaid.js.org/)

**Need more help?** Check the other guide files:
- [CONTENT-STRUCTURE.md](CONTENT-STRUCTURE.md)
- [SEARCH-CONFIGURATION.md](SEARCH-CONFIGURATION.md)
- [MERMAID-GUIDE.md](MERMAID-GUIDE.md)
- [CUSTOM-COMPONENTS.md](CUSTOM-COMPONENTS.md)
- [THEME-CUSTOMIZATION.md](THEME-CUSTOMIZATION.md)
