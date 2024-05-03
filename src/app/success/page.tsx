import { gradientColors } from '@/lib/colors'

import { ButtonShared } from './components/button-shared'
import { EffectConfetti } from './components/confetti'
import { UploadProfile } from './components/upload'

export default function SuccessPage() {
  return (
    <>
      <EffectConfetti />

      <div className="mx-auto flex h-screen w-full max-w-[1216px] flex-col items-center justify-center gap-4 p-4 lg:flex-row">
        <div className="flex w-full  flex-col items-center gap-3 text-muted-foreground lg:max-w-[696px]">
          <h1 className="flex flex-col text-center text-5xl font-extralight uppercase text-accent-foreground md:flex-row">
            INSCRIÇÃO
            <span
              className={`${gradientColors.blue} bg-clip-text font-semibold text-transparent`}
            >
              CONFIRMADA
            </span>
          </h1>

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

        <UploadProfile />
      </div>
    </>
  )
}
