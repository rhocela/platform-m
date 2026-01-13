---
title: Create pseudonymisation request
slug: /create-request
sidebar_label: "Create pseudonymisation request"
sidebar_position: 1
description: "Learn how to request approval to pseudonymise your data"
---

# Create Pseudonymisation Request

Within a project, you create requests to pseudonymise specific datasets. This guide explains how to create and submit requests for approval.

## In this guide

- [Before you begin](#before-you-begin)
- [Create a request](#create-a-request)
- [Submit for approval](#submit-for-approval)
- [Track request status](#track-request-status)
- [After approval](#after-approval)

## Before you begin

Ensure you have:

- [ ] Created a project
- [ ] Configured project settings (retention, treatment, collaborators)
- [ ] Identified the dataset you want to pseudonymize
- [ ] Understand the data requirements

:::tip Projects and requests
Each project can have multiple requests. Organize requests by dataset, purpose, or time period as appropriate for your workflow.
:::

## Create a request

### Step 1: Navigate to your project

1. Log in to the Pseudonymisation Portal
2. Select **Projects**
3. Select the project where you want to create a request
4. Select **Requests** or **New Request**

### Step 2: Enter request details

Provide information about your pseudonymization needs:

**Request name**
- Use a descriptive name
- Example: "January 2025 Patient Records"

**Description**
- Explain what data will be pseudonymized
- Note the purpose of pseudonymization
- Include any special requirements or context

**Data source information (if required)**
- Dataset name or identifier
- Number of records
- Data fields to be pseudonymized
- Any data quality notes

:::info Request detail requirements
Required fields may vary based on your organisation's configuration. Provide as much detail as helps track and manage the request.
:::

### Step 3: Review inherited settings

Your request automatically inherits settings from the parent project:

- **Retention period**: Same as project setting
- **Treatment**: Same as project setting
- **Collaborators**: All project collaborators have access

If these don't match your needs for this specific request, you may need to create a new project with different settings.

### Step 4: Save the request

1. Review all entered information
2. Select **Save Draft** to save without submitting
3. Or Select **Submit** to send for approval immediately

**Expected outcome:** Request is saved and either remains in draft status or moves to pending approval.

## Submit for approval

Requests require administrator approval before you can generate tokens.

### Submit your request

If you saved as draft:

1. Navigate to your request
2. Review all details
3. Select **Submit for Approval**
4. Confirm submission

If you clicked **Submit** when creating:
- Request is automatically submitted
- No additional action needed

**Expected outcome:**
- Request status changes to "Pending Approval"
- Administrators receive a notification
- You receive a confirmation notification

### What happens next

1. **Administrator review**: An administrator reviews your request
2. **Approval or rejection**: Administrator either approves or rejects the request
3. **Notification**: You receive notification of the decision
4. **Token generation**: If approved, you can generate tokens

:::tip Be patient
Approval times vary based on administrator availability and your organisation's processes. If urgent, contact an administrator directly.
:::

## Track request status

### View request status

To check your request status:

1. Navigate to **Projects**
2. Select your project
3. View the **Requests** list
4. Check the status column

### Status meanings

**Draft**
- Request saved but not submitted
- You can still edit
- No approval process started

**Pending Approval**
- Request submitted
- Waiting for administrator review
- You cannot edit

**Approved**
- Administrator approved the request
- You can generate tokens
- Cannot be modified

**Rejected**
- Administrator rejected the request
- Check rejection reason in notifications
- You may need to create a new request

### Notifications

You receive notifications for:
- Request submission confirmation
- Request approval
- Request rejection (with reason)

Check your notifications regularly to stay updated on request status.

## After approval

Once your request is approved:

### Generate tokens

1. Navigate to the approved request
2. Select **Generate Token**
3. Select token type (pseudonymization, reverse, or secondary)
4. Follow the token generation process

See [Generate Tokens](/user-guide/generate-tokens) for detailed instructions.

### View request history

Approved requests show:
- When approved and by whom
- Generated tokens
- Token generation history
- Usage information (if available)

### Create additional requests

You can create multiple requests within the same project:

1. Each request can represent different datasets
2. All inherit the same project settings
3. Each requires separate approval
4. Tokens are request-specific

## Common scenarios

### I need to pseudonymize a new dataset

1. Navigate to your existing project
2. Create a new request for the new dataset
3. Submit for approval
4. Generate tokens once approved

### I need different settings for different data

Create separate projects with appropriate settings:

1. **Project A**: Short retention, same token for patient tracking
2. **Project B**: Long retention, different token for privacy
3. Create requests within each project as needed

### My request was rejected

1. Check the rejection reason in your notifications
2. Understand what changes are needed
3. Create a new request with corrections
4. Or contact the administrator to discuss

### I need to urgently pseudonymize data

1. Submit your request with detailed justification
2. Mark as urgent if that option is available
3. Contact an administrator directly
4. Follow up proactively

## Best practices

### Provide clear descriptions

- Explain the business purpose
- Describe the data clearly
- Note any special requirements
- Help administrators understand context

### Plan ahead

- Submit requests before you need tokens
- Account for approval time
- Don't wait until deadlines

### Organize requests logically

- Group related datasets
- Use consistent naming conventions
- Make it easy to find past requests

### Maintain records

- Document what each request is for
- Track which tokens belong to which requests
- Keep audit trails

## Troubleshooting

### I can't create a request

**Possible reasons:**
- Project not set up correctly
- Insufficient permissions
- Technical issue

**Solution:** 
1. Verify project exists and you have access
2. Check your permissions with an administrator
3. Try refreshing and attempting again

### My request is stuck in pending status

**Possible reasons:**
- Administrators haven't reviewed yet
- Additional information needed
- Technical issue

**Solution:**
1. Wait for the normal approval timeframe
2. Check notifications for requests for more information
3. Contact an administrator if unusually delayed

### I need to modify a submitted request

**Possible reasons:**
- Found an error after submission
- Requirements changed

**Solution:**
1. Contact the administrator reviewing your request
2. May need to withdraw and resubmit
3. Or create a new request with corrections

## Next steps

Once your request is approved:

- Learn how to [generate tokens](/user-guide/generate-tokens)
- Understand [different token types](/user-guide/tokens)
- Review [best practices](/user-guide/../best-practices) for using tokens
