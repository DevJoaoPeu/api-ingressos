import { IEventByIdParams } from "@/event/types"
import { DeleteTicketUseCase } from "./delete-ticket-use-case"
import { badRequest, ok, serverError } from "@/erros/http"
import { isValidIdSchema } from "@/schemas/event"
import { ZodError } from "zod"

export class DeleteTicketController {
  constructor(private readonly deleteTicketUseCase: DeleteTicketUseCase) {}
  async execute(httpParams: IEventByIdParams) {
    try {
      const eventId = httpParams.params.eventId

      await isValidIdSchema.parseAsync({ eventId })

      const deleteTickets = await this.deleteTicketUseCase.execute(eventId)

      return ok(deleteTickets)
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
