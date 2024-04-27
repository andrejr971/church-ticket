'use client'

import { LucideShare2 } from 'lucide-react'

import { gradientColors } from '@/lib/colors'

export function ButtonShared() {
  return (
    <button className="flex w-full max-w-[380px] cursor-pointer items-center justify-between gap-2 rounded-lg border border-input bg-slate-50 p-1 pl-3 font-normal hover:border-primary">
      <strong className="w-full flex-1 overflow-hidden whitespace-nowrap font-normal sm:max-w-full">
        {'https://church-ticket.vercel.app'}
      </strong>
      <span
        className={`flex w-20 items-center justify-center p-2 ${gradientColors.blue} rounded-sm text-white`}
      >
        <LucideShare2 />
      </span>
    </button>
  )
}
