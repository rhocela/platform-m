---
slug: /developer/environment-setup
title: "Development Environment Setup"
sidebar_label: "Environment Setup"
sidebar_position: 2
description: "Set up your local development environment for Platform-M"
---

# Development Environment Setup

Set up your local development environment for Platform-M.

:::tip Template Section
Provide specific instructions for setting up your development environment. Include:
- Required software and versions
- Installation steps for each platform (Windows, macOS, Linux)
- Configuration files and environment variables
- Verification steps
:::

## Prerequisites

Before you begin, ensure you have the following installed:

- [ ] **[Tool 1]:** Version X.X or higher ([Download](https://example.com))
- [ ] **[Tool 2]:** Version Y.Y or higher ([Download](https://example.com))
- [ ] **[Tool 3]:** Latest version ([Download](https://example.com))
- [ ] **Git:** For version control

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

### Step 2: Install Dependencies

**For [Language/Framework]:**
```bash
# Example for Node.js
npm install

# Or for Python
pip install -r requirements.txt

# Or for other languages
[your package manager command]
```

### Step 3: Configure Environment

Create a configuration file:

```bash
cp .env.example .env
```

Edit the `.env` file and add your configuration:

```bash
# Database connection
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# API keys
API_KEY=your_api_key_here

# Environment
NODE_ENV=development
```

### Step 4: Set Up the Database

```bash
# Create database
[command to create database]

# Run migrations
[command to run migrations]

# Seed initial data (optional)
[command to seed data]
```

### Step 5: Start Development Server

```bash
# Start the backend
[command to start backend]

# In another terminal, start the frontend
[command to start frontend]
```

## Platform-Specific Instructions

### Windows

[Special instructions for Windows developers]

```powershell
# Windows-specific commands
```

### macOS

[Special instructions for macOS developers]

```bash
# macOS-specific commands
```

### Linux

[Special instructions for Linux developers]

```bash
# Linux-specific commands
```

## Verify Your Setup

After installation, verify everything works:

1. **Check backend:**
   ```bash
   curl http://localhost:8000/health
   ```
   Expected: `{"status": "ok"}`

2. **Check frontend:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

3. **Run tests:**
   ```bash
   [command to run tests]
   ```

## IDE Setup

### VS Code (Recommended)

Install these extensions:
- [Extension 1]
- [Extension 2]
- [Extension 3]

Recommended settings (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "your-formatter"
}
```

### IntelliJ IDEA / WebStorm

[Configuration instructions for JetBrains IDEs]

## Development Tools

### Useful Commands

| Command | Description |
|---------|-------------|
| `[command]` | [Description] |
| `[command]` | [Description] |
| `[command]` | [Description] |

### Debugging

[Instructions for debugging the application]

```javascript
// Example debug configuration
{
  "type": "node",
  "request": "launch",
  "name": "Debug App",
  "program": "${workspaceFolder}/src/index.js"
}
```

## Troubleshooting

### Issue: Port already in use

**Solution:**
```bash
# Kill process on port 3000
[command to kill process]
```

### Issue: Database connection failed

**Solution:**
- Check if database is running
- Verify connection string in `.env`
- Ensure database exists

### Issue: Module not found

**Solution:**
```bash
# Clear cache and reinstall
[command to clear cache]
[command to reinstall]
```

## Next Steps

- [Run tests](./testing) to ensure everything works
- [Read the API documentation](./api-reference)
- [Review contributing guidelines](./contributing)
- [Check out the architecture overview](./architecture)
