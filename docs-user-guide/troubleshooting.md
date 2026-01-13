---
title: Troubleshooting
slug: /troubleshooting
sidebar_label: "Troubleshooting"
sidebar_position: 7
description: "Solutions to common problems in the Pseudonymisation Portal"
---

# Troubleshooting

This guide helps you resolve common issues when using the Pseudonymisation Portal.

## In this guide

- [Token generation issues](#token-generation-issues)
- [Organisation and project issues](#organisation-and-project-issues)
- [Getting help](#getting-help)

## Token generation issues

### I can't generate a token

**Possible reasons:**
- Request not approved yet
- Insufficient permissions
- Technical issue with the portal

**Solution:**
1. Verify your request status is "Approved"
2. Check you have permission to generate tokens
3. Confirm you're accessing the correct request
4. Contact your administrator if the issue persists

### My reverse token doesn't work

**Possible reasons:**
- Retention period expired
- You don't have reversal permissions
- Using incorrect token or data format

**Solution:**
1. Check the retention period hasn't expired (view project settings)
2. Verify you have "can reverse" permission in the project
3. Confirm you're using the correct token with matching data
4. Ensure the data format matches the original pseudonymisation

:::warning Retention period limits
Once the retention period expires, reverse tokens stop working permanently. This cannot be undone.
:::

### Secondary token generation fails

**Possible reasons:**
- Incorrect source organisation information
- Invalid or expired source token
- Source organisation doesn't exist
- Data format mismatch

**Solution:**
1. Verify source organisation details with the source
2. Confirm the source token is current and valid
3. Check source organisation key is correct
4. Ensure pseudonymised data format matches expectations

## Organisation and project issues

### I can't create an organisation

**Possible reasons:**
- You've already created one organisation (normal users are limited to one)
- Previous organisation request is pending approval
- You don't have permission to create organisations

**Solution:**
1. Check if you have a pending organisation request
2. Verify you haven't already created an organisation
3. Wait for approval if request is pending
4. Contact administrator if you need to join a different organisation

### I can't see my organisation or project

**Possible reasons:**
- Not assigned to an organisation yet
- Incorrect permissions
- Browser cache issue

**Solution:**
1. Verify you've been assigned to an organisation (contact administrator)
2. Refresh the page or clear browser cache
3. Log out and log back in
4. Check you're viewing the correct section of the portal

### I can't add a collaborator to my project

**Possible reasons:**
- Incorrect organisation key
- Collaborating organisation doesn't exist
- Insufficient permissions
- Technical issue

**Solution:**
1. Verify you have the correct organisation key from your collaborator
2. Confirm the collaborating organisation has been created
3. Check you have permission to add collaborators
4. Try again or contact support

## Getting help

If you can't resolve your issue using this guide:

### Contact your administrator

Administrators can:
- Review your permissions
- Approve pending requests
- Assign you to organisations
- Investigate technical issues

### Check related documentation

- [Generate tokens](/user-guide/generate-tokens) - Step-by-step token generation guide
- [Create a project](/user-guide/create-project) - Project creation and configuration
- [Create an organisation](/user-guide/create-organisation) - Organisation setup guide
- [Tokens](/user-guide/tokens) - Understanding token types and behaviour

### Technical support

For technical issues that administrators can't resolve:
- Document the problem (screenshots, error messages, steps to reproduce)
- Note when the issue started
- Check if others in your organisation experience the same issue
- Contact your organisation's technical support or portal administrators

:::tip Document the issue
When reporting problems, include specific details: what you were trying to do, what happened instead, any error messages, and the steps you took. This helps resolve issues faster.
:::
