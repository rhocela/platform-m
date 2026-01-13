---
title: Set up a project
slug: /create-project
sidebar_label: "Set up a project"
sidebar_position: 2
description: "Learn about projects and how to set one up"
---

# Set Up a Project

Projects organise your pseudonymisation activities and define collaboration parameters. This guide explains what projects are and how to set one up.

## In this guide

- [What is a project](#what-is-a-project)
- [Project settings](#project-settings)
- [Adding collaborators](#adding-collaborators)
- [Create a project](#create-a-project)
- [Configure project settings](#configure-project-settings)
- [Review and save](#review-and-save)
- [Project management](#project-management)

## What is a project

A project organizes pseudonymisation requests around a specific purpose or collaboration. Projects enable you to:

- Group related pseudonymisation requests
- Define collaboration parameters with other organisations
- Set retention and treatment policies
- Track all requests and tokens in one place

Users create projects on behalf of their organisation to pseudonymise data for specific initiatives.

### Project components

Each project includes:

- **Project details**: Name, description, and purpose
- **Collaborating organisations**: Organisations that can access pseudonymised data
- **Retention settings**: How long reversibility is maintained
- **Treatment settings**: Whether repeated data receives the same or different tokens
- **Requests**: Individual pseudonymisation requests within the project
- **Tokens**: Generated tokens for approved requests

## Project settings

When creating a project, you configure these key settings:

### Retention period

The **reversible retention period** defines how long you can reverse pseudonymised data:

- Specify the duration (days, months, or years)
- After this period, data cannot be reversed to original values
- Useful for compliance with data protection regulations

Example: Setting a 6-month retention period means you can reverse tokens for 6 months. After that, the tokens remain pseudonymised permanently.

**Considerations:**

- **Compliance requirements**: Some regulations mandate specific retention periods
- **Business needs**: How long will you need to verify or audit data?
- **Privacy impact**: Shorter periods provide better privacy protection

### Treatment setting

The **treatment** setting controls how repeated data is pseudonymised:

- **Same token**: Identical data receives the same pseudonymisation token every time
- **Different token**: Identical data receives different tokens each time

**When to use same token:**
- You need to track the same individual across multiple datasets
- You want to aggregate data about the same entity

**When to use different token:**
- You want to prevent cross-dataset correlation
- You need additional privacy protection

### Collaborating organisations

You can add multiple organisations as collaborators using their organisation keys. For each collaborator, specify:

- **Organisation key**: The unique identifier for the organisation
- **Can reverse**: Whether the organisation can reverse pseudonymised data to reveal original values

:::info Reversibility control
The "can reverse" setting determines whether a collaborating organisation can convert pseudonymised tokens back to original values. Use this carefully based on your data sharing agreement.
:::

## Adding collaborators

Collaborating organisations can access pseudonymised data from your project. Understanding collaboration helps you share data securely while maintaining appropriate access controls.

### How collaboration works

When you add an organisation as a collaborator:
- They can access pseudonymised data from your project
- You control whether they can reverse data to original values
- All collaborators see data according to their configured permissions

### Organisation keys

Every organisation has a unique **organisation key** used to identify them. You need a collaborator's organisation key to add them to your project. Share your organisation key securely with partners who need to add you to their projects.

:::warning Verify organisation keys
Always verify organisation keys through secure channels before adding collaborators. Adding the wrong key could expose data to unintended parties.
:::

### Reversibility permissions

For each collaborator, you specify whether they can reverse pseudonymised data:

**Can reverse: Yes**
- Collaborator can convert pseudonymised values back to original values
- Use when: Mutual data exchange, audit requirements, trusted partners
- Example: Two hospitals sharing patient data for joint research

**Can reverse: No**
- Collaborator can only see pseudonymised values
- Use when: One-way sharing, third-party analysis, maximum privacy
- Example: Sharing data with statistical consultant

:::info Reversibility and retention
Even if "can reverse" is set to Yes, reversibility expires after the project's retention period ends.
:::

### Common collaboration patterns

**One-way data sharing**: You pseudonymise and share data with external organisation. They cannot see original values. Set "can reverse" to **No**.

**Mutual data exchange**: Both organisations share data and need to verify original values. Both set "can reverse" to **Yes** for each other.

**Multiple collaborators with different access**: Add multiple organisations to the same project with different reversibility settings based on each relationship.

**Third-party analysis**: Generate secondary tokens and add third party as collaborator with "can reverse" set to **No**. They cannot access original or first-level pseudonymised data.

## Create a project

### Before you begin

Ensure you have:

- [ ] Belong to an organisation
- [ ] Understand your data sharing requirements
- [ ] Have organisation keys from any collaborators (if applicable)
- [ ] Know your retention and treatment requirements

### Step 1: Navigate to Projects

1. Log in to the Pseudonymisation Portal
2. Select **Projects** in the navigation menu
3. Select **Create Project** or **New Project**

### Step 2: Enter project details

Provide basic project information:

**Project name**
- Use a clear, descriptive name
- Example: "Clinical Trial 2025 - Patient Data Sharing"

**Description**
- Explain the project's purpose
- Describe what data will be pseudonymised
- Note any special requirements

**Project owner**
- Your organisation is automatically set as the owner
- This cannot be changed after creation

**Expected outcome:** Basic project information is saved and you can proceed to configure settings.

## Configure project settings

### Set retention period

1. Enter the retention duration
2. Select the time unit (days, months, or years)
3. Example: `6` months

### Choose treatment setting

Select how repeated data should be handled:

**Same token**: Identical data receives the same pseudonymisation token each time (for tracking across datasets)

**Different token**: Identical data receives different tokens each time (for preventing correlation)

### Add collaborating organisations (optional)

If other organisations will access the pseudonymised data, add them now. See [Add collaborators](/user-guide/add-collaborators) for detailed instructions.

You can also add collaborators after creating the project.

## Review and save

### Step 3: Review your settings

Before saving, verify:

- [ ] Project name and description are accurate
- [ ] Retention period meets your requirements
- [ ] Treatment setting is appropriate for your use case
- [ ] Collaborators (if any) are correctly configured

### Step 4: Save the project

1. Select **Save** or **Create Project**
2. Wait for confirmation

**Expected outcome:** 

- Project is created successfully
- You're redirected to the project details page
- You can now create requests within this project

## Project management

### View project information

Project details include:

- Basic information (name, description, owner)
- Settings (retention, treatment)
- Collaborators
- All requests within the project
- Generated tokens

Users can view:
- Projects they created
- Projects within their organisation
- Project status and request history

Administrators can view all projects across all organisations.

### Update project details

To update your project:

1. Navigate to project details
2. Select **Edit** or **Update**
3. Modify settings as needed
4. Save changes

:::info Updates apply to new requests only
Changes to retention and treatment affect only new requests. Existing tokens use their original settings.
:::

### Archive projects

When a project is complete:

1. Navigate to project details
2. Select **Archive** (if available)
3. Archived projects remain visible but cannot have new requests

### Project limitations

Current limitations:
- Projects cannot be deleted (only archived)
- Cannot remove collaborators once added
- Cannot modify tokens after generation

## Common scenarios

**Sharing data with external organisations**: Create project with appropriate settings, then [add collaborators](/user-guide/add-collaborators).

**Tracking individuals across datasets**: Set treatment to **Same token** for consistent pseudonymisation across multiple datasets.

**Maximum privacy protection**: Set treatment to **Different token** with shortest retention period.

**Unsure about settings**: You can update most project settings after creation. Changes affect only new requests, not existing tokens.

## Troubleshooting

### I can't create a project

**Possible reasons:**
- You don't belong to an organisation yet
- You don't have permission to create projects
- Portal maintenance or technical issue

**Solution:** Contact an administrator to verify your organisation membership and permissions.

### I can't add a collaborator

**Possible reasons:**
- Invalid organisation key
- Organisation doesn't exist
- Technical issue

**Solution:** Verify the organisation key with your collaborator and try again.

## Next steps

Now that you have a project:

- Learn how to [add collaborators](/user-guide/add-collaborators)
- Create your first [pseudonymisation request](/user-guide/create-request)
- Understand how to [generate tokens](/user-guide/generate-tokens)