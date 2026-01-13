import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  // ============================================================================
  // BASIC SITE INFORMATION
  // Replace these values with your project's information
  // ============================================================================
  
  title: "Pseudonymisation Portal Documentation",                       // REPLACE: Your project name
  tagline: "Complete documentation for your project",        // REPLACE: Brief description of your project
  favicon: "img/favicon.svg",                                // Path to your favicon (update the file in static/img/)

  // ============================================================================
  // DEPLOYMENT CONFIGURATION
  // ============================================================================
  
  // REPLACE: Set your production URL
  // Examples: "https://docs.myproject.com" or "https://myorg.github.io"
  url: process.env.DOCS_URL || "https://your-docusaurus-site.example.com",
  
  // REPLACE: Set the base path where your site is served
  // "/" for root domain, "/docs/" for subdirectory
  baseUrl: process.env.DOCS_BASE_URL || "/",

  // ============================================================================
  // GITHUB/GITLAB PAGES CONFIGURATION
  // Only needed if deploying to GitHub Pages or GitLab Pages
  // ============================================================================
  
  organizationName: "your-organization",    // REPLACE: Your GitHub/GitLab organization or username
  projectName: "your-project-name",         // REPLACE: Your repository name

  // ============================================================================
  // ERROR HANDLING
  // ============================================================================
  
  onBrokenLinks: "warn",  // Options: "throw" (fail build), "warn" (show warning), "ignore"

  // ============================================================================
  // INTERNATIONALIZATION (i18n)
  // Add more locales if you need multi-language support
  // ============================================================================
  
  i18n: {
    defaultLocale: "en",
    locales: ["en"],  // Add more: ["en", "fr", "de", "es", etc.]
  },
  
  // ============================================================================
  // MARKDOWN CONFIGURATION
  // ============================================================================
  
  markdown: {
    mermaid: true,  // Enable Mermaid diagram support (DO NOT REMOVE - custom feature)
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  
  // ============================================================================
  // THEMES
  // Mermaid theme is required for diagram support (DO NOT REMOVE - custom feature)
  // ============================================================================
  
  themes: ["@docusaurus/theme-mermaid"],

  // ============================================================================
  // MAIN PRESET CONFIGURATION
  // The "classic" preset includes docs, blog, theme, and other plugins
  // ============================================================================
  
  presets: [
    [
      "classic",
      {
        // ------------------------------------------------------------------------
        // USER GUIDE DOCUMENTATION
        // This is the first/main documentation section
        // ------------------------------------------------------------------------
        docs: {
          id: "user-guide",                    // Internal ID for this doc section
          path: "docs-user-guide",             // Source folder
          routeBasePath: "/user-guide",        // URL path (change to "/" if this is your only doc type)
          sidebarPath: "./sidebars-user-guide.ts",
          
          // Optional: Filter out specific files from sidebar
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            // Example: Filter out documentation-tracker.md from sidebar
            // Remove or modify this filter as needed for your project
            return sidebarItems.filter((item) => item.type !== 'doc' || item.id !== 'documentation-tracker');
          },
        },
        
        blog: false,  // Set to true if you want a blog section
        
        theme: {
          customCss: "./src/css/custom.css",  // Custom CSS with LNDS theme colors
        },
      } satisfies Preset.Options,
    ],
  ],

  // ============================================================================
  // PLUGINS
  // ============================================================================
  
  plugins: [
    // --------------------------------------------------------------------------
    // LUNR SEARCH PLUGIN (DO NOT REMOVE - custom feature)
    // Provides client-side search with context-aware filtering
    // --------------------------------------------------------------------------
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en"],                      // Add more languages if needed: ["en", "fr", "de"]
        indexBaseUrl: true,
        enableHighlight: true,
        searchResultLimits: 8,                  // Maximum number of search results to display
        searchResultContextMaxLength: 50,       // Length of result preview text
        filterByDocId: true,                    // Enable context-aware search filtering (DO NOT REMOVE)
      },
    ],
    
    // --------------------------------------------------------------------------
    // SYSTEM ADMIN DOCUMENTATION (Optional - remove if not needed)
    // This creates a separate documentation section for system administrators
    // --------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "system-admin",                    // Internal ID
        path: "docs-system-admin",             // Source folder
        routeBasePath: "/system-admin",        // URL path
        sidebarPath: "./sidebars-system-admin.ts",
      },
    ],
    
    // --------------------------------------------------------------------------
    // DEVELOPER DOCUMENTATION (Optional - remove if not needed)
    // This creates a separate documentation section for developers
    // --------------------------------------------------------------------------
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "developer",                       // Internal ID
        path: "docs-developer",                // Source folder
        routeBasePath: "/developer",           // URL path
        sidebarPath: "./sidebars-developer.ts",
      },
    ],
    
    // --------------------------------------------------------------------------
    // To add a NEW documentation type, copy one of the above blocks and modify:
    // 1. Change the id, path, routeBasePath, and sidebarPath
    // 2. Create the corresponding folder (e.g., docs-api-reference/)
    // 3. Create the corresponding sidebar file (e.g., sidebars-api-reference.ts)
    // 4. Add a navbar item in the themeConfig section below
    // --------------------------------------------------------------------------
  ],

  // ============================================================================
  // CLIENT MODULES
  // Custom client-side modules (DO NOT REMOVE - required for search functionality)
  // ============================================================================
  
  clientModules: [
    require.resolve('./src/client/searchInit.js'),  // Search initialization
  ],

  // ============================================================================
  // THEME CONFIGURATION
  // ============================================================================
  
  themeConfig: {
    // --------------------------------------------------------------------------
    // NAVIGATION BAR
    // Top navigation bar configuration
    // --------------------------------------------------------------------------
    navbar: {
      title: "Pseudonymisation Portal",  // REPLACE: Title next to logo
      logo: {
        alt: "Pseudonymisation Portal Logo",           // REPLACE: Alt text for logo
        src: "img/logo.svg",                // Path to logo (update file in static/img/)
      },
      items: [
        // Link to User Guide (TEMPORARILY HIDDEN - uncomment to show)
        // {
        //   type: "docSidebar",
        //   sidebarId: "userGuideSidebar",        // Must match sidebar ID in sidebars-user-guide.ts
        //   docsPluginId: "user-guide",           // Must match doc plugin id above
        //   position: "right",
        //   label: "Users",                        // CUSTOMIZE: Display text
        // },
        
        // Link to System Admin Guide (TEMPORARILY HIDDEN - uncomment to show)
        // {
        //   type: "docSidebar",
        //   sidebarId: "systemAdminSidebar",      // Must match sidebar ID in sidebars-system-admin.ts
        //   docsPluginId: "system-admin",         // Must match doc plugin id above
        //   position: "right",
        //   label: "System Admins",                // CUSTOMIZE: Display text
        // },
        
        // Link to Developer Guide (TEMPORARILY HIDDEN - uncomment to show)
        // {
        //   type: "docSidebar",
        //   sidebarId: "developerSidebar",        // Must match sidebar ID in sidebars-developer.ts
        //   docsPluginId: "developer",            // Must match doc plugin id above
        //   position: "right",
        //   label: "Developers",                   // CUSTOMIZE: Display text
        // },
        
        // Search box (DO NOT REMOVE - custom search component)
        {
          type: "search",
          position: "right",
        },
        
        // --------------------------------------------------------------------------
        // To add a dropdown menu, use this format:
        // {
        //   type: "dropdown",
        //   label: "More",
        //   position: "right",
        //   items: [
        //     { label: "GitHub", href: "https://github.com/..." },
        //     { label: "Support", href: "https://support..." },
        //   ],
        // },
        // --------------------------------------------------------------------------
      ],
    },
    
    // --------------------------------------------------------------------------
    // FOOTER
    // Customize footer links and copyright
    // --------------------------------------------------------------------------
    footer: {
      style: "dark",
      links: [
        {
          // CUSTOMIZE: Replace with your project's links
          // Remove lines you don't need, add new ones as needed
          html: `
            <div style="color: #b3b3b3;">
              <a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer" style="color: #b3b3b3;">Demo↗</a>
              <span>&nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp;</span>
              <a href="https://github.com/your-org/your-repo" target="_blank" rel="noopener noreferrer" style="color: #b3b3b3;">Source code↗</a>
              <span> &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp; </span>
              <a href="${process.env.DOCS_BASE_URL || "/"}developer/CHANGELOG" style="color: #b3b3b3;">Changelog</a>
              <span> &nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp;</span>
              <a href="https://your-organization-website.com" target="_blank" rel="noopener noreferrer" style="color: #b3b3b3;">About Us↗</a>
              <span>&nbsp; &nbsp; &nbsp;|&nbsp; &nbsp; &nbsp;    </span>
              <a href="https://your-support-url.com" target="_blank" rel="noopener noreferrer" style="color: #b3b3b3;">Contact Support↗</a>
            </div>
          `,
        },
      ],
      // REPLACE: Update copyright with your organization's information
      copyright: `Copyright © ${new Date().getFullYear()} Your Organization. All rights reserved.`,
    },
    
    // --------------------------------------------------------------------------
    // SYNTAX HIGHLIGHTING
    // Prism themes for code blocks
    // --------------------------------------------------------------------------
    prism: {
      theme: prismThemes.github,      // Light mode theme
      darkTheme: prismThemes.dracula, // Dark mode theme
      // Add additional languages if needed:
      // additionalLanguages: ['java', 'php', 'ruby', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
