---
title: Pseudonymise your data
slug: /using-the-tokens
sidebar_label: "Pseudonymise your data"
sidebar_position: 3
description: "Learn how to use tokens in your technical environment"
---

# Pseudonymise Your Data

After generating tokens from the portal, you integrate them into your technical infrastructure. How you use tokens depends on your organisation's systems and technical setup.

## In this guide

- [Overview](#overview)
- [Common use cases](#common-use-cases)
- [What you need](#what-you-need)
- [Integration approaches](#integration-approaches)
- [Best practices](#best-practices)

## Overview

The Pseudonymisation Portal generates tokens, but **you control how they're used**. Tokens work with backend pseudonymisation services, and the specific implementation depends on your:

- Technical infrastructure
- Data pipelines
- Application architecture
- Security requirements
- Team expertise

:::tip Not sure where to start?
If you're unsure how to integrate tokens, consult your technical team, IT department, or software developers. They can design the implementation that fits your systems.
:::

## Common use cases

Here are typical scenarios where organisations use tokens:

### Data sharing between organisations

You need to share patient data with a research partner:

1. Generate a pseudonymisation token in the portal
2. Apply the token to your dataset using your data pipeline
3. Share the pseudonymised data with your partner
4. Keep the token secure—only authorized personnel access it

**Result**: Your partner receives pseudonymised data but cannot reverse it to see original values.

### Research data processing

You're running analysis on sensitive data:

1. Generate a pseudonymisation token for your project
2. Integrate the token into your data processing scripts
3. Pseudonymise data before analysis
4. Store pseudonymised results

**Result**: Researchers work with protected data throughout the analysis.

### Third-party data sharing

You need to share already-pseudonymised data with an external vendor:

1. Generate a secondary token in the portal
2. Apply it to existing pseudonymised data
3. Share the doubly-pseudonymised data
4. The vendor cannot access original or first-level pseudonymised values

**Result**: Additional privacy layer protects against correlation with other datasets.

### Audit and verification

You need to verify specific records:

1. Generate a reverse token (if within retention period)
2. Use it to reveal original values for auditing
3. Complete verification
4. Secure or destroy the reverse token after use

**Result**: Controlled access to original data for legitimate purposes.

## What you need

Before integrating tokens:

### From the portal

- [ ] Pseudonymisation token (and any reverse/secondary tokens)
- [ ] Authorization token (authenticates your requests)
- [ ] Project settings (retention period, treatment type)

### From your technical team

- [ ] Integration plan for your systems
- [ ] Secure storage solution for tokens
- [ ] Access control policies
- [ ] Technical documentation for backend services

## Integration approaches

Token integration varies by organisation. Here are common approaches:

### Manual integration

**Suitable for**: Small datasets, one-off projects, proof of concept

**How it works**:
1. Receive tokens from portal
2. Manually configure your application or script
3. Send requests to backend services
4. Process results

### Automated pipelines

**Suitable for**: Ongoing data sharing, large datasets, production systems

**How it works**:
1. Store tokens in key management systems
2. Integrate tokens into automated data pipelines
3. Schedule regular pseudonymisation operations
4. Monitor and log all token usage

### API integration

**Suitable for**: Real-time processing, web applications, microservices

**How it works**:
1. Store tokens securely in application configuration
2. Call backend services via API with authorization tokens
3. Receive pseudonymised data in response
4. Use data in your application

### Batch processing

**Suitable for**: Large volumes, scheduled operations, data warehouses

**How it works**:
1. Extract data in batches
2. Apply tokens via batch processing scripts
3. Load pseudonymised data into target systems
4. Archive or delete original data

:::info Implementation is flexible
There's no single "correct" way to use tokens. Choose the approach that fits your technical environment, resources, and requirements.
:::

## Best practices

Follow these guidelines regardless of your integration approach:

### Security

- **Store tokens securely**: Use key management systems or secure vaults
- **Limit access**: Only authorized personnel should access tokens
- **Never share via email**: Use secure channels for token distribution
- **Rotate tokens**: Generate new tokens periodically for long-running projects

### Operations

- **Test first**: Validate tokens with sample data before production use
- **Monitor usage**: Track when and how tokens are used
- **Document mappings**: Maintain records linking tokens to projects and requests
- **Plan for retention**: Know when tokens expire and prepare accordingly

### Governance

- **Follow policies**: Adhere to your organisation's data protection policies
- **Audit regularly**: Review token usage and access logs
- **Train staff**: Ensure users understand token handling procedures
- **Update procedures**: Revise integration as requirements change

## Next steps

Now that you understand token usage:

- Review [Tokens](/user-guide/tokens) for conceptual background
- Learn about [generating tokens](/user-guide/generate-tokens) step by step
- See [Troubleshooting](/user-guide/troubleshooting) if you encounter issues
- Consult your technical team about integration options
- Test with sample data before production deployment

:::tip Need help?
If you're unsure how to proceed, speak with your IT department, software developers, or technical consultants. They can design an integration approach suited to your infrastructure.
:::
