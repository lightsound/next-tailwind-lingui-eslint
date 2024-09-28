import { Plural, t, Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'

export function Greeting() {
  const { i18n } = useLingui()
  const name = 'hoge'
  const count = 1

  return (
    <div className="*:p-4 *:text-4xl *:font-bold">
      <div className="bg-yellow-200 text-yellow-900">
        <Trans>
          おはよう
        </Trans>
      </div>

      <div className="bg-red-200 text-red-900">
        <Trans>
          こんにちは、
          {' '}
          <a href="/profile">{name}</a>
          {' '}
          さん
        </Trans>
      </div>

      <div className="bg-blue-200 text-blue-900">
        {t(i18n)`こんばんは`}
      </div>

      <div className="bg-green-200 text-green-900">
        <Plural
          value={count}
          _0="りんごが1つもありません"
          _1="りんごが # 個あります"
          other="りんごが # 個あります"
        />
      </div>
    </div>
  )
}
