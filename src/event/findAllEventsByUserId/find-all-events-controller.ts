import { badRequest, ok, serverError } from "@/erros/helpers/http"
import { eventNotFoundResponse } from "@/erros/helpers/validation"
import { FindAllEventsByUserIdUseCase } from "./find-all-events-use-case"
import { IUserByIdParams } from "@/user/type"
import { isValidIdSchema } from "@/schemas/user/user"
import { ZodError } from "zod"

export class FindAllEventsByUserIdController {
  constructor(
    private readonly findAllEventsByUserIdUseCase: FindAllEventsByUserIdUseCase
  ) {}
  async execute(httpRequest: IUserByIdParams) {
    try {
      const userId = httpRequest.params.userId

      await isValidIdSchema.parseAsync({ userId })

      const events = await this.findAllEventsByUserIdUseCase.execute(userId)

      if (!events) {
        return eventNotFoundResponse()
      }

      return ok(events)
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
