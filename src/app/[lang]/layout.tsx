import { t } from '@lingui/macro'

import React from 'react'

import { allMessages, getI18nInstance } from '~/src/i18n/util/appRouterI18n'
import { LinguiClientProvider } from '~/src/i18n/util/LinguiClientProvider'
import { locales } from '~/src/i18n/util/locales'
import type { PageLangParam } from '~/src/i18n/util/type'
import { withLinguiLayout } from '~/src/i18n/util/withLinguiLayout'
import './globals.css'

export async function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export async function generateMetadata({ params }: PageLangParam) {
  const { lang } = await params
  const i18n = getI18nInstance(lang)
  return {
    title: t(i18n)`ホーム`,
  }
}

const RootLayout = withLinguiLayout(async ({ children, params }) => {
  const { lang } = await params
  return (
    <html lang={lang}>
      <body>
        <LinguiClientProvider
          initialLocale={lang}
          initialMessages={allMessages[lang]}
        >
          {children}
        </LinguiClientProvider>
      </body>
    </html>
  )
})

export default RootLayout
