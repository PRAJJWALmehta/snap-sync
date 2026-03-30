---
description: Execute a hardening pass at the end of a phase
---
# Phase-End Hardening Workflow
1. Run full regression pass (API + Ingest + Backup + Restore).
2. Perform a "Smoke Test" on the mobile/CLI integration.
3. Generate a Phase Retrospective: Identify what changed, what broke, and what to reprioritize.
4. Finalize by running `/opsx:archive`.
