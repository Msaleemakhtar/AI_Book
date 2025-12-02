# ADR-0004: CSS Variables for Theme Customization

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

Use **CSS variables (custom.css) with minimal component swizzling** for theme customization while maintaining easy upgradability.

**Theme Customization Strategy**:
- **Primary Approach**: CSS variables in `src/css/custom.css` (Infima CSS framework)
- **Variable Scope**: Colors, fonts, spacing, layout dimensions, dark mode overrides
- **Component Swizzling**: Minimal - only for Navbar logo and Footer content
- **Swizzle Command**: Use `npm run swizzle @docusaurus/theme-classic [Component] -- --eject` sparingly
- **Upgrade Path**: Prefer CSS-only changes to avoid breaking changes in Docusaurus updates

**Customization Boundaries**:
- ✅ **CSS Variables**: Colors, typography, spacing, borders, shadows
- ✅ **Minimal Swizzling**: Navbar logo, Footer copyright, Hero section (landing page)
- ❌ **Avoid Swizzling**: Sidebar, search, TOC, pagination (use defaults)

## Consequences

### Positive

- **Easy Upgrades**: CSS variables survive Docusaurus version upgrades without breaking changes
- **Maintainability**: Single `custom.css` file contains all visual customizations (no scattered component overrides)
- **Performance**: No additional React components or JavaScript - pure CSS transformations
- **Learning Curve**: Non-developers can modify colors/fonts without React knowledge
- **Debugging**: CSS changes visible in browser DevTools, easy to iterate
- **Dark Mode Support**: Built-in `[data-theme='dark']` selector for automatic dark mode overrides
- **Accessibility Preserved**: Docusaurus default components maintain WCAG 2.1 AA compliance
- **Low Maintenance**: Upgrading Docusaurus requires minimal theme refactoring

### Negative

- **Limited Customization**: Cannot change component behavior or structure (e.g., sidebar layout logic)
- **CSS-Only Constraints**: Complex visual effects (animations, transitions) harder to achieve than with React
- **Swizzling Friction**: When swizzling IS needed, requires understanding Docusaurus component internals
- **Design System Gaps**: Infima CSS framework less comprehensive than Tailwind or Chakra UI
- **Breaking Changes Risk**: Swizzled components may break on Docusaurus major version updates
- **No Component Library**: Cannot easily integrate third-party component libraries (Material-UI, Ant Design)

## Alternatives Considered

### Alternative A: Full Component Swizzling

**Why Considered**: Maximum control over component behavior, can implement custom layouts and logic

**Why Rejected**:
- **Upgrade Nightmare**: Every Docusaurus update risks breaking swizzled components
- **High Maintenance**: Must manually merge upstream fixes into swizzled components
- **Complexity**: Requires deep knowledge of Docusaurus theme internals
- **Testing Burden**: Custom components need additional testing (accessibility, responsiveness)
- **Inconsistent UX**: Easy to diverge from Docusaurus conventions (confuses contributors familiar with standard themes)

### Alternative B: No Customization (Use Docusaurus Defaults)

**Why Considered**: Fastest setup, zero maintenance, guaranteed upgradability, consistent with standard Docusaurus sites

**Why Rejected**:
- **Generic Appearance**: No brand identity (looks like every other Docusaurus site)
- **Poor Differentiation**: Educational content deserves thematic design aligned with robotics/AI
- **User Requirement**: Specification requires custom theming (FR-005: custom landing page, FR-006: branded theme)
- **Professional Presentation**: Academic textbook benefits from visual polish

### Alternative C: Styled-Components or CSS-in-JS

**Why Considered**: Co-locate styles with components, dynamic styling based on props, better TypeScript integration

**Why Rejected**:
- **Overkill for Static Site**: CSS-in-JS adds runtime overhead for static content
- **Docusaurus Friction**: Not officially supported pattern, conflicts with Infima CSS framework
- **Bundle Size**: Adds 10-15KB to JavaScript bundle (styled-components library)
- **Migration Complexity**: Would require swizzling all components to inject styled-components
- **Team Skill**: CSS variables simpler for contributors unfamiliar with CSS-in-JS

### Alternative D: Tailwind CSS

**Why Considered**: Utility-first CSS, rapid prototyping, comprehensive design system, excellent TypeScript support

**Why Rejected**:
- **Docusaurus Conflict**: Tailwind's reset CSS conflicts with Infima (Docusaurus default framework)
- **Setup Complexity**: Requires PostCSS configuration and Tailwind plugin for Docusaurus
- **Swizzle All Components**: Must swizzle every component to add Tailwind classes (defeats maintainability goal)
- **Learning Curve**: Team must learn Tailwind's utility class system
- **Bundle Size**: Adds 50-100KB to CSS bundle even with purging

## References

- Feature Spec: [specs/001-docusaurus-setup/spec.md](../../specs/001-docusaurus-setup/spec.md) (FR-005, FR-006, FR-007)
- Implementation Plan: [specs/001-docusaurus-setup/plan.md](../../specs/001-docusaurus-setup/plan.md) (Phase 3)
- Research Analysis: [specs/001-docusaurus-setup/research.md](../../specs/001-docusaurus-setup/research.md) (Section 5)
- Related ADRs: ADR-0001 (Docusaurus Framework), ADR-0003 (TypeScript)
- Evaluator Evidence: PHR-0003 (Plan Phase Completion)
