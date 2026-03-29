## Why

`openspec/project.md` (and the mirrored `context` in `openspec/config.yaml`) are the primary source of truth for agents and future you, but the narrative can be tighter: the **product goal** (Google Photos–style, personal use) and **deployment reality** (photos on an **SSD**, **automatic sync** across **laptop and phone**) should be impossible to miss. A focused refactor aligns docs with that ultimate goal so implementation work and OpenSpec proposals stay scoped correctly.

## What Changes

- Restructure **Vision and scope** so the “Google Photos clone for personal use” story leads, with **SSD as the durable media home** and **cross-device sync** (laptop + phone) called out explicitly—not buried in Immich/infra detail alone.
- Clarify **what Immich owns vs what this repo owns** (upload pipelines, official mobile apps, ML) vs **Snap Sync** (optional custom UI/API, orchestration, future automations)—without duplicating long roadmap lists where a short **reference** section is enough.
- Add a concise **Physical storage & devices** subsection (external SSD vs internal DB/metadata choices already in roadmap) tied to the sync story.
- Keep **roadmaps and backlog** scannable; optionally trim redundancy between sections so `project.md` reads as a reviewable charter, not a dump.
- Apply the **same** substance to **`openspec/config.yaml` → `context`** so OpenSpec-injected context matches `project.md` (per existing convention).
- **No runtime code changes** in this change—documentation only.

## Capabilities

### New Capabilities

- `project-context`: Requirements for how `openspec/project.md` and `openspec/config.yaml` describe product vision, storage on SSD, multi-device auto-sync (laptop and phone), Immich’s role, and personal-project scope.

### Modified Capabilities

- _(none — `openspec/specs/` has no existing capability specs yet.)_

## Impact

- **Files:** `openspec/project.md`, `openspec/config.yaml` (context block).
- **Code / APIs:** none.
- **Dependencies:** none.
- **Consumers:** OpenSpec workflows, AI-assisted implementation, future contributors.
