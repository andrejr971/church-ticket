import { ApolloLink, HttpLink } from '@apollo/client'
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

import { env } from '@/config/env'

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: env.NEXT_PUBLIC_GRAPH_URL,
    headers: {
      Authorization: `Bearer ${env.NEXT_PUBLIC_GRAPH_ACCESS_TOKEN}`,
    },
    fetchOptions: { cache: 'no-cache' },
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  })
}
