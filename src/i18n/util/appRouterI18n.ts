import type { I18n, Messages } from '@lingui/core'
import type { SupportedLocales } from './type'
import { setupI18n } from '@lingui/core'
import { defaultLocale, locales } from './locales'
import 'server-only'

async function loadCatalog(locale: SupportedLocales): Promise<{ [k: string]: Messages }> {
  const { messages } = await import(`../locales/${locale}/messages`)
  return { [locale]: messages }
}

// eslint-disable-next-line antfu/no-top-level-await
const catalogs = await Promise.all(locales.map(loadCatalog))

export const allMessages = catalogs.reduce((acc, oneCatalog) => {
  return { ...acc, ...oneCatalog }
}, {})

const allI18nInstances: { [K in SupportedLocales]: I18n } = locales.reduce(
  (acc, locale) => {
    const messages = allMessages[locale] ?? {}
    const i18n = setupI18n({ locale, messages: { [locale]: messages } })
    return { ...acc, [locale]: i18n }
  },
  { ja: setupI18n(), en: setupI18n() },
)

export function getI18nInstance(locale: SupportedLocales): I18n {
  if (!allI18nInstances[locale]) {
    console.warn(`No i18n instance found for locale "${locale}"`)
  }
  return allI18nInstances[locale] || allI18nInstances[defaultLocale]
}
