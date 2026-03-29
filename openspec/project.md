Project Constitution: Immich Distributed Media Stack
1. Vision & Strategy
Core Objective: Architect and maintain a high-availability, self-hosted personal media cloud (Immich) to manage cross-device photo synchronization and backup.
Engineering Goal: Transition from a "User" to an "Infrastructure Engineer" by treating this home deployment as a production-grade distributed system. This project serves as a live case study for Observability (Grafana), Resource Orchestration (Docker), and Data Consistency (PostgreSQL/Redis).

2. Technical Stack (The "Source of Truth")
Architecture: Distributed Microservices via Docker Compose.

Backend Framework: NestJS (TypeScript) for optional custom logic/integrations only when native Immich behavior is insufficient.

Frontend: SvelteKit (utilizing Runes for reactive state management) for thin dashboards/controls, not a full replacement for Immich clients.

Primary Data Store: PostgreSQL (Optimized with Split-I/O: Metadata on Internal SSD, Assets on External SSD).

Job Queue/Caching: Redis (Event-driven background processing for ML/Thumbnails).

Communication: MCP (Model Context Protocol) Server for AI-agent system interactions; Auto-generated SDKs for type-safe client/server contracts.

Spec Methodology: Spec Driven Development (SDD) using DTOs as the primary contract between UI, Client, and Server.

Operational Default: Use native Immich capabilities first (ingestion, mobile sync, asset lifecycle, and media management). Build custom app endpoints/workflows only for explicit gaps.

3. System Constraints & Invariants
Performance: DB Metadata must reside on Internal Mac SSD to minimize I/O wait times during bulk ingestion.

Security: All remote traffic must be TLS-encrypted via Reverse Proxy (Caddy/Nginx).

Resilience: 3-2-1 Backup Strategy. Automated off-site synchronization to S3-compatible storage (MinIO/AWS).

Scalability: Mono-repo structure to support modular growth of the MCP server and SvelteKit dashboard.

Implementation Principle: Use native Immich behavior by default.

4. Feature Roadmap & Milestones (1-3 hour sittings)

Execution Rule: Each task is scoped for one focused session. Do not start a new task until the current task has a verifiable output (file, dashboard, script, or passing check).

Phase 1: Core Infrastructure (Foundation)
- [ ] T1 (1h): Baseline host audit.
  Output: `docs/runbook/host-baseline.md` with macOS version, disk map, free space, Docker version, and current bottlenecks.
- [ ] T2 (2h): Create Immich Compose profile in repo.
  Output: `infra/immich/docker-compose.yml` and `.env.example` with documented required variables.
- [ ] T3 (1h): Validate service boot order.
  Output: Runbook section with startup command, expected healthy containers, and first successful boot screenshot/log excerpt.
- [ ] T4 (2h): External SSD asset mount and permissions.
  Output: deterministic mount path, ownership notes, and verified write test from container.
- [ ] T5 (2h): Split I/O layout (metadata internal, assets external).
  Output: documented volume mapping and rationale in `docs/architecture/storage-layout.md`.
- [ ] T6 (2h): Reverse proxy + local TLS setup (Caddy or Nginx).
  Output: proxy config committed + successful HTTPS access from laptop browser.
- [ ] T7 (1h): Mobile ingest smoke test.
  Output: 10-photo upload test report with pass/fail notes in `docs/tests/ingest-smoke.md`.
- [ ] T8 (1h): CLI ingest smoke test.
  Output: CLI command examples and result log snippet.

Phase 2: Reliability and Orchestration (Core Production Behaviors)
- [ ] T9 (2h): Add container health checks for Postgres/Redis/core services.
  Output: healthcheck blocks in compose + `docker compose ps` healthy states captured.
- [ ] T10 (2h): Dependency-aware startup policy.
  Output: startup waits/retries documented and tested via forced delayed dependency.
- [ ] T11 (2h): Resource limits baseline (CPU/RAM) for each service.
  Output: per-service limits in compose + notes on no-crash startup under limits.
- [ ] T12 (2h): Stress ingest test under limits.
  Output: ingest of 100+ photos with timing and failures captured in `docs/tests/load-ingest-001.md`.
- [ ] T13 (2h): Configure S3-compatible target (MinIO first).
  Output: working bucket + credentials path + successful object write/read test.
- [ ] T14 (2h): Wire off-site sync job prototype.
  Output: script in `scripts/backup/sync-assets.sh` with dry-run and real-run modes.
- [ ] T15 (1h): Idempotency pass for sync script.
  Output: repeated run produces no duplicate/corrupt state; evidence logged.

Phase 3: Observability and Disaster Recovery (Grafana Tier)
- [ ] T16 (2h): Stand up Prometheus scrape config for host + containers.
  Output: `infra/observability/prometheus.yml` and successful targets page.
- [ ] T17 (2h): Build Grafana system dashboard v1.
  Output: dashboard JSON with CPU, RAM, disk I/O, network per container.
- [ ] T18 (2h): Build queue/processing dashboard v1.
  Output: Redis queue depth and processing latency panels with sample data.
- [ ] T19 (2h): Automated Postgres dump job.
  Output: `scripts/backup/pg-dump.sh` + retention policy + scheduled execution instructions.
- [ ] T20 (2h): Restore drill (DB).
  Output: restore test from latest dump into clean DB and validation checklist.
- [ ] T21 (2h): Off-site recovery drill (assets).
  Output: recover sample album from remote target and verify checksums.
- [ ] T22 (1h): RPO/RTO definition and sign-off.
  Output: `docs/runbook/dr-objectives.md` with explicit targets (e.g., RPO <= 24h, RTO <= 2h).

Phase 4: Product-facing Sync Layer (Google Photos-like experience)
- [ ] T23 (2h): Define first sync contract in OpenSpec.
  Output: new spec/change for auto-sync trigger semantics and device reconciliation rules.
- [ ] T24 (2h): Add NestJS endpoint for sync job trigger/status.
  Output: DTO + endpoint + OpenAPI update + SDK regeneration proof.
- [ ] T25 (2h): Add SvelteKit sync status panel.
  Output: UI for last sync time, queue status, and recent errors.
- [ ] T26 (2h): Conflict resolution policy v1.
  Output: policy doc + deterministic rules (filename collisions, timestamp drift).
- [ ] T27 (2h): End-to-end sync test (phone -> stack -> laptop view).
  Output: test report showing one complete cross-device flow.

Weekly cadence checkpoint
- [ ] T28 (1h): Weekly review and reprioritization.
  Output: update completed tasks, move blockers, and choose next 3 sittings.

5. Development Standards
Contract First: All API changes must start with a DTO (Data Transfer Object) definition in OpenSpec.

Modularization: Use NestJS Modules to keep controllers and services logically separated.

Documentation: Every technical bottleneck solved (e.g., I/O latency fixes) must be recorded in the openspec/specs/decisions/ folder for resume "Case Study" material.