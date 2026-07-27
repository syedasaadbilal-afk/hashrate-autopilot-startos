import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'hashrate-autopilot',
  title: 'Hashrate Autopilot',
  license: 'MIT',
  packageRepo: 'https://github.com/rdouma/hashrate-autopilot',
  upstreamRepo: 'https://github.com/rdouma/hashrate-autopilot',
  marketingUrl: 'https://github.com/rdouma/hashrate-autopilot',
  donationUrl: 'https://github.com/rdouma/hashrate-autopilot',
  description: { short, long },
  volumes: ['main'],
  images: {
    autopilot: {
      source: { dockerTag: 'ghcr.io/syedasaadbilal-afk/hashrate-autopilot:1.18.13' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
