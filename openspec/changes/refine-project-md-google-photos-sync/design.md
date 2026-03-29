## Context

`openspec/project.md` and `openspec/config.yaml` carry the same narrative; only `config.yaml`’s `context` is injected by the OpenSpec CLI. Today’s docs already mention Google Photos–style goals and Immich but can be reorganized so **SSD-backed storage** and **automatic sync across laptop and phone** are first-class, not implied only through roadmap bullets.

## Goals / Non-Goals

**Goals:**

- Lead with a clear **personal Google Photos clone** statement: one library, uploads, browsing/albums, discovery over time—and **photos stored on an SSD** you control.
- State **cross-device sync** explicitly: **laptop** (web/desktop clients) and **phone** (Immich mobile app as the primary phone path unless/until a custom client exists).
- Preserve accurate **split of responsibilities**: Immich (media pipeline, mobile, ML, storage volumes) vs Snap Sync repo (Nest/SvelteKit/SDD, future orchestration).
- Reduce **duplicate or overly dense** sections so a reader can “review” the charter in one pass; long checklists stay but may move under a single **Roadmap** heading or shortened intro.
- Keep `project.md` and `config.yaml` **content-equivalent** for all injected facts (minus the meta “OpenSpec note” only in `project.md`).

**Non-Goals:**

- No implementation of sync, storage, or UI in this change—**documentation only**.
- No requirement to add Docker/Compose/IaC files here (covered by future changes).
- No change to `openspec/specs/` mainline (only the **delta** `specs/project-context/spec.md` under this change).

## Decisions

| Decision | Rationale | Alternatives considered |
|----------|-----------|-------------------------|
| **Single capability spec `project-context`** | One place to verify doc requirements without fragmenting “vision” across many tiny specs. | Multiple specs (`storage`, `sync`, `immich`); rejected as heavy for a docs-only change. |
| **Explicit “Physical storage & devices” subsection** | SSD and phone/laptop sync are user-stated non-negotiables; they deserve a dedicated block so agents do not optimize only for “generic self-hosting.” | Folding into Immich paragraph only; rejected as easy to skim past. |
| **Immich mobile as the phone story for now** | Matches reality: Immich ships mobile clients; this repo does not yet. Docs should say phone access **through Immich** until a Snap Sync–native app exists. | Implying a custom phone app already; rejected as misleading. |
| **Charter-length cap ~2–3 screens** | Keeps `project.md` reviewable; deep roadmap stays but with less repeated framing text. | Full paste of all roadmap detail at top; rejected as hurts “review” goal. |

## Risks / Trade-offs

- [Doc drift] **`project.md` updated but `config.yaml` not** → Mitigation: final task in `tasks.md` is a literal side-by-side check; OpenSpec note in `project.md` reminds maintainers.
- [Over-specific hardware] **SSD wording might feel rigid** → Mitigation: phrase as **primary** media volume (SSD as chosen medium); allow “equivalent fast external volume” if needed later.
- [Scope creep in prose] **Trying to specify sync algorithms in docs** → Mitigation: stay at outcome level (“automatic sync across devices”); defer conflict resolution and workers to backlog/future specs.

## Migration Plan

1. Edit `openspec/project.md` per spec requirements.
2. Copy the injectable body into `openspec/config.yaml` under `context: |` (same Markdown, same indentation rules).
3. User reviews both files in one PR or session; no deployment.

## Open Questions

- Whether to add a one-line **non-goals** bullet (“not a multi-tenant public product”)—optional polish after first draft.
