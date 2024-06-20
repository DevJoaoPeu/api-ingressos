import { notFound } from "./http"

export const userNotFoundResponse = () =>
  notFound({
    message: "User not found",
  })
