## Why

We need a clear understanding of the baseline host configuration before rolling out the Immich stack. This audit will document the environment, ensuring we meet prerequisites and identify any potential resource constraints or bottlenecks early on.

## What Changes

- Creates a new runbook document detailing the host's current state.
- Documents macOS version, disk map, free space, Docker installation status, and current bottlenecks.
- Establishes a baseline for future infrastructure monitoring and capacity planning.

## Capabilities

### New Capabilities
- `host-audit`: Documentation capability tracking the baseline host metrics and environment details for the Immich deployment.

### Modified Capabilities
- None

## Impact

- **Documentation**: Adds `docs/runbook/host-baseline.md`.
- **Infrastructure**: No direct code or system changes; purely informational and preparatory.
