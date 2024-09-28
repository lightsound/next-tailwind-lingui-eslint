import { t } from '@lingui/macro'
import React from 'react'
import { Nav } from '~/src/component/Nav'
import {
  allMessages,
  getI18nInstance,
  LinguiClientProvider,
  locales,
  type PageLangParam,
  withLinguiLayout,
} from '~/src/i18n/util'
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
          <Nav>
            {children}
          </Nav>
        </LinguiClientProvider>
      </body>
    </html>
  )
})

export default RootLayout
