import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Providers from './providers'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Qiwi App',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-[#fff] lg:bg-[#eee]', roboto.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
