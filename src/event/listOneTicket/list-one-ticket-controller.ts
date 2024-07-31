import { TicketType } from "@prisma/client"
import { badRequest, ok, serverError } from "../../erros/http"
import { ListOneTicketUseCase } from "./list-one-ticket-use-case"
import { ticketsSoldOut } from "../../erros/validation"
import { findControlleTicketSchema } from "../../schemas/controlleTicket"
import { ZodError } from "zod"

interface IhttpParams {
  params: {
    eventId: string
    type: TicketType
  }
}
export class ListOneTicketController {
  constructor(private readonly listOneTicketUseCase: ListOneTicketUseCase) {}
  async execute(httpParams: IhttpParams) {
    try {
      const params = httpParams.params

      await findControlleTicketSchema.parseAsync(params)

      const list = await this.listOneTicketUseCase.execute(params)

      if (!list) {
        return ticketsSoldOut()
      }

      return ok(list)
    } catch (error) {
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
