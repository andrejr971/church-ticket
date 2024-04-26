export function Footer() {
  return (
    <footer className="flex w-full items-center justify-center border border-t bg-background p-4">
      <div className="flex w-full max-w-[1216px]  flex-col-reverse items-center justify-between gap-2 md:flex-row md:gap-4">
        <p>Todos os direitos reservados</p>

        <div>
          Desenvolvido por:{' '}
          <a
            href="https://www.andrejr.dev/"
            className="text-primary-foreground hover:underline"
            target="_blank"
          >
            andrejr.dev
          </a>
        </div>
      </div>
    </footer>
  )
}
