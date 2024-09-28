import { I18nLink } from './I18nLink'

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex">
        <I18nLink className="p-4" href="/">サーバー</I18nLink>
        <I18nLink className="p-4" href="/client">クライアント</I18nLink>
      </div>
      {children}
    </div>
  )
}
