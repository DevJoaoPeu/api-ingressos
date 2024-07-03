import { ok, serverError } from "@/erros/helpers/http"
import { FindTicketByTypeUseCase } from "./find-ticket-by-type-use-case"
import { IParamsFindAllTicketId } from "../type"

export class FindTicketByTypeController {
  constructor(
    private readonly findTicketByTypeUseCase: FindTicketByTypeUseCase
  ) {}
  async execute(httpRequest: IParamsFindAllTicketId) {
    try {
      const params = httpRequest.params

      const ticket = await this.findTicketByTypeUseCase.execute(params)

      return ok(ticket)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
