---
trigger: always_on
description: Strict Spec-Driven Development (SDD) Protocol
---

# SDD Workflow Rules
- **One Task Per Sitting:** Never attempt multiple roadmap tasks at once. Focus on a 1-3 hour slice.
- **Vertical Tasks Only:** Prefer tasks with clear outputs (files, scripts, or tests).
- **Small Commits:** Keep commits atomic to the specific OpenSpec change.
- **Project True Status:** Edit and update `openspec/project.md` in-case there is any deviation from the specified tasks. It is to be used as the single source of truth and also as the project status.
- **Task-Prefixed Changes:** Always prefix the folder created during `/opsx-propose` with the task number (e.g., `t1-baseline-host-audit`).
- **Explicit Confirmation:** Do not start applying tasks or running modifying system/state commands associated with tasks until the user explicitly asks and confirms they are ready to proceed. Let the user control the pacing of task execution.

# Definition of Done (DoD)
Every task must include these 3 bullets in its `tasks.md`:
1. **Deliverable:** Specific file/component created.
2. **Verification:** The exact command to run (e.g., `npm test`).
3. **Rollback Note:** How to undo this change if it breaks the stack.