---
description: Perform a senior-level architectural review, sync project state, and prevent drift
---
Execute a rigorous "Senior Developer" review of the current workspace state, align it with the project's vision, and synchronize the tracking systems. This workflow acts as a quality gatekeeper before finalizing work and archiving a change.

**Input**: Run `/opsx-sync` (optionally provide a specific change name, e.g., `/opsx-sync t3-validate-boot`).

**Steps**

1. **Information Gathering (The Code Review)**
   - Identify the currently active change or recently modified files.
   - Read the relevant artifacts in `openspec/changes/<active-change>/` (proposal, design, specs, walkthrough).
   - Use `git diff` and `git status` to review uncommitted modifications to infrastructure, UI, or backend code.
   - Deeply analyze `openspec/project.md` to reload the core architectural constraints, system invariants, and strategic posture (e.g., Immich-first, Split-I/O, memory constraints).

2. **Architectural Drift & Best Practices Analysis**
   - **Evaluate Adherence**: Does the implementation strictly adhere to the rules in `AGENTS.md` and `openspec/project.md`? 
   - **Evaluate Complexity**: Is the code overly complex? Did we build custom logic where a native Immich feature could have sufficed?
   - **Evaluate Scope**: Did the implementation stray from the original `proposal.md` or `design.md`?
   - **Security & Hygiene**: Are sensitive environment configurations properly `.gitignore`'d? Are ports and volumes mapped securely?

3. **Present the "Senior Developer Review"**
   - Output a structured review to the user with three sections: **Praise/Successes**, **Architectural Drift/Violations**, and **Recommendations**.
   - If there are critical violations, **PAUSE** the workflow. Ask the user: "Do you want to fix these issues, or should we update the core design/project.md to reflect this new architectural direction?"
   - Do not proceed to synchronization without user sign-off.

4. **Synchronize Project State (`project.md`)**
   - Upon user approval, systematically update `openspec/project.md`.
   - Check off the completed roadmap task corresponding to the current work (`[x]`).
   - If the architecture, strategy, or constraints were intentionally altered during this work, rewrite those sections in `project.md` immediately so it remains the flawless single Source of Truth.

5. **Archive & Merge Specifications**
   - Check the status of the current change using `npx openspec status --change "<name>"`.
   - If all tasks and artifacts are complete, run the `/opsx-archive` workflow (or `npx openspec archive "<name>"`) to securely archive the change and compile the delta specs into the main `openspec/specs/` directory.

6. **Final Sign-off**
   - Display a brief summary of what was synced.
   - Explicitly list what the *next* roadmap task is from Phase 1-4 to guide the user's next session.

**Output Example**

```
## Senior Developer Review: <change-name>

**Status**: ⚠️ Drift Detected

**The Good**: 
- Docker constraints are perfectly aligned with the 3GB limit.
- Runbook is clear and actionable.

**Architectural Drift**:
- You added a custom script for backups, but `project.md` mandates using native Immich CLI first.

**Action Required**:
Do you want me to refactor the script out, or should we update `project.md` to bless this custom script approach?
```
