# Implementation Plan: Docusaurus Framework Setup

**Branch**: `001-docusaurus-setup` | **Date**: 2025-12-02 | **Spec**: [spec.md](./spec.md)

**Special Focus**: GitHub Pages deployment configuration and static site generation workflow

---

## Summary

Implement Docusaurus 3.x as the static site generator for the Physical AI & Humanoid Robotics Textbook, with complete GitHub Pages deployment automation, custom theming, and 13-week placeholder content structure. This establishes the foundation for future RAG chatbot, authentication, and personalization features.

**Core Technical Approach**:
- Docusaurus 3.x with TypeScript for type-safe configuration
- GitHub Actions + peaceiris/actions-gh-pages for zero-config deployment
- Module-based directory structure for 13-week curriculum
- CSS variables + minimal swizzling for custom theme
- MDX for content with React component integration points

---

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 20.x LTS
**Primary Dependencies**:
- `@docusaurus/core` 3.6.0+
- `@docusaurus/preset-classic` 3.6.0+
- `react` 18.x
- `react-dom` 18.x

**Storage**: Filesystem-based (MDX files, JSON config, no database)
**Testing**: Manual testing + Lighthouse audits (no unit tests for v1)
**Target Platform**: Static HTML/CSS/JS → GitHub Pages
**Project Type**: Web (static site)
**Performance Goals**:
- Build time <2 minutes
- FCP <2 seconds
- Lighthouse scores >90

**Constraints**:
- Build output <10MB
- WCAG 2.1 Level AA compliance
- Hot-reload <2 seconds
- Zero build errors/warnings

**Scale/Scope**: 13 weeks (15-20 pages), 4 modules, ~50KB MDX content

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Gates from Constitution

**✅ SDD Workflow Compliance**:
- Spec created via `/sp.specify` ✅
- Clarify executed via `/sp.clarify` ✅ (zero questions - spec was comprehensive)
- Plan created via `/sp.plan` ✅ (this document)
- Tasks will follow via `/sp.tasks`

**✅ Learning-First Mindset**:
- Research conducted before implementation (Context7 MCP for Docusaurus docs)
- No copy-paste: understanding each config option
- PHR will be created after plan completion

**✅ Quality Standards**:
- Linting: ESLint for TypeScript, configured in Docusaurus
- Performance targets: <2min build, <2s FCP, >90 Lighthouse
- Accessibility: WCAG 2.1 AA (Docusaurus defaults + manual verification)
- Documentation: README.md + contributing.md required

**✅ Technology Constraints**:
- Docusaurus 3.x ✅ (prescribed stack)
- Node.js 20.x LTS ✅ (Docusaurus requirement)
- GitHub Pages deployment ✅ (prescribed)

**✅ Code Quality** (applies to custom components):
- Functions <50 lines (only ChatbotWidget.tsx, which is empty placeholder)
- TypeScript for all .ts/.tsx files
- No code duplication

**N/A Git Workflow**:
- Feature branch `001-docusaurus-setup` already created
- Commits will follow conventional format: `feat(docs): add week 1 content`
- PR to main will trigger deployment

**No Violations**: All constitution gates pass. No complexity justification needed.

---

## Project Structure

### Documentation (this feature)

```text
specs/001-docusaurus-setup/
├── spec.md              # Feature specification (completed)
├── plan.md              # This file (implementation plan)
├── research.md          # Phase 0 output (completed)
├── data-model.md        # Phase 1 output (completed)
├── quickstart.md        # Phase 1 output (completed)
├── contracts/           # N/A (no API contracts for static site)
└── tasks.md             # Phase 2 output (created by /sp.tasks - NOT this command)
```

### Source Code (repository root)

