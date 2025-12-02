# Quick Plan Prompt Template

**Instructions**: Choose your option below, copy and run

---

## When to Run Plan Phase

**Run `/sp.plan` after**:
- ✅ `/sp.specify` completed successfully (spec.md exists)
- ✅ `/sp.clarify` completed (spec validated, 0-3 questions answered)
- ✅ You're ready to design implementation architecture

**Before running**:
- ✅ You're on the feature branch (`###-feature-name`)
- ✅ Spec is comprehensive (detailed spec → detailed plan)

---

## Option 1: Standard Plan (Recommended - 95% of cases)

```
/sp.plan
```

**Use when**:
- You just completed `/sp.clarify` successfully
- Your spec is comprehensive and clear
- Ready to generate implementation architecture
- No specific architectural concerns to emphasize

**What happens**:
- Agent reads your `specs/[###-feature-name]/spec.md` automatically
- Analyzes requirements, constraints, and success criteria
- Generates `plan.md` with architecture and implementation phases
- Suggests ADRs for major architectural decisions

**Expected time**: 3-10 minutes

---

## Option 2: Learning Mode (First Time)

```
Read the documentation at https://ai-native.panaversity.org/docs/SDD-RI-Fundamentals/spec-kit-plus-hands-on/plan-phase and run /sp.plan
```

**Use when**:
- First time using `/sp.plan` command
- Want to understand planning process
- Need to know what plan.md contains
- Learning the SDD workflow

**What happens**:
- Agent reads plan phase documentation
- Understands architecture decomposition process
- Then executes standard plan generation

**Expected time**: 5-15 minutes (includes doc reading)

---

## Option 3: Targeted Plan (Specific Concerns)

```
Run /sp.plan and pay special attention to [ARCHITECTURAL_CONCERN]
```

**Use when**:
- You have specific architectural concerns
- Need extra detail in particular area
- Want to emphasize certain tradeoffs
- Multiple valid approaches exist for specific component

---

## Option 3: 10 Targeted Plan Examples

### 1. Deployment & Infrastructure

```
Run /sp.plan and pay special attention to deployment strategy and CI/CD pipeline architecture
```

**Use when**:
- Concerned about deployment process
- Multiple deployment options (cloud, on-prem, hybrid)
- Need automation strategy
- CI/CD pipeline design unclear
- Environment management (dev, staging, prod)

**Focus areas**: Deployment automation, environment configuration, rollback strategy

---

### 2. Data Architecture

```
Run /sp.plan and pay special attention to data model design and database schema decisions
```

**Use when**:
- Complex data relationships
- Choosing database type (SQL vs NoSQL)
- Schema design needs careful planning
- Data migration required
- Multiple data sources to integrate

**Focus areas**: Entity relationships, schema design, migration strategy, data validation

---

### 3. API Design

```
Run /sp.plan and pay special attention to API architecture and integration points
```

**Use when**:
- Designing REST/GraphQL APIs
- External service integrations
- Microservices communication
- API versioning strategy needed
- Multiple API consumers

**Focus areas**: Endpoint design, authentication, rate limiting, versioning, integration patterns

---

### 4. Security & Authentication

```
Run /sp.plan and pay special attention to security architecture and authentication flow
```

**Use when**:
- User authentication critical
- Authorization patterns needed
- Data protection requirements
- Security compliance (GDPR, HIPAA)
- OAuth/SSO integration

**Focus areas**: Auth flow, session management, data encryption, access control, audit logging

---

### 5. Performance & Scalability

```
Run /sp.plan and pay special attention to performance optimization and scalability concerns
```

**Use when**:
- High-traffic expectations
- Performance budgets critical
- Caching strategy needed
- Load balancing required
- Database optimization important

**Focus areas**: Caching layers, query optimization, load distribution, CDN strategy

---

### 6. Component Architecture

```
Run /sp.plan and pay special attention to component organization and module boundaries
```

**Use when**:
- Large codebase expected
- Need clear separation of concerns
- Reusability important
- Multiple developers on team
- Monorepo vs multi-repo decision

**Focus areas**: Module structure, component hierarchy, dependency management, interfaces

---

### 7. Testing Strategy

```
Run /sp.plan and pay special attention to testing approach and quality validation
```

**Use when**:
- Test coverage critical
- Multiple testing levels needed (unit, integration, e2e)
- CI testing pipeline required
- Quality gates needed
- TDD/BDD approach considered

**Focus areas**: Test pyramid, coverage targets, testing tools, CI integration, mocking strategy

---

### 8. Technology Choices

```
Run /sp.plan and pay special attention to technology stack decisions and framework choices
```

**Use when**:
- Multiple framework options exist
- Need to justify technology choices
- Evaluating tradeoffs between options
- Team expertise considerations
- ADR needed for tech decisions

