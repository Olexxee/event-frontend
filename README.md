# Events Frontend

React + TypeScript frontend for the Events platform and its customer-facing experiences marketplace, Vybe.

## Current scope

This repository starts with the application shell and frontend engineering foundation. It does not yet implement customer journeys, authentication screens, provider dashboards, or backend API integration.

## Stack

- React 19
- TypeScript in strict mode
- Vite
- Node.js 22

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run build
```

## Architecture rules

- Keep UI composition separate from domain API clients and feature workflows.
- Do not duplicate backend business rules in the browser.
- Treat the backend API and its approved contracts as the source of truth.
- Do not invent payment, booking, inventory, or authorization behavior in the frontend.
- Keep environment-specific configuration out of source control.
- Add routes and feature modules only when their user journeys are defined.
