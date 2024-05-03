import { NextRequest } from 'next/server'

import {
  CreateInscriptionMutation,
  createInscriptionMutation,
  CreateInscriptionMutationVariables,
  InscriptionsConnectionProps,
  InscriptionsVariables,
  listInscriptions,
  publishInscriptionMutation,
} from '@/graphql'
import { clientServer } from '@/lib/client'

export async function POST(request: NextRequest) {
  const data = await request.json()

  try {
    const { data: createInscription } = await clientServer.mutate<
      CreateInscriptionMutationVariables,
      CreateInscriptionMutation
    >({
      mutation: createInscriptionMutation,
      variables: data,
    })

    if (!createInscription) {
      return Response.json(
        {
          error: 'Ocorreu um error',
        },
        {
          status: 400,
        },
      )
    }

    const { createLecture } = createInscription

    await clientServer.mutate({
      mutation: publishInscriptionMutation,
      variables: {
        id: createLecture.id,
      },
    })

    return Response.json(createInscription)
  } catch (error) {
    return Response.json(
      {
        error: 'Ocorreu um error',
      },
      {
        status: 400,
      },
    )
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get('page') || 1)

  const first = 10
  const skip = first * (page - 1)

  const { data } = await clientServer.query<
    InscriptionsConnectionProps,
    InscriptionsVariables
  >({
    query: listInscriptions,
    variables: {
      first,
      skip,
    },
  })

  if (!data) {
    return Response.json({
      data: [],
      nextPage: null,
      previousPage: null,
    })
  }

  const { pageInfo, edges } = data.lecturesConnection

  const response = {
    data: edges.map(({ node }) => node),
    nextPage: pageInfo.hasNextPage ? page + 1 : null,
    previousPage: pageInfo.hasPreviousPage ? page - 1 : null,
  }

  return Response.json(response)
}
