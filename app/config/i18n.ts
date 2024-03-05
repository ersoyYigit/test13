import type { InitOptions } from 'i18next'

export const i18nConfig = {
  // Supported languages.
  supportedLngs: ['en', 'tr'],
  // Fallback language.
  fallbackLng: 'tr',
  // Default namespace.
  defaultNS: 'common',
  // Disable suspense mode. (Recommended).
  react: { useSuspense: false },
} satisfies InitOptions