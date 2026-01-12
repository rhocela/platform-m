# Content Structure Guide

This guide explains how to organize and structure your documentation content effectively.

## Overview

The template supports three documentation types, each with its own folder and routing:

| Doc Type | Folder | URL Path | Purpose |
|----------|--------|----------|---------|
| User Guide | `docs-user-guide/` | `/user-guide/` | End-user documentation |
| Developer Guide | `docs-developer/` | `/developer/` | Technical documentation |
| System Admin Guide | `docs-system-admin/` | `/system-admin/` | Configuration & deployment |

---

## When to Use Each Documentation Type

### User Guide (`docs-user-guide/`)

**Best for:**
- Feature explanations
- How-to guides
- Tutorials
- FAQ
- Getting started guides
- Best practices for end users

**Target Audience:** Product users, non-technical stakeholders

**Example Topics:**
- "How to create a dataset"
- "Managing your account"
- "Understanding permissions"
- "Quick start guide"

### Developer Guide (`docs-developer/`)

**Best for:**
- API documentation
- SDK references
- Development environment setup
- Code examples
- Integration guides
- Technical architecture
- Contributing guidelines

**Target Audience:** Software developers, technical integrators

**Example Topics:**
- "API Reference"
- "Setting up development environment"
- "Authentication flows"
- "Code examples"
- "Testing guidelines"

### System Admin Guide (`docs-system-admin/`)

**Best for:**
- Installation instructions
- Configuration guides
- Deployment strategies
- System requirements
- Security settings
- Monitoring and maintenance
- Troubleshooting

**Target Audience:** System administrators, DevOps engineers

**Example Topics:**
- "Deployment guide"
- "Environment variables"
- "Database configuration"
- "Security best practices"
- "Backup and recovery"

---

## Folder Structure Best Practices

### Basic Structure

```
docs-[type]/
├── intro.md                    # Landing page (required)
├── quick-start.md              # Getting started (recommended)
├── concepts/                   # Conceptual information
│   ├── _category_.json
│   ├── concept-1.md
│   └── concept-2.md
├── guides/                     # Step-by-step guides
│   ├── _category_.json
│   ├── guide-1.md
│   └── guide-2.md
└── reference/                  # Reference material
    ├── _category_.json
    └── api-reference.md
```

### Recommended Organization Patterns

#### By Task (Task-Oriented)
```
docs-user-guide/
├── intro.md
├── get-started/
├── create-content/
├── manage-content/
├── publish-content/
└── advanced-features/
```

Best for: User guides, how-to documentation

#### By Feature (Feature-Oriented)
```
docs-user-guide/
├── intro.md
├── authentication/
├── data-management/
├── reporting/
├── integrations/
└── security/
```

Best for: Feature-rich applications

#### By Workflow (Process-Oriented)
```
docs-user-guide/
├── intro.md
├── onboarding/
├── daily-operations/
├── collaboration/
├── administration/
└── troubleshooting/
```

Best for: Workflow-heavy applications

#### Hybrid Approach (Recommended)
```
docs-user-guide/
├── intro.md
├── quick-start.md
├── key-concepts/              # Understand the basics
├── get-started/               # First steps
├── feature-guides/            # Feature-by-feature guides
│   ├── feature-a/
│   ├── feature-b/
│   └── feature-c/
├── how-to/                    # Task-oriented guides
└── reference/                 # Reference material
```

---

## File Naming Conventions

### Recommended Naming

Use **lowercase with hyphens** (kebab-case):

✅ **Good:**
- `quick-start.md`
- `create-new-dataset.md`
- `api-authentication.md`
- `set-up-environment.md`

❌ **Avoid:**
- `QuickStart.md` (PascalCase)
- `quick_start.md` (snake_case)
- `Quick Start.md` (spaces)
- `quickstart.md` (no separators - hard to read)

### Special Files

- `intro.md` or `index.md` - Landing page for each doc type
- `_category_.json` - Folder configuration (starts with underscore)
- `CHANGELOG.md` - Version history (UPPERCASE)
- `README.md` - Additional information (UPPERCASE)

---

## Page Structure

### Frontmatter

Every page should include frontmatter:

```markdown
---
title: Complete Page Title
sidebar_label: Short Label
sidebar_position: 1
description: Brief description for SEO
---

# Page Heading

Content starts here...
```

### Page Components

#### 1. Title and Introduction
```markdown
# Page Title

Brief introduction explaining what this page covers.
```

#### 2. Table of Contents (auto-generated)
Docusaurus automatically generates TOC from headings.

#### 3. Main Content
```markdown
## Section 1

Content for section 1...

### Subsection 1.1

Detailed information...

## Section 2

Content for section 2...
```

#### 4. Related Links (optional)
```markdown
## Related Topics

- [Related Page 1](./related-page-1.md)
- [Related Page 2](./related-page-2.md)
```

### Heading Hierarchy

Use proper heading levels:

```markdown
# Page Title (H1) - One per page
## Main Section (H2)
### Subsection (H3)
#### Sub-subsection (H4)
##### Minor heading (H5)
###### Smallest heading (H6)
```

**Best Practices:**
- Only one H1 per page
- Don't skip levels (don't go from H2 to H4)
- Keep hierarchy logical and consistent

---

## Content Organization Strategies

### Progressive Disclosure

Structure content from simple to complex:

1. **Getting Started** - Basic concepts
2. **Core Features** - Main functionality
3. **Advanced Topics** - Complex scenarios
4. **Reference** - Detailed specifications

