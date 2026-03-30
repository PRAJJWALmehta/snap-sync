## ADDED Requirements

### Requirement: OrbStack Installation
The host machine SHALL have OrbStack installed and running natively.

#### Scenario: Verifying OrbStack installation
- **WHEN** running `docker info`
- **THEN** it should output the system information indicating OrbStack is active and healthy

### Requirement: OrbStack Resource Limits
OrbStack SHALL be configured with adequate resource limits for the Immich stack.

#### Scenario: Verifying minimum resource limits
- **WHEN** running `docker info`
- **THEN** the Total Memory should be constrained to a footprint suitable for an 8GB host (e.g., maximum 3GB) and CPUs to at least 2 cores
