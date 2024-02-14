import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt-br'],

  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt-br|en)/:path*'],
}
