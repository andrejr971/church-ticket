'use client'

import { LucideShare2 } from 'lucide-react'

import { gradientColors } from '@/lib/colors'

export function ButtonShared() {
  function handleSharedLink() {
    const message = `Se liga galera \nno dia 26 de Maio às 08h00, na Sede Regional de Vargem Grande Pta., rua Nova Esperança, 64 - Jd. São Judas, realizaremos uma palestra com os Adolescentes e Jovens, sobre Ansiedade e Depressão\nE você é o meu convidado\n \n\nPara mais informações acesse o link: \nhttps://church-ticket.vercel.app`

    let url = ''

    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      url = 'whatsapp://send'
    } else {
      url = 'https://api.whatsapp.com'
    }

    if ('share' in navigator) {
      navigator.share({
        title: 'Faça a sua inscrição',
        text: message,
        files: [
          new File(
            ['banner.jpg'],
            `${window.location.origin}/images/banner.jpg`,
            {
              type: 'image/jpg',
            },
          ),
        ],
      })
    } else {
      window.location.href = `${url}?text=${encodeURIComponent(message)}&img=${
        window.location.origin
      }/images/banner.jpg`
    }
  }

  return (
    <button
      onClick={handleSharedLink}
      className="flex w-full max-w-[380px] cursor-pointer items-center justify-between gap-2 rounded-lg border border-input bg-slate-50 p-1 pl-3 font-normal hover:border-primary"
    >
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
