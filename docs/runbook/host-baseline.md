# Host Baseline Audit

**Date:** 2026-03-31
**Document:** `docs/runbook/host-baseline.md`

## 1. System Information
- **OS:** macOS
- **Version:** 26.3.1
- **Build:** 25D2128
- **Total RAM:** 8 GB

## 2. Disk Usage Map
### Internal Storage
The internal DB path (`/System/Volumes/Data`) will be used for metadata and Postgres I/O for performance.
- **Total Capacity:** 228 GiB
- **Used:** 156 GiB (77%)
- **Available:** ~48 GiB

### External Storage (Assets)
- **Status:** **Not Mounted / Missing**
- **Note:** An external SSD must be mounted for storing original photos/videos before we map the Immich storage directory.

## 3. Container Runtime Environment (OrbStack)
- **Installation Status:** ✅ Installed (via `brew install --cask orbstack`, version 28.5.2)
- **Start at Login:** Disabled
- **Configured Resources:**
  - **CPUs:** 2 cores
  - **Total Memory:** 3 GB (2.9 GiB reported by `docker info`)
  - **Virtual Disk:** Dynamic sparse image — monitor with `docker system df` and prune regularly
- **Verification:** `docker info` output confirmed healthy
  ```
  Server Version: 28.5.2
  Kernel Version: 6.17.8-orbstack-00308-g8f9c941121b1
  Operating System: OrbStack
  CPUs: 2
  Total Memory: 2.902GiB
  ```

## 4. Current & Potential Bottlenecks
- **Storage Capacity:** The internal SSD only has ~48 GiB free. This is sufficient for the PostgreSQL metadata database and Redis cache, but reinforces the strict requirement that media assets *must* reside on an external drive.
- **External Drive Missing:** Since the external drive is not yet mounted, the split I/O storage strategy cannot be fully implemented until it is attached and accessible.
- **Host Memory Constraints:** The host system only has 8GB of total RAM. Running a full Immich stack with Machine Learning features enabled will overwhelm the system. The container runtime must be lightweight (e.g., OrbStack) and explicitly capped at a maximum of 3-4GB of RAM and 2-4 CPU cores. ML services must be disabled.
