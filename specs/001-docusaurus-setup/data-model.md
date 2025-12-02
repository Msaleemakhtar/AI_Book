# Data Model: Docusaurus Framework Setup

**Feature**: 001-docusaurus-setup
**Date**: 2025-12-02
**Context**: Content structure and configuration entities for Docusaurus-based textbook

---

## Entity Overview

This feature involves **configuration and content entities** rather than database entities. All data is represented as:
- **Filesystem**: MDX files, JSON configuration, TypeScript config
- **Build-time**: Static site generation
- **Runtime**: No database, no backend API

---

## Entity 1: Module

**Purpose**: Represents one of four major course sections (ROS 2, Simulation, Isaac, VLA)

**Attributes**:
| Attribute | Type | Description | Example | Validation |
|-----------|------|-------------|---------|------------|
| `position` | number | Module sequence (1-4) | 1 | Required, 1-4 |
| `label` | string | Module title | "Module 1: ROS 2 - The Robotic Nervous System" | Required, max 100 chars |
| `description` | string | Module overview | "Learn ROS 2 fundamentals..." | Required, max 500 chars |
| `directory` | string | Filesystem path | "book/docs/module-1-ros2/" | Required, valid path |
| `weeks` | Week[] | Contained lessons | [Week 1, Week 2, ...] | 3-4 weeks |

**Representation**:
```json
// book/docs/module-1-ros2/_category_.json
{
  "label": "Module 1: ROS 2 - The Robotic Nervous System",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "Learn ROS 2 fundamentals for humanoid robotics, from basic concepts to URDF modeling and coordinate transformations"
  }
}
```

**Relationships**:
- **Has many** Weeks (1 Module → 3-4 Weeks)
- **Belongs to** Course (4 Modules total)

**Business Rules**:
- Exactly 4 modules (enforced by content creation)
- Position must be sequential (1, 2, 3, 4)
- Directory must match pattern `module-{n}-{slug}/`

---

## Entity 2: Week

**Purpose**: Represents a single week's lesson content

**Attributes**:
| Attribute | Type | Description | Example | Validation |
|-----------|------|-------------|---------|------------|
| `week_number` | number | Global week (1-13) | 1 | Required, 1-13 |
| `title` | string | Lesson title | "Week 1: Physical AI Introduction" | Required, max 150 chars |
| `slug` | string | URL-safe identifier | "week-1-physical-ai-intro" | Required, kebab-case |
| `learning_objectives` | string[] | Goals (3-5 items) | ["Understand Physical AI", ...] | 3-5 items |
| `body` | string | Markdown content | "## Introduction..." | ~200 words (placeholder) |
| `module_ref` | string | Parent module | "module-1-ros2" | Required |
| `file_path` | string | MDX file location | "book/docs/module-1-ros2/week-1-physical-ai-intro.md" | Required |

**Representation**:
```markdown
---
sidebar_position: 1
title: "Week 1: Physical AI Introduction"
---

# Week 1: Physical AI Introduction

## Learning Objectives

- Understand what Physical AI means and why it matters
- Differentiate between digital AI and embodied intelligence
- Identify key components of humanoid robotics systems
- Explore real-world applications of Physical AI

## Introduction

[~200 words of placeholder content explaining Physical AI concepts...]

## Key Concepts

[Additional sections...]

## Next Steps

[Preview Week 2 content...]
```

**Relationships**:
- **Belongs to** Module (Week → 1 Module)
- **Sequence**: Ordered within module (sidebar_position)

**Business Rules**:
- Exactly 13 weeks across 4 modules
- File name must match pattern: `week-{n}-{slug}.md`
- Learning objectives: minimum 3, maximum 5
- Body text: ~200 words for placeholder (replaced with real content later)

---

## Entity 3: Landing Page

**Purpose**: Entry point to the textbook (homepage)

**Attributes**:
| Attribute | Type | Description | Example | Validation |
|-----------|------|-------------|---------|------------|
| `title` | string | Course title | "Physical AI & Humanoid Robotics" | Required |
| `tagline` | string | Subtitle | "Learn to Control Humanoid Robots..." | Required, max 200 chars |
| `overview` | string | Course description | "This comprehensive 13-week..." | 200-300 words |
| `module_cards` | ModuleCard[] | Module previews | [Card 1, Card 2, ...] | Exactly 4 |
| `cta_button` | object | Call-to-action | {text: "Get Started", link: "/docs/intro"} | Required |

