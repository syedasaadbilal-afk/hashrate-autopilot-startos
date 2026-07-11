# hashrate-autopilot-startos

StartOS 0.4.x packaging for
[hashrate-autopilot](https://github.com/rdouma/hashrate-autopilot) —
Braiins Hashpower marketplace bid autopilot for DATUM → OCEAN miners.

Community packaging; not (yet) maintained upstream. Wraps the upstream
multi-arch container image (`ghcr.io/rdouma/hashrate-autopilot`) with no
modifications.

## Build (recommended: GitHub Actions — no local toolchain)

1. Push this repo to your GitHub account.
2. Actions tab → **Build** workflow → *Run workflow*.
3. Download the `.s9pk` artifact for your server's architecture when it
   completes (x86_64 for most Start9 servers).

## Build (local, Linux/WSL2)

Requires: docker, make, node 22+, and Start9's `start-cli`
(see docs.start9.com packaging guide for toolchain setup).

    make x86     # or: make arm

## Install

StartOS → System → Sideload Service → upload the `.s9pk`.

Note: sideloaded packages receive no automatic updates. To update, bump
the image tag in `startos/manifest/index.ts` and the version in
`startos/versions/current.ts`, rebuild, and sideload again — service
state persists across reinstalls.

## Version pinning

Packaged upstream version: **1.17.0** (`startos/manifest/index.ts`).
