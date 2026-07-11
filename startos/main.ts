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
