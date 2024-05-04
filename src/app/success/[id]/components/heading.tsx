'use client'

import { useQuery } from '@apollo/client'

import {
  getInscriptionQuery,
  InscriptionQueryProps,
  InscriptionVariables,
} from '@/graphql'
import { gradientColors } from '@/lib/colors'

interface HeadingProps {
  id: string
}

export function Heading({ id }: HeadingProps) {
  console.log(id)
  const { data } = useQuery<InscriptionQueryProps, InscriptionVariables>(
    getInscriptionQuery,
    {
      variables: {
        id,
      },
    },
  )

  return (
    <h1 className="flex flex-col gap-4 text-center text-7xl uppercase text-accent-foreground">
      <span className="text-4xl">Parabéns!</span>
      <span
        className={`${gradientColors.blue} bg-clip-text font-semibold text-transparent`}
      >
        {data?.lecture.name}
      </span>
    </h1>
  )
}
