# Hashrate Autopilot

Autopilot for your Braiins Hashpower marketplace rental order, pointed at
your DATUM → OCEAN mining setup.

## Safety model

The daemon starts in **DRY-RUN** mode: full control loop, real market data,
zero mutations. It will not create, reprice, or cancel any bid until you
switch DRY-RUN → LIVE on the dashboard. Watch the Next Action panel for a
day before going live.

## First run

1. Open the Dashboard interface.
2. Complete the wizard:
   - **Braiins API token** (owner scope) — create at market.braiins.com →
     API tokens. Owner scope is required; the autopilot manages the order
     itself.
   - **Dashboard password** — store it in your password manager.
   - **Target hashrate** and **minimum floor** (alerting threshold).
   - **Pool URL** — the stratum endpoint your rented hashrate points at
     (your DATUM gateway's public endpoint).
   - **BTC payout address** — your OCEAN payout address. The worker
     identity is `<address>.<label>`; the period is mandatory or TIDES
     will not credit shares.
   - **Payout tracking backend** — leave "none"; P&L reads OCEAN's own
     ledger, including Lightning payouts.
3. On the Config page set your ceilings — `max_bid_sat_per_eh_day` is the
   number that matters; derive it from your sats-denominated breakeven.
   Above the ceiling the autopilot deliberately goes idle rather than
   overpaying.
4. Set alert timers (e.g. `zero_hashrate_loud_alert_after_minutes: 10`)
   and optionally Telegram notifications.
5. Fund the Braiins account, then flip DRY-RUN → LIVE.

## State & backups

All state (config, encrypted secrets, tick history, owned-bid ledger)
lives in the service volume and is included in StartOS backups.