**Focus areas**: Framework comparison, vendor lock-in risks, team learning curve, ecosystem maturity

---

### 9. Risk Mitigation

```
Run /sp.plan and pay special attention to risk areas and mitigation strategies
```

**Use when**:
- High-risk project
- Critical dependencies on external services
- Failure scenarios need planning
- Business continuity important
- Disaster recovery needed

**Focus areas**: Risk identification, failure modes, fallback strategies, monitoring, alerts

---

### 10. Migration Strategy

```
Run /sp.plan and pay special attention to migration approach and backwards compatibility
```

**Use when**:
- Upgrading existing systems
- Data migration required
- Breaking changes possible
- Gradual rollout needed
- Backwards compatibility critical

**Focus areas**: Migration phases, data transformation, rollback plan, feature flags, compatibility layers

---

## Quick Reference: Common Concerns

| Your Concern | Focus On |
|-------------|----------|
| "How do we deploy this?" | `deployment strategy and CI/CD` |
| "What's the data structure?" | `data model and schema design` |
| "How do services communicate?" | `API architecture and integration` |
| "How do we secure this?" | `security and authentication` |
| "Will it handle load?" | `performance and scalability` |
| "How do we organize code?" | `component architecture` |
| "How do we test this?" | `testing approach` |
| "Which framework to use?" | `technology stack decisions` |
| "What could go wrong?" | `risk areas and mitigation` |
| "How do we migrate?" | `migration approach` |

**Most common**: Deployment, Data Architecture, API Design

---

## What Plan Reads

The `/sp.plan` command automatically reads your specification:

**Input**: `specs/[###-feature-name]/spec.md`

**Analyzes**:
- ✅ User stories and acceptance scenarios
- ✅ Functional requirements (FR-001 to FR-XXX)
- ✅ Success criteria (measurable outcomes)
- ✅ Constraints (technology, performance, security)
- ✅ Assumptions (environment, dependencies)
- ✅ Out-of-scope items (boundary clarity)
- ✅ Edge cases (failure handling)

**Key Principle**: "Detailed spec → detailed plan. Vague spec → vague plan."

---

## What Plan Generates

**Primary Output**: `specs/[###-feature-name]/plan.md`

**Contents**:

### 1. Architecture Overview
- High-level system design
- Component organization
- Integration points
- Technology stack justification

### 2. Implementation Phases (3-5 sequential stages)
```
Phase 1: Foundation & Setup
Phase 2: Core Functionality
Phase 3: Integration & Testing
Phase 4: Polish & Documentation
Phase 5: Deployment & Monitoring
```

Each phase includes:
- Goals and deliverables
- Dependencies on previous phases
- Success criteria
- Estimated complexity

### 3. Component Breakdown
- Module structure
- Responsibility assignments
- Interface definitions
- Data flow diagrams (textual)

### 4. Dependency Mapping
- Blocking relationships
- What must be completed first
- Parallel work opportunities
- External dependencies

### 5. Architectural Decisions (ADR Candidates)
- Major design choices identified
- Options and tradeoffs listed
- ADR suggestions with `/sp.adr [title]`
- Reasoning for recommendations

### 6. Risk Assessment
- Identified risks
- Mitigation strategies
- Contingency plans

---

## ADR (Architectural Decision Record) Guidance

### Three-Part ADR Test

Before documenting a decision, ask:

**1. Does this have long-term consequences?**
- Will this choice affect the system for months/years?
- Is this decision hard to reverse later?

**2. Are multiple viable alternatives present?**
- Are there 2+ reasonable approaches?
- Do the alternatives have significant tradeoffs?

**3. Will stakeholders question this choice later?**
- Will future developers ask "why did we do it this way?"
- Does this affect team collaboration or workflow?

**If ALL THREE = YES** → Create ADR

### When to Create ADR

```
/sp.adr [decision-title]
```

**Examples**:
- `/sp.adr docusaurus-vs-nextra-framework-choice`
- `/sp.adr github-pages-deployment-strategy`
- `/sp.adr mdx-content-format-decision`

**Common ADR Topics**:
- Framework/library choices
- Database selection
- Architecture patterns (microservices, monolith, serverless)
- Deployment strategies
- Authentication approaches
- API design patterns

### What Goes in an ADR

**ADR Structure**:
1. **Context**: What problem are we solving?
2. **Decision**: What did we choose?
3. **Alternatives Considered**: What other options existed?
4. **Consequences**: Positive and negative outcomes
5. **Tradeoffs**: What we gained vs what we gave up

**ADR Location**: `history/adr/####-[decision-title].md`

---

## Review Checklist

After plan is generated, verify:

**Architecture**:
- [ ] Overall architecture makes sense
- [ ] Component boundaries are clear
- [ ] Integration points identified
- [ ] Technology choices justified

