## Why

This change formally introduces the Immich Docker Compose profile into the repository as part of the initial self-hosted media stack setup. By pulling `docker-compose.yml` and `.env.example` into version control, we establish a reproducible, spec-driven foundation that adheres to the established baseline constraints (3GB RAM, 2 CPU cores).

## What Changes

- Add `infra/immich/docker-compose.yml` defining the Immich services (server, redis, postgres).
- Add `infra/immich/.env.example` with documented required variables for configuration.
- Incorporate explicit resource constraints to maintain host stability as documented in the host baseline runbook.

## Capabilities

### New Capabilities
- `immich-compose`: The foundational capability that provides a managed, configurable, and constrained deployment of Immich via Docker Compose.

### Modified Capabilities
- None.

## Impact

- Provides the infrastructure definition necessary to deploy and manage Immich within the Snap-Sync ecosystem.
- Changes are purely infrastructural, requiring no updates to existing SvelteKit/NestJS applications.
