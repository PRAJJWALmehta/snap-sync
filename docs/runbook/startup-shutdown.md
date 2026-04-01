# Immich Stack — Startup & Shutdown Runbook

This document covers the operational procedures for starting and stopping the Immich Docker Compose stack. It serves as the primary reference for daily operations and incident recovery.

> **Pre-requisites**: OrbStack must be running. A valid `infra/immich/.env` file must exist with real values populated from `infra/immich/.env.example`.

---

## 1. Starting the Stack

### 1.1 Command

Run the following from the repository root:

```bash
docker compose -f infra/immich/docker-compose.yml up -d
```

**Flag explanations:**

| Flag | Purpose |
|---|---|
| `-f infra/immich/docker-compose.yml` | Explicitly points to the compose file (not in root) |
| `up` | Creates and starts all defined services |
| `-d` | Detached mode — returns your terminal immediately, services run in the background |

Docker will:
1. Pull any missing images from the registry.
2. Create the `immich_default` private Docker network.
3. Start `postgres` and `redis` first (they have no upstream dependencies).
4. Hold `immich-server` in a waiting state until both datastores pass their health checks.
5. Launch `immich-server` once all dependencies are healthy.

---

## 2. Verifying a Healthy Boot

### 2.1 Expected Container Health States

After running `docker compose -f infra/immich/docker-compose.yml ps`, all three services should show a `healthy` status. Below is the expected output format:

```
NAME                IMAGE                                     COMMAND                   SERVICE           CREATED         STATUS                    PORTS
immich_postgres     tensorchord/pgvecto-rs:pg14-v0.2.0        "docker-entrypoint.s…"   postgres          X minutes ago   Up X minutes (healthy)    5432/tcp
immich_redis        docker.io/redis:6.2-alpine                "docker-entrypoint.s…"   redis             X minutes ago   Up X minutes (healthy)    6379/tcp
immich_server       ghcr.io/immich-app/immich-server:...      "tini -- /bin/sh sta…"   immich-server     X minutes ago   Up X minutes (healthy)    0.0.0.0:2283->2283/tcp
```

> **Key indicator**: All three services must show `(healthy)` — not `starting` or `unhealthy`.

### 2.2 First Boot Evidence — `docker compose ps` (captured 2026-04-01)

```
NAME                 IMAGE                                       COMMAND                  SERVICE         CREATED              STATUS                        PORTS
immich_server        ghcr.io/immich-app/immich-server:v1.132.3   "tini -- /bin/bash s…"   immich-server   About a minute ago   Up 48 seconds (healthy)       0.0.0.0:2283->2283/tcp, [::]:2283->2283/tcp
snap_sync_postgres   tensorchord/pgvecto-rs:pg14-v0.2.0          "docker-entrypoint.s…"   postgres        About a minute ago   Up About a minute (healthy)   5432/tcp
snap_sync_redis      docker.io/redis:6.2-alpine                  "docker-entrypoint.s…"   redis           About a minute ago   Up About a minute (healthy)   6379/tcp
```

✅ All three services reached `(healthy)` on first boot. `immich-server` came up ~12 seconds after `postgres` and `redis` confirmed healthy — confirming `depends_on: condition: service_healthy` is working correctly.

### 2.3 First Boot Evidence — Server Log (captured 2026-04-01)

Key lines extracted from `docker compose logs immich-server`:

```
immich_server  | Initializing Immich v1.132.3
immich_server  | Detected CPU Cores: 1
immich_server  | Starting api worker
immich_server  | Starting microservices worker
immich_server  | [Microservices:DatabaseRepository] Running migrations, this may take a while
immich_server  | [Microservices:MetadataService] Initialized local reverse geocoder
immich_server  | [Microservices:ServerService] Feature Flags: {
immich_server  |   "smartSearch": false,
immich_server  |   "facialRecognition": false,
immich_server  |   "duplicateDetection": false,
immich_server  |   "map": true,
immich_server  |   "reverseGeocoding": true,
immich_server  |   "passwordLogin": true,
immich_server  | }
immich_server  | [Microservices:StorageService] Successfully verified system mount folder checks
immich_server  | [Microservices:Bootstrap] Immich Microservices is running [v1.132.3] [production]
immich_server  | [Api:NestApplication] Nest application successfully started
immich_server  | [Api:Bootstrap] Immich Server is listening on http://[::1]:2283 [v1.132.3] [production]
```

**Notable observations:**
- DB migrations ran cleanly on first boot (no errors).
- ML feature flags (`smartSearch`, `facialRecognition`, `duplicateDetection`) all report `false` — confirming our T2 decision to disable ML is taking effect.
- Storage mount checks passed (`thumbs`, `upload`, `backups`, `library`, `profile`, `encoded-video` all `true`).
- API is live at `http://[::1]:2283`.


---

## 3. Stopping the Stack

### 3.1 Graceful Shutdown (Preserves Data)

Use this for normal operational shutdowns. Containers are stopped but volumes (data) are preserved.

```bash
docker compose -f infra/immich/docker-compose.yml down
```

### 3.2 Full Teardown (Destroys Data — Use with Caution!)

Stops all containers **and deletes all associated volumes**. This is only appropriate for test environments or a full reset.

```bash
docker compose -f infra/immich/docker-compose.yml down -v
```

> ⚠️ **Warning**: The `-v` flag will permanently delete your PostgreSQL database data. Never run this on a production instance with real photo metadata unless you have a verified backup.

---

## 4. Troubleshooting

| Symptom | Diagnosis | Resolution |
|---|---|---|
| `immich_server` stuck in `starting` | Postgres or Redis not yet healthy | Wait up to 5 minutes on first boot for DB initialization |
| `immich_server` exits immediately | Bad `DB_URL` or missing env var | Check `infra/immich/.env` matches the postgres credentials |
| `postgres` stuck in `starting` | `DB_DATA_LOCATION` path doesn't exist | Create the host directory and ensure it has correct ownership |
| Port 2283 already in use | Another process on the same port | `lsof -i :2283` to identify and stop the conflicting process |
