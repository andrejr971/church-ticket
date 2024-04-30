import './globals.css'

import type { Metadata } from 'next'
import { Poppins as FontSans } from 'next/font/google'
import Image from 'next/image'

import { Toaster } from '@/components'
import { cn } from '@/lib/utils'

import { AppProvider } from './provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ChurchTicket',
  description: 'ChurchTicket is a platform for managing church events.',
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

        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
      </body>
    </html>
  )
}
