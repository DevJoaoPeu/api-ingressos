import { IEventByIdParams } from "@/event/types"
import { FindAllTicketsByEventIdUseCase } from "./find-all-tickets-by-eventId-use-case"
import { ok, serverError } from "@/erros/helpers/http"
import {
  checkIfIdIsValid,
  ticketNotFoundResponse,
} from "@/erros/helpers/validation"

export class FindAllTicketsByEventIdController {
  constructor(
    private readonly findAllTicketsByEventIdUseCase: FindAllTicketsByEventIdUseCase
  ) {}
  async execute(httpParams: IEventByIdParams) {
    try {
      const params = httpParams.params.eventId

      const idIsValid = checkIfIdIsValid(params)

      if (!idIsValid) {
        return ticketNotFoundResponse()
      }

      const tickets = await this.findAllTicketsByEventIdUseCase.execute(params)

      return ok(tickets)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
