import { ok, serverError } from "@/erros/helpers/http"
import { IEventByIdParams } from "../types"
import { FindEventByIdUseCase } from "./find-event-by-id-use-case"
import {
  checkIfIdIsValid,
  eventNotFoundResponse,
} from "@/erros/helpers/validation"

export class FindEventByIdController {
  constructor(private readonly findEventByIdUseCase: FindEventByIdUseCase) {}

  async execute(httpRequest: IEventByIdParams) {
    try {
      const params = httpRequest.params.eventId

      const checkId = checkIfIdIsValid(params)

      if (!checkId) {
        return eventNotFoundResponse()
      }

      const event = await this.findEventByIdUseCase.execute(params)

      if (!event) {
        return eventNotFoundResponse()
      }

      return ok(event)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
