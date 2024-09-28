'use client'

import type { ComponentProps } from 'react'
import { useLingui } from '@lingui/react'
import Link from 'next/link'

export function I18nLink(props: ComponentProps<typeof Link>) {
  let { href } = props
  const lingui = useLingui()

  if (lingui.i18n.locale === 'en') {
    href = `/en${href}`
  }

  return (
    <Link {...props} href={href} />
  )
}
