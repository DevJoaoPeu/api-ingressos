import { TicketType } from "@prisma/client"
import { ok, serverError } from "../../erros/http"
import { ListAllTicketsUseCase } from "./list-all-tickets-use-case"

interface IhttpParams {
  params: {
    eventId: string
    type: TicketType
  }
}
export class ListAllTicketsController {
  constructor(private readonly listAllTicketsUseCase: ListAllTicketsUseCase) {}
  async execute(httpParams: IhttpParams) {
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
