import {
  // ApolloClient,
  ApolloLink,
  HttpLink,
  // InMemoryCache,
} from '@apollo/client'
// import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

import { env } from '@/config/env'

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: env.NEXT_PUBLIC_GRAPH_URL,
    headers: {
      Authorization: `Bearer ${env.NEXT_PUBLIC_GRAPH_ACCESS_TOKEN}`,
    },
    fetchOptions: { cache: 'no-store' },
  })
  // const cache = new InMemoryCache()

  // const { getClient } = registerApolloClient(
  //   () =>
  //     new ApolloClient({
  //       cache,
  //       link: httpLink,
  //     }),
  // )

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

// export const clientServer = makeClient().server
export const client = makeClient()
