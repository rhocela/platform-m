---
sidebar_position: 2
---

# Deploy Platform-M

Deploy your own instance of the Platform-M application to give your organisation complete control over the application.

In this guide  
> [Prerequisites](#prerequisites)  
> [Configure your environment](#configure-your-environment)  
> [Deploy the application](#deploy-the-application)  

## Prerequisites

The Platform-M application integrates with your organisations existing tools and infrastructure as described in the [architecture overview](architecture-overview.md). Before you begin deployment, prepare your environment:

- Provision a **virtual machine (VM)** or cloud instance to host the application.
- Install **Docker** to build, run, and manage application containers.
- Set up a managed **PostgreSQL database** instance. Ensure the database is accessible and configured for secure connections.
- Configure an **OpenID Connect (OIDC) provider** to manage user authentication and access control.
- Set up an **SMTP server** to send notification emails to users.

## Configure your environment

1. Create an `.env` file in your deployment environment with the required environment variables.
2. Configure the **mandatory environment variables** to match your environment settings.
3. [Configure the application](configure-the-application.md).

## Deploy the application

After you complete the configuration for the application, you can deploy Platform-M:

1. Get the latest release:
   ```sh
   git checkout tags/v4.0.1
   ```

2. Build the Docker image:
   ```sh
   docker build -t <your-app-name> .
   ```
   For example: 
   ```sh
   docker build -t platform-m .
   ``` 

3. Initialize the database:
   ```sh
   docker run --env-file .env <your-app-name> alembic upgrade head
   ```
4. Start the application:
   ```sh
   docker run -d --env-file .env -p 8000:8000 <your-app-name>
   ```

    To open your Platform-M application, open your browser and go to `http://localhost:8000`.


