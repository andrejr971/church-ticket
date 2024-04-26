import { Ticket } from 'lucide-react'

import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui'

interface ModalTicketProps {
  configButtonTrigger?: {
    className?: string
    hasIcon?: boolean
    variant?:
      | 'default'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
      | 'link'
  }
}

export function ModalTicket({ configButtonTrigger }: ModalTicketProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={`w-full gap-3 sm:w-[300px] ${configButtonTrigger?.className}`}
          variant={configButtonTrigger?.variant}
        >
          <span>Garantir ingresso</span>
          {configButtonTrigger?.hasIcon && <Ticket />}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Participe gratuitamente</SheetTitle>
        </SheetHeader>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">Nome</Label>
            <Input type="text" name="name" placeholder="Digite o seu nome" />
          </div>

          <div className="flex flex-col gap-1">
            <Label>Você é cristão?</Label>

            <RadioGroup
              name="isCristian"
              orientation="vertical"
              defaultValue="yes"
              className="grid-cols-2"
            >
              <RadioGroupItem value="yes" id="yes" label="Sim" />
              <RadioGroupItem value="no" id="no" label="Não" />
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="church">Qual igreja você é?</Label>
            <Input
              type="text"
              name="church"
              placeholder="Digite o nome da sua igreja"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label>Você trará acompanhante?</Label>
            <RadioGroup
              name="isGuests"
              orientation="vertical"
              defaultValue="yes"
              className="grid-cols-2"
            >
              <RadioGroupItem value="yes" id="yes" label="Sim" />
              <RadioGroupItem value="no" id="no" label="Não" />
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="guests">Quantos acompanhantes? </Label>
            <Input type="number" placeholder="0" name="guest" />
          </div>

          <Button type="submit" className="flex w-full max-w-full gap-3">
            <span>Garantir ingresso</span>
            <Ticket />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
