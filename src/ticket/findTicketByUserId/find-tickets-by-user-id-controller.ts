import { ok, serverError } from "@/erros/helpers/http"
import { IUserByIdParams } from "@/user/type"
import { FindTicketByUserIdUseCase } from "./find-tickets-by-user-id-use-case"
import { checkIfIdIsValid, invalidIdResponse } from "@/erros/helpers/validation"

export class FindTicketByUserIdController {
  constructor(
    private readonly findTicketByUserIdUseCase: FindTicketByUserIdUseCase
  ) {}
  async execute(httpRequest: IUserByIdParams) {
    try {
      const params = httpRequest.params.userId

      const idIsValid = checkIfIdIsValid(params)

      if (!idIsValid) {
        return invalidIdResponse()
      }

      const tickets = await this.findTicketByUserIdUseCase.execute(params)

      return ok(tickets)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
