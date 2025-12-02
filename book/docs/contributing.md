---
sidebar_position: 100
title: "Contributing Guide"
---

# Contributing to the Physical AI Textbook

Thank you for your interest in improving this textbook! This guide explains how to add content, maintain consistency, and follow best practices.

## Content Guidelines

### Writing Style

- **Audience**: Assume readers have basic programming knowledge but are new to robotics
- **Tone**: Professional yet approachable, avoid jargon without explanation
- **Structure**: Start with learning objectives, provide context, explain concepts, include examples
- **Length**: Aim for 800-1500 words per week (currently placeholders are ~200 words)

### Markdown and MDX

All content files use **MDX** (Markdown + JSX components). Basic syntax:

```markdown
---
sidebar_position: 1
title: "Week Title"
---

# Main Heading (H1)

## Section (H2)

### Subsection (H3)

- Bullet points
- Use for lists

**Bold text** for emphasis, *italic text* for terms, `inline code` for commands.

Code blocks use three backticks with language identifier.
```

### Front Matter

Every MDX file must include front matter:

```yaml
---
sidebar_position: 1   # Controls sidebar order (1-13 for weeks)
title: "Week 1: Title"  # Displayed in sidebar and page heading
---
```

### Learning Objectives

Each week should start with 3-5 clear, measurable learning objectives using action verbs:

- ✅ "Understand how ROS 2 nodes communicate via topics"
- ✅ "Implement a simple publisher-subscriber in Python"
- ❌ "Learn about ROS 2" (too vague)

### Code Examples

Include runnable code snippets with explanations. Use proper syntax highlighting for Python, C++, YAML, etc.

### Images and Diagrams

Place images in `static/img/` and reference them with standard Markdown syntax. Use Mermaid diagrams for flowcharts and architecture diagrams.

### Links

- **Internal links**: `/docs/module-1-ros2/week-2-sensors`
- **External links**: `https://docs.ros.org` (opens in new tab automatically)

### Callouts and Admonitions

Use Docusaurus admonitions for important notes. Available types: `tip`, `warning`, `info`, `note`, `danger`.

## File Organization

### Directory Structure

```
docs/
├── intro.md                       # Landing page
├── module-1-ros2/
│   ├── _category_.json            # Module metadata
│   ├── week-1-physical-ai-intro.md
│   ├── week-2-sensors.md
│   └── ...
├── module-2-simulation/
│   ├── _category_.json
│   ├── week-6-gazebo.md
│   └── ...
└── contributing.md                # This file
```

### File Naming

- **Modules**: `module-{number}-{slug}/` (e.g., `module-1-ros2/`)
- **Weeks**: `week-{number}-{slug}.md` (e.g., `week-3-ros2-basics.md`)
- **Slugs**: Use kebab-case (lowercase, hyphens) for URLs

### Adding a New Week

1. Create file: `docs/module-X/week-Y-title.md`
2. Add front matter with correct `sidebar_position`
3. Write content following style guide
4. Test locally: `npm start`
5. Build to check for errors: `npm run build`
6. Commit and push

### Adding a New Module

1. Create directory: `docs/module-X-name/`
2. Add `_category_.json`:
   ```json
   {
     "label": "Module X: Title",
     "position": X,
     "link": {
       "type": "generated-index",
       "description": "Module overview"
     }
   }
   ```
3. Add week files as above

## Development Workflow

### Local Development

```bash
# Navigate to book directory
cd book

# Install dependencies (first time only)
npm install

# Start dev server (hot-reload enabled)
npm start

# Builds site, opens browser at http://localhost:3000/AI_Book/
```

### Making Changes

1. Create a feature branch: `git checkout -b add-week-14`
2. Edit MDX files in `docs/`
3. Save - browser auto-refreshes within 2 seconds
4. Verify no errors in terminal
5. Test build: `npm run build`
6. Commit changes: `git commit -m "Add Week 14: Advanced Topics"`
7. Push and create PR: `git push origin add-week-14`

### Testing Before Committing

Always test build before pushing:

```bash
# Build for production
npm run build

# Expected output:
# [SUCCESS] Generated static files in "build".

# Test production build
npm run serve

# Visit http://localhost:3000/AI_Book/ and verify all links work
```

### TypeScript Type Checking

If you modify `.ts` or `.tsx` files:

```bash
npm run typecheck

# Fix any reported TypeScript errors before committing
```

## Style Guide

### Headings

- **H1** (`#`): Page title (once per file, auto-generated from front matter `title`)
- **H2** (`##`): Major sections (Learning Objectives, Introduction, Key Concepts, Next Steps)
- **H3** (`###`): Subsections within H2
- **H4-H6**: Avoid; restructure content instead

### Lists

- Use **bullet lists** for unordered items
- Use **numbered lists** for sequential steps
- Keep list items parallel in structure

### Emphasis

- **Bold** for important terms on first use
- *Italic* for book titles, emphasis
- `Code` for commands, file names, variable names

### Terminology

- **ROS 2** (not ROS2 or ros2) - official capitalization
- **NVIDIA Isaac Sim** (not Isaac sim or isaac-sim)
- **URDF** (all caps) - Unified Robot Description Format
- **VLA** (all caps) - Vision-Language-Action

## Quality Checklist

Before submitting a PR, verify:

- [ ] Front matter includes `sidebar_position` and `title`
- [ ] 3-5 learning objectives listed
- [ ] Content is 800-1500 words (for full weeks, not placeholders)
- [ ] Code examples are tested and runnable
- [ ] All links work (internal and external)
- [ ] Images have descriptive alt text
- [ ] No spelling or grammar errors
- [ ] `npm run build` succeeds with zero errors
- [ ] Consistent terminology and style

## Getting Help

- **Docusaurus Docs**: https://docusaurus.io/docs
- **Markdown Guide**: https://www.markdownguide.org/basic-syntax/
- **MDX Docs**: https://mdxjs.com/docs/
- **Questions**: Open a GitHub Discussion

## License

All content contributions are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

By contributing, you agree to license your work under this license.

---

**Thank you for helping build the best Physical AI textbook!** 🤖
