import { IEventByIdParams } from "@/event/types"
import { FindAllTicketsByEventIdUseCase } from "./find-all-tickets-by-eventId-use-case"
import { ok, serverError } from "@/erros/helpers/http"

export class FindAllTicketsByEventIdController {
  constructor(
    private readonly findAllTicketsByEventIdUseCase: FindAllTicketsByEventIdUseCase
  ) {}
  async execute(httpParams: IEventByIdParams) {
    try {
      const params = httpParams.params.eventId

      const tickets = await this.findAllTicketsByEventIdUseCase.execute(params)

      return ok(tickets)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
