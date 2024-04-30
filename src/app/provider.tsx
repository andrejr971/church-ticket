'use client'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'
import { ReactNode } from 'react'

import { client } from '@/lib/client'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={() => client}>
      {children}
    </ApolloNextAppProvider>
  )
}
