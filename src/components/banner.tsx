import { gradientColors } from '@/lib/colors'

export function Banner() {
  return (
    <header
      className={`flex items-center justify-center gap-4 ${gradientColors.blue} p-4 py-2`}
    >
      <p className="font-medium uppercase text-white">FALTAM APENAS 30 DIAS</p>
      <button className="hidden rounded-full border border-white px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary md:flex">
        Garantir ingresso
      </button>
    </header>
  )
}