```text
AI_Book/
├── .github/
│   └── workflows/
│       └── deploy.yml                    # GitHub Actions deployment (PHASE 4)
│
├── book/                                 # Docusaurus working directory
│   ├── docusaurus.config.ts             # Main configuration (PHASE 2)
│   ├── tsconfig.json                    # TypeScript config (PHASE 2)
│   ├── package.json                     # Dependencies (PHASE 1)
│   ├── package-lock.json                # Lock file (generated)
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatbotWidget.tsx        # Empty placeholder (PHASE 5)
│   │   ├── css/
│   │   │   └── custom.css               # Theme customization (PHASE 3)
│   │   └── pages/
│   │       └── index.tsx                # Landing page (PHASE 5)
│   │
│   ├── docs/
│   │   ├── intro.md                     # Getting Started page (PHASE 5)
│   │   ├── module-1-ros2/
│   │   │   ├── _category_.json          # Module 1 metadata (PHASE 5)
│   │   │   ├── week-1-physical-ai-intro.md
│   │   │   ├── week-2-sensors.md
│   │   │   ├── week-3-ros2-basics.md
│   │   │   ├── week-4-ros2-packages.md
│   │   │   └── week-5-urdf-tf2.md       # (PHASE 5 - all weeks)
│   │   ├── module-2-simulation/
│   │   │   ├── _category_.json
│   │   │   ├── week-6-gazebo.md
│   │   │   └── week-7-unity.md
│   │   ├── module-3-isaac/
│   │   │   ├── _category_.json
│   │   │   ├── week-8-isaac-sim.md
│   │   │   ├── week-9-isaac-ros.md
│   │   │   └── week-10-manipulation.md
│   │   ├── module-4-vla/
│   │   │   ├── _category_.json
│   │   │   ├── week-11-humanoids.md
│   │   │   ├── week-12-locomotion.md
│   │   │   └── week-13-capstone.md
│   │   └── contributing.md              # Contributor guide (PHASE 6)
│   │
│   ├── static/
│   │   └── img/
│   │       └── logo.svg                 # Site logo (PHASE 3)
│   │
│   ├── build/                            # Build output (generated by npm run build)
│   └── node_modules/                    # Dependencies (generated by npm install)
│
├── .specify/                             # SDD structure (preserved)
├── specs/                                # Specs directory (preserved)
├── templates/                            # Prompt templates (preserved)
├── history/                              # PHRs and ADRs (preserved)
├── CLAUDE.md                             # Project instructions (preserved)
├── constitution.md                       # Constitution (preserved)
└── README.md                             # Root README (updated in PHASE 6)
```

**Structure Decision**:
- `book/` directory chosen as Docusaurus working directory per spec requirement (A-008)
- Separates SDD documentation (`specs/`, `.specify/`) from implementation (`book/`)
- All Docusaurus commands run from `book/` directory: `cd book && npm install`
- Preserves existing repository structure (`.specify/`, `CLAUDE.md`, `constitution.md`)

---

## Complexity Tracking

**No Violations Detected**: All constitution gates pass. No complexity justification needed.

---

## Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Developer Workflow                       │
├─────────────────────────────────────────────────────────────┤
│  1. Edit MDX files (book/docs/)                             │
│  2. Run npm start (hot-reload for preview)                  │
│  3. Commit changes to git                                   │
│  4. Push to main branch                                     │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              GitHub Actions CI/CD Pipeline                   │
├─────────────────────────────────────────────────────────────┤
│  1. Checkout code (actions/checkout@v4)                     │
│  2. Setup Node.js 20 (actions/setup-node@v4)                │
│  3. Install dependencies (npm ci)                           │
│  4. Build static site (npm run build)                       │
│  5. Deploy to gh-pages (peaceiris/actions-gh-pages@v3)      │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│               Static Site Generation (Build)                 │
├─────────────────────────────────────────────────────────────┤
│  MDX Files ──→ Webpack Bundling ──→ React SSR ──→ HTML      │
│                                                              │
│  Outputs:                                                    │
│  - Static HTML (one per page)                               │
│  - Bundled CSS (minified, hashed)                           │
│  - Bundled JS (code-split, minified, hashed)                │
│  - Assets (images, fonts)                                   │
│                                                              │
│  Build directory: book/build/                               │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│           GitHub Pages Hosting (gh-pages branch)             │
├─────────────────────────────────────────────────────────────┤
│  Public URL: https://[username].github.io/AI_Book/          │
│  SSL: Automatic (GitHub provides)                           │
│  CDN: GitHub's global CDN                                   │
│  Performance: Static files, fast delivery                   │
└─────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    End User Experience                       │
├─────────────────────────────────────────────────────────────┤
│  - Landing page with module cards                           │
│  - Sidebar navigation (4 modules, 13 weeks)                 │
│  - Responsive layout (mobile/tablet/desktop)                │
│  - Light/dark theme toggle                                  │
│  - Keyboard-accessible (WCAG 2.1 AA)                        │
│  - Fast loading (<2s FCP)                                   │
└─────────────────────────────────────────────────────────────┘
```

### Component Architecture

```
Docusaurus Framework
├── Configuration Layer
│   ├── docusaurus.config.ts    (Site metadata, GitHub Pages config)
│   ├── tsconfig.json            (TypeScript settings)
│   └── package.json             (Dependencies)
│
├── Content Layer
│   ├── MDX Files                (Week content, modules)
│   ├── _category_.json          (Sidebar metadata)
│   └── Front Matter             (Page-specific metadata)
│
├── Presentation Layer
│   ├── Theme (Classic Preset)
│   │   ├── Navbar               (Logo, links, theme toggle)
│   │   ├── Sidebar              (Auto-generated navigation)
│   │   ├── Footer               (License, social links)
│   │   └── Layout               (Page structure)
│   │
│   ├── Custom Styling
│   │   └── custom.css           (CSS variables, overrides)
│   │
│   └── Custom Components
│       ├── Landing Page         (index.tsx)
│       └── ChatbotWidget        (Empty placeholder)
│
├── Build Layer
│   ├── Webpack                  (Bundling)
│   ├── React SSR                (Static HTML generation)
│   └── Asset Optimization       (Minification, hashing)
│
└── Deployment Layer
    ├── GitHub Actions           (CI/CD automation)
    └── GitHub Pages             (Static hosting)
