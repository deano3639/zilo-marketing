# Zilo Marketing

## Overview

A full-stack web application for Zilo Marketing, a custom web development agency focused on high-performance, custom-coded websites. The project uses a React frontend with Express backend, featuring a minimalist dark-mode design system optimized for speed and conversion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds

The frontend follows a component-based architecture with:
- Path alias `@/` pointing to `client/src/`
- Path alias `@shared/` pointing to `shared/`
- Comprehensive UI component library based on Radix UI primitives
- CSS variables for theming with dark mode support

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Session Management**: Express sessions with PostgreSQL store option (connect-pg-simple)

The backend uses a simple storage interface pattern allowing for easy swapping between in-memory storage (development) and database storage (production).

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Migrations**: Managed via drizzle-kit, output to `./migrations`
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod

Database connection requires `DATABASE_URL` environment variable.

### Build System
- **Development**: TSX for running TypeScript directly, Vite for frontend HMR
- **Production Build**: Custom build script bundles server with esbuild, client with Vite
- **Output**: `dist/` directory with `index.cjs` (server) and `public/` (static assets)

### Key Design Decisions

1. **Monorepo Structure**: Client, server, and shared code in single repository with TypeScript path aliases for clean imports.

2. **Shared Schema**: Database schema defined once in `shared/schema.ts`, used by both backend (ORM) and frontend (type inference).

3. **Storage Abstraction**: `IStorage` interface in `server/storage.ts` allows switching storage implementations without changing business logic.

4. **Component Library**: Pre-built shadcn/ui components reduce development time while maintaining customization through CSS variables.

## External Dependencies

### Database
- PostgreSQL (required for production)
- Connection via `DATABASE_URL` environment variable

### UI Framework
- Radix UI primitives (accessibility-focused headless components)
- Tailwind CSS for utility-first styling
- Class Variance Authority for component variants

### Development Tools
- Replit-specific Vite plugins for development experience (cartographer, dev-banner, runtime-error-modal)

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit`: Database ORM and migration tooling
- `@tanstack/react-query`: Server state management
- `wouter`: Lightweight client-side routing
- `zod`: Runtime type validation
- `express-session` / `connect-pg-simple`: Session management