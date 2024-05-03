'use client'

import { useQuery } from '@tanstack/react-query'

import { Skeleton } from '@/components'
import { api } from '@/lib/api'

export function Totals() {
  const { data, isLoading } = useQuery({
    queryKey: ['totalInscriptions'],
    queryFn: async () => await api.get('/api/inscriptions/total'),
    refetchOnWindowFocus: true,
  })

  return (
    <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {isLoading ? (
        <>
          <Skeleton className="h-[130px] w-full border border-input" />
          <Skeleton className="h-[130px] w-full border border-input" />
          <Skeleton className="h-[130px] w-full border border-input" />
        </>
      ) : (
        <>
          <div className="flex flex-col gap-2 rounded-md border border-input bg-background p-4">
            <strong className="text-6xl font-medium text-accent-foreground">
              {data?.data.inscriptions || 0}
            </strong>
            <small className="text-lg text-muted-foreground">Inscritos</small>
          </div>
          <div className="flex flex-col gap-2 rounded-md border border-input bg-background p-4">
            <strong className="text-6xl font-medium text-accent-foreground">
              {data?.data.guests || 0}
            </strong>
            <small className="text-lg text-muted-foreground">Convidados</small>
          </div>
          <div className="flex flex-col gap-2 rounded-md border border-input bg-gradient-to-l from-primary-foreground to-primary p-4 text-white">
            <strong className="text-6xl font-medium">
              {data?.data.total || 0}
            </strong>
            <small className="text-lg">Total</small>
          </div>
        </>
      )}
    </div>
  )
}
