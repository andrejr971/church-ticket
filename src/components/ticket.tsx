'use client'

import * as htmlToImage from 'html-to-image'
import fileDownload from 'js-file-download'
import { CalendarDays, Download, MapPin, Repeat, Share } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent, useRef, useState } from 'react'

import { gradientColors } from '@/lib/colors'

import { LogoAdf } from './logo-adf'
import { BackgroundTicket } from './svgs'
import { Button, ScrollArea } from './ui'

interface TicketProps {
  withDownload?: boolean
  profile: File | null
}

export function Ticket({ withDownload = false, profile }: TicketProps) {
  const [profileFile, setProfile] = useState<File | null>(profile)
  const profileUrl = profileFile ? URL.createObjectURL(profileFile) : ''

  const ticketRef = useRef(null)

  const generateTicket = async () => {
    if (ticketRef.current) {
      const imgData = await htmlToImage.toPng(ticketRef.current, {
        quality: 1,
        canvasHeight: 1920.13,
        canvasWidth: 1084,
      })
      return imgData
    }
  }

  const handleDownloadImage = async () => {
    try {
      const imgData = await generateTicket()
      if (!imgData) throw new Error('Failed to generate ticket image')

      const base64ImageContent = imgData.replace(
        /^data:image\/(png|jpg);base64,/,
        '',
      )
      const blob = base64ToBlob(base64ImageContent, 'image/png')

      fileDownload(blob, 'ticket.png')
    } catch (error) {
      console.error('Error downloading image:', error)
    }
  }

  function base64ToBlob(base64: string, mimeType: string): Blob {
    const byteCharacters = atob(base64)
    const byteNumbers = Array.from(byteCharacters).map((char) =>
      char.charCodeAt(0),
    )
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type: mimeType })
  }

  const handleProfile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setProfile(file)
  }

  const handleShareImage = async () => {
    const imgData = await generateTicket()
    if (!imgData) return
    const shareData = {
      title: 'Ticket',
      text: 'Check out my ticket!',
      files: [new File([imgData], 'ticket.png', { type: 'image/png' })],
    }
    if (navigator.share) {
      navigator.share(shareData)
    } else {
      console.log('Sharing is not supported on this device')
    }
  }

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <ScrollArea className="h-[420px] w-full lg:h-auto">
        <div
          className="mx-auto flex w-full max-w-[384px] flex-col gap-4 bg-black p-4 lg:w-[384px]"
          id="ticket"
          ref={ticketRef}
        >
          <div
            className={`relative flex flex-col gap-4 ${gradientColors.blueLightToDark} rounded-lg p-4`}
          >
            <div className="relative flex h-[200px] flex-col justify-end rounded-lg">
              <div className="absolute left-0 right-0 top-0 z-0">
                <div
                  className={`absolute top-0 z-10 h-[200px] w-full ${gradientColors.blueToTransparent} rounded-lg`}
                ></div>
                <Image
                  src={profileUrl}
                  alt="Profile Picture"
                  width={320}
                  height={200}
                  quality={100}
                  className="z-0 h-[200px] w-[320px] rounded-lg object-cover"
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
                  <strong className="font-medium">
                    RUA NOVA ESPERANÇA, 64
                  </strong>
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
                <BackgroundTicket className="z-0 h-[200px] w-[352px]" />
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
              width={1080}
              height={1080}
              quality={100}
              className="h-[120px] w-[120px]"
            />

            <div className="flex flex-col text-lg">
              <strong className="text-3xl font-medium text-white">
                INGRESSO
              </strong>
              <span className="text-xl font-normal text-gray-200">#00001</span>
            </div>
          </div>
        </div>
      </ScrollArea>

      {withDownload && (
        <div className="flex h-24 w-full flex-1 flex-col gap-2 bg-background p-2">
          <div className="flex w-full gap-2">
            <Button className="flex w-full gap-2" onClick={handleDownloadImage}>
              Baixar
              <Download className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex w-full gap-2"
              onClick={handleShareImage}
              disabled={!navigator.share}
            >
              Compartilhar
              <Share className="h-5 w-5" />
            </Button>
          </div>

          <label htmlFor="profile">
            <div className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg text-primary hover:bg-accent hover:text-accent-foreground">
              Trocar foto
              <Repeat className="h-5 w-5" />
            </div>
          </label>

          <input
            className="sr-only"
            type="file"
            id="profile"
            onChange={handleProfile}
          />
        </div>
      )}
    </div>
  )
}
