import ExcelJS from 'exceljs'
import { NextResponse } from 'next/server'

import {
  InscriptionsListVariables,
  inscriptionsQuery,
  InscriptionsQueryProps,
} from '@/graphql'
import { clientServer } from '@/lib/client'

export async function GET() {
  const { data } = await clientServer.query<
    InscriptionsQueryProps,
    InscriptionsListVariables
  >({
    query: inscriptionsQuery,
    variables: {
      first: 2000,
    },
  })

  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Inscriptions')
  worksheet.columns = [
    { header: 'ID', key: 'id', width: 15 },
    { header: 'Nome', key: 'name', width: 32 },
    { header: 'É cristão', key: 'isCristian', width: 15 },
    { header: 'Igreja', key: 'church', width: 32 },
    { header: 'Convidados', key: 'guests', width: 10 },
  ]

  data.lectures.forEach((lecture) => {
    worksheet.addRow({
      id: lecture.id,
      name: lecture.name,
      isCristian: lecture.isCristian ? 'Sim' : 'Não',
      church: lecture.church,
      guests: lecture.isGuests ? lecture.guests : 0,
    })
  })

  const buffer = await workbook.xlsx.writeBuffer()

  const response = new NextResponse(buffer)

  response.headers.set(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  )
  response.headers.set(
    'Content-Disposition',
    'attachment; filename=inscriptions.xlsx',
  )

  return response
}
