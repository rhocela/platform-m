---
slug: /developer/api-reference
title: "API Reference"
sidebar_label: "API Reference"
sidebar_position: 3
description: "Complete reference for the Pseudonymisation Portal API"
---

# API Reference

Complete reference for the Pseudonymisation Portal API.

:::tip Template Section
Document your API endpoints, request/response formats, and authentication. Include:
- Base URL and versioning
- Authentication methods
- Available endpoints with examples
- Error codes and responses
- Rate limiting information
:::

## Base URL

```
https://api.example.com/v1
```

## Authentication

All API requests require authentication using an API key in the header:

```bash
Authorization: Bearer YOUR_API_KEY
```

### Getting an API Key

1. Log in to your account
2. Navigate to Settings → API Keys
3. Click "Generate New Key"
4. Copy and securely store your key

:::warning Security
Never commit API keys to version control. Store them in environment variables.
:::

## Endpoints

### Resources

#### List Resources

Get a list of all resources.

**Endpoint:** `GET /resources`

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of results (default: 20, max: 100) |
| `offset` | integer | No | Pagination offset (default: 0) |
| `filter` | string | No | Filter by field |

**Example Request:**

```bash
curl -X GET "https://api.example.com/v1/resources?limit=10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Example Response:**

```json
{
  "data": [
    {
      "id": "res_123",
      "name": "Resource Name",
      "type": "type_a",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-02T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 100,
    "limit": 10,
    "offset": 0,
    "has_more": true
  }
}
```

---

#### Get Resource

Get details of a specific resource.

**Endpoint:** `GET /resources/{id}`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Resource ID |

**Example Request:**

```bash
curl -X GET "https://api.example.com/v1/resources/res_123" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Example Response:**

```json
{
  "id": "res_123",
  "name": "Resource Name",
  "type": "type_a",
  "properties": {
    "prop1": "value1",
    "prop2": "value2"
  },
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-02T00:00:00Z"
}
```

---

#### Create Resource

Create a new resource.

**Endpoint:** `POST /resources`

**Request Body:**

```json
{
  "name": "New Resource",
  "type": "type_a",
  "properties": {
    "prop1": "value1",
    "prop2": "value2"
  }
}
```

**Example Request:**

```bash
curl -X POST "https://api.example.com/v1/resources" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Resource",
    "type": "type_a",
    "properties": {
      "prop1": "value1"
    }
  }'
```

**Example Response:**

```json
{
  "id": "res_456",
  "name": "New Resource",
  "type": "type_a",
  "properties": {
    "prop1": "value1"
  },
  "created_at": "2024-01-03T00:00:00Z",
  "updated_at": "2024-01-03T00:00:00Z"
}
```

---

#### Update Resource

Update an existing resource.

**Endpoint:** `PATCH /resources/{id}`

**Request Body:**

```json
{
  "name": "Updated Name",
  "properties": {
    "prop1": "new_value"
  }
}
```

**Example Request:**

```bash
curl -X PATCH "https://api.example.com/v1/resources/res_123" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Name"
  }'
```

---

#### Delete Resource

Delete a resource.

**Endpoint:** `DELETE /resources/{id}`

**Example Request:**

```bash
curl -X DELETE "https://api.example.com/v1/resources/res_123" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Example Response:**

```json
{
  "message": "Resource deleted successfully"
}
```

---

## Error Handling

The API uses standard HTTP status codes:

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request succeeded |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Missing or invalid API key |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

**Error Response Format:**

```json
{
  "error": {
    "code": "invalid_parameter",
    "message": "The 'name' field is required",
    "details": {
      "field": "name"
    }
  }
}
```

## Rate Limiting

API requests are rate limited to:
- **100 requests per minute** for authenticated requests
- **10 requests per minute** for unauthenticated requests

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1609459200
```

## Webhooks

Configure webhooks to receive real-time notifications about events.

### Webhook Events

| Event | Description |
|-------|-------------|
| `resource.created` | A new resource was created |
| `resource.updated` | A resource was updated |
| `resource.deleted` | A resource was deleted |

### Webhook Payload

```json
{
  "event": "resource.created",
  "timestamp": "2024-01-01T00:00:00Z",
  "data": {
    "id": "res_123",
    "name": "Resource Name"
  }
}
```

## SDKs and Libraries

Official SDKs are available for:

- **JavaScript/TypeScript:** `npm install pseudonymisation-portal-sdk`
- **Python:** `pip install pseudonymisation-portal-sdk`
- **Java:** [Maven/Gradle instructions]
- **Go:** `go get github.com/your-org/pseudonymisation-portal-go`

### SDK Example (JavaScript)

```javascript
import { PseudonymisationPortalClient } from 'pseudonymisation-portal-sdk';

const client = new PlatformMClient({
  apiKey: process.env.PLATFORM_M_API_KEY
});

// List resources
const resources = await client.resources.list({ limit: 10 });

// Create a resource
const newResource = await client.resources.create({
  name: 'New Resource',
  type: 'type_a'
});

// Get a resource
const resource = await client.resources.get('res_123');

// Update a resource
await client.resources.update('res_123', {
  name: 'Updated Name'
});

// Delete a resource
await client.resources.delete('res_123');
```

## API Changelog

See [CHANGELOG](./changelog) for API version history and breaking changes.

## Support

Need help with the API?
- [API Status Page](https://status.example.com)
- [Developer Forum](https://forum.example.com)
- [Support Email](mailto:api-support@example.com)
