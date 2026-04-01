## Context

In Task 2, we established the basic Docker Compose infrastructure (`docker-compose.yml`) for running Immich in a resource-constrained environment (8GB RAM host, 3GB container allocation). Now, we need to guarantee that when the orchestrator (Docker Compose) brings up the stack, it executes in a deterministic, reliable sequence without race conditions disrupting initialization. The key concerns are that the database (`postgres`) must hit a healthy state and initialize its data checksums, and the cache queue (`redis`) must be responsive, before the core API logic (`immich-server`) is allowed to bootstrap.

## Goals / Non-Goals

**Goals:**
- Provide a clear, reproducible runbook section detailing the exact command to spin up the service in detached mode (`docker compose up -d`).
- Document the visual and technical indicators of a successful boot (Output of `docker compose ps` showing healthy containers).
- Provide evidence of the first successful boot (log excerpt showing database schema application or server listening).

**Non-Goals:**
- Implementing advanced orchestration features outside of basic `depends_on: condition: service_healthy` semantics, which the current `docker-compose.yml` provides.
- Benchmarking the boot speed, we only care about success at this stage.
- Solving persistent storage issues, simply running the standard startup sequence.

## Decisions

- **Runbook Additions:** The runbook updates will reside in `docs/runbook/startup-shutdown.md` (or similar) to begin compiling operational procedures.
- **Boot Strategy:** The startup command `docker compose -f infra/immich/docker-compose.yml up -d` relies on the previously configured health checks in `docker-compose.yml` to sequence the boot.

## Risks / Trade-offs

- [Risk] First-time Postgres initialization might take longer than standard health check intervals, causing dependent services to timeout and fail to launch. 
  → Mitigation: The healthchecks configured in T2 defined generous `start_period` settings (e.g., 5m0s for Postgres) to allow sufficient time for first-boot table and schema creation without failing the overarching compose startup.
