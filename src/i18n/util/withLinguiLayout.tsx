import type { LayoutExposedToNextJS, LayoutProps, PageLangParam } from './type'
import { setI18n } from '@lingui/react/server'
import { getI18nInstance } from './appRouterI18n'

export function withLinguiLayout<Props extends LayoutProps>(AppRouterPage: React.ComponentType<PageLangParam & Props>): LayoutExposedToNextJS<Props> {
  return async function WithLingui(props) {
    const { params } = props
    const { lang } = await params
    const i18n = getI18nInstance(lang)
    setI18n(i18n)

    return <AppRouterPage {...props} lang={lang} />
  }
}
