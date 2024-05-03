'use client'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

import { makeClient } from '@/lib/apollo-client'
import { queryClient } from '@/lib/query-client'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApolloNextAppProvider>
  )
}
