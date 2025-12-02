# Tasks: Docusaurus Framework Setup

**Feature Branch**: `001-docusaurus-setup`
**Generated**: 2025-12-03
**Input**: Design documents from `/specs/001-docusaurus-setup/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, quickstart.md ✅

**Tests**: No tests requested in feature specification (manual testing + Lighthouse audits only)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

---

## Format: `- [ ] [ID] [P?] [Story?] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4, US5)
- All file paths are absolute paths from repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Docusaurus project structure in `book/` directory

**Success Criteria**:
- `npm install` completes successfully
- `npm start` launches dev server
- Zero npm errors or warnings

### Tasks

- [X] T001 Create `book/` directory at repository root for Docusaurus working directory
- [X] T002 Initialize npm project in `book/` directory using `npm init -y`
- [X] T003 [P] Install Docusaurus 3.6.0+ with TypeScript preset in `book/package.json`
- [X] T004 [P] Create `book/tsconfig.json` with TypeScript configuration extending `@docusaurus/tsconfig`
- [X] T005 [P] Create `book/.gitignore` to exclude `node_modules/`, `build/`, `.docusaurus/`, `.cache/`
- [X] T006 Verify `npm start` launches development server successfully

**Checkpoint**: Setup complete - Docusaurus project initialized with TypeScript

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core Docusaurus configuration that MUST be complete before ANY content can be created

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

**Success Criteria**:
- `docusaurus.config.ts` passes TypeScript validation
- Dev server serves site at correct baseUrl (`/AI_Book/`)
- Build succeeds with zero errors

### Tasks

- [X] T007 Create `book/docusaurus.config.ts` with site metadata (title, tagline, favicon)
- [X] T008 Configure GitHub Pages settings in `book/docusaurus.config.ts` (url, baseUrl, organizationName, projectName, deploymentBranch)
- [X] T009 [P] Configure classic preset with docs and theme options in `book/docusaurus.config.ts`
- [X] T010 [P] Configure navbar in `book/docusaurus.config.ts` themeConfig (title, logo, navigation items, GitHub link)
- [X] T011 [P] Configure footer in `book/docusaurus.config.ts` themeConfig (style, copyright with CC BY-NC-SA 4.0, social links)
- [X] T012 [P] Configure colorMode in `book/docusaurus.config.ts` themeConfig (defaultMode light, enable toggle, respectPrefersColorScheme)
- [X] T013 Set onBrokenLinks to 'throw' and onBrokenMarkdownLinks to 'warn' in `book/docusaurus.config.ts`
- [X] T014 Create `book/src/` directory for custom components and styles
- [X] T015 Create `book/static/` directory for static assets
- [X] T016 Create `book/docs/` directory for MDX content files
- [X] T017 Verify `npm run build` completes successfully with zero errors

**Checkpoint**: Foundation ready - content creation and deployment setup can now begin

---

## Phase 3: User Story 1 - Developer Sets Up Documentation Environment (Priority: P1) 🎯 MVP

**Goal**: Enable developers to run and develop the documentation site locally with hot-reload

**Independent Test**: Clone repository, run `npm install && npm start`, verify site loads and hot-reload works within 2 seconds

**Acceptance Scenarios**:
1. Dependencies install successfully without errors
2. Dev server starts within 5 seconds and opens browser
3. File changes appear in browser within 2 seconds without manual refresh
4. Build completes with zero errors and zero warnings

### Implementation for User Story 1

- [X] T018 [P] [US1] Create `book/README.md` with project description and quick start commands
- [X] T019 [P] [US1] Add npm scripts to `book/package.json` (start, build, serve, clear)
- [X] T020 [US1] Test `npm start` command and verify hot-reload with a test edit to placeholder file
- [X] T021 [US1] Test `npm run build` command and verify output in `book/build/` directory
- [X] T022 [US1] Test `npm run serve` command and verify production build serves correctly
- [X] T023 [US1] Verify build time is under 2 minutes
- [X] T024 [US1] Verify build output size is under 10MB (excluding node_modules)

**Checkpoint**: User Story 1 complete - Local development environment fully functional

---

