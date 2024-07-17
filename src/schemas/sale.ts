import { z } from "zod"

export const isValidIdSchema = z.object({
  saleId: z
    .string({
      message: "saleId is required",
    })
    .uuid({
      message: "Uuid is invalid",
    }),
})
