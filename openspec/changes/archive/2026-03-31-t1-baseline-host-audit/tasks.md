## 1. Documentation

- [x] 1.1 Create `docs/runbook/host-baseline.md` template.
- [x] 1.2 Gather and document macOS version, disk usage (internal DB SSD vs external asset SSD), and available free space.
- [x] 1.3 Check Docker installation status (document as not installed) and document any identified system bottlenecks.

## Definition of Done (DoD)

- **Deliverable:** `docs/runbook/host-baseline.md` file created and populated with the host machine's audit details.
- **Verification:** Run `cat docs/runbook/host-baseline.md` or view it in markdown preview to confirm formatting and completeness of required data.
- **Rollback Note:** If needed, delete the file: `rm docs/runbook/host-baseline.md`. There are no code or stack dependencies to revert.
