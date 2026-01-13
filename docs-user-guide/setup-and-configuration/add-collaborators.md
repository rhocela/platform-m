---
title: Add collaborators
slug: /add-collaborators
sidebar_label: "Add collaborators"
sidebar_position: 3
description: "Learn how to add collaborating organisations to your project"
---

# Add Collaborators

Add collaborating organisations to your project so they can access pseudonymized data. This guide shows you how to add and configure collaborators.

:::tip Review collaboration concepts
To understand how collaboration and reversibility work, see [Projects - Adding collaborators](/user-guide/projects#adding-collaborators).
:::
## In this guide

- [Before you begin](#before-you-begin)
- [Obtain organisation keys](#obtain-organisation-keys)
- [Add a collaborator](#add-a-collaborator)
- [Configure reversibility](#configure-reversibility)
- [Manage collaborators](#manage-collaborators)

## Before you begin

Ensure you have:

- [ ] Created a project
- [ ] Identified organisations you want to collaborate with
- [ ] Obtained organisation keys from collaborators
- [ ] Determined reversibility requirements for each collaborator

:::tip Review collaboration concepts
Review [Projects](/user-guide/projects#adding-collaborators) to understand how collaboration works.
:::

## Obtain organisation keys

Before adding a collaborator, you need their organisation key.

### Request an organisation key

1. Contact your collaborating organisation
2. Request their organisation key
3. Verify the key through a secure channel (not email)
4. Confirm the organisation name matches the key

:::warning Verify organisation keys
Always verify organisation keys before adding them. Adding the wrong key could expose data to unintended parties.
:::

### Share your organisation key

If collaborators need to add you to their projects:

1. Navigate to **organisations**
2. View your organisation details
3. Copy your organisation key
4. Share it securely with your collaborator

## Add a collaborator

### Step 1: Navigate to project settings

1. Log in to the Pseudonymisation Portal
2. Select **Projects**
3. Select the project
4. Select **Edit** or **Manage Collaborators**

### Step 2: Add organisation

1. Select **Add Collaborator** or **Add organisation**
2. Enter the organisation key
3. Verify the organisation name appears correctly

**Expected outcome:** The organisation is identified by the portal and displayed with its name.

### Step 3: Configure reversibility

For each collaborator, specify whether they can reverse pseudonymized data:

**Can reverse: Yes**
- Collaborator can convert pseudonymized values back to original values
- Use when: Mutual data exchange, audit requirements, trusted partner

**Can reverse: No**
- Collaborator can only see pseudonymized values
- Use when: One-way sharing, third-party analysis, privacy preservation

:::info Reversibility and retention
Even if "can reverse" is set to Yes, reversibility expires after the project's retention period.
:::

### Step 4: Save collaborator

1. Review the organisation and reversibility setting
2. Select **Save** or **Add**
3. Wait for confirmation

**Expected outcome:** The collaborator is added to your project and can access pseudonymized data according to the configured settings.

## Manage collaborators

### View collaborators

To see all collaborators on a project:

1. Navigate to project details
2. View the **Collaborators** section
3. See organisation names, keys, and reversibility settings

### Update collaborator settings

To modify a collaborator's settings:

1. Navigate to project details
2. Select **Edit Collaborators**
3. Find the specific collaborator
4. Update their settings
5. Save changes

:::warning Changes apply to new tokens only
Updating collaborator settings affects only new tokens generated after the change. Existing tokens retain their original settings.
:::

### Remove collaborators

Current limitations:
- Collaborators cannot be removed from projects
- Plan your collaborations carefully before adding organisations
- If you need to remove a collaborator, contact an administrator

## Best practices

- Verify organisation keys through secure channels before adding
- Default to **No** for "can reverse" and only allow reversibility when necessary
- Document why each organisation is a collaborator and what data they can access
- Periodically review project collaborators to ensure they still need access

## Troubleshooting

### organisation key not recognised

**Possible reasons:**
- Incorrect organisation key
- organisation doesn't exist
- Typo in the key

**Solution:** 
1. Verify the key with your collaborator
2. Check for extra spaces or characters
3. Try copying and pasting the key

### Can't change reversibility setting

**Possible reasons:**
- Tokens already generated
- Project locked
- Insufficient permissions

**Solution:** Contact an administrator or create a new project with correct settings.

### Collaborator can't access data

**Possible reasons:**
- Not added correctly to project
- No tokens generated yet
- Technical issue

**Solution:** 
1. Verify collaborator is listed in project
2. Confirm tokens are generated
3. Check that collaborator has correct organisation key

## Next steps

Now that you've added collaborators:

- Learn how to [create pseudonymization requests](/user-guide/create-request)
- Understand [token generation](/user-guide/generate-tokens)
- Review [Projects](/user-guide/projects) to understand collaboration patterns
