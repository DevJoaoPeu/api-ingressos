import { z } from "zod"

export const createRatesSchema = z.object({
  description: z
    .string({
      message: "Description is required",
    })
    .trim()
    .min(5, {
      message: "Description is required",
    })
    .max(200, {
      message: "Very large description",
    })
    .optional(),
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
  note: z.number({ message: "Note is required" }),
})
