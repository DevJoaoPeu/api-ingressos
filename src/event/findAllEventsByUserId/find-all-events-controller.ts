import { ok, serverError } from "@/erros/helpers/http"
import { IEventByIdParams } from "../types"
import {
  checkIfIdIsValid,
  eventNotFoundResponse,
  invalidIdResponse,
} from "@/erros/helpers/validation"
import { FindAllEventsByUserIdUseCase } from "./find-all-events-use-case"

export class FindAllEventsByUserIdController {
  constructor(
    private readonly findAllEventsByUserIdUseCase: FindAllEventsByUserIdUseCase
  ) {
    this.findAllEventsByUserIdUseCase = findAllEventsByUserIdUseCase
  }
  async execute(httpRequest: IEventByIdParams) {
    try {
      const params = httpRequest.params.userId

      const idIsValid = checkIfIdIsValid(params)

      if (!idIsValid) {
        return invalidIdResponse()
      }

      const events = await this.findAllEventsByUserIdUseCase.execute(params)

      if (!events) {
        return eventNotFoundResponse()
      }

      return ok(events)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
