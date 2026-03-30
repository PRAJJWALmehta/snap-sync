# Host Baseline Audit

**Date:** 2026-03-31
**Document:** `docs/runbook/host-baseline.md`

## 1. System Information
- **OS:** macOS
- **Version:** 26.3.1
- **Build:** 25D2128

## 2. Disk Usage Map
### Internal Storage
The internal DB path (`/System/Volumes/Data`) will be used for metadata and Postgres I/O for performance.
- **Total Capacity:** 228 GiB
- **Used:** 156 GiB (77%)
- **Available:** ~48 GiB

### External Storage (Assets)
- **Status:** **Not Mounted / Missing**
- **Note:** An external SSD must be mounted for storing original photos/videos before we map the Immich storage directory.

## 3. Docker Environment
- **Installation Status:** **Not Installed**
- **Resources Allocated:** N/A (Docker setup pending as per task T1a).

## 4. Current & Potential Bottlenecks
- **Storage Capacity:** The internal SSD only has ~48 GiB free. This is sufficient for the PostgreSQL metadata database and Redis cache, but reinforces the strict requirement that media assets *must* reside on an external drive.
- **External Drive Missing:** Since the external drive is not yet mounted, the split I/O storage strategy cannot be fully implemented until it is attached and accessible.
- **Prerequisites Missing:** Docker is not yet installed on this node.
