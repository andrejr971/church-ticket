import { CalendarDays, MapPin } from 'lucide-react'
import Image from 'next/image'

import { gradientColors } from '@/lib/colors'

import { LogoAdf } from './logo-adf'

export function Ticket() {
  return (
    <div className="flex w-[384px] flex-col gap-4 bg-black p-4">
      <div
        className={`relative flex flex-col gap-4 ${gradientColors.blueLightToDark} rounded-lg p-4`}
      >
        <div className="relative flex h-[200px] flex-col justify-end rounded-lg">
          <div className="absolute left-0 right-0 top-0 z-0">
            <div
              className={`absolute top-0 z-10 h-[200px] w-full ${gradientColors.blueToTransparent} rounded-lg`}
            ></div>
            <Image
              src="/images/profile.png"
              alt="Profile Picture"
              width={320}
              height={200}
              quality={100}
              className="z-0 h-[200px] w-[320px]"
            />
          </div>
          <div className="z-10 flex w-full flex-col items-center gap-1">
            <span className="text-sm text-accent-foreground">Nome</span>
            <strong className="text-2xl font-medium text-white">
              André Junior
            </strong>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2   p-4">
          <div className="flex gap-2 text-white">
            <CalendarDays className="h-7 w-7" />

            <div className="flex flex-col text-lg">
              <strong className="font-medium">26 DE MAIO DE 2024</strong>
              <span className="font-normal text-gray-200">
                DOMINGO ÀS 08H00
              </span>
            </div>
          </div>

          <div className="flex gap-2 text-white">
            <MapPin className="h-7 w-7" />

            <div className="flex flex-col text-lg">
              <strong className="font-medium">RUA NOVA ESPERANÇA, 64</strong>
              <span className="font-normal text-gray-200">
                VILA SÃO JUDAS | VGP | SP
              </span>
            </div>
          </div>

          <div className="z-10 flex flex-col items-center gap-2 text-white">
            <LogoAdf variant="light" className="h-[80px] w-[80px]" />

            <div className="flex flex-col items-center text-lg">
              <strong className="font-medium">AD FERREIRA</strong>
              <span className="font-normal text-gray-200">
                VARGEM GRANDE PAULISTA
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-0">
            <Image
              src="/images/background-ticket.png"
              alt="Profile Picture"
              width={352}
              height={200}
              quality={100}
              className="z-0 h-[200px] w-[352px]"
            />
          </div>
        </div>

        <p className="absolute -left-[88px] top-[50%] -translate-y-[50%] -rotate-90 text-[10px] text-slate-300">
          PALESTRA COM ADOLESCENTES E JOVENS
        </p>
        <p className="absolute -right-[88px] top-[50%] -translate-y-[50%] -rotate-90 text-[10px] text-slate-300">
          PALESTRA COM ADOLESCENTES E JOVENS
        </p>
      </div>

      <div
        className={`flex items-center gap-4 rounded-lg bg-gradient-to-br from-primary to-primary-foreground p-4`}
      >
        <Image
          src="/images/qr-code.png"
          alt="QRCode"
          width={120}
          height={120}
          quality={100}
          className="h-[120px] w-[120px]"
        />

        <div className="flex flex-col text-lg">
          <strong className="text-3xl font-medium text-white">INGRESSO</strong>
          <span className="text-xl font-normal text-gray-200">#00001</span>
        </div>
      </div>
    </div>
  )
}
