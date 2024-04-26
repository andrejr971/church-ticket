import { gradientColors } from '@/lib/colors'

import { ModalTicket } from './modal-ticket'

export function Banner() {
  return (
    <header
      className={`flex items-center justify-center gap-4 ${gradientColors.blue} p-4 py-2`}
    >
      <p className="font-medium uppercase text-white">FALTAM APENAS 30 DIAS</p>

      <ModalTicket
        configButtonTrigger={{
          className:
            'hidden sm:w-auto rounded-full border border-white px-8 h-auto py-1 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary md:flex',
          hasIcon: false,
          variant: 'outline',
        }}
      />
    </header>
  )
}
