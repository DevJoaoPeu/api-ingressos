import { badRequest, ok, serverError } from "@/erros/http"
import { IFindTicketParamsId } from "../type"
import { ticketNotFoundResponse } from "@/erros/validation"
import { FindTicketByIdUseCase } from "./find-ticket-by-id-use-case"
import { isValidIdSchema } from "@/schemas/ticket/ticket"
import { ZodError } from "zod"

export class FindTicketByIdController {
  constructor(private readonly findTicketByIdUseCase: FindTicketByIdUseCase) {}
  async execute(httpRequest: IFindTicketParamsId) {
    try {
      const ticketId = httpRequest.params.ticketId

      await isValidIdSchema.parseAsync({ ticketId })

      const ticket = await this.findTicketByIdUseCase.execute(ticketId)

      if (!ticket) {
        return ticketNotFoundResponse()
      }

      return ok(ticket)
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
