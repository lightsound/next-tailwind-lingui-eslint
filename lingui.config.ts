import type { LinguiConfig } from '@lingui/conf'
import { formatter } from '@lingui/format-json'

export default {
  locales: ['ja', 'en'],
  fallbackLocales: { default: 'ja' },
  catalogs: [
    {
      path: '<rootDir>/src/i18n/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: formatter({ style: 'lingui' }),
} as const satisfies LinguiConfig
