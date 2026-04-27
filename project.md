# Project Context

## Identity
- Repo: riverxapp/blocksmith-vxx
- Branch: main
- Code Type: vite
- Action: create

## Brand Context
- Brand: Blocksmith Vxx
- Positioning: A fast React single-page product experience that keeps workflows intuitive and responsive.
- Audience: Primary product users

## Product Vision
Blocksmith Vxx addresses: Define and execute the project scope with user-visible outcomes.  
The product roadmap should remain coherent across requests, with each step delivering user-visible value and explicit acceptance criteria.

## Scope Foundations
### Core Problem
Define and execute the project scope with user-visible outcomes.

### Goals
- Keep requirements coherent across requests.
- Ship user-visible value in small, completable iterations.

### Constraints
- Keep changes scoped to requested surfaces.
- Preserve existing architecture and working flows.

### Non-Goals
- Rebuilding unrelated modules from scratch.

### Success Metrics
- Each request has explicit acceptance criteria and clear done conditions.

### Roles
- Owner
- Member

### Core Entities
- Primary workspace entity
- User profile

### Integrations
- (none)

## Full Build Roadmap
1. Request 1: Brand alignment + SPA shell + core route/page surfaces.
2. Request 2: Core entity CRUD depth, state handling, and validation.
3. Request 3: Collaboration workflows, role-aware behavior, and UX resilience.
4. Request 4: Reporting, automations, and performance/quality polish.

## Request 1 Ready to Implement
- Brand: Blocksmith Vxx
- Positioning: A fast React single-page product experience that keeps workflows intuitive and responsive.
- Scope: Branding/content alignment and foundational user-visible surfaces only.

### Jobs
1. App Shell + Entry: align `src/main.tsx` / `src/App.tsx` bootstrap and global shell copy for product positioning.
2. Core Pages: create/update foundational page surfaces and route-level structure needed for request scope.
3. Shared Components: establish reusable TSX primitives/sections for consistent UI patterns.
4. Primary Workflows: wire baseline view-state handling (loading/empty/error/success) for initial user journey.

## README Seed (Template Context)
# RiverX Base Vite Template

Production-ready base template for RiverX-generated apps using Vite + React + TypeScript + Tailwind + shadcn/ui (default style).

## Commands

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```