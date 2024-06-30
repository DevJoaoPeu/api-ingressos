import { ok, serverError } from "@/erros/helpers/http"
import { DeleteEventUseCase } from "./delete-event-use-case"
import { IEventByIdParams } from "../types"
import {
  checkIfIdIsValid,
  eventNotFoundResponse,
  invalidIdResponse,
} from "@/erros/helpers/validation"

export class DeleteEventController {
  constructor(private readonly deleteEventUseCase: DeleteEventUseCase) {}

  async execute(httpRequest: IEventByIdParams) {
    try {
      const userId = httpRequest.params.eventId

      const idIsValid = checkIfIdIsValid(userId)

      if (idIsValid) {
        return invalidIdResponse()
      }

      const deleteEvent = await this.deleteEventUseCase.execute(userId)

      if (!deleteEvent) {
        return eventNotFoundResponse()
      }

      return ok(deleteEvent)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
