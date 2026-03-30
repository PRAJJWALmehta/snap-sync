---
description: Strict Spec-Driven Development (SDD) Protocol
---
# SDD Workflow Rules
- **One Task Per Sitting:** Never attempt multiple roadmap tasks at once. Focus on a 1-3 hour slice.
- **Vertical Tasks Only:** Prefer tasks with clear outputs (files, scripts, or tests).
- **Small Commits:** Keep commits atomic to the specific OpenSpec change.

# Definition of Done (DoD)
Every task must include these 3 bullets in its `tasks.md`:
1. **Deliverable:** Specific file/component created.
2. **Verification:** The exact command to run (e.g., `npm test`).
3. **Rollback Note:** How to undo this change if it breaks the stack.