```

---

## Implementation Phases

### Phase 1: Foundation & Setup (Priority: P1)

**Goal**: Initialize Docusaurus project with TypeScript and all dependencies

**Deliverables**:
- `book/package.json` with Docusaurus 3.x dependencies
- `book/package-lock.json` (generated by npm install)
- `book/node_modules/` (dependencies installed)
- `book/tsconfig.json` (TypeScript configuration)
- `book/.gitignore` (exclude node_modules, build)

**Dependencies**: None (starting from empty `book/` directory)

**Success Criteria**:
- SC-001: `npm install` completes in <60 seconds ✅
- Zero npm errors or warnings
- `node_modules/` contains Docusaurus packages
- `npm start` launches dev server (even with no content yet)

**Estimated Complexity**: Low (standard Docusaurus init)

**Tasks** (to be broken down in `/sp.tasks`):
1. Initialize npm project in `book/` directory
2. Install Docusaurus 3.x with TypeScript preset
3. Configure TypeScript (`tsconfig.json`)
4. Add `.gitignore` for build artifacts
5. Verify dev server starts

---

### Phase 2: Docusaurus Configuration (Priority: P1)

**Goal**: Configure Docusaurus for GitHub Pages deployment with correct baseUrl and metadata

**Deliverables**:
- `book/docusaurus.config.ts` (fully configured)
- GitHub Pages settings:
  - `url`, `baseUrl`, `organizationName`, `projectName`
  - `deploymentBranch: 'gh-pages'`
- Plugin configuration (classic preset)

**Dependencies**: Phase 1 complete (project initialized)

**Success Criteria**:
- Configuration passes TypeScript validation
- `npm start` serves site at `/AI_Book/` path
- Metadata appears in browser tab (title, description)
- Build succeeds with correct baseUrl

**Estimated Complexity**: Low (configuration file)

**Key Configuration Points**:
```typescript
// book/docusaurus.config.ts
export default {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Learn to Control Humanoid Robots with ROS 2, Gazebo, NVIDIA Isaac, and VLA',
  favicon: 'img/favicon.ico',

  url: 'https://[username].github.io',
  baseUrl: '/AI_Book/',
  organizationName: '[username]',
  projectName: 'AI_Book',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',           // Fail build on broken links
  onBrokenMarkdownLinks: 'warn',

  presets: [
    ['classic', {
      docs: {
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/[username]/AI_Book/tree/main/book/',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    }],
  ],

  themeConfig: {
    navbar: {
      title: 'Physical AI Textbook',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Start Learning'},
        {href: 'https://github.com/[username]/AI_Book', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Physical AI Textbook. Licensed under CC BY-NC-SA 4.0.`,
      links: [
        {label: 'GitHub', href: 'https://github.com/[username]/AI_Book'},
        {label: 'LinkedIn', href: 'https://linkedin.com/in/[username]'},
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
}
```

---

### Phase 3: Custom Theme Implementation (Priority: P3)

**Goal**: Apply custom colors, fonts, and branding while maintaining accessibility

**Deliverables**:
- `book/src/css/custom.css` (theme customization)
- `book/static/img/logo.svg` (site logo)
- CSS variables for colors and typography
- Responsive layout tweaks

**Dependencies**: Phase 2 complete (configuration exists)

**Success Criteria**:
- SC-007: Lighthouse scores >90 for Accessibility ✅
- SC-014: Color contrast ratio ≥4.5:1 (WCAG 2.1 AA) ✅
- Custom colors applied (primary, secondary, backgrounds)
- Custom fonts loaded (Inter for body, JetBrains Mono for code)
- Responsive layout works on mobile/tablet/desktop
- SC-012: Layout adapts at 320px, 768px, 1920px ✅

**Estimated Complexity**: Medium (CSS customization + accessibility verification)

**Key Styling**:
```css
/* book/src/css/custom.css */
:root {
  /* Primary colors - Robotics Green */
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;

  /* Fonts */
  --ifm-font-family-base: 'Inter', system-ui, -apple-system, sans-serif;
  --ifm-font-family-monospace: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

  /* Layout */
  --ifm-navbar-height: 60px;
  --ifm-footer-padding-vertical: 2rem;
  --ifm-code-font-size: 95%;
}

/* Dark mode overrides */
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-background-color: #1b1b1d;
  --ifm-background-surface-color: #242526;
}

/* Responsive breakpoints */
@media screen and (max-width: 768px) {
  :root {
    --ifm-navbar-height: 50px;
  }
}
```

---

### Phase 4: GitHub Actions Deployment Workflow (Priority: P2)

**Goal**: Automate build and deployment to GitHub Pages on every push to main

**Deliverables**:
- `.github/workflows/deploy.yml` (GitHub Actions workflow)
- Automated CI/CD pipeline
- Deployment to `gh-pages` branch

**Dependencies**: Phase 2 complete (build must work)

**Success Criteria**:
- SC-013: Workflow completes in <5 minutes ✅
- SC-003: Build succeeds with zero errors/warnings ✅
- SC-004: Build time <2 minutes ✅
- Deployment creates `gh-pages` branch automatically
- Site accessible at `https://[username].github.io/AI_Book/`

**Estimated Complexity**: Low (standard workflow configuration)

**Workflow File**:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: book/package-lock.json

      - name: Install dependencies
        run: cd book && npm ci

      - name: Build website
        run: cd book && npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./book/build
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

**Deployment Verification Steps**:
1. Push to main triggers workflow
2. GitHub Actions runs build (2-5 min)
3. Workflow shows green checkmark
4. `gh-pages` branch created/updated
5. GitHub Pages serves from `gh-pages` branch
6. Site live at `https://[username].github.io/AI_Book/`

---

### Phase 5: Content Structure & Placeholder Generation (Priority: P2)

**Goal**: Create complete 13-week content structure with placeholder text

**Deliverables**:
- `book/docs/intro.md` (introductory page)
- 4 module directories with `_category_.json`
- 13 week MDX files with placeholder content
- Sidebar navigation auto-generated

**Dependencies**: Phase 2 complete (configuration exists)

**Success Criteria**:
- SC-008: All 13 weeks accessible via sidebar ✅
- SC-009: Landing → any week in <3 clicks ✅
- FR-006: 13 weeks organized in 4 modules ✅
- FR-007: Each week has H1, 3-5 objectives, ~200 words ✅
- Sidebar auto-generated from directory structure

**Estimated Complexity**: Medium (13 files with consistent structure)

**Module Distribution**:
- Module 1 (ROS 2): 5 weeks
- Module 2 (Simulation): 2 weeks
- Module 3 (Isaac): 3 weeks
- Module 4 (VLA): 3 weeks

**Template for Each Week**:
```markdown
---
sidebar_position: {n}
title: "Week {n}: {Title}"
---

# Week {n}: {Title}

## Learning Objectives

- **Objective 1**: Understand {concept}
- **Objective 2**: Learn {skill}
- **Objective 3**: Apply {technique}
- **Objective 4**: Build {artifact}

## Introduction

[~200 words of placeholder content explaining the week's focus, why it matters,
and how it fits into the overall curriculum. Content will be replaced with real
robotics content in future iterations.]

## Key Concepts

[Placeholder section for main content]

## Hands-On Exercise

[Placeholder for practical example]

## Next Steps

In Week {n+1}, we'll explore {next topic}...
```

---

### Phase 6: Landing Page & React Components (Priority: P3)

**Goal**: Create custom landing page with module cards and empty chatbot widget placeholder

**Deliverables**:
- `book/src/pages/index.tsx` (custom landing page)
- `book/src/components/ChatbotWidget.tsx` (empty placeholder)
- Module cards with links to first week
- Call-to-action button

**Dependencies**: Phase 5 complete (content exists to link to)

**Success Criteria**:
- SC-009: Module cards visible on landing page ✅
- FR-005: Landing page served at root URL ✅
- FR-019: ChatbotWidget.tsx exists with TypeScript interface ✅
- Responsive layout (cards stack on mobile)
- CTA button navigates to first module

**Estimated Complexity**: Medium (React components + TypeScript)

**ChatbotWidget Placeholder**:
```tsx
// book/src/components/ChatbotWidget.tsx
import React from 'react';

export interface ChatbotWidgetProps {
  // TODO: Define props for RAG chatbot integration
  // Future: pageContext, userQuery, onResponse
}

/**
 * Placeholder for future RAG chatbot integration.
 *
 * @future Implement as floating widget with:
 * - Text input for questions about book content
 * - RAG backend integration (FastAPI + OpenAI)
 * - Context awareness (current page/module)
 * - Conversation history
 */
export default function ChatbotWidget(_props: ChatbotWidgetProps): JSX.Element {
  return (
    <div data-component="chatbot-placeholder">
      {/* TODO: Implement RAG chatbot UI */}
      {/* This component is intentionally empty in v1 */}
    </div>
  );
}
```

---

### Phase 7: Documentation & Final Verification (Priority: P2)

**Goal**: Complete all documentation and perform final quality checks

**Deliverables**:
- `book/README.md` (setup instructions)
- `book/docs/contributing.md` (contributor guide)
- Root `README.md` updated (mention book/ directory)
- Accessibility audit results
- Performance benchmark results

**Dependencies**: All previous phases complete

**Success Criteria**:
- FR-020: README.md with setup/deployment instructions ✅
- FR-021: contributing.md with content guidelines ✅
- SC-015: Contributors can add content in <15 min ✅
- SC-007: Lighthouse >90 for all categories ✅
- SC-010: Full keyboard navigation works ✅
- SC-011: Screen readers announce all elements ✅
- SC-014: Zero console errors on deployed site ✅

**Estimated Complexity**: Low (documentation writing)

**Final Verification Checklist**:
- [ ] `npm run build` succeeds (zero errors/warnings)
- [ ] Build time <2 minutes
- [ ] Build output <10MB
- [ ] Dev server starts in <5 seconds
- [ ] Hot-reload works (<2 seconds)
- [ ] All 13 weeks accessible
- [ ] Navigation works (sidebar, module cards, CTA)
- [ ] Theme toggle works (light/dark)
- [ ] Keyboard navigation complete
- [ ] Lighthouse audit >90 (all categories)
- [ ] GitHub Actions deploys successfully
- [ ] Site accessible at GitHub Pages URL
- [ ] Zero console errors on production site

---

## Architectural Decisions (ADR Candidates)

The following decisions are architecturally significant and should be documented:

### ADR-001: Docusaurus 3.x as Static Site Generator

**Context**: Need React-based SSG with MDX support for educational content + future React components (RAG chatbot)

**Decision**: Use Docusaurus 3.x

**Alternatives Considered**:
- Nextra (Next.js-based): More flexible but requires manual GitHub Pages config
- VitePress (Vue-based): Fast but not React ecosystem
- MkDocs (Python): Limited component customization

**Consequences**:
- ✅ Best documentation features out-of-box
- ✅ React ecosystem for future RAG chatbot
- ✅ Native GitHub Pages integration
- ✅ Auto-generated sidebar navigation
- ⚠️ Locked into React (not Vue/Svelte)
- ⚠️ Webpack-based (slower builds than Vite)

**Rationale**: Best balance of documentation features, React components, and GitHub Pages deployment.

---

### ADR-002: GitHub Actions + peaceiris/actions-gh-pages for Deployment

**Context**: Need automated deployment to GitHub Pages with zero external dependencies

**Decision**: Use GitHub Actions with peaceiris/actions-gh-pages action

**Alternatives Considered**:
- Manual `gh-pages` npm package: More complex, less reliable
- Vercel: Faster deploys but external service dependency
- Netlify: Great UX but outside GitHub ecosystem

**Consequences**:
- ✅ Zero external service dependencies
- ✅ Free unlimited builds (GitHub Actions)
- ✅ Automatic SSL certificates
- ✅ Reliable CI/CD
- ⚠️ Slower deploy than Vercel (~3-5 min vs <1 min)
- ⚠️ GitHub Pages has 100GB/month bandwidth soft limit

**Rationale**: Native GitHub integration, zero cost, reliable, no vendor lock-in.

---

### ADR-003: TypeScript for Configuration and Components

**Context**: Need type safety for Docusaurus config and React components

**Decision**: Use TypeScript with strict mode

**Alternatives Considered**:
- JavaScript: Simpler but no type safety

**Consequences**:
- ✅ Early error detection (config typos caught at compile-time)
- ✅ Better IDE support (autocomplete, refactoring)
- ✅ Safer refactoring (type-checked changes)
- ⚠️ Slight learning curve (TypeScript syntax)
- ⚠️ Longer initial setup (tsconfig.json)

**Rationale**: Type safety prevents configuration errors and improves maintainability for future features.

---

### ADR-004: CSS Variables Over Component Swizzling

**Context**: Need custom theming while maintaining upgradability

**Decision**: Use CSS variables (`custom.css`) + minimal swizzling

**Alternatives Considered**:
- Full component swizzling: Maximum control but hard to upgrade
- No customization: Faster but generic appearance

**Consequences**:
- ✅ Easy to upgrade Docusaurus (minimal breaking changes)
- ✅ Maintainable (CSS only, no component overrides)
- ✅ Performance (no extra React components)
- ⚠️ Limited to CSS customizations (can't change component logic)

**Rationale**: Prioritize upgradability and maintainability over deep customization.

---

## Risk Assessment

### Risk 1: Build Time Exceeds 2 Minutes

**Probability**: Low
**Impact**: Medium (fails SC-004)

**Mitigation**:
- Use npm caching in GitHub Actions (already in workflow)
- Lazy-load images (if added later)
- Code splitting (automatic in Docusaurus)
- Monitor build time during development

**Contingency**: If exceeded, optimize by removing unused plugins or dependencies

---

### Risk 2: GitHub Pages Deployment Fails

**Probability**: Medium (first-time setup)
**Impact**: High (site not accessible)

**Mitigation**:
- Test workflow on feature branch before merging to main
- Verify GitHub Pages settings in repository
- Check `gh-pages` branch permissions

**Contingency**: Manual deployment using `gh-pages` npm package as fallback

---

### Risk 3: Accessibility Audit Fails (Lighthouse <90)

**Probability**: Low (Docusaurus has good defaults)
**Impact**: High (fails SC-007, constitution gate)

**Mitigation**:
- Use Docusaurus default theme (already accessible)
- Manual keyboard testing before deployment
- axe DevTools audit during development
- Ensure color contrast ≥4.5:1

**Contingency**: Adjust CSS variables or add ARIA labels to custom components

---

### Risk 4: Content Structure Refactor Needed

**Probability**: Low
**Impact**: Low (just MDX file moves)

**Mitigation**:
- Follow Docusaurus directory conventions from start
- Use `_category_.json` for sidebar metadata
- Test sidebar navigation early

**Contingency**: Docusaurus CLI has rename/move helpers

---

## Dependencies and Sequencing

**Critical Path** (must be sequential):
1. Phase 1 → Phase 2 → Phase 4 (Foundation → Config → Deployment)
2. Phase 2 → Phase 5 → Phase 6 (Config → Content → Landing Page)

**Parallel Work Opportunities**:
- Phase 3 (Theme) can run parallel to Phase 5 (Content)
- Phase 7 (Documentation) can start after Phase 5

**Blocking Relationships**:
- Phase 4 (Deployment) requires Phase 2 (Config) to have correct baseUrl
- Phase 6 (Landing Page) requires Phase 5 (Content) to link to modules
- Phase 7 (Final Verification) requires all others complete

---

## Next Steps

1. ✅ **Research Complete**: All unknowns resolved (research.md)
2. ✅ **Data Model Defined**: Entities and relationships documented (data-model.md)
3. ✅ **Quickstart Created**: Setup guide for developers (quickstart.md)
4. ⏭️ **Generate Tasks**: Run `/sp.tasks` to break down into atomic tasks
5. ⏭️ **Implement**: Execute tasks following TDD where applicable
6. ⏭️ **Test**: Verify all success criteria met
7. ⏭️ **Review**: Self-review code quality, create PHR
8. ⏭️ **Deploy**: Merge to main, verify GitHub Pages deployment

---

**Plan Complete**: 2025-12-02
**Ready for Phase 2**: Task Breakdown via `/sp.tasks`