## Phase 4: User Story 4 - DevOps Engineer Deploys to Production (Priority: P2)

**Goal**: Automate build and deployment to GitHub Pages on every push to main branch

**Independent Test**: Push changes to main, wait for GitHub Actions to complete, verify site accessible at GitHub Pages URL

**Acceptance Scenarios**:
1. GitHub Actions automatically triggers on push to main
2. Build workflow completes with green checkmark
3. Site accessible at `https://[username].github.io/AI_Book/`
4. Zero console errors on deployed site
5. First Contentful Paint under 2 seconds

### Implementation for User Story 4

- [X] T025 [P] [US4] Create `.github/workflows/` directory at repository root
- [X] T026 [US4] Create `.github/workflows/deploy.yml` with GitHub Actions workflow configuration
- [X] T027 [US4] Configure workflow trigger on push to main branch in `.github/workflows/deploy.yml`
- [X] T028 [US4] Add checkout step using `actions/checkout@v4` in `.github/workflows/deploy.yml`
- [X] T029 [US4] Add Node.js 20 setup using `actions/setup-node@v4` with npm cache in `.github/workflows/deploy.yml`
- [X] T030 [US4] Add install dependencies step (`cd book && npm ci`) in `.github/workflows/deploy.yml`
- [X] T031 [US4] Add build step (`cd book && npm run build`) in `.github/workflows/deploy.yml`
- [X] T032 [US4] Add deployment step using `peaceiris/actions-gh-pages@v3` targeting `book/build/` directory in `.github/workflows/deploy.yml`
- [X] T033 [US4] Set workflow permissions to `contents: write` in `.github/workflows/deploy.yml`
- [ ] T034 [US4] Test workflow by pushing to feature branch with pull request to main
- [ ] T035 [US4] Verify workflow completes in under 5 minutes
- [ ] T036 [US4] Configure GitHub Pages repository settings (Source: gh-pages branch, Folder: root)
- [ ] T037 [US4] Verify deployed site loads at GitHub Pages URL after workflow completion
- [ ] T038 [US4] Verify zero console errors on deployed site using browser DevTools

**Checkpoint**: User Story 4 complete - Automated CI/CD deployment to GitHub Pages working

---

## Phase 5: User Story 2 - Student Navigates Course Structure (Priority: P2)

**Goal**: Create complete 13-week content structure with placeholder text and automatic sidebar navigation

**Independent Test**: Navigate to deployed site, view landing page with module cards, click through to different weeks, verify all navigation works

**Acceptance Scenarios**:
1. Landing page shows course title, tagline, 4 module cards, and "Get Started" button
2. Module cards navigate to first week of each module
3. Sidebar shows all 13 weeks organized under 4 module headings
4. Keyboard navigation works (Tab key access to all elements)
5. Each week has title, 3-5 learning objectives, ~200 words placeholder text

### Implementation for User Story 2

