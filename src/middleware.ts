/*
 * https://nextjs.org/docs/app/building-your-application/routing/internationalization
 * */
import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './i18n/util/locales'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )
  if (pathnameHasLocale) {
    return
  }

  const locale = getRequestLocale(request.headers)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

function getRequestLocale(requestHeaders: Headers): string {
  const langHeader = requestHeaders.get('accept-language') || undefined
  const languages = new Negotiator({ headers: { 'accept-language': langHeader } }).languages(locales.slice())
  const activeLocale = languages[0] || locales[0] || defaultLocale
  return activeLocale
}

export const config = {
  matcher: [
    /*
     * 除外対象:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
