import { badRequest, ok, serverError } from "@/erros/http"
import { DeleteEventUseCase } from "./delete-event-use-case"
import { IEventByIdParams } from "../types"
import { eventNotFoundResponse } from "@/erros/validation"
import { isValidIdSchema } from "@/schemas/event/event"
import { ZodError } from "zod"

export class DeleteEventController {
  constructor(private readonly deleteEventUseCase: DeleteEventUseCase) {}

  async execute(httpRequest: IEventByIdParams) {
    try {
      const eventId = httpRequest.params.eventId

      await isValidIdSchema.parseAsync({ eventId })

      const deleteEvent = await this.deleteEventUseCase.execute(eventId)

      if (!deleteEvent) {
        return eventNotFoundResponse()
      }

      return ok(deleteEvent)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          error: error.errors[0].message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
