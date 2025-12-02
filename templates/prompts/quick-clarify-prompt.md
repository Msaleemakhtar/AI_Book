# Quick Clarify Prompt Template

**Instructions**: Choose your option below, fill any [brackets], then run

---

## Option 1: Standard Clarify (Recommended - 95% of cases)

```
/sp.clarify
```

**Use when**:
- You just ran `/sp.specify` successfully
- Spec looks complete but you want validation
- Ready to move to planning phase

## Option 2: First Time / Learning Mode

```
Read the documentation at https://ai-native.panaversity.org/docs/SDD-RI-Fundamentals/spec-kit-plus-hands-on/clarify-phase and run /sp.clarify
```

**Use when**:
- First time using `/sp.clarify` command
- Want to understand the clarify process
- Need to see what the 10 taxonomy categories are

**What happens**:
- Agent reads clarify documentation first
- Understands the taxonomy and process
- Then executes standard clarify

**Expected time**: 2-3 minutes + clarify time

---

## Option 3: Targeted Clarify (Known Issues)

```
I've reviewed the specification and have concerns about [SPECIFIC_AREA].
Please run /sp.clarify and pay special attention to [TAXONOMY_CATEGORY].
```

**Fill in**:
- `[SPECIFIC_AREA]`: Your concern (e.g., "performance requirements", "error handling", "technology choices")
- `[TAXONOMY_CATEGORY]`: Pick ONE from list below

**10 Taxonomy Categories**:
1. **Functional Scope & Behavior** - What the system does, core features
2. **Domain & Data Model** - Entities, relationships, data structures
3. **Interaction & UX Flow** - User journeys, navigation, flows
4. **Non-Functional Quality Attributes** - Performance, security, accessibility
5. **Integration & External Dependencies** - APIs, services, platforms
6. **Edge Cases & Failure Handling** - Errors, timeouts, invalid inputs
7. **Constraints & Tradeoffs** - Technology limits, budgets, decisions
8. **Terminology & Consistency** - Naming, definitions, language
9. **Completion Signals** - Done criteria, success metrics
10. **Misc / Placeholders** - TODOs, unresolved items

**Examples**:

```
I've reviewed the specification and have concerns about error handling.
Please run /sp.clarify and pay special attention to Edge Cases & Failure Handling.
```

```
I've reviewed the specification and have concerns about performance budgets.
Please run /sp.clarify and pay special attention to Non-Functional Quality Attributes.
```

```
I've reviewed the specification and have concerns about technology versions.
Please run /sp.clarify and pay special attention to Constraints & Tradeoffs.
```

---

## How to Answer Clarify Questions

**If clarify finds ambiguities, it will ask up to 5 questions. Respond with**:

### Accept Recommended Answer
```
recommended
```
or
```
yes
```

**Use when**: The recommendation looks good, you trust the best practice

---

### Choose Specific Option
```
A
```
or
```
B
```
or
```
C
```

**Use when**: You have specific requirements that match one option

---

### Provide Custom Answer
```
[Your answer in 5 words or less]
```

**Example**:
```
Q: Placeholder content language?
A: English with code snippets
```

**Use when**: None of the options fit your exact need

---

## What to Expect

### Scenario 1: No Ambiguities (60-70% probability)

**Output**:
```
✅ Result: No Critical Ambiguities Detected

Your specification is exceptionally comprehensive.

Your spec already has:
- ✅ X functional requirements - All specific and testable
- ✅ Y success criteria - All measurable with concrete metrics
- ✅ Z documented assumptions - Environment clear
- ✅ Zero ambiguous terms - All requirements quantified

🎯 Recommendation: Proceed to /sp.plan
```

**What to do**: Run `/sp.plan` immediately

---

### Scenario 2: Minor Clarifications (25-30% probability)

**Output**:
```
Found 3 ambiguities requiring clarification:

Q1: [Category Name]
[Question with context]
A) [Option A] (recommended)
B) [Option B]
C) [Option C]

Recommended: A) [Option A]

Your answer:
```

**What to do**:
- Read each question carefully
- Type your answer (recommended / A / B / C / custom)
- Spec will be updated automatically
- Continue to next question

**Duration**: 2-5 minutes (3-5 questions)

---

### Scenario 3: Major Clarifications (5-10% probability)

**Output**:
```
Found 5 critical gaps in specification...
```

**What this means**:
- Your spec was underspecified
- Missing critical information
- Need substantial clarifications

**What to do**:
- Answer all questions thoughtfully
- Review updated spec carefully
- Consider if more detail needed
- May want to re-run `/sp.clarify` after updates

**Duration**: 5-10 minutes

---

## After Clarify Completes

### Files Modified
- `specs/[###-feature-name]/spec.md` (updated if clarifications made)

### New Files Created
- `history/prompts/[###-feature-name]/####-clarify-[title].spec.prompt.md` (PHR)

### New Sections Added (if questions asked)
```markdown
## Clarifications
### Session 2025-12-02
- Q: [question] → A: [answer]
- Q: [question] → A: [answer]
```

### Next Steps
```
1. Review updated spec.md (if changes made)
2. Verify clarifications were integrated correctly
3. Run /sp.plan to generate implementation architecture
```

---

## Quick Tips

**DO**:
- ✅ Always run clarify (even if spec looks perfect)
- ✅ Trust the automated analysis
- ✅ Accept recommended answers when uncertain
- ✅ Answer all questions (no skipping)

**DON'T**:
- ❌ Skip clarify phase (catches subtle issues)
- ❌ Over-explain in your prompt (command reads the spec)
- ❌ Rush through questions (take time to think)
- ❌ Worry if zero questions (that means excellent spec!)

---

## Troubleshooting

### Issue: "Feature directory not found"
**Fix**: Ensure you're on correct branch and `/sp.specify` was run first
```bash
git branch --show-current  # Should show: ###-feature-name
ls specs/                  # Should show: ###-feature-name/
```

### Issue: Clarify found 5+ ambiguities
**What it means**: Your specification needs more detail
**Fix**:
- Answer all questions
- Check if you quantified all success criteria (need numbers!)
- Check if you locked all technology versions
- Check if you listed enough non-goals (need 8-15)

### Issue: Recommended answer doesn't fit
**Fix**: Choose specific option (A/B/C) or provide custom answer
**Note**: Recommendations are best practices, not requirements

### Issue: Want to skip a question
**Fix**: Not possible - provide best guess or "decide during planning"
**Why**: Each question indicates real ambiguity that needs resolution

---

## Success Indicators

**Excellent Spec (90-95/100)**:
- 0-1 questions asked
- All categories marked "Clear"
- Recommendation to proceed immediately
- Zero TODO markers

**Good Spec (80-90/100)**:
- 2-3 questions asked
- Most categories "Clear", some "Partial"
- Minor clarifications needed
- Proceed after updates

**Needs Work (<80/100)**:
- 4-5 questions asked
- Multiple categories "Partial" or "Missing"
- Major gaps in requirements
- Consider revising spec template

---

**Ready?** Copy your chosen option above and run the clarify command!

**After clarify**: Run `/sp.plan` to proceed to implementation planning
