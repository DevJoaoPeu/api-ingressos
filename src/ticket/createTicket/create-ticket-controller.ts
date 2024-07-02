import { ok, serverError } from "@/erros/helpers/http"
import { CreateTicketUseCase } from "./create-ticket-use-case"
import { createTicketSchema } from "@/schemas/ticket/ticket"
import { ITicketParams } from "../type"

export class CreateTicketController {
  constructor(private readonly createTicketUseCase: CreateTicketUseCase) {}
  async execute(httpRequest: ITicketParams) {
    try {
      const params = httpRequest.body

      await createTicketSchema.parseAsync(params)

      const ticket = await this.createTicketUseCase.execute(params)

      if (!ticket) {
        return null
      }

      return ok(ticket)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
