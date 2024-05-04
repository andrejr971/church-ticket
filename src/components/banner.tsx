'use client'

import { useMemo } from 'react'

import { gradientColors } from '@/lib/colors'

import { ModalTicket } from './modal-ticket'

export function Banner() {
  const diffDays: string = useMemo(() => {
    const dateStart = new Date()
    const dateEnd = new Date('2024/05/26 08:00:00')

    const diff = parseInt(
      String((dateEnd.getTime() - dateStart.getTime()) / (1000 * 60 * 60 * 24)),
      10,
    )

    if (diff < 0) {
      return 'O evento já aconteceu'
    }

    return `FALTAM APENAS ${diff} ${diff === 1 ? 'DIA' : 'DIAS'}`
  }, [])

  return (
    <header
      className={`flex items-center justify-center gap-4 ${gradientColors.blue} p-4 py-2`}
    >
      <p className="font-medium uppercase text-white">{diffDays}</p>

      <ModalTicket
        configButtonTrigger={{
          className:
            'hidden sm:w-auto rounded-md border border-white px-8 h-auto py-1 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary md:flex',
          hasIcon: false,
          variant: 'outline',
        }}
      />
    </header>
  )
}
