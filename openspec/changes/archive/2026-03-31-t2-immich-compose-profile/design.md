## Context

The Snap-Sync project requires a local instance of Immich running as its primary media management backend. Currently, there is a baseline runbook defining resource constraints (3GB RAM, 2 CPU cores) for the 8GB RAM MacBook Air M2 host. We need to formalize the Immich Docker Compose setup by committing the required configuration files to the repository. This enables version control, consistent deployments, and clear documentation of required environment variables.

## Goals / Non-Goals

**Goals:**
- Provide a standard `docker-compose.yml` for deploying the Immich stack (server, Redis, and PostgreSQL).
- Define resource limits within the Compose file to adhere to host constraints.
- Provide a clear `.env.example` mapping out required configuration properties.

**Non-Goals:**
- Enabling Machine Learning (ML) features. These use significant RAM and are explicitly disabled and deferred to a future increment due to strict host constraints.
- Actually deploying the stack or writing deployment scripts (this is just the configuration).
- Configuring advanced features like reverse proxies or complex backup strategies at this stage (to be handled incrementally).
- Replacing the primary storage engine.

## Decisions

- **Location:** The compose file and `.env` template will be placed in `infra/immich/` to separate infrastructure concerns from application code (`web`/`server`).
- **Resource Limits:** Docker Compose `deploy.resources` limits will be used to enforce the 3GB RAM and 2 CPUs constraints, ensuring the host OS (macOS) remains responsive.
- **Hardware Acceleration:** Hardware acceleration (if applicable for Mac) will be considered but kept minimal or optional initially to prioritize stability and simplicity.

## Risks / Trade-offs

- [Risk] Server background jobs might consume excessive memory, outgrowing the limits. 
  → Mitigation: Explicitly bind the container memory limits strictly within the 3GB limit, leaving reliable room for the host OS.
- [Risk] Hardcoding paths for persistent storage might differ across environments.
  → Mitigation: Use environment variables in `.env.example` for all relative or absolute host paths (e.g., `UPLOAD_LOCATION`).
