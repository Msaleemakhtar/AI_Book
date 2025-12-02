# SDD Prompt Templates

**Recommended templates for Specification, Clarify, and Plan phases**

---

## 📁 Templates

### 1. `quick-specify-prompt.md` ⭐
**For**: Creating feature specifications with `/sp.specify`

**How to use**:
1. Open the file
2. Copy the template
3. Fill in all [brackets]
4. Run `/sp.specify` and paste your filled prompt

**Result**: High-quality spec with 15-30 FRs, 8-15 SCs, minimal clarifications needed

---

### 2. `quick-clarify-prompt.md` ⭐
**For**: Validating specifications with `/sp.clarify`

**How to use**:
1. Open the file
2. Choose one of 3 options (usually Option 1: `/sp.clarify`)
3. Copy and paste the command
4. Answer any clarification questions if asked

**Result**: Validated spec ready for `/sp.plan`

---

### 3. `quick-plan-prompt.md` ⭐
**For**: Generating implementation architecture with `/sp.plan`

**How to use**:
1. Open the file
2. Choose one of 3 options (usually Option 1: `/sp.plan`)
3. Copy and paste the command (no additional input needed!)
4. Review generated plan.md and create ADRs if suggested

**Result**: Architecture overview, 3-5 implementation phases, dependency mapping, ADR suggestions

---

## ⚡ Quick Workflow

```
1. Use quick-specify-prompt.md → Fill blanks → Run /sp.specify
2. Use quick-clarify-prompt.md → Copy Option 1 → Run /sp.clarify
3. Use quick-plan-prompt.md → Copy Option 1 → Run /sp.plan
4. Review plan.md → Create ADRs → Run /sp.tasks
```

---

## 📊 Quality Targets

**Specification** (using quick-specify-prompt.md):
- Fill time: 10-15 minutes
- Generated: 15-30 functional requirements
- Generated: 8-15 success criteria
- Quality score: 85-95/100

**Clarification** (using quick-clarify-prompt.md):
- Probability: 60-70% zero questions (excellent spec)
- Probability: 25-30% minor questions (3-5)
- Probability: 5-10% major questions (5+)

**Planning** (using quick-plan-prompt.md):
- Execution time: 3-10 minutes (automated)
- Generated: 3-5 implementation phases
- Generated: Component breakdown + dependencies
- Generated: 2-3 ADR suggestions (for major decisions)

---

## ✅ Success Indicators

**Good specification** = 0-2 clarification questions
**Good plan** = Clear phases, dependencies mapped, 2-3 ADR suggestions
**Needs improvement** = Vague phases, unclear dependencies (review spec quality)

---

## 🔑 Key Differences

**Specification**: You fill detailed requirements → Agent generates spec
**Clarification**: Agent scans spec → Asks 0-5 questions
**Planning**: Agent reads spec → Generates architecture (no user input)

---

**Based on**: Docusaurus Framework Setup (Feature 001, quality score 95/100)
