# Docusaurus Multi-Documentation Template

A production-ready Docusaurus template featuring **three separate documentation types** (User Guide, Developer Guide, System Admin Guide) in one site, with advanced search, custom components, and beautiful LNDS-inspired theming.

## ✨ Key Features

- **🔍 Context-Aware Search** - Search filters automatically based on which documentation section you're viewing
- **📊 Mermaid Diagrams** - Built-in support for flowcharts, diagrams, and visualizations
- **🎨 Custom Components** - Cards, feature flags, and other reusable components
- **🎯 Multi-Doc Architecture** - Three separate documentation types with independent sidebars
- **🌗 Dark Mode** - Beautiful light and dark themes with LNDS color scheme
- **⚡ Hot Reload** - Fast development experience with instant updates
- **📱 Fully Responsive** - Works perfectly on all devices
- **🔧 TypeScript** - Full TypeScript support for configuration

## 🚀 Quick Start

### Prerequisites

- **Node.js** version 18 or higher
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone or copy this template**
   ```bash
   git clone <your-template-repo-url>
   cd docusaurus-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

   Opens at `http://localhost:3000` with live reload.

4. **Customize for your project** - See [TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md) for detailed customization instructions.

## 📁 Template Structure

```
docusaurus-template/
├── README.md                          # This file
├── TEMPLATE-GUIDE.md                  # Comprehensive customization guide
├── CONTENT-STRUCTURE.md               # Content organization guide
├── SEARCH-CONFIGURATION.md            # Search setup and customization
├── MERMAID-GUIDE.md                   # Mermaid diagram guide
├── CUSTOM-COMPONENTS.md               # Custom components documentation
├── THEME-CUSTOMIZATION.md             # Theme and styling guide
├── package.json                       # Dependencies
├── docusaurus.config.ts              # Main configuration (customize this!)
├── tsconfig.json                      # TypeScript config
│
├── docs-user-guide/                   # User-facing documentation
├── docs-developer/                    # Developer documentation
├── docs-system-admin/                 # Admin documentation
│
├── src/                               # Custom components and styling
│   ├── components/                    # Reusable React components
│   ├── css/                          # Custom CSS and themes
│   ├── pages/                        # Custom pages (homepage)
│   └── theme/                        # Theme overrides
│
└── static/                           # Static assets (images, files)
    └── img/                          # Images and icons
```

## 📚 Available Scripts

```bash
npm start          # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run serve      # Preview production build locally
npm run clear      # Clear Docusaurus cache
npm run typecheck  # Run TypeScript type checking
```

## 🎯 Three Documentation Types

This template supports three separate documentation sections:

1. **User Guide** (`/user-guide/`)
   - End-user documentation
   - How-to guides
   - Feature explanations

2. **Developer Guide** (`/developer/`)
   - Technical documentation
   - API references
   - Development setup

3. **System Admin Guide** (`/system-admin/`)
   - Configuration guides
   - Deployment instructions
   - Architecture overviews

Each section has its own sidebar and can be navigated independently.

## 🔍 Context-Aware Search

The template includes a **custom search implementation** that:
- Automatically filters results based on which documentation section you're viewing
- Searches all documentation when on the homepage
- Provides instant results as you type
- Includes fallback loading for reliability

## 📖 Documentation Guides

For detailed setup and customization instructions, see:

- **[TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md)** - Complete setup and customization guide
- **[CONTENT-STRUCTURE.md](CONTENT-STRUCTURE.md)** - How to organize your documentation
- **[SEARCH-CONFIGURATION.md](SEARCH-CONFIGURATION.md)** - Configure and customize search
- **[MERMAID-GUIDE.md](MERMAID-GUIDE.md)** - Create diagrams and flowcharts
- **[CUSTOM-COMPONENTS.md](CUSTOM-COMPONENTS.md)** - Use and extend custom components
- **[THEME-CUSTOMIZATION.md](THEME-CUSTOMIZATION.md)** - Customize colors and styling

## 🎨 Customization Steps

1. **Update `docusaurus.config.ts`**
   - Replace project name, URL, and organization details
   - See placeholders marked with `{{VARIABLE_NAME}}`

2. **Update `package.json`**
   - Change project name and description

3. **Replace logos and favicon**
   - Add your images to `static/img/`
   - Update references in config

4. **Add your content**
   - Replace sample docs with your documentation
   - Follow the existing structure

5. **Customize theme** (optional)
   - Modify colors in `src/css/custom.css`
   - See [THEME-CUSTOMIZATION.md](THEME-CUSTOMIZATION.md)

## 🌐 Deployment

This template can be deployed to:

- **GitHub Pages**
- **GitLab Pages**
- **Netlify**
- **Vercel**
- **AWS S3 + CloudFront**
- Any static hosting provider

Build the site:
```bash
npm run build
```

Output will be in the `build/` directory. Upload this to your hosting provider.

For detailed deployment instructions, see the [Docusaurus deployment documentation](https://docusaurus.io/docs/deployment).

## 📦 Dependencies

This template uses:
- **Docusaurus 3.9.2** - Static site generator
- **React 19** - UI framework
- **TypeScript 5** - Type safety
- **Mermaid** - Diagram support
- **Lunr Search** - Client-side search

All dependencies are maintained and up-to-date.

## 🤝 Contributing

When using this template for your project:

1. Remove or update this README
2. Update all configuration files with your details
3. Replace sample content with your documentation
4. Test the build process
5. Deploy to your preferred hosting

## 📄 License

This template is provided as-is. When customizing for your project, update the license information appropriately.

## 🆘 Need Help?

- **Template Issues** - Check [TEMPLATE-GUIDE.md](TEMPLATE-GUIDE.md)
- **Docusaurus Documentation** - https://docusaurus.io/docs
- **Search Issues** - See [SEARCH-CONFIGURATION.md](SEARCH-CONFIGURATION.md)
- **Styling Issues** - See [THEME-CUSTOMIZATION.md](THEME-CUSTOMIZATION.md)

---

**Ready to build amazing documentation!** 🚀
