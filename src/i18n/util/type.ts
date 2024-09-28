import type { locales } from './locales'

export type SupportedLocales = typeof locales[number]

export interface PageLangParam {
  params: Promise<{ lang: SupportedLocales }>
}

export type PageProps = PageLangParam & { searchParams?: any }
export type PageExposedToNextJS<Props extends PageProps> = (props: Props) => React.ReactNode

export type LayoutProps = PageLangParam & { children: React.ReactNode }
export type LayoutExposedToNextJS<Props extends LayoutProps> = (props: Props) => React.ReactNode
