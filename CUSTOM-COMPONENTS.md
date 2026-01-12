# Custom Components Guide

This template includes several custom React components that enhance your documentation with interactive and styled elements.

## Available Components

1. [Card Component](#card-component)
2. [CardContainer Component](#cardcontainer-component)
3. [FeatureFlag Component](#featureflag-component)
4. [HomepageFeatures](#homepagefeatures)

---

## Card Component

A styled card component for highlighting content, creating callouts, or organizing information visually.

### Location
`src/components/Card.js` and `src/components/Card.module.css`

### Basic Usage

```jsx
import Card from '@site/src/components/Card';

<Card title="Important Information">
  This content will appear in a styled card with a title.
</Card>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | No | Card title/heading |
| `children` | ReactNode | Yes | Card content |
| `className` | string | No | Additional CSS classes |

### Examples

#### Simple Card
```jsx
import Card from '@site/src/components/Card';

<Card title="Quick Tip">
  Always test your code before deploying to production.
</Card>
```

#### Card Without Title
```jsx
import Card from '@site/src/components/Card';

<Card>
  This card has no title, just content.
</Card>
```

#### Multiple Cards
```jsx
import Card from '@site/src/components/Card';

<div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
  <Card title="Feature 1">
    Description of feature 1
  </Card>
  <Card title="Feature 2">
    Description of feature 2
  </Card>
  <Card title="Feature 3">
    Description of feature 3
  </Card>
</div>
```

### Styling

The Card component uses CSS modules. Customize by modifying `src/components/Card.module.css`:

```css
.card {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  /* Customize these styles */
}
```

---

## CardContainer Component

A wrapper component for displaying multiple cards in a responsive grid layout.

### Location
`src/components/CardContainer.js`

### Basic Usage

```jsx
import CardContainer from '@site/src/components/CardContainer';
import Card from '@site/src/components/Card';

<CardContainer>
  <Card title="Card 1">Content 1</Card>
  <Card title="Card 2">Content 2</Card>
  <Card title="Card 3">Content 3</Card>
</CardContainer>
```

### Features
- Responsive grid layout
- Automatically adjusts columns based on screen size
- Consistent spacing between cards

---

## FeatureFlag Component

Conditionally render content based on feature flags loaded from a configuration file. Useful for:
- Beta features
- Environment-specific content
- A/B testing documentation
- Gradual rollouts

### Location
`src/components/FeatureFlag.js`

### Configuration

Feature flags are loaded from `static/dev-config.json`:

```json
{
  "feature_flags": {
    "experimental_feature": true,
    "beta_docs": false,
    "advanced_mode": true
  }
}
```

### Basic Usage

```jsx
import FeatureFlag from '@site/src/components/FeatureFlag';

<FeatureFlag flag="experimental_feature">
  This content only shows if experimental_feature is enabled.
</FeatureFlag>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `flag` | string | Yes | - | Feature flag key to check |
| `children` | ReactNode | Yes | - | Content to show when enabled |
| `fallback` | ReactNode | No | null | Content to show when disabled |
| `inverse` | boolean | No | false | If true, shows children when flag is disabled |

### Examples

#### Basic Feature Flag
```jsx
import FeatureFlag from '@site/src/components/FeatureFlag';

<FeatureFlag flag="beta_docs">
  <div className="alert alert--info">
    This is beta documentation. Features may change.
  </div>
</FeatureFlag>
```

#### With Fallback Content
```jsx
import FeatureFlag from '@site/src/components/FeatureFlag';

<FeatureFlag 
  flag="advanced_mode"
  fallback={<p>Advanced features are not available in your version.</p>}
>
  <h3>Advanced Configuration</h3>
  <p>Detailed advanced settings...</p>
</FeatureFlag>
```

#### Inverse Flag (Show When Disabled)
```jsx
import FeatureFlag from '@site/src/components/FeatureFlag';

<FeatureFlag flag="maintenance_mode" inverse={true}>
  <div className="alert alert--success">
    All systems operational!
  </div>
</FeatureFlag>
```

#### Multiple Flags
```jsx
import FeatureFlag from '@site/src/components/FeatureFlag';

<FeatureFlag flag="feature_a">
  <section>Content for Feature A</section>
</FeatureFlag>

<FeatureFlag flag="feature_b">
  <section>Content for Feature B</section>
</FeatureFlag>
```

### Error Handling

The FeatureFlag component gracefully handles errors:
- If config file fails to load, content is shown by default
- If flag doesn't exist, treated as disabled
- Shows loading state while fetching config

### Best Practices

1. **Use descriptive flag names**
   ```jsx
   ✅ <FeatureFlag flag="new_authentication_docs">
   ❌ <FeatureFlag flag="flag1">
   ```

2. **Provide fallback for better UX**
   ```jsx
   <FeatureFlag flag="premium_feature" fallback={<p>Upgrade to access this feature.</p>}>
     {/* Premium content */}
   </FeatureFlag>
   ```

3. **Document your flags**
   Keep a reference of all flags in your config file with comments:
   ```json
   {
     "feature_flags": {
       // Beta documentation for new API
       "api_v2_docs": false,
       // Advanced admin features
       "admin_advanced": true
     }
   }
   ```

---

## HomepageFeatures

A component for displaying feature highlights on the homepage with icons and descriptions.

### Location
`src/components/HomepageFeatures/index.tsx`

### Usage

Edit the features array in the component file:

```typescript
const FeatureList: FeatureItem[] = [
  {
    title: 'Feature Title',
    Svg: require('@site/static/img/feature-icon.svg').default,
    description: (
      <>
        Feature description goes here.
      </>
    ),
  },
  // Add more features
];
```

### Customization

#### Change Layout
Modify the grid in `styles.module.css`:
```css
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Change to 2 or 4 */
  gap: 2rem;
}
```

#### Add Icons
1. Place SVG files in `static/img/`
2. Reference in the feature:
   ```typescript
   Svg: require('@site/static/img/your-icon.svg').default,
   ```

#### Change Colors
Edit `src/components/HomepageFeatures/styles.module.css`

---

## Creating Custom Components

### Step 1: Create Component File

Create a new file in `src/components/`:

```jsx
// src/components/MyComponent.js
import React from 'react';
import styles from './MyComponent.module.css';

export default function MyComponent({ title, children }) {
  return (
    <div className={styles.myComponent}>
      {title && <h3>{title}</h3>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
```

### Step 2: Create Styles (Optional)

Create a CSS module:

```css
/* src/components/MyComponent.module.css */
.myComponent {
  border: 2px solid var(--ifm-color-primary);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}

.content {
  margin-top: 0.5rem;
}
```

### Step 3: Use in Documentation

```jsx
import MyComponent from '@site/src/components/MyComponent';

<MyComponent title="Custom Component">
  Your content here
</MyComponent>
```

---

## Component Best Practices

### 1. Use TypeScript (Recommended)

```typescript
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function MyComponent({ 
  title, 
  children, 
  variant = 'primary' 
}: MyComponentProps) {
  return (
    <div className={`component-${variant}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
```

### 2. Use CSS Modules

✅ Do this:
```jsx
import styles from './MyComponent.module.css';
<div className={styles.container}>
```

❌ Avoid this:
```jsx
<div className="container">
```

### 3. Make Components Reusable

```jsx
// Flexible and reusable
export default function Alert({ type, message, children }) {
  return (
    <div className={`alert alert--${type}`}>
      {message || children}
    </div>
  );
}
```

### 4. Add PropTypes or TypeScript

```jsx
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

MyComponent.defaultProps = {
  variant: 'primary',
};
```

### 5. Document Your Components

Add JSDoc comments:

```jsx
/**
 * Alert component for displaying notifications
 * @param {Object} props
 * @param {'info'|'warning'|'error'|'success'} props.type - Alert type
 * @param {ReactNode} props.children - Alert content
 * @returns {JSX.Element}
 */
export default function Alert({ type, children }) {
  // ...
}
```

---

## Using Components in MDX

### Import at Top of File

```mdx
---
title: My Page
---

import Card from '@site/src/components/Card';
import FeatureFlag from '@site/src/components/FeatureFlag';

# Page Title

<Card title="Note">
  Important information here
</Card>

<FeatureFlag flag="beta">
  Beta content
</FeatureFlag>
```

### Combining Components

```jsx
import Card from '@site/src/components/Card';
import FeatureFlag from '@site/src/components/FeatureFlag';

<FeatureFlag flag="advanced_features">
  <Card title="Advanced Features">
    These advanced features are only available when the flag is enabled.
  </Card>
</FeatureFlag>
```

---

## Styling Components

### Using CSS Variables

Access Docusaurus theme variables:

```css
.myComponent {
  background: var(--ifm-background-surface-color);
  color: var(--ifm-font-color-base);
  border-color: var(--ifm-color-primary);
}
```

### Common Theme Variables

```css
/* Colors */
--ifm-color-primary
--ifm-color-primary-dark
--ifm-color-primary-light
--ifm-background-color
--ifm-background-surface-color

/* Typography */
--ifm-font-color-base
--ifm-heading-color
--ifm-font-size-base

/* Spacing */
--ifm-spacing-horizontal
--ifm-spacing-vertical

/* Borders */
--ifm-color-emphasis-200
--ifm-color-emphasis-300
```

### Dark Mode Support

```css
.myComponent {
  background: var(--ifm-background-surface-color);
  /* Automatically adapts to dark mode */
}

/* Or use data-theme attribute */
[data-theme='dark'] .myComponent {
  border-color: #555;
}
```

---

## Troubleshooting

### Component Not Rendering

1. **Check import path:**
   ```jsx
   import MyComponent from '@site/src/components/MyComponent';
   ```

2. **Verify export:**
   ```jsx
   export default function MyComponent() { ... }
   ```

3. **Clear cache:**
   ```bash
   npm run clear
   npm start
   ```

### Styles Not Applying

1. **Use CSS modules:**
   - File: `MyComponent.module.css`
   - Import: `import styles from './MyComponent.module.css'`

2. **Check variable names:**
   ```jsx
   className={styles.myClass} // Camel case in JS
   ```
   ```css
   .myClass { } /* Stays the same in CSS */
   ```

### TypeScript Errors

1. **Install type definitions:**
   ```bash
   npm install --save-dev @types/react
   ```

2. **Add interface:**
   ```typescript
   interface Props {
     title: string;
     children: React.ReactNode;
   }
   ```

---

## Examples from This Template

### Card Component in Use

Check these files for real examples:
- `src/components/Card.js` - Component implementation
- `src/components/Card.module.css` - Styling

### FeatureFlag Component in Use

Check these files:
- `src/components/FeatureFlag.js` - Component implementation
- `src/utils/configLoader.js` - Config loading utility

---

## Resources

- [React Components in MDX](https://docusaurus.io/docs/markdown-features/react)
- [Styling and Layout](https://docusaurus.io/docs/styling-layout)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Docusaurus Theming](https://docusaurus.io/docs/styling-layout#theme-class-names)

---

For more information, see:
- [TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md)
- [THEME-CUSTOMIZATION.md](THEME-CUSTOMIZATION.md)
