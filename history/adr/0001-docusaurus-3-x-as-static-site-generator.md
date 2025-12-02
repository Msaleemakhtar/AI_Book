# ADR-0001: Docusaurus 3.x as Static Site Generator

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

Use **Docusaurus 3.x with TypeScript** as the static site generator for the Physical AI & Humanoid Robotics educational textbook.

**Technology Stack Components**:
- **Framework**: Docusaurus 3.6.0+ (React-based SSG)
- **Content Format**: MDX (Markdown + JSX)
- **Configuration**: TypeScript for type-safe config and components
- **Build System**: Webpack (bundled with Docusaurus)
- **Runtime**: React 18.x with server-side rendering (SSR)

## Consequences

### Positive

- **Documentation-First Design**: Docusaurus is purpose-built for documentation sites with automatic sidebar generation, search, versioning, and navigation out-of-the-box
- **MDX Support**: Native support for Markdown with JSX components enables embedding React components (e.g., future RAG chatbot widget) directly in content
- **React Ecosystem**: Full access to React component libraries and patterns, essential for future interactive features (chatbot, authentication, personalization)
- **GitHub Pages Integration**: Native deployment support with zero additional configuration beyond GitHub Actions workflow
- **Auto-Generated Navigation**: Sidebar automatically generated from directory structure (`_category_.json` files) reduces maintenance overhead
- **TypeScript Safety**: Type-safe configuration via `@docusaurus/types` catches errors at compile time
- **Performance Optimizations**: Built-in code splitting, lazy loading, and SSR for fast initial page loads
- **Accessibility Defaults**: WCAG 2.1 compliant HTML structure and keyboard navigation by default
- **Hot Reload**: 1-2 second reload during development for rapid iteration

### Negative

- **React Lock-In**: Cannot easily migrate to Vue (VitePress) or Svelte-based frameworks later without complete rewrite
- **Webpack Build Speed**: Slower builds compared to Vite-based alternatives (45-90 seconds vs 10-20 seconds for small sites)
- **Opinionated Structure**: Limited flexibility in URL structure and routing compared to Next.js or Remix
- **Bundle Size**: Larger JavaScript bundles than static-only generators like MkDocs (3-6MB vs <1MB)
- **Learning Curve**: Requires understanding React and MDX syntax for content authors wanting to embed components
- **Version Churn**: Docusaurus 3.x is relatively new (released 2024) with occasional breaking changes

## Alternatives Considered

### Alternative A: Nextra (Next.js-based)

**Why Considered**: More flexible routing, Vite-based for faster builds, growing ecosystem

**Why Rejected**:
- Requires manual GitHub Pages configuration (no native deploy action)
- Less mature documentation-specific features (no auto-generated sidebar)
- More complex setup for basic documentation needs
- Fewer documentation-focused themes and plugins

### Alternative B: VitePress (Vue-based)

**Why Considered**: Extremely fast builds (Vite), lightweight bundles, simple Markdown-focused

**Why Rejected**:
- Vue ecosystem incompatible with planned React components (RAG chatbot)
- Would require learning Vue in addition to React for future features
- Smaller plugin ecosystem for documentation features
- Less robust MDX support (Markdown-only by default)

### Alternative C: MkDocs (Python-based)

**Why Considered**: Lightweight, fast, excellent for pure documentation, large theme ecosystem

**Why Rejected**:
- No React component integration (cannot embed chatbot widget)
- Limited interactivity (pure static HTML, no client-side JS framework)
- Python dependency adds complexity for Node.js-centric team
- Cannot leverage React libraries for future features

## References

- Feature Spec: [specs/001-docusaurus-setup/spec.md](../../specs/001-docusaurus-setup/spec.md)
- Implementation Plan: [specs/001-docusaurus-setup/plan.md](../../specs/001-docusaurus-setup/plan.md)
- Research Analysis: [specs/001-docusaurus-setup/research.md](../../specs/001-docusaurus-setup/research.md) (Section 1)
- Related ADRs: ADR-0002 (GitHub Actions Deployment), ADR-0003 (TypeScript Configuration)
- Evaluator Evidence: PHR-0003 (Plan Phase Completion)
