## Context

We are establishing a rigorous, spec-driven foundation for a self-hosted Immich media stack. The host machine is a MacBook Air M2 with only 8GB of total RAM. Therefore, the container runtime environment must be extremely lightweight. We will explicitly disable demanding components like Machine Learning services to run the core server and database efficiently on limited resources.

## Goals / Non-Goals

**Goals:**
- Install a lightweight container runtime for macOS. While Docker Desktop is an option, OrbStack is strongly recommended for 8GB Macs due to its drastically lower idle memory usage and faster startup.
- Configure strict resource limits to ensure the host OS remains responsive. Allocate a maximum of 3GB RAM and 2-4 CPU cores strictly for the minimal Immich services.
- Provide a verifiable command (`docker info`) to confirm health.

**Non-Goals:**
- Setting up the Immich `docker-compose.yml` (handled in a later step) or the ML services (which are out of scope due to Mac memory constraints).
- Installing further dependencies like Homebrew or Node.js unless strictly required to install OrbStack.
- Advanced internal networking configurations for OrbStack.

## Decisions

- **Container Runtime**: OrbStack (or Docker Desktop tuned for low memory).
  - *Rationale*: Given the 8GB total RAM constraint on the M2 host, OrbStack offers a much lower memory footprint for running Linux VMs compared to Docker Desktop, preserving host performance.
  - *Alternatives considered*: Docker Desktop (standard but too heavy for an 8GB machine).
- **Resource Limits**: Allocate a maximum of 3GB RAM, 2-4 CPU cores, and cap the virtual disk size to **20 GB**.
  - *Rationale*: Without Machine Learning, the core Immich services (PostgreSQL, Redis, core Server) can operate within a ~3GB envelope. With only 48 GB of free space on the host, a strict 20 GB ceiling on the OrbStack virtual disk is absolute to prevent starving macOS of essential temporary/swap space (which risks system instability). Media assets will remain entirely on the external drive.

## Risks / Trade-offs

- [Risk] Unconstrained container runtimes consume significant background resources even when idle on macOS.
  → *Mitigation*: Emphasize configuring the exact CPU/RAM limits in OrbStack to prevent it from consuming all host resources.
- [Risk] Filesystem bind mount performance on macOS is typically slow.
  → *Mitigation*: Keep DB metadata path on internal SSD (as per project constraints). OrbStack's default Mac network file sharing architecture solves most of the I/O problems native to Docker Desktop.
