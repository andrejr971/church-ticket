import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from './ui'

interface ContentErrorProps {
  description?: string
  textContrast?: string
  title: string
  subtitle?: string
  buttonReset?: {
    onClick?: () => void
    title?: string
  }
}

export function ContentError({
  title,
  textContrast,
  description,
  subtitle,
  buttonReset,
}: ContentErrorProps) {
  return (
    <div className="relative  w-full flex-1 ">
      <div className="flex h-screen w-full flex-col items-end justify-center overflow-hidden">
        <div className="relative flex w-full flex-col items-center gap-6 p-4 text-center">
          {textContrast && (
            <span className="to-gray-from-gray-200/0 font-title dark:from-black-light dark:to-black-light/0 absolute -top-20 left-0 -z-20 whitespace-nowrap bg-gradient-to-b from-gray-200 bg-clip-text stroke-orange-100 text-[180px] font-bold text-transparent opacity-50 lg:-top-36 lg:text-[248px]">
              {textContrast}
            </span>
          )}

          <h1 className="font-title text-9xl font-bold leading-tight text-accent-foreground md:text-[200px]">
            {title}
          </h1>

          {subtitle && (
            <h3 className="font-title text-3xl text-accent-foreground">
              {subtitle}
            </h3>
          )}

          {description && (
            <p className="max-w-[560px] text-xl ">{description}</p>
          )}

          {buttonReset?.onClick ? (
            <Button variant="default" onClick={buttonReset.onClick}>
              {buttonReset.title ? buttonReset.title : 'Ir para o início'}
              <ChevronRight className="size-5" />
            </Button>
          ) : (
            <Button asChild variant="default">
              <Link href="/">
                Ir para o início
                <ChevronRight className="size-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