- [ ] T039 [P] [US2] Create `book/docs/intro.md` with Getting Started content (H1, brief intro, links to modules)
- [ ] T040 [P] [US2] Create `book/docs/module-1-ros2/` directory for Module 1 content
- [ ] T041 [P] [US2] Create `book/docs/module-2-simulation/` directory for Module 2 content
- [ ] T042 [P] [US2] Create `book/docs/module-3-isaac/` directory for Module 3 content
- [ ] T043 [P] [US2] Create `book/docs/module-4-vla/` directory for Module 4 content
- [ ] T044 [P] [US2] Create `book/docs/module-1-ros2/_category_.json` with Module 1 metadata (label, position, description)
- [ ] T045 [P] [US2] Create `book/docs/module-2-simulation/_category_.json` with Module 2 metadata
- [ ] T046 [P] [US2] Create `book/docs/module-3-isaac/_category_.json` with Module 3 metadata
- [ ] T047 [P] [US2] Create `book/docs/module-4-vla/_category_.json` with Module 4 metadata
- [ ] T048 [P] [US2] Create `book/docs/module-1-ros2/week-1-physical-ai-intro.md` with front matter (sidebar_position: 1, title) and placeholder content (H1, 4 learning objectives, ~200 words intro)
- [ ] T049 [P] [US2] Create `book/docs/module-1-ros2/week-2-sensors.md` with placeholder content
- [ ] T050 [P] [US2] Create `book/docs/module-1-ros2/week-3-ros2-basics.md` with placeholder content
- [ ] T051 [P] [US2] Create `book/docs/module-1-ros2/week-4-ros2-packages.md` with placeholder content
- [ ] T052 [P] [US2] Create `book/docs/module-1-ros2/week-5-urdf-tf2.md` with placeholder content
- [ ] T053 [P] [US2] Create `book/docs/module-2-simulation/week-6-gazebo.md` with placeholder content
- [ ] T054 [P] [US2] Create `book/docs/module-2-simulation/week-7-unity.md` with placeholder content
- [ ] T055 [P] [US2] Create `book/docs/module-3-isaac/week-8-isaac-sim.md` with placeholder content
- [ ] T056 [P] [US2] Create `book/docs/module-3-isaac/week-9-isaac-ros.md` with placeholder content
- [ ] T057 [P] [US2] Create `book/docs/module-3-isaac/week-10-manipulation.md` with placeholder content
- [ ] T058 [P] [US2] Create `book/docs/module-4-vla/week-11-humanoids.md` with placeholder content
- [ ] T059 [P] [US2] Create `book/docs/module-4-vla/week-12-locomotion.md` with placeholder content
- [ ] T060 [P] [US2] Create `book/docs/module-4-vla/week-13-capstone.md` with placeholder content
- [ ] T061 [US2] Verify sidebar auto-generates with all 4 modules and 13 weeks in correct order
- [ ] T062 [US2] Verify navigation from landing page to any week in under 3 clicks
- [ ] T063 [US2] Test keyboard navigation using Tab key to verify all elements accessible
- [ ] T064 [US2] Verify each week has H1 title, 3-5 learning objectives, and ~200 words placeholder text

**Checkpoint**: User Story 2 complete - Full 13-week content structure with navigation working

---

## Phase 6: User Story 3 - Instructor Customizes Appearance (Priority: P3)

**Goal**: Apply custom branding with colors, fonts, logo, and responsive layout

**Independent Test**: View site and verify custom colors applied, custom fonts loaded, logo in navbar, responsive layout on mobile/tablet/desktop

**Acceptance Scenarios**:
1. Navbar shows custom logo and styled navigation with custom colors
2. Custom heading and body fonts applied throughout site
3. Code blocks use custom dark-mode-optimized color scheme
4. Footer displays styled CC BY-NC-SA license, social links, acknowledgments
5. Layout adapts responsively at 320px (mobile), 768px (tablet), 1920px (desktop)

### Implementation for User Story 3

- [ ] T065 [P] [US3] Create `book/src/css/` directory for custom styles
- [ ] T066 [US3] Create `book/src/css/custom.css` with CSS variable overrides for colors (primary, primary-dark, etc.)
- [ ] T067 [US3] Add font family CSS variables in `book/src/css/custom.css` (Inter for base, JetBrains Mono for code)
- [ ] T068 [US3] Add dark mode CSS overrides in `book/src/css/custom.css` using `[data-theme='dark']` selector
- [ ] T069 [US3] Add responsive breakpoint overrides in `book/src/css/custom.css` for mobile (<768px) and tablet (768-1024px)
- [ ] T070 [US3] Add layout CSS variables in `book/src/css/custom.css` (navbar height, footer padding, code font size)
- [ ] T071 [P] [US3] Create `book/static/img/` directory for images and logo
- [ ] T072 [P] [US3] Add placeholder logo file `book/static/img/logo.svg` (simple SVG or use emoji as fallback)
- [ ] T073 [US3] Verify custom colors applied to navbar, buttons, links, and backgrounds
- [ ] T074 [US3] Verify custom fonts loaded (Inter for body text, JetBrains Mono for code blocks)
- [ ] T075 [US3] Verify light/dark theme toggle works and applies correct color schemes
- [ ] T076 [US3] Test responsive layout at 320px width (mobile) - verify navbar, sidebar, content stack correctly
- [ ] T077 [US3] Test responsive layout at 768px width (tablet) - verify layout adapts
- [ ] T078 [US3] Test responsive layout at 1920px width (desktop) - verify layout uses full width
- [ ] T079 [US3] Run Lighthouse accessibility audit and verify score >90
- [ ] T080 [US3] Verify color contrast ratio ≥4.5:1 using browser DevTools or axe extension

