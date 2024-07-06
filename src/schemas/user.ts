import { z } from "zod"

export const createUserSchema = z.object({
  name: z
    .string({
      message: "Name is required",
    })
    .trim()
    .min(2, {
      message: "Name is required",
    }),
  email: z
    .string({
      required_error: "E-mail is required",
    })
    .email({
      message: "Please provide a vaid e-mail",
    })
    .trim()
    .min(1, {
      message: "E-mail is required",
    }),
  password: z
    .string({
      message: "Password is required",
    })
    .trim()
    .min(6, {
      message: "Password must have at least 6 characters",
    }),
})

export const updateUserSchema = createUserSchema.partial().strict()

export const sessionUserSchema = z.object({
  email: z
    .string({
      required_error: "E-mail is required",
    })
    .email({
      message: "Please provide a vaid e-mail",
    })
    .trim()
    .min(1, {
      message: "E-mail is required",
    }),
  password: z
    .string({
      message: "Password is required",
    })
    .trim()
    .min(6, {
      message: "Password must have at least 6 characters",
    }),
})

export const isValidIdSchema = z.object({
  userId: z
    .string({
      message: "userId is required",
    })
    .uuid({
      message: "Uuid is invalid",
    }),
})
