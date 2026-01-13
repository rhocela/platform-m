---
title: Set up your organisation
slug: /create-organisation
sidebar_label: "Set up your organisation"
sidebar_position: 1
description: "Learn about organisations and how to set one up"
---

# Set Up Your Organisation

Before you can create projects and generate tokens, you need to belong to an organisation. This guide explains what organisations are and how to set one up.

## In this guide

- [What is an organisation](#what-is-an-organisation)
- [Organisation keys](#organisation-keys)
- [Organisation membership](#organisation-membership)
- [Create a new organisation](#create-a-new-organisation)
- [Join an existing organisation](#join-an-existing-organisation)
- [View your organisation](#view-your-organisation)

## What is an organisation

An organisation represents a distinct entity that handles data within the Pseudonymisation Portal. Organisations are the foundation for collaboration and data sharing.

Organisations in the portal represent real-world entities such as:

- Hospitals or healthcare providers
- Research institutions
- Government agencies
- Departments within larger organisations
- Any entity that handles data independently

Each organisation has:

- **Unique organisation key**: Used for identifying the organisation when collaborating
- **Members**: Users assigned to the organisation
- **Projects**: Pseudonymisation projects owned by the organisation
- **Administrative control**: Managed by administrators

## Organisation keys

Every organisation receives a unique **organisation key** when created. This key is essential for collaboration.

### What organisation keys do

Organisation keys serve two purposes:

1. **Identify your organisation** to collaborators
2. **Enable you to add collaborators** to your projects

When you create a project and want to collaborate with another organisation, you need their organisation key to add them as a collaborator.

:::warning Keep organisation keys secure
Organisation keys should be shared only with trusted collaborators. Anyone with your organisation key can add your organisation to their projects.
:::

### How to share your organisation key

1. Navigate to your organisation details
2. Copy your organisation key
3. Share it securely with collaborating organisations (via secure channels, not email)

## Organisation membership

Users can interact with organisations in three ways:

### Administrator perspective

Administrators can:
- Create unlimited organisations
- Assign users to any organisation
- Remove users from organisations
- Update organisation details
- View all organisation members

### Normal user perspective

Normal users have restrictions:
- Can create **one organisation** (requires approval)
- Can belong to **one organisation at a time**
- Cannot create additional organisations once approved
- Can only view their assigned organisation

### Free users

Users don't need to belong to an organisation. Free users can:
- Submit requests to create an organisation
- Work independently until assigned
- View only public information

:::info
If you need to switch organisations, contact an administrator. They can reassign you to a different organisation.
:::

## Create a new organisation

Create an organisation to start managing pseudonymisation projects. Your request requires administrator approval.

### Before you begin

- You can create only one organisation
- After approval, you cannot create additional organisations
- You'll become a member automatically once approved

### Steps to create an organisation

1. Go to **Organisations**
2. Select **Create Organisation**
3. Enter organisation details:
   - **Organisation name**: Clear, descriptive name (example: "St. Mary's Hospital Research")
   - **Description**: Purpose and scope of the organisation
   - **Contact information**: Primary contact details
4. Select **Submit Request**

Your request is sent to administrators for review.

### After you submit

Administrators review your request and:

- **Approve**: You receive a notification and become a member. You'll get your organisation key.
- **Reject**: You receive a notification with the reason.

:::tip
After approval, check your notifications for your organisation key. You need this key to collaborate with other organisations.
:::

### What happens after approval

- You're automatically assigned as a member
- You receive a unique organisation key
- You can create projects
- You cannot create additional organisations

## Join an existing organisation

Administrators assign users to organisations. You cannot join directly.

### Request to join

To join an organisation:

1. Contact an administrator
2. Provide your user details
3. Specify which organisation you want to join

The administrator assigns you to the organisation.

### After you're assigned

After assignment:

- You can access organisation projects
- You can create projects within the organisation
- You can see the organisation key
- You can work with other organisation members

## View your organisation

To view your organisation details:

1. Select **Organisations** in the navigation menu
2. View your organisation information:
   - Organisation name and description
   - Organisation key
   - Members (if you have permission)
   - Projects within the organisation

### Organisation limitations

Current limitations include:

- **No deletion**: Organisations cannot be deleted, only updated
- **One organisation per user**: Normal users can only belong to one organisation
- **One creation per user**: Normal users can only create one organisation
- **Update only**: Organisations can be updated but not removed

These limitations help maintain data integrity and prevent accidental loss of project history.

## Common scenarios

### I want to create my first organisation

Follow the [create a new organisation](#create-a-new-organisation) process. Remember that you can only create one organisation as a normal user.

### I already created an organisation but need to join a different one

Contact an administrator. They can reassign you to a different organisation. Note that you'll lose direct access to your previous organisation.

### I don't belong to any organisation yet

You can operate as a free user, but your capabilities are limited. Consider creating an organisation or asking an administrator to assign you to an existing one.

### My organisation request was rejected

Review the rejection reason in your notification. Correct any issues and contact an administrator to discuss creating the organisation with updated information.

## Next steps

Once you belong to an organisation:

- Learn how to [create a project](/user-guide/create-project)
- Understand how to [add collaborators to projects](/user-guide/add-collaborators)
- Explore [creating pseudonymisation requests](/user-guide/create-request)