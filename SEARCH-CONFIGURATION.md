# Search Configuration Guide

This template includes a **custom context-aware search** feature that automatically filters results based on which documentation section you're viewing.

## How Context-Aware Search Works

### Automatic Filtering

The search bar automatically adjusts based on your current location:

| Location | Search Scope | Placeholder Text |
|----------|--------------|------------------|
| User Guide pages (`/user-guide/`) | Only User Guide docs | "Search User Guide..." |
| Developer pages (`/developer/`) | Only Developer docs | "Search Developer Guide..." |
| System Admin pages (`/system-admin/`) | Only System Admin docs | "Search System Admin Guide..." |
| Homepage or other pages | All documentation | "Search All Documentation..." |

### Why Context-Aware?

- **Faster results** - Fewer documents to search through
- **More relevant** - Results match your current context
- **Better UX** - Users find what they need quickly

---

## Search Architecture

### Components

The search functionality consists of several integrated parts:

#### 1. **Lunr Search Plugin** (`docusaurus.config.ts`)
```typescript
[
  require.resolve("docusaurus-lunr-search"),
  {
    languages: ["en"],
    indexBaseUrl: true,
    enableHighlight: true,
    searchResultLimits: 8,
    searchResultContextMaxLength: 50,
    filterByDocId: true,  // ← Enables context filtering
  },
],
```

#### 2. **Custom SearchBar Component** (`src/components/SearchBar/SearchBar.js`)
- Detects current doc section from URL
- Filters search results based on context
- Provides fallback loading mechanism
- Handles debouncing (300ms delay)

#### 3. **Theme Override** (`src/theme/SearchBar.js`)
- Replaces default Docusaurus search with custom component
- Maintains consistent integration

#### 4. **Search Initialization** (`src/client/searchInit.js`)
- Initializes Lunr search on page load
- Provides fallback loading
- Handles retries and error cases

#### 5. **Search Styling** (`src/components/SearchBar/SearchBar.css`)
- Custom search UI styling
- Results dropdown
- Loading states

---

## Customization Options

### 1. Change Result Limit

Modify the maximum number of results displayed:

**In `docusaurus.config.ts`:**
```typescript
searchResultLimits: 8,  // Change to 5, 10, 15, etc.
```

**In `src/components/SearchBar/SearchBar.js`:**
```javascript
setResults(filteredResults.slice(0, 8)); // Match the config value
```

### 2. Adjust Preview Length

Change how much text appears in result previews:

**In `docusaurus.config.ts`:**
```typescript
searchResultContextMaxLength: 50,  // Characters to show
```

**In `src/components/SearchBar/SearchBar.js`:**
```javascript
{result.content && result.content.substring(0, 100)}...  // Adjust number
```

### 3. Change Debounce Delay

Modify how long to wait after typing stops before searching:

**In `src/components/SearchBar/SearchBar.js`:**
```javascript
const timer = setTimeout(() => {
  performSearch(query);
}, 300);  // Change to 200, 500, etc. (milliseconds)
```

### 4. Add Multi-Language Support

**In `docusaurus.config.ts`:**
```typescript
[
  require.resolve("docusaurus-lunr-search"),
  {
    languages: ["en", "fr", "de"],  // Add language codes
    // ... other options
  },
],
```

### 5. Disable Context-Aware Filtering

To search all docs regardless of location:

**In `src/components/SearchBar/SearchBar.js`:**
```javascript
const filterResults = (searchResults) => {
  return searchResults;  // Return all results without filtering
};
```

Or remove this line from config:
```typescript
filterByDocId: true,  // Remove or set to false
```

### 6. Customize Search Placeholder

**In `src/components/SearchBar/SearchBar.js`:**
```javascript
const getSectionLabel = () => {
  const section = getCurrentSection();
  switch (section) {
    case 'user-guide':
      return 'User Guide';  // Change label here
    case 'system-admin':
      return 'System Admin Guide';  // Change label here
    case 'developer':
      return 'Developer Guide';  // Change label here
    default:
      return 'All Documentation';  // Change label here
  }
};
```

---

## Adding Search to New Doc Types

If you add a new documentation type (e.g., "API Reference"), update the search logic:

### Step 1: Add Plugin Configuration

**In `docusaurus.config.ts`:**
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

### Step 2: Update Search Component

**In `src/components/SearchBar/SearchBar.js`:**

Add to `getCurrentSection()`:
```javascript
const getCurrentSection = () => {
  const pathname = location.pathname;
  
  if (pathname.startsWith('/user-guide/')) {
    return 'user-guide';
  } else if (pathname.startsWith('/system-admin/')) {
    return 'system-admin';
  } else if (pathname.startsWith('/developer/')) {
    return 'developer';
  } else if (pathname.startsWith('/api-reference/')) {  // ← Add this
    return 'api-reference';
  }
  return 'all';
};
```

