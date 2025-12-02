# Quick Specification Prompt (Fill & Run)

**Instructions**: Copy this template, fill in the [brackets], then paste into `/sp.specify`

---

## Pre-Setup (if needed)
[Optional: e.g., "Create feature branch 002-authentication, use auth/ directory"]

## Feature: [Feature Name]

### Project Description
[2-4 sentences: What is this feature? Why is it needed? How does it fit into the system?]

### Target Audience
- **Primary**: [User group] ([specific skills/roles])
- **Secondary**: [Supporting groups]
- **Technical Level**: [Beginner/Intermediate/Advanced] ([assumptions about knowledge])

### Focus Areas
- [Deliverable 1 with specific details]
- [Deliverable 2 with specific details]
- [Deliverable 3 with specific details]
- [Deliverable 4 with specific details]
- [Deliverable 5 with specific details]
- [Integration/Config requirement]
- [Documentation requirement]
- [Testing requirement]

### Success Criteria (Measurable)
1. [Tool/Framework] [version] installed, verified by [method]
2. [Build command] completes with [metric: zero errors, <X time, etc.]
3. [Performance metric] achieves [threshold: <X seconds, <Y MB, >Z score]
4. [Feature] works on [platforms/browsers/devices]
5. [Quality metric] passes [standard: WCAG 2.1 AA, Lighthouse >90, etc.]
6. [Coverage metric] reaches [X% coverage, all modules, etc.]
7. [User action] completes in [<X clicks, <Y seconds]
8. [Component] created at [specific path]
9. [Configuration file] exists with [specific settings]
10. [Deployment] succeeds with [zero errors, <X minutes]
11. [Documentation] includes [specific sections]
12. [Accessibility] meets [standard with specific checks]

### Constraints
- **Technology**: [Framework] [version] ONLY, [language], [runtime] [version], [package manager]
- **Deployment**: [Platform] ONLY, [specific config requirements]
- **Repository**: [Integration requirements with existing structure]
- **Configuration**: [Required file formats, naming conventions]
- **Content/Data**: [Format specifications, schema requirements]
- **Design**: [Theme, branding, style requirements]
- **Accessibility**: [Standard] mandatory
- **Performance**: [Specific budgets: build <X min, size <Y MB, FCP <Z sec]
- **Security**: [Requirements: auth method, encryption, etc.]
- **Git**: [Version control requirements]

### Non-Goals
- [Related feature that's separate/future]
- [Integration deferred to later phase]
- [Advanced capability out of scope]
- [Alternative approach rejected]
- [Optimization not included]
- [Third-party service not integrated]
- [Platform/browser not supported]
- [Feature variation not included]
- [Advanced configuration not needed]
- [Additional tooling not included]

---

## Quick Checklist Before Running

- [ ] Every success criterion has a NUMBER or binary verification
- [ ] All technology choices have VERSION numbers
- [ ] At least 8 non-goals listed
- [ ] No vague terms (fast, good, better) without numbers
- [ ] Target audience technical level specified
- [ ] Performance budgets included (<X time, <Y size)
- [ ] Accessibility standard specified (WCAG level)

---

**Ready?** Copy your filled prompt and run:
```
/sp.specify

[Paste your filled prompt here]
```
