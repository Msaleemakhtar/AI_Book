---
id: 0001
title: Create project constitution
stage: constitution
date: 2025-12-02
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: salim
command: /sp.constitution
labels: ["constitution", "project-setup", "governance", "learning-first"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - N/A (constitution document)
---

## Prompt

You are an expert AI architect tasked with creating the foundational constitution for the "Physical AI & Humanoid Robotics Textbook" project. This is a **learning-focused** project where quality, best practices, and skill development take precedence over speed.

**Context:**
- **Project**: AI-native educational textbook for Physical AI & Humanoid Robotics course
- **Project Type**: Learning project (also hackathon submission, but learning is primary goal)
- **Tech Stack**: Docusaurus, GitHub Pages, OpenAI/Chatkit Agents SDK, FastAPI, Neon Postgres, Qdrant Cloud, better-auth
- **Development Approach**: Spec-Driven Development using Claude Code and Spec-Kit Plus
- **Timeline**: 10 days - sufficient time for quality implementation
- **Target Audience**: Students learning to control humanoid robots using AI
- **Scope**: ALL features with comprehensive implementation
- **Team Size**: Solo developer with Claude Code as companion
- **Goal**: Master modern AI development practices through hands-on building

**Constitution Structure:**
The constitution MUST be organized into FIVE distinct sections:

1. **Core Principles** (8 principles) - Fundamental beliefs that guide all decisions
2. **Quality Standards** - Concrete, measurable standards for code, testing, and documentation
3. **Constraints** - Hard requirements and non-negotiable boundaries
4. **Book Content Requirements** - Course structure and content principles
5. **Governance** - Authority, prioritization, process, autonomy, learning commitment

**Required Core Principles (in priority order):**
1. Learning-First Mindset (quality over speed, best practices, skill development)
2. Claude Code as Development Companion (subagents, skills, collaborative development)
3. Human-Agent-Robot Partnership Philosophy (educational mission, practical focus)
4. Technical Authority and Educational Excellence (accuracy, latest docs via Context7 MCP)
5. Comprehensive and Complete Implementation (all features to production quality)
6. Spec-Driven Development (SDD) Discipline (spec → plan → tasks → implement → test)
7. AI-Native User Experience (RAG chatbot, personalization, translation)
8. Security, Privacy, and Trust (secure auth, encrypted data, API security)

**Quality Standards** include: Code Quality, Testing (pytest, >70% coverage), Documentation (PHRs, ADRs), Performance (<2s RAG), Security

**Constraints** include: Technology Stack (prescriptive, no alternatives), Timeline (10 days, quality first), Scope (must-have vs should-have), Process (SDD workflow mandatory)

**Output Requirements:**
1. Structure: Organize into 5 sections (Principles, Quality Standards, Constraints, Book Content, Governance)
2. Completeness: Fill ALL placeholders in `.specify/memory/constitution.md` template
3. Clarity: Each principle/standard/constraint must be clear and actionable
4. Concreteness: Use specific examples (e.g., "pytest for backend", "Context7 MCP for docs")
5. Measurability: Include concrete metrics (e.g., "<2s for RAG", ">70% test coverage")
6. Version: Set as 1.0.0, ratification date today (2025-12-02)

## Response snapshot

Created comprehensive constitution v1.0.0 for Physical AI & Humanoid Robotics Textbook project with:

**Core Principles (8)**:
I. Learning-First Mindset - Quality over speed, understand before implementing
II. Claude Code as Development Companion - Subagents, Agent Skills, collaborative AI development
III. Human-Agent-Robot Partnership Philosophy - Educational mission bridging digital AI and physical robotics
IV. Technical Authority and Educational Excellence - Accuracy via Context7 MCP, pedagogical clarity
V. Comprehensive and Complete Implementation - All features (Core→Auth→Subagents→Personalization→Translation)
VI. Spec-Driven Development Discipline - spec→plan→tasks→implement→test, PHRs, ADRs
VII. AI-Native User Experience - RAG chatbot (<2s), personalization, translation
VIII. Security, Privacy, and Trust - better-auth, encrypted Postgres, API security

**Quality Standards**: Code (readability, type safety, DRY), Testing (pytest >70% coverage), Documentation (PHRs, ADRs), Performance (<2s RAG, <3s page load), Security (HTTPS, encryption, input sanitization)

**Constraints**: Tech stack (Docusaurus, FastAPI, Neon Postgres, Qdrant, better-auth, OpenAI - NO alternatives), Timeline (10 days, quality first), Scope (must-have: Docusaurus+RAG+Auth; should-have: Subagents→Personalization→Translation), Process (SDD mandatory)

**Book Content**: 4 modules (ROS 2, Gazebo/Unity, Isaac, VLA), 13-week structure, accuracy via Context7 MCP, hands-on code examples

**Governance**: Constitution supersedes all decisions, sequential development, SDD compliance, solo developer autonomy, learning commitment

## Outcome

- ✅ Impact: Project constitution v1.0.0 ratified, establishes learning-first approach with comprehensive quality standards and constraints
- 🧪 Tests: N/A (governance document, not code)
- 📁 Files: Created `.specify/memory/constitution.md` (302 lines, all placeholders filled)
- 🔁 Next prompts: Begin feature development with `/sp.specify` for first feature (likely Core: Docusaurus + RAG setup)
- 🧠 Reflection: Constitution successfully balances learning goals with delivery constraints, provides clear decision framework, emphasizes quality and understanding over speed

## Evaluation notes (flywheel)

- Failure modes observed: None (initial constitution creation)
- Graders run and results (PASS/FAIL): Manual review - PASS (all placeholders filled, structure correct, principles actionable)
- Prompt variant (if applicable): N/A (initial)
- Next experiment (smallest change to try): After first feature implementation, validate if constitution principles are clear enough for decision-making; adjust if ambiguities discovered
