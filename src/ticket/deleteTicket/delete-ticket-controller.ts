import { IEventByIdParams } from "@/event/types"
import { DeleteTicketUseCase } from "./delete-ticket-use-case"
import { serverError } from "@/erros/helpers/http"

export class DeleteTicketController {
  constructor(private readonly deleteTicketUseCase: DeleteTicketUseCase) {}
  async execute(httpParams: IEventByIdParams) {
    try {
      const params = httpParams.params.eventId

      const deleteTickets = await this.deleteTicketUseCase.execute(params)

      return deleteTickets
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