**Checkpoint**: User Story 3 complete - Custom branding and responsive layout implemented

---

## Phase 7: User Story 5 - Future Developer Integrates RAG Chatbot (Priority: P3)

**Goal**: Create placeholder React component for future RAG chatbot integration

**Independent Test**: Locate `ChatbotWidget.tsx`, verify it exists with proper TypeScript interfaces and exports correctly

**Acceptance Scenarios**:
1. File `src/components/ChatbotWidget.tsx` exists
2. File contains TypeScript interface definition (empty) and TODO comment
3. Component can be imported without TypeScript errors

### Implementation for User Story 5

- [ ] T081 [P] [US5] Create `book/src/components/` directory for React components
- [ ] T082 [US5] Create `book/src/components/ChatbotWidget.tsx` with TypeScript interface `ChatbotWidgetProps` (empty)
- [ ] T083 [US5] Add JSDoc comment in `book/src/components/ChatbotWidget.tsx` with `@future` tag explaining RAG chatbot plans
- [ ] T084 [US5] Implement default export function returning empty div with `data-component="chatbot-placeholder"` attribute
- [ ] T085 [US5] Verify component compiles without TypeScript errors
- [ ] T086 [US5] Test importing component in a test MDX file to verify it can be referenced

**Checkpoint**: User Story 5 complete - RAG chatbot integration point prepared

---

## Phase 8: Landing Page & React Components (Priority: P3)

**Goal**: Create custom landing page with module cards and call-to-action

**Independent Test**: Navigate to root URL, verify module cards visible, CTA button navigates to first module

**Success Criteria**:
- Landing page served at root URL
- 4 module cards visible with descriptions
- CTA button navigates to intro page
- Responsive layout (cards stack on mobile)

### Implementation

- [ ] T087 [P] [US2] Create `book/src/pages/` directory for custom pages
- [ ] T088 [US2] Create `book/src/pages/index.tsx` with custom landing page component
- [ ] T089 [US2] Import Docusaurus hooks (`useDocusaurusContext`) and Layout component in `book/src/pages/index.tsx`
- [ ] T090 [US2] Add hero section with site title and tagline in `book/src/pages/index.tsx`
- [ ] T091 [US2] Create module card components (4 cards) with title, description, icon, and link in `book/src/pages/index.tsx`
- [ ] T092 [US2] Add call-to-action button linking to `/docs/intro` in `book/src/pages/index.tsx`
- [ ] T093 [US3] Add CSS styles for landing page in `book/src/css/custom.css` (hero section, module cards grid)
- [ ] T094 [US3] Add responsive CSS for mobile (cards stack vertically) in `book/src/css/custom.css`
- [ ] T095 [US2] Verify landing page loads at root URL
- [ ] T096 [US2] Verify all 4 module cards visible with correct descriptions
- [ ] T097 [US2] Verify CTA button navigates to intro page
- [ ] T098 [US3] Test responsive layout on mobile (cards stack), tablet (2 columns), desktop (4 columns or 2x2 grid)

**Checkpoint**: Landing page complete with module cards and responsive layout

---

## Phase 9: Documentation & Final Verification (Priority: P2)

**Goal**: Complete all documentation and perform final quality checks

**Independent Test**: Follow README.md to set up from scratch, verify all success criteria met

**Success Criteria**:
- README.md with complete setup/deployment instructions
- contributing.md with content guidelines
- Contributors can add content in under 15 minutes
- Lighthouse >90 for all categories
- Full keyboard navigation works
- Screen readers announce all elements
- Zero console errors on deployed site

### Implementation

