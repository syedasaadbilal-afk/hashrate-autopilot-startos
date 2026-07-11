export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Hashrate Autopilot': 0,
  Dashboard: 1,
  'The dashboard is ready': 2,
  'The dashboard is not ready': 3,

  // interfaces.ts
  'The Hashrate Autopilot web dashboard': 4,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
