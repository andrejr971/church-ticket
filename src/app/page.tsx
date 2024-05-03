import Image from 'next/image'

import { Hero, LogoAdf, ModalTicket, Separator } from '@/components'
import { gradientColors } from '@/lib/colors'

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-28 overflow-hidden">
      <Hero />

      <section className="p-4lg:-mt-60 -mt-40 flex flex-col items-center justify-center gap-4 p-4">
        <h2
          className={`text-3xl font-medium md:text-5xl ${gradientColors.blue} bg-clip-text text-center text-transparent`}
        >
          Sobre o evento
        </h2>
        <p className="max-w-[800px] text-center text-xl text-muted-foreground">
          Descubra novas perspectivas sobre ansiedade e depressão nesta palestra
          inspiradora. Com insights práticos e orientações para jovens e
          adolescentes, aprenda a enfrentar desafios com fé e resiliência.
        </p>

        <ModalTicket />
      </section>

      <section className="flex flex-col items-center justify-center gap-4 p-4">
        <h2
          className={`text-3xl font-medium md:text-5xl ${gradientColors.blue} bg-clip-text text-center text-transparent`}
        >
          Palestrante
        </h2>
        <div className="flex max-w-[1008px] flex-col items-center gap-6 md:flex-row">
          <Image
            src="/images/preletor.png"
            width={200}
            height={200}
            quality={100}
            className="h-[200px] w-[200px]"
            alt="Palestrante Flávio Rocha"
          />

          <p className="text-center text-xl text-muted-foreground md:text-left">
            Psicólogo e Pastor da{' '}
            <a
              href="https://www.instagram.com/adfsantateresa/"
              target="_blank"
              className="text-primary hover:underline"
            >
              Assembleia de Deus - Ministério do Ferreira em Santa Teresa
            </a>
            , Flávio Rocha traz uma abordagem enriquecedora para questões
            espirituais e emocionais. Como pai de família, compartilha sabedoria
            prática. Oferece orientações e esperança para jovens superarem
            desafios com fé e resiliência
          </p>
        </div>
      </section>

      <section className="relative flex w-full justify-center p-4">
        <div className="absolute -top-20 -z-10 flex h-[323px] w-[554px] rounded-full bg-primary-foreground opacity-20 blur-[200px]" />

        <div className="z-10 flex w-full flex-col items-center justify-center gap-4 rounded-lg border bg-background p-4 lg:max-w-[1064px]">
          <h2
            className={`text-3xl font-medium md:text-5xl ${gradientColors.blue} bg-clip-text text-center text-transparent`}
          >
            Junte-se a nós nesta palestra
          </h2>

          <div className="flex w-full max-w-[640px] flex-col items-center gap-4 bg-background lg:max-w-[1064px] lg:flex-row">
            <div className="flex w-full flex-col items-center gap-1">
              <strong className="text-lg font-medium text-accent-foreground">
                26 DE MAIO DE 2024
              </strong>
              <p className="text-sm text-muted-foreground">DOMINGO ÀS 08H00</p>
            </div>

            <Separator
              className="hidden h-16 w-[2px] lg:flex"
              orientation="vertical"
            />

            <Separator className="flex lg:hidden" />

            <div className="flex w-full flex-col items-center gap-1">
              <strong className="text-lg font-medium text-accent-foreground">
                RUA NOVA ESPERANÇA, 64
              </strong>
              <p className="text-sm text-muted-foreground">
                VILA SÃO JUDAS | VGP | SP
              </p>
            </div>

            <Separator
              className="hidden h-16 w-[2px] lg:flex"
              orientation="vertical"
            />

            <Separator className="flex lg:hidden" />

            <div className="flex w-full flex-row-reverse items-center justify-center gap-2 lg:flex-row">
              <div className="flex flex-col lg:items-end">
                <strong className="text-lg font-medium text-accent-foreground">
                  AD FERREIRA
                </strong>
                <p className="text-sm text-muted-foreground">
                  VARGEM GRANDE PAULISTA
                </p>
              </div>

              <LogoAdf className="h-20 w-20" />
            </div>
          </div>

          <ModalTicket />
        </div>
      </section>
    </div>
  )
}
