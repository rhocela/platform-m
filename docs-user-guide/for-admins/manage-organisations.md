---
title: Manage organisations
slug: /manage-organisations
sidebar_label: "Manage organisations"
sidebar_position: 1
description: "Learn how administrators create and manage organisations"
---

# Manage organisations

As an administrator, you have full control over organisations in the Pseudonymisation Portal. This guide explains how to create, update, and manage organisations.

## In this guide

- [Administrator capabilities](#administrator-capabilities)
- [Create organisations](#create-organisations)
- [Approve organisation requests](#approve-organisation-requests)
- [Update organisations](#update-organisations)
- [Assign users to organisations](#assign-users-to-organisations)
- [View organisation details](#view-organisation-details)

## Administrator capabilities

As an administrator, you can:

- âœ… Create unlimited organisations
- âœ… Update organisation details
- âœ… Approve or reject organisation creation requests from users
- âœ… Assign users to organisations
- âœ… Reassign users between organisations
- âœ… View all organisations and their members
- âœ… Access organisation keys
- âŒ Delete organisations (not currently supported)

:::info Current limitations
organisations cannot be deleted. This maintains data integrity and preserves project history. organisations can only be updated.
:::

## Create organisations

Create organisations directly without requiring approval.

### Steps to create an organisation

1. Go to **Organisations**
2. Select **Create Organisation**
3. Enter organisation details:
   - **Organisation name**: Clear, descriptive name (example: "St. Mary's Hospital Research Department")
   - **Description**: Purpose of the organisation and what data they'll handle
   - **Contact information**: Primary contact name, email address, and phone number (if required)
   - Additional fields as required by your configuration
4. Select **Create**

The organisation is created immediately.

### What happens after creation

- Organisation is created immediately
- Unique organisation key is generated automatically
- Organisation appears in the organisations list
- You can assign users to this organisation

### Organisation key

Every organisation receives a unique organisation key:

- Displayed in organisation details
- Used for collaboration between organisations
- Should be shared only with trusted collaborators
- Cannot be changed after creation

## Approve organisation requests

Normal users can request to create one organisation each. These requests require administrator approval.

### View pending requests

1. Navigate to **organisations** or **Admin Panel**
2. Look for **Pending Requests** or **Requests for Approval**
3. View list of user requests

You also receive notifications when users submit requests.

### Review a request

For each request, review:

- **Requesting user**: Who submitted the request
- **organisation name**: Proposed organisation name
- **Description**: Purpose and scope
- **User details**: Background information on the user
- **Justification**: Why they need the organisation

### Approve a request

To approve an organisation request:

1. Navigate to the pending request
2. Review all details carefully
3. Verify the request is legitimate and appropriate
4. Select **Approve**
5. Confirm the approval

**Expected outcome:**
- organisation is created
- User is automatically assigned to the organisation
- User receives approval notification
- organisation key is generated and sent to user
- User cannot create additional organisations

:::tip Communicate with users
Consider messaging the user to confirm details before approval, especially for large or sensitive organisations.
:::

### Reject a request

To reject an organisation request:

1. Navigate to the pending request
2. Select **Reject** or **Deny**
3. **Provide a reason** for rejection (required)
4. Confirm the rejection

**Expected outcome:**
- Request is marked as rejected
- User receives rejection notification with reason
- User can submit a new request with corrections

**Common rejection reasons:**
- Insufficient information provided
- Duplicate of existing organisation
- Inappropriate purpose
- User should join existing organisation instead

## Update organisations

You can update organisation details but cannot delete organisations.

### Step 1: Find the organisation

1. Navigate to **organisations**
2. Search for or select the organisation
3. Select on the organisation name

### Step 2: Edit details

1. Select **Edit** or **Update**
2. Modify the fields you want to change:
   - organisation name
   - Description
   - Contact information
   - Other editable fields

**Cannot be changed:**
- organisation key
- Creation date
- Historical data

### Step 3: Save changes

1. Review your changes
2. Select **Save** or **Update**
3. Wait for confirmation

**Expected outcome:**
- Changes are saved
- organisation members see updated information
- organisation key remains the same

:::info Impact of changes
Updating organisation details doesn't affect:
- Existing projects
- Generated tokens
- Collaborations with other organisations
:::

## Assign users to organisations

Users can only belong to one organisation at a time. You can assign and reassign users.

### Assign a user to an organisation

#### Option 1: From organisation view

1. Navigate to the organisation
2. Select **Members** or **Manage Members**
3. Select **Add User** or **Assign User**
4. Search for or select the user
5. Select **Assign** or **Add**

#### Option 2: From user view

1. Navigate to **Users** or **User Management**
2. Find and select the user
3. Select **Assign to organisation**
4. Select the organisation
5. Select **Assign** or **Save**

**Expected outcome:**
- User is assigned to the organisation
- User can now create projects in that organisation
- User sees the organisation in their account
- User receives organisation key

### Reassign a user to a different organisation

To move a user from one organisation to another:

1. Navigate to the user's current organisation
2. Select the user
3. Select **Reassign** or **Change organisation**
4. Select the new organisation
5. Confirm the reassignment

**Expected outcome:**
- User is moved to the new organisation
- User loses direct access to previous organisation
- User can create projects in new organisation only
- Previous projects remain in old organisation

:::warning Reassignment impacts
- User can no longer create projects in previous organisation
- User can still see projects they created previously (if permissions allow)
- Existing tokens remain valid
:::

### Remove user from organisation

To remove a user from an organisation:

1. Navigate to the organisation
2. Find the user in the members list
3. Select **Remove** or **Unassign**
4. Confirm removal

**Expected outcome:**
- User becomes a free user (no organisation)
- User cannot create projects until assigned to an organisation
- Can still be reassigned to any organisation

## View organisation details

### organisation information

For each organisation, you can view:

**Basic information:**
- organisation name
- Description
- Contact details
- Creation date
- organisation key

**Members:**
- List of all assigned users
- User roles within the organisation
- When each user was assigned

**Projects:**
- All projects created by the organisation
- Project status
- Request counts

**Activity:**
- Recent activity
- Token generation history
- Collaboration activities

### organisation statistics

View metrics such as:
- Number of members
- Number of projects
- Number of requests
- Tokens generated
- Active collaborations

## Best practices

### organisation creation

- **Use clear names**: Make organisations easy to identify
- **Document purpose**: Include detailed descriptions
- **Verify legitimacy**: Ensure requests are appropriate
- **Consistent naming**: Use organizational naming conventions

### Approval process

- **Timely reviews**: Review requests promptly
- **Clear communication**: Provide clear rejection reasons
- **Verification**: Verify user identity when needed
- **Record keeping**: Document approval decisions

### User assignment

- **One organisation per user**: Remember users can only belong to one organisation
- **Plan reassignments**: Consider impact before moving users
- **Communication**: Inform users of organisation changes
- **Access verification**: Confirm users need access before assignment

### organisation updates

- **Accurate information**: Keep organisation details current
- **Change documentation**: Document why updates were made
- **User notification**: Inform organisation members of significant changes

## Common scenarios

### A user requests to create an organisation

1. Review the request in pending requests
2. Verify the user's information and justification
3. Check if a similar organisation already exists
4. Approve if appropriate or reject with reason

### Multiple users need to work together

1. Create a single organisation for the group
2. Assign all users to that organisation
3. Users can create shared projects
4. Users collaborate within the organisation

### A user needs to switch organisations

1. Navigate to the user's current organisation
2. Reassign user to the new organisation
3. Notify user of the change
4. Confirm user has access to new organisation

### An organisation's details are incorrect

1. Navigate to the organisation
2. Select Edit
3. Update the incorrect information
4. Save changes
5. Notify organisation members if significant

## Troubleshooting

### Can't create an organisation

**Possible reasons:**
- Technical issue
- Duplicate organisation name
- Missing required fields

**Solution:**
1. Verify all required fields are filled
2. Check for duplicate names
3. Try again or contact technical support

### User isn't seeing their organisation after approval

**Possible reasons:**
- User hasn't logged out and back in
- Assignment didn't complete
- Technical delay

**Solution:**
1. Ask user to log out and log back in
2. Verify user is assigned in system
3. Check for error messages

### Can't update organisation details

**Possible reasons:**
- Insufficient permissions (shouldn't happen for admins)
- organisation locked for technical reasons
- System issue

**Solution:**
1. Verify you have admin permissions
2. Try again later
3. Contact technical support

## Next steps

- Learn how to [approve pseudonymisation requests](/user-guide/manage-requests)
- Review [best practices](/user-guide/../best-practices) for portal administration
- Check the [FAQ](/user-guide/../faq) for common administrative questions
