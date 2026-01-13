---
slug: /developer/testing
title: "Testing Guide"
sidebar_label: "Testing"
sidebar_position: 5
description: "Learn how to run and write tests for Pseudonymisation Portal"
---

# Testing Guide

Learn how to run and write tests for Pseudonymisation Portal.

:::tip Template Section
Document your testing strategy and provide examples:
- Test frameworks and tools used
- How to run different types of tests
- Writing test examples
- Coverage requirements
:::

## Testing Stack

- **Test Framework:** [e.g., Jest, PyTest, JUnit]
- **Assertions:** [e.g., Jest matchers, assert]
- **Mocking:** [e.g., Jest mocks, unittest.mock]
- **E2E Testing:** [e.g., Playwright, Cypress]
- **Coverage:** [e.g., Istanbul, coverage.py]

## Running Tests

### Run All Tests

```bash
# Run all tests
[command to run all tests]

# Run with coverage
[command to run with coverage]
```

### Run Specific Tests

```bash
# Run a specific test file
[command to run specific file]

# Run tests matching a pattern
[command to run pattern]

# Run a single test
[command to run single test]
```

### Watch Mode

```bash
# Run tests in watch mode (re-run on changes)
[command for watch mode]
```

## Test Types

### Unit Tests

Test individual functions and methods in isolation.

**Example:**

```javascript
// user-service.test.js
import { UserService } from './user-service';

describe('UserService', () => {
  let userService;
  
  beforeEach(() => {
    userService = new UserService();
  });
  
  describe('validateEmail', () => {
    it('should return true for valid email', () => {
      const result = userService.validateEmail('test@example.com');
      expect(result).toBe(true);
    });
    
    it('should return false for invalid email', () => {
      const result = userService.validateEmail('invalid-email');
      expect(result).toBe(false);
    });
    
    it('should throw error for null input', () => {
      expect(() => {
        userService.validateEmail(null);
      }).toThrow('Email is required');
    });
  });
});
```

### Integration Tests

Test how multiple components work together.

**Example:**

```javascript
// user-api.integration.test.js
import request from 'supertest';
import { app } from '../app';
import { setupTestDatabase, cleanupTestDatabase } from './test-helpers';

describe('User API Integration Tests', () => {
  beforeAll(async () => {
    await setupTestDatabase();
  });
  
  afterAll(async () => {
    await cleanupTestDatabase();
  });
  
  describe('POST /users', () => {
    it('should create a new user', async () => {
      const response = await request(app)
        .post('/users')
        .send({
          name: 'John Doe',
          email: 'john@example.com'
        })
        .expect(201);
      
      expect(response.body).toMatchObject({
        name: 'John Doe',
        email: 'john@example.com'
      });
      expect(response.body.id).toBeDefined();
    });
    
    it('should return 400 for invalid data', async () => {
      await request(app)
        .post('/users')
        .send({
          name: 'John Doe'
          // missing email
        })
        .expect(400);
    });
  });
});
```

### End-to-End Tests

Test complete user workflows through the UI.

**Example:**

```javascript
// user-registration.e2e.test.js
import { test, expect } from '@playwright/test';

test.describe('User Registration Flow', () => {
  test('should successfully register a new user', async ({ page }) => {
    // Navigate to registration page
    await page.goto('/register');
    
    // Fill in form
    await page.fill('[name="name"]', 'John Doe');
    await page.fill('[name="email"]', 'john@example.com');
    await page.fill('[name="password"]', 'SecurePass123!');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Verify success
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('.welcome-message')).toContainText('Welcome, John Doe');
  });
  
  test('should show error for duplicate email', async ({ page }) => {
    await page.goto('/register');
    
    // Use existing email
    await page.fill('[name="email"]', 'existing@example.com');
    await page.fill('[name="password"]', 'SecurePass123!');
    await page.click('button[type="submit"]');
    
    // Verify error message
    await expect(page.locator('.error-message')).toContainText('Email already exists');
  });
});
```

## Mocking

### Mocking Functions

```javascript
import { getUserData } from './api';

jest.mock('./api');

test('should handle API response', async () => {
  // Mock the API call
  getUserData.mockResolvedValue({
    id: '123',
    name: 'John Doe'
  });
  
  // Test code that uses getUserData
  const result = await myFunction();
  
  expect(getUserData).toHaveBeenCalledWith('123');
  expect(result.name).toBe('John Doe');
});
```

### Mocking Modules

