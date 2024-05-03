'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Ticket } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '@/lib/api'

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
  useToast,
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

const schemaValidation = z
  .object({
    name: z
      .string({
        required_error: 'Nome é obrigatório',
      })
      .min(2, {
        message: 'Nome precisa ter no mínimo 2 caracteres',
      }),
    isCristian: z.enum(['yes', 'no']).superRefine((data) => {
      if (data === 'yes') {
        return z.object({
          church: z.string({
            required_error: 'Igreja é obrigatório',
          }),
        })
      }
      return z.object({})
    }),
    church: z.string({
      required_error: 'Igreja é obrigatório',
    }),
    isGuests: z.enum(['yes', 'no']),
    guests: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isCristian === 'yes' && !data.church) {
        return false
      }
      return true
    },
    {
      message: 'Igreja é obrigatório',
      path: ['church'], // Caminho para o campo que falhou na validação
    },
  )
  .refine(
    (data) => {
      if (data.isGuests === 'yes' && !data.guests) {
        return false
      }
      return true
    },
    {
      message: 'Quantidade de acompanhantes é obrigatório',
      path: ['guests'], // Caminho para o campo que falhou na validação
    },
  )

type ModalTicketForm = z.infer<typeof schemaValidation>

export function ModalTicket({
  configButtonTrigger = {
    hasIcon: true,
  },
}: ModalTicketProps) {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting: loading },
    watch,
    register,
  } = useForm<ModalTicketForm>({
    resolver: zodResolver(schemaValidation),
    defaultValues: {
      isCristian: 'yes',
      isGuests: 'no',
    },
  })

  const { toast } = useToast()

  const isCristian = watch('isCristian')
  const isGuests = watch('isGuests')

  const isCristianValue = isCristian === 'yes'
  const isGuestsValue = isGuests === 'yes'

  async function handleSubmitForm(params: ModalTicketForm) {
    const data = {
      ...params,
      isCristian: params.isCristian === 'yes',
      isGuests: params.isGuests === 'yes',
      guests: Number(params.guests || 0),
    }

    try {
      await api.post('/api/inscriptions', data)

      toast({
        title: 'Inscrição garantida com sucesso',
      })
      router.push('/success')
    } catch (error) {
      toast({
        title: 'Erro ao garantir ingresso',
        description: 'Tente novamente mais tarde',
      })
    }
  }

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

        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className="relative flex flex-col gap-1">
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              placeholder="Digite o seu nome"
              {...register('name')}
            />

            {errors.name && (
              <span className="absolute -top-[0px] right-0 text-[10px] font-medium text-destructive">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="relative flex flex-col gap-1">
            <Label>Você é cristão?</Label>

            <Controller
              control={control}
              name="isCristian"
              render={({ field }) => (
                <RadioGroup
                  orientation="vertical"
                  className="grid-cols-2"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <RadioGroupItem value="yes" label="Sim" />
                  <RadioGroupItem value="no" label="Não" />
                </RadioGroup>
              )}
            />

            {errors.isCristian && (
              <span className="absolute -top-[0px] right-0 text-[10px] font-medium text-destructive">
                {errors.isCristian.message}
              </span>
            )}
          </div>

          {isCristianValue && (
            <div className="relative flex flex-col gap-1">
              <Label htmlFor="church">Qual igreja você é?</Label>
              <Input
                type="text"
                placeholder="Digite o nome da sua igreja"
                {...register('church')}
              />

              {errors.church && (
                <span className="absolute -top-[0px] right-0 text-[10px] font-medium text-destructive">
                  {errors.church.message}
                </span>
              )}
            </div>
          )}

          <div className="relative flex flex-col gap-1">
            <Label>Você trará acompanhante?</Label>

            <Controller
              control={control}
              name="isGuests"
              render={({ field }) => (
                <RadioGroup
                  orientation="vertical"
                  className="grid-cols-2"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <RadioGroupItem value="yes" label="Sim" />
                  <RadioGroupItem value="no" label="Não" />
                </RadioGroup>
              )}
            />

            {errors.isGuests && (
              <span className="absolute -top-[0px] right-0 text-[10px] font-medium text-destructive">
                {errors.isGuests.message}
              </span>
            )}
          </div>

          {isGuestsValue && (
            <div className="relative flex flex-col gap-1">
              <Label htmlFor="guests">Quantos acompanhantes? </Label>
              <Input type="number" placeholder="0" {...register('guests')} />

              {errors.guests && (
                <span className="absolute -top-[0px] right-0 text-[10px] font-medium text-destructive">
                  {errors.guests.message}
                </span>
              )}
            </div>
          )}

          <Button
            type="submit"
            className="flex w-full max-w-full gap-3"
            disabled={loading}
          >
            {loading ? (
              <>
                <span>Gerando ingresso</span>
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              <>
                <span>Garantir ingresso</span>
                <Ticket />
              </>
            )}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
