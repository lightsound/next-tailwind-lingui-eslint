import { ClientGreeting } from '~/src/component/ClientGreeting'
import { withLinguiPage } from '~/src/i18n/util/withLinguiPage'

const Page = withLinguiPage(() => {
  return (
    <ClientGreeting />
  )
})

export default Page