**Representation**:
```tsx
// book/src/pages/index.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn Physical AI and Humanoid Robotics">
      <main>
        <div className="hero">
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>

          <div className="module-cards">
            {/* 4 module cards */}
          </div>

          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
        </div>
      </main>
    </Layout>
  );
}
```

**Module Card Schema**:
```typescript
interface ModuleCard {
  title: string;           // "Module 1: ROS 2"
  description: string;     // "Learn ROS 2 fundamentals..."
  icon: string;            // SVG or emoji
  link: string;            // "/docs/module-1-ros2/week-1-physical-ai-intro"
}
```

**Business Rules**:
- Must have exactly 4 module cards (one per module)
- Cards link to first week of each module
- Responsive layout (grid on desktop, stack on mobile)

---

## Entity 4: Theme Configuration

**Purpose**: Visual customization settings (colors, fonts, layout)

**Attributes**:
| Attribute | Type | Description | Example | Validation |
|-----------|------|-------------|---------|------------|
| `primary_color` | string | Brand color (light mode) | "#2e8555" | Required, hex |
| `primary_dark` | string | Brand color (dark mode) | "#25c2a0" | Required, hex |
| `heading_font` | string | Font for headings | "Inter, sans-serif" | Required |
| `body_font` | string | Font for body text | "Inter, system-ui" | Required |
| `code_font` | string | Monospace font | "JetBrains Mono, monospace" | Required |
| `navbar_height` | string | Navbar size | "60px" | Required |
| `color_mode` | object | Light/dark toggle config | {defaultMode: 'light', ...} | Required |

**Representation**:
```css
/* book/src/css/custom.css */
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-font-family-base: 'Inter', system-ui, sans-serif;
  --ifm-font-family-monospace: 'JetBrains Mono', monospace;
  --ifm-navbar-height: 60px;
}

[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-background-color: #1b1b1d;
}
```

```typescript
// book/docusaurus.config.ts
themeConfig: {
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  navbar: {
    title: 'Physical AI Textbook',
    logo: {
      alt: 'Logo',
      src: 'img/logo.svg',
    },
    items: [
      {to: '/docs/intro', label: 'Start Learning', position: 'left'},
      {href: 'https://github.com/[username]/AI_Book', label: 'GitHub', position: 'right'},
    ],
  },
  footer: {
    style: 'dark',
    copyright: `© ${new Date().getFullYear()} Physical AI Textbook. Licensed under CC BY-NC-SA 4.0.`,
  },
}
```

**Business Rules**:
- Color contrast must meet WCAG 2.1 AA (4.5:1 minimum)
- Fonts must be web-safe or loaded via CDN
- Navbar must include: logo, nav links, GitHub link, theme toggle

---

## Entity 5: Build Output

**Purpose**: Compiled static site ready for deployment

**Attributes**:
| Attribute | Type | Description | Example | Validation |
|-----------|------|-------------|---------|------------|
| `output_dir` | string | Build directory | "book/build/" | Required |
| `total_size` | number | Directory size (MB) | 5.2 | <10MB |
| `page_count` | number | HTML pages generated | 15 | 13+ (weeks + landing + 404) |
| `build_time` | number | Compilation duration (sec) | 45 | <120 seconds |
| `assets` | object | Asset breakdown | {html: 15, css: 3, js: 8, img: 0} | N/A |
| `deployment_status` | string | GitHub Pages status | "success" | success/failed/pending |

**Representation**:
```
book/build/
├── index.html                       # Landing page (1 file)
├── docs/
│   ├── intro/index.html             # Intro page (1 file)
│   ├── module-1-ros2/
│   │   ├── index.html               # Module index (1 file)
│   │   ├── week-1-physical-ai-intro/index.html  (1 file)
│   │   ├── week-2-sensors/index.html             (1 file)
│   │   ├── week-3-ros2-basics/index.html         (1 file)
│   │   ├── week-4-ros2-packages/index.html       (1 file)
│   │   └── week-5-urdf-tf2/index.html            (1 file)
│   ├── module-2-simulation/
│   │   ├── index.html               (1 file)
│   │   ├── week-6-gazebo/index.html             (1 file)
│   │   └── week-7-unity/index.html              (1 file)
│   ├── module-3-isaac/
│   │   ├── index.html               (1 file)
│   │   ├── week-8-isaac-sim/index.html          (1 file)
│   │   ├── week-9-isaac-ros/index.html          (1 file)
│   │   └── week-10-manipulation/index.html      (1 file)
│   ├── module-4-vla/
│   │   ├── index.html               (1 file)
│   │   ├── week-11-humanoids/index.html         (1 file)
│   │   ├── week-12-locomotion/index.html        (1 file)
│   │   └── week-13-capstone/index.html          (1 file)
│   └── contributing/index.html      # Contributing guide (1 file)
├── assets/
│   ├── css/
│   │   └── styles.[hash].css
│   └── js/
│       ├── main.[hash].js
│       ├── [route].[hash].js  # Code-split chunks
│       └── ...
├── img/                            # Logo and images
├── sitemap.xml                     # SEO sitemap
└── 404.html                        # Custom 404 page (1 file)

Total: ~18-20 HTML files (1 landing + 1 intro + 4 module indices + 13 weeks + 1 contributing + 1 404)
```

