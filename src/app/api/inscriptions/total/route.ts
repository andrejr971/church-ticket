import { totalInscriptionsQuery, TotalInscriptionsQueryProps } from '@/graphql'
import { clientServer } from '@/lib/client'

export async function GET() {
  const { data } = await clientServer.query<TotalInscriptionsQueryProps>({
    query: totalInscriptionsQuery,
    fetchPolicy: 'network-only',
  })

  if (!data) {
    return Response.json({
      inscriptions: 0,
      guests: 0,
      total: 0,
    })
  }

  const { lectures } = data

  const totals = lectures.reduce(
    (acc, lecture) => {
      acc.inscriptions += 1
      acc.guests += lecture.guests
      acc.total += 1 + lecture.guests

      return acc
    },
    {
      inscriptions: 0,
      guests: 0,
      total: 0,
    },
  )

  return Response.json(totals)
}
