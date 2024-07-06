import { badRequest, ok, serverError } from "@/erros/helpers/http"
import { IEventByIdParams } from "../types"
import { FindEventByIdUseCase } from "./find-event-by-id-use-case"
import { eventNotFoundResponse } from "@/erros/helpers/validation"
import { isValidIdSchema } from "@/schemas/event/event"
import { ZodError } from "zod"

export class FindEventByIdController {
  constructor(private readonly findEventByIdUseCase: FindEventByIdUseCase) {}

  async execute(httpRequest: IEventByIdParams) {
    try {
      const eventId = httpRequest.params.eventId

      await isValidIdSchema.parseAsync({ eventId })

      const event = await this.findEventByIdUseCase.execute(eventId)

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
      console.error(error)
      return serverError()
    }
  }
}
