# ADR-0003: TypeScript for Configuration and Components

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-03
- **Feature:** 001-docusaurus-setup
- **Context:** Physical AI & Humanoid Robotics Textbook project

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Use **TypeScript with strict mode** for all Docusaurus configuration files and React components.

**TypeScript Configuration**:
- **Base Config**: Extends `@docusaurus/tsconfig` (Docusaurus official TypeScript preset)
- **Compiler Mode**: Strict mode enabled (`"strict": true`)
- **Path Aliases**: `@site/*` mapped to `./src/*` for cleaner imports
- **Target Files**: `docusaurus.config.ts`, custom components (`*.tsx`), theme overrides
- **MDX Integration**: TypeScript imports allowed in MDX files

**Type Safety Scope**:
- Docusaurus configuration object (site metadata, navbar, footer, plugins)
- React component props and state
- Theme customization and swizzled components
- Future RAG chatbot integration interfaces

## Consequences

### Positive

- **Early Error Detection**: Configuration typos and incorrect property names caught at compile-time (e.g., misspelled `baseUrl` or invalid plugin options)
- **IDE Autocomplete**: Full IntelliSense for Docusaurus config object, React components, and theme API
- **Refactoring Safety**: Type-checked changes across components when modifying props or interfaces
- **Documentation via Types**: Type signatures serve as inline documentation for component APIs
- **Future-Proof**: Prepared for complex React components (RAG chatbot, authentication, personalization)
- **Reduced Runtime Errors**: Type checking eliminates entire classes of bugs before deployment
- **Better Onboarding**: New contributors get immediate feedback on API usage via IDE tooltips
- **Gradual Adoption**: Can start with loose types (`any`) and tighten incrementally

### Negative

- **Learning Curve**: Contributors unfamiliar with TypeScript need to learn type annotations and generics
- **Initial Setup Time**: Requires `tsconfig.json` configuration and `@docusaurus/types` installation
- **Build Time Overhead**: Type-checking adds 5-10 seconds to build process (minor for <2 minute total)
- **Verbose Syntax**: Type annotations add lines of code (e.g., `props: Props` vs just `props`)
- **Strict Mode Complexity**: Strict null checks and type guards can be verbose for edge cases
- **Migration Friction**: Converting existing JavaScript code to TypeScript requires refactoring

## Alternatives Considered

### Alternative A: JavaScript (No TypeScript)

**Why Considered**: Simpler setup, no type annotations, faster initial development, lower barrier to entry

**Why Rejected**:
- No compile-time validation of Docusaurus config (typos only caught at runtime)
- IDE support limited (no autocomplete for config options)
- Refactoring risky (renaming props could break components silently)
- Harder to maintain as codebase grows (unclear component interfaces)
- Docusaurus 3.x officially supports TypeScript (not leveraging first-class feature)

### Alternative B: TypeScript with Loose Mode

**Why Considered**: Gradual adoption, less strict type checking, easier migration from JavaScript

**Why Rejected**:
- Defeats primary benefit (catching errors at compile-time)
- Still requires TypeScript setup without full type safety
- Allows `any` types to proliferate (tech debt accumulation)
- No clear upgrade path from loose to strict (requires eventual refactor)

### Alternative C: JSDoc Type Comments

**Why Considered**: Type hints in JavaScript via comments, no TypeScript compiler needed

**Why Rejected**:
- Less reliable than TypeScript (types not enforced, only hinted)
- Poor IDE support compared to native TypeScript
- Verbose comment syntax clutters code
- No compile-time type checking (only IDE warnings)
- Not officially supported by Docusaurus tooling

## References

- Feature Spec: [specs/001-docusaurus-setup/spec.md](../../specs/001-docusaurus-setup/spec.md) (FR-001, FR-003)
- Implementation Plan: [specs/001-docusaurus-setup/plan.md](../../specs/001-docusaurus-setup/plan.md) (Phase 1, Phase 6)
- Research Analysis: [specs/001-docusaurus-setup/research.md](../../specs/001-docusaurus-setup/research.md) (Section 6)
- Related ADRs: ADR-0001 (Docusaurus Framework)
- Evaluator Evidence: PHR-0003 (Plan Phase Completion)
