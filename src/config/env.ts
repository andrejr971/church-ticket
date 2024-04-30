import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GRAPH_URL: z.string().url(),
    NEXT_PUBLIC_GRAPH_ACCESS_TOKEN: z.string(),
  },

  runtimeEnv: {
    NEXT_PUBLIC_GRAPH_URL: process.env.NEXT_PUBLIC_GRAPH_URL,
    NEXT_PUBLIC_GRAPH_ACCESS_TOKEN: process.env.NEXT_PUBLIC_GRAPH_ACCESS_TOKEN,
  },
})
