import './globals.css'

import type { Metadata } from 'next'
import { Poppins as FontSans } from 'next/font/google'
import Image from 'next/image'

import { Footer, Toaster } from '@/components'
import { cn } from '@/lib/utils'

import { AppProvider } from './provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://church-ticket.vercel.app/'),
  title: {
    default: 'ChurchTicket',
    template: '%s | ChurchTicket',
  },
  viewport: '"width=device-width, user-scalable=no',
  keywords: ['church', 'ticket', 'event', 'christian', 'faith', 'palestra'],
  description:
    'Descubra novas perspectivas sobre ansiedade e depressão nesta palestra inspiradora. Com insights práticos e orientações para jovens e adolescentes, aprenda a enfrentar desafios com fé e resiliência.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="relative flex h-screen flex-col overflow-x-hidden">
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

          <main className="flex-1">
            <AppProvider>
              {children}
              <Toaster />
            </AppProvider>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
