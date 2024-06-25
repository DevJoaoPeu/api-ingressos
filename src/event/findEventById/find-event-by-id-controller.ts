import { ok, serverError } from "@/erros/helpers/http"
import { IEventByIdParams } from "../types"
import { FindEventByIdUseCase } from "./find-event-by-id-use-case"
import { eventNotFoundResponse } from "@/erros/helpers/validation"

export class FindEventByIdController {
  constructor(private readonly findEventByIdUseCase: FindEventByIdUseCase) {
    this.findEventByIdUseCase = findEventByIdUseCase
  }

  async execute(httpRequest: IEventByIdParams) {
    try {
      const params = httpRequest.params.userId

      const event = await this.findEventByIdUseCase.execute(params)

      if (!params) {
        return eventNotFoundResponse()
      }

      return ok(event)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
