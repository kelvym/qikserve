import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import messages from '@/messages/en.json'

export function WrapperComponentTest({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale="en" messages={messages}>
        {children}
      </NextIntlClientProvider>
    </QueryClientProvider>
  )
}
