import { z } from "zod"
import { TipoIngressoEnum } from "./ticket"

export const controlleTicketSchema = z.object({
  qtTicket: z.number({
    message: "qtTicket is required",
  }),
  type: TipoIngressoEnum,
  price: z.number({
    message: "price is required",
  }),
  eventId: z
    .string({
      message: "eventId is required",
    })
    .trim()
    .min(1, {
      message: "eventId is required",
    }),
})
