## ADDED Requirements

### Requirement: Document Service Boot Order
The system SHALL provide operational runbook instructions for initiating the Immich service stack, detailing the expected health states of the underlying containers.

#### Scenario: Verify robust stack initialization
- **WHEN** an operator runs the documented docker compose up command
- **THEN** the `postgres` and `redis` containers must reach a `healthy` state before `immich-server` transitions from `created` to `running` or `healthy`.