**Business Rules**:
- Build must succeed with exit code 0
- Total size must be <10MB (excluding node_modules)
- Build time must be <2 minutes
- All HTML files must be valid (no broken links)

---

## Entity 6: GitHub Actions Workflow

**Purpose**: Automated build and deployment pipeline

**Attributes**:
| Attribute | Type | Description | Example | Validation |
|-----------|------|-------------|---------|------------|
| `workflow_name` | string | Workflow identifier | "Deploy to GitHub Pages" | Required |
| `trigger` | object | When to run | {push: {branches: ['main']}} | Required |
| `jobs` | object | Build + deploy steps | {deploy: {...}} | Required |
| `permissions` | object | GitHub token permissions | {contents: 'write'} | Required |
| `execution_time` | number | Workflow duration (sec) | 180 | <300 seconds |
| `status` | string | Last run status | "success" | success/failure |

**Representation**:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: book/package-lock.json
      - run: cd book && npm ci
      - run: cd book && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./book/build
```

**Business Rules**:
- Must run on every push to `main`
- Build must pass before deployment
- Deployment target: `gh-pages` branch
- Execution time must be <5 minutes (per SC-013)

---

## Entity Relationships Diagram

```
Course (1)
  ↓
Modules (4)
  ├─ Module 1: ROS 2 (3-5 weeks)
  ├─ Module 2: Simulation (2 weeks)
  ├─ Module 3: Isaac (3 weeks)
  └─ Module 4: VLA (3 weeks)
       ↓
Weeks (13 total)
  ├─ Week {n}
  │   ├─ Learning Objectives (3-5)
  │   └─ Content (MDX)
  └─ ...

Landing Page (1)
  ├─ Module Cards (4)
  └─ CTA Button

Theme Config (1)
  ├─ Colors
  ├─ Fonts
  └─ Layout

Build Pipeline
  ├─ Source (MDX + Config)
  ├─ Build Output (Static HTML/CSS/JS)
  └─ Deployment (GitHub Actions → gh-pages)
```

---

## Validation Rules Summary

**Cross-Entity Constraints**:
1. **Total Weeks**: Must equal 13 (across 4 modules)
2. **Module Distribution**: 5 + 2 + 3 + 3 = 13 weeks
3. **File Naming**: All files must follow kebab-case convention
4. **URLs**: All links must resolve (no broken links)
5. **Build Size**: Total output <10MB
6. **Performance**: Build time <2 minutes, FCP <2 seconds

**Content Quality**:
- Each week: 3-5 learning objectives
- Each week: ~200 words placeholder body (v1), replaced with real content later
- Headings: Follow h1 → h2 → h3 hierarchy (no skips)
- Accessibility: All interactive elements keyboard-accessible

---

## State Transitions

### Week Content Lifecycle

```
[Draft] → [Placeholder] → [Real Content] → [Published]
   ↓           ↓               ↓              ↓
 File      Learning        Full         Built to
 created   objectives     content        HTML
```

### Deployment Lifecycle

```
[Development] → [Committed] → [CI Build] → [Deployed]
     ↓              ↓            ↓            ↓
   Local        Push to      GitHub       gh-pages
   testing       main        Actions       branch
```

---

## Data Model Complete

**Entity Count**: 6 core entities (Module, Week, Landing Page, Theme, Build Output, GitHub Actions)

**File Representations**:
- MDX files: Week content
- JSON files: Module metadata (_category_.json)
- TypeScript: Docusaurus config (docusaurus.config.ts)
- CSS: Theme customization (custom.css)
- YAML: CI/CD workflow (deploy.yml)
- TSX: React components (index.tsx, ChatbotWidget.tsx)

**Next**: Generate quickstart.md with setup instructions
