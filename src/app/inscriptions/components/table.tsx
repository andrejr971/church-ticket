'use client'

import { useQuery } from '@tanstack/react-query'
import { Check, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'

import {
  Button,
  Skeleton,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components'
import { InscriptionsDTO } from '@/dtos/inscriptions'
import { api } from '@/lib/api'

interface QueryProps {
  data: {
    data: Array<InscriptionsDTO>
    nextPage: number | null
    previousPage: number | null
  }
}

export function TableInscriptions() {
  const [page, setPage] = useState(1)

  const {
    data: response,
    isLoading,
    refetch,
  } = useQuery<QueryProps>({
    queryKey: ['inscriptions', page],
    queryFn: async () =>
      await api.get('/api/inscriptions', {
        params: {
          page,
        },
      }),
    refetchOnWindowFocus: true,
  })

  function handlePageChange(page: number) {
    setPage(page)
    refetch()
  }

  if (isLoading) {
    return <Skeleton className="h-96" />
  }

  if (!response?.data) {
    return (
      <Table>
        <TableCaption>Nenhuma inscrição feita ainda</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Nome</TableHead>
            <TableHead className="text-center">Cristão</TableHead>
            <TableHead className="text-center">Igreja</TableHead>
            <TableHead className="text-right">Acompanhantes</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    )
  }

  const { data: inscriptions, nextPage, previousPage } = response.data

  return (
    <div className="flex flex-col gap-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Nome</TableHead>
            <TableHead className="text-center">Cristão</TableHead>
            <TableHead className="text-center">Igreja</TableHead>
            <TableHead className="text-right">Acompanhantes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inscriptions.map((inscription) => (
            <TableRow key={inscription.id}>
              <TableCell className="text-left">{inscription.name}</TableCell>
              <TableCell className="text-center">
                <div
                  className={`mx-auto flex h-6 w-6 items-center justify-center rounded-sm ${inscription.isCristian ? 'bg-green-400/20 text-green-600' : 'bg-red-400/20 text-red-600'}`}
                >
                  {inscription.isCristian ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <X className="h-4 w-4" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-center">
                {inscription.church}
              </TableCell>
              <TableCell className="text-right">
                <div
                  className={`ml-auto flex h-8 w-8 items-center justify-center rounded-sm bg-primary/20 text-primary`}
                >
                  {inscription.guests || '---'}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex w-full items-center justify-end gap-2">
        <Button
          variant={'outline'}
          className="h-10 w-10 p-0"
          disabled={!previousPage}
          onClick={() => handlePageChange(previousPage!)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant={'outline'}
          className="h-10 w-10 p-0"
          disabled={!nextPage}
          onClick={() => handlePageChange(nextPage!)}
        >
          <span className="sr-only">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
