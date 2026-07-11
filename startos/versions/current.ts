import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.17.0:0',
  releaseNotes: {
    en_US: 'Initial StartOS packaging of upstream hashrate-autopilot 1.17.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