Add to `filterResults()`:
```javascript
const filterResults = (searchResults) => {
  const currentSection = getCurrentSection();
  
  if (currentSection === 'all') {
    return searchResults;
  }
  
  return searchResults.filter(result => {
    const resultPath = result.route || result.url || '';
    
    switch (currentSection) {
      case 'user-guide':
        return resultPath.startsWith('/user-guide/');
      case 'system-admin':
        return resultPath.startsWith('/system-admin/');
      case 'developer':
        return resultPath.startsWith('/developer/');
      case 'api-reference':  // ← Add this
        return resultPath.startsWith('/api-reference/');
      default:
        return true;
    }
  });
};
```

Add to `getSectionLabel()`:
```javascript
const getSectionLabel = () => {
  const section = getCurrentSection();
  switch (section) {
    case 'user-guide':
      return 'User Guide';
    case 'system-admin':
      return 'System Admin Guide';
    case 'developer':
      return 'Developer Guide';
    case 'api-reference':  // ← Add this
      return 'API Reference';
    default:
      return 'All Documentation';
  }
};
```

---

## Search Styling

### Customizing Search Appearance

Edit `src/components/SearchBar/SearchBar.css`:

```css
/* Search input */
.navbar__search-input {
  width: 200px;  /* Adjust width */
  padding: 8px 12px;
  /* ... other styles */
}

/* Results dropdown */
.navbar__search-results {
  max-height: 400px;  /* Adjust height */
  width: 400px;       /* Adjust width */
  /* ... other styles */
}

/* Individual result items */
.navbar__search-result-item {
  padding: 12px;  /* Adjust spacing */
  /* ... other styles */
}
```

---

## Troubleshooting

### Search Not Working

**1. Check if search index is built:**
```bash
npm run build
# Check if build/search-doc.json and build/lunr-index.json exist
```

**2. Clear cache and rebuild:**
```bash
npm run clear
npm install
npm run build
```

**3. Check browser console:**
- Open DevTools (F12)
- Look for search-related errors
- Check if lunrIndex and lunrSearchDoc are defined:
  ```javascript
  console.log(window.lunrIndex);
  console.log(window.lunrSearchDoc);
  ```

### No Results Found

**1. Verify content is indexed:**
- Ensure pages have proper frontmatter
- Check that pages are not excluded from build
- Verify page content is searchable (not just images/diagrams)

**2. Check search query:**
- Try simpler queries
- Remove special characters
- Use different keywords

### Search Results Not Filtered

**1. Verify `filterByDocId` is enabled:**
```typescript
filterByDocId: true,  // In docusaurus.config.ts
```

**2. Check URL routing:**
- Ensure doc paths match filter logic
- Verify `routeBasePath` in doc plugins

### Slow Search Performance

**1. Reduce result limits:**
```typescript
searchResultLimits: 5,  // Lower number
```

**2. Increase debounce delay:**
```javascript
}, 500);  // Higher delay (milliseconds)
```

**3. Reduce indexed content:**
```typescript
searchResultContextMaxLength: 30,  // Shorter previews
```

### Search Bar Not Visible

**1. Check navbar configuration:**
```typescript
{
  type: "search",
  position: "right",
},
```

**2. Verify theme override:**
- Check `src/theme/SearchBar.js` exists
- Ensure it exports the custom component

---

## Performance Optimization

### Best Practices

1. **Limit search scope** - Use context filtering
2. **Optimize content** - Keep page content focused
3. **Reasonable limits** - Don't index everything
4. **Debounce searches** - Avoid searching on every keystroke
5. **Cache results** - Lunr builds index once per session

### Monitoring Search Performance

Add console logging to measure:

```javascript
const performSearch = async (searchQuery) => {
  const startTime = performance.now();
  
  // ... search logic ...
  
  const endTime = performance.now();
  console.log(`Search took ${endTime - startTime}ms`);
};
```

---

## Advanced Features

### Custom Search Ranking

Modify result ranking in `SearchBar.js`:

```javascript
const formattedResults = searchResults
  .map(result => ({
    ...result,
    score: result.score * customRankingFactor(result),
  }))
  .sort((a, b) => b.score - a.score);
```

### Search Analytics

Track search queries:

```javascript
const performSearch = async (searchQuery) => {
  // Log search query
  if (window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchQuery,
    });
  }
  
  // ... rest of search logic ...
};
```

### Keyboard Shortcuts

Add keyboard navigation (already implemented):
- **Type to search** - Auto-focus on typing
- **Escape** - Close results
- **Click outside** - Close results

---

## Summary

The custom search implementation provides:

✅ **Context-aware filtering** - Results match current doc section  
✅ **Fast client-side search** - No server required  
✅ **Fallback loading** - Reliable initialization  
✅ **Customizable UI** - Styled search experience  
✅ **Multi-doc support** - Works with multiple doc types  
✅ **Performance optimized** - Debounced, limited results  

For more information:
- [Docusaurus Lunr Search Plugin](https://github.com/praveenn77/docusaurus-lunr-search)
- [Lunr.js Documentation](https://lunrjs.com/)
- [TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md)
