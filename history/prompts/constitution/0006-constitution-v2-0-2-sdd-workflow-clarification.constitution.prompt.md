---
id: 0006
title: Constitution v2.0.2 - SDD Workflow Clarification
stage: constitution
date: 2025-12-02
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: salim
command: constitution-update
labels: ["constitution", "sdd-workflow", "clarify-step", "documentation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none (documentation change)
---

## Prompt

User requested to create a feature specification for Docusaurus framework but first wanted to discuss the SDD workflow. During discussion, we discovered the constitution documented the workflow as:

`spec → plan → tasks → implement → test → review`

But the correct workflow should include the **clarify** step:

`spec → clarify → plan → tasks → implement → test → review`

The `/sp.clarify` command exists but wasn't documented in the constitution. User decided to fix the constitution first before proceeding with Docusaurus specification.

**User's instruction**: "first only fix the constitution"

## Response snapshot

Updated constitution from v2.0.1 → v2.0.2 with the following changes:

1. **Sync Impact Report Header** (lines 1-27):
   - Updated version from 2.0.1 → 2.0.2
   - Documented amendment type: PATCH (workflow clarification)
   - Listed all modified sections and rationale
   - Added to version history

2. **Core Principle VI: SDD Discipline** (lines 105-125):
   - Updated workflow to include clarify step
   - Added detailed "Workflow Phases" section explaining each phase:
     - spec: Define WHAT needs to be built
     - clarify: Identify gaps, ask questions, encode answers
     - plan: Design HOW to build it
     - tasks: Break down into testable tasks (15-30 min)
     - implement: Execute tasks with TDD
     - test: Verify acceptance criteria
     - review: Self-review, refactor, create PHR
   - Updated rationale to explain importance of clarify step
   - Added `/sp.clarify` to non-negotiable rules

3. **Process Constraints** (line 550):
   - Updated workflow: spec → clarify → plan → tasks → implement → test → review

4. **Development Process** (line 767):
   - Updated workflow: spec → clarify → plan → tasks → implement → test → review

All 3 workflow references now consistent and complete.

## Outcome

- ✅ Impact: Constitution now documents complete SDD workflow with clarify step, establishing correct pattern for all future features
- 🧪 Tests: None (documentation change)
- 📁 Files: 1 file modified (.specify/memory/constitution.md)
- 🔁 Next prompts: Commit constitution changes, then proceed to create Docusaurus feature specification
- 🧠 Reflection: Discovered workflow documentation gap early (before first feature), preventing incorrect workflow propagation across all features. Demonstrates value of reviewing foundational documents before implementation.

## Evaluation notes (flywheel)

- Failure modes observed: None - straightforward documentation update
- Graders run and results (PASS/FAIL): Manual review - PASS (all 3 references updated, detailed explanation added, sync impact report complete)
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Use this corrected workflow (spec → clarify → plan → tasks → implement) for Docusaurus feature specification
