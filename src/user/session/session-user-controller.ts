import { badRequest, ok, serverError } from "../../erros/http"
import { SessionUserUseCase } from "./session-user-use-case"
import { sessionUserSchema } from "../../schemas/user"
import { ZodError } from "zod"
import { EmailOrPasswordIncorrect } from "../../erros/errors"
import { ISessionHttpRequest } from "../type"

export class SessionUserController {
  constructor(private readonly sessionUserUseCase: SessionUserUseCase) {}

  async execute(httpRequest: ISessionHttpRequest) {
    try {
      const params = httpRequest.body

      await sessionUserSchema.parseAsync(params)
      const user = await this.sessionUserUseCase.execute(params)

      return ok(user)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        })
      }

      if (error instanceof EmailOrPasswordIncorrect) {
        return badRequest({
          message: error.message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
