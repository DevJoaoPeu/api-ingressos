import { badRequest, ok, serverError } from "@/erros/helpers/http"
import { CreateTicketUseCase } from "./create-ticket-use-case"
import { createTicketSchema } from "@/schemas/ticket/ticket"
import { ITicketParams } from "../type"
import { ZodError } from "zod"
import { EventNotFound } from "@/erros/helpers/validation"

export class CreateTicketController {
  constructor(private readonly createTicketUseCase: CreateTicketUseCase) {}
  async execute(httpRequest: ITicketParams) {
    try {
      const params = httpRequest.body

      if (params.qtTicket > 5) {
        return badRequest({
          message: "For now, the maximum number of tickets you can create is 5",
        })
      }

      await createTicketSchema.parseAsync(params)

      const ticket = await this.createTicketUseCase.execute(params)

      return ok(ticket)
    } catch (error) {
      if (error instanceof EventNotFound) {
        return badRequest({
          message: error.message,
        })
      }
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
