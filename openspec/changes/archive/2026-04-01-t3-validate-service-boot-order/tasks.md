## 1. Environment Preparation

- [x] 1.1 Copy `infra/immich/.env.example` to `infra/immich/.env` and set a strong database password inside the new `.env` file for testing.
- [x] 1.2 Validate the syntax by running `docker compose -f infra/immich/docker-compose.yml config --quiet`.

## 2. Boot Test

- [x] 2.1 Start the services in detached mode: `docker compose -f infra/immich/docker-compose.yml up -d`.
- [x] 2.2 Monitor the health states by repeatedly running `docker compose -f infra/immich/docker-compose.yml ps`. Observe that `postgres` and `redis` become `healthy` before `immich-server` completes its startup.
- [x] 2.3 Check the logs using `docker compose -f infra/immich/docker-compose.yml logs immich-server` to confirm successful application bootstrap.

## 3. Documentation

- [x] 3.1 Create `docs/runbook/startup-shutdown.md`.
- [x] 3.2 Add a section detailing the startup command for the Immich stack.
- [x] 3.3 Add a section showing the expected healthy output format from `docker compose ps`.
- [x] 3.4 Append the snippet of the successful server start log to `docs/runbook/startup-shutdown.md` as verification evidence.

## 4. Teardown

- [x] 4.1 To leave the system clean, bring down the stack and its volumes: `docker compose -f infra/immich/docker-compose.yml down -v`.
