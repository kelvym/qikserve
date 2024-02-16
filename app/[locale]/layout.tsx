import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'
import Providers from './providers'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Qiwi App',
  description: '',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={cn('bg-[#fff] lg:bg-[#eee]', roboto.className)}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
