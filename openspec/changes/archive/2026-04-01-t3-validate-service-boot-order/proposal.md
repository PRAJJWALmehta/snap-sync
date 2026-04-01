## Why

This change validates the new Immich Docker Compose setup created in T2, ensuring that all services start correctly and in the prescribed sequence. A verified boot order prevents race conditions and crashes, proving that our underlying container orchestration, including postgres and redis health checks, works exactly as designed on the MacBook Air host.

## What Changes

- Add a runbook section covering the exact Docker Compose startup command.
- Document expected container states and logs for a successful first boot.
- Perform a live first boot using the profile that tests postgres database initialization.

## Capabilities

### New Capabilities
- `service-boot`: The capability that ensures reliable container startup ordering and defines health verifications.

### Modified Capabilities
- None.

## Impact

- Fulfills the `T3` project milestone requirement.
- Documents the baseline startup sequence for future operations and troubleshooting.
- Does not require any application code modifications outside of documentation and validation steps.
