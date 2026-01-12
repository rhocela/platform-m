---
slug: /linking-example/
sidebar_label: "Linking Example"
sidebar_position: 15
description: "How to create and link pages in Docusaurus"
---

# Linking Between Pages

This page demonstrates the proper convention for creating pages and linking between them in Docusaurus.

## Defining a Page Slug

When creating a page, define a slug in the frontmatter:

```markdown
---
slug: /page-title/
sidebar_label: "Page Title"
sidebar_position: 10
---

# Page Title

Your content here...
```

## Linking to Pages

When linking to a page, use the full path including the doc section prefix:

### Internal Links in User Guide

```markdown
[Link to this page](/user-guide/linking-example/)
[Link to Getting Started](/user-guide/getting-started/)
[Link to Features](/user-guide/features/)
```

**Examples:**
- [Link to Getting Started](/user-guide/getting-started/)
- [Link to Features](/user-guide/features/)
- [Link to FAQ](/user-guide/faq/)

### Cross-Section Links

```markdown
[System Admin Docs](/system-admin/)
[Developer Docs](/developer/)
```

**Examples:**
- [System Admin Documentation](/system-admin/)
- [Developer Documentation](/developer/)

### Links to Subfolders

For pages in subfolders (like Task 1):

```markdown
[Task 1 Overview](/user-guide/task-1/)
[Sub-task 1](/user-guide/task-1/sub-task-1/)
```

**Examples:**
- [Task 1 Overview](/user-guide/task-1/)
- [Sub-task 1](/user-guide/task-1/sub-task-1/)

## Best Practices

1. **Always use trailing slashes** in slugs: `/page-title/` not `/page-title`
2. **Use full paths** when linking: `/user-guide/page-title/` not just `page-title`
3. **Use kebab-case** for slugs: `/my-page-title/` not `/My Page Title/`
4. **Match the slug to the filename** when possible for consistency

## Relative vs Absolute Links

### Absolute Links (Recommended)
```markdown
[Link](/user-guide/page-title/)
```
✅ Works from any page in any section

### Relative Links
```markdown
[Link](./page-title/)
```
⚠️ Only works within the same directory

## External Links

For external links, use standard markdown:

```markdown
[External Link](https://example.com)
```

Example: [Docusaurus Documentation](https://docusaurus.io)
