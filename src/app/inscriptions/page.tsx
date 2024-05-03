import { ButtonExport, TableInscriptions, Totals } from './components'

export const revalidate = 10

export default function Inscriptions() {
  return (
    <div className="mx-auto flex max-w-[1216px] flex-col gap-5 p-4 py-20">
      <Totals />

      <div className="flex items-center justify-end">
        <ButtonExport />
      </div>

      <section className="w-full rounded-md border border-input bg-background p-4">
        <TableInscriptions />
      </section>
    </div>
  )
}