### Information Types

#### Conceptual (Understanding)
*What is it? Why does it matter?*

```markdown
# Understanding Roles and Permissions

Roles define what actions users can perform...
```

#### Procedural (Doing)
*How do I do it?*

```markdown
# How to Create a New Dataset

1. Navigate to the Datasets page
2. Click "New Dataset"
3. Fill in the required fields
4. Click "Save"
```

#### Reference (Looking Up)
*What are the details?*

```markdown
# API Endpoints

## GET /api/datasets
Returns a list of all datasets...
```

#### Troubleshooting (Problem-Solving)
*What if something goes wrong?*

```markdown
# Troubleshooting Login Issues

**Problem:** Cannot log in
**Solution:** Check your credentials...
```

---

## Category Configuration

### `_category_.json`

Place this file in folders to configure how they appear in the sidebar:

```json
{
  "label": "Getting Started",
  "position": 1,
  "collapsed": false,
  "description": "Get started with the basics",
  "link": {
    "type": "generated-index",
    "title": "Getting Started",
    "description": "Learn the fundamentals of using our application."
  }
}
```

**Options:**
- `label` - Display name in sidebar
- `position` - Order (1, 2, 3...)
- `collapsed` - `false` to show expanded by default
- `description` - Category description
- `link` - Auto-generate index page for the category

### Generated Index Pages

Auto-generate a landing page that lists all pages in a category:

```json
{
  "label": "User Guides",
  "link": {
    "type": "generated-index",
    "title": "User Guides",
    "description": "Step-by-step guides for common tasks.",
    "slug": "/user-guides"
  }
}
```

---

## Linking Strategies

### Internal Links

#### Relative Links (Recommended)
```markdown
<!-- Same folder -->
[Link text](./page.md)

<!-- Subfolder -->
[Link text](./subfolder/page.md)

<!-- Parent folder -->
[Link text](../page.md)

<!-- Specific section -->
[Link text](./page.md#section-heading)
```

#### Absolute Links
```markdown
[Link text](/user-guide/page)
```

### External Links

```markdown
[External link](https://example.com)
```

External links automatically open in a new tab.

### Link Best Practices

- ✅ Use descriptive link text: `[create a dataset](./create-dataset.md)`
- ❌ Avoid generic text: `[click here](./page.md)`
- ✅ Link to relevant resources
- ✅ Verify links work before publishing

---

## Content Reuse

### Using MDX Components

Import and reuse components across pages:

```jsx
import Card from '@site/src/components/Card';

<Card title="Important Note">
  This content appears in a styled card.
</Card>
```

### Partial Content

Create reusable content snippets:

```markdown
<!-- docs-user-guide/_partials/prerequisites.md -->
## Prerequisites

- Node.js 18+
- npm or yarn
```

Use in multiple pages:

```jsx
import Prerequisites from './_partials/prerequisites.md';

<Prerequisites />
```

---

## Example Structures

### Small Project (10-20 pages)

```
docs-user-guide/
├── intro.md
├── quick-start.md
├── features.md
├── faq.md
└── troubleshooting.md
```

### Medium Project (20-50 pages)

```
docs-user-guide/
├── intro.md
├── quick-start.md
├── getting-started/
│   ├── installation.md
│   ├── configuration.md
│   └── first-steps.md
├── guides/
│   ├── guide-1.md
│   ├── guide-2.md
│   └── guide-3.md
├── reference/
│   └── api.md
└── faq.md
```

### Large Project (50+ pages)

```
docs-user-guide/
├── intro.md
├── quick-start.md
├── concepts/
│   ├── _category_.json
│   ├── concept-1.md
│   └── concept-2.md
├── getting-started/
│   ├── _category_.json
│   ├── installation.md
│   └── configuration.md
├── feature-a/
│   ├── _category_.json
│   ├── overview.md
│   ├── tutorial.md
│   └── advanced.md
├── feature-b/
│   └── ...
├── how-to/
│   ├── _category_.json
│   └── ...
├── reference/
│   ├── _category_.json
│   └── ...
└── troubleshooting/
    ├── _category_.json
    └── ...
```

---

## Migration Tips

### Moving from Other Platforms

#### From Confluence
- Export as Markdown
- Update internal links
- Convert macros to MDX components
- Update image paths

#### From GitBook
- Similar structure, minimal changes needed
- Update link syntax
- Convert GitBook-specific features

#### From MkDocs
- Similar Markdown syntax
- Update frontmatter format
- Adjust navigation structure

---

## Best Practices Summary

1. ✅ **One concept per page** - Keep pages focused
2. ✅ **Consistent structure** - Use similar patterns across pages
3. ✅ **Clear hierarchy** - Logical folder and heading organization
4. ✅ **Descriptive names** - Files and folders should be self-explanatory
5. ✅ **Progressive disclosure** - Start simple, add complexity gradually
6. ✅ **Cross-reference** - Link related topics
7. ✅ **Regular review** - Keep content up-to-date
8. ✅ **User-focused** - Write for your audience

---

## Checklist for New Content

- [ ] Frontmatter is complete and accurate
- [ ] Headings follow proper hierarchy
- [ ] All links work and point to correct pages
- [ ] Images have alt text
- [ ] Code examples are tested
- [ ] Content is placed in the correct doc type
- [ ] Category configuration is set (if folder)
- [ ] Content is proofread and clear

---

For more information, see:
- [TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md) - Complete customization guide
- [Docusaurus Docs Structure](https://docusaurus.io/docs/docs-introduction)
