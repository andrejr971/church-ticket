'use client'

import { Ticket as LucideTicket, Upload } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

import { Sheet, SheetContent, SheetTrigger, Ticket } from '@/components'
import { gradientColors } from '@/lib/colors'

export function UploadProfile() {
  const [profile, setProfile] = useState<File | null>(null)

  const handleProfile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    setProfile(file)
  }

  return (
    <>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={`${gradientColors.blue} flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg p-4 px-8 text-sm font-medium text-white ring-offset-background transition-shadow hover:shadow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
            >
              Gerar ingresso
              <LucideTicket className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent className="max-h-[95%] p-2" side={'bottom'}>
            {!profile ? (
              <label htmlFor="profile" className="relative cursor-pointer">
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-center text-2xl text-accent-foreground">
                    Escolha uma foto sua para gerar o seu ingresso personalizado
                  </p>

                  <p
                    className={`${gradientColors.blue} flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium text-white ring-offset-background transition-shadow hover:shadow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
                  >
                    Selecionar imagem
                    <Upload className="h-5 w-5" />
                  </p>
                </div>
              </label>
            ) : (
              <Ticket profile={profile} withDownload />
            )}
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block">
        {!profile ? (
          <label htmlFor="profile" className="relative cursor-pointer">
            <div className="absolute inset-0 z-20 bg-gradient-to-br from-black to-black/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-center text-2xl text-white">
                Escolha uma foto sua para gerar o seu ingresso personalizado
              </p>

              <p
                className={`${gradientColors.blue} flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium text-white ring-offset-background transition-shadow hover:shadow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
              >
                Selecionar imagem
                <Upload className="h-5 w-5" />
              </p>
            </div>

            <Ticket profile={profile} />
          </label>
        ) : (
          <Ticket profile={profile} withDownload />
        )}
      </div>

      <input
        className="sr-only"
        type="file"
        id="profile"
        onChange={handleProfile}
      />
    </>
  )
}
