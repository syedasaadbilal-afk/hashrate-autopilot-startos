import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.18.0:3',
  releaseNotes: {
    en_US: 'Initial StartOS packaging of upstream hashrate-autopilot 1.18.0.3',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
