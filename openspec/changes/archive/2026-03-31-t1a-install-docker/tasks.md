## 1. OrbStack Installation

- [x] 1.1 Verify if a container runtime is already installed natively on the macOS host
- [x] 1.2 Download and install a lightweight container runtime like OrbStack
- [x] 1.3 Start the OrbStack daemon and configure it to launch on boot

## 2. Resource Configuration

- [x] 2.1 Access container runtime settings and cap memory allocation to a maximum of 3GB (or 4GB if pushed heavily) to protect the 8GB host
- [x] 2.2 Allocate 2-4 CPU cores in the runtime settings
- [x] 2.3 Enforce a strict Virtual Disk size limit of **20 GB** to preserve the severely constrained host SSD
- [x] 2.4 Apply changes and restart the OrbStack daemon

## 3. Verification and Documentation

- [x] 3.1 Run `docker info` to confirm the daemon is active and verify the configured CPU and Total Memory limits
- [x] 3.2 Create or update `docs/runbook/host-baseline.md` to record the OrbStack installation status and its configured resources (CPU/RAM)