```javascript
jest.mock('./database', () => ({
  query: jest.fn(),
  connect: jest.fn(),
  disconnect: jest.fn()
}));
```

### Mocking HTTP Requests

```javascript
import nock from 'nock';

test('should fetch data from external API', async () => {
  // Mock external API
  nock('https://api.external.com')
    .get('/data')
    .reply(200, { value: 'mocked data' });
  
  const result = await fetchExternalData();
  expect(result.value).toBe('mocked data');
});
```

## Test Helpers

### Setup and Teardown

```javascript
// test-helpers.js
export async function setupTestDatabase() {
  // Create test database
  // Run migrations
  // Seed test data
}

export async function cleanupTestDatabase() {
  // Clear test data
  // Drop test database
}

export function createMockUser(overrides = {}) {
  return {
    id: '123',
    name: 'Test User',
    email: 'test@example.com',
    ...overrides
  };
}
```

### Fixtures

```javascript
// fixtures/users.js
export const validUser = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user'
};

export const adminUser = {
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'admin'
};
```

## Code Coverage

### Viewing Coverage

```bash
# Generate coverage report
[command to generate coverage]

# Open coverage report in browser
[command to open report]
```

### Coverage Requirements

- **Overall:** 80% minimum
- **Critical paths:** 100% required
- **New code:** Should not decrease overall coverage

### Coverage Reports

Coverage is reported in:
- Terminal output
- HTML report (`coverage/index.html`)
- CI/CD pipeline
- Pull request comments

## Best Practices

### Test Naming

Use descriptive names that explain what is being tested:

```javascript
✅ Good:
it('should return 404 when user does not exist')

❌ Bad:
it('test user')
```

### AAA Pattern

Organize tests with Arrange, Act, Assert:

```javascript
it('should calculate total price correctly', () => {
  // Arrange
  const cart = new ShoppingCart();
  cart.addItem({ price: 10, quantity: 2 });
  
  // Act
  const total = cart.calculateTotal();
  
  // Assert
  expect(total).toBe(20);
});
```

### One Assertion Per Test

Each test should verify one specific behavior:

```javascript
✅ Good:
it('should return user name', () => {
  expect(user.name).toBe('John');
});

it('should return user email', () => {
  expect(user.email).toBe('john@example.com');
});

❌ Bad:
it('should return user data', () => {
  expect(user.name).toBe('John');
  expect(user.email).toBe('john@example.com');
  expect(user.role).toBe('admin');
});
```

### Avoid Test Interdependence

Tests should be independent and runnable in any order:

```javascript
❌ Bad:
let userId;

it('should create user', async () => {
  const user = await createUser();
  userId = user.id; // Don't do this
});

it('should delete user', async () => {
  await deleteUser(userId); // Depends on previous test
});

✅ Good:
it('should delete user', async () => {
  const user = await createUser();
  await deleteUser(user.id); // Independent
});
```

### Use Factories

Create test data with factories:

```javascript
function createTestUser(overrides = {}) {
  return {
    id: Math.random().toString(),
    name: 'Test User',
    email: 'test@example.com',
    createdAt: new Date(),
    ...overrides
  };
}

// Usage
const user = createTestUser({ name: 'Custom Name' });
```

## Continuous Integration

Tests run automatically on:
- Every pull request
- Every commit to main branch
- Scheduled daily runs

### CI Configuration

```yaml
# Example: GitHub Actions
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Upload coverage
        uses: codecov/codecov-action@v2
```

## Debugging Tests

### Running Single Test in Debug Mode

```bash
# Node.js with debugger
node --inspect-brk [test file]

# With IDE breakpoints
[IDE-specific instructions]
```

### Debugging Tips

- Use `console.log()` or debugger statements
- Run tests in isolation
- Check test database state
- Verify mocks are working correctly

## Performance Testing

### Load Testing

```javascript
import { check } from 'k6';
import http from 'k6/http';

export default function() {
  const res = http.get('http://api.example.com/users');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 200ms': (r) => r.timings.duration < 200
  });
}
```

## Troubleshooting

### Tests Fail Locally But Pass in CI

- Check environment variables
- Verify dependencies are installed
- Compare Node/Python versions

### Flaky Tests

- Add appropriate waits for async operations
- Use test retries sparingly
- Fix root cause instead of adding retries

### Slow Tests

- Use test.only to run specific tests during development
- Optimize database operations
- Consider parallelization

## Additional Resources

- [Contributing Guide](./contributing)
- [Environment Setup](./environment-setup)
- [CI/CD Documentation](./ci-cd)
