import { badRequest, ok, serverError } from "../../erros/http"
import { IUpdateEventParams } from "../types"
import { UpdateEventUseCase } from "./update-event-use-case"
import { updateEventSchema } from "../../schemas/event"
import { eventNotFoundResponse } from "../../erros/validation"
import { ZodError } from "zod"
import { DateInvalid } from "../../erros/errors"

export class UpdateEventController {
  constructor(private readonly updateEventUseCase: UpdateEventUseCase) {}
  async execute(httpRequest: IUpdateEventParams) {
    try {
      const eventId = httpRequest.params.eventId
      const params = httpRequest.body

      await updateEventSchema.parseAsync(params)

      const event = await this.updateEventUseCase.execute(eventId, params)

      if (!event) {
        return eventNotFoundResponse()
      }

      return ok(event)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        })
      }

      if (error instanceof DateInvalid) {
        return badRequest({
          message: error.message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
