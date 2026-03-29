## ADDED Requirements

### Requirement: Product vision and audience

The documentation SHALL state that Snap Sync is a **personal** project whose product north star is a **Google Photos–style** experience: centralized photo library, albums, uploads from devices, and discovery over time, **self-hosted** (not dependent on Google Photos as the system of record).

#### Scenario: Reader identifies personal Google Photos clone goal

- **WHEN** a reader opens `openspec/project.md`
- **THEN** the document explicitly describes a personal Google Photos–style clone as the long-term aim within the first major section after the title

### Requirement: SSD as primary media storage

The documentation SHALL state that **durable photo storage** is intended to live on an **SSD** (or equivalent user-controlled fast external volume), consistent with the self-hosted deployment story—not “cloud-only” as the default assumption.

#### Scenario: SSD storage is visible without reading the roadmap checklist

- **WHEN** a reader scans the vision and scope sections (and any dedicated storage subsection)
- **THEN** the SSD (or explicitly named equivalent) role for photo assets is stated in prose, not only implied by Immich setup steps

### Requirement: Cross-device automatic sync

The documentation SHALL state the intent for **automatic synchronization** of photos across devices, explicitly including **laptop** and **phone**, as part of the product goal.

#### Scenario: Laptop and phone both mentioned for sync

- **WHEN** a reader reads the vision, scope, or device-oriented subsection
- **THEN** both laptop-class and phone-class clients are named in relation to sync or access (e.g. web/laptop and mobile), without requiring the reader to infer from a generic “devices” mention alone

### Requirement: Immich roles vs Snap Sync repo

The documentation SHALL distinguish **Immich** responsibilities (e.g. media pipeline, official mobile apps, ML, asset storage on configured volumes) from **this repository’s** responsibilities (NestJS API, SvelteKit UI, OpenAPI-driven SDK, future automation/orchestration), and SHALL NOT claim this repo replaces Immich.

#### Scenario: Clear backend vs app-layer split

- **WHEN** an implementer reads the architecture or concepts portion of the docs
- **THEN** they can tell which behaviors are expected from Immich versus from Snap Sync code in this monorepo

### Requirement: OpenSpec configuration parity

The narrative content in `openspec/config.yaml` under the `context` key MUST match the substantive sections of `openspec/project.md` regarding vision, SSD storage intent, cross-device sync, and Immich vs repo roles. The `context` field MUST NOT omit those elements if they appear in `project.md`.

#### Scenario: Agent receives full vision via OpenSpec

- **WHEN** OpenSpec loads `openspec/config.yaml` for artifact instructions
- **THEN** the injected `context` string includes the same factual statements about Google Photos clone goals, SSD storage, laptop/phone sync, and Immich split as `openspec/project.md` (excluding optional meta-only lines such as reminders to keep files in sync, if those are only in `project.md`)
