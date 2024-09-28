import type { PageExposedToNextJS, PageLangParam, PageProps } from './type'
import { setI18n } from '@lingui/react/server'
import { getI18nInstance } from './appRouterI18n'

export function withLinguiPage<Props extends PageProps>(AppRouterPage: React.ComponentType<PageLangParam & Props>): PageExposedToNextJS<Props> {
  return async function WithLingui(props) {
    const { params } = props
    const { lang } = await params
    const i18n = getI18nInstance(lang)
    setI18n(i18n)

    return <AppRouterPage {...props} lang={lang} />
  }
}
