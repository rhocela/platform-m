# Pseudonymisation Portal User Guide - Content Structure

## Overview

This user guide covers the Pseudonymisation Portal, a platform that enables organizations to collaborate on secondary data use while protecting PII through pseudonymization. The guide serves two primary user types: **Administrators** and **Normal Users**.

## Documentation Organization

The user guide follows a task-oriented structure with progressive disclosure:

```
docs-user-guide/
├── intro.md                          # Welcome page and portal overview
├── getting-started/                  # Getting started guides
│   ├── _category_.json
│   ├── log-in.md                     # How to access the portal
│   ├── portal-overview.md            # Main sections and navigation
│   └── user-types.md                 # Administrator and normal user roles
├── key-concepts/                     # Understanding core concepts
│   ├── _category_.json
│   ├── what-is-pseudonymisation.md   # Purpose and benefits
│   ├── organizations.md              # Organization concept and keys
│   ├── projects.md                   # Projects and collaboration
│   └── tokens.md                     # Token types and usage
├── for-users/                        # Normal user guides
│   ├── _category_.json
│   ├── join-or-create-organization.md
│   ├── create-project.md
│   ├── add-collaborators.md
│   ├── create-request.md
│   └── generate-tokens.md
└── for-admins/                       # Administrator guides
    ├── _category_.json
    ├── manage-organizations.md
    └── approve-reject-requests.md
```

## Content Mapping

### Key Concepts
Explains foundational concepts users need to understand before using the portal:
- What pseudonymisation is and why it matters
- Organizations and organization keys
- Projects and collaboration models
- Token types (normal, reverse, secondary)

### For Users (Normal Users)
Task-oriented guides for standard users:
- How to join or create an organization
- How to create projects and add collaborators
- How to create pseudonymization requests
- How to generate and use different token types

### For Admins
Administrative tasks:
- Creating and managing multiple organizations
- Approving or rejecting pseudonymization requests
- Assigning users to organizations

### Supporting Content
- **Best Practices**: Guidelines for effective collaboration and data handling
- **FAQ**: Common questions about limitations, workflows, and tokens

## User Types and Capabilities

### Administrator
- Create unlimited organizations
- Update organizations (cannot delete)
- Approve or reject requests from users to create organizations
- Assign users to different organizations
- Approve or reject pseudonymization requests

### Normal User
- Create one organization (pending admin approval)
- Join organizations (assigned by admin)
- Can only be in one organization at a time
- Create projects within their organization
- Create pseudonymization requests
- Generate tokens after request approval
- Can be a free user (not part of any organization)

## Content Guidelines

All content follows these principles:
- **Sentence case for headings**: "Create a new project"
- **Active voice and present tense**: "Click Create" not "You would click Create"
- **User-focused**: Written from the user's perspective
- **Task-oriented**: Emphasis on "how to" achieve goals
- **Progressive disclosure**: Simple concepts before complex ones
- **Include "In this guide" TOC** for pages with 3+ H2 headings
