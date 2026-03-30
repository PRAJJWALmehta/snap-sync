## Context

We need a clear picture of the baseline macOS host environment before installing the Immich stack. This ensures we understand the available disk space (especially distinguishing between the internal SSD for the DB and the external SSD for assets), the Docker environment, and any immediate performance bottlenecks.

## Goals / Non-Goals

**Goals:**
- Document macOS version.
- Map out internal and external disk usage and free space.
- Check for Docker installation status (record version/resources if installed, or note as missing).
- Identify current and potential bottlenecks.

**Non-Goals:**
- Installing, configuring, or modifying Immich or Docker.
- Fixing any identified bottlenecks (this is purely an audit/snapshot).

## Decisions

- **Format**: The output will be a single markdown file `docs/runbook/host-baseline.md`. This provides a simple, version-controlled format that can be easily referenced.

## Risks / Trade-offs

- [Risk] Information becomes outdated quickly as the host environment changes. → Mitigation: Treat this as a point-in-time baseline snapshot prior to the initial Immich deployment, not a live dashboard. Live monitoring will be addressed as a separate, later capability.
