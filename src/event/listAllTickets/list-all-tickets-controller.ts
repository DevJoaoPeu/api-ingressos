import { ok, serverError } from "src/erros/http"
import { ListAllTicketsUseCase } from "./list-all-tickets-use-case"

export class ListAllTicketsController {
  constructor(private readonly listAllTicketsUseCase: ListAllTicketsUseCase) {}
  async execute(httpParams) {
    try {
      const params = httpParams.params

      const list = await this.listAllTicketsUseCase.execute(params)

      return ok(list)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
