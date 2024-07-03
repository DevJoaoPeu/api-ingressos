import { z } from "zod"

const TipoIngressoEnum = z.enum(["PISTA", "VIP"])

export const createTicketSchema = z.object({
  qtTicket: z.number({
    message: "qtTicket is required",
  }),
  eventId: z
    .string({
      message: "eventId is required",
    })
    .trim()
    .min(1, {
      message: "eventId is required",
    }),
  ownerId: z
    .string({
      required_error: "dtStart is required",
    })
    .datetime({
      message: "dtStart must be a valid date",
    })
    .optional(),
  dtAvailability: z
    .string({
      required_error: "dtAvailability is required",
    })
    .datetime({
      message: "dtAvailability must be a valid date",
    }),
  type: TipoIngressoEnum,
  price: z
    .number({
      message: "price is required",
    })
    .min(2, {
      message: "price is required",
    }),
})
