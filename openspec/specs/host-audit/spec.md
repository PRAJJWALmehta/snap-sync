# Capability: host-audit

## Requirements

### Requirement: Host Baseline Documentation
The documentation SHALL contain a runbook document at `docs/runbook/host-baseline.md` that records the initial state of the host machine.

#### Scenario: Document structure
- **WHEN** the `host-baseline.md` file is created
- **THEN** it must contain sections for macOS version, disk map (internal vs external), free space, Docker installation status, and current bottlenecks
