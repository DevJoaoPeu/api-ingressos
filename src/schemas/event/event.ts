import { z } from "zod"

export const createEventSchema = z.object({
  name: z
    .string({
      message: "Name is required",
    })
    .trim()
    .min(2, {
      message: "Name is required",
    }),
  userId: z
    .string({
      message: "userId is required",
    })
    .trim()
    .min(1, {
      message: "userId is required",
    }),
  dtStart: z
    .string({
      required_error: "dtStart is required",
    })
    .datetime({
      message: "dtStart must be a valid date",
    }),
  dtEnd: z
    .string({
      required_error: "dtEnd is required",
    })
    .datetime({
      message: "dtEnd must be a valid date",
    }),
  location: z
    .string({
      message: "location is required",
    })
    .trim()
    .min(2, {
      message: "location is required",
    }),
})
