import { Ticket } from 'lucide-react'
import Image from 'next/image'

import { Banner } from './banner'
import { LogoAdf } from './logo-adf'
import { Slogan } from './slogan'
import { Button, Separator } from './ui'

export function Hero() {
  return (
    <section className="relative">
      <Banner />

      <div className="absolute left-0 right-0 top-0 -z-10 flex h-[861px] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          width={1280}
          height={861}
          alt="background hero"
          quality={100}
          className="h-[861px] w-[1280px] object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 p-4 pb-20 pt-10 lg:pt-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center text-lg font-medium uppercase text-accent-foreground lg:text-2xl">
            PALESTRA COM ADOLESCENTES E JOVENS SOBRE
          </h1>

          <Slogan />
        </div>

        <Button className="flex gap-3">
          <span>Garantir ingresso</span>
          <Ticket />
        </Button>

        <div className="flex w-full max-w-[640px] flex-col items-center gap-4 rounded-lg border bg-background p-4 lg:max-w-[1064px] lg:flex-row">
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
      </div>
    </section>
  )
}
