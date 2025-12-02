# ADR-0002: GitHub Actions Deployment Automation

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

Use **GitHub Actions with peaceiris/actions-gh-pages action** for automated deployment to GitHub Pages with zero external service dependencies.

**Deployment Stack Components**:
- **CI/CD Platform**: GitHub Actions (native to repository)
- **Deployment Action**: `peaceiris/actions-gh-pages@v3`
- **Build Environment**: Ubuntu-latest with Node.js 20.x LTS
- **Target Platform**: GitHub Pages (gh-pages branch)
- **Caching Strategy**: npm cache via `actions/setup-node@v4`
- **Permissions**: `contents: write` for pushing to gh-pages branch

**Workflow Trigger**: Push to `main` branch (automatic deployment on merge)

## Consequences

### Positive

- **Zero External Dependencies**: No third-party services required (Vercel, Netlify, AWS) - fully self-contained within GitHub
- **Free Unlimited Builds**: GitHub Actions provides unlimited build minutes for public repositories
- **Native Integration**: Seamless integration with repository, no OAuth tokens or external accounts needed
- **Automatic SSL**: GitHub Pages provides free SSL certificates (*.github.io domains)
- **Version Control for Deploys**: Each deployment tracked as commit to gh-pages branch with full history
- **Reliable CI/CD**: Industry-standard GitHub Actions infrastructure with 99.9% uptime SLA
- **No Vendor Lock-In**: Can migrate to alternative deployment without service dependencies
- **Caching Optimization**: npm cache reduces install time from 45s to 10-15s on subsequent builds
- **Build Logs**: Complete build output accessible via GitHub Actions UI for debugging

### Negative

- **Slower Deployment**: 3-5 minute total deployment time (checkout + build + deploy) vs <1 minute on Vercel
- **Bandwidth Limits**: GitHub Pages has 100GB/month bandwidth soft limit (acceptable for educational content)
- **No Edge Network**: GitHub Pages CDN less optimized than Vercel/Netlify edge networks (slightly slower global access)
- **Limited Build Concurrency**: Public repos get 20 concurrent jobs (rarely an issue for single-site projects)
- **Manual Rollback**: Must revert git commit and re-trigger workflow (no one-click rollback UI)
- **No Deploy Previews**: PR previews require additional setup (not included in peaceiris action by default)

## Alternatives Considered

### Alternative A: Vercel

**Why Considered**: Fastest deployments (<1 min), excellent DX, automatic PR previews, edge network

**Why Rejected**:
- External service dependency (account required)
- Free tier limits (100GB bandwidth, 100 builds/month)
- Vendor lock-in to Vercel platform
- Adds complexity for open-source contributors (they'd need Vercel accounts)
- GitHub Pages is sufficient for educational content traffic

### Alternative B: Netlify

**Why Considered**: Great UI/UX, automatic PR previews, form handling, serverless functions

**Why Rejected**:
- External service dependency (account required)
- Free tier limits (100GB bandwidth, 300 build minutes/month)
- Less integration with GitHub ecosystem than GitHub Actions
- Overkill for static site (serverless functions not needed for v1)

### Alternative C: Manual gh-pages npm Package

**Why Considered**: Direct deployment from local machine, no CI/CD setup

**Why Rejected**:
- Requires manual execution (`npm run deploy`) - not automated on merge
- Inconsistent deployments (different developer environments)
- No build logs or deployment history
- More error-prone (forgetting to deploy after merge)
- Less reliable than GitHub Actions infrastructure

### Alternative D: GitHub Pages Source Branch (Direct Deployment)

**Why Considered**: Simplest approach - just push to gh-pages branch directly

**Why Rejected**:
- No build step (requires pre-built artifacts committed to repo)
- Large git repository size (committing build/ directory with every change)
- No CI validation (broken builds could be deployed)
- Violates gitignore best practices (build artifacts in source control)

## References

- Feature Spec: [specs/001-docusaurus-setup/spec.md](../../specs/001-docusaurus-setup/spec.md) (FR-016, FR-017, FR-018, SC-013)
- Implementation Plan: [specs/001-docusaurus-setup/plan.md](../../specs/001-docusaurus-setup/plan.md) (Phase 4)
- Research Analysis: [specs/001-docusaurus-setup/research.md](../../specs/001-docusaurus-setup/research.md) (Section 2: PRIMARY FOCUS)
- Quickstart Guide: [specs/001-docusaurus-setup/quickstart.md](../../specs/001-docusaurus-setup/quickstart.md) (Step 8)
- Related ADRs: ADR-0001 (Docusaurus Framework)
- Evaluator Evidence: PHR-0003 (Plan Phase Completion)
