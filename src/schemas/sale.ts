import { z } from "zod"

export const saleSchema = z.object({
  userId: z
    .string({
      message: "userId is required",
    })
    .uuid({
      message: "invalid uuid",
    })
    .trim()
    .min(1, {
      message: "userId is required",
    }),
  ticketId: z
    .string({
      message: "ticketId is required",
    })
    .uuid({
      message: "invalid uuid",
    })
    .trim()
    .min(1, {
      message: "ticketId is required",
    }),
  amountTotal: z
    .number({
      message: "amountTotal is required",
    })
    .min(1, {
      message: "amountTotal is required",
    }),
})

export const isValidIdSchema = z.object({
  saleId: z
    .string({
      message: "saleId is required",
    })
    .uuid({
      message: "Uuid is invalid",
    }),
})
