import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import { env } from '@/config/env'

const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: env.NEXT_PUBLIC_GRAPH_URL,
        headers: {
          Authorization: `Bearer ${env.NEXT_PUBLIC_GRAPH_ACCESS_TOKEN}`,
        },
        fetchOptions: {
          cache: 'no-cache',
        },
      }),
    }),
)

export const clientServer = getClient()
