---
slug: /developer/contributing
title: "Contributing Guide"
sidebar_label: "Contributing"
sidebar_position: 4
description: "Thank you for considering contributing to Platform-M! This guide will help you get started"
---

# Contributing Guide

Thank you for considering contributing to Platform-M! This guide will help you get started.

:::tip Template Section
Customize these guidelines for your project:
- Add your code of conduct
- Specify your branching strategy
- Define your review process
- Include any specific requirements
:::

## How to Contribute

We welcome contributions of all kinds:
- 🐛 Bug reports
- ✨ Feature requests
- 📝 Documentation improvements
- 🔧 Code contributions
- 🧪 Test improvements

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Set up your environment** following the [Environment Setup](./environment-setup) guide

## Development Workflow

### 1. Make Your Changes

- Write clean, readable code
- Follow our [coding standards](#coding-standards)
- Add tests for new features
- Update documentation as needed

### 2. Test Your Changes

Run the test suite to ensure nothing breaks:

```bash
# Run all tests
[test command]

# Run specific tests
[specific test command]

# Run linter
[lint command]
```

### 3. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add new feature X"
```

**Commit Message Format:**
```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear description of changes
- Link to related issues
- Screenshots (if applicable)
- Test results

## Pull Request Guidelines

### Before Submitting

- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] Branch is up to date with main

### PR Description Template

```markdown
## Description
[Brief description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #[issue number]

## Testing
[How you tested the changes]

## Screenshots
[If applicable]
```

## Coding Standards

### Code Style

**[Language] Style:**
```[language]
// Example of good code style
function exampleFunction(param: string): boolean {
  // Implementation
  return true;
}
```

### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Variables | camelCase | `userName` |
| Constants | UPPER_CASE | `MAX_RETRIES` |
| Classes | PascalCase | `UserService` |
| Files | kebab-case | `user-service.ts` |

### Documentation

Add JSDoc/docstrings for:
- All public functions
- Complex logic
- API endpoints

```javascript
/**
 * Retrieves user information by ID
 * @param {string} userId - The user's unique identifier
 * @returns {Promise<User>} User object
 * @throws {NotFoundError} If user doesn't exist
 */
async function getUser(userId) {
  // Implementation
}
```

## Testing Guidelines

### Unit Tests

- Test individual functions and methods
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

```javascript
describe('UserService', () => {
  it('should return user when valid ID is provided', async () => {
    // Arrange
    const userId = '123';
    
    // Act
    const user = await userService.getUser(userId);
    
    // Assert
    expect(user.id).toBe(userId);
  });
});
```

### Integration Tests

- Test component interactions
- Use test databases
- Clean up after tests

### Test Coverage

Aim for:
- **80%+** code coverage overall
- **100%** coverage for critical paths

## Review Process

1. **Automated Checks**
   - CI/CD pipeline runs tests
   - Code quality checks
   - Security scanning

2. **Code Review**
   - At least one approval required
   - Address reviewer feedback
   - Maintain respectful communication

3. **Merge**
   - Squash or merge commits as appropriate
   - Update changelog if needed

## Reporting Bugs

Use the bug report template:

```markdown
**Describe the bug**
[Clear description]

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
[What should happen]

**Screenshots**
[If applicable]

**Environment**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 100]
- Version: [e.g. 1.2.3]
```

## Requesting Features

Use the feature request template:

```markdown
**Problem**
[What problem does this solve?]

**Proposed Solution**
[How would this feature work?]

**Alternatives**
[Other approaches you've considered]

**Additional Context**
[Any other information]
```

## Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on what's best for the community

### Communication Channels

- **GitHub Issues:** Bug reports and features
- **GitHub Discussions:** Questions and ideas
- **Discord/Slack:** Real-time chat
- **Email:** [dev@example.com](mailto:dev@example.com)

## Recognition

Contributors are recognized in:
- Release notes
- CONTRIBUTORS.md file
- Project README

## License

By contributing, you agree that your contributions will be licensed under the [Project License].

## Questions?

- Check the [FAQ](../user-guide/faq)
- Ask in [GitHub Discussions](https://github.com/your-org/your-repo/discussions)
- Email [dev@example.com](mailto:dev@example.com)

## Additional Resources

- [Environment Setup](./environment-setup)
- [Testing Guide](./testing)
- [Architecture Overview](./architecture)
- [API Reference](./api-reference)
