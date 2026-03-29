## 1. Outline and draft `project.md`

- [ ] 1.1 Re-read `specs/project-context/spec.md` and list mandatory statements (Google Photos clone, SSD, laptop + phone sync, Immich vs repo).
- [ ] 1.2 Restructure `openspec/project.md`: lead with personal product goal; add **Physical storage & devices** (SSD + sync across laptop and phone; phone path via Immich mobile unless stated otherwise).
- [ ] 1.3 Tighten redundant paragraphs; keep roadmap/backlog scannable per `design.md`.
- [ ] 1.4 Preserve **OpenSpec note** at end of `project.md` (meta-only; not required in `config.yaml`).

## 2. Sync `config.yaml` context

- [ ] 2.1 Update `openspec/config.yaml` `context: |` so every normative statement in §1 of the spec (vision, SSD, cross-device sync, Immich split) appears in the injected context.
- [ ] 2.2 Diff `project.md` against `context` (minus the OpenSpec meta footer); reconcile any gaps.

## 3. Review

- [ ] 3.1 Self-review: one full read of `project.md` as if onboarding a future you—confirm the Google Photos + SSD + phone/laptop sync story is obvious in under two minutes.
- [ ] 3.2 Mark this change ready to archive after implementation (optional): run OpenSpec archive when satisfied.
