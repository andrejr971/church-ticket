import { notFound } from 'next/navigation'

import { getInscriptionQuery } from '@/graphql'
import { clientServer } from '@/lib/client'
import { gradientColors } from '@/lib/colors'

import { ButtonShared } from './components/button-shared'
import { EffectConfetti } from './components/confetti'

type Params = {
  params: {
    id: string
  }
}

async function getInfo({ params }: Params) {
  const { data } = await clientServer.query({
    query: getInscriptionQuery,
    variables: {
      id: params.id,
    },
  })

  if (!data.lecture) {
    return {}
  }

  return data.lecture
}

export default async function SuccessPage({ params }: Params) {
  const data = await getInfo({ params })

  if (!data.id) {
    notFound()
  }

  return (
    <>
      <EffectConfetti />

      <div className="mx-auto flex h-screen w-full max-w-[1216px] flex-col items-center justify-center gap-4 p-4 lg:flex-row">
        <div className="flex w-full flex-col items-center gap-6 text-muted-foreground lg:max-w-[696px]">
          <h1 className="flex flex-col gap-4 text-center text-7xl uppercase text-accent-foreground">
            <span className="text-4xl">Parabéns!</span>
            <span
              className={`${gradientColors.blue} break-words bg-clip-text font-semibold text-transparent`}
            >
              {data.name}
            </span>
          </h1>

          <h2 className="flex flex-col text-center text-3xl uppercase text-accent-foreground md:flex-row">
            INSCRIÇÃO CONFIRMADA
          </h2>

          <p className="text-center text-xl">
            Pronto, sua inscrição foi confirmada.
            <br />
            Anote na sua agenda dia{' '}
            <strong className="font-medium text-accent-foreground">
              26 de Maio às 08H
            </strong>
            , será na nossa regional localizada na{' '}
            <strong className="font-medium text-accent-foreground">
              Rua Nova Esperança, 64 -Vila São Judas - Vargem Grande Paulista -
              SP
            </strong>
          </p>

          <p className="text-center text-3xl font-semibold">
            Convide mais pessoas para esse evento!
          </p>

          <ButtonShared />
        </div>
      </div>
    </>
  )
}
