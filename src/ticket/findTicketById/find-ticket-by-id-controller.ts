import { ok, serverError } from "@/erros/helpers/http"
import { IFindTicketParamsId } from "../type"
import { ticketNotFoundResponse } from "@/erros/helpers/validation"
import { FindTicketByIdUseCase } from "./find-ticket-by-id-use-case"

export class FindTicketByIdController {
  constructor(private readonly findTicketByIdUseCase: FindTicketByIdUseCase) {}
  async execute(httpRequest: IFindTicketParamsId) {
    try {
      const ticketId = httpRequest.params.ticketId

      const ticket = await this.findTicketByIdUseCase.execute(ticketId)

      if (!ticket) {
        return ticketNotFoundResponse()
      }

      return ok(ticket)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
