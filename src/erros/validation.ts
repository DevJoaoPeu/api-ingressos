import { badRequest, notFound } from "./http"

export const userNotFoundResponse = () =>
  notFound({
    message: "User not found",
  })

export const invalidIdResponse = () =>
  badRequest({
    message: "Id invalid. Please provide a valid one",
  })

export const eventNotFoundResponse = () =>
  notFound({
    message: "Event not found",
  })

export const ticketNotFoundResponse = () =>
  notFound({
    message: "Ticket not found",
  })

export const controlleTicketNotFoundResponse = () =>
  notFound({
    message: "controlleTicket not found",
  })

export const saleNotFoundResponse = () =>
  notFound({
    message: "sale not found",
  })

export const ticketsSoldOut = () =>
  notFound({
    message: "Ticket sold out",
  })
