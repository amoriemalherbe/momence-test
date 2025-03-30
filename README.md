# CNB Exchange Rates Converter
## Overview
- The application fetches the latest exchange rates from the CNB’s daily text file. 
  - A serverless function (`/api/exchange-rates`) is used to achieve this.
- The result is parsed, and exchange rates are displayed in a table.
- There is also a form which converts an amount from any currency into CZK.

## Tech Stack

- Vite
- React
- TypeScript
- React Query
- Styled Components
- Vercel (for deployment)

> Note: This project is designed to be deployed on Vercel. For full local testing (including the API routes) you should run the project using `vercel dev`.

---

## Setup and Installation

1. **Install Dependencies**
```bash

npm install
```
2. **Local Development with Vercel**

To run the application locally with full support for the serverless functions (API routes).

- Install Vercel CLI (if not installed):

```bash
npm install -g vercel
```
- Run the project locally:
```bash
vercel dev
```
This starts a local server (usually on port 3000) that emulates Vercel’s environment, ensuring that teh API routes (i.e.    `/api/exchange-rates`) work as expected. 

To run only the FE without testing the API routes, you can use the Vite dev server:
```bash
npm run dev
```
**Note that in this case, API routes won’t be available.**

---
## Deployment

The project is deployed on Vercel via GitHub integration. Every push to the main branch triggers an automatic deployment.

To view the deployed project, visit: [https://momence-test-chi.vercel.app/](https://momence-test-chi.vercel.app/).

---
## Testing

The project includes unit tests using Vitest.

To run tests:
```bash
npm run test
```
**Test Coverage:**

The tests included only handle the basic parsing logic of the exchange rates data.
Due to time constraints, more extensive tests (e.g. of UI components, API, and E2E tests) were not implemented.
