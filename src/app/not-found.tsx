import { Metadata } from 'next'

import { ContentError } from '@/components'

export const metadata: Metadata = {
  title: 'Not found',
  description: 'Algo deu errado!',
}

export default function NotFound() {
  return (
    <ContentError
      title="404"
      textContrast="Página não encontrada"
      description="A página que você está procurando agora está fora de nosso alcance."
      subtitle="Página não encontrada"
    />
  )
}
