---
title: Generate your token
slug: /generate-tokens
sidebar_label: "Generate your token"
sidebar_position: 2
description: "Learn how to generate pseudonymization, reverse, and secondary tokens"
---

# Generate Your Token

After your request is approved, you can generate tokens to pseudonymize your data. This guide explains how to generate each token type.

## In this guide

- [Before you begin](#before-you-begin)
- [Generate a pseudonymization token](#generate-a-pseudonymization-token)
- [Generate a reverse token](#generate-a-reverse-token)
- [Generate a secondary token](#generate-a-secondary-token)

## Before you begin

Ensure you have:

- [ ] Created a project
- [ ] Created and submitted a request
- [ ] Request has been approved
- [ ] Understand which token type you need

:::tip Review token types
If you're unsure which token type to use, review [Tokens](/user-guide/tokens) to understand each type's purpose.
:::

## Generate a pseudonymization token

Pseudonymization tokens convert original data to pseudonymized values.

:::tip Learn about token types
For detailed information about each token type and when to use them, see [Tokens](/user-guide/tokens).
:::

### Step 1: Access your approved request

1. Log in to the Pseudonymisation Portal
2. Navigate to **Projects**
3. Select your project
4. Select the approved request

### Step 2: Generate token

1. Select **Generate Token** or **New Token**
2. Select **Pseudonymization Token**
3. Review the token settings (inherited from project):
   - Retention period
   - Treatment (same/different token)
   - Collaborators with access

### Step 3: Confirm generation

1. Review the information
2. Select **Generate** or **Confirm**
3. Wait for token generation

**Expected outcome:**
- Pseudonymization token is generated
- Authorization token is also generated
- Both tokens are displayed

### Step 4: Save your tokens

1. **Copy the pseudonymization token**
2. **Copy the authorization token**
3. Store both tokens securely

:::danger Store tokens securely
- Never share tokens via email or insecure channels
- Use your organisation's key management system
- Limit access to authorized personnel only
- Treat tokens like passwords or API keys
:::
## Generate a reverse token

Reverse tokens convert pseudonymized values back to original values.

### Step 1: Access your approved request

1. Navigate to the request with existing pseudonymized data
2. Ensure you're within the retention period
3. Verify you have permission to reverse data

### Step 2: Generate reverse token

1. Select **Generate Token**
2. Select **Reverse Token**
3. Review settings and permissions

### Step 3: Confirm generation

1. Review the reversibility settings
2. Select **Generate**
3. Wait for token generation

**Expected outcome:**
- Reverse token is generated
- Token is tied to your original pseudonymization token
- Can only be used within the retention period

:::warning Retention period limits
Reverse tokens only work during the retention period configured in your project. After this period expires, reversal is permanently disabled.
:::
## Generate a secondary token

Secondary tokens re-pseudonymize already pseudonymized data for additional privacy protection.

### Required information

Before generating a secondary token, you need:

- **Source organisation**: The organisation that owns the original data
- **Source organisation token**: The pseudonymization token from the source
- **Pseudonymized data**: Data that's already been pseudonymized once

### Step 1: Obtain source information

1. Identify the source organisation
2. Obtain their organisation details
3. Get their original pseudonymization token
4. Verify you have the pseudonymized data

### Step 2: Generate secondary token

1. Navigate to your approved request
2. Select **Generate Token**
3. Select **Secondary Token**
4. Enter required information:
   - Source organisation identifier
   - Source pseudonymization token
   - Any additional required fields

### Step 3: Confirm generation

1. Review source organisation details
2. Verify pseudonymized data format
3. Select **Generate**

**Expected outcome:**
- Secondary token is generated
- Can pseudonymize the already-pseudonymized data
- Creates an additional layer of protection

:::info Limited reversibility
If you reverse second-level pseudonymized data, you only reveal first-level pseudonymized data, not the original data. The original remains protected.
:::

## Best practices

- **Store tokens securely** using your organisation's key management system
- **Never share tokens via email** or insecure channels
- **Limit access** to authorized personnel only
- **Document token purpose** and maintain mapping between requests and tokens
- **Test tokens** before production use and monitor retention periods

:::tip What's next?
After generating tokens, you'll integrate them into your technical systems. See [Using the tokens](/user-guide/using-the-tokens) to learn about integration approaches and common use cases.
:::

## Next steps

Now that you can generate tokens:

- Learn how to [use tokens in your environment](/user-guide/using-the-tokens)
- Review [Tokens](/user-guide/tokens) for detailed token information
- Understand [Projects](/user-guide/create-project) and their configuration
- See [Troubleshooting](/user-guide/troubleshooting) if you encounter issues