**Phasing**:
- [ ] Phases are sequential and logical
- [ ] Each phase has clear deliverables
- [ ] Dependencies between phases identified
- [ ] Parallel work opportunities noted

**Dependencies**:
- [ ] Blocking relationships mapped
- [ ] External dependencies documented
- [ ] Required prerequisites listed

**Decisions**:
- [ ] Major architectural decisions highlighted
- [ ] Tradeoffs explained
- [ ] ADRs suggested for significant choices
- [ ] Rationale provided for recommendations

**Feasibility**:
- [ ] Plan aligns with success criteria from spec
- [ ] Constraints respected (technology, performance, budget)
- [ ] Risks identified and mitigated
- [ ] Timeline realistic (if included)

---

## Expected Output Structure

### Typical `plan.md` Structure

```markdown
# Implementation Plan: [Feature Name]

## Architecture Overview
[High-level design, component diagram, technology stack]

## Implementation Phases

### Phase 1: Foundation & Setup
- Goals: [Setup infrastructure, tooling, base structure]
- Deliverables: [Configuration files, directory structure, dependencies]
- Dependencies: None
- Success Criteria: [Measurable outcomes]

### Phase 2: Core Functionality
- Goals: [Implement primary features]
- Deliverables: [Core components, business logic]
- Dependencies: Phase 1 complete
- Success Criteria: [Measurable outcomes]

### Phase 3: Integration & Testing
- Goals: [Connect components, comprehensive testing]
- Deliverables: [Integration code, test suites]
- Dependencies: Phase 2 complete
- Success Criteria: [Measurable outcomes]

## Component Breakdown
[Detailed module descriptions]

## Dependency Graph
[Blocking relationships and sequencing]

## Architectural Decisions
[Major choices with ADR suggestions]

## Risk Assessment
[Identified risks and mitigation strategies]
```

---

## After Plan is Generated

### Step 1: Review Plan
- Read `specs/[###-feature-name]/plan.md`
- Verify architecture aligns with spec
- Check phases are logical and sequential
- Confirm dependencies make sense

### Step 2: Create ADRs (if suggested)
- For each architectural decision identified
- Run `/sp.adr [decision-title]`
- Document context, decision, alternatives, consequences
- Link ADR in plan.md

### Step 3: Validate with Team (optional)
- Review plan with stakeholders
- Discuss architectural decisions
- Confirm approach before implementation
- Update plan if needed

### Step 4: Proceed to Tasks
```
/sp.tasks
```
- Breaks plan into actionable tasks
- Creates task breakdown in `specs/[###-feature-name]/tasks.md`
- Next phase: implementation

---

## Troubleshooting

### Issue: "Spec file not found"
**Fix**: Ensure `/sp.specify` was run first and spec.md exists
```bash
ls specs/[###-feature-name]/spec.md
```

### Issue: Plan is too vague or generic
**Cause**: Specification was underspecified
**Fix**:
- Review spec.md - are requirements detailed?
- Run `/sp.clarify` again to catch ambiguities
- Add more detail to spec, re-run `/sp.plan`

**Remember**: "Detailed spec → detailed plan. Vague spec → vague plan."

### Issue: Missing architectural decisions
**Cause**: Plan didn't identify ADR candidates
**Fix**: Review plan manually, identify decisions that pass three-part test, create ADRs manually

### Issue: Phases don't make sense
**Cause**: Complex dependencies or spec conflicts
**Fix**: Review dependency mapping, consider using Option 3 (targeted) to focus on sequencing

---

## Quality Indicators

**Excellent Plan (90-95/100)**:
- 3-5 clear sequential phases
- All major decisions identified
- Dependencies mapped
- 2-3 ADR suggestions
- Risks identified with mitigation
- Aligns perfectly with spec

**Good Plan (80-90/100)**:
- Clear phases with some overlap
- Most decisions identified
- Dependencies mostly clear
- 1-2 ADR suggestions
- Some risks identified

**Needs Work (<80/100)**:
- Vague phases
- Missing decision points
- Unclear dependencies
- No ADR suggestions
- Gaps in architecture

**If plan quality is low**: Review and enhance spec.md, then re-run `/sp.plan`

---

## Key Reminders

**Unlike `/sp.specify`**:
- ❌ No fill-in-the-blank template needed
- ❌ No user input to provide
- ✅ Just run the command (it reads spec.md)

**Like `/sp.clarify`**:
- ✅ Mostly automated
- ✅ Reads existing artifacts
- ✅ Generates output automatically

**Plan quality depends on spec quality**:
- Comprehensive spec → Detailed plan
- Vague spec → Generic plan
- Missing constraints → Incomplete architecture

---

**Ready?** Copy your chosen option and run the plan command!

**After plan**: Review plan.md → Create ADRs → Run `/sp.tasks`
