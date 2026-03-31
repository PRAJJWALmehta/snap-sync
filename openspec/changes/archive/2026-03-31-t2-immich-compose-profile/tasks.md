## 1. Directory Setup

- [x] 1.1 Create the `infra/immich` directory to hold configuration files.

## 2. Environment Configuration

- [x] 2.1 Create `infra/immich/.env.example` with documented required variables for paths (e.g., `UPLOAD_LOCATION`, `DB_DATA_LOCATION`), DB credentials, and Immich version.

## 3. Docker Compose Definition

- [x] 3.1 Create `infra/immich/docker-compose.yml` defining the core services: `immich-server`, `postgres`, and `redis`.
- [x] 3.2 Add explicit resource constraints under `deploy.resources` for each service to ensure combined limits do not exceed 3GB RAM and 2 cores.
- [x] 3.3 Ensure the compose file correctly references the environment variables defined in `.env.example`.

## 4. Verification

- [x] 4.1 Run `docker compose -f infra/immich/docker-compose.yml config` to validate the YAML syntax and variable interpolation.
