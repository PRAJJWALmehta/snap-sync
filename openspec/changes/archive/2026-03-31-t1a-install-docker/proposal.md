## Why

The self-hosted Immich media stack relies on Docker for containerization and orchestration. Since the host is a lightweight MacBook Air M2 with only 8GB of total RAM, we need a highly optimized, low-resource Docker container runtime, explicitly disabling heavy Immich features like Machine Learning.
## What Changes

- Install OrbStack as the lightweight container runtime.
- Configure resource limits (CPU/RAM) specifically tailored for running the Immich stack.
- Verify OrbStack is healthy using `docker info`.

## Capabilities

### New Capabilities
- `host-docker-runtime`: OrbStack installation, resource limits configuration (CPU/RAM), and health verification on the host machine.

### Modified Capabilities
- `host-audit`: Add update requirement for OrbStack installation status.

## Impact

The host machine will have a lightweight OrbStack daemon running efficiently to host the core Immich application stack, bounded strictly to ensure the host macOS remains responsive.
