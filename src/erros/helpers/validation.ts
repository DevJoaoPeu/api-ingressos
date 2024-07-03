import { badRequest, notFound } from "./http"
import validator from "validator"

export const userNotFoundResponse = () =>
  notFound({
    message: "User not found",
  })

export const checkIfIdIsValid = (id: string) => validator.isUUID(id)

export const invalidIdResponse = () =>
  badRequest({
    message: "Id invalid. Please provide a valid one",
  })

export const eventNotFoundResponse = () =>
  notFound({
    message: "Event not found",
  })

export class NotAuthorized extends Error {
  constructor() {
    super(`Not Authorized`)
    this.name = "NotAuthorized"
  }
}

export class EventNotFound extends Error {
  constructor() {
    super(`Event not found`)
    this.name = "EventNotFound"
  }
}

export const ticketNotFoundResponse = () =>
  notFound({
    message: "Ticket not found",
  })
