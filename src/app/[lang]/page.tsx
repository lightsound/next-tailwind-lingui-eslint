import { Trans } from '@lingui/macro'
import { withLinguiPage } from '~/src/i18n/util/withLinguiPage'

const Page = withLinguiPage(() => {
  return (
    <main>
      <div className="bg-red-200 p-4 text-4xl font-bold text-red-900"><Trans>こんにちは</Trans></div>
    </main>
  )
})

export default Page