- [ ] T099 [P] Create `book/docs/contributing.md` with contributor guide (how to add weeks, MDX syntax, component usage, style guidelines)
- [ ] T100 [P] Update root `README.md` to mention `book/` directory and link to book/README.md for documentation setup
- [ ] T101 Update `book/README.md` with comprehensive setup instructions (prerequisites, installation, development, deployment)
- [ ] T102 Add troubleshooting section to `book/README.md` (common issues, solutions)
- [ ] T103 Add performance benchmarks to `book/README.md` (expected build times, output sizes)
- [ ] T104 Test setup from scratch following README.md instructions
- [ ] T105 Time a contributor adding a new week's content (should be <15 minutes)
- [ ] T106 Run full keyboard navigation test (Tab through entire site, verify focus indicators)
- [ ] T107 Test with screen reader (NVDA or VoiceOver) - verify all elements announced correctly
- [ ] T108 Run Lighthouse audit on localhost - verify scores >90 for Performance, Accessibility, Best Practices, SEO
- [ ] T109 Verify build completes with zero errors and zero warnings
- [ ] T110 Verify build time under 2 minutes
- [ ] T111 Verify build output size under 10MB (excluding node_modules)
- [ ] T112 Verify dev server starts in under 5 seconds
- [ ] T113 Verify hot-reload works in under 2 seconds
- [ ] T114 Deploy to GitHub Pages and verify final site loads without console errors
- [ ] T115 Run Lighthouse audit on deployed GitHub Pages site - verify scores >90

**Checkpoint**: All documentation complete, all quality checks passed

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup)
    ↓
Phase 2 (Foundational) ← BLOCKS ALL USER STORIES
    ↓
Phase 3 (US1 - Dev Environment) ← MVP - Must complete first
    ↓
Phase 4 (US4 - Deployment) ← Enables public access
    ↓
Phase 5 (US2 - Content Structure) ← Can run parallel with Phase 6, 7
Phase 6 (US3 - Custom Theme) ← Can run parallel with Phase 5, 7
Phase 7 (US5 - RAG Placeholder) ← Can run parallel with Phase 5, 6
    ↓
Phase 8 (Landing Page) ← Depends on Phase 5 content existing
    ↓
Phase 9 (Documentation & Verification) ← Final validation
```

### Critical Path (Sequential - Must Follow Order)

1. **Setup (Phase 1)** → Must complete first
2. **Foundational (Phase 2)** → Must complete before any user stories
3. **US1 Dev Environment (Phase 3)** → MVP - Must work before deployment
4. **US4 Deployment (Phase 4)** → Enables public access
5. **US2 Content (Phase 5)** → Must exist before landing page
6. **Landing Page (Phase 8)** → Depends on content
7. **Final Verification (Phase 9)** → Last step

### Parallel Opportunities

**Within Setup Phase**:
- T003, T004, T005 can run in parallel (different files)

**Within Foundational Phase**:
- T009, T010, T011, T012 can run in parallel (different config sections)

**After Foundational Complete**:
- Phase 5 (US2 - Content), Phase 6 (US3 - Theme), Phase 7 (US5 - RAG) can run in parallel

**Within US2 Content Phase**:
- T040-T043 (create directories) in parallel
- T044-T047 (create _category_.json) in parallel
- T048-T060 (create all week files) in parallel (13 tasks at once!)

**Within US3 Theme Phase**:
- T071, T072 (logo files) parallel with T066-T070 (CSS)

**Within Documentation Phase**:
- T099, T100 (documentation files) can run in parallel

---

## Parallel Execution Examples

### Example 1: Content Creation (Phase 5 - User Story 2)

```bash
# All 13 week files can be created in parallel:
Task T048: "Create week-1-physical-ai-intro.md"
Task T049: "Create week-2-sensors.md"
Task T050: "Create week-3-ros2-basics.md"
...
Task T060: "Create week-13-capstone.md"

