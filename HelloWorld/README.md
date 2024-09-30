Here's a concise note you can add to your GitHub repository for installing Angular:

---

# Angular Installation Guide

## Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can verify this by running the following commands:

```bash
node -v
npm -v
```

If not installed, download them from [Node.js official website](https://nodejs.org/).

## Step 1: Install Angular CLI

Install Angular CLI globally using npm:

```bash
npm install -g @angular/cli
```

To verify the installation, run:

```bash
ng version
```

## Step 2: Create a New Angular Project

Create a new Angular project using the following command:

```bash
ng new my-angular-app
```

Follow the prompts to configure the project (e.g., choose routing, stylesheet format).

## Step 3: Navigate to the Project

Move to the project directory:

```bash
cd my-angular-app
```

## Step 4: Run the Application

Start the development server using:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200` to view the running application.
