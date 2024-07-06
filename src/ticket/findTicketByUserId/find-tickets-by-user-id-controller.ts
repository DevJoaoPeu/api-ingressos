import { badRequest, ok, serverError } from "@/erros/http"
import { IUserByIdParams } from "@/user/type"
import { FindTicketByUserIdUseCase } from "./find-tickets-by-user-id-use-case"
import { isValidIdSchema } from "@/schemas/user/user"
import { ZodError } from "zod"

export class FindTicketByUserIdController {
  constructor(
    private readonly findTicketByUserIdUseCase: FindTicketByUserIdUseCase
  ) {}
  async execute(httpRequest: IUserByIdParams) {
    try {
      const userId = httpRequest.params.userId

      await isValidIdSchema.parseAsync(userId)

      const tickets = await this.findTicketByUserIdUseCase.execute(userId)

      return ok(tickets)
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