# All 4 _category_.json files in parallel:
Task T044: "Create module-1-ros2/_category_.json"
Task T045: "Create module-2-simulation/_category_.json"
Task T046: "Create module-3-isaac/_category_.json"
Task T047: "Create module-4-vla/_category_.json"
```

### Example 2: Theme Customization (Phase 6 - User Story 3)

```bash
# CSS and logo work can happen in parallel:
Task T066-T070: "Create custom.css with all styling"
Task T071-T072: "Add logo.svg to static/img/"
```

---

## Implementation Strategy

### MVP First (Minimal Viable Product)

**Goal**: Get a working deployed site as fast as possible

1. ✅ Complete **Phase 1: Setup** (T001-T006)
2. ✅ Complete **Phase 2: Foundational** (T007-T017) - CRITICAL
3. ✅ Complete **Phase 3: US1 Dev Environment** (T018-T024) - MVP Core
4. ✅ Complete **Phase 4: US4 Deployment** (T025-T038) - Make it public
5. ✅ Create **minimal content** for Phase 5 (just intro.md and Week 1) to test end-to-end
6. **STOP and VALIDATE**: Verify site deploys, loads, and navigation works
7. **Deploy/Demo**: Show working textbook site (even with minimal content)

**Result**: Working Docusaurus site deployed to GitHub Pages with at least one page

### Incremental Delivery

**After MVP, add features incrementally:**

1. ✅ **Add all content** (Phase 5 - US2): Complete all 13 weeks
2. ✅ **Add branding** (Phase 6 - US3): Custom theme, logo, responsive layout
3. ✅ **Add landing page** (Phase 8): Module cards, CTA button
4. ✅ **Add future hooks** (Phase 7 - US5): RAG chatbot placeholder
5. ✅ **Polish** (Phase 9): Documentation, verification, optimization

**Each increment adds value without breaking previous work**

### Parallel Team Strategy

With multiple developers (if applicable):

**Stage 1: Foundation (Everyone Together)**
- Complete Phase 1 + Phase 2 together (T001-T017)
- Critical that entire team understands Docusaurus config

**Stage 2: Parallel User Stories (After Foundation)**
- **Developer A**: Phase 3 (US1) + Phase 4 (US4) - Dev environment and deployment
- **Developer B**: Phase 5 (US2) - Content structure (13 weeks)
- **Developer C**: Phase 6 (US3) + Phase 7 (US5) - Theme and components

**Stage 3: Integration**
- **Developer A**: Phase 8 - Landing page (integrates content from B, theme from C)
- **Everyone**: Phase 9 - Documentation and final verification

---

## Task Statistics

**Total Tasks**: 115 tasks across 9 phases

**Task Distribution by User Story**:
- Setup (Phase 1): 6 tasks
- Foundational (Phase 2): 11 tasks
- US1 - Dev Environment (Phase 3): 7 tasks
- US4 - Deployment (Phase 4): 14 tasks
- US2 - Content Structure (Phase 5): 26 tasks (13 week files + supporting tasks)
- US3 - Custom Theme (Phase 6): 16 tasks
- US5 - RAG Placeholder (Phase 7): 6 tasks
- Landing Page (Phase 8): 12 tasks
- Documentation & Verification (Phase 9): 17 tasks

**Parallel Opportunities**: 35+ tasks marked [P] can run in parallel within their phase

**MVP Scope** (Recommended first delivery):
- Phase 1 (6 tasks) + Phase 2 (11 tasks) + Phase 3 (7 tasks) + Phase 4 (14 tasks) + minimal Phase 5 (intro + 1 week = 5 tasks)
- **MVP Total: ~43 tasks** for first working deployed site

---

## Notes

- All tasks follow checklist format: `- [ ] [ID] [P?] [Story?] Description with file path`
- [P] tasks = different files, no dependencies within same phase
- [Story] label maps task to user story from spec.md (US1, US2, US3, US4, US5)
- Each user story should be independently completable and testable
- Commit after each logical group of tasks (e.g., after completing a week file, after finishing CSS)
- Stop at any checkpoint to validate story independently
- Paths use `book/` as working directory per plan.md structure
- No unit tests included (manual testing + Lighthouse audits per spec)

---

**Tasks Complete**: Ready for implementation via `/sp.implement`
**Suggested MVP**: Phase 1 + 2 + 3 + 4 + minimal Phase 5 = 43 tasks for first deployment
**Full Feature**: All 115 tasks for complete textbook with 13 weeks, custom theme, and documentation
