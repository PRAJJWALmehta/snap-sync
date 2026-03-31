## ADDED Requirements

### Requirement: Manage Immich Containers
The system SHALL provide a Docker Compose configuration that orchestrates all necessary Immich services including Server, PostgreSQL, and Redis.

#### Scenario: Verify service definition presence
- **WHEN** reading `infra/immich/docker-compose.yml`
- **THEN** it defines `immich-server`, `postgres`, and `redis` services

### Requirement: Enforce Resource Constraints
The system MUST enforce hardware resource constraints strictly through Docker compose deploy specifications to prevent host OS starvation.

#### Scenario: Applying constraints limits memory to 3GB
- **WHEN** analyzing the `docker-compose.yml` file
- **THEN** the sum of all container memory limits MUST NOT exceed 3GB and CPU limits MUST NOT exceed 2 cores combined.

### Requirement: Configurable Environment Variables
The system SHALL provide a documented `.env.example` file that lists all necessary environment variables, including paths to external storage volumes.

#### Scenario: Read example environment variables
- **WHEN** reading `infra/immich/.env.example`
- **THEN** all required paths, secrets, and connection strings are documented and appropriately scaffolded.
