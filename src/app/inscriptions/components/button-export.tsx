'use client'

import { FileDown, Loader2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components'
import { api } from '@/lib/api'

export function ButtonExport() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleExport() {
    setIsLoading(true)
    const { data } = await api.get('/api/inscriptions/export', {
      responseType: 'blob',
    })
    const blob = new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })

    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'inscriptions.xlsx'
    a.click()

    setIsLoading(false)
  }

  return (
    <Button
      variant={'ghost'}
      className="flex w-full max-w-[200px] items-center gap-4"
      onClick={handleExport}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <>
          Exportar dados
          <FileDown />
        </>
      )}
    </Button>
  )
}
