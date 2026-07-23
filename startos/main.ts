import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Hashrate Autopilot'))

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'autopilot' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/app/data',
        readonly: false,
      }),
      'autopilot-sub',
    ),
    exec: {
      command: ['node', 'packages/daemon/dist/main.js'],
      cwd: '/app',
      env: {
        NODE_ENV: 'production',
        HTTP_PORT: String(uiPort),
        HTTP_HOST: '0.0.0.0',
        DB_PATH: '/app/data/state.db',
        NICEHASH_ENABLED: 'true',
        NICEHASH_ORG_ID: '4abfb648-1409-45e6-ae9b-09997c6f8bef',
        NICEHASH_API_KEY: '4b7f5e08-a4ed-457a-a604-60cf501eca5e',
        NICEHASH_API_SECRET: 'b56a13d7-323f-46bd-bf35-513612904e440642dcb4-9c06-4e93-bde8-59d6f3ddb71c',
        NICEHASH_MARKET: 'EU',
        NICEHASH_ALGORITHM: 'SHA256ASICBOOST',
      },
    },
    ready: {
      display: i18n('Dashboard'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The dashboard is ready'),
          errorMessage: i18n('The dashboard is not ready'),
        }),
    },
    requires: [],
  })
})
