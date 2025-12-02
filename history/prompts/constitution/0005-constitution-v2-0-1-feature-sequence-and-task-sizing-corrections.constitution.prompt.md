---
id: 0005
title: Constitution v2.0.1 - Feature Sequence and Task Sizing Corrections
stage: constitution
date: 2025-12-02
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: salim
command: Plan mode discussion on feature sequence and task sizing corrections
labels: ["constitution","feature-sequence","task-sizing","v2.0.1","patch","corrections"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - N/A (governance document)
---

## Prompt

**User raised two valid concerns during plan mode**:

1. **Feature Sequence Issue**:
   - Current: "Feature sequence: Core → Auth → Subagents/Skills → Personalization → Translation"
   - Problem: Subagents/Skills are Claude Code development tools (HOW you build), not product features (WHAT users interact with)
   - Correct: "Feature sequence: Core → Auth → Personalization → Translation"
   - Rationale: Subagents/Skills should be used throughout development, not as a sequential product feature

2. **Task Sizing Issue**:
   - Current: "Each task is 1-4 hours"
   - Problem: Too large for effective task management
   - Correct: "Each task is 15-30 minutes"
   - Rationale:
     - Too small (<10 min) = too many micro-tasks, checkpoint overhead
     - Too large (>45 min) = hard to review, hard to fix if wrong
     - Just right (15-30 min) = meaningful progress, reviewable scope

**Context**: Constitution v2.0.0 had just been completed (comprehensive SDD quality principles + work type standards). User identified these conceptual errors that needed immediate correction.

## Response snapshot

**Plan Created**: Constitution v2.0.1 - Feature Sequence and Task Sizing Corrections (PATCH version bump)

**4 Changes Implemented**:

1. ✅ **Core Principle V** (lines 99-109):
   - Removed "Subagents/Skills" from feature list
   - Updated feature sequence: Core → Auth → Personalization → Translation
   - Added rationale clarification
   - Updated scope reduction strategy: Translation → Personalization (Auth non-negotiable)
   - Added explicit note: "Subagents/Skills: Used throughout development as workflow tools (not a sequential feature)"

2. ✅ **Scope Constraints** (lines 537-543):
   - Removed "Claude Code Subagents and Agent Skills" from Should-have priority list
   - Updated graceful degradation to only include product features
   - Added clarifying note: "Claude Code Subagents and Agent Skills are development workflow tools (see Core Principle II) used throughout all features, not optional product features in the priority list."

3. ✅ **Governance** (line 758):
   - Updated: "Sequential development: Core → Auth → Personalization → Translation (Subagents/Skills used throughout as development tools)"

4. ✅ **Task Breakdown Quality Principles** (line 150):
   - Changed: "Each task is 15-30 minutes; if <10 minutes, consolidate; if >45 minutes, break down further"

**Validation**: All changes verified - feature sequence corrected, task sizing updated, Sync Impact Report updated, version footer updated to 2.0.1

## Outcome

- ✅ Impact: Constitution v2.0.1 successfully implemented - conceptual errors corrected with clear separation of product features vs development tools, and practical task sizing guidance
- 🧪 Tests: N/A (governance document)
- 📁 Files: 1 file modified (.specify/memory/constitution.md: v2.0.0 → v2.0.1 PATCH version bump)
- 🔁 Next prompts: Apply corrected feature sequence (Core → Auth → Personalization → Translation) and 15-30 minute task sizing during next feature development
- 🧠 Reflection: User feedback was critical - catching conceptual errors early prevents compounding confusion. Constitution evolution: v1.1.0 (testability) → v1.2.0 (content alignment) → v2.0.0 (complete governance) → v2.0.1 (conceptual clarity). Iterative refinement with user validation ensures constitution remains accurate and practical.

## Evaluation notes (flywheel)

- Failure modes observed: None - all 4 changes implemented successfully
- Graders run and results (PASS/FAIL): PASS - manual validation (feature sequence corrected, task sizing updated, Sync Impact Report updated, version footer updated)
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Monitor task breakdown in next feature development to validate 15-30 minute sizing works in practice (vs theoretical 1-4 hours)
