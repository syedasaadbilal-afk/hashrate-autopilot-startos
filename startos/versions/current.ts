import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.18.14:1',
  releaseNotes: {
    en_US: 'Dual-provider NiceHash: LIVE trading + in-app keys and config.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
