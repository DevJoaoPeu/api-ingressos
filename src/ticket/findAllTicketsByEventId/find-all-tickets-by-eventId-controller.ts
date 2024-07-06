import { IEventByIdParams } from "@/event/types"
import { FindAllTicketsByEventIdUseCase } from "./find-all-tickets-by-eventId-use-case"
import { badRequest, ok, serverError } from "@/erros/http"
import { isValidIdSchema } from "@/schemas/event"
import { ZodError } from "zod"

export class FindAllTicketsByEventIdController {
  constructor(
    private readonly findAllTicketsByEventIdUseCase: FindAllTicketsByEventIdUseCase
  ) {}
  async execute(httpParams: IEventByIdParams) {
    try {
      const eventId = httpParams.params.eventId

      await isValidIdSchema.parseAsync({ eventId })

      const tickets = await this.findAllTicketsByEventIdUseCase.execute(eventId)

      return ok(tickets)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          messsage: error.errors[0].message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
